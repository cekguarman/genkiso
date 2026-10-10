// AI Assessment Generator Service
// Mendukung Google Gemini API (Direct) & Built-in High-Fidelity Pedagogical Engine
import { 
  detectSubjectCategory, 
  generateExactScienceSvg, 
  generateExactScienceQuestion 
} from './exactScienceGenerator';

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
 * Helper Generator Soal Multilingual Terstruktur
 * Mendukung Bahasa Indonesia, Bahasa Inggris (Full English), Bahasa Arab (اللغة العربية),
 * Bahasa Prancis (Français), dan Bahasa Palembang (Baso Pelembang - Kearifan Lokal Sumsel)
 */
const generateLocalizedQuestion = ({
  item,
  idx,
  itemLang,
  actualMapel,
  topikCapaian,
  assignedElement,
  assignedBloom,
  isFaseABCD,
  optionLetters,
  defaultCorrectKey,
  defaultCorrectKeys
}) => {
  let stimulus = '';
  let butirSoal = '';
  let options = [];
  let correctKey = defaultCorrectKey;
  let correctKeys = defaultCorrectKeys;
  let scoringGuide = '';
  let explanation = '';

  if (itemLang === 'en') {
    stimulus = `In the context of ${actualMapel} learning regarding "${topikCapaian}", students are guided to observe contextual everyday phenomena related to the integration of "${assignedElement}".`;
    if (item.type === 'pg_ad' || item.type === 'pg_ae') {
      butirSoal = `Based on a critical examination of ${topikCapaian} and the conceptual diagram above, which of the following statements most accurately reflects the application of principles that integrate "${assignedElement}"?`;
      const distractors = [
        `Disregarding problem decomposition and jumping into intuitive conclusions without structured data validation.`,
        `Omitting abstraction stages under the pretext of expediting real-time decision-making.`,
        `Focusing exclusively on short-term convenience without considering long-term algorithmic scalability.`,
        `Applying random procedures without rigorous test-case verification against complexity constraints.`,
        `Outsourcing the entire solution formulation without verifying logic integrity.`
      ];
      options = optionLetters.map((letter, optIdx) => {
        if (letter === correctKey) {
          return {
            key: letter,
            text: `Systematically analyze problem parameters and formulate structured solutions aligned with ${assignedElement} and core ${actualMapel} standards.`
          };
        }
        return {
          key: letter,
          text: distractors[optIdx % distractors.length]
        };
      });
      scoringGuide = `Score 1 for selecting the correct answer (${correctKey}), score 0 for incorrect or blank answers.`;
      explanation = `Option ${correctKey} is correct because it demonstrates comprehensive mastery of ${topikCapaian} harmoniously coupled with ${assignedElement}.`;
    } else if (item.type === 'benar_salah') {
      correctKey = idx % 2 === 0 ? 'True' : 'False';
      butirSoal = `Statement: "The practical implementation of ${topikCapaian} requires solely technical efficiency, rendering ethical considerations and commitment to ${assignedElement} unnecessary." \n\nWhat is the truth value of this statement?`;
      options = [
        { key: 'True', text: 'The statement is TRUE' },
        { key: 'False', text: 'The statement is FALSE' }
      ];
      scoringGuide = `Score 1 for choosing "${correctKey}", score 0 otherwise.`;
      explanation = `The statement is FALSE because sound implementation of ${actualMapel} always demands moral responsibility, social ethics, and adherence to ${assignedElement}.`;
    } else if (item.type.includes('kompleks')) {
      butirSoal = `Consider the following strategic conclusions regarding problem-solving in ${topikCapaian}. Select ALL statements that are scientifically VALID and uphold the principle of "${assignedElement}":`;
      const complexDistractors = [
        `Disregards quality control protocols to hasten field resolution.`,
        `Skips data verification to cut computational overhead.`,
        `Conceals algorithmic transparency from key stakeholders.`
      ];
      options = optionLetters.map((letter, optIdx) => {
        const isCorrect = correctKeys.includes(letter);
        return {
          key: letter,
          text: isCorrect
            ? `Statement ${letter}: Integrates adaptive ${actualMapel} methodologies while championing ${assignedElement} for collective advancement.`
            : `Statement ${letter}: ${complexDistractors[optIdx % complexDistractors.length]}`
        };
      });
      scoringGuide = `Full score (2): Accurately identifying (${correctKeys.join(', ')}). Partial score (1): Selecting 1 correct option without false selections. Score 0: Selecting incorrect option.`;
      explanation = `The correct combination is (${correctKeys.join(', ')}). These statements unite algorithmic exactness with ethical integrity.`;
    } else {
      correctKey = 'Scoring Rubric';
      butirSoal = `Provide a comprehensive strategic plan to resolve computational challenges within ${topikCapaian}! In your analysis, elucidate at least: \n1. Root cause diagnosis,\n2. Systematic multi-phase methodology grounded in ${actualMapel} principles,\n3. Concrete evidence manifesting the character value of "${assignedElement}" within your proposed solution.`;
      scoringGuide = `• Score 4 (Excellent): All 3 facets analyzed with sharp logic and exemplary character integration.\n• Score 3 (Good): All 3 facets addressed with moderate character depth.\n• Score 2 (Fair): Only 1-2 facets answered generally.\n• Score 1 (Needs Improvement): Incomplete and lacks core subject matter.`;
      explanation = `Students are assessed on their ability to exhibit cognitive level ${assignedBloom} through structured analytical reasoning and innovative synthesis.`;
    }
  } else if (itemLang === 'ar') {
    stimulus = `في سياق تدريس مادة ${actualMapel} حول موضوع "${topikCapaian}"، يُدعى المتعلمون إلى دراسة حالة سياقية واقعية ترتبط بترسيخ قيمة "${assignedElement}".`;
    if (item.type === 'pg_ad' || item.type === 'pg_ae') {
      butirSoal = `بناءً على الفحص النقدي لموضوع ${topikCapaian} والمخطط التوضيحي أعلاه، أي من العبارات التالية تمثل التطبيق الأكثر دقة للمفاهيم المنسجمة مع قيمة "${assignedElement}"؟`;
      const distractors = [
        `تجاهل تفكيك المشكلة والاعتماد على الاستنتاج العشوائي دون التحقق من البيانات.`,
        `حذف مراحل التجريد بحجة تسريع اتخاذ القرار الميداني.`,
        `التركيز على الحلول السطحية العاجلة دون مراعاة الكفاءة الخوارزمية طويلة الأمد.`,
        `تطبيق خوارزميات غير مختبرة دون اختبار حالات الفحص المعيارية.`,
        `تفويض بناء الحلول بالكامل لأطراف خارجية دون التحقق من منطق التعليمات البرمجية.`
      ];
      options = optionLetters.map((letter, optIdx) => {
        if (letter === correctKey) {
          return {
            key: letter,
            text: `تحليل معطيات المشكلة بشكل منهجي واتخاذ قرارات حلول متوافقة مع مبادئ ${assignedElement} وقواعد ${actualMapel}.`
          };
        }
        return {
          key: letter,
          text: distractors[optIdx % distractors.length]
        };
      });
      scoringGuide = `درجة واحدة (1) عند الإجابة الصحيحة (${correctKey})، وصفر (0) عند الإجابة الخاطئة.`;
      explanation = `الخيار ${correctKey} هو الصحيح لأنه يعكس فهماً شاملاً لقواعد ${topikCapaian} المترابطة مع قيمة ${assignedElement}.`;
    } else if (item.type === 'benar_salah') {
      correctKey = idx % 2 === 0 ? 'صحيح' : 'خطأ';
      butirSoal = `العبارة: "إن تطبيق مفاهيم ${topikCapaian} في الحياة العملية لا يتطلب مراعاة الضوابط الأخلاقية أو الاهتمام بـ ${assignedElement}، بل يكتفي بالتركيز على الكفاءة التقنية وحدها." \n\nما هو الحكم الصحيح على هذه العبارة؟`;
      options = [
        { key: 'صحيح', text: 'العبارة صحيحة (True)' },
        { key: 'خطأ', text: 'العبارة خاطئة (False)' }
      ];
      scoringGuide = `درجة واحدة عند اختيار "${correctKey}"، وصفر عند العكس.`;
      explanation = `العبارة خاطئة، إذ يتعين في كل ممارسة لـ ${actualMapel} الالتزام بالمسؤولية الأخلاقية وترسيخ ${assignedElement}.`;
    } else if (item.type.includes('kompleks')) {
      butirSoal = `تأمل البدائل والاستنتاجات التالية المتعلقة بمعالجة مشكلات ${topikCapaian}. حدد جميع العبارات الصحيحة علمياً والمعبرة عن ركيزة "${assignedElement}":`;
      const complexDistractors = [
        `إلغاء بروتوكولات ضبط الجودة لتقليل وقت الإنجاز.`,
        `تجاوز مرحلة التحقق من منطق البيانات لتقليل تكاليف المعالجة.`,
        `حجب شفافية المعلومات الخوارزمية عن المستخدمين المعنيين.`
      ];
      options = optionLetters.map((letter, optIdx) => {
        const isCorrect = correctKeys.includes(letter);
        return {
          key: letter,
          text: isCorrect
            ? `العبارة ${letter}: دمج إجراءات ${actualMapel} المرنة مع الالتزام بركيزة ${assignedElement} لخدمة الصالح العام.`
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
  } else if (itemLang === 'fr') {
    stimulus = `Dans le cadre de l'apprentissage de ${actualMapel} sur le thème « ${topikCapaian} », les apprenants explorent des situations contextualisées liées à l'intégration de la valeur « ${assignedElement} ».`;
    if (item.type === 'pg_ad' || item.type === 'pg_ae') {
      butirSoal = `D'après l'analyse méthodique de ${topikCapaian} et le diagramme ci-dessus, quelle affirmation illustre le mieux l'application rigoureuse intégrant la valeur « ${assignedElement} » ?`;
      const distractors = [
        `Ignorer la décomposition du problème et privilégier des intuitions non vérifiées.`,
        `Supprimer les étapes d'abstraction pour accélérer la prise de décision sur le terrain.`,
        `Se concentrer uniquement sur l'immédiateté sans tenir compte de la scalabilité algorithmique.`,
        `Appliquer des démarches aléatoires sans tests préalables sur les jeux de données.`,
        `Déléguer l'ensemble de la logique algorithmique sans validation interne.`
      ];
      options = optionLetters.map((letter, optIdx) => {
        if (letter === correctKey) {
          return {
            key: letter,
            text: `Analyser systématiquement les paramètres du problème et formuler des solutions structurées conformes aux principes de ${assignedElement} et de ${actualMapel}.`
          };
        }
        return {
          key: letter,
          text: distractors[optIdx % distractors.length]
        };
      });
      scoringGuide = `1 point pour la bonne réponse (${correctKey}), 0 point en cas d'erreur ou d'omission.`;
      explanation = `L'option ${correctKey} est exacte car elle allie la maîtrise technique de ${topikCapaian} avec l'éthique de ${assignedElement}.`;
    } else if (item.type === 'benar_salah') {
      correctKey = idx % 2 === 0 ? 'Vrai' : 'Faux';
      butirSoal = `Affirmation : « L'application concrète des concepts de ${topikCapaian} vise exclusivement l'efficacité technique, rendant superflue toute considération éthique relative à ${assignedElement}. » \n\nQuelle est la valeur de vérité de cette affirmation ?`;
      options = [
        { key: 'Vrai', text: 'L\'affirmation est VRAIE' },
        { key: 'Faux', text: 'L\'affirmation est FAUSSE' }
      ];
      scoringGuide = `1 point pour le choix « ${correctKey} », 0 point sinon.`;
      explanation = `L'affirmation est FAUSSE car toute démarche de ${actualMapel} requiert une responsabilité sociétale et morale liée à ${assignedElement}.`;
    } else if (item.type.includes('kompleks')) {
      butirSoal = `Examinez les propositions suivantes relatives à la résolution de problématiques dans ${topikCapaian}. Cochez TOUTES les affirmations valides intégrant le pilier « ${assignedElement} » :`;
      const complexDistractors = [
        `Supprimer le contrôle qualité pour réduire les délais.`,
        `Négliger la validation logique pour réduire les coûts de calcul.`,
        `Restreindre la transparence des données aux usagers légitimes.`
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
  } else if (itemLang === 'palembang') {
    stimulus = `Kalu kito nyingok pelajarnyo ${actualMapel} bab "${topikCapaian}", kito pacak belajor dari masalah sehari-hari di kito Palembang yang ado sangkut pautnyo samo nerapke nilai "${assignedElement}".`;
    if (item.type === 'pg_ad' || item.type === 'pg_ae') {
      butirSoal = `Berdasarke kajian materi ${topikCapaian} samo bagan di pucuk ini, mano pernyataan di bawah ini yang paling pas buat nunjukke penerapan konsep yang nerapke nilai "${assignedElement}"?`;
      const distractors = [
        `Langsung bae nyimpulke secara instan tanpa dicek lagi datanyo bener apo idak.`,
        `Ngurangi tahapan mikir abstraksi karno diraso bikin lamo ngambek keputusan di lapangan.`,
        `Cuma mikirke gampangnyo bae sekarang tanpa mikirke efisiensi algoritma pas dipake jangka lamo.`,
        `Make cara acak-acakan bae tanpa diuji pake kasus uji (test case) apo la pas samo batasan masalahnyo.`,
        `Nyerahke galo-galo rumusan solusi ke wong laen tanpa diperikso lagi kebenaran logikanyo.`
      ];
      options = optionLetters.map((letter, optIdx) => {
        if (letter === correctKey) {
          return {
            key: letter,
            text: `Menganalisis parameter masalah caro sistematis laju ngambek keputusan solutif yang pas samo prinsip ${assignedElement} di ${actualMapel}.`
          };
        }
        return {
          key: letter,
          text: distractors[optIdx % distractors.length]
        };
      });
      scoringGuide = `Skor 1 kalu jawab bener (${correctKey}), skor 0 kalu sala atau idak diisi.`;
      explanation = `Opsi ${correctKey} bener karno nunjukke pemahaman yang mantep bab konsep ${topikCapaian} yang tehubung elok samo budi pekerti ${assignedElement}.`;
    } else if (item.type === 'benar_salah') {
      correctKey = idx % 2 === 0 ? 'Bener' : 'Salah';
      butirSoal = `Pernyataan: "Penerapan konsep ${topikCapaian} di dunio nyato idak usah mikirke etika apo lagi kepedulian samo ${assignedElement}, cukup mentingke gawenyo lancar bae." \n\nCakmano kebenaran pernyataan ini?`;
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
        `Nutupi keterbukaan info algoritma dari kawan-kawan yang berkepentingan.`
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
      explanation = `Pilihan yang bener yoitu (${correctKeys.join(', ')}). Pernyataan ini maduke ketepatan ilmu samo integritas karakter budi pekerti budak mudo.`;
    } else {
      correctKey = 'Pedoman Nilai (Rubrik)';
      butirSoal = `Jelaske caro komprehensif cakmano rancangan strategi kito buat mecahke masalah di materi ${topikCapaian}! Di jawaban adek-adek, jelaske paling idak: \n1. Analisis akar masalahnyo apo,\n2. Langkah-langkah nyelesaikannyo betahap make aturan ${actualMapel},\n3. Bukti nyato wujud budi pekerti "${assignedElement}" di solusi yang diajuke.`;
      scoringGuide = `• Skor 4 (Mantep Nian): Nguraike ketigo aspek nganalisis tajam, logis, samo refleksi karakter ${assignedElement} pas nian.\n• Skor 3 (Bagus): Nguraike ketigo aspek tapi integrasi karakter masi umum.\n• Skor 2 (Sedang): Cuma nguraike 1-2 aspek bae.\n• Skor 1 (Kurang): Jawaban masih cindo-cindoan bae belum nyentuh inti materi.`;
      explanation = `Peserta didik diarepke pacak nunjukke tingkat pikir kognitif ${assignedBloom} liwat penalaran yang rapi samo ide inovatif.`;
    }
  } else {
    // Default: Bahasa Indonesia
    stimulus = `Dalam konteks pembelajaran ${actualMapel} pada topik "${topikCapaian}", peserta didik diajak untuk mengamati fenomena kontekstual sehari-hari yang berkaitan dengan integrasi nilai "${assignedElement}".`;
    if (item.type === 'pg_ad' || item.type === 'pg_ae') {
      butirSoal = `Berdasarkan telaah kritis terhadap materi ${topikCapaian} dan bagan fenomena di atas, manakah pernyataan berikut yang paling tepat dalam menunjukkan penerapan konsep yang mengintegrasikan nilai "${assignedElement}"?`;
      const distractorPool = [
        `Mengabaikan dekomposisi masalah dan langsung mengambil kesimpulan intuitif tanpa verifikasi data terstruktur.`,
        `Mengurangi tahapan analisis abstraksi karena dianggap memperlambat waktu pengambilan keputusan lapangan.`,
        `Hanya memfokuskan solusi pada aspek kemudahan sesaat tanpa mempertimbangkan efisiensi algoritma jangka panjang.`,
        `Menerapkan algoritma acak tanpa pengujian kasus uji (test case) terhadap batasan kompleksitas masalah.`,
        `Menyerahkan seluruh perumusan solusi kepada pihak ketiga tanpa melakukan validasi kebenaran logika instruksi.`
      ];
      options = optionLetters.map((letter, optIdx) => {
        if (letter === correctKey) {
          return {
            key: letter,
            text: `Menganalisis parameter masalah secara sistematis dan mengambil keputusan solutif yang selaras dengan prinsip ${assignedElement} serta kaidah ${actualMapel}.`
          };
        }
        return {
          key: letter,
          text: distractorPool[optIdx % distractorPool.length]
        };
      });
      scoringGuide = `Skor 1 jika menjawab benar (${correctKey}), skor 0 jika salah atau tidak menjawab.`;
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
      butirSoal = `Jelaskan secara komprehensif bagaimana rancangan strategi Anda dalam memecahkan permasalahan pada materi ${topikCapaian}! Dalam jawaban Anda, uraikan sekurang-kurangnya: \n1. Analisis akar penyebab masalah,\n2. Langkah-langkah penyelesaian bertahap berbasis kaidah ${actualMapel},\n3. Bukti nyata perwujudan karakter "${assignedElement}" dalam solusi yang Anda ajukan.`;
      scoringGuide = `• Skor 4 (Sangat Baik): Menguraikan ketiga aspek dengan analisis tajam, logis, sistematis, dan refleksi nilai karakter ${assignedElement} sangat kontekstual.\n• Skor 3 (Baik): Menguraikan ketiga aspek namun penjelasan integrasi karakter masih bersifat normatif.\n• Skor 2 (Cukup): Hanya menguraikan 1-2 aspek secara umum.\n• Skor 1 (Kurang): Jawaban sangat terbatas dan belum menyentuh substansi materi pokok.`;
      explanation = `Peserta didik diharapkan mampu mendemonstrasikan level kognitif ${assignedBloom} melalui penalaran analitis terstruktur dan sintesis ide inovatif.`;
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
  const maxOption = isFaseABCD ? 4 : 5;
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

  // Distribusi Elemen Karakter / KBC / Profil Lulusan
  const elementPool = selectedElements.length > 0
    ? selectedElements
    : (kurikulum.includes('Cinta')
        ? ['Cinta Ilmu', 'Cinta Lingkungan', 'Cinta Tanah Air', 'Cinta Diri dan Sesama Manusia', 'Cinta Allah Swt. dan Rasul-Nya']
        : ['Penalaran Kritis', 'Kreativitas', 'Kolaborasi', 'Kemandirian', 'Kewargaan']);

  // Distribusi Level Kognitif
  const bloomLevels = ['C1', 'C2', 'C3', 'C4', 'C5', 'C6'];
  const bloomLabels = {
    C1: 'Mengingat (LOTS)',
    C2: 'Memahami (LOTS)',
    C3: 'Menerapkan (LOTS)',
    C4: 'Menganalisis (HOTS)',
    C5: 'Mengevaluasi (HOTS)',
    C6: 'Mencipta (HOTS)'
  };

  // Pengaturan Bahasa Soal
  const langMode = languageConfig.mode || 'id';
  const bilingualCountId = languageConfig.bilingualCounts?.id ?? Math.ceil(listItems.length / 2);

  // Generate Questions Data
  const generatedQuestions = listItems.map((item, idx) => {
    const assignedBloom = bloomLevels[idx % bloomLevels.length];
    const assignedElement = elementPool[idx % elementPool.length];
    const diffLevel = idx % 3 === 0 ? 'Mudah' : (idx % 3 === 1 ? 'Sedang' : 'Sulit');
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

    const subjectCategory = detectSubjectCategory(actualMapel, topikCapaian);

    let localized;
    let finalSvgVisual = null;
    let itemHasVisual = hasVisual;

    if (subjectCategory !== 'umum') {
      // Pembuatan Soal Kuantitatif Matematika, Fisika, dan Kimia (Perhitungan Berbasis Angka & Diagram)
      localized = generateExactScienceQuestion({
        subjectCategory,
        actualMapel,
        topikCapaian,
        item,
        idx,
        itemLang,
        assignedElement,
        assignedBloom,
        isFaseABCD,
        optionLetters,
        defaultCorrectKey
      });

      // Untuk sains eksak, selalu sertakan diagram visual teknis jika opsi withMedia aktif
      itemHasVisual = withMedia;
      if (itemHasVisual && localized.svgType) {
        finalSvgVisual = generateSvgIllustration(localized.svgType, `Diagram No. ${item.no} - ${actualMapel}`);
      }
    } else {
      // Pembuatan Soal Umum
      localized = generateLocalizedQuestion({
        item,
        idx,
        itemLang,
        actualMapel,
        topikCapaian,
        assignedElement,
        assignedBloom,
        isFaseABCD,
        optionLetters,
        defaultCorrectKey,
        defaultCorrectKeys
      });

      if (itemHasVisual) {
        finalSvgVisual = generateSvgIllustration(visualType, `Diagram No. ${item.no} - ${topikCapaian}`);
      }
    }

    const capaianText = subjectCategory !== 'umum'
      ? `Peserta didik mampu menerapkan formulasi matematis, melakukan perhitungan kuantitatif berbasis data angka, menganalisis diagram/grafik fisis, dan memecahkan masalah ${actualMapel} pada materi ${topikCapaian} secara akurat.`
      : `Peserta didik mampu menganalisis, mengevaluasi, dan merefleksikan konsep ${topikCapaian} secara kritis serta berkarakter luhur.`;

    const indikatorText = subjectCategory !== 'umum'
      ? `Disajikan stimulus kontekstual dan diagram teknis materi ${topikCapaian}, peserta didik dapat melakukan perhitungan matematis/sains untuk menentukan nilai besaran yang tepat.`
      : `Disajikan stimulus kontekstual tentang ${topikCapaian}, peserta didik dapat menentukan solusi/analisis yang tepat dengan mencerminkan nilai ${assignedElement}.`;

    const sumberText = subjectCategory !== 'umum'
      ? `Buku Siswa & Panduan Guru ${actualMapel} ${kelas} Kemendikdasmen, Kumpulan Soal Sains & Kalkulasi Terstandar`
      : `Buku Guru & Siswa ${actualMapel} ${kelas}, Modul Ajar Resmi, Referensi Kurikulum Terstandar`;

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
      capaianPembelajaran: capaianText,
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
      generatorEngine: 'EduAsesmen Hybrid AI Engine',
      totalQuestions: generatedQuestions.length,
      config
    },
    questions: generatedQuestions
  };
};

/**
 * Pemanggilan Gemini API jika user memasukkan API Key
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
    selectedElements = [],
    questionCounts,
    withMedia,
    difficulty,
    bloom,
    customInstruction,
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
  const bilingualCountEn = languageConfig.bilingualCounts?.en ?? Math.max(0, totalQuestions - bilingualCountId);

  let languageInstruction = '';
  if (languageConfig.mode === 'en') {
    languageInstruction = `ATURAN BAHASA SOAL (SANGAT PENTING): Seluruh naskah soal, narasi stimulus, opsi jawaban, pembahasan ilmiah, dan pedoman penskoran WAJIB 100% ditulis dalam BAHASA INGGRIS (Full English Language). Cantumkan field "language": "en" pada setiap butir soal.`;
  } else if (languageConfig.mode === 'ar') {
    languageInstruction = `ATURAN BAHASA SOAL (SANGAT PENTING): Seluruh naskah soal, narasi stimulus, opsi jawaban, pembahasan ilmiah, dan pedoman penskoran WAJIB 100% ditulis dalam BAHASA ARAB FUSHA (اللغة العربية الفصحى). Cantumkan field "language": "ar" pada setiap butir soal.`;
  } else if (languageConfig.mode === 'fr') {
    languageInstruction = `ATURAN BAHASA SOAL (SANGAT PENTING): Seluruh naskah soal, narasi stimulus, opsi jawaban, pembahasan ilmiah, dan pedoman penskoran WAJIB 100% ditulis dalam BAHASA PRANCIS (Langue Française). Cantumkan field "language": "fr" pada setiap butir soal.`;
  } else if (languageConfig.mode === 'palembang') {
    languageInstruction = `ATURAN BAHASA SOAL (SANGAT PENTING): Seluruh naskah soal dan narasi stimulus studi kasus WAJIB ditulis dalam BAHASA PALEMBANG (Baso Pelembang / Kearifan Lokal Melayu Palembang Sumatera Selatan) yang santun, komunikatif, dan mendidik (gunakan kosa kata dialek Palembang seperti: apo, cakmano, pacak, kito, gawenyo, kalu, jangan, cuguk, nian, dsb). Cantumkan field "language": "palembang" pada setiap butir soal.`;
  } else if (languageConfig.mode === 'bilingual') {
    languageInstruction = `ATURAN BAHASA BILINGUAL (SANGAT PENTING): Paket ujian ini BILINGUAL (Dua Bahasa):
  * Butir soal nomor 1 sampai ${bilingualCountId} WAJIB dibuat dalam BAHASA INDONESIA baku. Cantumkan field "language": "id".
  * Butir soal nomor ${bilingualCountId + 1} sampai ${totalQuestions} WAJIB dibuat dalam BAHASA INGGRIS (Full English). Cantumkan field "language": "en".`;
  } else {
    languageInstruction = `ATURAN BAHASA SOAL: Seluruh naskah soal disajikan dalam BAHASA INDONESIA baku dan edukatif. Cantumkan field "language": "id" pada setiap butir soal.`;
  }

  const subjectCategory = detectSubjectCategory(actualMapel, topikCapaian);
  let exactScienceInstruction = '';
  if (subjectCategory !== 'umum') {
    exactScienceInstruction = `
========================================================================
PERATURAN WAJIB MATA PELAJARAN EKSAK (${actualMapel.toUpperCase()}) - SANGAT KETAT:
1. DILARANG KERAS MEMBUAT SOAL TEORI HAFALAN, DEFINISI KONSEPTUAL SEMATA, ATAU TEKS NARASI NON-HITUNGAN!
2. SELURUH SOAL WAJIB BERUPA SOAL PERHITUNGAN MATEMATIS / SAINS DENGAN ANGKA KUANTITATIF NYATA (NUMERICAL PROBLEMS).
3. SETIAP SOAL WAJIB:
   - Menyertakan data angka numerik terukur yang jelas (contoh: massa m = 4 kg, gaya F = 32 N, sudut θ = 30°, kecepatan v = 20 m/s, hambatan R = 6 Ω, tegangan E = 18 V, konsentrasi M = 0,10 M, volume V = 25 mL, fungsi f(x) = x² - 6x + 5, panjang sisi geometri cm/m).
   - Merujuk gambar/diagram di awal stimulus (contoh: "Perhatikan gambar diagram gaya bebas di atas...", "Perhatikan grafik kecepatan terhadap waktu (v-t) berikut...", "Perhatikan diagram rangkaian listrik resistor tertutup berikut...", "Perhatikan gambar set alat titrasi asam-basa berikut...", "Perhatikan gambar bangun segitiga siku-siku di atas...").
   - Mengharuskan siswa menghitung menggunakan rumus fisika/kimia/matematika terstandar.
4. OPSI PILIHAN JAWABAN (A, B, C, D, E) WAJIB BERUPA ANGKA HASIL PERHITUNGAN BESERTA SATUAN RESMI (contoh: "A. 5,68 m/s²", "B. 8,00 m/s²", "C. 12 m/s²", "A. 13 cm dan 17/13", atau "A. 0,12 M"). DILARANG MEMBUAT OPSI BERUPA KALIMAT NARASI PANJANG!
5. FIELD "explanation" WAJIB MENJELASKAN TAHAPAN PERHITUNGAN MATEMATIS LENGKAP:
   - Diketahui: (besaran & nilai angka)
   - Ditanya: (variabel)
   - Rumus yang digunakan
   - Langkah substitusi angka langkah demi langkah hingga hasil akhir
6. FIELD "hasVisual" WAJIB bernilai true pada setiap butir soal yang merujuk diagram/grafik/set alat.
========================================================================
`;
  }

  const prompt = `Anda adalah Asisten Pakar Evaluasi Pendidikan dan Asesmen Kurikulum Nasional Kemendikdasmen.
Tugas Anda: Buat paket soal ujian terstruktur lengkap beserta Kisi-Kisi dan Kartu Soal.

Data Profil:
- Jenjang / Fase: ${fase} (${kelas})
- Kurikulum: ${actualKurikulum}
- Mata Pelajaran: ${actualMapel}
- Topik / Capaian Pembelajaran: ${topikCapaian}
- Elemen Kurikulum yang Wajib Diintegrasikan: ${selectedElements.join(', ')}
- Ketentuan Bentuk Soal:
  * Pilihan Ganda: ${questionCounts.pg} butir (${['A','B','C','D'].includes(fase) ? 'Opsi A-D' : 'Opsi A-E'})
  * Pilihan Ganda Kompleks: ${questionCounts.pg_kompleks} butir
  * Benar-Salah: ${['A','B','C','D'].includes(fase) ? (questionCounts.benar_salah || 0) : 0} butir
  * Esai: ${questionCounts.esai} butir
- Tingkat Kesulitan: Mudah ${difficulty.mudah}%, Sedang ${difficulty.sedang}%, Sulit ${difficulty.sulit}%
- Dimensi Kognitif Bloom: C1-C6 terdistribusi proporsional
- Sertakan Ilustrasi/Visual: ${withMedia ? 'YA (berikan deskripsi visual dan prompt gambar/diagram)' : 'TIDAK'}
- ${languageInstruction}
${exactScienceInstruction}
- Instruksi Khusus Pengguna: ${customInstruction || 'Tidak ada'}

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
      "correctKey": "A" (atau string kunci/kombinasi),
      "correctKeys": ["A", "C"] (jika kompleks),
      "materi": "${topikCapaian}",
      "capaianPembelajaran": "Rumusan CP",
      "indikator": "Rumusan indikator soal",
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

    // Attach SVGs for visual items if needed & ensure language fields
    const languageLabels = {
      id: 'Indonesia',
      en: 'English',
      ar: 'العربية',
      fr: 'Français',
      palembang: 'Baso Pelembang'
    };

    const questionsWithSvgs = parsed.questions.map((q, idx) => {
      const hasVisual = q.hasVisual || (withMedia && (subjectCategory !== 'umum' || idx % 2 === 0));
      let visualType = 'flowchart';
      if (subjectCategory === 'fisika') {
        const types = ['physics_fbd', 'physics_circuit', 'physics_motion_graph'];
        visualType = types[idx % types.length];
      } else if (subjectCategory === 'matematika') {
        const types = ['math_geometry_triangle', 'math_function_graph'];
        visualType = types[idx % types.length];
      } else if (subjectCategory === 'kimia') {
        const types = ['chemistry_titration', 'chemistry_energy_diagram'];
        visualType = types[idx % types.length];
      } else {
        visualType = idx % 3 === 0 ? 'flowchart' : (idx % 3 === 1 ? 'chart' : 'ecosystem');
      }

      const resolvedLang = q.language || (
        languageConfig.mode === 'bilingual'
          ? (idx < bilingualCountId ? 'id' : 'en')
          : (languageConfig.mode || 'id')
      );
      return {
        ...q,
        language: resolvedLang,
        languageLabel: languageLabels[resolvedLang] || 'Indonesia',
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
