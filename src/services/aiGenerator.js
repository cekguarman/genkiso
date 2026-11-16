// AI Assessment Generator Service
// Mendukung Google Gemini API (Direct) & Built-in High-Fidelity Pedagogical Engine
import { 
  detectSubjectCategory,
  isQuantitativeSubject,
  generateExactScienceSvg, 
  generateExactScienceQuestion 
} from './exactScienceGenerator.js';

export const generateSvgIllustration = (type, title = 'Ilustrasi Soal') => {
  // Cek apakah jenis SVG termasuk kategori sains/matematika eksak
  const exactSvg = generateExactScienceSvg(type, title);
  if (exactSvg) {
    return exactSvg;
  }

  switch (type) {
    case 'flowchart':
      return `<svg viewBox="0 0 500 220" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto my-3 rounded-lg border border-slate-200 bg-slate-50 p-2 shadow-sm">
        <defs>
          <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#3b82f6" />
            <stop offset="100%" stop-color="#1d4ed8" />
          </linearGradient>
          <linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#10b981" />
            <stop offset="100%" stop-color="#047857" />
          </linearGradient>
          <linearGradient id="g3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#f59e0b" />
            <stop offset="100%" stop-color="#d97706" />
          </linearGradient>
          <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#475569" />
          </marker>
        </defs>
        <!-- Start Node -->
        <rect x="20" y="85" width="90" height="45" rx="22" fill="url(#g1)" stroke="#1e40af" stroke-width="1.5" />
        <text x="65" y="112" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle" font-family="sans-serif">Mulai (Start)</text>
        <line x1="110" y1="107" x2="155" y2="107" stroke="#475569" stroke-width="2" marker-end="url(#arrow)" />
        
        <!-- Process Node -->
        <polygon points="195,80 280,80 260,135 175,135" fill="url(#g2)" stroke="#065f46" stroke-width="1.5" />
        <text x="228" y="105" fill="#ffffff" font-size="11" font-weight="600" text-anchor="middle" font-family="sans-serif">Input Nilai</text>
        <text x="228" y="120" fill="#ffffff" font-size="10" text-anchor="middle" font-family="sans-serif">Sensor / Data</text>
        <line x1="270" y1="107" x2="315" y2="107" stroke="#475569" stroke-width="2" marker-end="url(#arrow)" />

        <!-- Decision Diamond -->
        <polygon points="365,70 415,107 365,145 315,107" fill="url(#g3)" stroke="#b45309" stroke-width="1.5" />
        <text x="365" y="104" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle" font-family="sans-serif">Kondisi</text>
        <text x="365" y="117" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle" font-family="sans-serif">Valid?</text>
        
        <!-- Output branch -->
        <line x1="415" y1="107" x2="475" y2="107" stroke="#475569" stroke-width="2" marker-end="url(#arrow)" />
        <text x="440" y="98" fill="#15803d" font-size="10" font-weight="bold">Ya</text>
        <rect x="445" y="87" width="50" height="40" rx="8" fill="#3b82f6" />
        <text x="470" y="112" fill="#fff" font-size="9" text-anchor="middle">Aksi</text>
      </svg>`;

    case 'chart':
      return `<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto my-3 rounded-lg border border-slate-200 bg-white p-2 shadow-sm">
        <text x="250" y="24" fill="#1e293b" font-size="13" font-weight="bold" text-anchor="middle" font-family="sans-serif">${title}</text>
        <line x1="50" y1="40" x2="50" y2="160" stroke="#94a3b8" stroke-width="1.5" />
        <line x1="50" y1="160" x2="460" y2="160" stroke="#94a3b8" stroke-width="1.5" />
        <!-- Gridlines -->
        <line x1="50" y1="120" x2="460" y2="120" stroke="#f1f5f9" stroke-width="1" stroke-dasharray="4" />
        <line x1="50" y1="80" x2="460" y2="80" stroke="#f1f5f9" stroke-width="1" stroke-dasharray="4" />
        <!-- Bars -->
        <rect x="80" y="70" width="45" height="90" rx="4" fill="#3b82f6" />
        <text x="102" y="62" fill="#1e40af" font-size="11" font-weight="bold" text-anchor="middle">75%</text>
        <text x="102" y="176" fill="#475569" font-size="10" text-anchor="middle">Data A</text>

        <rect x="160" y="95" width="45" height="65" rx="4" fill="#10b981" />
        <text x="182" y="87" fill="#065f46" font-size="11" font-weight="bold" text-anchor="middle">55%</text>
        <text x="182" y="176" fill="#475569" font-size="10" text-anchor="middle">Data B</text>

        <rect x="240" y="50" width="45" height="110" rx="4" fill="#f59e0b" />
        <text x="262" y="42" fill="#92400e" font-size="11" font-weight="bold" text-anchor="middle">92%</text>
        <text x="262" y="176" fill="#475569" font-size="10" text-anchor="middle">Data C</text>

        <rect x="320" y="110" width="45" height="50" rx="4" fill="#8b5cf6" />
        <text x="342" y="102" fill="#5b21b6" font-size="11" font-weight="bold" text-anchor="middle">42%</text>
        <text x="342" y="176" fill="#475569" font-size="10" text-anchor="middle">Data D</text>

        <rect x="400" y="80" width="45" height="80" rx="4" fill="#ec4899" />
        <text x="422" y="72" fill="#9d174d" font-size="11" font-weight="bold" text-anchor="middle">68%</text>
        <text x="422" y="176" fill="#475569" font-size="10" text-anchor="middle">Data E</text>
      </svg>`;

    case 'ecosystem':
    default:
      return `<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto my-3 rounded-lg border border-slate-200 bg-gradient-to-r from-blue-50 to-emerald-50 p-2 shadow-sm">
        <text x="250" y="24" fill="#0f172a" font-size="13" font-weight="bold" text-anchor="middle" font-family="sans-serif">Model Konseptual & Siklus Interaksi</text>
        <!-- Circle 1 -->
        <circle cx="100" cy="110" r="45" fill="#dbeafe" stroke="#2563eb" stroke-width="2" />
        <text x="100" y="108" fill="#1e3a8a" font-size="11" font-weight="bold" text-anchor="middle">Komponen</text>
        <text x="100" y="122" fill="#1e3a8a" font-size="10" text-anchor="middle">Primer (Input)</text>

        <!-- Arrow 1-2 -->
        <path d="M 150 95 Q 200 70 240 90" fill="none" stroke="#2563eb" stroke-width="2" marker-end="url(#arrow)" />

        <!-- Circle 2 -->
        <circle cx="250" cy="110" r="45" fill="#d1fae5" stroke="#059669" stroke-width="2" />
        <text x="250" y="108" fill="#064e3b" font-size="11" font-weight="bold" text-anchor="middle">Transformasi</text>
        <text x="250" y="122" fill="#064e3b" font-size="10" text-anchor="middle">& Logika</text>

        <!-- Arrow 2-3 -->
        <path d="M 300 95 Q 350 70 390 90" fill="none" stroke="#059669" stroke-width="2" marker-end="url(#arrow)" />

        <!-- Circle 3 -->
        <circle cx="400" cy="110" r="45" fill="#fef3c7" stroke="#d97706" stroke-width="2" />
        <text x="400" y="108" fill="#78350f" font-size="11" font-weight="bold" text-anchor="middle">Dampak /</text>
        <text x="400" y="122" fill="#78350f" font-size="10" text-anchor="middle">Hasil (Output)</text>

        <!-- Feedback arrow -->
        <path d="M 380 145 Q 250 185 120 145" fill="none" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4" />
        <text x="250" y="180" fill="#475569" font-size="9" text-anchor="middle">Umpan Balik & Evaluasi Berkelanjutan</text>
      </svg>`;
  }
};

/**
 * Deteksi Domain Mata Pelajaran Kualitatif
 * Membedakan bahasa, kewarganegaraan, sosial-humaniora, agama, seni, olahraga, dan komputasi
 */
export const detectQualitativeDomain = (mapel = '', topik = '') => {
  const combined = `${mapel} ${topik}`.toLowerCase();

  if (
    combined.includes('indonesia') ||
    combined.includes('inggris') ||
    combined.includes('english') ||
    combined.includes('bahasa') ||
    combined.includes('sastra') ||
    combined.includes('teks') ||
    combined.includes('literasi baca')
  ) {
    return 'bahasa';
  }

  if (
    combined.includes('pancasila') ||
    combined.includes('ppkn') ||
    combined.includes('kewarganegaraan') ||
    combined.includes('hukum') ||
    combined.includes('konstitusi') ||
    combined.includes('uud') ||
    combined.includes('hak asasi') ||
    combined.includes('ham') ||
    combined.includes('norma')
  ) {
    return 'pancasila';
  }

  if (
    combined.includes('sejarah') ||
    combined.includes('sosiologi') ||
    combined.includes('antropologi') ||
    combined.includes('sosial') ||
    combined.includes('peradaban')
  ) {
    return 'sosial';
  }

  if (
    combined.includes('agama') ||
    combined.includes('islam') ||
    combined.includes('kristen') ||
    combined.includes('katolik') ||
    combined.includes('hindu') ||
    combined.includes('buddha') ||
    combined.includes('budi pekerti') ||
    combined.includes('akhlak') ||
    combined.includes('fiqih') ||
    combined.includes('akidah')
  ) {
    return 'agama';
  }

  if (
    combined.includes('seni') ||
    combined.includes('musik') ||
    combined.includes('rupa') ||
    combined.includes('tari') ||
    combined.includes('teater') ||
    combined.includes('prakarya') ||
    combined.includes('estetika')
  ) {
    return 'seni';
  }

  if (
    combined.includes('pjok') ||
    combined.includes('olahraga') ||
    combined.includes('penjas') ||
    combined.includes('kebugaran') ||
    combined.includes('jasmani') ||
    combined.includes('senam') ||
    combined.includes('kesehatan')
  ) {
    return 'pjok';
  }

  if (
    combined.includes('informatika') ||
    combined.includes('komputasi') ||
    combined.includes('koding') ||
    combined.includes('algoritma') ||
    combined.includes('komputer') ||
    combined.includes('kecerdasan artifisial') ||
    combined.includes('ai')
  ) {
    return 'informatika';
  }

  return 'umum';
};

/**
 * Menghitung Distribusi Level Kognitif Bloom (C1-C6) Berdasarkan Input Persis Pengguna di Langkah 2
 */
export const calculateBloomDistribution = (bloomConfig, totalQuestions) => {
  const levels = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6'];
  const pool = [];

  levels.forEach(lvl => {
    const count = Math.max(0, parseInt(bloomConfig?.[lvl]) || 0);
    const code = lvl.toUpperCase();
    for (let i = 0; i < count; i++) {
      pool.push(code);
    }
  });

  if (pool.length === 0) {
    const defaultLevels = ['C1', 'C2', 'C3', 'C4', 'C5', 'C6'];
    for (let i = 0; i < totalQuestions; i++) {
      pool.push(defaultLevels[i % defaultLevels.length]);
    }
    return pool;
  }

  if (pool.length === totalQuestions) {
    return pool;
  }

  if (pool.length > totalQuestions) {
    return pool.slice(0, totalQuestions);
  }

  // Jika pool kurang dari totalQuestions, ulang siklus proporsional
  const result = [...pool];
  let i = 0;
  while (result.length < totalQuestions) {
    result.push(pool[i % pool.length]);
    i++;
  }
  return result;
};

/**
 * Menghitung Distribusi Tingkat Kesukaran (Mudah, Sedang, Sulit) Berdasarkan Input Persentase Pengguna di Langkah 2
 */
export const calculateDifficultyDistribution = (difficultyConfig, totalQuestions, bloomList = []) => {
  const mudahPct = Number(difficultyConfig?.mudah) ?? 30;
  const sedangPct = Number(difficultyConfig?.sedang) ?? 50;
  const sulitPct = Number(difficultyConfig?.sulit) ?? 20;
  const totalPct = mudahPct + sedangPct + sulitPct || 100;

  let countMudah = Math.round((mudahPct / totalPct) * totalQuestions);
  let countSedang = Math.round((sedangPct / totalPct) * totalQuestions);
  let countSulit = totalQuestions - (countMudah + countSedang);

  if (countSulit < 0) {
    countSedang = Math.max(0, countSedang + countSulit);
    countSulit = 0;
  }

  const difficulties = new Array(totalQuestions).fill(null);
  let remMudah = countMudah;
  let remSedang = countSedang;
  let remSulit = countSulit;

  // Prioritaskan korelasi pedagogis: C1/C2 -> Mudah, C5/C6 -> Sulit, C3/C4 -> Sedang
  for (let i = 0; i < totalQuestions; i++) {
    const b = bloomList[i] || 'C3';
    if ((b === 'C1' || b === 'C2') && remMudah > 0) {
      difficulties[i] = 'Mudah';
      remMudah--;
    } else if ((b === 'C5' || b === 'C6') && remSulit > 0) {
      difficulties[i] = 'Sulit';
      remSulit--;
    } else if ((b === 'C3' || b === 'C4') && remSedang > 0) {
      difficulties[i] = 'Sedang';
      remSedang--;
    }
  }

  // Isi sisa slot agar total jumlah Mudah, Sedang, Sulit persis sesuai kalkulasi persentase pengguna
  for (let i = 0; i < totalQuestions; i++) {
    if (!difficulties[i]) {
      if (remSedang > 0) {
        difficulties[i] = 'Sedang';
        remSedang--;
      } else if (remMudah > 0) {
        difficulties[i] = 'Mudah';
        remMudah--;
      } else if (remSulit > 0) {
        difficulties[i] = 'Sulit';
        remSulit--;
      } else {
        difficulties[i] = 'Sedang';
      }
    }
  }

  return difficulties;
};

/**
 * Pembuat Rumusan Indikator Soal Resmi Kurikulum Merdeka (KKO ABCD Terstandar)
 */
export const generatePedagogicalIndicator = ({
  topikCapaian,
  assignedBloom,
  assignedTP,
  assignedElement,
  hasVisual,
  isQuant
}) => {
  const stimulusPrefix = hasVisual
    ? `Disajikan diagram/ilustrasi data terukur tentang materi ${topikCapaian},`
    : `Disajikan studi kasus kontekstual terkait topik ${topikCapaian},`;

  const kkoMap = {
    C1: 'peserta didik dapat mengidentifikasi fakta kunci dan istilah mendasar',
    C2: 'peserta didik dapat menjelaskan serta menginterpretasikan konsep esensial',
    C3: isQuant
      ? 'peserta didik dapat menerapkan rumus terstandar untuk menghitung besaran kuantitatif yang tepat'
      : 'peserta didik dapat menerapkan prinsip materi dalam menyelesaikan persoalan nyata secara tepat',
    C4: 'peserta didik dapat menganalisis dan menelaah hubungan sebab-akibat keterkaitan fenomena',
    C5: 'peserta didik dapat mengevaluasi dan menilai efektivitas serta keabsahan solusi secara kritis',
    C6: 'peserta didik dapat merancang dan merumuskan rekomendasi strategi pemecahan masalah inovatif'
  };

  const kko = kkoMap[assignedBloom] || kkoMap.C3;
  const tpSnippet = assignedTP ? ` yang selaras dengan capaian tujuan pembelajaran: "${assignedTP}"` : '';
  const elementSnippet = assignedElement ? ` dengan mengintegrasikan nilai karakter "${assignedElement}".` : ' secara akurat dan tepat.';

  return `${stimulusPrefix} ${kko}${tpSnippet}${elementSnippet}`;
};

/**
 * Generator Soal Pedagogis Multilingual Otentik Sesuai Domain Mata Pelajaran
 * Menghilangkan bias jargon informatika pada mata pelajaran non-informatika
 */
const generateLocalizedQuestion = ({
  item,
  idx,
  itemLang,
  actualMapel,
  topikCapaian,
  assignedElement,
  assignedBloom,
  assignedTP,
  customInstruction = '',
  isFaseABCD,
  optionLetters,
  defaultCorrectKey,
  defaultCorrectKeys
}) => {
  const domain = detectQualitativeDomain(actualMapel, topikCapaian);
  let stimulus = '';
  let butirSoal = '';
  let options = [];
  let correctKey = defaultCorrectKey;
  let correctKeys = defaultCorrectKeys;
  let scoringGuide = '';
  let explanation = '';

  const noteCustom = customInstruction && customInstruction.trim() !== ''
    ? ` (Catatan Fokus: ${customInstruction.trim()})`
    : '';

  // -------------------------------------------------------------------------
  // 1. BAHASA INGGRIS (Full English)
  // -------------------------------------------------------------------------
  if (itemLang === 'en') {
    if (domain === 'bahasa') {
      stimulus = `In reading comprehension and literary analysis of ${actualMapel} regarding "${topikCapaian}", students evaluate authentic text structures, cohesion, and context${noteCustom}.`;
      if (item.type === 'pg_ad' || item.type === 'pg_ae') {
        butirSoal = `Based on a critical examination of the text regarding "${topikCapaian}", which of the following statements most effectively synthesizes the central idea while reflecting "${assignedElement}"?`;
        const distractors = [
          `Focusing purely on isolated literal words while ignoring rhetorical purpose and communicative context.`,
          `Drawing subjective assumptions that contradict empirical evidence presented in the text.`,
          `Overlooking transitional connectors and misinterpreting causal relationships within paragraphs.`,
          `Substituting authentic arguments with unsubstantiated emotional assertions.`,
          `Disregarding structural unity and paragraph coherence in the thematic conclusion.`
        ];
        options = optionLetters.map((letter, optIdx) => {
          if (letter === correctKey) {
            return {
              key: letter,
              text: `Critically interpret paragraph cohesion and evaluate contextual evidence in accordance with ${actualMapel} standards and the value of "${assignedElement}".`
            };
          }
          return { key: letter, text: distractors[optIdx % distractors.length] };
        });
        scoringGuide = `Score 1 for selecting the correct answer (${correctKey}), 0 otherwise.`;
        explanation = `Option ${correctKey} is correct because it exemplifies valid textual interpretation integrated with ${assignedElement}.`;
      } else if (item.type === 'benar_salah') {
        correctKey = idx % 2 === 0 ? 'True' : 'False';
        butirSoal = `Statement: "An effective analytical reading in ${actualMapel} requires solely memorizing terminology without examining paragraph coherence or reflecting ${assignedElement}." \n\nWhat is the truth value of this statement?`;
        options = [
          { key: 'True', text: 'The statement is TRUE' },
          { key: 'False', text: 'The statement is FALSE' }
        ];
        scoringGuide = `Score 1 for choosing "${correctKey}", 0 otherwise.`;
        explanation = `The statement is FALSE because deep textual mastery requires analyzing rhetorical structures and contextual ethics.`;
      } else if (item.type.includes('kompleks')) {
        butirSoal = `Examine the following propositions regarding effective analysis in ${topikCapaian}. Select ALL statements that are scientifically VALID and embody "${assignedElement}":`;
        const cDist = [
          `Sacrifices grammatical clarity to expedite writing.`,
          `Ignores textual context in favor of personal bias.`,
          `Disregards logical transitions between key paragraphs.`
        ];
        options = optionLetters.map((letter, optIdx) => {
          const isCorrect = correctKeys.includes(letter);
          return {
            key: letter,
            text: isCorrect
              ? `Statement ${letter}: Integrates accurate analytical reasoning and upholds ethical communication embodying "${assignedElement}".`
              : `Statement ${letter}: ${cDist[optIdx % cDist.length]}`
          };
        });
        scoringGuide = `Full score (2): Correctly selecting (${correctKeys.join(', ')}). Partial score (1): Selecting 1 correct answer without errors.`;
        explanation = `The correct keys are (${correctKeys.join(', ')}), demonstrating sound textual argumentation.`;
      } else {
        correctKey = 'Scoring Rubric';
        butirSoal = `Write a comprehensive analytical essay addressing key concepts in "${topikCapaian}"! Your response must elucidate: \n1. Core thematic analysis,\n2. Structural evidence grounded in ${actualMapel} principles,\n3. Concrete reflection demonstrating "${assignedElement}".`;
        scoringGuide = `• Score 4: Thorough analysis, clear logical flow, and exemplary character reflection.\n• Score 3: Good analysis with moderate reflection.\n• Score 2: Basic overview of 1-2 points.\n• Score 1: Incomplete.`;
        explanation = `Assesses cognitive level ${assignedBloom} through synthesis, textual critique, and ethical awareness.`;
      }

    } else if (domain === 'pancasila') {
      stimulus = `In the study of Civic Education and Constitutional Law regarding "${topikCapaian}", citizens are challenged to uphold democratic deliberation, fundamental rights, and national unity${noteCustom}.`;
      if (item.type === 'pg_ad' || item.type === 'pg_ae') {
        butirSoal = `In light of community challenges related to "${topikCapaian}", which of the following actions best embodies the civic virtue of "${assignedElement}"?`;
        const distractors = [
          `Imposing unilateral decisions that violate established constitutional procedures.`,
          `Prioritizing personal or group interests over communal consensus and equity.`,
          `Disregarding legal norms and institutional accountability under the pretext of urgency.`,
          `Marginalizing minority perspectives during deliberations and public decision-making.`,
          `Rejecting open dialogue and fostering sectarian sentiment within diverse communities.`
        ];
        options = optionLetters.map((letter, optIdx) => {
          if (letter === correctKey) {
            return {
              key: letter,
              text: `Promote inclusive deliberation, adhere to rule of law, and strengthen social solidarity in harmony with "${assignedElement}".`
            };
          }
          return { key: letter, text: distractors[optIdx % distractors.length] };
        });
        scoringGuide = `Score 1 for selecting (${correctKey}), 0 otherwise.`;
        explanation = `Option ${correctKey} is correct because constitutional democracy demands mutual respect and justice.`;
      } else if (item.type === 'benar_salah') {
        correctKey = idx % 2 === 0 ? 'True' : 'False';
        butirSoal = `Statement: "Implementing civic solutions in ${topikCapaian} justifies bypassing legal safeguards and moral accountability in order to achieve immediate results." \n\nWhat is the truth value of this statement?`;
        options = [
          { key: 'True', text: 'The statement is TRUE' },
          { key: 'False', text: 'The statement is FALSE' }
        ];
        scoringGuide = `Score 1 for choosing "${correctKey}", 0 otherwise.`;
        explanation = `The statement is FALSE because democratic processes strictly require adherence to constitutionality and justice.`;
      } else if (item.type.includes('kompleks')) {
        butirSoal = `Consider the following civic measures for resolving community problems in ${topikCapaian}. Select ALL statements that are CONSTITUTIONALLY VALID and champion "${assignedElement}":`;
        const cDist = [
          `Suppresses public transparency to avoid public scrutiny.`,
          `Enforces arbitrary policies without legal grounding.`,
          `Excludes civil society participation from policy assessment.`
        ];
        options = optionLetters.map((letter, optIdx) => {
          const isCorrect = correctKeys.includes(letter);
          return {
            key: letter,
            text: isCorrect
              ? `Statement ${letter}: Fosters consensual deliberation and equitable justice that reflect "${assignedElement}".`
              : `Statement ${letter}: ${cDist[optIdx % cDist.length]}`
          };
        });
        scoringGuide = `Full score (2): Accurately identifying (${correctKeys.join(', ')}). Score 0: Any incorrect choice.`;
        explanation = `The correct keys are (${correctKeys.join(', ')}), demonstrating adherence to constitutional governance.`;
      } else {
        correctKey = 'Scoring Rubric';
        butirSoal = `Elaborate a structured civic resolution plan for challenges in "${topikCapaian}"! Detail: \n1. Legal and constitutional basis,\n2. Step-by-step participatory deliberation,\n3. Concrete reflection of "${assignedElement}".`;
        scoringGuide = `• Score 4: Comprehensive legal analysis, democratic steps, and mature civic reflection.\n• Score 3: Adequate civic framework.\n• Score 2: Superficial response.\n• Score 1: Inadequate.`;
        explanation = `Measures cognitive level ${assignedBloom} via constitutional reasoning and social synthesis.`;
      }

    } else {
      // Default / Informatika Teori / Umum English
      stimulus = `In learning ${actualMapel} regarding "${topikCapaian}", students analyze structured contextual problem solving integrating "${assignedElement}"${noteCustom}.`;
      if (item.type === 'pg_ad' || item.type === 'pg_ae') {
        butirSoal = `Based on an analytical review of "${topikCapaian}", which of the following approaches best demonstrates the core competencies aligned with "${assignedElement}"?`;
        const distractors = [
          `Jumping into hasty conclusions without structured validation of underlying parameters.`,
          `Omitting critical analytical stages under the pretext of expediting decision-making.`,
          `Focusing purely on short-term ease without assessing sustainable system-wide impact.`,
          `Applying random heuristics without verifying constraints against official standards.`,
          `Delegating entire problem formulation without auditing validity or factual integrity.`
        ];
        options = optionLetters.map((letter, optIdx) => {
          if (letter === correctKey) {
            return {
              key: letter,
              text: `Systematically analyze core parameters and formulate structured solutions that honor ${actualMapel} principles and the character pillar of "${assignedElement}".`
            };
          }
          return { key: letter, text: distractors[optIdx % distractors.length] };
        });
        scoringGuide = `Score 1 for selecting (${correctKey}), 0 otherwise.`;
        explanation = `Option ${correctKey} correctly demonstrates disciplined analytical reasoning and ethical integrity.`;
      } else if (item.type === 'benar_salah') {
        correctKey = idx % 2 === 0 ? 'True' : 'False';
        butirSoal = `Statement: "Practical mastery of ${topikCapaian} requires solely mechanical execution, rendering ethical responsibility and ${assignedElement} irrelevant." \n\nWhat is the truth value of this statement?`;
        options = [
          { key: 'True', text: 'The statement is TRUE' },
          { key: 'False', text: 'The statement is FALSE' }
        ];
        scoringGuide = `Score 1 for choosing "${correctKey}", 0 otherwise.`;
        explanation = `The statement is FALSE because authentic mastery always demands moral responsibility and reflective integrity.`;
      } else if (item.type.includes('kompleks')) {
        butirSoal = `Review the strategic conclusions regarding ${topikCapaian}. Select ALL statements that are scientifically VALID and uphold "${assignedElement}":`;
        const cDist = [
          `Disregards quality validation to cut turnaround time.`,
          `Conceals methodology from key stakeholders.`,
          `Bypasses verification of core operational requirements.`
        ];
        options = optionLetters.map((letter, optIdx) => {
          const isCorrect = correctKeys.includes(letter);
          return {
            key: letter,
            text: isCorrect
              ? `Statement ${letter}: Implements sound ${actualMapel} methodologies while championing "${assignedElement}" for shared welfare.`
              : `Statement ${letter}: ${cDist[optIdx % cDist.length]}`
          };
        });
        scoringGuide = `Full score (2): (${correctKeys.join(', ')}). Partial score (1): 1 correct without false.`;
        explanation = `The correct choices are (${correctKeys.join(', ')}).`;
      } else {
        correctKey = 'Scoring Rubric';
        butirSoal = `Formulate a comprehensive strategic plan to resolve challenges in "${topikCapaian}"! Detail: \n1. Root-cause analysis,\n2. Systematic resolution sequence,\n3. Concrete integration of "${assignedElement}".`;
        scoringGuide = `• Score 4: Deep analysis, rigorous methodology, and insightful character integration.\n• Score 3: Satisfactory analysis.\n• Score 2: Partial treatment.\n• Score 1: Incomplete.`;
        explanation = `Evaluates cognitive level ${assignedBloom} via high-order structured problem solving.`;
      }
    }

  // -------------------------------------------------------------------------
  // 2. BAHASA ARAB (اللغة العربية الفصحى)
  // -------------------------------------------------------------------------
  } else if (itemLang === 'ar') {
    stimulus = `في سياق دراسة مادة ${actualMapel} حول موضوع "${topikCapaian}"، يُدعى المتعلمون إلى دراسة حالة سياقية واقعية ترتبط بترسيخ قيمة "${assignedElement}"${noteCustom}.`;
    if (item.type === 'pg_ad' || item.type === 'pg_ae') {
      butirSoal = `بناءً على الفحص النقدي لموضوع "${topikCapaian}"، أي من العبارات التالية تمثل التطبيق الأكثر دقة للمفاهيم المنسجمة مع قيمة "${assignedElement}"؟`;
      const distractors = [
        `تجاهل تفكيك معطيات المسألة والاعتماد على الاستنتاج العشوائي دون التحقق من البيانات.`,
        `إلغاء مراحل التحليل المنهجي بحجة تسريع اتخاذ القرار الميداني.`,
        `التركيز على الحلول السطحية العاجلة دون مراعاة الكفاءة العلمية والاستدامة طويلة الأمد.`,
        `تطبيق إجراءات غير مختبرة دون التحقق من مطابقتها للمعايير الأكاديمية والمهنية.`,
        `تفويض بناء الحلول بالكامل لأطراف خارجية دون التحقق من صحة الأدلة والمنطق العلمي.`
      ];
      options = optionLetters.map((letter, optIdx) => {
        if (letter === correctKey) {
          return {
            key: letter,
            text: `تحليل معطيات المشكلة بشكل منهجي واتخاذ قرارات حلول متوافقة مع مبادئ ${assignedElement} وقواعد ${actualMapel}.`
          };
        }
        return { key: letter, text: distractors[optIdx % distractors.length] };
      });
      scoringGuide = `درجة واحدة (1) عند الإجابة الصحيحة (${correctKey})، وصفر (0) عند الإجابة الخاطئة.`;
      explanation = `الخيار ${correctKey} هو الصحيح لأنه يعكس فهماً شاملاً لقواعد ${topikCapaian} المترابطة مع قيمة ${assignedElement}.`;
    } else if (item.type === 'benar_salah') {
      correctKey = idx % 2 === 0 ? 'صحيح' : 'خطأ';
      butirSoal = `العبارة: "إن تطبيق مفاهيم ${topikCapaian} في الحياة العملية لا يتطلب مراعاة الضوابط الأخلاقية أو الاهتمام بـ ${assignedElement}، بل يكتفي بالتركيز على الكفاءة الشكلية وحدها." \n\nما هو الحكم الصحيح على هذه العبارة؟`;
      options = [
        { key: 'صحيح', text: 'العبارة صحيحة (True)' },
        { key: 'خطأ', text: 'العبارة خاطئة (False)' }
      ];
      scoringGuide = `درجة واحدة عند اختيار "${correctKey}"، وصفر عند العكس.`;
      explanation = `العبارة خاطئة، إذ يتعين في كل ممارسة لـ ${actualMapel} الالتزام بالمسؤولية الأخلاقية وترسيخ ${assignedElement}.`;
    } else if (item.type.includes('kompleks')) {
      butirSoal = `تأمل البدائل والاستنتاجات التالية المتعلقة بمعالجة مشكلات ${topikCapaian}. حدد جميع العبارات الصحيحة علمياً والمعبرة عن ركيزة "${assignedElement}":`;
      const complexDistractors = [
        `إلغاء بروتوكولات ضبط الجودة لتقليل وقت الإنجاز الميداني.`,
        `تجاوز مرحلة التحقق من منطق البيانات لتقليل نفقات المتابعة.`,
        `حجب شفافية المعلومات الأكاديمية عن الأطراف المعنية.`
      ];
      options = optionLetters.map((letter, optIdx) => {
        const isCorrect = correctKeys.includes(letter);
        return {
          key: letter,
          text: isCorrect
            ? `العبارة ${letter}: دمج إجراءات ${actualMapel} المنهجية مع الالتزام بركيزة ${assignedElement} لخدمة الصالح العام.`
            : `العبارة ${letter}: ${complexDistractors[optIdx % complexDistractors.length]}`
        };
      });
      scoringGuide = `درجتان (2) عند تحديد كافة الخيارات الصحيحة (${correctKeys.join(', ')}). درجة واحدة (1) عند تحديد خيار صحيح واحد دون أخطاء.`;
      explanation = `الخيارات الصحيحة هي (${correctKeys.join(', ')}). تجمع هذه العبارات بين الدقة العلمية والنزاهة القيمية.`;
    } else {
      correctKey = 'دليل التصحيح';
      butirSoal = `اشرح بشكل شامل ومنهجي استراتيجيتك المقترحة لحل المشكلات في موضوع ${topikCapaian}! يجب أن يتضمن تحليلك: \n1. تشخيص الأسباب الجذرية للمشكلة،\n2. خطوات المعالجة المتسلسلة وفق قواعد ${actualMapel}،\n3. الشواهد العملية لتجسيد خُلق "${assignedElement}" في حلك المقترح.`;
      scoringGuide = `• 4 درجات (ممتاز): تغطية المحاور الثلاثة بتحليل منطقي عميق وربط قيمي وثيق.\n• 3 درجات (جيد): تغطية المحاور مع ربط قيمي عام.\n• درجتان (مقبول): تغطية محور أو محورين فقط.\n• درجة واحدة (ضعيف): إجابة غير مكتملة.`;
      explanation = `يُقاس في هذا السؤال المستوى المعرفي ${assignedBloom} من خلال التفكير التحليلي والتوليد الإبداعي للحلول.`;
    }

  // -------------------------------------------------------------------------
  // 3. BAHASA PRANCIS (Langue Française)
  // -------------------------------------------------------------------------
  } else if (itemLang === 'fr') {
    stimulus = `Dans le cadre de l'apprentissage de ${actualMapel} sur le thème « ${topikCapaian} », les apprenants explorent des situations contextualisées liées à l'intégration de la valeur « ${assignedElement} »${noteCustom}.`;
    if (item.type === 'pg_ad' || item.type === 'pg_ae') {
      butirSoal = `D'après l'analyse méthodique de « ${topikCapaian} », quelle affirmation illustre le mieux l'application rigoureuse intégrant la valeur « ${assignedElement} » ?`;
      const distractors = [
        `Ignorer la décomposition analytique du problème et privilégier des intuitions non vérifiées.`,
        `Supprimer les étapes d'évaluation conceptuelle pour accélérer la prise de décision sur le terrain.`,
        `Se concentrer uniquement sur l'immédiateté sans tenir compte de la viabilité à long terme.`,
        `Appliquer des démarches aléatoires sans tests préalables sur les données et contraintes.`,
        `Déléguer l'ensemble de la logique sans validation interne des critères de rigueur.`
      ];
      options = optionLetters.map((letter, optIdx) => {
        if (letter === correctKey) {
          return {
            key: letter,
            text: `Analyser méthodiquement les paramètres et formuler des solutions conformes aux principes de ${assignedElement} et de ${actualMapel}.`
          };
        }
        return { key: letter, text: distractors[optIdx % distractors.length] };
      });
      scoringGuide = `1 point pour la bonne réponse (${correctKey}), 0 point en cas d'erreur ou d'omission.`;
      explanation = `L'option ${correctKey} est exacte car elle allie la maîtrise méthodique de ${topikCapaian} avec l'éthique de ${assignedElement}.`;
    } else if (item.type === 'benar_salah') {
      correctKey = idx % 2 === 0 ? 'Vrai' : 'Faux';
      butirSoal = `Affirmation : « L'application concrète des concepts de ${topikCapaian} vise exclusivement l'efficacité formelle, rendant superflue toute considération éthique relative à ${assignedElement}. » \n\nQuelle est la valeur de vérité de cette affirmation ?`;
      options = [
        { key: 'Vrai', text: 'L\'affirmation est VRAIE' },
        { key: 'Faux', text: 'L\'affirmation est FAUSSE' }
      ];
      scoringGuide = `1 point pour le choix « ${correctKey} », 0 point sinon.`;
      explanation = `L'affirmation est FAUSSE car toute démarche de ${actualMapel} requiert une responsabilité sociétale et morale liée à ${assignedElement}.`;
    } else if (item.type.includes('kompleks')) {
      butirSoal = `Examinez les propositions suivantes relatives à la résolution de problématiques dans ${topikCapaian}. Cochez TOUTES les affirmations valides intégrant le pilier « ${assignedElement} » :`;
      const complexDistractors = [
        `Supprimer le contrôle qualité pour réduire les délais d'exécution.`,
        `Négliger la validation logique pour réduire les coûts opérationnels.`,
        `Restreindre la transparence des critères aux usagers légitimes.`
      ];
      options = optionLetters.map((letter, optIdx) => {
        const isCorrect = correctKeys.includes(letter);
        return {
          key: letter,
          text: isCorrect
            ? `Proposition ${letter} : Intégrer des protocoles de ${actualMapel} adaptatifs en valorisant ${assignedElement} au service du bien commun.`
            : `Proposition ${letter} : ${complexDistractors[optIdx % complexDistractors.length]}`
        };
      });
      scoringGuide = `Plein score (2 pts) : Choix exact de (${correctKeys.join(', ')}). Score partiel (1 pt) : 1 réponse correcte sans erreur.`;
      explanation = `Les réponses correctes sont (${correctKeys.join(', ')}). Elles concilient rigueur scientifique et intégrité citoyenne.`;
    } else {
      correctKey = 'Grille d\'évaluation';
      butirSoal = `Élaborez une stratégie globale et argumentée pour résoudre les défis liés à ${topikCapaian} ! Votre développement devra préciser au minimum : \n1. Le diagnostic des causes fondamentales,\n2. La démarche méthodique par étapes selon les règles de ${actualMapel},\n3. Les manifestations concrètes des valeurs de « ${assignedElement} » dans la solution proposée.`;
      scoringGuide = `• 4 pts (Excellent) : 3 dimensions traitées avec rigueur analytique et intégration éthique remarquable.\n• 3 pts (Bien) : 3 dimensions abordées de manière satisfaisante.\n• 2 pts (Moyen) : 1 à 2 dimensions partiellement traitées.\n• 1 pt (Insuffisant) : Réponse incomplète.`;
      explanation = `Évalue la mobilisation du niveau taxonomique ${assignedBloom} par la synthèse réflexive et l'argumentation critique.`;
    }

  // -------------------------------------------------------------------------
  // 4. BAHASA PALEMBANG (Baso Pelembang - Kearifan Lokal Sumatera Selatan)
  // -------------------------------------------------------------------------
  } else if (itemLang === 'palembang') {
    stimulus = `Kalu kito nyingok pelajarnyo ${actualMapel} bab "${topikCapaian}", kito pacak belajor dari masalah sehari-hari di kito Palembang yang ado sangkut pautnyo samo nerapke budi pekerti "${assignedElement}"${noteCustom}.`;
    if (item.type === 'pg_ad' || item.type === 'pg_ae') {
      butirSoal = `Berdasarke kajian materi "${topikCapaian}", mano pernyataan di bawah ini yang paling pas buat nunjukke penerapan konsep yang nerapke nilai "${assignedElement}"?`;
      const distractors = [
        `Langsung bae nyimpulke secara instan tanpa dicek lagi datanyo bener apo idak.`,
        `Ngurangi tahapan mikir teliti karno diraso bikin lamo ngambek keputusan di lapangan.`,
        `Cuma mikirke gampangnyo bae sekarang tanpa mikirke dampak jangka lamo untuk wong banyak.`,
        `Make cara acak-acakan bae tanpa diuji apo la pas samo aturan keilmuan yang bener.`,
        `Nyerahke galo-galo rumusan gawean ke wong laen tanpa diperikso lagi kebenaran logikanyo.`
      ];
      options = optionLetters.map((letter, optIdx) => {
        if (letter === correctKey) {
          return {
            key: letter,
            text: `Menganalisis masalah caro sistematis laju ngambek keputusan solutif yang pas samo prinsip ${assignedElement} di ${actualMapel}.`
          };
        }
        return { key: letter, text: distractors[optIdx % distractors.length] };
      });
      scoringGuide = `Skor 1 kalu jawab bener (${correctKey}), skor 0 kalu sala atau idak diisi.`;
      explanation = `Opsi ${correctKey} bener karno nunjukke pemahaman yang mantep bab konsep ${topikCapaian} yang tehubung elok samo budi pekerti ${assignedElement}.`;
    } else if (item.type === 'benar_salah') {
      correctKey = idx % 2 === 0 ? 'Bener' : 'Salah';
      butirSoal = `Pernyataan: "Penerapan materi ${topikCapaian} di dunio nyato idak usah mikirke etika apo lagi kepedulian samo ${assignedElement}, cukup mentingke gawenyo lancar bae." \n\nCakmano kebenaran pernyataan ini?`;
      options = [
        { key: 'Bener', text: 'Pernyataan di pucuk BENER' },
        { key: 'Salah', text: 'Pernyataan di pucuk SALAH' }
      ];
      scoringGuide = `Skor 1 kalu milih "${correctKey}", skor 0 kalu milih sebaleqnyo.`;
      explanation = `Pernyataan bernilai SALAH karno setiap gawenyo ${actualMapel} wajib ngedepanke etika, tenggang raso samo tanggong jawab ${assignedElement}.`;
    } else if (item.type.includes('kompleks')) {
      butirSoal = `Cubo jingok beberapa pilihan samo kesimpulan soal nyelesai-ke masalah ${topikCapaian} di bawah ini! Centang SEMUO pernyataan yang BENER menurut aturan keilmuan dan nilai '${assignedElement}':`;
      const complexDistractors = [
        `Ngabaike aturan kendali mutu karno diraso bikin lambat urusan di lapangan bae.`,
        `Ngilangi tahapan verifikasi data biar biayanyo pacak dipangkas semurah-murahnyo.`,
        `Nutupi keterbukaan info dari kawan-kawan yang berkepentingan.`
      ];
      options = optionLetters.map((letter, optIdx) => {
        const isCorrect = correctKeys.includes(letter);
        return {
          key: letter,
          text: isCorrect
            ? `Pernyataan ${letter}: Nerapke aturan ${actualMapel} yang luwes serasi samo pilar ${assignedElement} demi kemaslahatan kito besamo.`
            : `Pernyataan ${letter}: ${complexDistractors[optIdx % complexDistractors.length]}`
        };
      });
      scoringGuide = `Skor Penuh (2): Pas galo milih (${correctKeys.join(', ')}). Skor Sebagian (1): Milih 1 opsi bener tanpa milih yang sala. Skor 0: Milih opsi sala.`;
      explanation = `Pilihan yang bener yoitu (${correctKeys.join(', ')}). Pernyataan ini maduke ketepatan ilmu samo integritas budi pekerti.`;
    } else {
      correctKey = 'Pedoman Nilai (Rubrik)';
      butirSoal = `Jelaske caro komprehensif cakmano rancangan strategi kito buat mecahke masalah di materi ${topikCapaian}! Di jawaban adek-adek, jelaske paling idak: \n1. Analisis akar masalahnyo apo,\n2. Langkah-langkah nyelesaikannyo betahap make aturan ${actualMapel},\n3. Bukti nyato wujud budi pekerti "${assignedElement}" di solusi yang diajuke.`;
      scoringGuide = `• Skor 4 (Mantep Nian): Nguraike ketigo aspek nganalisis tajam, logis, samo refleksi karakter ${assignedElement} pas nian.\n• Skor 3 (Bagus): Nguraike ketigo aspek tapi integrasi karakter masi umum.\n• Skor 2 (Sedang): Cuma nguraike 1-2 aspek bae.\n• Skor 1 (Kurang): Jawaban masih cindo-cindoan bae belum nyentuh inti materi.`;
      explanation = `Peserta didik diarepke pacak nunjukke tingkat pikir kognitif ${assignedBloom} liwat penalaran yang rapi samo ide inovatif.`;
    }

  // -------------------------------------------------------------------------
  // 5. BAHASA INDONESIA (Default Resmi) - Terpetakan Spesifik per Domain Mapel
  // -------------------------------------------------------------------------
  } else {
    if (domain === 'bahasa') {
      stimulus = `Dalam telaah teks dan keterampilan berbahasa pada mata pelajaran ${actualMapel} topik "${topikCapaian}", peserta didik diajak mengkaji teks kontekstual secara kritis terkait integrasi nilai "${assignedElement}"${noteCustom}.`;
      if (item.type === 'pg_ad' || item.type === 'pg_ae') {
        butirSoal = `Berdasarkan telaah mendalam terhadap struktur teks materi "${topikCapaian}", manakah pernyataan berikut yang paling tepat dalam merumuskan gagasan utama secara kritis serta mencerminkan nilai "${assignedElement}"?`;
        const distractorPool = [
          `Menarik kesimpulan subjektif yang bertentangan dengan bukti tekstual dan kaidah kebahasaan baku.`,
          `Hanya menafsirkan kata-kata secara harfiah tanpa mempertimbangkan konteks tuturan dan tujuan komunikatif teks.`,
          `Mengabaikan fungsi konjungsi antarkalimat sehingga merusak kepaduan (kohesi) paragraf.`,
          `Mencampuradukkan fakta dengan opini pribadi yang belum terverifikasi keabsahannya.`,
          `Mengganti argumen logis dengan klaim emosional yang mengaburkan kejelasan pesan.`
        ];
        options = optionLetters.map((letter, optIdx) => {
          if (letter === correctKey) {
            return {
              key: letter,
              text: `Menganalisis keterpaduan paragraf secara kritis dan menyimpulkan amanat teks yang selaras dengan kaidah ${actualMapel} serta nilai "${assignedElement}".`
            };
          }
          return { key: letter, text: distractorPool[optIdx % distractorPool.length] };
        });
        scoringGuide = `Skor 1 jika memilih (${correctKey}), skor 0 jika salah atau kosong.`;
        explanation = `Opsi ${correctKey} tepat karena memadukan analisis struktur kebahasaan yang padu dengan refleksi nilai karakter ${assignedElement}.`;
      } else if (item.type === 'benar_salah') {
        correctKey = idx % 2 === 0 ? 'Benar' : 'Salah';
        butirSoal = `Pernyataan: "Dalam menganalisis dan menyusun teks ${topikCapaian}, peserta didik hanya perlu memperhatikan keindahan kalimat semata tanpa perlu menguji kebenaran fakta maupun mengintegrasikan nilai ${assignedElement}." \n\nBagaimanakah kebenaran dari pernyataan tersebut?`;
        options = [
          { key: 'Benar', text: 'Pernyataan di atas BENAR' },
          { key: 'Salah', text: 'Pernyataan di atas SALAH' }
        ];
        scoringGuide = `Skor 1 jika menjawab "${correctKey}", skor 0 jika sebaliknya.`;
        explanation = `Pernyataan bernilai SALAH karena penulisan dan analisis teks yang bermutu wajib mengedepankan kebenaran data, etika literasi, dan tanggung jawab karakter ${assignedElement}.`;
      } else if (item.type.includes('kompleks')) {
        butirSoal = `Perhatikan butir-butir telaah kritis terhadap materi ${topikCapaian} berikut! Berikan tanda centang pada SEMUA pernyataan yang bernilai BENAR sesuai kaidah kebahasaan dan cerminan pilar "${assignedElement}":`;
        const complexDistractorPool = [
          `Mengabaikan tanda baca dan ejaan demi menghemat ruang penulisan teks.`,
          `Memilih diksi provokatif tanpa memperhitungkan kesantunan berbahasa.`,
          `Menghilangkan data pendukung agar argumen teks terlihat lebih ringkas namun rapuh.`
        ];
        options = optionLetters.map((letter, optIdx) => {
          const isCorrect = correctKeys.includes(letter);
          return {
            key: letter,
            text: isCorrect
              ? `Pernyataan ${letter}: Menerapkan kaidah kebahasaan yang santun, logis, dan menjunjung tinggi kejujuran intelektual sesuai pilar "${assignedElement}".`
              : `Pernyataan ${letter}: ${complexDistractorPool[optIdx % complexDistractorPool.length]}`
          };
        });
        scoringGuide = `Skor Penuh (2): Memilih tepat kombinasi (${correctKeys.join(', ')}). Skor Sebagian (1): Memilih 1 opsi benar tanpa memilih opsi salah. Skor 0: Salah.`;
        explanation = `Kombinasi benar adalah (${correctKeys.join(', ')}), mencerminkan integritas literasi bahasa.`;
      } else {
        correctKey = 'Rubrik Analisis Kebahasaan';
        butirSoal = `Buatlah analisis kritis komprehensif mengenai materi pokok "${topikCapaian}"! Dalam uraian Anda, jelaskan: \n1. Gagasan pokok dan struktur teks yang relevan,\n2. Kaidah kebahasaan yang digunakan untuk membangun argumen yang meyakinkan,\n3. Bukti konkret penerapan nilai karakter "${assignedElement}" dalam komunikasi Anda.`;
        scoringGuide = `• Skor 4: Analisis struktur sangat tajam, kaidah kebahasaan tepat, dan refleksi nilai karakter ${assignedElement} sangat mendalam.\n• Skor 3: Struktur dan kebahasaan baik dengan integrasi karakter yang jelas.\n• Skor 2: Analisis bersifat umum pada 1-2 aspek.\n• Skor 1: Uraian sangat terbatas.`;
        explanation = `Mengukur penguasaan level kognitif ${assignedBloom} melalui kemampuan sintesis teks, argumentasi logis, dan etika komunikasi.`;
      }

    } else if (domain === 'pancasila') {
      stimulus = `Dalam konteks kehidupan berbangsa dan bernegara pada materi ${actualMapel} topik "${topikCapaian}", warga negara dituntut untuk menerapkan musyawarah, pemenuhan hak-kewajiban, dan ketaatan hukum demi tegaknya keadilan${noteCustom}.`;
      if (item.type === 'pg_ad' || item.type === 'pg_ae') {
        butirSoal = `Menghadapi tantangan sosial kemasyarakatan terkait materi "${topikCapaian}", tindakan manakah yang paling mencerminkan penerapan prinsip konstitusional dan nilai luhur "${assignedElement}"?`;
        const distractorPool = [
          `Mengambil tindakan sepihak yang melanggar prosedur hukum demi mencapai tujuan kelompok secara instan.`,
          `Memaksakan kehendak mayoritas dan mengabaikan hak-hak asasi kelompok minoritas dalam forum musyawarah.`,
          `Mengedepankan sentimen primordial dan mengesampingkan kepentingan persatuan bangsa yang lebih luas.`,
          `Menolak musyawarah mufakat dan memilih penyelesaian konflik melalui konfrontasi terbuka.`,
          `Menyebarkan informasi yang belum diverifikasi yang berpotensi memecah belah kerukunan antarwarga.`
        ];
        options = optionLetters.map((letter, optIdx) => {
          if (letter === correctKey) {
            return {
              key: letter,
              text: `Mengutamakan musyawarah untuk mufakat, menaati norma konstitusi, dan memelihara kerukunan yang selaras dengan nilai "${assignedElement}".`
            };
          }
          return { key: letter, text: distractorPool[optIdx % distractorPool.length] };
        });
        scoringGuide = `Skor 1 jika memilih (${correctKey}), skor 0 jika salah.`;
        explanation = `Opsi ${correctKey} tepat karena pengamalan nilai Pancasila menuntut penghormatan terhadap konsensus bersama, supremasi hukum, dan toleransi.`;
      } else if (item.type === 'benar_salah') {
        correctKey = idx % 2 === 0 ? 'Benar' : 'Salah';
        butirSoal = `Pernyataan: "Penyelesaian masalah sosial dalam materi ${topikCapaian} dibenarkan menempuh cara-cara yang melanggar hukum dan mengabaikan ${assignedElement} asalkan dapat menghasilkan kesepakatan secara cepat." \n\nBagaimanakah kebenaran dari pernyataan tersebut?`;
        options = [
          { key: 'Benar', text: 'Pernyataan di atas BENAR' },
          { key: 'Salah', text: 'Pernyataan di atas SALAH' }
        ];
        scoringGuide = `Skor 1 jika memilih "${correctKey}", skor 0 jika sebaliknya.`;
        explanation = `Pernyataan bernilai SALAH karena setiap tindakan kemasyarakatan wajib menjunjung tinggi koridor hukum yang sah dan nilai-nilai moral.`;
      } else if (item.type.includes('kompleks')) {
        butirSoal = `Perhatikan alternatif kebijakan dan sikap warga negara dalam materi ${topikCapaian} berikut! Berikan tanda centang pada SEMUA tindakan yang bernilai BENAR sesuai konstitusi dan pilar "${assignedElement}":`;
        const complexDistractorPool = [
          `Membatasi hak suara warga yang berbeda pandangan dalam pengambilan keputusan publik.`,
          `Menolak pelaporan pertanggungjawaban publik guna menghindari perdebatan masyarakat.`,
          `Menjalankan program pembangunan tanpa melibatkan aspirasi masyarakat setempat.`
        ];
        options = optionLetters.map((letter, optIdx) => {
          const isCorrect = correctKeys.includes(letter);
          return {
            key: letter,
            text: isCorrect
              ? `Pernyataan ${letter}: Menjunjung tinggi keadilan sosial, transparansi publik, dan penghormatan kebinekaan sesuai pilar "${assignedElement}".`
              : `Pernyataan ${letter}: ${complexDistractorPool[optIdx % complexDistractorPool.length]}`
          };
        });
        scoringGuide = `Skor Penuh (2): Memilih tepat (${correctKeys.join(', ')}). Skor Sebagian (1): 1 benar tanpa opsi salah.`;
        explanation = `Kombinasi benar adalah (${correctKeys.join(', ')}).`;
      } else {
        correctKey = 'Rubrik Penilaian Konstitusional';
        butirSoal = `Susunlah rancangan solusi partisipatif untuk memecahkan persoalan pada materi "${topikCapaian}"! Dalam jawaban Anda, uraikan: \n1. Dasar hukum dan nilai Pancasila yang menjadi landasan,\n2. Alur musyawarah dan keterlibatan seluruh pemangku kepentingan,\n3. Wujud nyata implementasi karakter "${assignedElement}" dalam solusi Anda.`;
        scoringGuide = `• Skor 4: Analisis hukum konstitusi tajam, alur musyawarah demokratis, dan integrasi karakter ${assignedElement} kontekstual.\n• Skor 3: Kerangka konstitusi dan musyawarah baik.\n• Skor 2: Penjelasan normatif.\n• Skor 1: Terbatas.`;
        explanation = `Mengukur level kognitif ${assignedBloom} melalui penalaran hukum, etika kewarganegaraan, dan sintesis sosial.`;
      }

    } else if (domain === 'sosial' || domain === 'agama' || domain === 'seni' || domain === 'pjok') {
      stimulus = `Dalam konteks pembelajaran ${actualMapel} pada topik "${topikCapaian}", peserta didik diajak untuk mengamati fenomena kontekstual sehari-hari yang berkaitan dengan integrasi nilai "${assignedElement}"${noteCustom}.`;
      if (item.type === 'pg_ad' || item.type === 'pg_ae') {
        butirSoal = `Berdasarkan telaah mendalam terhadap materi "${topikCapaian}", manakah pernyataan berikut yang paling tepat dalam menunjukkan penerapan konsep yang mengintegrasikan nilai "${assignedElement}"?`;
        const distractorPool = [
          `Mengabaikan analisis akar permasalahan dan langsung mengambil kesimpulan intuitif tanpa pertimbangan data.`,
          `Mengurangi tahapan refleksi kritis karena dianggap memperlambat waktu pengambilan keputusan.`,
          `Hanya memfokuskan tindakan pada aspek kenyamanan sesaat tanpa mempertimbangkan dampak jangka panjang bagi komunitas.`,
          `Menerapkan langkah acak tanpa pengujian kesesuaian terhadap prinsip keilmuan dan etika.`,
          `Menyerahkan seluruh perumusan pertimbangan kepada pihak lain tanpa melakukan validasi mandiri.`
        ];
        options = optionLetters.map((letter, optIdx) => {
          if (letter === correctKey) {
            return {
              key: letter,
              text: `Menganalisis parameter persoalan secara sistematis dan mengambil keputusan solutif yang selaras dengan prinsip ${assignedElement} serta kaidah ${actualMapel}.`
            };
          }
          return { key: letter, text: distractorPool[optIdx % distractorPool.length] };
        });
        scoringGuide = `Skor 1 jika menjawab benar (${correctKey}), skor 0 jika salah atau kosong.`;
        explanation = `Opsi ${correctKey} tepat karena menunjukkan penguasaan materi ${topikCapaian} yang dihubungkan secara harmonis dengan dimensi ${assignedElement}.`;
      } else if (item.type === 'benar_salah') {
        correctKey = idx % 2 === 0 ? 'Benar' : 'Salah';
        butirSoal = `Pernyataan: "Penerapan konsep materi ${topikCapaian} dalam kehidupan sehari-hari tidak memerlukan pertimbangan etika maupun kepedulian terhadap ${assignedElement}, melainkan cukup menitikberatkan pada hasil pragmatis semata." \n\nBagaimanakah kebenaran dari pernyataan tersebut?`;
        options = [
          { key: 'Benar', text: 'Pernyataan di atas BENAR' },
          { key: 'Salah', text: 'Pernyataan di atas SALAH' }
        ];
        scoringGuide = `Skor 1 jika memilih "${correctKey}", skor 0 jika memilih sebaliknya.`;
        explanation = `Pernyataan bernilai SALAH karena setiap implementasi ${actualMapel} wajib mengedepankan tanggung jawab moral dan keterhubungan dengan ${assignedElement}.`;
      } else if (item.type.includes('kompleks')) {
        butirSoal = `Perhatikan beberapa alternatif tindakan terkait materi ${topikCapaian} berikut! Berikan tanda centang pada SEMUA pernyataan yang bernilai BENAR sesuai kaidah ilmiah dan elemen ${assignedElement}:`;
        const complexDistractorPool = [
          `Mengabaikan prosedur kendali mutu karena dianggap memperlambat proses penyelesaian.`,
          `Menghilangkan tahapan verifikasi data lapangan demi penghematan sumber daya.`,
          `Membatasi keterbukaan informasi kepada pihak-pihak yang berkepentingan.`
        ];
        options = optionLetters.map((letter, optIdx) => {
          const isCorrect = correctKeys.includes(letter);
          return {
            key: letter,
            text: isCorrect
              ? `Pernyataan ${letter}: Mengintegrasikan prosedur ${actualMapel} yang adaptif dengan menjunjung tinggi pilar ${assignedElement} demi kemaslahatan bersama.`
              : `Pernyataan ${letter}: ${complexDistractorPool[optIdx % complexDistractorPool.length]}`
          };
        });
        scoringGuide = `Skor Penuh (2): Memilih tepat kombinasi (${correctKeys.join(', ')}). Skor Sebagian (1): 1 benar tanpa salah.`;
        explanation = `Pilihan yang benar adalah (${correctKeys.join(', ')}).`;
      } else {
        correctKey = 'Rubrik Penilaian';
        butirSoal = `Jelaskan secara komprehensif rancangan strategi pemecahan masalah pada materi "${topikCapaian}"! Dalam jawaban Anda, uraikan: \n1. Analisis akar penyebab masalah,\n2. Langkah-langkah penyelesaian bertahap berbasis kaidah ${actualMapel},\n3. Bukti nyata perwujudan karakter "${assignedElement}" dalam solusi Anda.`;
        scoringGuide = `• Skor 4: Analisis tajam, logis, sistematis, dan refleksi nilai karakter ${assignedElement} sangat kontekstual.\n• Skor 3: Uraian baik dengan refleksi karakter yang jelas.\n• Skor 2: Uraian umum.\n• Skor 1: Terbatas.`;
        explanation = `Mengukur level kognitif ${assignedBloom} melalui penalaran analitis terstruktur dan sintesis ide solutif.`;
      }

    } else {
      // Domain Informatika Teori / Berpikir Komputasional / Default
      stimulus = `Dalam konteks pembelajaran ${actualMapel} pada topik "${topikCapaian}", peserta didik diajak untuk mengamati fenomena pemecahan masalah dengan 4 fondasi berpikir komputasional (dekomposisi, pengenalan pola, abstraksi, dan perancangan algoritma) yang terintegrasi dengan nilai "${assignedElement}"${noteCustom}.`;
      if (item.type === 'pg_ad' || item.type === 'pg_ae') {
        butirSoal = `Berdasarkan telaah mendalam terhadap materi "${topikCapaian}", manakah pernyataan berikut yang paling tepat dalam menunjukkan penerapan solusi algoritmik yang mengintegrasikan nilai "${assignedElement}"?`;
        const distractorPool = [
          `Mengabaikan dekomposisi masalah dan langsung mengambil kesimpulan intuitif tanpa verifikasi data terstruktur.`,
          `Mengurangi tahapan analisis abstraksi karena dianggap memperlambat waktu pengambilan keputusan.`,
          `Hanya memfokuskan solusi pada aspek kemudahan sesaat tanpa mempertimbangkan efisiensi algoritma jangka panjang.`,
          `Menerapkan algoritma acak tanpa pengujian kasus uji (test case) terhadap batasan kompleksitas masalah.`,
          `Menyerahkan seluruh perumusan solusi kepada pihak ketiga tanpa melakukan validasi kebenaran logika instruksi.`
        ];
        options = optionLetters.map((letter, optIdx) => {
          if (letter === correctKey) {
            return {
              key: letter,
              text: `Menganalisis parameter masalah secara sistematis dan mengambil keputusan solutif yang selaras dengan prinsip ${assignedElement} serta kaidah berpikir komputasional ${actualMapel}.`
            };
          }
          return { key: letter, text: distractorPool[optIdx % distractorPool.length] };
        });
        scoringGuide = `Skor 1 jika menjawab benar (${correctKey}), skor 0 jika salah atau kosong.`;
        explanation = `Opsi ${correctKey} adalah jawaban tepat karena menunjukkan pemahaman menyeluruh terhadap kaidah konsep ${topikCapaian} yang dihubungkan secara harmonis dengan dimensi/elemen ${assignedElement}.`;
      } else if (item.type === 'benar_salah') {
        correctKey = idx % 2 === 0 ? 'Benar' : 'Salah';
        butirSoal = `Pernyataan: "Penerapan konsep ${topikCapaian} dalam kehidupan nyata tidak memerlukan pertimbangan etika maupun kepedulian terhadap ${assignedElement}, melainkan cukup menitikberatkan pada efisiensi teknis semata." \n\nBagaimanakah kebenaran dari pernyataan tersebut?`;
        options = [
          { key: 'Benar', text: 'Pernyataan di atas BENAR' },
          { key: 'Salah', text: 'Pernyataan di atas SALAH' }
        ];
        scoringGuide = `Skor 1 jika memilih pilihan "${correctKey}", skor 0 jika memilih sebaliknya.`;
        explanation = `Pernyataan bernilai SALAH karena setiap implementasi ${actualMapel} wajib mengedepankan etika keluhuran budi, tanggung jawab sosial, dan keterhubungan dengan ${assignedElement}.`;
      } else if (item.type.includes('kompleks')) {
        butirSoal = `Perhatikan beberapa alternatif tindakan dan kesimpulan terkait pemecahan masalah ${topikCapaian} berikut! Berikan tanda centang pada SEMUA pernyataan yang bernilai BENAR sesuai kaidah ilmiah dan elemen ${assignedElement}:`;
        const complexDistractorPool = [
          `Mengabaikan prosedur kendali mutu karena dianggap memperlambat proses penyelesaian persoalan lapangan.`,
          `Menghilangkan tahapan verifikasi logika data agar biaya komputasi dapat dipangkas seminimal mungkin.`,
          `Membatasi akses transparansi informasi algoritma kepada pengguna sistem yang berkepentingan.`
        ];
        options = optionLetters.map((letter, optIdx) => {
          const isCorrect = correctKeys.includes(letter);
          return {
            key: letter,
            text: isCorrect
              ? `Pernyataan ${letter}: Mengintegrasikan prosedur ${actualMapel} yang adaptif dengan menjunjung tinggi pilar ${assignedElement} demi kemaslahatan bersama.`
              : `Pernyataan ${letter}: ${complexDistractorPool[optIdx % complexDistractorPool.length]}`
          };
        });
        scoringGuide = `Skor Penuh (2): Memilih tepat kombinasi (${correctKeys.join(', ')}). Skor Sebagian (1): Memilih 1 opsi benar tanpa memilih opsi salah. Skor 0: Memilih opsi salah.`;
        explanation = `Pilihan yang benar adalah (${correctKeys.join(', ')}). Pernyataan-pernyataan ini memadukan ketepatan algoritma/konsep keilmuan dengan integritas karakter profil peserta didik.`;
      } else {
        correctKey = 'Rubrik Kriteria Penilaian';
        butirSoal = `Jelaskan secara komprehensif bagaimana rancangan strategi Anda dalam memecahkan permasalahan pada materi "${topikCapaian}"! Dalam jawaban Anda, uraikan sekurang-kurangnya: \n1. Analisis akar penyebab masalah melalui dekomposisi,\n2. Langkah-langkah penyelesaian bertahap berbasis kaidah berpikir komputasional ${actualMapel},\n3. Bukti nyata perwujudan karakter "${assignedElement}" dalam solusi yang Anda ajukan.`;
        scoringGuide = `• Skor 4 (Sangat Baik): Menguraikan ketiga aspek dengan analisis tajam, logis, sistematis, dan refleksi nilai karakter ${assignedElement} sangat kontekstual.\n• Skor 3 (Baik): Menguraikan ketiga aspek namun penjelasan integrasi karakter masih bersifat normatif.\n• Skor 2 (Cukup): Hanya menguraikan 1-2 aspek secara umum.\n• Skor 1 (Kurang): Jawaban sangat terbatas dan belum menyentuh substansi materi pokok.`;
        explanation = `Peserta didik diharapkan mampu mendemonstrasikan level kognitif ${assignedBloom} melalui penalaran analitis terstruktur dan sintesis ide inovatif.`;
      }
    }
  }

  return {
    stimulus,
    butirSoal,
    options,
    correctKey,
    correctKeys,
    scoringGuide,
    explanation,
    language: itemLang
  };
};

/**
 * High-Pedagogy Built-in Engine
 * Menghasilkan soal lengkap dengan stimulus kontekstual, indikator, kisi-kisi, kartu soal, dan elemen kurikulum
 * SETIA DAN PATUH 100% PADA INPUTAN PENGGUNA DI LANGKAH 1 & LANGKAH 2
 */
export const generateQuestionsLocally = (config) => {
  const {
    fase,
    kelas,
    kurikulum,
    kurikulumCustom,
    mataPelajaran,
    mataPelajaranCustom,
    topikCapaian,
    capaianPembelajaran,
    tujuanPembelajaran = [],
    selectedElements = [],
    questionCounts = { pg: 5, pg_kompleks: 3, benar_salah: 0, esai: 2 },
    withMedia = true,
    difficulty = { mudah: 30, sedang: 50, sulit: 20 },
    bloom = { c1: 1, c2: 2, c3: 3, c4: 2, c5: 1, c6: 1 },
    customInstruction = '',
    languageConfig = { mode: 'id', bilingualCounts: { id: 5, en: 5 } }
  } = config;

  const actualKurikulum = kurikulum === 'Lainnya' ? (kurikulumCustom || 'Kurikulum Khusus') : kurikulum;
  const actualMapel = mataPelajaran === 'Lainnya' ? (mataPelajaranCustom || 'Umum') : mataPelajaran;

  const isFaseABCD = ['A', 'B', 'C', 'D'].includes(fase);
  const optionLetters = isFaseABCD ? ['A', 'B', 'C', 'D'] : ['A', 'B', 'C', 'D', 'E'];

  // Kumpulkan list bentuk soal yang diminta
  const listItems = [];
  let questionNumber = 1;

  // 1. Pilihan Ganda Biasa
  const countPg = Number(questionCounts.pg) || 0;
  for (let i = 0; i < countPg; i++) {
    listItems.push({
      type: isFaseABCD ? 'pg_ad' : 'pg_ae',
      typeName: isFaseABCD ? 'Pilihan Ganda (A-D)' : 'Pilihan Ganda (A-E)',
      no: questionNumber++
    });
  }

  // 2. Benar - Salah (jika Fase A-D)
  if (isFaseABCD) {
    const countBs = Number(questionCounts.benar_salah) || 0;
    for (let i = 0; i < countBs; i++) {
      listItems.push({
        type: 'benar_salah',
        typeName: 'Benar-Salah',
        no: questionNumber++
      });
    }
  }

  // 3. Pilihan Ganda Kompleks
  const countPgk = Number(questionCounts.pg_kompleks) || 0;
  for (let i = 0; i < countPgk; i++) {
    listItems.push({
      type: isFaseABCD ? 'pg_kompleks_ad' : 'pg_kompleks_ae',
      typeName: isFaseABCD ? 'Pilihan Ganda Komplek (A-D)' : 'Pilihan Ganda Komplek (A-E)',
      no: questionNumber++
    });
  }

  // 4. Esai
  const countEsai = Number(questionCounts.esai) || 0;
  for (let i = 0; i < countEsai; i++) {
    listItems.push({
      type: 'esai',
      typeName: 'Esai / Uraian Terbuka',
      no: questionNumber++
    });
  }

  const totalQuestions = listItems.length;

  // Distribusi Elemen Karakter / KBC / Profil Lulusan
  const elementPool = selectedElements.length > 0
    ? selectedElements
    : (kurikulum.includes('Cinta')
        ? ['Cinta Ilmu', 'Cinta Lingkungan', 'Cinta Tanah Air', 'Cinta Diri dan Sesama Manusia', 'Cinta Allah Swt. dan Rasul-Nya']
        : ['Penalaran Kritis', 'Kreativitas', 'Kolaborasi', 'Kemandirian', 'Kewargaan']);

  // Distribusi Level Kognitif & Tingkat Kesukaran Sesuai Input Pengguna Persis
  const bloomDistribution = calculateBloomDistribution(bloom, totalQuestions);
  const diffDistribution = calculateDifficultyDistribution(difficulty, totalQuestions, bloomDistribution);

  const bloomLabels = {
    C1: 'Mengingat (LOTS)',
    C2: 'Memahami (LOTS)',
    C3: 'Menerapkan (LOTS)',
    C4: 'Menganalisis (HOTS)',
    C5: 'Mengevaluasi (HOTS)',
    C6: 'Mencipta (HOTS)'
  };

  // Daftar Tujuan Pembelajaran (TP) dari Input Langkah 1
  const tpList = (Array.isArray(tujuanPembelajaran) && tujuanPembelajaran.length > 0)
    ? tujuanPembelajaran
    : [
        `Menerapkan konsep pokok ${topikCapaian} dalam memecahkan masalah kontekstual secara terstruktur.`,
        `Menganalisis dan mengevaluasi fenomena terkait ${topikCapaian} dengan penalaran kritis.`,
        `Merancang solusi inovatif berdasar kaidah keilmuan ${actualMapel} pada topik ${topikCapaian}.`
      ];

  // Rumusan Capaian Pembelajaran (CP) dari Input Langkah 1
  const finalCapaianText = capaianPembelajaran && capaianPembelajaran.trim() !== ''
    ? capaianPembelajaran
    : `Pada akhir Fase ${fase}, peserta didik menguasai kompetensi esensial materi ${topikCapaian} pada mata pelajaran ${actualMapel} secara mendalam dan berakhlak mulia.`;

  // Pengaturan Bahasa Soal
  const langMode = languageConfig.mode || 'id';
  const bilingualCountId = languageConfig.bilingualCounts?.id ?? Math.ceil(listItems.length / 2);

  // Deteksi Domain Eksak vs Kualitatif
  const subjectCategory = detectSubjectCategory(actualMapel, topikCapaian);
  const isQuant = isQuantitativeSubject(subjectCategory, actualMapel, topikCapaian);

  // Generate Questions Data
  const generatedQuestions = listItems.map((item, idx) => {
    const assignedBloom = bloomDistribution[idx] || 'C3';
    const assignedElement = elementPool[idx % elementPool.length];
    const diffLevel = diffDistribution[idx] || 'Sedang';
    const assignedTP = tpList[idx % tpList.length];

    const hasVisual = withMedia && (idx % 2 === 0 || item.type.includes('kompleks'));
    const visualType = idx % 3 === 0 ? 'flowchart' : (idx % 3 === 1 ? 'chart' : 'ecosystem');

    // Tentukan bahasa untuk butir soal ini
    let itemLang = 'id';
    if (langMode === 'en') {
      itemLang = 'en';
    } else if (langMode === 'ar') {
      itemLang = 'ar';
    } else if (langMode === 'fr') {
      itemLang = 'fr';
    } else if (langMode === 'palembang') {
      itemLang = 'palembang';
    } else if (langMode === 'bilingual') {
      itemLang = idx < bilingualCountId ? 'id' : 'en';
    } else {
      itemLang = 'id';
    }

    const defaultCorrectKey = optionLetters[idx % optionLetters.length];
    const defaultCorrectKeys = isFaseABCD ? ['A', 'C'] : ['A', 'C', 'E'];

    let localized;
    let finalSvgVisual = null;
    let itemHasVisual = hasVisual;

    if (isQuant) {
      // Pembuatan Soal Kuantitatif Alami (Matematika, Fisika, Kimia, Informatika Eksak, Ekonomi Hitung, Biologi Mendel, Geografi Kontur)
      localized = generateExactScienceQuestion({
        subjectCategory,
        actualMapel,
        topikCapaian,
        item,
        idx,
        fase,
        kelas,
        itemLang,
        assignedElement,
        assignedBloom,
        isFaseABCD,
        optionLetters,
        defaultCorrectKey
      });

      itemHasVisual = withMedia;
      if (itemHasVisual && localized.svgType) {
        finalSvgVisual = generateSvgIllustration(localized.svgType, `Diagram No. ${item.no} - ${actualMapel}`);
      }
    } else {
      // Pembuatan Soal Kualitatif Sesuai Domain Mapel (Bahasa, Pancasila, Sosial, Agama, Seni, PJOK, Informatika Teori)
      localized = generateLocalizedQuestion({
        item,
        idx,
        itemLang,
        actualMapel,
        topikCapaian,
        assignedElement,
        assignedBloom,
        assignedTP,
        customInstruction,
        isFaseABCD,
        optionLetters,
        defaultCorrectKey,
        defaultCorrectKeys
      });

      if (itemHasVisual) {
        finalSvgVisual = generateSvgIllustration(visualType, `Diagram No. ${item.no} - ${topikCapaian}`);
      }
    }

    const indikatorText = generatePedagogicalIndicator({
      topikCapaian,
      assignedBloom,
      assignedTP,
      assignedElement,
      hasVisual: itemHasVisual,
      isQuant
    });

    const sumberText = isQuant
      ? `Buku Guru & Siswa ${actualMapel} ${kelas} Kemendikdasmen, Kumpulan Rumus & Soal Asesmen Terstandar`
      : `Buku Panduan Guru & Siswa ${actualMapel} ${kelas} Kemendikdasmen, Modul Ajar Resmi Kurikulum Merdeka`;

    return {
      no: item.no,
      type: item.type,
      typeName: item.typeName,
      language: itemLang,
      languageLabel: itemLang === 'en' ? 'English' : (itemLang === 'ar' ? 'العربية' : (itemLang === 'fr' ? 'Français' : (itemLang === 'palembang' ? 'Baso Pelembang' : 'Indonesia'))),
      stimulus: localized.stimulus,
      hasVisual: itemHasVisual,
      svgVisual: finalSvgVisual,
      questionText: localized.butirSoal,
      options: localized.options,
      correctKey: localized.correctKey,
      correctKeys: item.type.includes('kompleks') ? localized.correctKeys : null,
      materi: topikCapaian,
      capaianPembelajaran: finalCapaianText,
      tujuanPembelajaran: assignedTP,
      indikator: indikatorText,
      levelKognitif: assignedBloom,
      levelLabel: bloomLabels[assignedBloom] || assignedBloom,
      difficulty: diffLevel,
      elemenIntegrasi: assignedElement,
      sumber: sumberText,
      scoringGuide: localized.scoringGuide,
      explanation: localized.explanation
    };
  });

  return {
    meta: {
      generatedAt: new Date().toISOString(),
      generatorEngine: 'EduAsesmen Hybrid Pedagogical Engine',
      totalQuestions: generatedQuestions.length,
      config
    },
    questions: generatedQuestions
  };
};

/**
 * Pemanggilan Gemini API jika user memasukkan API Key
 * Menjamin 100% data CP, TP, ATP, Bloom, Kesukaran, dan Bahasa terbaca utuh
 */
export const generateQuestionsViaGemini = async (config, apiKey) => {
  if (!apiKey || apiKey.trim() === '') {
    return generateQuestionsLocally(config);
  }

  const {
    fase,
    kelas,
    kurikulum,
    kurikulumCustom,
    mataPelajaran,
    mataPelajaranCustom,
    topikCapaian,
    capaianPembelajaran,
    tujuanPembelajaran = [],
    alurTujuanPembelajaran = [],
    selectedElements = [],
    questionCounts = { pg: 5, pg_kompleks: 3, benar_salah: 0, esai: 2 },
    withMedia = true,
    difficulty = { mudah: 30, sedang: 50, sulit: 20 },
    bloom = { c1: 1, c2: 2, c3: 3, c4: 2, c5: 1, c6: 1 },
    customInstruction = '',
    languageConfig = { mode: 'id', bilingualCounts: { id: 5, en: 5 } }
  } = config;

  const actualKurikulum = kurikulum === 'Lainnya' ? (kurikulumCustom || 'Kurikulum Khusus') : kurikulum;
  const actualMapel = mataPelajaran === 'Lainnya' ? (mataPelajaranCustom || 'Umum') : mataPelajaran;

  const isFaseABCD = ['A', 'B', 'C', 'D'].includes(fase);
  const totalQuestions = 
    (Number(questionCounts.pg) || 0) +
    (Number(questionCounts.pg_kompleks) || 0) +
    (isFaseABCD ? (Number(questionCounts.benar_salah) || 0) : 0) +
    (Number(questionCounts.esai) || 0);

  const bilingualCountId = languageConfig.bilingualCounts?.id ?? Math.ceil(totalQuestions / 2);

  const tpList = (Array.isArray(tujuanPembelajaran) && tujuanPembelajaran.length > 0)
    ? tujuanPembelajaran
    : [
        `Menerapkan konsep pokok ${topikCapaian} dalam memecahkan masalah kontekstual secara terstruktur.`,
        `Menganalisis dan mengevaluasi fenomena terkait ${topikCapaian} dengan penalaran kritis.`
      ];

  const bloomDistribution = calculateBloomDistribution(bloom, totalQuestions);
  const diffDistribution = calculateDifficultyDistribution(difficulty, totalQuestions, bloomDistribution);

  let languageInstruction = '';
  if (languageConfig.mode === 'en') {
    languageInstruction = `ATURAN BAHASA SOAL (SANGAT PENTING): Seluruh naskah soal, narasi stimulus, opsi jawaban, pembahasan ilmiah, dan pedoman penskoran WAJIB 100% ditulis dalam BAHASA INGGRIS (Full English Language). Cantumkan field "language": "en" pada setiap butir soal.`;
  } else if (languageConfig.mode === 'ar') {
    languageInstruction = `ATURAN BAHASA SOAL (SANGAT PENTING): Seluruh naskah soal, narasi stimulus, opsi jawaban, pembahasan ilmiah, dan pedoman penskoran WAJIB 100% ditulis dalam BAHASA ARAB FUSHA (اللغة العربية الفصحى). Cantumkan field "language": "ar" pada setiap butir soal.`;
  } else if (languageConfig.mode === 'fr') {
    languageInstruction = `ATURAN BAHASA SOAL (SANGAT PENTING): Seluruh naskah soal, narasi stimulus, opsi jawaban, pembahasan ilmiah, dan pedoman penskoran WAJIB 100% ditulis dalam BAHASA PRANCIS (Langue Française). Cantumkan field "language": "fr" pada setiap butir soal.`;
  } else if (languageConfig.mode === 'palembang') {
    languageInstruction = `ATURAN BAHASA SOAL (SANGAT PENTING): Seluruh naskah soal dan narasi stimulus studi kasus WAJIB ditulis dalam BAHASA PALEMBANG (Baso Pelembang / Kearifan Lokal Melayu Palembang Sumatera Selatan) yang santun, komunikatif, dan mendidik. Cantumkan field "language": "palembang" pada setiap butir soal.`;
  } else if (languageConfig.mode === 'bilingual') {
    languageInstruction = `ATURAN BAHASA BILINGUAL (SANGAT PENTING): Paket ujian ini BILINGUAL (Dua Bahasa):
  * Butir soal nomor 1 sampai ${bilingualCountId} WAJIB dibuat dalam BAHASA INDONESIA baku. Cantumkan field "language": "id".
  * Butir soal nomor ${bilingualCountId + 1} sampai ${totalQuestions} WAJIB dibuat dalam BAHASA INGGRIS (Full English). Cantumkan field "language": "en".`;
  } else {
    languageInstruction = `ATURAN BAHASA SOAL: Seluruh naskah soal disajikan dalam BAHASA INDONESIA baku dan edukatif. Cantumkan field "language": "id" pada setiap butir soal.`;
  }

  const subjectCategory = detectSubjectCategory(actualMapel, topikCapaian);
  const isQuant = isQuantitativeSubject(subjectCategory, actualMapel, topikCapaian);

  let exactScienceInstruction = '';
  if (isQuant) {
    exactScienceInstruction = `
========================================================================
PERATURAN WAJIB MATA PELAJARAN KUANTITATIF & EKSAK (${actualMapel.toUpperCase()} - FASE ${fase} / ${kelas}):
1. DILARANG KERAS MEMBUAT SOAL TEORI HAFALAN ATAU DEFINISI KATA-KATA!
2. SELURUH SOAL WAJIB BERUPA SOAL PERHITUNGAN MATEMATIS / SAINS DENGAN ANGKA KUANTITATIF NYATA (NUMERICAL PROBLEMS) SEBAGAIMANA ASESMEN UJIAN RESMI / TKA / SNBT / UTBK / CAMBRIDGE YANG SESUNGGUHNYA.
3. RUMUS & TINGKAT KESULITAN WAJIB SESUAI DENGAN FASE ${fase} DAN ${kelas}.
4. OPSI PILIHAN JAWABAN (A, B, C, D, E) WAJIB BERUPA ANGKA HASIL PERHITUNGAN BESERTA SATUAN RESMI ATAU NILAI PERSAMAAN.
5. FIELD "explanation" WAJIB MENYAJIKAN TAHAPAN PERHITUNGAN MATEMATIS LENGKAP & RUNUT (Diketahui, Ditanya, Rumus, Langkah Substitusi Angka, Hasil Akhir).
========================================================================
`;
  }

  const prompt = `Anda adalah Ahli Perencanaan Pembelajaran Kurikulum Merdeka dan Guru Mata Pelajaran Berpengalaman Nasional Kemendikdasmen.
Tugas Anda: Buat paket soal ujian terstruktur lengkap beserta Kisi-Kisi dan Kartu Soal yang BENAR-BENAR BERDASARKAN DAN SETIA PADA SELURUH DATA INPUTAN PENGGUNA BERIKUT:

DATA IDENTITAS & KURIKULUM (LANGKAH 1):
- Nama Guru Pengampu: ${config.namaGuru || 'Guru Pengampu'}
- Satuan Pendidikan: ${config.namaInstitusi || 'SMAN Sumatera Selatan'}
- Jenjang & Fase: ${fase} (${kelas})
- Kurikulum: ${actualKurikulum}
- Mata Pelajaran: ${actualMapel}
- Topik / Lingkup Materi: ${topikCapaian}
- Capaian Pembelajaran (CP) Resmi: "${capaianPembelajaran || '-'}"
- Tujuan Pembelajaran (TP) yang Wajib Dipetakan pada butir soal:
${tpList.map((tp, i) => `  * TP ${i + 1}: ${tp}`).join('\n')}
- Alur Tujuan Pembelajaran (ATP): ${(alurTujuanPembelajaran || []).join(' -> ') || '-'}
- Dimensi / Elemen Karakter yang Diintegrasikan: ${selectedElements.join(', ') || 'Penalaran Kritis'}

KONFIGURASI TEKNIS & SPESIFIKASI SOAL (LANGKAH 2):
- Total Butir Soal: ${totalQuestions}
- Komposisi Bentuk Soal:
  * Pilihan Ganda: ${questionCounts.pg} butir (${isFaseABCD ? 'Opsi A-D' : 'Opsi A-E'})
  * Pilihan Ganda Kompleks: ${questionCounts.pg_kompleks} butir
  * Benar-Salah: ${isFaseABCD ? (questionCounts.benar_salah || 0) : 0} butir
  * Esai: ${questionCounts.esai} butir
- Target Distribusi Level Kognitif Bloom (C1-C6):
  * C1 (Mengingat): ${bloom.c1 || 0} butir
  * C2 (Memahami): ${bloom.c2 || 0} butir
  * C3 (Menerapkan): ${bloom.c3 || 0} butir
  * C4 (Menganalisis): ${bloom.c4 || 0} butir
  * C5 (Mengevaluasi): ${bloom.c5 || 0} butir
  * C6 (Mencipta): ${bloom.c6 || 0} butir
  (Urutan level kognitif per nomor soal: ${bloomDistribution.join(', ')})
- Proporsi Kesukaran: Mudah ${difficulty.mudah}%, Sedang ${difficulty.sedang}%, Sulit ${difficulty.sulit}%
  (Urutan kesukaran per nomor soal: ${diffDistribution.join(', ')})
- Sertakan Ilustrasi / Diagram Visual: ${withMedia ? 'YA (cantumkan deskripsi visual dan hasVisual: true)' : 'TIDAK'}
- ${languageInstruction}
${exactScienceInstruction}
- Instruksi Khusus Pengguna: ${customInstruction || 'Tidak ada'}

PETUNJUK PEDAGOGIS KHUSUS:
1. Setiap butir soal WAJIB memetakan salah satu Tujuan Pembelajaran (TP) dari daftar di atas ke dalam field "tujuanPembelajaran".
2. Rumusan "capaianPembelajaran" pada setiap butir soal WAJIB menggunakan CP resmi yang telah diinput di atas.
3. Level kognitif ("levelKognitif") dan kesukaran ("difficulty") tiap butir soal WAJIB mengikuti urutan yang telah ditentukan di atas.
4. Indikator soal ("indikator") wajib dirumuskan dengan format ABCD resmi Kemendikdasmen menggunakan Kata Kerja Operasional (KKO) yang selaras dengan level kognitif Bloom butir tersebut.
5. ${customInstruction ? `Wajib memasukkan instruksi khusus pengguna: "${customInstruction}" ke dalam konteks stimulus atau soal.` : ''}

Hasilkan respon HANYA dalam format JSON valid tanpa tanda markdown tambahan di luar blok JSON. Struktur JSON:
{
  "questions": [
    {
      "no": 1,
      "type": "pg_ad" | "pg_ae" | "pg_kompleks_ad" | "pg_kompleks_ae" | "benar_salah" | "esai",
      "typeName": "Nama bentuk soal",
      "language": "id" | "en" | "ar" | "fr" | "palembang",
      "stimulus": "Narasi kontekstual atau studi kasus awal",
      "hasVisual": true / false,
      "questionText": "Teks pertanyaan lengkap",
      "options": [
        {"key": "A", "text": "..."},
        {"key": "B", "text": "..."}
      ],
      "correctKey": "A",
      "correctKeys": ["A", "C"],
      "materi": "${topikCapaian}",
      "capaianPembelajaran": "${capaianPembelajaran || ''}",
      "tujuanPembelajaran": "Tujuan Pembelajaran terpilih dari daftar TP di atas",
      "indikator": "Rumusan indikator soal berbasis KKO",
      "levelKognitif": "C1" | "C2" | "C3" | "C4" | "C5" | "C6",
      "levelLabel": "Taraf kognitif",
      "difficulty": "Mudah" | "Sedang" | "Sulit",
      "elemenIntegrasi": "Elemen karakter yang dihubungkan",
      "sumber": "Referensi acuan materi",
      "scoringGuide": "Pedoman penskoran detail",
      "explanation": "Pembahasan ilmiah dan langkah perhitungan matematis bertahap"
    }
  ]
}`;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey.trim()}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.7,
            responseMimeType: 'application/json'
          }
        })
      }
    );

    if (!response.ok) {
      const errData = await response.json();
      console.warn('Gemini API Error, fallback to local engine:', errData);
      return generateQuestionsLocally(config);
    }

    const data = await response.json();
    const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!rawText) {
      return generateQuestionsLocally(config);
    }

    const parsed = JSON.parse(rawText);
    if (!parsed.questions || !Array.isArray(parsed.questions)) {
      return generateQuestionsLocally(config);
    }

    const languageLabels = {
      id: 'Indonesia',
      en: 'English',
      ar: 'العربية',
      fr: 'Français',
      palembang: 'Baso Pelembang'
    };

    const questionsWithSvgs = parsed.questions.map((q, idx) => {
      const hasVisual = q.hasVisual || (withMedia && (isQuant || idx % 2 === 0));
      let visualType = 'flowchart';
      if (subjectCategory === 'fisika') {
        const types = ['physics_fbd', 'physics_circuit', 'physics_motion_graph'];
        visualType = types[idx % types.length];
      } else if (subjectCategory === 'matematika') {
        const isSD = ['A', 'B', 'C'].includes(fase) || kelas.toLowerCase().includes('sd');
        const types = isSD
          ? ['math_geometry_triangle', 'math_geometry_circle', 'math_sd_rectangle']
          : ['math_geometry_triangle', 'math_function_graph', 'math_geometry_circle'];
        visualType = types[idx % types.length];
      } else if (subjectCategory === 'kimia') {
        const types = ['chemistry_titration', 'chemistry_energy_diagram'];
        visualType = types[idx % types.length];
      } else if (subjectCategory === 'informatika') {
        visualType = 'cs_subnet_binary';
      } else if (subjectCategory === 'ekonomi') {
        visualType = 'econ_market_curve';
      } else if (subjectCategory === 'biologi') {
        visualType = 'bio_mendel_punnett';
      } else if (subjectCategory === 'geografi') {
        visualType = 'geo_contour_map';
      } else {
        visualType = idx % 3 === 0 ? 'flowchart' : (idx % 3 === 1 ? 'chart' : 'ecosystem');
      }

      const resolvedLang = q.language || (
        languageConfig.mode === 'bilingual'
          ? (idx < bilingualCountId ? 'id' : 'en')
          : (languageConfig.mode || 'id')
      );

      const assignedTP = q.tujuanPembelajaran || tpList[idx % tpList.length];
      const assignedCP = q.capaianPembelajaran || capaianPembelajaran || `Capaian Pembelajaran ${actualMapel} ${kelas}`;

      return {
        ...q,
        language: resolvedLang,
        languageLabel: languageLabels[resolvedLang] || 'Indonesia',
        capaianPembelajaran: assignedCP,
        tujuanPembelajaran: assignedTP,
        materi: q.materi || topikCapaian,
        hasVisual,
        svgVisual: hasVisual ? generateSvgIllustration(visualType, `Diagram No. ${q.no} - ${actualMapel}`) : null
      };
    });

    return {
      meta: {
        generatedAt: new Date().toISOString(),
        generatorEngine: 'Google Gemini 1.5 Flash (Live AI)',
        totalQuestions: questionsWithSvgs.length,
        config
      },
      questions: questionsWithSvgs
    };
  } catch (err) {
    console.error('Error invoking Gemini, falling back to local engine:', err);
    return generateQuestionsLocally(config);
  }
};
