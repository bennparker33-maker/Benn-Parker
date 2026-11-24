import { useState } from 'react';
import { Camera } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  title: string;
  className?: string;
}

export function SafeImage({ src, alt, title, className = '' }: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-[#131c2e] to-slate-950 border border-slate-800 text-slate-400 p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <Camera className="w-10 h-10 text-red-500/80 mb-3" strokeWidth={1.5} />
        <p className="text-sm font-medium text-slate-200">{title}</p>
        <p className="text-xs text-slate-500 mt-1">Dokumentasi Instalasi Hana CCTV Banten</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
