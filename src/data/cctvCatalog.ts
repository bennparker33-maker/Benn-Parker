export type PackageCategory = 'all' | 'rumah' | 'bisnis';
export type CameraSystemType = 'hd-analog' | 'ip-poe';

export interface CctvPackage {
  id: string;
  name: string;
  category: Exclude<PackageCategory, 'all'>;
  cameraCount: number;
  resolution: string;
  basePriceHd: number;
  basePriceIp: number;
  storageLabel: string;
  cableIncludedMeters: number;
  targetUse: string;
  specs: string[];
  popular?: boolean;
}

export interface BantenRegion {
  id: string;
  city: string;
  areaFocus: string;
  responseEstimate: string;
  installedSites: number;
  surveyFee: string;
}

export interface ClientProof {
  id: string;
  name: string;
  role: string;
  organization: string;
  district: string;
  beforeAfter: string;
  packageUsed: string;
}

export const ASSETS = {
  hero: '/src/assets/images/hero_cctv_installation_1795528065429.jpg',
  technician: '/src/assets/images/technician_cctv_setup_1795528073530.jpg',
  hardware: '/src/assets/images/cctv_camera_hardware_1795528065467.jpg',
  mobile: '/src/assets/images/monitoring_mobile_view_1795528066856.jpg',
} as const;

export const CCTV_PACKAGES: CctvPackage[] = [
  {
    id: 'paket-2-kamera',
    name: 'Paket 2 Kamera',
    category: 'rumah',
    cameraCount: 2,
    resolution: 'Full HD 1080p · ColorVu',
    basePriceHd: 2450000,
    basePriceIp: 3350000,
    storageLabel: 'HDD 500 GB Surveillance (14 Hari)',
    cableIncludedMeters: 30,
    targetUse: 'Rumah tinggal, gerai UMKM, dan kos-kosan kecil',
    specs: [
      '2 Unit Kamera Indoor / Outdoor Tahan Hujan IP67',
      '1 Unit DVR / NVR 4 Channel Siap Tambah Kamera',
      'Kabel Coaxial RG59+Power / UTP Cat6 30 Meter',
      'Gratis Pasang, Setting HP & Garansi Resmi 2 Tahun',
    ],
  },
  {
    id: 'paket-4-kamera',
    name: 'Paket 4 Kamera',
    category: 'rumah',
    cameraCount: 4,
    resolution: '2MP–5MP · Malam Berwarna',
    basePriceHd: 3650000,
    basePriceIp: 5150000,
    storageLabel: 'HDD 1 TB Surveillance (21 Hari)',
    cableIncludedMeters: 60,
    targetUse: 'Rumah 2 lantai, ruko usaha, apotek, dan minimarket',
    popular: true,
    specs: [
      '4 Unit Kamera Indoor / Outdoor Audio + Night Vision',
      '1 Unit DVR / NVR 4 Channel HDMI Full HD',
      'Kabel Berkualitas 60 Meter + Konektor BNC/RJ45 Rapi',
      'Gratis Pasang, Setting Pantau HP & Garansi Resmi 2 Tahun',
    ],
  },
  {
    id: 'paket-8-kamera',
    name: 'Paket 8 Kamera',
    category: 'bisnis',
    cameraCount: 8,
    resolution: '5MP Super HD · Deteksi Gerak',
    basePriceHd: 6450000,
    basePriceIp: 8950000,
    storageLabel: 'HDD 2 TB Surveillance (30 Hari)',
    cableIncludedMeters: 120,
    targetUse: 'Kantor, klinik, restoran, bengkel, dan gudang menengah',
    specs: [
      '8 Unit Kamera Kombinasi Dome & Bullet IP67',
      '1 Unit DVR / NVR 8 Channel Kompresi H.265+',
      'Kabel 120 Meter + Pipa Conduit Pelindung Area Luar',
      'Gratis Survei, Setting Multi-User & Garansi Resmi 2 Tahun',
    ],
  },
  {
    id: 'paket-16-kamera',
    name: 'Paket 16 Kamera',
    category: 'bisnis',
    cameraCount: 16,
    resolution: 'IP Camera 4MP–4K · Rackmount Ready',
    basePriceHd: 11900000,
    basePriceIp: 16800000,
    storageLabel: 'HDD 4 TB Enterprise (30+ Hari)',
    cableIncludedMeters: 240,
    targetUse: 'Pabrik, pergudangan logistik, sekolah, dan perkantoran besar',
    specs: [
      '16 Unit Kamera Heavy-Duty Siap Operasional 24/7',
      '1 Unit DVR / NVR 16 Channel + Switch PoE Terdedikasi',
      'Kabel 240 Meter + Instalasi Pipa Conduit & Box Panel',
      'Training Operator, Jadwal Maintenance & Garansi Resmi 2 Tahun',
    ],
  },
];

export const BANTEN_REGIONS: BantenRegion[] = [
  {
    id: 'serang',
    city: 'Kota & Kab. Serang',
    areaFocus: 'Serang Kota, Cipocok, Taktakan, Ciruas, Cikande, Modern Cikande',
    responseEstimate: '1–2 Jam Tiba',
    installedSites: 486,
    surveyFee: 'Gratis',
  },
  {
    id: 'cilegon',
    city: 'Kota Cilegon',
    areaFocus: 'Cibeber, Jombang, Citangkil, Merak, Kawasan Industri Krakatau',
    responseEstimate: '1–2 Jam Tiba',
    installedSites: 312,
    surveyFee: 'Gratis',
  },
  {
    id: 'tangerang',
    city: 'Tangerang & Tangsel',
    areaFocus: 'Balaraja, Cikupa, Tigaraksa, Karawaci, BSD, Serpong, Bintaro',
    responseEstimate: '2–3 Jam Tiba',
    installedSites: 394,
    surveyFee: 'Gratis',
  },
  {
    id: 'pandeglang',
    city: 'Kab. Pandeglang',
    areaFocus: 'Pandeglang Kota, Majasari, Karangtanjung, Labuan, Carita',
    responseEstimate: '2–4 Jam Tiba',
    installedSites: 128,
    surveyFee: 'Gratis',
  },
  {
    id: 'lebak',
    city: 'Kab. Lebak',
    areaFocus: 'Rangkasbitung, Cibadak, Warunggunung, Maja, Bayah',
    responseEstimate: '2–4 Jam Tiba',
    installedSites: 104,
    surveyFee: 'Gratis',
  },
];

export const CLIENT_PROOFS: ClientProof[] = [
  {
    id: 'proof-1',
    name: 'Hendra Wijaya',
    role: 'Pemilik Usaha',
    organization: 'Gudang Distribusi Sembako Ciruas',
    district: 'Kab. Serang',
    beforeAfter:
      'Sebelumnya kerap kesulitan melacak selisih bongkar muat di area loading dock. Setelah pemasangan 8 titik kamera 5MP, seluruh akses keluar-masuk truk terekam jelas dan dapat dipantau langsung dari ponsel saat di luar kota.',
    packageUsed: 'Paket 8 Kamera IP PoE',
  },
  {
    id: 'proof-2',
    name: 'dr. Ratna Kusuma',
    role: 'Manajer Operasional',
    organization: 'Klinik Pratama Medika Cilegon',
    district: 'Kota Cilegon',
    beforeAfter:
      'Pemasangan kabel dibuat tersembunyi di dalam plafon dan conduit tanpa merusak interior ruang tunggu. Tim teknisi menyelesaikan instalasi 4 kamera lengkap dengan rekam audio meja resepsionis dalam 1 hari kerja.',
    packageUsed: 'Paket 4 Kamera Audio HD',
  },
  {
    id: 'proof-3',
    name: 'Bambang Suryanto',
    role: 'Kepala Keamanan Kompleks',
    organization: 'Perumahan Taman Graha Asri',
    district: 'Tangerang Selatan',
    beforeAfter:
      'Gerbang utama sebelumnya sering gelap pada malam hari sehingga pelat nomor kendaraan tidak terbaca. Penggantian ke kamera ColorVu malam berwarna membuat rekaman malam hari tetap tajam.',
    packageUsed: 'Paket 16 Kamera Outdoor',
  },
];

export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(amount);
}
