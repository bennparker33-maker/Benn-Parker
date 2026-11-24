import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onBookSurvey: () => void;
}

const NAV_LINKS = [
  { href: '#layanan', label: 'Layanan' },
  { href: '#paket', label: 'Paket Harga' },
  { href: '#area-banten', label: 'Area Banten' },
  { href: '#garansi', label: 'Garansi' },
];

export function Navbar({ onBookSurvey }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  const handleCtaClick = () => {
    setMobileOpen(false);
    onBookSurvey();
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0a0f1a]/95 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single clean text wordmark */}
        <a
          href="#"
          className="text-lg font-extrabold tracking-tight text-white whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-sm"
        >
          HANA <span className="text-red-500">CCTV</span>
        </a>

        {/* Zone 2: 4 concise single-line nav links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300" aria-label="Navigasi utama">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-white transition-colors duration-150 whitespace-nowrap shrink-0 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-sm py-1"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action + mobile menu button */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={handleCtaClick}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-red-600 hover:bg-red-500 active:bg-red-700 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0f1a]"
          >
            Jadwalkan Survei
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-slate-800 text-slate-200 hover:bg-slate-900 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-800 bg-[#0d1424] px-4 py-4 space-y-2">
          <nav className="flex flex-col space-y-1" aria-label="Navigasi seluler">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className="px-3 py-3 text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800/60 rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-slate-800">
            <button
              type="button"
              onClick={handleCtaClick}
              className="w-full py-3 px-4 text-sm font-semibold text-white bg-red-600 hover:bg-red-500 rounded-lg transition-colors cursor-pointer"
            >
              Jadwalkan Survei Gratis
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
