// Data & Konfigurasi Hierarki Kurikulum, Jenjang, Fase, Kelas, dan Elemen

export const FASE_LIST = [
  { id: 'A', label: 'Fase A (Kelas 1 - 2 SD/MI)', jenjang: 'SD/MI' },
  { id: 'B', label: 'Fase B (Kelas 3 - 4 SD/MI)', jenjang: 'SD/MI' },
  { id: 'C', label: 'Fase C (Kelas 5 - 6 SD/MI)', jenjang: 'SD/MI' },
  { id: 'D', label: 'Fase D (Kelas 7 - 9 SMP/MTs)', jenjang: 'SMP/MTs' },
  { id: 'E', label: 'Fase E (Kelas 10 SMA/SMK/MA)', jenjang: 'SMA/SMK/MA' },
  { id: 'F', label: 'Fase F (Kelas 11 - 12 SMA/SMK/MA)', jenjang: 'SMA/SMK/MA' }
];

export const JENJANG_OPTIONS = [
  'SD / MI (Sekolah Dasar)',
  'SMP / MTs (Sekolah Menengah Pertama)',
  'SMA / MA (Sekolah Menengah Atas)',
  'SMK / MAK (Sekolah Menengah Kejuruan)',
  'Satuan Pendidikan Kerjasama (SPK / International School)',
  'Lainnya'
];

export const getKelasByFase = (fase) => {
  if (['A', 'B', 'C'].includes(fase)) {
    return ['Kelas 1', 'Kelas 2', 'Kelas 3', 'Kelas 4', 'Kelas 5', 'Kelas 6'];
  }
  if (fase === 'D') {
    return ['Kelas 7', 'Kelas 8', 'Kelas 9'];
  }
  if (fase === 'E') {
    return ['Kelas 10'];
  }
  if (fase === 'F') {
    return ['Kelas 11', 'Kelas 12'];
  }
  return ['Kelas 1', 'Kelas 2', 'Kelas 3', 'Kelas 4', 'Kelas 5', 'Kelas 6'];
};

export const getKurikulumByFase = (fase) => {
  if (['A', 'B', 'C'].includes(fase)) {
    return [
      'Kurikulum Merdeka',
      'K-13',
      'Kurikulum Berbasis Cinta (KBC)',
      'kurikulum Cambridge Primary',
      'International Primary Curriculum (IPC)',
      'IB Primary Years Programme (PYP)',
      'Pearson Edexcel iPrimary',
      'International Baccalaureate (IB)',
      'Lainnya'
    ];
  }
  if (fase === 'D') {
    return [
      'Kurikulum Merdeka',
      'K-13',
      'Kurikulum Berbasis Cinta (KBC)',
      'Cambridge Lower Secondary',
      'IB Middle Years Programme (MYP)',
      'Pearson Edexcel iLowerSecondary',
      'International Baccalaureate (IB)',
      'Lainnya'
    ];
  }
  if (['E', 'F'].includes(fase)) {
    return [
      'Kurikulum Merdeka',
      'K-13',
      'Kurikulum Berbasis Cinta (KBC)',
      'Cambridge IGCSE',
      'Cambridge International AS & A Level',
      'IB Diploma Programme (DP)',
      'Pearson Edexcel GCSE / International A Level',
      'American Curriculum / Advanced Placement (AP)',
      'International Baccalaureate',
      'Lainnya'
    ];
  }
  return [
    'Kurikulum Merdeka',
    'K-13',
    'Kurikulum Berbasis Cinta (KBC)',
    'Lainnya'
  ];
};

export const getQuestionTypesByFase = (fase) => {
  if (['A', 'B', 'C', 'D'].includes(fase)) {
    return [
      { id: 'pg_ad', label: 'Pilihan Ganda (A-D)', maxOption: 4, optionsLabel: ['A', 'B', 'C', 'D'] },
      { id: 'pg_kompleks_ad', label: 'Pilihan Ganda Komplek (A-D)', maxOption: 4, optionsLabel: ['A', 'B', 'C', 'D'] },
      { id: 'benar_salah', label: 'Benar-Salah', maxOption: 2, optionsLabel: ['Benar', 'Salah'] },
      { id: 'esai', label: 'Esai / Uraian Terbuka', maxOption: 0, optionsLabel: [] }
    ];
  }
  // Fase E and F
  return [
    { id: 'pg_ae', label: 'Pilihan Ganda (A-E)', maxOption: 5, optionsLabel: ['A', 'B', 'C', 'D', 'E'] },
    { id: 'pg_kompleks_ae', label: 'Pilihan Ganda Komplek (A-E)', maxOption: 5, optionsLabel: ['A', 'B', 'C', 'D', 'E'] },
    { id: 'esai', label: 'Esai / Uraian Terbuka', maxOption: 0, optionsLabel: [] }
  ];
};

// Elemen Kurikulum Berbasis Cinta (KBC)
export const ELEMEN_KBC = [
  { id: 'kbc_1', label: 'Cinta Allah Swt. dan Rasul-Nya', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' },
  { id: 'kbc_2', label: 'Cinta Ilmu', color: 'bg-blue-100 text-blue-800 border-blue-300' },
  { id: 'kbc_3', label: 'Cinta Lingkungan', color: 'bg-green-100 text-green-800 border-green-300' },
  { id: 'kbc_4', label: 'Cinta Diri dan Sesama Manusia', color: 'bg-pink-100 text-pink-800 border-pink-300' },
  { id: 'kbc_5', label: 'Cinta Tanah Air', color: 'bg-red-100 text-red-800 border-red-300' }
];

// 8 Dimensi Profil Lulusan Kurikulum Merdeka
export const ELEMEN_MERDEKA_8_DIMENSI = [
  { id: 'dim_1', label: 'Keimanan dan Ketakwaan terhadap Tuhan Yang Maha Esa', color: 'bg-purple-100 text-purple-800 border-purple-300' },
  { id: 'dim_2', label: 'Kewargaan', color: 'bg-indigo-100 text-indigo-800 border-indigo-300' },
  { id: 'dim_3', label: 'Penalaran Kritis', color: 'bg-amber-100 text-amber-800 border-amber-300' },
  { id: 'dim_4', label: 'Kreativitas', color: 'bg-yellow-100 text-yellow-800 border-yellow-300' },
  { id: 'dim_5', label: 'Kolaborasi', color: 'bg-cyan-100 text-cyan-800 border-cyan-300' },
  { id: 'dim_6', label: 'Kemandirian', color: 'bg-orange-100 text-orange-800 border-orange-300' },
  { id: 'dim_7', label: 'Kesehatan', color: 'bg-teal-100 text-teal-800 border-teal-300' },
  { id: 'dim_8', label: 'Komunikasi', color: 'bg-sky-100 text-sky-800 border-sky-300' }
];

// Daftar Mata Pelajaran Terkini: 'Informatika' dan 'Koding dan Kecerdasan Artifisial'
export const MATA_PELAJARAN_SUGGESTIONS = [
  'Informatika',
  'Koding dan Kecerdasan Artifisial',
  'Bahasa Indonesia',
  'Matematika',
  'Ilmu Pengetahuan Alam (IPA)',
  'Ilmu Pengetahuan Sosial (IPS)',
  'Pendidikan Pancasila',
  'Pendidikan Agama Islam dan Budi Pekerti',
  'Bahasa Inggris',
  'Fisika',
  'Biologi',
  'Kimia',
  'Ekonomi',
  'Geografi',
  'Sosiologi',
  'Seni Budaya',
  'Pendidikan Jasmani, Olahraga, dan Kesehatan (PJOK)',
  'Prakarya dan Kewirausahaan'
];

// Helper format Hari & Tanggal Bahasa Indonesia
export const formatHariTanggal = (dateString, customText) => {
  if (customText && customText.trim()) {
    return customText.trim();
  }
  if (!dateString) return '.......................................';

  try {
    const parts = dateString.split('-');
    if (parts.length === 3) {
      const year = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const day = parseInt(parts[2], 10);
      const d = new Date(year, month, day);

      const namaHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
      const namaBulan = [
        'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
      ];

      const hari = namaHari[d.getDay()];
      const bulan = namaBulan[month];
      return `${hari}, ${day} ${bulan} ${year}`;
    }
    return dateString;
  } catch {
    return dateString;
  }
};

export const DEFAULT_EXAM_CONFIG = {
  // Identitas
  namaGuru: 'Armansyah, S.Kom, M.Pd, Gr.',
  namaInstitusi: 'SMAN Sumatera Selatan',
  jenjang: 'SMA / MA (Sekolah Menengah Atas)',
  fase: 'E',
  kelas: 'Kelas 10',
  kurikulum: 'Kurikulum Merdeka',
  kurikulumCustom: '',
  mataPelajaran: 'Informatika',
  mataPelajaranCustom: '',
  topikCapaian: 'Berpikir Komputasional',
  
  // Jadwal & Waktu Pelaksanaan Ujian
  tanggalUjian: new Date().toISOString().split('T')[0],
  hariTanggalCustom: '',
  alokasiWaktu: '90 Menit',
  
  // Capaian Pembelajaran (CP), Tujuan Pembelajaran (TP) & Alur Tujuan Pembelajaran (ATP)
  capaianPembelajaran: 'Pada akhir Fase E, peserta didik mampu menerapkan strategi algoritmik standar untuk menghasilkan beberapa solusi persoalan dengan data diskrit bervolume tidak kecil pada kehidupan sehari-hari maupun dalam bidang informatika, serta mengoptimalkan solusi dengan berpikir komputasional.',
  tujuanPembelajaran: [
    'Menerapkan 4 fondasi berpikir komputasional (dekomposisi, pengenalan pola, abstraksi, dan perancangan algoritma) dalam memecahkan persoalan kontekstual.',
    'Merancang algoritma solusi menggunakan diagram alir (flowchart) dan pseudocode secara sistematis serta efisien.',
    'Mengevaluasi dan mengoptimalkan strategi algoritmik (pencarian/searching dan pengurutan/sorting) pada data diskrit.'
  ],
  alurTujuanPembelajaran: [
    'Tahap 1: Penguasaan 4 Fondasi Berpikir Komputasional & Dekomposisi Kasus Kompleks',
    'Tahap 2: Pengenalan Pola dan Abstraksi Struktur Data Diskrit Sederhana',
    'Tahap 3: Konstruksi Notasi Algoritmik, Pseudocode & Diagram Alir Standar',
    'Tahap 4: Analisis Efisiensi Algoritma, Pengujian Kasus Uji & Refleksi Solusi'
  ],

  // Elemen Terpilih
  selectedElements: [
    'Penalaran Kritis',
    'Kreativitas',
    'Keimanan dan Ketakwaan terhadap Tuhan Yang Maha Esa',
    'Kolaborasi'
  ],

  // Bentuk Soal Counts
  questionCounts: {
    pg: 5,
    pg_kompleks: 3,
    benar_salah: 0,
    esai: 2
  },

  // Media
  withMedia: true,

  // Tingkat Kesulitan
  difficulty: {
    mudah: 30,
    sedang: 50,
    sulit: 20
  },

  // Dimensi Kognitif (Bloom)
  bloom: {
    c1: 1,
    c2: 2,
    c3: 3,
    c4: 2,
    c5: 1,
    c6: 1
  },

  // Custom Instruction
  customInstruction: 'Sertakan stimulus kontekstual berbasis studi kasus era digital terkini, dan integrasikan dimensi profil karakter secara mendalam.',

  // Pengaturan Bahasa Soal (Language Configuration)
  languageConfig: {
    mode: 'id', // 'id' | 'en' | 'bilingual' | 'ar' | 'fr' | 'palembang'
    bilingualCounts: {
      id: 5,
      en: 5
    }
  }
};

export const LANGUAGE_OPTIONS = [
  { 
    id: 'id', 
    name: 'Bahasa Indonesia (Penuh)', 
    short: 'Indonesia', 
    flag: '🇮🇩', 
    badge: 'bg-red-50 text-red-700 border-red-200 dark:bg-red-950/60 dark:text-red-300 dark:border-red-900',
    desc: 'Seluruh butir soal disajikan dalam Bahasa Indonesia baku & edukatif' 
  },
  { 
    id: 'en', 
    name: 'Bahasa Inggris (Full English)', 
    short: 'English', 
    flag: '🇬🇧', 
    badge: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-900',
    desc: 'Seluruh butir soal, stimulus, opsi, dan pembahasan disajikan dalam Bahasa Inggris internasional' 
  },
  { 
    id: 'bilingual', 
    name: 'Bilingual Kustom (Indonesia & Inggris)', 
    short: 'Bilingual (ID & EN)', 
    flag: '🌐', 
    badge: 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/60 dark:text-purple-300 dark:border-purple-900',
    desc: 'Kustomisasi proporsi: tentukan berapa soal Bahasa Indonesia & berapa soal Bahasa Inggris' 
  },
  { 
    id: 'ar', 
    name: 'Bahasa Arab (Full Arabic - اللغة العربية)', 
    short: 'العربية (Arab)', 
    flag: '🇸🇦', 
    badge: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-900',
    desc: 'Seluruh butir soal disusun dalam Bahasa Arab fusha terstandar' 
  },
  { 
    id: 'fr', 
    name: 'Bahasa Prancis (Full French - Français)', 
    short: 'Français (Prancis)', 
    flag: '🇫🇷', 
    badge: 'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/60 dark:text-indigo-300 dark:border-indigo-900',
    desc: 'Seluruh butir soal dan pedoman penilaian disusun dalam Bahasa Prancis' 
  },
  { 
    id: 'palembang', 
    name: 'Bahasa Palembang (Baso Pelembang / Kearifan Lokal)', 
    short: 'Baso Pelembang', 
    flag: '🏛️', 
    badge: 'bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-900',
    desc: 'Soal disusun menggunakan kosakata dialek khas Palembang (Sumatera Selatan) yang santun & komunikatif' 
  }
];

export const getLanguageLabel = (languageConfig) => {
  if (!languageConfig) return 'Bahasa Indonesia';
  const mode = typeof languageConfig === 'string' ? languageConfig : languageConfig.mode;
  if (mode === 'en') return 'Bahasa Inggris (Full English)';
  if (mode === 'ar') return 'Bahasa Arab (اللغة العربية)';
  if (mode === 'fr') return 'Bahasa Prancis (Français)';
  if (mode === 'palembang') return 'Bahasa Palembang (Baso Pelembang)';
  if (mode === 'bilingual') {
    const idCount = languageConfig.bilingualCounts?.id ?? 5;
    const enCount = languageConfig.bilingualCounts?.en ?? 5;
    return `Bilingual (${idCount} Soal Indonesia, ${enCount} Soal Inggris)`;
  }
  return 'Bahasa Indonesia';
};
