import { ArrowRight } from 'lucide-react';
import { ASSETS } from '../data/cctvCatalog';
import { SafeImage } from './SafeImage';

interface HeroSectionProps {
  onExplorePackages: () => void;
  onBookSurvey: () => void;
}

const KEY_METRICS = [
  { value: '1.424+', label: 'Titik Lokasi Terpasang di Banten' },
  { value: '2 Tahun', label: 'Garansi Resmi Unit & Jasa Instalasi' },
  { value: '1 Hari', label: 'Pengerjaan Rapi Standar Perkantoran' },
  { value: 'Rp 0', label: 'Biaya Survei & Konsultasi Titik Kamera' },
];

export function HeroSection({ onExplorePackages, onBookSurvey }: HeroSectionProps) {
  return (
    <section className="relative pt-10 pb-14 lg:pt-16 lg:pb-20 border-b border-slate-800/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="text-xs sm:text-sm font-medium text-slate-400 tracking-wide mb-4">
              Hana CCTV Banten
              <span className="mx-2 text-slate-600" aria-hidden="true">·</span>
              Serang
              <span className="mx-2 text-slate-600" aria-hidden="true">·</span>
              Cilegon
              <span className="mx-2 text-slate-600" aria-hidden="true">·</span>
              Tangerang
              <span className="mx-2 text-slate-600" aria-hidden="true">·</span>
              Pandeglang
              <span className="mx-2 text-slate-600" aria-hidden="true">·</span>
              Lebak
            </p>

            <h1 className="text-[clamp(2.25rem,4vw,3.65rem)] font-extrabold tracking-tight leading-[1.1] text-white text-balance">
              Pasang CCTV Bergaransi Resmi untuk Rumah &amp; Bisnis Anda
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              Teknisi berpengalaman dengan instalasi jalur kabel terstruktur, kualitas rekaman tajam
              siang maupun malam berwarna, serta akses pantau langsung dari ponsel di mana saja.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onExplorePackages}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm sm:text-base font-semibold text-white bg-red-600 hover:bg-red-500 active:bg-red-700 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0f1a]"
              >
                <span>Lihat Paket Pemasangan</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onBookSurvey}
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-200 hover:text-white border border-slate-700 hover:border-slate-500 bg-slate-900/50 hover:bg-slate-900 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                Konsultasi Titik Kamera
              </button>
            </div>

            <div className="mt-7 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-400">
              <span>Unit Resmi Hikvision, Dahua &amp; Ezviz</span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span>Pembayaran Setelah Uji Coba Selesai</span>
            </div>
          </div>

          {/* Right Column: Dominant 16:9 / Full-Height Visual Carrier */}
          <div className="lg:col-span-6 flex">
            <div className="relative w-full min-h-[280px] sm:min-h-[360px] lg:min-h-[440px] rounded-xl overflow-hidden border border-slate-800 bg-[#111827]">
              <SafeImage
                src={ASSETS.hero}
                alt="Pemasangan kamera CCTV outdoor matte-black di fasad bangunan modern oleh teknisi Hana CCTV Banten"
                title="Instalasi Kamera Eksterior Tahan Cuaca"
                className="w-full h-full lg:h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a]/90 via-[#0a0f1a]/25 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                <div>
                  <p className="text-xs font-medium text-red-400 mb-1">Standar Pemasangan Lapangan</p>
                  <p className="text-sm sm:text-base font-semibold text-white">
                    Kamera IP67 tahan panas &amp; hujan dengan jalur pipa pelindung rapi
                  </p>
                </div>
                <p className="font-mono text-xs text-slate-300 tabular-nums whitespace-nowrap shrink-0">
                  1080p – 4K Ultra HD
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Trust Strip Directly Below Hero Split */}
        <div className="mt-10 lg:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-px bg-slate-800/70 border border-slate-800/80 rounded-xl overflow-hidden">
          {KEY_METRICS.map((metric) => (
            <div key={metric.label} className="bg-[#111827] px-5 py-5 sm:px-6 sm:py-6">
              <p className="font-mono text-2xl sm:text-3xl font-semibold text-white tabular-nums tracking-tight">
                {metric.value}
              </p>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-400 leading-snug">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
