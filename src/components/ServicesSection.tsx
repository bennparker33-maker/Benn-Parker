import { ASSETS } from '../data/cctvCatalog';
import { SafeImage } from './SafeImage';

export function ServicesSection() {
  return (
    <section id="layanan" className="py-16 lg:py-24 border-b border-slate-800/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-red-500 mb-2">Layanan Terpadu</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white text-balance">
            Instalasi Rapi, Perangkat Original, dan Dukungan Teknis Cepat
          </h2>
          <p className="mt-3 text-base text-slate-400 leading-relaxed">
            Setiap proyek dimulai dari pemetaan sudut buta agar kamera menangkap area krusial
            seperti gerbang, kasir, area parkir, dan gudang secara efektif.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Card 01: Wide Featured Capability */}
          <div className="lg:col-span-7 bg-[#111827] border border-slate-800/90 rounded-xl overflow-hidden flex flex-col">
            <div className="aspect-[16/9] sm:aspect-[16/10] w-full overflow-hidden bg-slate-900">
              <SafeImage
                src={ASSETS.technician}
                alt="Teknisi Hana CCTV Banten merapikan kabel jaringan dan mengonfigurasi monitor NVR kantor"
                title="01. Instalasi Kabel Terstruktur"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white">
                  01. Pemasangan Kabel Terstruktur &amp; Terlindungi
                </h3>
                <p className="mt-2.5 text-sm sm:text-base text-slate-300 leading-relaxed">
                  Jalur kabel ditarik rapi melalui plafon atau pipa conduit PVC tahan cuaca sehingga
                  aman dari gigitan tikus, hujan, serta tidak mengganggu estetika interior bangunan
                  Anda.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-slate-800/80 flex flex-wrap gap-x-4 gap-y-1 text-xs sm:text-sm text-slate-400">
                <span>Pipa Conduit &amp; Ducting Rapi</span>
                <span className="text-slate-600" aria-hidden="true">·</span>
                <span>Konektor BNC &amp; RJ45 Standar Industri</span>
                <span className="text-slate-600" aria-hidden="true">·</span>
                <span>Box Panel Pelindung Power Supply</span>
              </div>
            </div>
          </div>

          {/* Right Stack: Cards 02 & 03 */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Card 02: Mobile Monitoring */}
            <div className="bg-[#111827] border border-slate-800/90 rounded-xl overflow-hidden flex flex-col flex-1">
              <div className="aspect-[16/9] w-full overflow-hidden bg-slate-900">
                <SafeImage
                  src={ASSETS.mobile}
                  alt="Tampilan pantau CCTV 4 kamera secara langsung di layar smartphone dan tablet"
                  title="02. Pantau Langsung via Ponsel"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white">
                  02. Pantau Langsung dari Ponsel &amp; Komputer
                </h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  Konfigurasi aplikasi Android, iOS, hingga layar monitor resepsionis lengkap
                  dengan notifikasi deteksi gerak dan putar ulang rekaman harian.
                </p>
              </div>
            </div>

            {/* Card 03: Hardware & Maintenance */}
            <div className="bg-[#111827] border border-slate-800/90 rounded-xl overflow-hidden flex flex-col sm:flex-row lg:flex-col xl:flex-row">
              <div className="sm:w-44 lg:w-full xl:w-48 shrink-0 aspect-[4/3] sm:aspect-auto overflow-hidden bg-slate-900">
                <SafeImage
                  src={ASSETS.hardware}
                  alt="Kamera CCTV turret dan bullet bersama perekam NVR original bergaransi resmi"
                  title="03. Perangkat Original Bergaransi"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6 flex flex-col justify-center">
                <h3 className="text-lg font-bold text-white">
                  03. Perangkat Resmi &amp; Servis Perbaikan
                </h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  Selain paket pasang baru, tim kami melayani bongkar-pasang pindahan, ganti harddisk
                  rekaman, dan perbaikan CCTV lama yang mati atau buram.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
