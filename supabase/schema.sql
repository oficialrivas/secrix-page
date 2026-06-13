create extension if not exists pgcrypto;

create schema if not exists auth;

create or replace function auth.role()
returns text
language sql
stable
as $$
  select coalesce(
    nullif(current_setting('request.jwt.claim.role', true), ''),
    nullif(current_setting('request.jwt.claims', true), '')::json ->> 'role'
  );
$$;

do $$
begin
  if not exists (select from pg_roles where rolname = 'anon') then
    create role anon nologin;
  end if;

  if not exists (select from pg_roles where rolname = 'service_role') then
    create role service_role nologin bypassrls;
  end if;
end
$$;

create table if not exists public.articles (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  description text,
  category text not null,
  author text not null default 'Secrix Team',
  image text not null,
  content text not null,
  published boolean not null default true,
  published_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists articles_published_at_idx on public.articles (published, published_at desc);
create index if not exists articles_slug_idx on public.articles (slug);

alter table public.articles enable row level security;

grant usage on schema public to anon, service_role;
grant usage on schema auth to anon, service_role;
grant execute on function auth.role() to anon, service_role;
grant select on public.articles to anon;
grant all on public.articles to service_role;

drop policy if exists "Published articles are readable" on public.articles;
create policy "Published articles are readable"
on public.articles for select
using (published = true);

drop policy if exists "Service role can manage articles" on public.articles;
create policy "Service role can manage articles"
on public.articles for all
using (auth.role() = 'service_role')
with check (auth.role() = 'service_role');

create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists articles_set_updated_at on public.articles;
create trigger articles_set_updated_at
before update on public.articles
for each row execute function public.set_updated_at();
