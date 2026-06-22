"use client";

import type { ProjectData } from "./argent-loop-infinite-slider";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: ProjectData;
}

export function ProfileModal({ isOpen, onClose, data }: ProfileModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-[#060a16]/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative z-10 w-full max-w-lg max-h-[85vh] overflow-y-auto bg-[#060a16]/95 backdrop-blur-[18px] border border-white/10 rounded-2xl p-6 md:p-8">
        <button
          className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider border-b border-white/40 hover:border-[#f3de6c]/78 pb-0.5"
          onClick={onClose}
          aria-label="Cerrar"
        >
          Show less
        </button>
        <div className="space-y-4">
          <p className="text-[#d5b439]/90 font-medium text-sm md:text-base">
            {data.role}
          </p>
          <h2 className="text-white font-medium text-2xl md:text-4xl leading-tight tracking-tight">
            {data.name}
          </h2>
          <div className="border-t border-white/10 pt-4">
            <p className="text-white/70 text-base md:text-lg leading-relaxed font-light">
              {data.summary}
            </p>
            <p className="mt-4 text-white/60 text-base leading-relaxed font-light">
              {data.details}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
