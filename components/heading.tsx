export default function ScrollXHeading({ className }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center justify-center ${className ?? ""}`}>
      <div className="h-[72%] overflow-hidden">
        <img
          src="/SIN%20FONDO.png"
          alt=""
          className="h-[145%] w-auto object-contain object-top"
        />
      </div>
      <span className="mt-2 font-bold text-[0.62rem] text-white leading-none tracking-[0.05em] sm:text-[0.72rem]">
        SECRISK
      </span>
    </div>
  );
}
