import { useState } from 'react';
import { Check } from 'lucide-react';
import {
  CCTV_PACKAGES,
  CameraSystemType,
  CctvPackage,
  PackageCategory,
  formatRupiah,
} from '../data/cctvCatalog';

export interface SelectedPackageOrder {
  packageId: string;
  packageName: string;
  systemType: CameraSystemType;
  price: number;
}

interface PackagesSectionProps {
  onSelectPackage: (order: SelectedPackageOrder) => void;
}

const CATEGORY_TABS: { id: PackageCategory; label: string }[] = [
  { id: 'all', label: 'Semua Paket' },
  { id: 'rumah', label: 'Rumah & Ruko' },
  { id: 'bisnis', label: 'Kantor & Gudang' },
];

export function PackagesSection({ onSelectPackage }: PackagesSectionProps) {
  const [category, setCategory] = useState<PackageCategory>('all');
  const [systemType, setSystemType] = useState<CameraSystemType>('hd-analog');

  const visiblePackages = CCTV_PACKAGES.filter((pkg) =>
    category === 'all' ? true : pkg.category === category
  );

  const handleChoose = (pkg: CctvPackage) => {
    const price = systemType === 'hd-analog' ? pkg.basePriceHd : pkg.basePriceIp;
    onSelectPackage({
      packageId: pkg.id,
      packageName: pkg.name,
      systemType,
      price,
    });
  };

  return (
    <section id="paket" className="py-16 lg:py-24 border-b border-slate-800/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-red-500 mb-2">Paket Terima Beres</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white text-balance">
              Harga Paket Pemasangan CCTV Transparan Tanpa Biaya Tersembunyi
            </h2>
            <p className="mt-3 text-base text-slate-400 leading-relaxed">
              Semua paket sudah termasuk unit kamera original, perekam DVR/NVR, harddisk khusus
              CCTV, kabel, konektor, jasa pasang teknisi, dan setting pantau di ponsel.
            </p>
          </div>

          {/* Interactive Controls: Category Filter & Camera Technology */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <div
              className="inline-flex items-center p-1 bg-[#111827] border border-slate-800 rounded-lg"
              role="group"
              aria-label="Filter kategori properti"
            >
              {CATEGORY_TABS.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setCategory(tab.id)}
                  className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 ${
                    category === tab.id
                      ? 'bg-slate-800 text-white'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div
              className="inline-flex items-center p-1 bg-[#111827] border border-slate-800 rounded-lg"
              role="group"
              aria-label="Pilih tipe sistem kamera"
            >
              <button
                type="button"
                onClick={() => setSystemType('hd-analog')}
                className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 ${
                  systemType === 'hd-analog'
                    ? 'bg-red-600 text-white'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Analog HD
              </button>
              <button
                type="button"
                onClick={() => setSystemType('ip-poe')}
                className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 ${
                  systemType === 'ip-poe'
                    ? 'bg-red-600 text-white'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                IP Camera PoE
              </button>
            </div>
          </div>
        </div>

        {/* Package Grid */}
        <div
          className={`mt-10 grid grid-cols-1 md:grid-cols-2 ${
            visiblePackages.length >= 4 ? 'xl:grid-cols-4' : 'xl:grid-cols-2'
          } gap-6`}
        >
          {visiblePackages.map((pkg) => {
            const activePrice =
              systemType === 'hd-analog' ? pkg.basePriceHd : pkg.basePriceIp;

            return (
              <article
                key={pkg.id}
                className={`bg-[#111827] rounded-xl p-6 sm:p-7 flex flex-col justify-between border transition-colors duration-150 ${
                  pkg.popular
                    ? 'border-red-500/70'
                    : 'border-slate-800/90 hover:border-slate-700'
                }`}
              >
                <div>
                  <p
                    className={`text-xs font-medium mb-1.5 ${
                      pkg.popular ? 'text-red-400' : 'text-slate-400'
                    }`}
                  >
                    {pkg.popular ? 'Pilihan Terpopuler' : pkg.resolution}
                  </p>

                  <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
                  <p className="mt-1.5 text-sm text-slate-400 leading-snug min-h-[2.5rem]">
                    {pkg.targetUse}
                  </p>

                  <div className="mt-5 pb-5 border-b border-slate-800/80">
                    <p className="font-mono text-2xl sm:text-3xl font-semibold text-white tabular-nums tracking-tight">
                      {formatRupiah(activePrice)}
                    </p>
                    <p className="mt-1.5 text-xs text-slate-400 font-mono tabular-nums">
                      {systemType === 'hd-analog' ? 'Sistem Analog HD' : 'Sistem IP PoE'}
                      <span className="mx-1.5 text-slate-600" aria-hidden="true">·</span>
                      {pkg.storageLabel}
                    </p>
                  </div>

                  <ul className="mt-5 space-y-3" aria-label={`Rincian ${pkg.name}`}>
                    {pkg.specs.map((spec) => (
                      <li key={spec} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <Check className="w-4 h-4 text-red-500 shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 pt-4">
                  <button
                    type="button"
                    onClick={() => handleChoose(pkg)}
                    className={`w-full py-3 px-4 text-sm font-semibold rounded-lg transition-colors duration-150 whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 ${
                      pkg.popular
                        ? 'bg-red-600 hover:bg-red-500 text-white'
                        : 'bg-slate-800/90 hover:bg-slate-700 text-white border border-slate-700/80'
                    }`}
                  >
                    Pilih {pkg.name}
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-6 text-xs sm:text-sm text-slate-400">
          Catatan: Membutuhkan konfigurasi khusus (misalnya 32 kamera pabrik, kamera PTZ jarak jauh,
          atau penarikan kabel fiber optik antar gedung)? Sebutkan kebutuhan Anda di formulir survei
          di bawah untuk penawaran rincian resmi.
        </p>
      </div>
    </section>
  );
}
