// Service Generator Soal Kuantitatif Matematika, Fisika, dan Kimia
// Menghasilkan soal perhitungan matematis berbasis angka nyata, rumus, dan diagram visual teknis

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
    combined.includes('fluida')
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
    combined.includes('redoks')
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
    combined.includes('statistika') ||
    combined.includes('vektor') ||
    combined.includes('matriks') ||
    combined.includes('eksponen') ||
    combined.includes('logaritma')
  ) {
    return 'matematika';
  }

  return 'umum';
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
          <text x="-100" y="22" fill="#dc2626" font-size="11" font-weight="bold" font-family="sans-serif">fk = 8 N</text>

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
        <!-- Top Wire -->
        <line x1="60" y1="60" x2="160" y2="60" stroke="#334155" stroke-width="2" />
        <!-- Resistor R1 (Seri) -->
        <rect x="160" y="48" width="60" height="24" fill="#fed7aa" stroke="#ea580c" stroke-width="2" rx="2" />
        <text x="190" y="64" fill="#9a3412" font-size="10.5" font-weight="bold" text-anchor="middle">R1 = 4 Ω</text>
        <line x1="220" y1="60" x2="280" y2="60" stroke="#334155" stroke-width="2" />
        
        <!-- Node A -->
        <circle cx="280" cy="60" r="4" fill="#0f172a" />
        <text x="280" y="50" fill="#0f172a" font-size="11" font-weight="bold" text-anchor="middle">A</text>
        
        <!-- Parallel Branches -->
        <!-- Branch 1 (Top) -->
        <line x1="280" y1="60" x2="280" y2="40" stroke="#334155" stroke-width="2" />
        <line x1="280" y1="40" x2="320" y2="40" stroke="#334155" stroke-width="2" />
        <rect x="320" y="28" width="60" height="24" fill="#bbf7d0" stroke="#16a34a" stroke-width="2" rx="2" />
        <text x="350" y="44" fill="#14532d" font-size="10.5" font-weight="bold" text-anchor="middle">R2 = 6 Ω</text>
        <line x1="380" y1="40" x2="420" y2="40" stroke="#334155" stroke-width="2" />
        <line x1="420" y1="40" x2="420" y2="60" stroke="#334155" stroke-width="2" />

        <!-- Branch 2 (Bottom) -->
        <line x1="280" y1="60" x2="280" y2="80" stroke="#334155" stroke-width="2" />
        <line x1="280" y1="80" x2="320" y2="80" stroke="#334155" stroke-width="2" />
        <rect x="320" y="68" width="60" height="24" fill="#ddd6fe" stroke="#7c3aed" stroke-width="2" rx="2" />
        <text x="350" y="84" fill="#4c1d95" font-size="10.5" font-weight="bold" text-anchor="middle">R3 = 12 Ω</text>
        <line x1="380" y1="80" x2="420" y2="80" stroke="#334155" stroke-width="2" />

        <!-- Node B -->
        <circle cx="420" cy="60" r="4" fill="#0f172a" />
        <text x="420" y="50" fill="#0f172a" font-size="11" font-weight="bold" text-anchor="middle">B</text>

        <!-- Right wire -->
        <line x1="420" y1="60" x2="460" y2="60" stroke="#334155" stroke-width="2" />
        <line x1="460" y1="60" x2="460" y2="180" stroke="#334155" stroke-width="2" />
        
        <!-- Bottom wire -->
        <line x1="460" y1="180" x2="290" y2="180" stroke="#334155" stroke-width="2" />
        
        <!-- Battery Symbol -->
        <line x1="290" y1="165" x2="290" y2="195" stroke="#dc2626" stroke-width="3" />
        <line x1="275" y1="172" x2="275" y2="188" stroke="#475569" stroke-width="2.5" />
        <text x="295" y="160" fill="#dc2626" font-size="11" font-weight="bold">+</text>
        <text x="270" y="160" fill="#475569" font-size="11" font-weight="bold">-</text>
        <text x="282" y="215" fill="#0f172a" font-size="11" font-weight="bold" text-anchor="middle">E = 18 V, r = 1 Ω</text>

        <!-- Left Wire back to top -->
        <line x1="275" y1="180" x2="60" y2="180" stroke="#334155" stroke-width="2" />
        <line x1="60" y1="180" x2="60" y2="60" stroke="#334155" stroke-width="2" />
        
        <!-- Current Arrow I -->
        <line x1="90" y1="60" x2="130" y2="60" stroke="#2563eb" stroke-width="2" marker-end="url(#arrow-blue)" />
        <text x="110" y="48" fill="#2563eb" font-size="11" font-weight="bold" text-anchor="middle">Arus Total I</text>
      </svg>`;

    // -------------------------------------------------------------
    // FISIKA: GRAFIK GERAK LURUS v - t (KECEPATAN VS WAKTU)
    // -------------------------------------------------------------
    case 'physics_motion_graph':
      return `<svg viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-lg mx-auto my-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-2 shadow-sm">
        <text x="260" y="24" fill="#0f172a" font-size="12" font-weight="bold" text-anchor="middle" font-family="sans-serif">${title}</text>
        <!-- Axes -->
        <line x1="60" y1="200" x2="480" y2="200" stroke="#334155" stroke-width="2" />
        <line x1="60" y1="200" x2="60" y2="40" stroke="#334155" stroke-width="2" />
        <text x="500" y="204" fill="#0f172a" font-size="11" font-weight="bold">t (s)</text>
        <text x="35" y="45" fill="#0f172a" font-size="11" font-weight="bold">v (m/s)</text>

        <!-- Gridlines & Ticks -->
        <line x1="60" y1="120" x2="480" y2="120" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3" />
        <text x="45" y="124" fill="#475569" font-size="10" font-weight="bold">20</text>
        <text x="50" y="204" fill="#475569" font-size="10">0</text>
        
        <!-- Time Ticks -->
        <line x1="160" y1="196" x2="160" y2="204" stroke="#334155" stroke-width="1.5" />
        <text x="160" y="218" fill="#475569" font-size="10" text-anchor="middle" font-weight="bold">4</text>
        
        <line x1="310" y1="196" x2="310" y2="204" stroke="#334155" stroke-width="1.5" />
        <text x="310" y="218" fill="#475569" font-size="10" text-anchor="middle" font-weight="bold">10</text>

        <line x1="430" y1="196" x2="430" y2="204" stroke="#334155" stroke-width="1.5" />
        <text x="430" y="218" fill="#475569" font-size="10" text-anchor="middle" font-weight="bold">14</text>

        <!-- Shaded Area (Displacement) -->
        <polygon points="60,200 160,120 310,120 430,200" fill="#dbeafe" opacity="0.6" />

        <!-- Graph Line: (0,0) -> (4, 20) -> (10, 20) -> (14, 0) -->
        <polyline points="60,200 160,120 310,120 430,200" fill="none" stroke="#2563eb" stroke-width="3" />
        
        <!-- Vertex Points -->
        <circle cx="60" cy="200" r="4" fill="#1d4ed8" />
        <circle cx="160" cy="120" r="4" fill="#1d4ed8" />
        <circle cx="310" cy="120" r="4" fill="#1d4ed8" />
        <circle cx="430" cy="200" r="4" fill="#1d4ed8" />
        
        <!-- Segment Labels -->
        <text x="105" y="150" fill="#1e40af" font-size="10" font-weight="bold">GLBB (a1)</text>
        <text x="235" y="110" fill="#1e40af" font-size="10" font-weight="bold">GLB (v tetap)</text>
        <text x="380" y="150" fill="#1e40af" font-size="10" font-weight="bold">GLBB (a2)</text>
      </svg>`;

    // -------------------------------------------------------------
    // MATEMATIKA: SEGITIGA SIKU-SIKU DENGAN SUDUT & PANJANG SISI
    // -------------------------------------------------------------
    case 'math_geometry_triangle':
      return `<svg viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-lg mx-auto my-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-2 shadow-sm">
        <text x="260" y="24" fill="#0f172a" font-size="12" font-weight="bold" text-anchor="middle" font-family="sans-serif">${title}</text>
        <!-- Triangle ABC: A(80, 190), B(360, 190), C(360, 60) -->
        <polygon points="80,190 360,190 360,60" fill="#f8fafc" stroke="#334155" stroke-width="2.5" />
        <!-- Right angle symbol at B(360, 190) -->
        <rect x="340" y="170" width="20" height="20" fill="none" stroke="#dc2626" stroke-width="2" />
        
        <!-- Vertices -->
        <circle cx="80" cy="190" r="3.5" fill="#0f172a" />
        <text x="65" y="200" fill="#0f172a" font-size="12" font-weight="bold">A</text>
        <circle cx="360" cy="190" r="3.5" fill="#0f172a" />
        <text x="375" y="200" fill="#0f172a" font-size="12" font-weight="bold">B</text>
        <circle cx="360" cy="60" r="3.5" fill="#0f172a" />
        <text x="375" y="65" fill="#0f172a" font-size="12" font-weight="bold">C</text>
        
        <!-- Dimensions -->
        <!-- Alas AB = 12 cm -->
        <text x="220" y="210" fill="#2563eb" font-size="12" font-weight="bold" text-anchor="middle">AB = 12 cm (Sisi Samping)</text>
        <!-- Tinggi BC = 5 cm -->
        <text x="400" y="130" fill="#16a34a" font-size="12" font-weight="bold">BC = 5 cm (Sisi Depan)</text>
        <!-- Hipotenusa AC = 13 cm -->
        <text x="200" y="110" fill="#dc2626" font-size="12" font-weight="bold">AC = 13 cm (Sisi Miring)</text>
        
        <!-- Angle Alpha arc at A -->
        <path d="M 120,190 A 40 40 0 0 0 110,172" fill="none" stroke="#7c3aed" stroke-width="2" />
        <text x="130" y="182" fill="#7c3aed" font-size="12" font-weight="bold">α</text>
      </svg>`;

    // -------------------------------------------------------------
    // MATEMATIKA: GRAFIK PARABOLA FUNGSI KUADRAT PADA KARTESIUS
    // -------------------------------------------------------------
    case 'math_function_graph':
      return `<svg viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-lg mx-auto my-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-2 shadow-sm">
        <text x="260" y="22" fill="#0f172a" font-size="12" font-weight="bold" text-anchor="middle" font-family="sans-serif">${title}: f(x) = x² - 6x + 5</text>
        
        <!-- Grid -->
        <g stroke="#f1f5f9" stroke-width="1">
          <line x1="60" y1="50" x2="460" y2="50" />
          <line x1="60" y1="90" x2="460" y2="90" />
          <line x1="60" y1="130" x2="460" y2="130" />
          <line x1="60" y1="170" x2="460" y2="170" />
          <line x1="60" y1="210" x2="460" y2="210" />
        </g>
        
        <!-- Axes -->
        <!-- X Axis (y = 0 at SVG y=140) -->
        <line x1="60" y1="140" x2="460" y2="140" stroke="#334155" stroke-width="2" />
        <text x="470" y="144" fill="#0f172a" font-size="11" font-weight="bold">X</text>
        <!-- Y Axis (x = 0 at SVG x=140) -->
        <line x1="140" y1="220" x2="140" y2="40" stroke="#334155" stroke-width="2" />
        <text x="145" y="40" fill="#0f172a" font-size="11" font-weight="bold">Y</text>

        <!-- Points of Interest: Root 1 (1,0) at x=180; Root 2 (5,0) at x=340; Vertex (3, -4) at x=260, y=190 -->
        <!-- Parabola Curve -->
        <path d="M 100,50 Q 260,330 420,50" fill="none" stroke="#7c3aed" stroke-width="3" />
        
        <!-- Points -->
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

        <!-- Y-intercept (0, 5) -->
        <circle cx="140" cy="90" r="4" fill="#16a34a" />
        <text x="95" y="94" fill="#15803d" font-size="10" font-weight="bold">(0, 5)</text>
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
        <!-- Clamp -->
        <rect x="95" y="90" width="75" height="6" fill="#475569" />
        
        <!-- Burette (Buret 50 mL) -->
        <rect x="170" y="40" width="16" height="120" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5" />
        <!-- Burette graduation lines -->
        <line x1="170" y1="50" x2="176" y2="50" stroke="#0284c7" stroke-width="1" />
        <line x1="170" y1="65" x2="178" y2="65" stroke="#0284c7" stroke-width="1" /><text x="150" y="68" font-size="8" fill="#0369a1">0 mL</text>
        <line x1="170" y1="95" x2="178" y2="95" stroke="#0284c7" stroke-width="1" /><text x="145" y="98" font-size="8" fill="#0369a1">30 mL</text>
        <line x1="170" y1="125" x2="178" y2="125" stroke="#0284c7" stroke-width="1" />
        
        <!-- Stopcock valve -->
        <polygon points="172,160 184,160 178,172" fill="#0284c7" />
        <rect x="170" y="163" width="16" height="4" fill="#0f172a" />
        <line x1="178" y1="172" x2="178" y2="182" stroke="#0284c7" stroke-width="2" />
        
        <!-- Falling drop -->
        <circle cx="178" cy="188" r="2" fill="#38bdf8" />

        <!-- Erlenmeyer Flask below -->
        <polygon points="168,195 188,195 215,225 141,225" fill="#fdf2f8" stroke="#db2777" stroke-width="2" />
        <text x="178" y="218" fill="#be185d" font-size="9" font-weight="bold" text-anchor="middle">Merah Muda</text>

        <!-- Information Callouts -->
        <!-- Burette Callout -->
        <rect x="235" y="55" width="260" height="55" rx="6" fill="#f0f9ff" stroke="#bae6fd" />
        <text x="245" y="75" fill="#0369a1" font-size="11" font-weight="bold">Penitrasi (Buret):</text>
        <text x="245" y="90" fill="#075985" font-size="10.5">• Larutan Standar NaOH 0,10 M</text>
        <text x="245" y="103" fill="#075985" font-size="10.5">• Volume terpakai (Vb) = 30 mL</text>

        <!-- Flask Callout -->
        <rect x="235" y="135" width="260" height="65" rx="6" fill="#fdf2f8" stroke="#fbcfe8" />
        <text x="245" y="155" fill="#9d174d" font-size="11" font-weight="bold">Analit (Erlenmeyer):</text>
        <text x="245" y="170" fill="#831843" font-size="10.5">• Larutan Asam HCl: Va = 25 mL</text>
        <text x="245" y="183" fill="#831843" font-size="10.5">• Indikator Fenolftalein (PP)</text>
        <text x="245" y="195" fill="#831843" font-size="10">• Ditanya: Konsentrasi Molaritas HCl</text>
      </svg>`;

    // -------------------------------------------------------------
    // KIMIA: DIAGRAM TINGKAT ENERGI TERMOKIMIA (ENTALPI DELTA H)
    // -------------------------------------------------------------
    case 'chemistry_energy_diagram':
      return `<svg viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-lg mx-auto my-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-2 shadow-sm">
        <text x="260" y="24" fill="#0f172a" font-size="12" font-weight="bold" text-anchor="middle" font-family="sans-serif">${title}: Diagram Entalpi Pembakaran CH₄</text>
        
        <!-- Y Axis (Enthalpy H in kJ) -->
        <line x1="70" y1="210" x2="70" y2="40" stroke="#334155" stroke-width="2.5" />
        <polygon points="70,35 65,45 75,45" fill="#334155" />
        <text x="60" y="32" fill="#0f172a" font-size="11" font-weight="bold">H (kJ)</text>

        <!-- Reactants Level (Higher Energy) -->
        <line x1="100" y1="70" x2="260" y2="70" stroke="#2563eb" stroke-width="4" />
        <text x="180" y="60" fill="#1e40af" font-size="12" font-weight="bold" text-anchor="middle">CH₄(g) + 2O₂(g) [Reaktan]</text>
        <text x="40" y="74" fill="#64748b" font-size="10" font-weight="bold">H₁</text>
        <line x1="70" y1="70" x2="100" y2="70" stroke="#cbd5e1" stroke-dasharray="3" />

        <!-- Products Level (Lower Energy) -->
        <line x1="280" y1="170" x2="450" y2="170" stroke="#16a34a" stroke-width="4" />
        <text x="365" y="195" fill="#14532d" font-size="12" font-weight="bold" text-anchor="middle">CO₂(g) + 2H₂O(l) [Produk]</text>
        <text x="40" y="174" fill="#64748b" font-size="10" font-weight="bold">H₂</text>
        <line x1="70" y1="170" x2="280" y2="170" stroke="#cbd5e1" stroke-dasharray="3" />

        <!-- Downward Arrow Delta H -->
        <line x1="270" y1="75" x2="270" y2="165" stroke="#dc2626" stroke-width="3" marker-end="url(#arrow-red)" />
        <rect x="285" y="105" width="165" height="40" rx="4" fill="#fee2e2" stroke="#fca5a5" />
        <text x="365" y="122" fill="#991b1b" font-size="11" font-weight="bold" text-anchor="middle">ΔH = -890 kJ/mol</text>
        <text x="365" y="137" fill="#7f1d1d" font-size="9.5" text-anchor="middle">(Reaksi Eksoterm: Melepas Kalor)</text>
      </svg>`;

    default:
      return null;
  }
};

/**
 * Bank Generator Soal Kuantitatif Eksak
 * Dihitung dengan rumus eksak, angka nyata, dan distractor angka logis
 */
export const generateExactScienceQuestion = ({
  subjectCategory,
  actualMapel,
  topikCapaian,
  item,
  idx,
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

  // =========================================================================
  // 1. MATA PELAJARAN FISIKA
  // =========================================================================
  if (subjectCategory === 'fisika') {
    const physicsTopics = [
      'dinamika_gaya',
      'rangkaian_listrik',
      'kinematika_vt',
      'usaha_energi'
    ];
    const chosen = physicsTopics[idx % physicsTopics.length];

    if (chosen === 'dinamika_gaya') {
      svgType = 'physics_fbd';
      // Soal Hukum Newton & Bidang Datar/Miring: m=4kg, F=32N, theta=30 deg, mu=0.2, g=10
      // F_x = 32 * cos(30) = 32 * 0.86 = 27.52 N. N = mg - F sin(30) = 40 - 16 = 24 N.
      // fk = 0.2 * 24 = 4.8 N. Sigma F = 27.52 - 4.8 = 22.72 N. a = 22.72 / 4 = 5.68 m/s^2 ~ 5.7 m/s^2.
      correctKey = isFaseABCD ? 'B' : 'B';
      
      if (itemLang === 'en') {
        stimulus = `Observe the free-body diagram illustrated in the diagram above! A block of mass m = 4 kg rests on a rough horizontal surface. A pulling force F = 32 N acts on the block at an angle of θ = 30° above the horizontal. The coefficient of kinetic friction between the block and the floor is μk = 0.2. Acceleration due to gravity is g = 10 m/s², with sin 30° = 0.50 and cos 30° = 0.86.`;
        butirSoal = `Based on the physical parameters and force vectors provided in the diagram, calculate the linear acceleration (a) of the block!`;
      } else if (itemLang === 'ar') {
        stimulus = `تأمل مخطط الجسم الحر (Free Body Diagram) الموضح في الشكل أعلاه! يستقر جسم كتلته m = 4 kg على سطح أفقي خشن، وتؤثر عليه قوة شد مقدارها F = 32 N بزاوية θ = 30° بالنسبة للأفق. معامل الاحتكاك الحركي μk = 0.2، وتسارع الجاذبية g = 10 m/s² (علماً بأن sin 30° = 0.50 و cos 30° = 0.86).`;
        butirSoal = `بناءً على معطيات المتجهات في الرسم التوضيhi، احسب مقدار التسارع الخطي (a) الذي يكتسبه الجسم:`;
      } else if (itemLang === 'palembang') {
        stimulus = `Jingok baek-baek diagram gaya di pucuk ini lur! Ado balok massanyo m = 4 kg tejuguk di lantai kasar. Balok ini ditarik gaya F = 32 N ngebentuk sudut θ = 30° dari lantai mendatar. Koefisien gesekan kinetis lantainyo μk = 0,2 samo percepatan gravitasi g = 10 m/s² (sin 30° = 0,50; cos 30° = 0,86).`;
        butirSoal = `Berdasarke hitungan gaya-gaya di gambar pucuk, berapo nian percepatan (a) yang dialami balok itu pas ditarik?`;
      } else {
        stimulus = `Perhatikan gambar diagram gaya bebas di atas! Sebuah balok bermassa m = 4 kg diletakkan pada bidang datar kasar. Balok tersebut ditarik oleh gaya F = 32 N yang membentuk sudut elevasi θ = 30° terhadap arah horizontal. Koefisien gesekan kinetis antara balok dengan lantai adalah μk = 0,2. Diketahui percepatan gravitasi g = 10 m/s², sin 30° = 0,50, dan cos 30° = 0,86.`;
        butirSoal = `Berdasarkan diagram dan besaran gaya di atas, berapakah besar percepatan gerak (a) yang dialami balok tersebut?`;
      }

      const numericOptions = [
        { key: 'A', text: '4,25 m/s²' },
        { key: 'B', text: '5,68 m/s²' },
        { key: 'C', text: '6,88 m/s²' },
        { key: 'D', text: '8,00 m/s²' },
        { key: 'E', text: '9,50 m/s²' }
      ];
      options = optionLetters.map(letter => numericOptions.find(o => o.key === letter) || { key: letter, text: '10,2 m/s²' });

      scoringGuide = `Pedoman Penskoran Fisika:
1. Menentukan gaya normal: N = mg - F.sin(30°) = (4)(10) - (32)(0,5) = 40 - 16 = 24 N (Skor 1)
2. Menghitung gaya gesek kinetis: fk = μk . N = 0,2 x 24 = 4,8 N (Skor 1)
3. Menghitung resultan gaya horizontal: ΣFx = F.cos(30°) - fk = (32)(0,86) - 4,8 = 27,52 - 4,8 = 22,72 N (Skor 1)
4. Menghitung percepatan: a = ΣFx / m = 22,72 / 4 = 5,68 m/s² (Skor 1)`;

      explanation = `Langkah Perhitungan Lengkap:
• Diketahui: m = 4 kg; F = 32 N; θ = 30°; μk = 0,2; g = 10 m/s²
• Komponen Gaya Vertikal: ΣFy = 0 => N + F.sin(30°) - mg = 0
  N = (4)(10) - (32)(0,5) = 40 - 16 = 24 N
• Gaya Gesek Kinetis:
  fk = μk . N = 0,2 x 24 = 4,8 N
• Hukum II Newton Sumbu X:
  ΣFx = m . a
  F.cos(30°) - fk = m . a
  (32 x 0,86) - 4,8 = 4 . a
  27,52 - 4,8 = 4a => 22,72 = 4a => a = 5,68 m/s²
Jawaban yang tepat adalah opsi ${correctKey} (5,68 m/s²).`;

    } else if (chosen === 'rangkaian_listrik') {
      svgType = 'physics_circuit';
      // Rangkaian Listrik: R1=4 ohm, R2=6 ohm, R3=12 ohm, E=18 V, r=1 ohm
      // Rp = (6*12)/(6+12) = 72/18 = 4 ohm. Rtot = R1 + Rp + r = 4 + 4 + 1 = 9 ohm.
      // I = E / Rtot = 18 / 9 = 2.0 A. V_AB = I * Rp = 2 * 4 = 8 V. V_R1 = I * R1 = 2 * 4 = 8 V.
      correctKey = isFaseABCD ? 'C' : 'C';

      if (itemLang === 'en') {
        stimulus = `Refer to the closed electrical circuit schematic shown in the diagram above! Three resistors with resistances R1 = 4 Ω, R2 = 6 Ω, and R3 = 12 Ω are connected to a DC electromotive source E = 18 V with internal resistance r = 1 Ω.`;
        butirSoal = `Determine the total electric current (I) flowing through the main loop and the potential difference across terminals A-B (V_AB)!`;
      } else {
        stimulus = `Perhatikan gambar diagram rangkaian listrik tertutup di atas! Tiga buah resistor dengan nilai hambatan masing-masing R1 = 4 Ω, R2 = 6 Ω, dan R3 = 12 Ω dihubungkan dengan sumber tegangan baterai E = 18 Volt yang memiliki hambatan dalam r = 1 Ω.`;
        butirSoal = `Berdasarkan konfigurasi rangkaian pada gambar, berapakah kuat arus listrik total (I) yang mengalir pada rangkaian utama dan beda potensial antara titik A dan B (V_AB)?`;
      }

      const numericOptions = [
        { key: 'A', text: 'I = 1,0 A dan V_AB = 4,0 Volt' },
        { key: 'B', text: 'I = 1,5 A dan V_AB = 6,0 Volt' },
        { key: 'C', text: 'I = 2,0 A dan V_AB = 8,0 Volt' },
        { key: 'D', text: 'I = 2,5 A dan V_AB = 10,0 Volt' },
        { key: 'E', text: 'I = 3,0 A dan V_AB = 12,0 Volt' }
      ];
      options = optionLetters.map(letter => numericOptions.find(o => o.key === letter) || { key: letter, text: 'I = 4,0 A' });

      scoringGuide = `Pedoman Penskoran:
1. Menghitung hambatan paralel R2 dan R3: 1/Rp = 1/6 + 1/12 = 3/12 => Rp = 4 Ω (Skor 1)
2. Menghitung hambatan total rangkaian: Rtot = R1 + Rp + r = 4 + 4 + 1 = 9 Ω (Skor 1)
3. Menghitung kuat arus total: I = E / Rtot = 18 / 9 = 2,0 Ampere (Skor 1)
4. Menghitung beda potensial V_AB: V_AB = I x Rp = 2,0 x 4 = 8,0 Volt (Skor 1)`;

      explanation = `Langkah Perhitungan Lengkap:
• Hambatan Paralel R2 & R3:
  1/Rp = 1/6 + 1/12 = (2 + 1)/12 = 3/12 => Rp = 12/3 = 4 Ω
• Hambatan Total Rangkaian:
  R_total = R1 + Rp + r = 4 + 4 + 1 = 9 Ω
• Kuat Arus Total (Hukum Ohm):
  I = E / R_total = 18 V / 9 Ω = 2,0 Ampere
• Tegangan Jepit Titik A-B (V_AB):
  V_AB = I x Rp = 2,0 A x 4 Ω = 8,0 Volt
Jawaban yang tepat adalah opsi ${correctKey}.`;

    } else if (chosen === 'kinematika_vt') {
      svgType = 'physics_motion_graph';
      // v-t graph: (0,0) to (4,20) -> triangle L1 = 1/2 * 4 * 20 = 40 m
      // (4,20) to (10,20) -> rect L2 = (10-4) * 20 = 120 m
      // (10,20) to (14,0) -> triangle L3 = 1/2 * (14-10) * 20 = 40 m
      // S_tot = 40 + 120 + 40 = 200 m (atau luas trapesium = 1/2 * (14 + 6) * 20 = 200 m).
      correctKey = isFaseABCD ? 'D' : 'D';

      if (itemLang === 'en') {
        stimulus = `Observe the velocity-time (v-t) graph in the figure above representing the rectilinear motion of a test vehicle along a straight track over a 14-second duration!`;
        butirSoal = `Based on the geometric area under the velocity-time graph, calculate the total distance (s) traveled by the vehicle during the entire 14-second interval!`;
      } else {
        stimulus = `Perhatikan grafik hubungan kecepatan terhadap waktu (v-t) pada gambar di atas yang menggambarkan gerak lurus suatu partikel uji selama 14 sekon!`;
        butirSoal = `Berdasarkan analisis grafik di atas, hitunglah jarak total (s) yang ditempuh partikel tersebut dari t = 0 s hingga t = 14 s!`;
      }

      const numericOptions = [
        { key: 'A', text: '120 meter' },
        { key: 'B', text: '160 meter' },
        { key: 'C', text: '180 meter' },
        { key: 'D', text: '200 meter' },
        { key: 'E', text: '240 meter' }
      ];
      options = optionLetters.map(letter => numericOptions.find(o => o.key === letter) || { key: letter, text: '280 meter' });

      scoringGuide = `Pedoman Penskoran:
1. Memahami konsep jarak sebagai luas daerah di bawah kurva grafik v-t (Skor 1)
2. Menghitung luas bangun trapesium atau membagi menjadi 3 bagian (segitiga, persegi panjang, segitiga) (Skor 2)
3. Mendapatkan hasil akhir jarak total = 200 meter (Skor 1)`;

      explanation = `Langkah Perhitungan Lengkap:
Pada grafik v-t, jarak tempuh total sama dengan luas daerah di bawah grafik:
Bentuk bangun adalah Trapesium:
• Sisi sejajar 1 (a) = 14 s (dari t=0 sampai t=14)
• Sisi sejajar 2 (b) = 10 - 4 = 6 s (saat kecepatan konstan 20 m/s)
• Tinggi trapesium (t) = 20 m/s
Luas Trapesium = ½ x (a + b) x t
s = ½ x (14 + 6) x 20
s = ½ x 20 x 20 = 200 meter
Jawaban yang tepat adalah opsi ${correctKey} (200 meter).`;

    } else {
      svgType = 'physics_fbd';
      // Usaha & Energi: m = 2 kg, h1 = 20 m, h2 = 5 m. Ek = mg(h1 - h2) = 2*10*15 = 300 Joule
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
      options = optionLetters.map(letter => numericOptions.find(o => o.key === letter) || { key: letter, text: '50 Joule' });

      scoringGuide = `Pedoman Penskoran:
1. Hukum Kekekalan Energi Mekanik: Em1 = Em2 (Skor 1)
2. Ep1 + Ek1 = Ep2 + Ek2 dengan Ek1 = 0 (karena jatuh bebas) (Skor 1)
3. Ek2 = m.g.h1 - m.g.h2 = m.g.(h1 - h2) = 2 x 10 x (20 - 5) (Skor 1)
4. Ek2 = 2 x 10 x 15 = 300 Joule (Skor 1)`;

      explanation = `Langkah Perhitungan:
Hukum Kekekalan Energi Mekanik:
Ek2 = Ep1 - Ep2 = m.g.(h1 - h2)
Ek2 = 2 kg x 10 m/s² x (20 m - 5 m)
Ek2 = 20 x 15 = 300 Joule
Jawaban yang benar adalah ${correctKey} (300 Joule).`;
    }

  // =========================================================================
  // 2. MATA PELAJARAN MATEMATIKA
  // =========================================================================
  } else if (subjectCategory === 'matematika') {
    const mathTopics = [
      'geometri_trigonometri',
      'fungsi_kuadrat',
      'spldv_aljabar',
      'dimensi_tiga'
    ];
    const chosen = mathTopics[idx % mathTopics.length];

    if (chosen === 'geometri_trigonometri') {
      svgType = 'math_geometry_triangle';
      // Segitiga siku-siku ABC di B: AB = 12 cm, BC = 5 cm. AC = sqrt(12^2 + 5^2) = 13 cm.
      // sin(alpha) = 5/13, cos(alpha) = 12/13. sin + cos = 17/13.
      correctKey = isFaseABCD ? 'A' : 'A';

      if (itemLang === 'en') {
        stimulus = `Observe the right-angled triangle ABC illustrated in the figure above! The triangle is right-angled at vertex B, with base AB = 12 cm and perpendicular height BC = 5 cm. Angle α is located at vertex A.`;
        butirSoal = `Determine the exact length of hypotenuse AC and the algebraic sum of the trigonometric ratios (sin α + cos α)!`;
      } else {
        stimulus = `Perhatikan gambar segitiga siku-siku ABC pada gambar di atas! Segitiga tersebut siku-siku di titik B, dengan panjang sisi alas AB = 12 cm dan tinggi BC = 5 cm. Sudut lancip α terletak pada titik sudut A.`;
        butirSoal = `Tentukan panjang sisi miring (hipotenusa) AC serta nilai hasil penjumlahan perbandingan trigonometri (sin α + cos α)!`;
      }

      const numericOptions = [
        { key: 'A', text: 'AC = 13 cm dan sin α + cos α = 17/13' },
        { key: 'B', text: 'AC = 13 cm dan sin α + cos α = 12/13' },
        { key: 'C', text: 'AC = 15 cm dan sin α + cos α = 17/15' },
        { key: 'D', text: 'AC = 13 cm dan sin α + cos α = 7/13' },
        { key: 'E', text: 'AC = 17 cm dan sin α + cos α = 15/17' }
      ];
      options = optionLetters.map(letter => numericOptions.find(o => o.key === letter) || { key: letter, text: 'AC = 10 cm' });

      scoringGuide = `Pedoman Penskoran:
1. Teorema Pythagoras: AC = √(AB² + BC²) = √(12² + 5²) = √(144 + 25) = √169 = 13 cm (Skor 2)
2. Perbandingan trigonometri: sin α = depan/miring = 5/13; cos α = samping/miring = 12/13 (Skor 1)
3. Hasil penjumlahan: sin α + cos α = 5/13 + 12/13 = 17/13 (Skor 1)`;

      explanation = `Langkah Perhitungan Lengkap:
1. Menghitung Hipotenusa AC (Teorema Pythagoras):
   AC = √(AB² + BC²)
   AC = √(12² + 5²) = √(144 + 25) = √169 = 13 cm
2. Menentukan nilai trigonometri sudut α:
   sin α = sisi depan / sisi miring = BC / AC = 5 / 13
   cos α = sisi samping / sisi miring = AB / AC = 12 / 13
3. Penjumlahan:
   sin α + cos α = 5/13 + 12/13 = 17/13
Jawaban yang tepat adalah opsi ${correctKey}.`;

    } else if (chosen === 'fungsi_kuadrat') {
      svgType = 'math_function_graph';
      // f(x) = x^2 - 6x + 5. Titik puncak x_p = -b/(2a) = 6/2 = 3. y_p = 3^2 - 6(3) + 5 = 9 - 18 + 5 = -4.
      // Titik potong sumbu X: (x-1)(x-5)=0 => (1,0) dan (5,0).
      correctKey = isFaseABCD ? 'C' : 'C';

      if (itemLang === 'en') {
        stimulus = `Refer to the Cartesian parabola curve f(x) = x² - 6x + 5 depicted in the coordinate graph above!`;
        butirSoal = `Find the exact coordinates of the vertex (turning point) and the x-intercepts of this quadratic function!`;
      } else {
        stimulus = `Perhatikan kurva grafik fungsi kuadrat f(x) = x² - 6x + 5 pada sistem koordinat Kartesius di atas!`;
        butirSoal = `Berdasarkan fungsi kuadrat tersebut, tentukan koordinat titik puncak (titik balik minimum) serta titik-titik potong grafik terhadap sumbu-X!`;
      }

      const numericOptions = [
        { key: 'A', text: 'Puncak (2, -3) dan titik potong (2, 0) dan (3, 0)' },
        { key: 'B', text: 'Puncak (3, -9) dan titik potong (-1, 0) dan (5, 0)' },
        { key: 'C', text: 'Puncak (3, -4) dan titik potong (1, 0) dan (5, 0)' },
        { key: 'D', text: 'Puncak (-3, 4) dan titik potong (-1, 0) dan (-5, 0)' },
        { key: 'E', text: 'Puncak (3, 4) dan titik potong (1, 0) dan (5, 0)' }
      ];
      options = optionLetters.map(letter => numericOptions.find(o => o.key === letter) || { key: letter, text: 'Puncak (0, 5)' });

      scoringGuide = `Pedoman Penskoran:
1. Titik potong sumbu-X: x² - 6x + 5 = 0 => (x - 1)(x - 5) = 0 => x = 1 atau x = 5 (Skor 2)
2. Sumbu simetri: xp = -b / (2a) = -(-6) / (2 x 1) = 3 (Skor 1)
3. Nilai optimum: yp = f(3) = 3² - 6(3) + 5 = 9 - 18 + 5 = -4 => Puncak (3, -4) (Skor 1)`;

      explanation = `Langkah Perhitungan Lengkap:
Fungsi kuadrat f(x) = x² - 6x + 5 memiliki nilai koefisien a = 1, b = -6, c = 5.
1. Titik Potong Sumbu X (f(x) = 0):
   x² - 6x + 5 = 0
   (x - 1)(x - 5) = 0
   x1 = 1 dan x2 = 5 => Koordinat potong: (1, 0) dan (5, 0).
2. Titik Puncak (xp, yp):
   xp = -b / (2a) = -(-6) / (2 x 1) = 6 / 2 = 3
   yp = f(3) = 3² - 6(3) + 5 = 9 - 18 + 5 = -4
   Jadi titik balik puncak adalah (3, -4).
Jawaban yang benar adalah opsi ${correctKey}.`;

    } else if (chosen === 'spldv_aljabar') {
      svgType = 'math_function_graph';
      // SPLDV: 3x + 2y = 28 dan 2x + 5y = 33
      // 2*(3x+2y) = 6x + 4y = 56
      // 3*(2x+5y) = 6x + 15y = 99
      // 11y = 43? Wait: 3x + 2y = 28 => if x=6, y=5 => 3(6)+2(5) = 18+10=28. 2(6)+5(5)=12+25=37.
      // So 3x + 2y = 28 dan 2x + 5y = 37.
      // x = 6, y = 5. Nilai dari 4x - y = 4(6) - 5 = 24 - 5 = 19.
      correctKey = isFaseABCD ? 'B' : 'B';
      stimulus = `Diketahui sistem persamaan linear dua variabel (SPLDV) berikut:
Persamaan (1): 3x + 2y = 28
Persamaan (2): 2x + 5y = 37`;
      butirSoal = `Tentukan nilai penyelesaian (x, y) dari sistem persamaan di atas, serta hitunglah nilai dari (4x - y)!`;

      const numericOptions = [
        { key: 'A', text: 'x = 5, y = 6, dan nilai (4x - y) = 14' },
        { key: 'B', text: 'x = 6, y = 5, dan nilai (4x - y) = 19' },
        { key: 'C', text: 'x = 7, y = 4, dan nilai (4x - y) = 24' },
        { key: 'D', text: 'x = 4, y = 8, dan nilai (4x - y) = 8' },
        { key: 'E', text: 'x = 8, y = 2, dan nilai (4x - y) = 30' }
      ];
      options = optionLetters.map(letter => numericOptions.find(o => o.key === letter) || { key: letter, text: '20' });

      scoringGuide = `Pedoman Penskoran:
1. Eliminasi x dengan perkalian koefisien (Skor 1)
2. Menghitung nilai y = 5 (Skor 1)
3. Substitusi mendapatkan x = 6 (Skor 1)
4. Menghitung nilai 4x - y = 4(6) - 5 = 19 (Skor 1)`;

      explanation = `Langkah Perhitungan:
Eliminasi variabel x:
(1) x 2 => 6x + 4y = 56
(2) x 3 => 6x + 15y = 111
Kurangkan: (6x + 15y) - (6x + 4y) = 111 - 56
11y = 55 => y = 5
Substitusi y = 5 ke persamaan (1):
3x + 2(5) = 28 => 3x + 10 = 28 => 3x = 18 => x = 6
Nilai dari 4x - y = 4(6) - 5 = 24 - 5 = 19.
Jawaban yang benar adalah ${correctKey}.`;

    } else {
      svgType = 'math_geometry_triangle';
      // Geometri Lingkaran Juring: r = 14 cm, sudut pusat = 90 deg.
      // Luas juring = 90/360 * 22/7 * 14 * 14 = 1/4 * 616 = 154 cm^2.
      correctKey = isFaseABCD ? 'C' : 'C';
      stimulus = `Perhatikan sebuah lingkaran berpusat di O dengan jari-jari r = 14 cm. Diketahui sudut pusat juring AOB adalah 90° (sudut siku-siku). Gunakan nilai pendekatan π = 22/7.`;
      butirSoal = `Berapakah luas juring AOB dan panjang busur AB pada lingkaran tersebut?`;

      const numericOptions = [
        { key: 'A', text: 'Luas = 77 cm² dan Panjang Busur = 11 cm' },
        { key: 'B', text: 'Luas = 110 cm² dan Panjang Busur = 18 cm' },
        { key: 'C', text: 'Luas = 154 cm² dan Panjang Busur = 22 cm' },
        { key: 'D', text: 'Luas = 308 cm² dan Panjang Busur = 44 cm' },
        { key: 'E', text: 'Luas = 616 cm² dan Panjang Busur = 88 cm' }
      ];
      options = optionLetters.map(letter => numericOptions.find(o => o.key === letter) || { key: letter, text: 'Luas = 100 cm²' });

      scoringGuide = `Pedoman Penskoran:
1. Menghitung luas juring: L = (θ/360°) x πr² = (90°/360°) x (22/7) x 14² = ¼ x 616 = 154 cm² (Skor 2)
2. Menghitung panjang busur: Busur = (θ/360°) x 2πr = (90°/360°) x 2 x (22/7) x 14 = ¼ x 88 = 22 cm (Skor 2)`;

      explanation = `Langkah Perhitungan:
• Luas Juring AOB:
  L = (90° / 360°) x π x r²
  L = ¼ x (22 / 7) x 14 x 14
  L = ¼ x 616 = 154 cm²
• Panjang Busur AB:
  Busur = (90° / 360°) x 2 x π x r
  Busur = ¼ x 2 x (22 / 7) x 14
  Busur = ¼ x 88 = 22 cm
Jawaban yang tepat adalah opsi ${correctKey}.`;
    }

  // =========================================================================
  // 3. MATA PELAJARAN KIMIA
  // =========================================================================
  } else {
    const chemTopics = [
      'titrasi_asam_basa',
      'stoikiometri_reaksi',
      'termokimia_entalpi',
      'elektrokimia_volta'
    ];
    const chosen = chemTopics[idx % chemTopics.length];

    if (chosen === 'titrasi_asam_basa') {
      svgType = 'chemistry_titration';
      // Titrasi: Va = 25 mL HCl, Vb = 30 mL NaOH, Mb = 0.10 M
      // Va * Ma * na = Vb * Mb * nb => 25 * Ma * 1 = 30 * 0.10 * 1 => Ma = 3.0 / 25 = 0.12 M
      correctKey = isFaseABCD ? 'C' : 'C';

      if (itemLang === 'en') {
        stimulus = `Observe the acid-base titration apparatus depicted in the laboratory illustration above! A 25.0 mL sample of hydrochloric acid (HCl) of unknown concentration is titrated against a standardized 0.10 M sodium hydroxide (NaOH) solution using phenolphthalein indicator. The equivalence endpoint is reached when exactly 30.0 mL of NaOH is dispensed.`;
        butirSoal = `Based on the volumetric data and chemical stoichiometry, calculate the exact molarity concentration (M) of the analyte HCl solution!`;
      } else {
        stimulus = `Perhatikan gambar set alat titrasi asam-basa pada laboratorium di atas! Sebanyak 25,0 mL larutan asam klorida (HCl) yang belum diketahui konsentrasinya dititrasi dengan larutan standar natrium hidroksida (NaOH) 0,10 M menggunakan indikator fenolftalein (PP). Titik akhir titrasi tercapai saat volume NaOH yang terpakai dari buret tepat 30,0 mL.`;
        butirSoal = `Berdasarkan data volumetri dan stoikiometri reaksi netralisasi pada gambar, berapakah konsentrasi molaritas (M) dari larutan HCl tersebut?`;
      }

      const numericOptions = [
        { key: 'A', text: '0,06 M' },
        { key: 'B', text: '0,08 M' },
        { key: 'C', text: '0,12 M' },
        { key: 'D', text: '0,15 M' },
        { key: 'E', text: '0,20 M' }
      ];
      options = optionLetters.map(letter => numericOptions.find(o => o.key === letter) || { key: letter, text: '0,25 M' });

      scoringGuide = `Pedoman Penskoran:
1. Menuliskan persamaan reaksi netralisasi setara: HCl + NaOH -> NaCl + H2O (Valensi asam na=1, valensi basa nb=1) (Skor 1)
2. Menuliskan rumus netralisasi volumetri: Va . Ma . na = Vb . Mb . nb (Skor 1)
3. Melakukan substitusi angka: (25 mL) . Ma . (1) = (30 mL) . (0,10 M) . (1) (Skor 1)
4. Menghitung hasil akhir: Ma = 3,0 / 25 = 0,12 M (Skor 1)`;

      explanation = `Langkah Perhitungan Lengkap:
Reaksi netralisasi asam-basa:
HCl(aq) + NaOH(aq) -> NaCl(aq) + H2O(l)
Valensi asam HCl (na) = 1
Valensi basa NaOH (nb) = 1

Pada titik ekivalen titrasi berlaku:
mol H+ = mol OH-
Va x Ma x na = Vb x Mb x nb
25 mL x Ma x 1 = 30 mL x 0,10 M x 1
25 x Ma = 3,0
Ma = 3,0 / 25
Ma = 0,12 M
Jadi konsentrasi molaritas larutan HCl adalah 0,12 M. Jawaban yang tepat adalah opsi ${correctKey}.`;

    } else if (chosen === 'termokimia_entalpi') {
      svgType = 'chemistry_energy_diagram';
      // Termokimia: CH4 + 2O2 -> CO2 + 2H2O Delta H = -890 kJ/mol
      // m = 32 g CH4, Mr = 16. Mol = 32 / 16 = 2 mol. Q = 2 * 890 = 1780 kJ dilepaskan
      correctKey = isFaseABCD ? 'B' : 'B';

      if (itemLang === 'en') {
        stimulus = `Observe the thermochemical energy profile diagram above! The combustion of methane gas proceeds according to the equation: CH₄(g) + 2O₂(g) -> CO₂(g) + 2H₂O(l) with ΔH = -890 kJ/mol. (Molar mass Mr of CH₄ = 16 g/mol).`;
        butirSoal = `Calculate the total amount of heat energy released upon complete stoichiometric combustion of 32.0 grams of methane gas!`;
      } else {
        stimulus = `Perhatikan diagram tingkat energi entalpi termokimia pada gambar di atas! Reaksi pembakaran sempurna gas metana berlangsung menurut persamaan: CH₄(g) + 2O₂(g) -> CO₂(g) + 2H₂O(l)  ΔH = -890 kJ/mol. Diketahui massa molar Mr CH₄ = 16 g/mol.`;
        butirSoal = `Berdasarkan diagram entalpi di atas, berapakah besar kalor yang dilepaskan pada pembakaran sempurna 32,0 gram gas metana?`;
      }

      const numericOptions = [
        { key: 'A', text: '890 kJ dilepaskan' },
        { key: 'B', text: '1.780 kJ dilepaskan' },
        { key: 'C', text: '2.670 kJ dilepaskan' },
        { key: 'D', text: '3.560 kJ diserap' },
        { key: 'E', text: '1.780 kJ diserap' }
      ];
      options = optionLetters.map(letter => numericOptions.find(o => o.key === letter) || { key: letter, text: '4.000 kJ' });

      scoringGuide = `Pedoman Penskoran:
1. Menghitung jumlah mol CH4: n = massa / Mr = 32 / 16 = 2,0 mol (Skor 1)
2. Memahami arti ΔH = -890 kJ/mol sebagai kalor yang dilepaskan per 1 mol (Skor 1)
3. Menghitung kalor total: Q = n x |ΔH| = 2,0 x 890 kJ = 1.780 kJ (Skor 1)
4. Menyimpulkan bahwa reaksi bersifat eksotermik (kalor dilepaskan) (Skor 1)`;

      explanation = `Langkah Perhitungan Lengkap:
1. Menghitung mol gas metana (CH₄):
   mol = massa / Mr = 32 g / 16 g/mol = 2,0 mol
2. Nilai ΔH = -890 kJ/mol menunjukkan bahwa pembakaran 1 mol CH₄ MELEPASKAN kalor sebesar 890 kJ (tanda minus = eksoterm).
3. Kalor yang dilepaskan untuk 2 mol CH₄:
   Q = mol x |ΔH| = 2,0 mol x 890 kJ/mol = 1.780 kJ dilepaskan.
Jawaban yang tepat adalah opsi ${correctKey}.`;

    } else if (chosen === 'stoikiometri_reaksi') {
      svgType = 'chemistry_titration';
      // Stoikiometri: 5.4 gram Al (Ar = 27) + asam sulfat encer: 2Al + 3H2SO4 -> Al2(SO4)3 + 3H2
      // mol Al = 5.4 / 27 = 0.2 mol. mol H2 = 3/2 * 0.2 = 0.3 mol.
      // V STP = 0.3 * 22.4 = 6.72 Liter.
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
      options = optionLetters.map(letter => numericOptions.find(o => o.key === letter) || { key: letter, text: '13,44 L' });

      scoringGuide = `Pedoman Penskoran:
1. Menghitung mol Al: n = 5,4 / 27 = 0,2 mol (Skor 1)
2. Perbandingan koefisien: mol H2 = (3/2) x mol Al = (3/2) x 0,2 = 0,3 mol (Skor 2)
3. Volume gas STP: V = n x 22,4 L = 0,3 x 22,4 = 6,72 Liter (Skor 1)`;

      explanation = `Langkah Perhitungan:
• mol Al = massa / Ar = 5,4 g / 27 g/mol = 0,2 mol
• Berdasarkan koefisien reaksi setara:
  mol H₂ = (Koefisien H₂ / Koefisien Al) x mol Al
  mol H₂ = (3 / 2) x 0,2 mol = 0,3 mol
• Pada kondisi standar (STP, 0°C, 1 atm):
  Volume gas H₂ = mol x 22,4 L/mol = 0,3 x 22,4 L = 6,72 Liter
Jawaban yang tepat adalah opsi ${correctKey}.`;

    } else {
      svgType = 'chemistry_energy_diagram';
      // Elektrokimia Sel Volta: Zn|Zn2+ E0 = -0.76 V; Cu|Cu2+ E0 = +0.34 V
      // E0 sel = E0 katoda - E0 anoda = +0.34 - (-0.76) = +1.10 Volt
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
      options = optionLetters.map(letter => numericOptions.find(o => o.key === letter) || { key: letter, text: '+1,10 V' });

      scoringGuide = `Pedoman Penskoran:
1. Menentukan katoda (E° lebih positif = Cu) dan anoda (E° lebih negatif = Zn) (Skor 1)
2. Menuliskan notasi sel: Anoda || Katoda => Zn | Zn²⁺ || Cu²⁺ | Cu (Skor 1)
3. Menghitung E° sel = E° katoda - E° anoda = +0,34 - (-0,76) = +1,10 Volt (Skor 2)`;

      explanation = `Langkah Perhitungan:
• Logam dengan E° lebih besar mengalami reduksi (Katoda): Cu²⁺ + 2e⁻ -> Cu (E° = +0,34 V)
• Logam dengan E° lebih kecil mengalami oksidasi (Anoda): Zn -> Zn²⁺ + 2e⁻ (E° = -0,76 V)
• Notasi Sel Volta: Anoda | Ion || Ion | Katoda => Zn | Zn²⁺ || Cu²⁺ | Cu
• Potensial Sel Standar:
  E° sel = E° katoda - E° anoda
  E° sel = +0,34 V - (-0,76 V) = +1,10 Volt
Jawaban yang tepat adalah opsi ${correctKey}.`;
    }
  }

  // Khusus soal bentuk Benar-Salah
  if (item.type === 'benar_salah') {
    correctKey = idx % 2 === 0 ? 'Benar' : 'Salah';
    const originalText = butirSoal;
    butirSoal = `Pernyataan: "Berdasarkan data angka dan perhitungan matematis di atas, hasil perhitungan nilai akhir adalah tepat sesuai kaidah rumus fisika/kimia/matematika terukur." \n\nBagaimanakah kebenaran pernyataan matematis tersebut?`;
    options = [
      { key: 'Benar', text: 'Pernyataan perhitungan di atas BENAR' },
      { key: 'Salah', text: 'Pernyataan perhitungan di atas SALAH' }
    ];
  }

  // Khusus soal Kompleks
  if (item.type.includes('kompleks')) {
    butirSoal = `Perhatikan kembali data numerik dan langkah perhitungan di atas! Berikan tanda centang pada SEMUA pernyataan matematis berikut yang bernilai BENAR:`;
    const isAD = isFaseABCD;
    options = optionLetters.map((letter, optIdx) => {
      const isCorrect = correctKeys.includes(letter);
      return {
        key: letter,
        text: isCorrect
          ? `Pernyataan ${letter}: Menggunakan rumus turunan yang tepat dan menghasilkan nilai kuantitatif yang konsisten dengan data soal.`
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
