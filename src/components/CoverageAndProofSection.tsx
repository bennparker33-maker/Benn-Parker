import { useState } from 'react';
import { BANTEN_REGIONS, CLIENT_PROOFS } from '../data/cctvCatalog';

interface CoverageAndProofSectionProps {
  onSelectCityForSurvey: (city: string) => void;
}

const WARRANTY_COMMITMENTS = [
  {
    title: 'Garansi Unit Resmi 2 Tahun',
    detail:
      'Kamera, DVR/NVR, dan harddisk surveillance dilindungi garansi penggantian resmi pabrik apabila terjadi kendala perangkat keras.',
  },
  {
    title: 'Garansi Jasa Pemasangan 1 Tahun',
    detail:
      'Kunjungan perbaikan gratis tanpa biaya transport jika terjadi konektor longgar, tampilan kamera buram, atau putus koneksi aplikasi ponsel.',
  },
  {
    title: 'Bayar Setelah Uji Coba Selesai',
    detail:
      'Pelunasan dilakukan di lokasi setelah seluruh titik kamera menyala, hasil rekaman jernih, dan aplikasi HP terhubung di perangkat Anda.',
  },
];

export function CoverageAndProofSection({
  onSelectCityForSurvey,
}: CoverageAndProofSectionProps) {
  const [selectedRegionId, setSelectedRegionId] = useState<string>(BANTEN_REGIONS[0].id);

  const activeRegion =
    BANTEN_REGIONS.find((region) => region.id === selectedRegionId) ?? BANTEN_REGIONS[0];

  return (
    <>
      {/* Banten Regional Coverage */}
      <section id="area-banten" className="py-16 lg:py-24 border-b border-slate-800/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <p className="text-sm font-semibold text-red-500 mb-2">Cakupan Teknisi Lapangan</p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white text-balance">
                Melayani Seluruh Wilayah Provinsi Banten &amp; Sekitarnya
              </h2>
              <p className="mt-3 text-base text-slate-400 leading-relaxed">
                Pilih wilayah Anda untuk melihat jangkauan kecamatan, estimasi waktu tiba teknisi
                survei, serta jumlah proyek aktif yang telah kami tangani.
              </p>

              {/* Interactive Region Selector Tabs */}
              <div className="mt-6 flex flex-col gap-2" role="tablist" aria-label="Pilih wilayah Banten">
                {BANTEN_REGIONS.map((region) => {
                  const isActive = region.id === selectedRegionId;
                  return (
                    <button
                      key={region.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setSelectedRegionId(region.id)}
                      className={`w-full text-left px-4 py-3.5 rounded-lg border transition-colors duration-150 flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 ${
                        isActive
                          ? 'bg-[#151e31] border-red-500/70 text-white'
                          : 'bg-[#111827] border-slate-800/80 text-slate-300 hover:border-slate-700 hover:text-white'
                      }`}
                    >
                      <span className="font-semibold text-sm sm:text-base">{region.city}</span>
                      <span className="font-mono text-xs text-slate-400 tabular-nums whitespace-nowrap shrink-0">
                        {region.installedSites} Lokasi
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Region Detail Panel */}
            <div className="lg:col-span-7 bg-[#111827] border border-slate-800/90 rounded-xl p-6 sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-4 pb-6 border-b border-slate-800/80">
                <div>
                  <p className="text-xs font-medium text-red-400 mb-1">Area Layanan Terpilih</p>
                  <h3 className="text-2xl font-bold text-white">{activeRegion.city}</h3>
                </div>
                <button
                  type="button"
                  onClick={() => onSelectCityForSurvey(activeRegion.city)}
                  className="px-4 py-2 text-sm font-semibold text-white bg-red-600 hover:bg-red-500 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
                >
                  Pesan Survei di {activeRegion.city}
                </button>
              </div>

              <dl className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <dt className="text-xs text-slate-400">Estimasi Tiba Teknisi</dt>
                  <dd className="mt-1 font-mono text-lg font-semibold text-white tabular-nums">
                    {activeRegion.responseEstimate}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-slate-400">Proyek Terpasang</dt>
                  <dd className="mt-1 font-mono text-lg font-semibold text-white tabular-nums">
                    {activeRegion.installedSites} Lokasi
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-slate-400">Biaya Survei &amp; Cek Titik</dt>
                  <dd className="mt-1 font-mono text-lg font-semibold text-emerald-400 tabular-nums">
                    {activeRegion.surveyFee}
                  </dd>
                </div>
              </dl>

              <div className="mt-6 pt-6 border-t border-slate-800/80">
                <p className="text-xs font-medium text-slate-400 mb-1.5">
                  Kecamatan &amp; Kawasan Prioritas
                </p>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                  {activeRegion.areaFocus}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warranty & Client Proof (Claim-to-Proof Adjacent) */}
      <section id="garansi" className="py-16 lg:py-24 border-b border-slate-800/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-red-500 mb-2">Jaminan Layanan &amp; Testimoni</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white text-balance">
              Garansi Tertulis dan Hasil Kerja Nyata di Lapangan
            </h2>
          </div>

          {/* 3 Warranty Pillars */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {WARRANTY_COMMITMENTS.map((item, idx) => (
              <div
                key={item.title}
                className="bg-[#111827] border border-slate-800/90 rounded-xl p-6"
              >
                <p className="font-mono text-xs text-red-400 mb-2 tabular-nums">
                  0{idx + 1}. Komitmen Garansi
                </p>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>

          {/* Attributable Client Proofs */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {CLIENT_PROOFS.map((proof) => (
              <blockquote
                key={proof.id}
                className="bg-[#0e1525] border border-slate-800/80 rounded-xl p-6 flex flex-col justify-between"
              >
                <p className="text-sm text-slate-300 leading-relaxed">
                  &ldquo;{proof.beforeAfter}&rdquo;
                </p>

                <footer className="mt-6 pt-4 border-t border-slate-800/80">
                  <p className="text-sm font-semibold text-white">{proof.name}</p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {proof.role} · {proof.organization}
                  </p>
                  <p className="text-xs text-slate-500 mt-1 font-mono">
                    {proof.district}
                    <span className="mx-1.5 text-slate-700" aria-hidden="true">·</span>
                    {proof.packageUsed}
                  </p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
