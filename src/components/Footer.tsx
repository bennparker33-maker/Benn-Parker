export function Footer() {
  return (
    <footer className="bg-[#070b14] border-t border-slate-800/80 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div>
            <p className="text-lg font-extrabold tracking-tight text-white">
              HANA <span className="text-red-500">CCTV</span> BANTEN
            </p>
            <p className="mt-1.5 text-sm text-slate-400">
              Layanan Pemasangan &amp; Perawatan CCTV Bergaransi Resmi di Provinsi Banten.
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-6 text-sm text-slate-400" aria-label="Navigasi footer">
            <a href="#layanan" className="hover:text-white transition-colors">
              Layanan
            </a>
            <a href="#paket" className="hover:text-white transition-colors">
              Paket Harga
            </a>
            <a href="#area-banten" className="hover:text-white transition-colors">
              Area Banten
            </a>
            <a href="#garansi" className="hover:text-white transition-colors">
              Garansi
            </a>
            <a href="#konsultasi" className="hover:text-white transition-colors">
              Konsultasi
            </a>
          </nav>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Hana CCTV Banten. Seluruh hak cipta dilindungi.
          </p>
          <p>
            Serang · Cilegon · Tangerang · Tangerang Selatan · Pandeglang · Lebak
          </p>
        </div>
      </div>
    </footer>
  );
}
