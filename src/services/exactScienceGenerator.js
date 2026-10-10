// Service Generator Soal Kuantitatif Matematika, Sains & Terapan
// Menghasilkan butir soal perhitungan natural berbasis angka nyata, rumus resmi kurikulum,
// jenjang/fase, kelas, dan diagram teknis presisi tinggi (SVG)

export const detectSubjectCategory = (mapel = '', topik = '') => {
  const combined = `${mapel} ${topik}`.toLowerCase();
  
  // Fisika
  if (
    combined.includes('fisika') ||
    combined.includes('mekanika') ||
    combined.includes('kinematika') ||
    combined.includes('dinamika') ||
    combined.includes('hukum newton') ||
    combined.includes('termodinamika') ||
    combined.includes('listrik') ||
    combined.includes('magnet') ||
    combined.includes('optik') ||
    combined.includes('gelombang') ||
    combined.includes('fluida') ||
    combined.includes('usaha') ||
    combined.includes('kalor') ||
    combined.includes('glbb')
  ) {
    return 'fisika';
  }

  // Kimia
  if (
    combined.includes('kimia') ||
    combined.includes('stoikiometri') ||
    combined.includes('titrasi') ||
    combined.includes('asam basa') ||
    combined.includes('larutan') ||
    combined.includes('termokimia') ||
    combined.includes('termo kimia') ||
    combined.includes('laju reaksi') ||
    combined.includes('kesetimbangan') ||
    combined.includes('elektrokimia') ||
    combined.includes('sel volta') ||
    combined.includes('redoks') ||
    combined.includes('buffer') ||
    combined.includes('koligatif') ||
    combined.includes('mol')
  ) {
    return 'kimia';
  }

  // Matematika
  if (
    combined.includes('matematika') ||
    combined.includes('aljabar') ||
    combined.includes('geometri') ||
    combined.includes('trigonometri') ||
    combined.includes('kalkulus') ||
    combined.includes('fungsi kuadrat') ||
    combined.includes('spldv') ||
    combined.includes('spltv') ||
    combined.includes('statistika') ||
    combined.includes('vektor') ||
    combined.includes('matriks') ||
    combined.includes('eksponen') ||
    combined.includes('logaritma') ||
    combined.includes('bangun datar') ||
    combined.includes('bangun ruang') ||
    combined.includes('pecahan') ||
    combined.includes('aritmetika') ||
    combined.includes('peluang') ||
    combined.includes('limit') ||
    combined.includes('turunan') ||
    combined.includes('integral') ||
    combined.includes('pythagoras') ||
    combined.includes('deret')
  ) {
    return 'matematika';
  }

  // Informatika & Koding / AI
  if (
    combined.includes('informatika') ||
    combined.includes('koding') ||
    combined.includes('coding') ||
    combined.includes('algoritma') ||
    combined.includes('pemrograman') ||
    combined.includes('komputer') ||
    combined.includes('kecerdasan artifisial') ||
    combined.includes('artificial intelligence') ||
    combined.includes('sistem komputer') ||
    combined.includes('jaringan') ||
    combined.includes('subnetting') ||
    combined.includes('biner') ||
    combined.includes('heksadesimal') ||
    combined.includes('gerbang logika') ||
    combined.includes('boolean') ||
    combined.includes('machine learning')
  ) {
    return 'informatika';
  }

  // Ekonomi / Akuntansi
  if (
    combined.includes('ekonomi') ||
    combined.includes('akuntansi') ||
    combined.includes('permintaan') ||
    combined.includes('penawaran') ||
    combined.includes('elastisitas') ||
    combined.includes('bep') ||
    combined.includes('break even') ||
    combined.includes('keseimbangan pasar') ||
    combined.includes('pendapatan nasional') ||
    combined.includes('laba') ||
    combined.includes('rugi') ||
    combined.includes('gdp') ||
    combined.includes('gnp')
  ) {
    return 'ekonomi';
  }

  // Biologi & Sains Hayati
  if (
    combined.includes('biologi') ||
    combined.includes('ipa') ||
    combined.includes('sains terpadu') ||
    combined.includes('genetika') ||
    combined.includes('persilangan') ||
    combined.includes('mendel') ||
    combined.includes('piramida makanan') ||
    combined.includes('aliran energi') ||
    combined.includes('trofik') ||
    combined.includes('imt') ||
    combined.includes('bmi')
  ) {
    return 'biologi';
  }

  // Geografi
  if (
    combined.includes('geografi') ||
    combined.includes('pemetaan') ||
    combined.includes('skala peta') ||
    combined.includes('kontur interval') ||
    combined.includes('demografi') ||
    combined.includes('interaksi wilayah') ||
    combined.includes('titik henti')
  ) {
    return 'geografi';
  }

  return 'umum';
};

export const isQuantitativeSubject = (category) => {
  return ['matematika', 'fisika', 'kimia', 'informatika', 'ekonomi', 'biologi', 'geografi'].includes(category);
};

/**
 * Generator Gambar Diagram Visual Eksak Beresolusi Tinggi (SVG)
 * Diagram teknis presisi dengan angka-angka terukur, sumbu kartesius, sudut, gaya, dan rangkaian
 */
export const generateExactScienceSvg = (type, title = 'Diagram Soal') => {
  switch (type) {
    // -------------------------------------------------------------
    // FISIKA: DIAGRAM GAYA BEBAS (FREE BODY DIAGRAM BIDANG MIRING)
    // -------------------------------------------------------------
    case 'physics_fbd':
      return `<svg viewBox="0 0 520 250" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-lg mx-auto my-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-2 shadow-sm">
        <defs>
          <marker id="arrow-blue" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#2563eb" />
          </marker>
          <marker id="arrow-red" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#dc2626" />
          </marker>
          <marker id="arrow-green" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#16a34a" />
          </marker>
        </defs>
        <!-- Title -->
        <text x="260" y="22" fill="#0f172a" font-size="12" font-weight="bold" text-anchor="middle" font-family="sans-serif">${title}</text>
        
        <!-- Floor / Horizontal Ground -->
        <line x1="40" y1="210" x2="480" y2="210" stroke="#64748b" stroke-width="2" />
        <!-- Inclined Plane (30 degrees) -->
        <polygon points="60,210 420,210 60,60" fill="#f1f5f9" stroke="#334155" stroke-width="2.5" />
        <path d="M 120,210 A 60 60 0 0 0 105,190" fill="none" stroke="#dc2626" stroke-width="2" />
        <text x="135" y="202" fill="#dc2626" font-size="12" font-weight="bold" font-family="sans-serif">θ = 30°</text>
        
        <!-- Block m = 4 kg on the incline -->
        <g transform="translate(190, 115) rotate(-22.6)">
          <rect x="-35" y="-25" width="70" height="50" rx="3" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2" />
          <text x="0" y="5" fill="#1e3a8a" font-size="12" font-weight="bold" text-anchor="middle" font-family="sans-serif">m = 4 kg</text>
          
          <!-- Normal Force N (Perpendicular up) -->
          <line x1="0" y1="-25" x2="0" y2="-75" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arrow-blue)" />
          <text x="10" y="-65" fill="#1d4ed8" font-size="11" font-weight="bold" font-family="sans-serif">N</text>
          
          <!-- Friction fk (Down the plane) -->
          <line x1="-35" y1="25" x2="-85" y2="25" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arrow-red)" />
          <text x="-100" y="22" fill="#dc2626" font-size="11" font-weight="bold" font-family="sans-serif">fk = 4,8 N</text>

          <!-- Pulling Force F (Up the plane) -->
          <line x1="35" y1="0" x2="115" y2="0" stroke="#16a34a" stroke-width="2.5" marker-end="url(#arrow-green)" />
          <text x="120" y="5" fill="#15803d" font-size="11" font-weight="bold" font-family="sans-serif">F = 32 N</text>
        </g>
        
        <!-- Weight Vector w = mg straight down -->
        <line x1="205" y1="125" x2="205" y2="200" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arrow-red)" />
        <text x="215" y="170" fill="#b91c1c" font-size="11" font-weight="bold" font-family="sans-serif">w = mg = 40 N</text>
        
        <!-- Parameters Legend -->
        <rect x="330" y="45" width="160" height="65" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
        <text x="340" y="65" fill="#334155" font-size="10" font-weight="bold">Parameter Fisika:</text>
        <text x="340" y="80" fill="#475569" font-size="9.5">• g = 10 m/s², μk = 0,2</text>
        <text x="340" y="95" fill="#475569" font-size="9.5">• sin 30° = 0,5, cos 30° = 0,86</text>
      </svg>`;

    // -------------------------------------------------------------
    // FISIKA: RANGKAIAN LISTRIK RESISTOR SERI & PARALEL
    // -------------------------------------------------------------
    case 'physics_circuit':
      return `<svg viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-lg mx-auto my-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-2 shadow-sm">
        <text x="260" y="24" fill="#0f172a" font-size="12" font-weight="bold" text-anchor="middle" font-family="sans-serif">${title}</text>
        
        <!-- Wire Loop -->
        <line x1="60" y1="60" x2="160" y2="60" stroke="#334155" stroke-width="2" />
        <!-- Resistor R1 (Seri) -->
        <rect x="160" y="48" width="60" height="24" fill="#fed7aa" stroke="#ea580c" stroke-width="2" rx="2" />
        <text x="190" y="64" fill="#9a3412" font-size="10.5" font-weight="bold" text-anchor="middle">R1 = 4 Ω</text>
        <line x1="220" y1="60" x2="280" y2="60" stroke="#334155" stroke-width="2" />
        
        <!-- Node A -->
        <circle cx="280" cy="60" r="4" fill="#0f172a" />
        <text x="280" y="50" fill="#0f172a" font-size="11" font-weight="bold" text-anchor="middle">A</text>
        
        <!-- Parallel Branches -->
        <line x1="280" y1="60" x2="280" y2="40" stroke="#334155" stroke-width="2" />
        <line x1="280" y1="40" x2="320" y2="40" stroke="#334155" stroke-width="2" />
        <rect x="320" y="28" width="60" height="24" fill="#bbf7d0" stroke="#16a34a" stroke-width="2" rx="2" />
        <text x="350" y="44" fill="#14532d" font-size="10.5" font-weight="bold" text-anchor="middle">R2 = 6 Ω</text>
        <line x1="380" y1="40" x2="420" y2="40" stroke="#334155" stroke-width="2" />
        <line x1="420" y1="40" x2="420" y2="60" stroke="#334155" stroke-width="2" />

        <!-- Branch 2 (Bottom) -->
        <line x1="280" y1="60" x2="280" y2="80" stroke="#334155" stroke-width="2" />
        <line x1="280" y1="80" x2="320" y2="80" stroke="#334155" stroke-width="2" />
        <rect x="320" y="68" width="60" height="24" fill="#bbf7d0" stroke="#16a34a" stroke-width="2" rx="2" />
        <text x="350" y="84" fill="#14532d" font-size="10.5" font-weight="bold" text-anchor="middle">R3 = 12 Ω</text>
        <line x1="380" y1="80" x2="420" y2="80" stroke="#334155" stroke-width="2" />
        <line x1="420" y1="80" x2="420" y2="60" stroke="#334155" stroke-width="2" />

        <!-- Node B -->
        <circle cx="420" cy="60" r="4" fill="#0f172a" />
        <text x="420" y="50" fill="#0f172a" font-size="11" font-weight="bold" text-anchor="middle">B</text>

        <!-- Right Side Wire -->
        <line x1="420" y1="60" x2="460" y2="60" stroke="#334155" stroke-width="2" />
        <line x1="460" y1="60" x2="460" y2="180" stroke="#334155" stroke-width="2" />
        <line x1="460" y1="180" x2="300" y2="180" stroke="#334155" stroke-width="2" />

        <!-- Battery DC E = 18 V, r = 1 ohm -->
        <line x1="300" y1="165" x2="300" y2="195" stroke="#dc2626" stroke-width="3" />
        <line x1="290" y1="172" x2="290" y2="188" stroke="#0f172a" stroke-width="2" />
        <text x="295" y="160" fill="#dc2626" font-size="11" font-weight="bold" text-anchor="middle">+  -</text>
        <text x="295" y="212" fill="#0f172a" font-size="11" font-weight="bold" text-anchor="middle">E = 18 V (r = 1 Ω)</text>

        <!-- Left Side Wire Return -->
        <line x1="290" y1="180" x2="60" y2="180" stroke="#334155" stroke-width="2" />
        <line x1="60" y1="180" x2="60" y2="60" stroke="#334155" stroke-width="2" />

        <!-- Current Arrow I -->
        <line x1="90" y1="50" x2="130" y2="50" stroke="#2563eb" stroke-width="2" marker-end="url(#arrow-blue)" />
        <text x="110" y="44" fill="#2563eb" font-size="10.5" font-weight="bold" text-anchor="middle">Arus Total (I)</text>
      </svg>`;

    // -------------------------------------------------------------
    // FISIKA: GRAFIK KINEMATIKA KECEPATAN-WAKTU (v-t)
    // -------------------------------------------------------------
    case 'physics_motion_graph':
      return `<svg viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-lg mx-auto my-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-2 shadow-sm">
        <text x="260" y="22" fill="#0f172a" font-size="12" font-weight="bold" text-anchor="middle" font-family="sans-serif">${title}: Grafik Kecepatan (v) vs Waktu (t)</text>
        
        <!-- Axes -->
        <line x1="70" y1="190" x2="470" y2="190" stroke="#334155" stroke-width="2" />
        <text x="480" y="194" fill="#0f172a" font-size="11" font-weight="bold">t (s)</text>
        <line x1="70" y1="190" x2="70" y2="40" stroke="#334155" stroke-width="2" />
        <text x="60" y="35" fill="#0f172a" font-size="11" font-weight="bold">v (m/s)</text>

        <!-- Gridlines -->
        <line x1="70" y1="80" x2="450" y2="80" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3" />
        <text x="48" y="84" fill="#2563eb" font-size="11" font-weight="bold">20</text>
        <text x="58" y="194" fill="#64748b" font-size="11">0</text>

        <!-- Area under curve (Trapezoid Shaded) -->
        <polygon points="70,190 170,80 320,80 420,190" fill="#dbeafe" opacity="0.6" />

        <!-- Line segments of motion -->
        <line x1="70" y1="190" x2="170" y2="80" stroke="#2563eb" stroke-width="3" />
        <line x1="170" y1="80" x2="320" y2="80" stroke="#2563eb" stroke-width="3" />
        <line x1="320" y1="80" x2="420" y2="190" stroke="#2563eb" stroke-width="3" />

        <!-- Critical points -->
        <circle cx="170" cy="80" r="4" fill="#1e40af" />
        <circle cx="320" cy="80" r="4" fill="#1e40af" />
        <circle cx="420" cy="190" r="4" fill="#1e40af" />

        <!-- Time Ticks -->
        <line x1="170" y1="190" x2="170" y2="80" stroke="#94a3b8" stroke-dasharray="3" />
        <text x="170" y="206" fill="#334155" font-size="11" font-weight="bold" text-anchor="middle">4 s</text>

        <line x1="320" y1="190" x2="320" y2="80" stroke="#94a3b8" stroke-dasharray="3" />
        <text x="320" y="206" fill="#334155" font-size="11" font-weight="bold" text-anchor="middle">10 s</text>

        <text x="420" y="206" fill="#334155" font-size="11" font-weight="bold" text-anchor="middle">14 s</text>

        <text x="245" y="135" fill="#1e40af" font-size="12" font-weight="bold" text-anchor="middle">Daerah Luas = Jarak (s)</text>
      </svg>`;

    // -------------------------------------------------------------
    // MATEMATIKA: SEGITIGA SIKU-SIKU TRIGONOMETRI & PYTHAGORAS
    // -------------------------------------------------------------
    case 'math_geometry_triangle':
      return `<svg viewBox="0 0 520 250" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-lg mx-auto my-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-2 shadow-sm">
        <text x="260" y="22" fill="#0f172a" font-size="12" font-weight="bold" text-anchor="middle" font-family="sans-serif">${title}: Segitiga Siku-siku ABC</text>
        
        <!-- Triangle ABC (A at (80, 200), B at (360, 200), C at (360, 70)) -->
        <polygon points="80,200 360,200 360,70" fill="#f8fafc" stroke="#334155" stroke-width="2.5" />
        
        <!-- Right angle mark at B -->
        <rect x="340" y="180" width="20" height="20" fill="none" stroke="#dc2626" stroke-width="2" />
        
        <!-- Vertices -->
        <circle cx="80" cy="200" r="4" fill="#0f172a" />
        <text x="65" y="210" fill="#0f172a" font-size="13" font-weight="bold">A</text>

        <circle cx="360" cy="200" r="4" fill="#0f172a" />
        <text x="375" y="210" fill="#0f172a" font-size="13" font-weight="bold">B</text>

        <circle cx="360" cy="70" r="4" fill="#0f172a" />
        <text x="375" y="70" fill="#0f172a" font-size="13" font-weight="bold">C</text>
        
        <!-- Dimensions -->
        <text x="220" y="220" fill="#2563eb" font-size="12" font-weight="bold" text-anchor="middle">AB = 12 cm (Sisi Alas / Samping)</text>
        <text x="390" y="140" fill="#16a34a" font-size="12" font-weight="bold">BC = 5 cm (Tinggi)</text>
        <text x="180" y="115" fill="#dc2626" font-size="12" font-weight="bold">AC = 13 cm (Hipotenusa)</text>
        
        <!-- Angle Alpha arc at A -->
        <path d="M 130,200 A 50 50 0 0 0 120,180" fill="none" stroke="#7c3aed" stroke-width="2.5" />
        <text x="140" y="190" fill="#7c3aed" font-size="13" font-weight="bold">α</text>
      </svg>`;

    // -------------------------------------------------------------
    // MATEMATIKA: GRAFIK PARABOLA FUNGSI KUADRAT PADA KARTESIUS
    // -------------------------------------------------------------
    case 'math_function_graph':
      return `<svg viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-lg mx-auto my-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-2 shadow-sm">
        <text x="260" y="22" fill="#0f172a" font-size="12" font-weight="bold" text-anchor="middle" font-family="sans-serif">${title}: f(x) = x² - 6x + 5</text>
        
        <!-- Grid -->
        <g stroke="#f1f5f9" stroke-width="1">
          <line x1="60" y1="50" x2="460" y2="50" /><line x1="60" y1="90" x2="460" y2="90" />
          <line x1="60" y1="130" x2="460" y2="130" /><line x1="60" y1="170" x2="460" y2="170" />
        </g>
        
        <!-- Axes -->
        <line x1="60" y1="140" x2="460" y2="140" stroke="#334155" stroke-width="2" />
        <text x="470" y="144" fill="#0f172a" font-size="11" font-weight="bold">X</text>
        <line x1="140" y1="220" x2="140" y2="40" stroke="#334155" stroke-width="2" />
        <text x="145" y="40" fill="#0f172a" font-size="11" font-weight="bold">Y</text>

        <!-- Parabola Curve -->
        <path d="M 100,50 Q 260,330 420,50" fill="none" stroke="#7c3aed" stroke-width="3" />
        
        <!-- Root 1 (1, 0) -->
        <circle cx="180" cy="140" r="4" fill="#dc2626" />
        <text x="175" y="132" fill="#dc2626" font-size="10" font-weight="bold">(1, 0)</text>
        
        <!-- Root 2 (5, 0) -->
        <circle cx="340" cy="140" r="4" fill="#dc2626" />
        <text x="345" y="132" fill="#dc2626" font-size="10" font-weight="bold">(5, 0)</text>

        <!-- Vertex (3, -4) -->
        <circle cx="260" cy="190" r="4.5" fill="#2563eb" />
        <line x1="260" y1="140" x2="260" y2="190" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="3" />
        <text x="265" y="205" fill="#1d4ed8" font-size="11" font-weight="bold">Puncak (3, -4)</text>
      </svg>`;

    // -------------------------------------------------------------
    // MATEMATIKA: LINGKARAN, JURING & BUSUR SUDUT PUSAT
    // -------------------------------------------------------------
    case 'math_geometry_circle':
      return `<svg viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-lg mx-auto my-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-2 shadow-sm">
        <text x="260" y="22" fill="#0f172a" font-size="12" font-weight="bold" text-anchor="middle" font-family="sans-serif">${title}: Lingkaran Jari-jari r = 14 cm</text>
        
        <!-- Circle at (200, 130), r = 80 -->
        <circle cx="200" cy="130" r="80" fill="#f8fafc" stroke="#334155" stroke-width="2" />
        <!-- Shaded Sector AOB 90 deg -->
        <path d="M 200,130 L 280,130 A 80 80 0 0 0 200,50 Z" fill="#c7d2fe" stroke="#4f46e5" stroke-width="2" />
        
        <!-- Center O -->
        <circle cx="200" cy="130" r="4" fill="#0f172a" />
        <text x="185" y="145" fill="#0f172a" font-size="12" font-weight="bold">O</text>

        <!-- Point A & B -->
        <circle cx="280" cy="130" r="4" fill="#dc2626" />
        <text x="290" y="135" fill="#dc2626" font-size="12" font-weight="bold">A</text>

        <circle cx="200" cy="50" r="4" fill="#dc2626" />
        <text x="195" y="42" fill="#dc2626" font-size="12" font-weight="bold">B</text>

        <!-- Angle mark 90 deg -->
        <rect x="200" y="115" width="15" height="15" fill="none" stroke="#4f46e5" stroke-width="1.5" />
        <text x="225" y="110" fill="#4338ca" font-size="11" font-weight="bold">θ = 90°</text>

        <!-- Information Callout -->
        <rect x="330" y="55" width="165" height="85" rx="6" fill="#eef2ff" stroke="#c7d2fe" />
        <text x="340" y="75" fill="#312e81" font-size="11" font-weight="bold">Besaran Lingkaran:</text>
        <text x="340" y="93" fill="#3730a3" font-size="10.5">• Jari-jari (r) = 14 cm</text>
        <text x="340" y="110" fill="#3730a3" font-size="10.5">• Sudut Pusat = 90°</text>
        <text x="340" y="127" fill="#3730a3" font-size="10.5">• Nilai π = 22/7</text>
      </svg>`;

    // -------------------------------------------------------------
    // MATEMATIKA SD: BANGUN DATAR & BALOK DENGAN UKURAN NYATA
    // -------------------------------------------------------------
    case 'math_sd_rectangle':
      return `<svg viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-lg mx-auto my-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-2 shadow-sm">
        <text x="260" y="22" fill="#0f172a" font-size="12" font-weight="bold" text-anchor="middle" font-family="sans-serif">${title}: Balok Penampungan Air</text>
        
        <!-- 3D Box Projection -->
        <!-- Front Face -->
        <rect x="80" y="100" width="220" height="100" fill="#bae6fd" stroke="#0284c7" stroke-width="2" rx="2" />
        <!-- Top Face -->
        <polygon points="80,100 150,50 370,50 300,100" fill="#e0f2fe" stroke="#0284c7" stroke-width="2" />
        <!-- Right Face -->
        <polygon points="300,100 370,50 370,150 300,200" fill="#7dd3fc" stroke="#0284c7" stroke-width="2" />

        <!-- Dimensions -->
        <!-- Panjang p = 120 cm -->
        <line x1="80" y1="215" x2="300" y2="215" stroke="#0f172a" stroke-width="1.5" />
        <text x="190" y="230" fill="#0f172a" font-size="11" font-weight="bold" text-anchor="middle">Panjang (p) = 120 cm</text>

        <!-- Tinggi t = 75 cm -->
        <line x1="65" y1="100" x2="65" y2="200" stroke="#0f172a" stroke-width="1.5" />
        <text x="55" y="155" fill="#0f172a" font-size="11" font-weight="bold" text-anchor="end">t = 75 cm</text>

        <!-- Lebar l = 80 cm -->
        <text x="350" y="190" fill="#0369a1" font-size="11" font-weight="bold">Lebar = 80 cm</text>

        <!-- Callout box -->
        <rect x="390" y="60" width="115" height="75" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
        <text x="400" y="80" fill="#334155" font-size="10.5" font-weight="bold">Debit Kran:</text>
        <text x="400" y="98" fill="#0284c7" font-size="10">Q = 15 L/menit</text>
        <text x="400" y="115" fill="#475569" font-size="9.5">1 L = 1.000 cm³</text>
      </svg>`;

    // -------------------------------------------------------------
    // KIMIA: SET PERCOBAAN TITRASI ASAM BASA (BURET & ERLENMEYER)
    // -------------------------------------------------------------
    case 'chemistry_titration':
      return `<svg viewBox="0 0 520 250" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-lg mx-auto my-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-2 shadow-sm">
        <text x="260" y="22" fill="#0f172a" font-size="12" font-weight="bold" text-anchor="middle" font-family="sans-serif">${title}: Titrasi Asam-Basa</text>
        
        <!-- Stand / Retort -->
        <rect x="70" y="220" width="140" height="10" fill="#475569" rx="2" />
        <rect x="95" y="35" width="8" height="185" fill="#64748b" />
        <rect x="95" y="90" width="75" height="6" fill="#475569" />
        
        <!-- Burette -->
        <rect x="170" y="40" width="16" height="120" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5" />
        <line x1="170" y1="65" x2="178" y2="65" stroke="#0284c7" stroke-width="1" /><text x="145" y="68" font-size="8" fill="#0369a1">0 mL</text>
        <line x1="170" y1="125" x2="178" y2="125" stroke="#0284c7" stroke-width="1" /><text x="140" y="128" font-size="8" fill="#0369a1">30 mL</text>
        
        <polygon points="172,160 184,160 178,172" fill="#0284c7" />
        <line x1="178" y1="172" x2="178" y2="182" stroke="#0284c7" stroke-width="2" />
        <circle cx="178" cy="188" r="2" fill="#38bdf8" />

        <!-- Erlenmeyer Flask -->
        <polygon points="168,195 188,195 215,225 141,225" fill="#fdf2f8" stroke="#db2777" stroke-width="2" />
        <text x="178" y="218" fill="#be185d" font-size="9" font-weight="bold" text-anchor="middle">Merah Muda</text>

        <!-- Information Callouts -->
        <rect x="235" y="55" width="260" height="55" rx="6" fill="#f0f9ff" stroke="#bae6fd" />
        <text x="245" y="75" fill="#0369a1" font-size="11" font-weight="bold">Penitrasi (Buret):</text>
        <text x="245" y="90" fill="#075985" font-size="10.5">• Larutan Standar NaOH 0,10 M</text>
        <text x="245" y="103" fill="#075985" font-size="10.5">• Volume terpakai (Vb) = 30 mL</text>

        <rect x="235" y="135" width="260" height="65" rx="6" fill="#fdf2f8" stroke="#fbcfe8" />
        <text x="245" y="155" fill="#9d174d" font-size="11" font-weight="bold">Analit (Erlenmeyer):</text>
        <text x="245" y="170" fill="#831843" font-size="10.5">• Larutan Asam HCl: Va = 25 mL</text>
        <text x="245" y="183" fill="#831843" font-size="10.5">• Indikator Fenolftalein (PP)</text>
      </svg>`;

    // -------------------------------------------------------------
    // KIMIA: DIAGRAM TINGKAT ENERGI TERMOKIMIA (ENTALPI DELTA H)
    // -------------------------------------------------------------
    case 'chemistry_energy_diagram':
      return `<svg viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-lg mx-auto my-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-2 shadow-sm">
        <text x="260" y="24" fill="#0f172a" font-size="12" font-weight="bold" text-anchor="middle" font-family="sans-serif">${title}: Diagram Entalpi Pembakaran CH₄</text>
        
        <line x1="70" y1="210" x2="70" y2="40" stroke="#334155" stroke-width="2.5" />
        <polygon points="70,35 65,45 75,45" fill="#334155" />
        <text x="60" y="32" fill="#0f172a" font-size="11" font-weight="bold">H (kJ)</text>

        <!-- Reactants -->
        <line x1="100" y1="70" x2="260" y2="70" stroke="#2563eb" stroke-width="4" />
        <text x="180" y="60" fill="#1e40af" font-size="12" font-weight="bold" text-anchor="middle">CH₄(g) + 2O₂(g) [Reaktan]</text>

        <!-- Products -->
        <line x1="280" y1="170" x2="450" y2="170" stroke="#16a34a" stroke-width="4" />
        <text x="365" y="195" fill="#14532d" font-size="12" font-weight="bold" text-anchor="middle">CO₂(g) + 2H₂O(l) [Produk]</text>

        <!-- Arrow Delta H -->
        <line x1="270" y1="75" x2="270" y2="165" stroke="#dc2626" stroke-width="3" marker-end="url(#arrow-red)" />
        <rect x="285" y="105" width="165" height="40" rx="4" fill="#fee2e2" stroke="#fca5a5" />
        <text x="365" y="122" fill="#991b1b" font-size="11" font-weight="bold" text-anchor="middle">ΔH = -890 kJ/mol</text>
        <text x="365" y="137" fill="#7f1d1d" font-size="9.5" text-anchor="middle">(Reaksi Eksoterm: Melepas Kalor)</text>
      </svg>`;

    // -------------------------------------------------------------
    // INFORMATIKA: SUBNETTING IPV4 /26 & GERBANG LOGIKA
    // -------------------------------------------------------------
    case 'cs_subnet_binary':
      return `<svg viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-lg mx-auto my-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-2 shadow-sm">
        <text x="260" y="24" fill="#0f172a" font-size="12" font-weight="bold" text-anchor="middle" font-family="sans-serif">${title}: Alokasi Subnetting IPv4 CIDR /26</text>
        
        <!-- IP Box 192.168.10.75 -->
        <rect x="60" y="50" width="400" height="45" rx="6" fill="#f1f5f9" stroke="#94a3b8" />
        <text x="260" y="77" fill="#0f172a" font-size="13" font-weight="bold" text-anchor="middle">IP Address Host: 192.168.10.75 /26</text>

        <!-- Bit Breakdown 32 bits -->
        <rect x="60" y="115" width="280" height="35" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5" />
        <text x="200" y="137" fill="#1e40af" font-size="11" font-weight="bold" text-anchor="middle">Network Bits: 26 bit (Prefix /26)</text>

        <rect x="340" y="115" width="120" height="35" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5" />
        <text x="400" y="137" fill="#991b1b" font-size="11" font-weight="bold" text-anchor="middle">Host: 6 bit</text>

        <!-- Calculation info -->
        <rect x="60" y="165" width="400" height="55" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
        <text x="75" y="185" fill="#334155" font-size="10.5">• Subnet Mask: 255.255.255.192 (Oktet 4: 11000000₂ = 192)</text>
        <text x="75" y="202" fill="#334155" font-size="10.5">• Jumlah Host Valid per Subnet = 2⁶ - 2 = 64 - 2 = 62 Host</text>
      </svg>`;

    // -------------------------------------------------------------
    // EKONOMI: KURVA KESEIMBANGAN PASAR (DEMAND & SUPPLY)
    // -------------------------------------------------------------
    case 'econ_market_curve':
      return `<svg viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-lg mx-auto my-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-2 shadow-sm">
        <text x="260" y="22" fill="#0f172a" font-size="12" font-weight="bold" text-anchor="middle" font-family="sans-serif">${title}: Kurva Keseimbangan Pasar</text>
        
        <!-- Axes -->
        <line x1="80" y1="200" x2="450" y2="200" stroke="#334155" stroke-width="2" />
        <text x="460" y="204" fill="#0f172a" font-size="11" font-weight="bold">Q (Kuantitas)</text>
        <line x1="80" y1="200" x2="80" y2="40" stroke="#334155" stroke-width="2" />
        <text x="70" y="35" fill="#0f172a" font-size="11" font-weight="bold">P (Harga)</text>

        <!-- Demand Curve D: downwards -->
        <line x1="110" y1="60" x2="380" y2="190" stroke="#dc2626" stroke-width="2.5" />
        <text x="390" y="195" fill="#dc2626" font-size="11" font-weight="bold">D: Qd = 80 - 2P</text>

        <!-- Supply Curve S: upwards -->
        <line x1="110" y1="190" x2="380" y2="60" stroke="#2563eb" stroke-width="2.5" />
        <text x="390" y="65" fill="#2563eb" font-size="11" font-weight="bold">S: Qs = -20 + 3P</text>

        <!-- Intersection Equilibrium Point E -->
        <circle cx="245" cy="125" r="5" fill="#16a34a" />
        <line x1="80" y1="125" x2="245" y2="125" stroke="#16a34a" stroke-dasharray="3" />
        <text x="50" y="129" fill="#16a34a" font-size="10.5" font-weight="bold">P* = 20</text>

        <line x1="245" y1="125" x2="245" y2="200" stroke="#16a34a" stroke-dasharray="3" />
        <text x="245" y="215" fill="#16a34a" font-size="10.5" font-weight="bold" text-anchor="middle">Q* = 40</text>
        <text x="260" y="120" fill="#15803d" font-size="11" font-weight="bold">E(40, 20)</text>
      </svg>`;

    // -------------------------------------------------------------
    // BIOLOGI: KOTAK PUNNETT PERSILANGAN HUKUM MENDEL
    // -------------------------------------------------------------
    case 'bio_mendel_punnett':
      return `<svg viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-lg mx-auto my-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-2 shadow-sm">
        <text x="260" y="22" fill="#0f172a" font-size="12" font-weight="bold" text-anchor="middle" font-family="sans-serif">${title}: Rasio Fenotipe Dihibrid (BbKk × BbKk)</text>
        
        <!-- Summary Box -->
        <rect x="60" y="45" width="400" height="170" rx="8" fill="#f8fafc" stroke="#cbd5e1" />
        <text x="80" y="70" fill="#0f172a" font-size="11.5" font-weight="bold">Rasio Fenotipe F2 (Hukum Bebas Mendel):</text>
        <text x="80" y="95" fill="#15803d" font-size="11">• Bulat Kuning (B_K_) = 9/16 (56,25%)</text>
        <text x="80" y="118" fill="#0284c7" font-size="11">• Bulat Hijau (B_kk) = 3/16 (18,75%)</text>
        <text x="80" y="141" fill="#ea580c" font-size="11">• Keriput Kuning (bbK_) = 3/16 (18,75%)</text>
        <text x="80" y="164" fill="#dc2626" font-size="11">• Keriput Hijau (bbkk) = 1/16 (6,25%)</text>
        <text x="80" y="195" fill="#475569" font-size="10.5">Total Populasi F2 = 320 Keturunan => Bulat Hijau = 3/16 × 320 = 60 tanaman</text>
      </svg>`;

    // -------------------------------------------------------------
    // GEOGRAFI: KONTUR INTERVAL & SKALA PETA
    // -------------------------------------------------------------
    case 'geo_contour_map':
      return `<svg viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-lg mx-auto my-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-2 shadow-sm">
        <text x="260" y="22" fill="#0f172a" font-size="12" font-weight="bold" text-anchor="middle" font-family="sans-serif">${title}: Peta Topografi Garis Kontur</text>
        
        <!-- Contour rings -->
        <ellipse cx="200" cy="130" rx="120" ry="70" fill="none" stroke="#78350f" stroke-width="2" />
        <text x="325" y="133" fill="#78350f" font-size="10" font-weight="bold">100 m</text>
        
        <ellipse cx="200" cy="130" rx="80" ry="45" fill="none" stroke="#78350f" stroke-width="2" />
        <text x="285" y="133" fill="#78350f" font-size="10" font-weight="bold">125 m</text>

        <ellipse cx="200" cy="130" rx="40" ry="25" fill="none" stroke="#78350f" stroke-width="2" />
        <text x="245" y="133" fill="#78350f" font-size="10" font-weight="bold">150 m (Puncak)</text>

        <!-- Information Callout -->
        <rect x="360" y="55" width="135" height="100" rx="6" fill="#fef3c7" stroke="#fde68a" />
        <text x="370" y="75" fill="#92400e" font-size="10.5" font-weight="bold">Parameter Peta:</text>
        <text x="370" y="93" fill="#78350f" font-size="10">• Skala 1 : 50.000</text>
        <text x="370" y="110" fill="#78350f" font-size="10">• CI = 1/2000 × 50.000</text>
        <text x="370" y="128" fill="#78350f" font-size="10" font-weight="bold">• CI = 25 meter</text>
        <text x="370" y="145" fill="#78350f" font-size="9.5">• Titik A ke B = 6 cm</text>
      </svg>`;

    default:
      return null;
  }
};

/**
 * Bank Generator Soal Kuantitatif Alami & Autentik
 * Sesuai dengan Fase, Kelas, Rumus Resmi, dan Perhitungan Angka Nyata
 */
export const generateExactScienceQuestion = ({
  subjectCategory,
  actualMapel,
  topikCapaian,
  item,
  idx,
  fase = 'F',
  kelas = 'Kelas 10',
  itemLang = 'id',
  assignedElement = 'Penalaran Kritis',
  assignedBloom = 'C3',
  isFaseABCD = false,
  optionLetters = ['A', 'B', 'C', 'D', 'E'],
  defaultCorrectKey = 'C'
}) => {
  let stimulus = '';
  let butirSoal = '';
  let options = [];
  let correctKey = defaultCorrectKey;
  let correctKeys = isFaseABCD ? ['A', 'C'] : ['A', 'C', 'E'];
  let scoringGuide = '';
  let explanation = '';
  let svgType = 'physics_fbd';

  const isSD = ['A', 'B', 'C'].includes(fase) || kelas.toLowerCase().includes('sd') || ['1','2','3','4','5','6'].some(k => kelas.includes(k));
  const isSMP = fase === 'D' || kelas.toLowerCase().includes('smp') || ['7','8','9'].some(k => kelas.includes(k));

  // =========================================================================
  // 1. MATA PELAJARAN MATEMATIKA
  // =========================================================================
  if (subjectCategory === 'matematika') {
    if (isSD) {
      // -------------------------------------------------------------
      // MATEMATIKA JENJANG SD (FASE A / B / C)
      // -------------------------------------------------------------
      const sdSubTopics = ['sd_pecahan', 'sd_bangun_datar', 'sd_skala', 'sd_volume_debit', 'sd_statistika'];
      const chosen = sdSubTopics[idx % sdSubTopics.length];

      if (chosen === 'sd_pecahan') {
        svgType = 'math_sd_rectangle';
        correctKey = isFaseABCD ? 'B' : 'B';
        stimulus = `Pak Arman memanen 48 kg buah mangga dari kebun sekolah. Sebanyak 3/8 bagian dari hasil panen tersebut dibagikan kepada warga sekitar sekolah, dan 1/4 bagian dijual ke pedagang buah. Sisanya disimpan untuk konsumsi keluarga di rumah.`;
        butirSoal = `Berapakah berat buah mangga yang disimpan Pak Arman untuk konsumsi keluarga di rumah?`;

        const numericOptions = [
          { key: 'A', text: '12 kg' },
          { key: 'B', text: '18 kg' },
          { key: 'C', text: '20 kg' },
          { key: 'D', text: '24 kg' },
          { key: 'E', text: '30 kg' }
        ];
        options = optionLetters.map(letter => numericOptions.find(o => o.key === letter) || { key: letter, text: '15 kg' });

        scoringGuide = `Pedoman Penskoran:
1. Menghitung mangga dibagikan: (3/8) × 48 = 18 kg (Skor 1)
2. Menghitung mangga dijual: (1/4) × 48 = 12 kg (Skor 1)
3. Menghitung sisa mangga keluarga: 48 - (18 + 12) = 48 - 30 = 18 kg (Skor 2)`;

        explanation = `Langkah Perhitungan Lengkap:
• Total hasil panen = 48 kg
• Bagian yang dibagikan kepada warga = (3/8) × 48 kg = 18 kg
• Bagian yang dijual ke pedagang = (1/4) × 48 kg = 12 kg
• Jumlah mangga yang sudah dialokasikan = 18 kg + 12 kg = 30 kg
• Sisa untuk keluarga = 48 kg - 30 kg = 18 kg.
Jawaban yang tepat adalah opsi ${correctKey} (18 kg).`;

      } else if (chosen === 'sd_bangun_datar') {
        svgType = 'math_sd_rectangle';
        correctKey = isFaseABCD ? 'C' : 'C';
        stimulus = `Perhatikan denah taman sekolah pada gambar di atas! Taman tersebut berbentuk persegi panjang dengan ukuran panjang 24 meter dan lebar 15 meter. Di sekeliling taman akan dipasangi tiang lampu penerangan dengan jarak antartiang tepat 3 meter.`;
        butirSoal = `Hitunglah luas taman sekolah tersebut dan berapa banyak tiang lampu yang dibutuhkan di sekeliling taman!`;

        const numericOptions = [
          { key: 'A', text: 'Luas = 300 m² dan 20 tiang lampu' },
          { key: 'B', text: 'Luas = 360 m² dan 39 tiang lampu' },
          { key: 'C', text: 'Luas = 360 m² dan 26 tiang lampu' },
          { key: 'D', text: 'Luas = 390 m² dan 26 tiang lampu' },
          { key: 'E', text: 'Luas = 360 m² dan 52 tiang lampu' }
        ];
        options = optionLetters.map(letter => numericOptions.find(o => o.key === letter) || { key: letter, text: '360 m²' });

        scoringGuide = `Pedoman Penskoran:
1. Menghitung luas persegi panjang: L = p × l = 24 × 15 = 360 m² (Skor 2)
2. Menghitung keliling persegi panjang: K = 2 × (p + l) = 2 × (24 + 15) = 2 × 39 = 78 meter (Skor 1)
3. Menghitung banyak lampu: 78 m / 3 m = 26 tiang lampu (Skor 1)`;

        explanation = `Langkah Perhitungan Lengkap:
• Luas Taman = panjang × lebar = 24 m × 15 m = 360 m²
• Keliling Taman = 2 × (p + l) = 2 × (24 m + 15 m) = 2 × 39 m = 78 m
• Jumlah tiang lampu = Keliling / Jarak antarlampu = 78 m / 3 m = 26 tiang lampu.
Jawaban yang benar adalah opsi ${correctKey}.`;

      } else if (chosen === 'sd_skala') {
        svgType = 'math_sd_rectangle';
        correctKey = isFaseABCD ? 'A' : 'A';
        stimulus = `Pada sebuah denah gedung sekolah berskala 1 : 150, ruang laboratorium komputer digambarkan dengan panjang 6 cm dan lebar 4 cm.`;
        butirSoal = `Berapakah luas laboratorium komputer yang sebenarnya dalam satuan meter persegi (m²)?`;

        const numericOptions = [
          { key: 'A', text: '54 m²' },
          { key: 'B', text: '36 m²' },
          { key: 'C', text: '48 m²' },
          { key: 'D', text: '60 m²' },
          { key: 'E', text: '72 m²' }
        ];
        options = optionLetters.map(letter => numericOptions.find(o => o.key === letter) || { key: letter, text: '54 m²' });

        scoringGuide = `Pedoman Penskoran:
1. Menghitung panjang sebenarnya: 6 cm × 150 = 900 cm = 9 meter (Skor 1)
2. Menghitung lebar sebenarnya: 4 cm × 150 = 600 cm = 6 meter (Skor 1)
3. Menghitung luas sebenarnya: 9 m × 6 m = 54 m² (Skor 2)`;

        explanation = `Langkah Perhitungan:
• Panjang sebenarnya = 6 cm × 150 = 900 cm = 9 meter
• Lebar sebenarnya = 4 cm × 150 = 600 cm = 6 meter
• Luas sebenarnya = 9 m × 6 m = 54 m².
Jawaban yang benar adalah opsi ${correctKey} (54 m²).`;

      } else if (chosen === 'sd_volume_debit') {
        svgType = 'math_sd_rectangle';
        correctKey = isFaseABCD ? 'D' : 'D';
        stimulus = `Perhatikan gambar bak penampungan air berbentuk balok di atas! Bak tersebut memiliki ukuran panjang 120 cm, lebar 80 cm, dan tinggi 75 cm. Bak tersebut diisi air dari sebuah kran yang mengalirkan air dengan debit tetap 15 liter per menit.`;
        butirSoal = `Jika bak mula-mula dalam keadaan kosong, berapakah waktu yang dibutuhkan kran untuk mengisi bak mandi tersebut sampai penuh?`;

        const numericOptions = [
          { key: 'A', text: '36 menit' },
          { key: 'B', text: '40 menit' },
          { key: 'C', text: '45 menit' },
          { key: 'D', text: '48 menit' },
          { key: 'E', text: '54 menit' }
        ];
        options = optionLetters.map(letter => numericOptions.find(o => o.key === letter) || { key: letter, text: '48 menit' });

        scoringGuide = `Pedoman Penskoran:
1. Menghitung volume balok: V = p × l × t = 120 × 80 × 75 = 720.000 cm³ (Skor 2)
2. Mengonversi ke Liter: 720.000 cm³ = 720 dm³ = 720 Liter (Skor 1)
3. Menghitung waktu pengisian: Waktu = Volume / Debit = 720 L / 15 L/menit = 48 menit (Skor 1)`;

        explanation = `Langkah Perhitungan Lengkap:
• Volume bak balok = p × l × t = 120 cm × 80 cm × 75 cm = 720.000 cm³
• Konversi volume: 1 Liter = 1.000 cm³ => 720.000 cm³ = 720 Liter
• Waktu pengisian = Volume / Debit = 720 Liter / 15 Liter/menit = 48 menit.
Jawaban yang tepat adalah opsi ${correctKey} (48 menit).`;

      } else {
        svgType = 'math_sd_rectangle';
        correctKey = isFaseABCD ? 'B' : 'B';
        stimulus = `Data perolehan nilai asesmen matematika dari 5 orang siswa adalah sebagai berikut: 78, 85, 90, 82, dan 95. Kemudian seorang siswa baru yang baru pindah mengikuti asesmen susulan sehingga nilai rata-rata keseluruhan dari 6 siswa tersebut menjadi 84.`;
        butirSoal = `Berapakah nilai asesmen matematika yang diperoleh siswa baru tersebut?`;

        const numericOptions = [
          { key: 'A', text: '68' },
          { key: 'B', text: '72' },
          { key: 'C', text: '76' },
          { key: 'D', text: '80' },
          { key: 'E', text: '84' }
        ];
        options = optionLetters.map(letter => numericOptions.find(o => o.key === letter) || { key: letter, text: '72' });

        scoringGuide = `Pedoman Penskoran:
1. Menghitung jumlah nilai 5 siswa: 78 + 85 + 90 + 82 + 95 = 432 (Skor 1)
2. Menghitung jumlah nilai total 6 siswa: 6 × 84 = 504 (Skor 2)
3. Nilai siswa baru: 504 - 432 = 72 (Skor 1)`;

        explanation = `Langkah Perhitungan:
• Jumlah nilai 5 siswa pertama = 78 + 85 + 90 + 82 + 95 = 432
• Jumlah nilai setelah 6 siswa = 6 × 84 = 504
• Nilai siswa susulan = 504 - 432 = 72.
Jawaban yang benar adalah opsi ${correctKey} (72).`;
      }

    } else if (isSMP) {
      // -------------------------------------------------------------
      // MATEMATIKA JENJANG SMP (FASE D)
      // -------------------------------------------------------------
      const smpSubTopics = ['smp_pythagoras', 'smp_spldv', 'smp_lingkaran', 'smp_bangun_ruang', 'smp_garis_lurus'];
      const chosen = smpSubTopics[idx % smpSubTopics.length];

      if (chosen === 'smp_pythagoras') {
        svgType = 'math_geometry_triangle';
        correctKey = isFaseABCD ? 'A' : 'A';
        stimulus = `Perhatikan gambar segitiga siku-siku ABC pada gambar di atas! Segitiga tersebut siku-siku di titik B, dengan panjang sisi alas AB = 12 cm dan tinggi BC = 5 cm. Sudut lancip α terletak pada titik A.`;
        butirSoal = `Tentukan panjang sisi miring (hipotenusa) AC serta nilai hasil penjumlahan perbandingan trigonometri (sin α + cos α)!`;

        const numericOptions = [
          { key: 'A', text: 'AC = 13 cm dan sin α + cos α = 17/13' },
          { key: 'B', text: 'AC = 13 cm dan sin α + cos α = 12/13' },
          { key: 'C', text: 'AC = 15 cm dan sin α + cos α = 17/15' },
          { key: 'D', text: 'AC = 13 cm dan sin α + cos α = 7/13' },
          { key: 'E', text: 'AC = 17 cm dan sin α + cos α = 15/17' }
        ];
        options = optionLetters.map(letter => numericOptions.find(o => o.key === letter) || { key: letter, text: 'AC = 13 cm' });

        scoringGuide = `Pedoman Penskoran:
1. Teorema Pythagoras: AC = √(AB² + BC²) = √(12² + 5²) = √(144 + 25) = √169 = 13 cm (Skor 2)
2. Nilai trigonometri: sin α = 5/13, cos α = 12/13 (Skor 1)
3. Penjumlahan: sin α + cos α = 5/13 + 12/13 = 17/13 (Skor 1)`;

        explanation = `Langkah Perhitungan Lengkap:
• Sisi miring AC = √(12² + 5²) = √(144 + 25) = √169 = 13 cm
• sin α = depan / miring = BC / AC = 5 / 13
• cos α = samping / miring = AB / AC = 12 / 13
• sin α + cos α = 5/13 + 12/13 = 17/13.
Jawaban yang tepat adalah opsi ${correctKey}.`;

      } else if (chosen === 'smp_spldv') {
        svgType = 'math_function_graph';
        correctKey = isFaseABCD ? 'B' : 'B';
        stimulus = `Di sebuah koperasi sekolah, Fatih membeli 3 buah buku tulis dan 2 buah pensil dengan total harga Rp 28.000. Di saat bersamaan, Zahra membeli 2 buah buku tulis dan 5 buah pensil yang sama dengan total harga Rp 37.000.`;
        butirSoal = `Berapakah harga yang harus dibayar oleh Salman jika ia ingin membeli 4 buah buku tulis dan 1 buah pensil?`;

        const numericOptions = [
          { key: 'A', text: 'Rp 26.000' },
          { key: 'B', text: 'Rp 29.000' },
          { key: 'C', text: 'Rp 31.000' },
          { key: 'D', text: 'Rp 33.000' },
          { key: 'E', text: 'Rp 35.000' }
        ];
        options = optionLetters.map(letter => numericOptions.find(o => o.key === letter) || { key: letter, text: 'Rp 29.000' });

        scoringGuide = `Pedoman Penskoran:
1. Model matematika SPLDV: 3x + 2y = 28.000 dan 2x + 5y = 37.000 (Skor 1)
2. Eliminasi x menghasilkan y = 5.000 (Skor 1)
3. Substitusi menghasilkan x = 6.000 (Skor 1)
4. Menghitung 4x + y = 4(6.000) + 5.000 = Rp 29.000 (Skor 1)`;

        explanation = `Langkah Perhitungan:
Misal harga 1 buku = x dan harga 1 pensil = y.
(1) 3x + 2y = 28.000  (×2) => 6x + 4y = 56.000
(2) 2x + 5y = 37.000  (×3) => 6x + 15y = 111.000
Kurangkan: 11y = 55.000 => y = Rp 5.000 (harga 1 pensil)
Substitusi ke (1): 3x + 2(5.000) = 28.000 => 3x = 18.000 => x = Rp 6.000 (harga 1 buku)
Harga 4 buku + 1 pensil = 4(Rp 6.000) + Rp 5.000 = Rp 24.000 + Rp 5.000 = Rp 29.000.
Jawaban yang tepat adalah opsi ${correctKey}.`;

      } else if (chosen === 'smp_lingkaran') {
        svgType = 'math_geometry_circle';
        correctKey = isFaseABCD ? 'C' : 'C';
        stimulus = `Perhatikan gambar lingkaran berpusat di O dengan jari-jari r = 14 cm di atas! Diketahui sudut pusat juring AOB adalah 90° (sudut siku-siku). Gunakan nilai pendekatan π = 22/7.`;
        butirSoal = `Berapakah luas juring AOB dan panjang busur AB pada lingkaran tersebut?`;

        const numericOptions = [
          { key: 'A', text: 'Luas = 77 cm² dan Busur = 11 cm' },
          { key: 'B', text: 'Luas = 110 cm² dan Busur = 18 cm' },
          { key: 'C', text: 'Luas = 154 cm² dan Busur = 22 cm' },
          { key: 'D', text: 'Luas = 308 cm² dan Busur = 44 cm' },
          { key: 'E', text: 'Luas = 616 cm² dan Busur = 88 cm' }
        ];
        options = optionLetters.map(letter => numericOptions.find(o => o.key === letter) || { key: letter, text: 'Luas = 154 cm²' });

        scoringGuide = `Pedoman Penskoran:
1. Luas Juring: (90°/360°) × (22/7) × 14² = (1/4) × 616 = 154 cm² (Skor 2)
2. Panjang Busur: (90°/360°) × 2 × (22/7) × 14 = (1/4) × 88 = 22 cm (Skor 2)`;

        explanation = `Langkah Perhitungan Lengkap:
• Luas Juring AOB = (θ / 360°) × π × r² = (90° / 360°) × (22/7) × 14 × 14 = (1/4) × 616 = 154 cm²
• Panjang Busur AB = (θ / 360°) × 2 × π × r = (1/4) × 2 × (22/7) × 14 = (1/4) × 88 = 22 cm.
Jawaban yang benar adalah opsi ${correctKey}.`;

      } else {
        svgType = 'math_sd_rectangle';
        correctKey = isFaseABCD ? 'A' : 'A';
        stimulus = `Sebuah tempat penampungan air berbentuk tabung silinder tanpa tutup memiliki jari-jari alas r = 7 cm dan tinggi t = 20 cm. Tempat air tersebut akan diisi air sampai penuh (gunakan π = 22/7).`;
        butirSoal = `Berapakah volume air maksimum yang dapat ditampung tabung tersebut?`;

        const numericOptions = [
          { key: 'A', text: '3.080 cm³' },
          { key: 'B', text: '2.464 cm³' },
          { key: 'C', text: '1.540 cm³' },
          { key: 'D', text: '4.620 cm³' },
          { key: 'E', text: '6.160 cm³' }
        ];
        options = optionLetters.map(letter => numericOptions.find(o => o.key === letter) || { key: letter, text: '3.080 cm³' });

        scoringGuide = `Pedoman Penskoran:
1. Menuliskan rumus volume tabung: V = π × r² × t (Skor 1)
2. Substitusi: V = (22/7) × 7² × 20 = 22 × 7 × 20 (Skor 2)
3. Hasil akhir: V = 3.080 cm³ (Skor 1)`;

        explanation = `Langkah Perhitungan:
Volume Tabung = π × r² × t = (22/7) × 7 × 7 × 20 = 154 × 20 = 3.080 cm³.
Jawaban yang tepat adalah opsi ${correctKey} (3.080 cm³).`;
      }

    } else {
      // -------------------------------------------------------------
      // MATEMATIKA JENJANG SMA / SMK (FASE E & F)
      // -------------------------------------------------------------
      const smaSubTopics = ['sma_fungsi_kuadrat', 'sma_trigonometri', 'sma_deret', 'sma_logaritma', 'sma_turunan', 'sma_matriks'];
      const chosen = smaSubTopics[idx % smaSubTopics.length];

      if (chosen === 'sma_fungsi_kuadrat') {
        svgType = 'math_function_graph';
        correctKey = isFaseABCD ? 'C' : 'C';
        stimulus = `Perhatikan kurva grafik fungsi kuadrat f(x) = x² - 6x + 5 pada sistem koordinat Kartesius di atas!`;
        butirSoal = `Berdasarkan fungsi kuadrat tersebut, tentukan koordinat titik puncak (titik balik minimum) serta titik-titik potong grafik terhadap sumbu-X!`;

        const numericOptions = [
          { key: 'A', text: 'Puncak (2, -3) dan titik potong (2, 0) dan (3, 0)' },
          { key: 'B', text: 'Puncak (3, -9) dan titik potong (-1, 0) dan (5, 0)' },
          { key: 'C', text: 'Puncak (3, -4) dan titik potong (1, 0) dan (5, 0)' },
          { key: 'D', text: 'Puncak (-3, 4) dan titik potong (-1, 0) dan (-5, 0)' },
          { key: 'E', text: 'Puncak (3, 4) dan titik potong (1, 0) dan (5, 0)' }
        ];
        options = optionLetters.map(letter => numericOptions.find(o => o.key === letter) || { key: letter, text: 'Puncak (3, -4)' });

        scoringGuide = `Pedoman Penskoran:
1. Titik potong sumbu-X: x² - 6x + 5 = 0 => (x - 1)(x - 5) = 0 => x = 1 atau x = 5 (Skor 2)
2. Sumbu simetri: xp = -b / (2a) = -(-6) / (2 × 1) = 3 (Skor 1)
3. Nilai optimum: yp = f(3) = 3² - 6(3) + 5 = -4 => Puncak (3, -4) (Skor 1)`;

        explanation = `Langkah Perhitungan Lengkap:
Koefisien: a = 1, b = -6, c = 5.
1. Titik potong sumbu X (f(x) = 0):
   x² - 6x + 5 = 0 => (x - 1)(x - 5) = 0 => x = 1 atau x = 5 => (1, 0) dan (5, 0).
2. Titik Puncak:
   xp = -b / (2a) = 6 / 2 = 3
   yp = f(3) = 9 - 18 + 5 = -4 => Puncak (3, -4).
Jawaban yang benar adalah opsi ${correctKey}.`;

      } else if (chosen === 'sma_deret') {
        svgType = 'math_function_graph';
        correctKey = isFaseABCD ? 'B' : 'B';
        stimulus = `Diketahui suku ke-3 suatu deret aritmetika adalah 11 dan suku ke-8 adalah 31.`;
        butirSoal = `Tentukan suku pertama (a), beda (b), dan jumlah 15 suku pertama (S₁₅) dari deret aritmetika tersebut!`;

        const numericOptions = [
          { key: 'A', text: 'a = 2, b = 4, dan S₁₅ = 420' },
          { key: 'B', text: 'a = 3, b = 4, dan S₁₅ = 465' },
          { key: 'C', text: 'a = 3, b = 5, dan S₁₅ = 485' },
          { key: 'D', text: 'a = 4, b = 4, dan S₁₅ = 510' },
          { key: 'E', text: 'a = 3, b = 4, dan S₁₅ = 520' }
        ];
        options = optionLetters.map(letter => numericOptions.find(o => o.key === letter) || { key: letter, text: 'S₁₅ = 465' });

        scoringGuide = `Pedoman Penskoran:
1. U8 - U3 = 5b = 31 - 11 = 20 => b = 4 (Skor 1)
2. U3 = a + 2b = 11 => a + 8 = 11 => a = 3 (Skor 1)
3. S15 = (15/2) × (2(3) + 14(4)) = (15/2) × (6 + 56) = (15/2) × 62 = 465 (Skor 2)`;

        explanation = `Langkah Perhitungan:
• U8 - U3 = (a + 7b) - (a + 2b) = 5b
  5b = 31 - 11 = 20 => b = 4
• a + 2(4) = 11 => a = 11 - 8 = 3
• Sn = (n/2) [2a + (n-1)b]
  S15 = (15/2) [2(3) + 14(4)] = (15/2) [6 + 56] = (15/2) × 62 = 15 × 31 = 465.
Jawaban yang tepat adalah opsi ${correctKey}.`;

      } else if (chosen === 'sma_logaritma') {
        svgType = 'math_function_graph';
        correctKey = isFaseABCD ? 'A' : 'A';
        stimulus = `Diketahui persamaan logaritma: ²log(x) + ²log(x - 2) = 3 dengan syarat numerus x > 2.`;
        butirSoal = `Berapakah nilai x riil yang memenuhi persamaan logaritma di atas?`;

        const numericOptions = [
          { key: 'A', text: 'x = 4' },
          { key: 'B', text: 'x = 6' },
          { key: 'C', text: 'x = 2 atau x = 4' },
          { key: 'D', text: 'x = 8' },
          { key: 'E', text: 'x = -2 atau x = 4' }
        ];
        options = optionLetters.map(letter => numericOptions.find(o => o.key === letter) || { key: letter, text: 'x = 4' });

        scoringGuide = `Pedoman Penskoran:
1. Sifat penjumlahan logaritma: ²log(x(x - 2)) = 3 (Skor 1)
2. Bentuk eksponen: x² - 2x = 2³ = 8 => x² - 2x - 8 = 0 (Skor 1)
3. Faktorisasi: (x - 4)(x + 2) = 0 => x = 4 atau x = -2 (Skor 1)
4. Uji syarat numerus x > 2: x = 4 memenuhi, x = -2 tidak memenuhi (Skor 1)`;

        explanation = `Langkah Perhitungan:
²log[x(x - 2)] = 3
x² - 2x = 2³
x² - 2x = 8 => x² - 2x - 8 = 0
(x - 4)(x + 2) = 0 => x = 4 atau x = -2.
Karena syarat numerus mensyaratkan x > 0 dan x - 2 > 0 (x > 2), maka x = -2 tidak memenuhi.
Solusi tunggal yang sah adalah x = 4.
Jawaban yang benar adalah opsi ${correctKey}.`;

      } else {
        svgType = 'math_geometry_triangle';
        correctKey = isFaseABCD ? 'A' : 'A';
        stimulus = `Perhatikan segitiga siku-siku ABC pada gambar di atas dengan panjang sisi alas AB = 12 cm dan tinggi BC = 5 cm serta sudut lancip α di A.`;
        butirSoal = `Tentukan panjang sisi miring AC dan nilai dari (sin α + cos α)!`;

        const numericOptions = [
          { key: 'A', text: 'AC = 13 cm dan 17/13' },
          { key: 'B', text: 'AC = 13 cm dan 12/13' },
          { key: 'C', text: 'AC = 15 cm dan 17/15' },
          { key: 'D', text: 'AC = 13 cm dan 7/13' },
          { key: 'E', text: 'AC = 17 cm dan 15/17' }
        ];
        options = optionLetters.map(letter => numericOptions.find(o => o.key === letter) || { key: letter, text: '17/13' });

        scoringGuide = `Pedoman Penskoran:
1. Teorema Pythagoras: AC = √(12² + 5²) = 13 cm (Skor 2)
2. sin α = 5/13, cos α = 12/13 => sin α + cos α = 17/13 (Skor 2)`;

        explanation = `Langkah Perhitungan:
AC = √(12² + 5²) = 13 cm. sin α = 5/13, cos α = 12/13.
sin α + cos α = 5/13 + 12/13 = 17/13.
Jawaban yang tepat adalah opsi ${correctKey}.`;
      }
    }

  // =========================================================================
  // 2. MATA PELAJARAN FISIKA
  // =========================================================================
  } else if (subjectCategory === 'fisika') {
    const physicsTopics = ['dinamika_gaya', 'rangkaian_listrik', 'kinematika_vt', 'usaha_energi'];
    const chosen = physicsTopics[idx % physicsTopics.length];

    if (chosen === 'dinamika_gaya') {
      svgType = 'physics_fbd';
      correctKey = isFaseABCD ? 'B' : 'B';
      stimulus = `Perhatikan gambar diagram gaya bebas di atas! Sebuah balok bermassa m = 4 kg diletakkan pada bidang datar kasar. Balok tersebut ditarik oleh gaya F = 32 N yang membentuk sudut elevasi θ = 30° terhadap arah horizontal. Koefisien gesekan kinetis antara balok dengan lantai adalah μk = 0,2. Diketahui percepatan gravitasi g = 10 m/s², sin 30° = 0,50, dan cos 30° = 0,86.`;
      butirSoal = `Berdasarkan diagram dan besaran gaya di atas, berapakah besar percepatan gerak (a) yang dialami balok tersebut?`;

      const numericOptions = [
        { key: 'A', text: '4,25 m/s²' },
        { key: 'B', text: '5,68 m/s²' },
        { key: 'C', text: '6,88 m/s²' },
        { key: 'D', text: '8,00 m/s²' },
        { key: 'E', text: '9,50 m/s²' }
      ];
      options = optionLetters.map(letter => numericOptions.find(o => o.key === letter) || { key: letter, text: '5,68 m/s²' });

      scoringGuide = `Pedoman Penskoran Fisika:
1. Menentukan gaya normal: N = mg - F.sin(30°) = (4)(10) - (32)(0,5) = 40 - 16 = 24 N (Skor 1)
2. Menghitung gaya gesek kinetis: fk = μk . N = 0,2 × 24 = 4,8 N (Skor 1)
3. Menghitung resultan gaya horizontal: ΣFx = F.cos(30°) - fk = (32)(0,86) - 4,8 = 27,52 - 4,8 = 22,72 N (Skor 1)
4. Menghitung percepatan: a = ΣFx / m = 22,72 / 4 = 5,68 m/s² (Skor 1)`;

      explanation = `Langkah Perhitungan Lengkap:
• Gaya Normal: N = mg - F.sin 30° = 40 - 16 = 24 N
• Gaya Gesek: fk = μk × N = 0,2 × 24 N = 4,8 N
• Komponen Horizontal: Fx = F × cos 30° = 32 × 0,86 = 27,52 N
• Resultan Sumbu X: ΣFx = 27,52 - 4,8 = 22,72 N
• Percepatan: a = ΣFx / m = 22,72 / 4 = 5,68 m/s².
Jawaban yang tepat adalah opsi ${correctKey} (5,68 m/s²).`;

    } else if (chosen === 'rangkaian_listrik') {
      svgType = 'physics_circuit';
      correctKey = isFaseABCD ? 'C' : 'C';
      stimulus = `Perhatikan gambar diagram rangkaian listrik tertutup di atas! Tiga buah resistor dengan nilai hambatan masing-masing R1 = 4 Ω, R2 = 6 Ω, dan R3 = 12 Ω dihubungkan dengan sumber tegangan baterai E = 18 Volt yang memiliki hambatan dalam r = 1 Ω.`;
      butirSoal = `Berdasarkan konfigurasi rangkaian pada gambar, berapakah kuat arus listrik total (I) yang mengalir pada rangkaian utama dan beda potensial antara titik A dan B (V_AB)?`;

      const numericOptions = [
        { key: 'A', text: 'I = 1,0 A dan V_AB = 4,0 Volt' },
        { key: 'B', text: 'I = 1,5 A dan V_AB = 6,0 Volt' },
        { key: 'C', text: 'I = 2,0 A dan V_AB = 8,0 Volt' },
        { key: 'D', text: 'I = 2,5 A dan V_AB = 10,0 Volt' },
        { key: 'E', text: 'I = 3,0 A dan V_AB = 12,0 Volt' }
      ];
      options = optionLetters.map(letter => numericOptions.find(o => o.key === letter) || { key: letter, text: 'I = 2,0 A' });

      scoringGuide = `Pedoman Penskoran:
1. Hambatan paralel R2 dan R3: 1/Rp = 1/6 + 1/12 = 3/12 => Rp = 4 Ω (Skor 1)
2. Hambatan total: Rtot = R1 + Rp + r = 4 + 4 + 1 = 9 Ω (Skor 1)
3. Kuat arus total: I = E / Rtot = 18 / 9 = 2,0 A (Skor 1)
4. Beda potensial V_AB: V_AB = I × Rp = 2,0 × 4 = 8,0 Volt (Skor 1)`;

      explanation = `Langkah Perhitungan Lengkap:
• Hambatan Paralel R2 & R3: 1/Rp = 1/6 + 1/12 = 3/12 => Rp = 4 Ω
• Hambatan Total: R_total = R1 + Rp + r = 4 + 4 + 1 = 9 Ω
• Arus Total: I = E / R_total = 18 V / 9 Ω = 2,0 Ampere
• Tegangan V_AB = I × Rp = 2,0 A × 4 Ω = 8,0 Volt.
Jawaban yang tepat adalah opsi ${correctKey}.`;

    } else if (chosen === 'kinematika_vt') {
      svgType = 'physics_motion_graph';
      correctKey = isFaseABCD ? 'D' : 'D';
      stimulus = `Perhatikan grafik hubungan kecepatan terhadap waktu (v-t) pada gambar di atas yang menggambarkan gerak lurus suatu partikel uji selama 14 sekon!`;
      butirSoal = `Berdasarkan analisis grafik di atas, hitunglah jarak total (s) yang ditempuh partikel tersebut dari t = 0 s hingga t = 14 s!`;

      const numericOptions = [
        { key: 'A', text: '120 meter' },
        { key: 'B', text: '160 meter' },
        { key: 'C', text: '180 meter' },
        { key: 'D', text: '200 meter' },
        { key: 'E', text: '240 meter' }
      ];
      options = optionLetters.map(letter => numericOptions.find(o => o.key === letter) || { key: letter, text: '200 meter' });

      scoringGuide = `Pedoman Penskoran:
1. Menghitung luas trapesium di bawah grafik v-t (Skor 2)
2. Jarak total = 1/2 × (14 + 6) × 20 = 200 meter (Skor 2)`;

      explanation = `Langkah Perhitungan:
Jarak tempuh = Luas Trapesium di bawah kurva v-t:
s = 1/2 × (sisi sejajar 1 + sisi sejajar 2) × tinggi
s = 1/2 × (14 + 6) × 20 = 1/2 × 20 × 20 = 200 meter.
Jawaban yang tepat adalah opsi ${correctKey} (200 meter).`;

    } else {
      svgType = 'physics_fbd';
      correctKey = isFaseABCD ? 'A' : 'A';
      stimulus = `Sebuah benda bermassa m = 2 kg jatuh bebas dari gedung berketinggian h1 = 20 meter di atas tanah. Abaikan gesekan udara dan gunakan percepatan gravitasi g = 10 m/s².`;
      butirSoal = `Berapakah energi kinetik (Ek) yang dimiliki benda saat berada pada ketinggian h2 = 5 meter di atas permukaan tanah?`;

      const numericOptions = [
        { key: 'A', text: '300 Joule' },
        { key: 'B', text: '250 Joule' },
        { key: 'C', text: '200 Joule' },
        { key: 'D', text: '150 Joule' },
        { key: 'E', text: '100 Joule' }
      ];
      options = optionLetters.map(letter => numericOptions.find(o => o.key === letter) || { key: letter, text: '300 Joule' });

      scoringGuide = `Pedoman Penskoran:
1. Hukum Kekekalan Energi Mekanik: Ek = m × g × (h1 - h2) (Skor 2)
2. Ek = 2 × 10 × (20 - 5) = 300 Joule (Skor 2)`;

      explanation = `Langkah Perhitungan:
Ek = Ep1 - Ep2 = m × g × (h1 - h2) = 2 kg × 10 m/s² × (20 m - 5 m) = 20 × 15 = 300 Joule.
Jawaban yang tepat adalah opsi ${correctKey} (300 Joule).`;
    }

  // =========================================================================
  // 3. MATA PELAJARAN KIMIA
  // =========================================================================
  } else if (subjectCategory === 'kimia') {
    const chemTopics = ['titrasi_asam_basa', 'termokimia_entalpi', 'stoikiometri_reaksi', 'elektrokimia_volta'];
    const chosen = chemTopics[idx % chemTopics.length];

    if (chosen === 'titrasi_asam_basa') {
      svgType = 'chemistry_titration';
      correctKey = isFaseABCD ? 'C' : 'C';
      stimulus = `Perhatikan gambar set alat titrasi asam-basa pada laboratorium di atas! Sebanyak 25,0 mL larutan asam klorida (HCl) yang belum diketahui konsentrasinya dititrasi dengan larutan standar natrium hidroksida (NaOH) 0,10 M menggunakan indikator fenolftalein (PP). Titik akhir titrasi tercapai saat volume NaOH yang terpakai dari buret tepat 30,0 mL.`;
      butirSoal = `Berdasarkan data volumetri dan stoikiometri reaksi netralisasi pada gambar, berapakah konsentrasi molaritas (M) dari larutan HCl tersebut?`;

      const numericOptions = [
        { key: 'A', text: '0,06 M' },
        { key: 'B', text: '0,08 M' },
        { key: 'C', text: '0,12 M' },
        { key: 'D', text: '0,15 M' },
        { key: 'E', text: '0,20 M' }
      ];
      options = optionLetters.map(letter => numericOptions.find(o => o.key === letter) || { key: letter, text: '0,12 M' });

      scoringGuide = `Pedoman Penskoran:
1. Reaksi netralisasi: HCl + NaOH -> NaCl + H2O (na = 1, nb = 1) (Skor 1)
2. Va × Ma × na = Vb × Mb × nb (Skor 1)
3. 25 × Ma × 1 = 30 × 0,10 × 1 => Ma = 3,0 / 25 = 0,12 M (Skor 2)`;

      explanation = `Langkah Perhitungan Lengkap:
Titik ekivalen titrasi asam-basa:
Va × Ma × na = Vb × Mb × nb
25 mL × Ma × 1 = 30 mL × 0,10 M × 1
25 × Ma = 3,0 => Ma = 3,0 / 25 = 0,12 M.
Jadi konsentrasi molaritas larutan HCl adalah 0,12 M.
Jawaban yang tepat adalah opsi ${correctKey}.`;

    } else if (chosen === 'termokimia_entalpi') {
      svgType = 'chemistry_energy_diagram';
      correctKey = isFaseABCD ? 'B' : 'B';
      stimulus = `Perhatikan diagram tingkat energi entalpi termokimia pada gambar di atas! Reaksi pembakaran sempurna gas metana berlangsung menurut persamaan: CH₄(g) + 2O₂(g) -> CO₂(g) + 2H₂O(l)  ΔH = -890 kJ/mol. Diketahui massa molar Mr CH₄ = 16 g/mol.`;
      butirSoal = `Berdasarkan diagram entalpi di atas, berapakah besar kalor yang dilepaskan pada pembakaran sempurna 32,0 gram gas metana?`;

      const numericOptions = [
        { key: 'A', text: '890 kJ dilepaskan' },
        { key: 'B', text: '1.780 kJ dilepaskan' },
        { key: 'C', text: '2.670 kJ dilepaskan' },
        { key: 'D', text: '3.560 kJ diserap' },
        { key: 'E', text: '1.780 kJ diserap' }
      ];
      options = optionLetters.map(letter => numericOptions.find(o => o.key === letter) || { key: letter, text: '1.780 kJ' });

      scoringGuide = `Pedoman Penskoran:
1. Menghitung mol CH4: n = massa / Mr = 32 / 16 = 2,0 mol (Skor 1)
2. Kalor dilepaskan: Q = n × |ΔH| = 2,0 × 890 kJ = 1.780 kJ (Skor 2)
3. Sifat reaksi: eksotermik (kalor dilepaskan) (Skor 1)`;

      explanation = `Langkah Perhitungan Lengkap:
• Mol CH₄ = 32 g / 16 g/mol = 2,0 mol
• Kalor yang dilepaskan = mol × |ΔH| = 2,0 mol × 890 kJ/mol = 1.780 kJ dilepaskan.
Jawaban yang tepat adalah opsi ${correctKey}.`;

    } else if (chosen === 'stoikiometri_reaksi') {
      svgType = 'chemistry_titration';
      correctKey = isFaseABCD ? 'A' : 'A';
      stimulus = `Sebanyak 5,4 gram serbuk logam Aluminium (Al, Ar = 27) direaksikan habis dengan larutan asam sulfat encer menurut persamaan reaksi setara:
2Al(s) + 3H₂SO₄(aq) -> Al₂(SO₄)₃(aq) + 3H₂(g)`;
      butirSoal = `Berapakah volume gas hidrogen (H₂) yang terbentuk jika diukur pada keadaan standar (STP: 0°C, 1 atm)?`;

      const numericOptions = [
        { key: 'A', text: '6,72 Liter' },
        { key: 'B', text: '4,48 Liter' },
        { key: 'C', text: '8,96 Liter' },
        { key: 'D', text: '2,24 Liter' },
        { key: 'E', text: '11,20 Liter' }
      ];
      options = optionLetters.map(letter => numericOptions.find(o => o.key === letter) || { key: letter, text: '6,72 Liter' });

      scoringGuide = `Pedoman Penskoran:
1. mol Al = 5,4 / 27 = 0,2 mol (Skor 1)
2. mol H2 = (3/2) × 0,2 = 0,3 mol (Skor 2)
3. Volume STP = 0,3 × 22,4 = 6,72 Liter (Skor 1)`;

      explanation = `Langkah Perhitungan:
• mol Al = 5,4 g / 27 g/mol = 0,2 mol
• mol H₂ = (Koef H₂ / Koef Al) × mol Al = (3/2) × 0,2 = 0,3 mol
• Volume STP = mol × 22,4 L = 0,3 × 22,4 = 6,72 Liter.
Jawaban yang tepat adalah opsi ${correctKey}.`;

    } else {
      svgType = 'chemistry_energy_diagram';
      correctKey = isFaseABCD ? 'D' : 'D';
      stimulus = `Diketahui potensial elektroda standar dari dua logam berikut:
Zn²⁺(aq) + 2e⁻ -> Zn(s)   E° = -0,76 Volt
Cu²⁺(aq) + 2e⁻ -> Cu(s)   E° = +0,34 Volt`;
      butirSoal = `Jika kedua elektroda tersebut dirangkai menjadi sel Volta standar, tentukan notasi sel yang benar serta besar potensial sel standar (E° sel) yang dihasilkan!`;

      const numericOptions = [
        { key: 'A', text: 'Cu | Cu²⁺ || Zn²⁺ | Zn  dengan E° sel = -1,10 Volt' },
        { key: 'B', text: 'Zn | Zn²⁺ || Cu²⁺ | Cu  dengan E° sel = +0,42 Volt' },
        { key: 'C', text: 'Cu | Cu²⁺ || Zn²⁺ | Zn  dengan E° sel = +1,10 Volt' },
        { key: 'D', text: 'Zn | Zn²⁺ || Cu²⁺ | Cu  dengan E° sel = +1,10 Volt' },
        { key: 'E', text: 'Zn | Zn²⁺ || Cu²⁺ | Cu  dengan E° sel = +1,52 Volt' }
      ];
      options = optionLetters.map(letter => numericOptions.find(o => o.key === letter) || { key: letter, text: '+1,10 Volt' });

      scoringGuide = `Pedoman Penskoran:
1. E° lebih positif = Katoda (Cu); E° lebih negatif = Anoda (Zn) (Skor 1)
2. Notasi: Anoda || Katoda => Zn | Zn²⁺ || Cu²⁺ | Cu (Skor 1)
3. E° sel = +0,34 - (-0,76) = +1,10 Volt (Skor 2)`;

      explanation = `Langkah Perhitungan:
• Katoda: Cu (reduksi, E° = +0,34 V)
• Anoda: Zn (oksidasi, E° = -0,76 V)
• Notasi Sel: Zn | Zn²⁺ || Cu²⁺ | Cu
• E° sel = E° katoda - E° anoda = +0,34 V - (-0,76 V) = +1,10 Volt.
Jawaban yang tepat adalah opsi ${correctKey}.`;
    }

  // =========================================================================
  // 4. MATA PELAJARAN INFORMATIKA / KODING / KECERDASAN ARTIFISIAL
  // =========================================================================
  } else if (subjectCategory === 'informatika') {
    const csTopics = ['cs_subnetting', 'cs_biner', 'cs_boolean', 'cs_kompleksitas', 'cs_ai_metrik'];
    const chosen = csTopics[idx % csTopics.length];

    if (chosen === 'cs_subnetting') {
      svgType = 'cs_subnet_binary';
      correctKey = isFaseABCD ? 'B' : 'B';
      stimulus = `Perhatikan gambar diagram skema alokasi subnetting IPv4 CIDR /26 di atas! Sebuah laboratorium komputer sekolah diberikan alamat IP blok 192.168.10.75 dengan subnet mask /26 (prefix 26-bit).`;
      butirSoal = `Tentukan alamat Subnet Mask dalam notasi desimal bertitik, Network ID, serta jumlah alamat host valid yang dapat digunakan pada subnet tersebut!`;

      const numericOptions = [
        { key: 'A', text: 'Subnet Mask: 255.255.255.128, Network ID: 192.168.10.0, dan 126 host valid' },
        { key: 'B', text: 'Subnet Mask: 255.255.255.192, Network ID: 192.168.10.64, dan 62 host valid' },
        { key: 'C', text: 'Subnet Mask: 255.255.255.192, Network ID: 192.168.10.75, dan 64 host valid' },
        { key: 'D', text: 'Subnet Mask: 255.255.255.224, Network ID: 192.168.10.64, dan 30 host valid' },
        { key: 'E', text: 'Subnet Mask: 255.255.255.192, Network ID: 192.168.10.0, dan 62 host valid' }
      ];
      options = optionLetters.map(letter => numericOptions.find(o => o.key === letter) || { key: letter, text: '62 host' });

      scoringGuide = `Pedoman Penskoran:
1. Menghitung subnet mask /26: oktet ke-4 bernilai 11000000₂ = 128 + 64 = 192 => 255.255.255.192 (Skor 1)
2. Menghitung ukuran blok subnet: 256 - 192 = 64 (Skor 1)
3. Menentukan Network ID untuk host .75: berada pada rentang 64 s.d. 127 => Network ID = 192.168.10.64 (Skor 1)
4. Menghitung host valid: 2⁶ - 2 = 64 - 2 = 62 host valid (Skor 1)`;

      explanation = `Langkah Perhitungan Lengkap:
• Prefix /26 memiliki 26 bit network dan 6 bit host (32 - 26 = 6).
• Subnet Mask oktet terakhir: 11000000₂ = 192 => 255.255.255.192.
• Ukuran interval subnet = 256 - 192 = 64.
  Subnet 1: 0 - 63
  Subnet 2: 64 - 127 (Host 192.168.10.75 berada di sini).
  Network ID = 192.168.10.64; Broadcast ID = 192.168.10.127.
• Jumlah Host Valid = 2⁶ - 2 = 64 - 2 = 62 host valid.
Jawaban yang tepat adalah opsi ${correctKey}.`;

    } else if (chosen === 'cs_biner') {
      svgType = 'cs_subnet_binary';
      correctKey = isFaseABCD ? 'C' : 'C';
      stimulus = `Dalam arsitektur sistem komputer, sebuah nilai register mikroprosesor 8-bit menyimpan data biner murni: 11010110₂.`;
      butirSoal = `Konversikan nilai biner 8-bit tersebut ke dalam sistem bilangan Desimal (basis 10) dan sistem bilangan Heksadesimal (basis 16)!`;

      const numericOptions = [
        { key: 'A', text: 'Desimal: 198₁₀ dan Heksadesimal: C6₁₆' },
        { key: 'B', text: 'Desimal: 210₁₀ dan Heksadesimal: D2₁₆' },
        { key: 'C', text: 'Desimal: 214₁₀ dan Heksadesimal: D6₁₆' },
        { key: 'D', text: 'Desimal: 222₁₀ dan Heksadesimal: E6₁₆' },
        { key: 'E', text: 'Desimal: 214₁₀ dan Heksadesimal: E2₁₆' }
      ];
      options = optionLetters.map(letter => numericOptions.find(o => o.key === letter) || { key: letter, text: '214₁₀' });

      scoringGuide = `Pedoman Penskoran:
1. Konversi Desimal: 128 + 64 + 16 + 4 + 2 = 214₁₀ (Skor 2)
2. Konversi Heksadesimal: 1101₂ = 13 (D) dan 0110₂ = 6 => D6₁₆ (Skor 2)`;

      explanation = `Langkah Perhitungan:
• Desimal: (1×128) + (1×64) + (0×32) + (1×16) + (0×8) + (1×4) + (1×2) + (0×1)
  = 128 + 64 + 16 + 4 + 2 = 214₁₀.
• Heksadesimal: Bagi 8-bit menjadi 2 kelompok nibble 4-bit:
  Nibble 1 (1101₂) = 8 + 4 + 1 = 13 = D₁₆
  Nibble 2 (0110₂) = 4 + 2 = 6₁₆
  Hasil gabungan = D6₁₆.
Jawaban yang tepat adalah opsi ${correctKey}.`;

    } else if (chosen === 'cs_kompleksitas') {
      svgType = 'cs_subnet_binary';
      correctKey = isFaseABCD ? 'A' : 'A';
      stimulus = `Diberikan potongan algoritma pemrograman dengan perulangan bersarang (nested loop) berikut:
for i = 1 to n do:
    for j = 1 to i do:
        eksekusi_operasi_hitung()
Diketahui nilai input ukuran data n = 20.`;
      butirSoal = `Berapakah total frekuensi eksekusi operasi hitung pada perulangan tersebut, dan apakah notasi kompleksitas waktu asimtotik (Big-O) nya?`;

      const numericOptions = [
        { key: 'A', text: '210 kali eksekusi dan O(n²)' },
        { key: 'B', text: '400 kali eksekusi dan O(n²)' },
        { key: 'C', text: '190 kali eksekusi dan O(n log n)' },
        { key: 'D', text: '210 kali eksekusi dan O(n)' },
        { key: 'E', text: '200 kali eksekusi dan O(n²)' }
      ];
      options = optionLetters.map(letter => numericOptions.find(o => o.key === letter) || { key: letter, text: '210 kali' });

      scoringGuide = `Pedoman Penskoran:
1. Deret aritmetika jumlah eksekusi: 1 + 2 + 3 + ... + n = n(n + 1)/2 (Skor 2)
2. n = 20 => (20 × 21)/2 = 210 kali eksekusi (Skor 1)
3. Kompleksitas asimtotik Big-O = O(n²) (Skor 1)`;

      explanation = `Langkah Perhitungan:
Iterasi ke-1 = 1 kali, ke-2 = 2 kali, ..., ke-n = n kali.
Total eksekusi = 1 + 2 + ... + 20 = (20 × 21) / 2 = 210 kali eksekusi.
Secara asimtotik n(n+1)/2 = (n² + n)/2 => Kompleksitas waktu adalah O(n²).
Jawaban yang tepat adalah opsi ${correctKey}.`;

    } else {
      svgType = 'cs_subnet_binary';
      correctKey = isFaseABCD ? 'C' : 'C';
      stimulus = `Sebuah model kecerdasan artifisial (AI) klasifikasi gambar diuji terhadap 200 sampel data uji dan menghasilkan confusion matrix: True Positive (TP) = 85, True Negative (TN) = 70, False Positive (FP) = 15, dan False Negative (FN) = 30.`;
      butirSoal = `Hitunglah nilai Akurasi (Accuracy) dan Presisi (Precision) dari performa model AI tersebut!`;

      const numericOptions = [
        { key: 'A', text: 'Akurasi = 70,0% dan Presisi = 74,0%' },
        { key: 'B', text: 'Akurasi = 77,5% dan Presisi = 73,9%' },
        { key: 'C', text: 'Akurasi = 77,5% dan Presisi = 85,0%' },
        { key: 'D', text: 'Akurasi = 85,0% dan Presisi = 77,5%' },
        { key: 'E', text: 'Akurasi = 80,0% dan Presisi = 85,0%' }
      ];
      options = optionLetters.map(letter => numericOptions.find(o => o.key === letter) || { key: letter, text: '77,5%' });

      scoringGuide = `Pedoman Penskoran:
1. Akurasi = (TP + TN) / Total = (85 + 70) / 200 = 155 / 200 = 77,5% (Skor 2)
2. Presisi = TP / (TP + FP) = 85 / (85 + 15) = 85 / 100 = 85,0% (Skor 2)`;

      explanation = `Langkah Perhitungan:
• Akurasi = (TP + TN) / (TP + TN + FP + FN) = (85 + 70) / 200 = 155 / 200 = 0,775 = 77,5%
• Presisi = TP / (TP + FP) = 85 / (85 + 15) = 85 / 100 = 0,85 = 85,0%.
Jawaban yang tepat adalah opsi ${correctKey}.`;
    }

  // =========================================================================
  // 5. MATA PELAJARAN EKONOMI / AKUNTANSI
  // =========================================================================
  } else if (subjectCategory === 'ekonomi') {
    const econTopics = ['econ_keseimbangan', 'econ_bep', 'econ_elastisitas'];
    const chosen = econTopics[idx % econTopics.length];

    if (chosen === 'econ_keseimbangan') {
      svgType = 'econ_market_curve';
      correctKey = isFaseABCD ? 'A' : 'A';
      stimulus = `Perhatikan grafik kurva permintaan dan penawaran pasar pada gambar di atas! Fungsi permintaan dinyatakan dengan persamaan Qd = 80 - 2P dan fungsi penawaran dinyatakan dengan persamaan Qs = -20 + 3P.`;
      butirSoal = `Berdasarkan fungsi tersebut, tentukan harga keseimbangan pasar (P*) dan kuantitas keseimbangan pasar (Q*)!`;

      const numericOptions = [
        { key: 'A', text: 'P* = Rp 20 dan Q* = 40 unit' },
        { key: 'B', text: 'P* = Rp 25 dan Q* = 30 unit' },
        { key: 'C', text: 'P* = Rp 20 dan Q* = 50 unit' },
        { key: 'D', text: 'P* = Rp 15 dan Q* = 50 unit' },
        { key: 'E', text: 'P* = Rp 30 dan Q* = 20 unit' }
      ];
      options = optionLetters.map(letter => numericOptions.find(o => o.key === letter) || { key: letter, text: 'P = 20, Q = 40' });

      scoringGuide = `Pedoman Penskoran:
1. Syarat keseimbangan pasar: Qd = Qs (Skor 1)
2. 80 - 2P = -20 + 3P => 5P = 100 => P = 20 (Skor 2)
3. Substitusi P = 20: Q = 80 - 2(20) = 40 unit (Skor 1)`;

      explanation = `Langkah Perhitungan Lengkap:
Keseimbangan Pasar: Qd = Qs
80 - 2P = -20 + 3P
80 + 20 = 3P + 2P
100 = 5P => P* = 100 / 5 = 20
Substitusi ke Qd: Q* = 80 - 2(20) = 80 - 40 = 40 unit.
Jadi harga keseimbangan P* = 20 dan kuantitas Q* = 40 unit.
Jawaban yang tepat adalah opsi ${correctKey}.`;

    } else if (chosen === 'econ_bep') {
      svgType = 'econ_market_curve';
      correctKey = isFaseABCD ? 'B' : 'B';
      stimulus = `Sebuah unit usaha mikro sekolah memproduksi minuman herbal. Biaya tetap (Fixed Cost/FC) yang dikeluarkan adalah Rp 12.000.000 per bulan, biaya variabel (Variable Cost/VC) sebesar Rp 40.000 per botol, dan harga jual (P) ditetapkan sebesar Rp 70.000 per botol.`;
      butirSoal = `Berapakah volume produksi minimal (BEP Unit) yang harus dicapai agar usaha tersebut berada pada titik impas (Break Even Point)?`;

      const numericOptions = [
        { key: 'A', text: '300 botol' },
        { key: 'B', text: '400 botol' },
        { key: 'C', text: '450 botol' },
        { key: 'D', text: '500 botol' },
        { key: 'E', text: '600 botol' }
      ];
      options = optionLetters.map(letter => numericOptions.find(o => o.key === letter) || { key: letter, text: '400 botol' });

      scoringGuide = `Pedoman Penskoran:
1. Menuliskan rumus BEP Unit: BEP = FC / (P - VC) (Skor 1)
2. Substitusi angka: BEP = 12.000.000 / (70.000 - 40.000) (Skor 2)
3. Hasil akhir: BEP = 12.000.000 / 30.000 = 400 botol (Skor 1)`;

      explanation = `Langkah Perhitungan:
BEP (Unit) = Biaya Tetap / (Harga Jual per unit - Biaya Variabel per unit)
BEP = Rp 12.000.000 / (Rp 70.000 - Rp 40.000)
BEP = Rp 12.000.000 / Rp 30.000 = 400 botol.
Jawaban yang tepat adalah opsi ${correctKey}.`;

    } else {
      svgType = 'econ_market_curve';
      correctKey = isFaseABCD ? 'C' : 'C';
      stimulus = `Pada saat harga suatu barang Rp 10.000 per unit, jumlah permintaan adalah 50 unit. Ketika harga turun menjadi Rp 8.000 per unit, jumlah permintaan meningkat menjadi 70 unit.`;
      butirSoal = `Hitunglah koefisien elastisitas permintaan (Ed) dari barang tersebut dan tentukan sifat elastisitasnya!`;

      const numericOptions = [
        { key: 'A', text: 'Ed = 1,0 (Elastis Uniter)' },
        { key: 'B', text: 'Ed = 1,5 (Elastis)' },
        { key: 'C', text: 'Ed = 2,0 (Elastis)' },
        { key: 'D', text: 'Ed = 0,5 (Inelastis)' },
        { key: 'E', text: 'Ed = 2,5 (Elastis)' }
      ];
      options = optionLetters.map(letter => numericOptions.find(o => o.key === letter) || { key: letter, text: 'Ed = 2,0' });

      scoringGuide = `Pedoman Penskoran:
1. ΔQ = 70 - 50 = 20; ΔP = 8.000 - 10.000 = -2.000 (Skor 1)
2. Ed = |(ΔQ / ΔP) × (P1 / Q1)| = |(20 / -2.000) × (10.000 / 50)| (Skor 2)
3. Ed = |-0,01 × 200| = 2,0 (Ed > 1 = Elastis) (Skor 1)`;

      explanation = `Langkah Perhitungan:
Ed = |(ΔQ / ΔP) × (P / Q)|
Ed = |(20 / -2.000) × (10.000 / 50)| = |(-1/100) × 200| = |-2| = 2,0.
Karena nilai Ed > 1, maka permintaan bersifat Elastis.
Jawaban yang tepat adalah opsi ${correctKey}.`;
    }

  // =========================================================================
  // 6. MATA PELAJARAN BIOLOGI / IPA (SAINS HAYATI)
  // =========================================================================
  } else if (subjectCategory === 'biologi') {
    const bioTopics = ['bio_mendel', 'bio_energi'];
    const chosen = bioTopics[idx % bioTopics.length];

    if (chosen === 'bio_mendel') {
      svgType = 'bio_mendel_punnett';
      correctKey = isFaseABCD ? 'B' : 'B';
      stimulus = `Perhatikan bagan rasio persilangan hukum Mendel pada gambar di atas! Tanaman ercis berbiji bulat kuning heterozigot (BbKk) disilangkan sesamanya (BbKk × BbKk). Sifat bulat (B) dominan terhadap keriput (b) dan sifat warna kuning (K) dominan terhadap hijau (k). Persilangan tersebut menghasilkan 320 tanaman keturunan F2.`;
      butirSoal = `Berdasarkan hukum perpaduan bebas Mendel, berapakah jumlah tanaman keturunan F2 yang memiliki fenotipe berbiji bulat warna hijau?`;

      const numericOptions = [
        { key: 'A', text: '20 tanaman' },
        { key: 'B', text: '60 tanaman' },
        { key: 'C', text: '180 tanaman' },
        { key: 'D', text: '100 tanaman' },
        { key: 'E', text: '120 tanaman' }
      ];
      options = optionLetters.map(letter => numericOptions.find(o => o.key === letter) || { key: letter, text: '60 tanaman' });

      scoringGuide = `Pedoman Penskoran:
1. Rasio fenotipe dihibrid F2 = 9 : 3 : 3 : 1 (Skor 1)
2. Bulat hijau (B_kk) memiliki proporsi 3/16 (Skor 1)
3. Jumlah individu = (3/16) × 320 = 60 tanaman (Skor 2)`;

      explanation = `Langkah Perhitungan Lengkap:
Rasio fenotipe F2 dihibrid:
• Bulat Kuning = 9/16
• Bulat Hijau = 3/16
• Keriput Kuning = 3/16
• Keriput Hijau = 1/16
Jumlah keturunan berbiji bulat hijau = (3 / 16) × 320 tanaman = 3 × 20 = 60 tanaman.
Jawaban yang tepat adalah opsi ${correctKey} (60 tanaman).`;

    } else {
      svgType = 'bio_mendel_punnett';
      correctKey = isFaseABCD ? 'C' : 'C';
      stimulus = `Dalam suatu ekosistem padang rumput, tumbuhan produsen menyerap energi cahaya matahari dan menyimpan energi kimia bersih sebesar 50.000 kkal. Mengacu pada hukum termodinamika efisiensi transfer energi antar-tingkat trofik Lindeman (efisiensi 10%):`;
      butirSoal = `Berapakah besar energi yang tersedia bagi konsumen tingkat III (konsumen tersier) pada piramida energi tersebut?`;

      const numericOptions = [
        { key: 'A', text: '5.000 kkal' },
        { key: 'B', text: '500 kkal' },
        { key: 'C', text: '50 kkal' },
        { key: 'D', text: '5 kkal' },
        { key: 'E', text: '0,5 kkal' }
      ];
      options = optionLetters.map(letter => numericOptions.find(o => o.key === letter) || { key: letter, text: '50 kkal' });

      scoringGuide = `Pedoman Penskoran:
1. Konsumen I: 10% × 50.000 = 5.000 kkal (Skor 1)
2. Konsumen II: 10% × 5.000 = 500 kkal (Skor 1)
3. Konsumen III: 10% × 500 = 50 kkal (Skor 2)`;

      explanation = `Langkah Perhitungan:
• Produsen = 50.000 kkal
• Konsumen I (Herbivora) = 10% × 50.000 = 5.000 kkal
• Konsumen II (Karnivora Primer) = 10% × 5.000 = 500 kkal
• Konsumen III (Karnivora Puncak) = 10% × 500 = 50 kkal.
Jawaban yang tepat adalah opsi ${correctKey} (50 kkal).`;
    }

  // =========================================================================
  // 7. MATA PELAJARAN GEOGRAFI
  // =========================================================================
  } else if (subjectCategory === 'geografi') {
    svgType = 'geo_contour_map';
    correctKey = isFaseABCD ? 'A' : 'A';
    stimulus = `Perhatikan peta topografi garis kontur pada gambar di atas! Peta tersebut digambar dengan skala 1 : 50.000. Jarak antara titik puncak bukit A dan pos pengamatan B pada peta adalah 6,0 cm.`;
    butirSoal = `Hitunglah nilai Kontur Interval (CI) peta topografi tersebut serta jarak sebenarnya di lapangan antara titik A dan B!`;

    const numericOptions = [
      { key: 'A', text: 'CI = 25 meter dan Jarak Sebenarnya = 3,0 km' },
      { key: 'B', text: 'CI = 50 meter dan Jarak Sebenarnya = 3,0 km' },
      { key: 'C', text: 'CI = 25 meter dan Jarak Sebenarnya = 30 km' },
      { key: 'D', text: 'CI = 20 meter dan Jarak Sebenarnya = 3,0 km' },
      { key: 'E', text: 'CI = 25 meter dan Jarak Sebenarnya = 1,5 km' }
    ];
    options = optionLetters.map(letter => numericOptions.find(o => o.key === letter) || { key: letter, text: 'CI = 25 m' });

    scoringGuide = `Pedoman Penskoran:
1. Menghitung CI = (1/2000) × 50.000 = 25 meter (Skor 2)
2. Menghitung jarak sebenarnya = 6 cm × 50.000 = 300.000 cm = 3,0 km (Skor 2)`;

    explanation = `Langkah Perhitungan:
• Kontur Interval: CI = (1 / 2000) × Penyebut Skala = (1 / 2000) × 50.000 = 25 meter
• Jarak Sebenarnya = Jarak Peta × Skala = 6 cm × 50.000 = 300.000 cm = 3.000 meter = 3,0 km.
Jawaban yang tepat adalah opsi ${correctKey}.`;

  // =========================================================================
  // DEFAULT / UMUM
  // =========================================================================
  } else {
    svgType = 'math_sd_rectangle';
    stimulus = `Dalam analisis kuantitatif materi ${topikCapaian}, dilakukan pengukuran terukur terhadap sejumlah variabel dengan instrumen baku.`;
    butirSoal = `Berdasarkan perumusan parameter kuantitatif tersebut, berapakah nilai besaran terhitung yang tepat?`;
    options = optionLetters.map(letter => ({ key: letter, text: `Nilai terhitung opsi ${letter}` }));
    scoringGuide = `Pedoman penskoran berbasis langkah kalkulasi matematis.`;
    explanation = `Pembahasan perhitungan matematis terstruktur.`;
  }

  // Khusus soal bentuk Benar-Salah
  if (item.type === 'benar_salah') {
    correctKey = idx % 2 === 0 ? 'Benar' : 'Salah';
    butirSoal = `Pernyataan: "Berdasarkan data angka, hukum sains, dan langkah perhitungan matematis terukur di atas, hasil akhir kalkulasi besaran yang diperoleh adalah tepat dan sahih." \n\nBagaimanakah kebenaran pernyataan matematis tersebut?`;
    options = [
      { key: 'Benar', text: 'Pernyataan perhitungan di atas BENAR' },
      { key: 'Salah', text: 'Pernyataan perhitungan di atas SALAH' }
    ];
  }

  // Khusus soal Kompleks
  if (item.type.includes('kompleks')) {
    butirSoal = `Perhatikan kembali data numerik dan langkah perhitungan di atas! Berikan tanda centang pada SEMUA pernyataan matematis berikut yang bernilai BENAR:`;
    options = optionLetters.map((letter) => {
      const isCorrect = correctKeys.includes(letter);
      return {
        key: letter,
        text: isCorrect
          ? `Pernyataan ${letter}: Menerapkan rumus turunan yang tepat dan menghasilkan nilai kuantitatif yang konsisten dengan data soal.`
          : `Pernyataan ${letter}: Mengabaikan satuan baku SI dan melakukan kesalahan substitusi variabel perhitungan.`
      };
    });
  }

  // Khusus soal Esai
  if (item.type === 'esai') {
    correctKey = 'Rubrik Perhitungan Matematis';
    butirSoal = `Tuliskan secara lengkap dan terstruktur seluruh langkah perhitungan matematis untuk memecahkan persoalan di atas!\nUraikan:\n1. Besaran-besaran yang diketahui dan ditanyakan beserta satuannya,\n2. Rumus fisika/kimia/matematika yang digunakan,\n3. Langkah substitusi angka dan operasi hitung hingga diperoleh hasil akhir yang tepat!`;
  }

  return {
    stimulus,
    butirSoal,
    options,
    correctKey,
    correctKeys,
    scoringGuide,
    explanation,
    svgType,
    language: itemLang
  };
};
