import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { PackagesSection, SelectedPackageOrder } from './components/PackagesSection';
import { CoverageAndProofSection } from './components/CoverageAndProofSection';
import { SurveyBookingSection } from './components/SurveyBookingSection';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedOrder, setSelectedOrder] = useState<SelectedPackageOrder | null>(null);
  const [preselectedCity, setPreselectedCity] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectPackage = (order: SelectedPackageOrder) => {
    setSelectedOrder(order);
    scrollToSection('konsultasi');
  };

  const handleSelectCityForSurvey = (city: string) => {
    setPreselectedCity(city);
    scrollToSection('konsultasi');
  };

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-slate-100 flex flex-col">
      <Navbar onBookSurvey={() => scrollToSection('konsultasi')} />

      <main className="flex-1">
        <HeroSection
          onExplorePackages={() => scrollToSection('paket')}
          onBookSurvey={() => scrollToSection('konsultasi')}
        />
        <ServicesSection />
        <PackagesSection onSelectPackage={handleSelectPackage} />
        <CoverageAndProofSection onSelectCityForSurvey={handleSelectCityForSurvey} />
        <SurveyBookingSection
          selectedOrder={selectedOrder}
          preselectedCity={preselectedCity}
        />
      </main>

      <Footer />
    </div>
  );
}
