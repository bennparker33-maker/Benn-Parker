import { FormEvent, useEffect, useState } from 'react';
import { CheckCircle2, ExternalLink, RotateCcw } from 'lucide-react';
import { BANTEN_REGIONS, CCTV_PACKAGES, formatRupiah } from '../data/cctvCatalog';
import { SelectedPackageOrder } from './PackagesSection';

interface SurveyBookingSectionProps {
  selectedOrder: SelectedPackageOrder | null;
  preselectedCity: string | null;
}

interface FormErrors {
  name?: string;
  phone?: string;
  city?: string;
}

const PROPERTY_TYPES = [
  'Rumah Tinggal',
  'Ruko / Toko / Apotek',
  'Kantor / Klinik',
  'Gudang / Pabrik / Kawasan Industri',
  'Perumahan / Fasilitas Umum',
];

const WHATSAPP_ADMIN_NUMBER = '6281288994455';

export function SurveyBookingSection({
  selectedOrder,
  preselectedCity,
}: SurveyBookingSectionProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState(BANTEN_REGIONS[0].city);
  const [propertyType, setPropertyType] = useState(PROPERTY_TYPES[0]);
  const [packageLabel, setPackageLabel] = useState(
    `${CCTV_PACKAGES[1].name} — Analog HD (${formatRupiah(CCTV_PACKAGES[1].basePriceHd)})`
  );
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    phone: string;
    city: string;
    propertyType: string;
    packageLabel: string;
    notes: string;
    whatsappUrl: string;
  } | null>(null);

  useEffect(() => {
    if (selectedOrder) {
      const sysLabel =
        selectedOrder.systemType === 'hd-analog' ? 'Analog HD' : 'IP Camera PoE';
      setPackageLabel(
        `${selectedOrder.packageName} — ${sysLabel} (${formatRupiah(selectedOrder.price)})`
      );
      setSubmittedData(null);
    }
  }, [selectedOrder]);

  useEffect(() => {
    if (preselectedCity) {
      setCity(preselectedCity);
      setSubmittedData(null);
    }
  }, [preselectedCity]);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!name.trim() || name.trim().length < 2) {
      nextErrors.name = 'Masukkan nama lengkap Anda (minimal 2 karakter).';
    }
    const cleanPhone = phone.replace(/[\s\-()]/g, '');
    if (!/^(\+?62|0)8[1-9][0-9]{7,11}$/.test(cleanPhone)) {
      nextErrors.phone = 'Masukkan nomor WhatsApp aktif Indonesia (contoh: 081234567890).';
    }
    if (!city) {
      nextErrors.city = 'Pilih wilayah lokasi pemasangan di Banten.';
    }
    return nextErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const message = [
      `Halo Hana CCTV Banten, saya ingin menjadwalkan survei/pemasangan CCTV.`,
      `Nama: ${name.trim()}`,
      `No. WA: ${phone.trim()}`,
      `Wilayah: ${city}`,
      `Jenis Lokasi: ${propertyType}`,
      `Pilihan Paket: ${packageLabel}`,
      notes.trim() ? `Catatan: ${notes.trim()}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    const whatsappUrl = `https://wa.me/${WHATSAPP_ADMIN_NUMBER}?text=${encodeURIComponent(message)}`;

    setSubmittedData({
      name: name.trim(),
      phone: phone.trim(),
      city,
      propertyType,
      packageLabel,
      notes: notes.trim(),
      whatsappUrl,
    });
  };

  const handleReset = () => {
    setSubmittedData(null);
    setErrors({});
  };

  return (
    <section id="konsultasi" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Context */}
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold text-red-500 mb-2">Konsultasi &amp; Survei Gratis</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white text-balance">
              Jadwalkan Kunjungan Teknisi atau Minta Penawaran Resmi
            </h2>
            <p className="mt-3 text-base text-slate-300 leading-relaxed">
              Isi data singkat lokasi Anda. Tim koordinator Banten kami akan menghubungi melalui
              WhatsApp untuk menentukan jadwal survei tanpa biaya serta estimasi kebutuhan panjang
              kabel yang akurat.
            </p>

            <dl className="mt-8 space-y-5 pt-6 border-t border-slate-800/80">
              <div>
                <dt className="text-xs font-medium text-slate-400">Jam Operasional Teknisi</dt>
                <dd className="mt-1 text-sm sm:text-base font-medium text-white">
                  Senin – Minggu · 08.00 – 20.00 WIB
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-slate-400">Kantor Layanan Banten</dt>
                <dd className="mt-1 text-sm sm:text-base font-medium text-white">
                  Jl. Raya Serang–Cilegon Km. 4, Kota Serang, Banten
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-slate-400">Hotline WhatsApp &amp; Telepon</dt>
                <dd className="mt-1 font-mono text-sm sm:text-base font-medium text-white tabular-nums">
                  +62 812-8899-4455
                </dd>
              </div>
            </dl>
          </div>

          {/* Right Form / Confirmation Card */}
          <div className="lg:col-span-7 bg-[#111827] border border-slate-800/90 rounded-xl p-6 sm:p-8">
            {submittedData ? (
              <div className="space-y-6">
                <div className="flex items-start gap-3.5">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Ringkasan Permintaan Survei Siap Dikirim
                    </h3>
                    <p className="mt-1 text-sm text-slate-300">
                      Data Anda telah tervalidasi. Klik tombol di bawah untuk meneruskan rincian ini
                      langsung ke WhatsApp admin teknis Hana CCTV Banten.
                    </p>
                  </div>
                </div>

                <dl className="bg-[#0a0f1a] border border-slate-800 rounded-lg p-5 space-y-3 text-sm">
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                    <dt className="text-slate-400">Nama Pemohon</dt>
                    <dd className="font-medium text-white">{submittedData.name}</dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                    <dt className="text-slate-400">Nomor WhatsApp</dt>
                    <dd className="font-mono text-white tabular-nums">{submittedData.phone}</dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                    <dt className="text-slate-400">Wilayah &amp; Lokasi</dt>
                    <dd className="font-medium text-white">
                      {submittedData.city} · {submittedData.propertyType}
                    </dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                    <dt className="text-slate-400">Pilihan Paket</dt>
                    <dd className="font-medium text-red-400">{submittedData.packageLabel}</dd>
                  </div>
                  {submittedData.notes && (
                    <div className="pt-2 border-t border-slate-800">
                      <dt className="text-slate-400 mb-1">Catatan Tambahan</dt>
                      <dd className="text-slate-200">{submittedData.notes}</dd>
                    </div>
                  )}
                </dl>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={submittedData.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-red-600 hover:bg-red-500 rounded-lg transition-colors duration-150 whitespace-nowrap"
                  >
                    <span>Kirim via WhatsApp Sekarang</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 rounded-lg transition-colors duration-150 whitespace-nowrap cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Ubah Data Survei</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="survey-name"
                      className="block text-sm font-medium text-slate-200 mb-1.5"
                    >
                      Nama Lengkap
                    </label>
                    <input
                      id="survey-name"
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                      }}
                      placeholder="Contoh: Andi Pratama"
                      className={`w-full px-3.5 py-2.5 text-sm bg-[#0a0f1a] border rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-red-500 ${
                        errors.name ? 'border-red-500' : 'border-slate-700/80'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-red-400" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="survey-phone"
                      className="block text-sm font-medium text-slate-200 mb-1.5"
                    >
                      Nomor WhatsApp Aktif
                    </label>
                    <input
                      id="survey-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                      }}
                      placeholder="0812xxxxxxxx"
                      className={`w-full px-3.5 py-2.5 text-sm font-mono bg-[#0a0f1a] border rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-red-500 ${
                        errors.phone ? 'border-red-500' : 'border-slate-700/80'
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-xs text-red-400" role="alert">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="survey-city"
                      className="block text-sm font-medium text-slate-200 mb-1.5"
                    >
                      Wilayah Banten
                    </label>
                    <select
                      id="survey-city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#0a0f1a] border border-slate-700/80 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                      {BANTEN_REGIONS.map((region) => (
                        <option key={region.id} value={region.city}>
                          {region.city}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="survey-property"
                      className="block text-sm font-medium text-slate-200 mb-1.5"
                    >
                      Jenis Properti
                    </label>
                    <select
                      id="survey-property"
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#0a0f1a] border border-slate-700/80 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                      {PROPERTY_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="survey-package"
                    className="block text-sm font-medium text-slate-200 mb-1.5"
                  >
                    Pilihan Paket Pemasangan
                  </label>
                  <select
                    id="survey-package"
                    value={packageLabel}
                    onChange={(e) => setPackageLabel(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-[#0a0f1a] border border-slate-700/80 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    {CCTV_PACKAGES.flatMap((pkg) => [
                      <option
                        key={`${pkg.id}-hd`}
                        value={`${pkg.name} — Analog HD (${formatRupiah(pkg.basePriceHd)})`}
                      >
                        {pkg.name} — Analog HD ({formatRupiah(pkg.basePriceHd)})
                      </option>,
                      <option
                        key={`${pkg.id}-ip`}
                        value={`${pkg.name} — IP Camera PoE (${formatRupiah(pkg.basePriceIp)})`}
                      >
                        {pkg.name} — IP Camera PoE ({formatRupiah(pkg.basePriceIp)})
                      </option>,
                    ])}
                    <option value="Konsultasi Paket Custom / Servis CCTV Lama">
                      Konsultasi Paket Custom / Servis CCTV Lama
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="survey-notes"
                    className="block text-sm font-medium text-slate-200 mb-1.5"
                  >
                    Catatan Lokasi atau Pertanyaan (Opsional)
                  </label>
                  <textarea
                    id="survey-notes"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Contoh: Ruko 2 lantai di Cipocok Serang, butuh 2 kamera depan dan 2 di area kasir/gudang."
                    className="w-full px-3.5 py-2.5 text-sm bg-[#0a0f1a] border border-slate-700/80 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-red-500 resize-y"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-xs text-slate-400">
                    Survei lokasi gratis di seluruh Banten tanpa kewajiban transaksi.
                  </p>
                  <button
                    type="submit"
                    className="px-7 py-3.5 text-sm font-semibold text-white bg-red-600 hover:bg-red-500 active:bg-red-700 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
                  >
                    Konfirmasi Jadwal Survei
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
