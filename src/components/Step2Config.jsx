import React from 'react';
import { 
  Sliders, 
  Image as ImageIcon, 
  BrainCircuit, 
  Sparkles, 
  CheckSquare, 
  MessageSquareQuote,
  Languages,
  Globe,
  Check,
  Split
} from 'lucide-react';
import { LANGUAGE_OPTIONS, getLanguageLabel } from '../data/curriculumData';

export default function Step2Config({ 
  examConfig, 
  setExamConfig, 
  onPrevStep, 
  onStartGenerate, 
  isGenerating 
}) {
  const {
    fase,
    questionCounts,
    withMedia,
    difficulty,
    bloom,
    customInstruction,
    languageConfig: rawLanguageConfig
  } = examConfig;

  // Fallback languageConfig
  const languageConfig = rawLanguageConfig || {
    mode: 'id',
    bilingualCounts: { id: 5, en: 5 }
  };

  const isFaseABCD = ['A', 'B', 'C', 'D'].includes(fase);

  // Total Soal
  const totalQuestions = 
    (Number(questionCounts.pg) || 0) +
    (Number(questionCounts.pg_kompleks) || 0) +
    (isFaseABCD ? (Number(questionCounts.benar_salah) || 0) : 0) +
    (Number(questionCounts.esai) || 0);

  const bilingualCountId = languageConfig.bilingualCounts?.id ?? Math.ceil(totalQuestions / 2);
  const bilingualCountEn = languageConfig.bilingualCounts?.en ?? Math.max(0, totalQuestions - bilingualCountId);

  const lotsTotal = (Number(bloom.c1) || 0) + (Number(bloom.c2) || 0) + (Number(bloom.c3) || 0);
  const hotsTotal = (Number(bloom.c4) || 0) + (Number(bloom.c5) || 0) + (Number(bloom.c6) || 0);

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xs border border-purple-200/70 dark:border-purple-900/40 overflow-hidden transition-colors">
      {/* Header Langkah */}
      <div className="bg-gradient-to-r from-maroon-50 via-purple-50/70 to-purple-100/50 dark:from-maroon-950/40 dark:via-purple-950/30 dark:to-slate-900 border-b border-purple-200/70 dark:border-purple-900/40 p-5 sm:p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-maroon-800 to-purple-800 text-white flex items-center justify-center font-bold text-base shadow-sm">
              2
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                Langkah 2: Konfigurasi Teknis & Spesifikasi Soal
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Sesuaikan bentuk butir soal, media ilustrasi, proporsi kesukaran, dan taksonomi Bloom
              </p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2 bg-purple-100/80 dark:bg-purple-950/80 border border-purple-200 dark:border-purple-800 px-3 py-1.5 rounded-xl">
            <span className="text-xs font-semibold text-purple-900 dark:text-purple-300">Target Total Soal:</span>
            <span className="text-sm font-extrabold text-purple-950 dark:text-white bg-white dark:bg-slate-800 px-2 py-0.5 rounded-lg shadow-xs">
              {totalQuestions} Butir
            </span>
          </div>
        </div>
      </div>

      <div className="p-5 sm:p-6 space-y-6">

        {/* 1. Bentuk Soal Sesuai Fase */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <CheckSquare className="w-4 h-4 text-purple-700 dark:text-purple-400" />
                Spesifikasi Bentuk Soal (Otomatis Sesuai Fase {fase})
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {isFaseABCD 
                  ? 'Fase A, B, C, D: Pilihan Ganda (A-D), Benar-Salah, PG Komplek (A-D), Esai'
                  : 'Fase E, F: Pilihan Ganda (A-E), PG Komplek (A-E), Esai'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {/* Pilihan Ganda */}
            <div className="p-4 rounded-xl border border-purple-200 dark:border-slate-700 bg-purple-50/30 dark:bg-slate-800/60 hover:border-purple-400 transition-all">
              <div className="text-xs font-bold text-slate-800 dark:text-slate-200 mb-1">
                {isFaseABCD ? 'Pilihan Ganda (A-D)' : 'Pilihan Ganda (A-E)'}
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-3">1 Kunci jawaban benar</p>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min="0"
                  max="50"
                  value={questionCounts.pg}
                  onChange={(e) => setExamConfig(prev => ({
                    ...prev,
                    questionCounts: { ...prev.questionCounts, pg: Math.max(0, parseInt(e.target.value) || 0) }
                  }))}
                  className="w-20 px-3 py-1.5 text-sm font-bold text-center border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">Butir</span>
              </div>
            </div>

            {/* Benar-Salah (Khusus Fase A-D) */}
            {isFaseABCD ? (
              <div className="p-4 rounded-xl border border-purple-200 dark:border-slate-700 bg-purple-50/30 dark:bg-slate-800/60 hover:border-purple-400 transition-all">
                <div className="text-xs font-bold text-slate-800 dark:text-slate-200 mb-1">Benar-Salah</div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-3">2 Alternatif jawaban</p>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min="0"
                    max="30"
                    value={questionCounts.benar_salah}
                    onChange={(e) => setExamConfig(prev => ({
                      ...prev,
                      questionCounts: { ...prev.questionCounts, benar_salah: Math.max(0, parseInt(e.target.value) || 0) }
                    }))}
                    className="w-20 px-3 py-1.5 text-sm font-bold text-center border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  />
                  <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">Butir</span>
                </div>
              </div>
            ) : null}

            {/* Pilihan Ganda Kompleks */}
            <div className="p-4 rounded-xl border border-purple-200 dark:border-slate-700 bg-purple-50/30 dark:bg-slate-800/60 hover:border-purple-400 transition-all">
              <div className="text-xs font-bold text-slate-800 dark:text-slate-200 mb-1">
                {isFaseABCD ? 'Pilihan Ganda Komplek (A-D)' : 'Pilihan Ganda Komplek (A-E)'}
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-3">Multi-jawaban benar (Asesmen)</p>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min="0"
                  max="30"
                  value={questionCounts.pg_kompleks}
                  onChange={(e) => setExamConfig(prev => ({
                    ...prev,
                    questionCounts: { ...prev.questionCounts, pg_kompleks: Math.max(0, parseInt(e.target.value) || 0) }
                  }))}
                  className="w-20 px-3 py-1.5 text-sm font-bold text-center border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">Butir</span>
              </div>
            </div>

            {/* Esai */}
            <div className="p-4 rounded-xl border border-purple-200 dark:border-slate-700 bg-purple-50/30 dark:bg-slate-800/60 hover:border-purple-400 transition-all">
              <div className="text-xs font-bold text-slate-800 dark:text-slate-200 mb-1">Esai / Uraian Terbuka</div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-3">Lengkap dengan rubrik penskoran</p>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min="0"
                  max="20"
                  value={questionCounts.esai}
                  onChange={(e) => setExamConfig(prev => ({
                    ...prev,
                    questionCounts: { ...prev.questionCounts, esai: Math.max(0, parseInt(e.target.value) || 0) }
                  }))}
                  className="w-20 px-3 py-1.5 text-sm font-bold text-center border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">Butir</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Media: Opsi Gambar Ilustrasi */}
        <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
          <label className="flex items-start gap-3 p-3.5 rounded-xl border border-purple-200 dark:border-purple-900/60 bg-purple-50/40 dark:bg-slate-800/50 cursor-pointer hover:bg-purple-50 dark:hover:bg-slate-800 transition-colors">
            <input
              type="checkbox"
              checked={withMedia}
              onChange={(e) => setExamConfig(prev => ({ ...prev, withMedia: e.target.checked }))}
              className="w-5 h-5 mt-0.5 rounded text-purple-700 focus:ring-purple-500 border-slate-300 dark:border-slate-600"
            />
            <div>
              <span className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <ImageIcon className="w-4 h-4 text-purple-700 dark:text-purple-400" />
                Sertakan Ilustrasi Gambar / Diagram Visual pada Naskah Soal
              </span>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                Sistem akan menyertakan diagram alir (*flowchart*), grafik analitis, bagan siklus, atau skema konseptual vektor beresolusi tinggi pada butir soal stimulus.
              </p>
            </div>
          </label>
        </div>

        {/* 3. Tingkat Kesulitan */}
        <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <Sliders className="w-4 h-4 text-purple-700 dark:text-purple-400" />
              Proporsi Tingkat Kesulitan Soal
            </h3>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              Total: {Number(difficulty.mudah) + Number(difficulty.sedang) + Number(difficulty.sulit)}%
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 rounded-xl p-3">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300">Mudah</span>
                <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400">{difficulty.mudah}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                step="5"
                value={difficulty.mudah}
                onChange={(e) => setExamConfig(prev => ({
                  ...prev,
                  difficulty: { ...prev.difficulty, mudah: parseInt(e.target.value) || 0 }
                }))}
                className="w-full accent-emerald-600"
              />
            </div>

            <div className="bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800/60 rounded-xl p-3">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-bold text-purple-800 dark:text-purple-300">Sedang</span>
                <span className="text-xs font-bold text-purple-700 dark:text-purple-400">{difficulty.sedang}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                step="5"
                value={difficulty.sedang}
                onChange={(e) => setExamConfig(prev => ({
                  ...prev,
                  difficulty: { ...prev.difficulty, sedang: parseInt(e.target.value) || 0 }
                }))}
                className="w-full accent-purple-600"
              />
            </div>

            <div className="bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800/60 rounded-xl p-3">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-bold text-indigo-800 dark:text-indigo-300">Sulit</span>
                <span className="text-xs font-bold text-indigo-700 dark:text-indigo-400">{difficulty.sulit}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                step="5"
                value={difficulty.sulit}
                onChange={(e) => setExamConfig(prev => ({
                  ...prev,
                  difficulty: { ...prev.difficulty, sulit: parseInt(e.target.value) || 0 }
                }))}
                className="w-full accent-indigo-600"
              />
            </div>
          </div>
        </div>

        {/* 4. Dimensi Kognitif (Taksonomi Bloom: LOTS vs HOTS) */}
        <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <BrainCircuit className="w-4 h-4 text-purple-700 dark:text-purple-400" />
              Dimensi Kognitif (Taksonomi Bloom)
            </h3>
            <div className="flex items-center gap-2 text-xs">
              <span className="bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300 font-bold px-2 py-0.5 rounded border border-purple-200 dark:border-purple-800">
                LOTS (C1-C3): {lotsTotal}
              </span>
              <span className="bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 font-bold px-2 py-0.5 rounded border border-indigo-200 dark:border-indigo-800">
                HOTS (C4-C6): {hotsTotal}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {[
              { id: 'c1', label: 'C1: Mengingat', group: 'LOTS', badge: 'bg-purple-50/60 dark:bg-slate-800/70 border-purple-200 dark:border-slate-700' },
              { id: 'c2', label: 'C2: Memahami', group: 'LOTS', badge: 'bg-purple-50/60 dark:bg-slate-800/70 border-purple-200 dark:border-slate-700' },
              { id: 'c3', label: 'C3: Menerapkan', group: 'LOTS', badge: 'bg-purple-50/60 dark:bg-slate-800/70 border-purple-200 dark:border-slate-700' },
              { id: 'c4', label: 'C4: Menganalisis', group: 'HOTS', badge: 'bg-indigo-50/60 dark:bg-slate-800/70 border-indigo-200 dark:border-slate-700' },
              { id: 'c5', label: 'C5: Mengevaluasi', group: 'HOTS', badge: 'bg-indigo-50/60 dark:bg-slate-800/70 border-indigo-200 dark:border-slate-700' },
              { id: 'c6', label: 'C6: Mencipta', group: 'HOTS', badge: 'bg-indigo-50/60 dark:bg-slate-800/70 border-indigo-200 dark:border-slate-700' },
            ].map(b => (
              <div key={b.id} className={`p-2.5 rounded-xl border ${b.badge} text-center`}>
                <div className="text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-0.5">{b.label}</div>
                <div className="text-[9px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                  {b.group}
                </div>
                <input
                  type="number"
                  min="0"
                  max="20"
                  value={bloom[b.id] || 0}
                  onChange={(e) => setExamConfig(prev => ({
                    ...prev,
                    bloom: { ...prev.bloom, [b.id]: Math.max(0, parseInt(e.target.value) || 0) }
                  }))}
                  className="w-14 px-2 py-1 text-xs font-bold text-center border border-slate-300 dark:border-slate-600 rounded bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-purple-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* 5. Pengaturan Bahasa Naskah Soal & Asesmen (Language Options) */}
        <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <Languages className="w-4 h-4 text-maroon-700 dark:text-purple-400" />
                Bahasa Naskah Soal & Asesmen
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Pilih bahasa pengantar ujian, full bahasa asing/daerah, atau kustomisasi pembagian bilingual
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-purple-900 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/70 border border-purple-200 dark:border-purple-800 px-2.5 py-1 rounded-lg flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                <span>{getLanguageLabel(languageConfig)}</span>
              </span>
            </div>
          </div>

          {/* Grid Pilihan Bahasa (6 Opsi) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {LANGUAGE_OPTIONS.map((lang) => {
              const isSelected = languageConfig.mode === lang.id;
              return (
                <div
                  key={lang.id}
                  onClick={() => {
                    setExamConfig(prev => {
                      const curCounts = prev.languageConfig?.bilingualCounts || {
                        id: Math.ceil(totalQuestions / 2) || 5,
                        en: Math.floor(totalQuestions / 2) || 5
                      };
                      return {
                        ...prev,
                        languageConfig: {
                          mode: lang.id,
                          bilingualCounts: curCounts
                        }
                      };
                    });
                  }}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'border-purple-600 dark:border-purple-500 bg-purple-50/70 dark:bg-purple-950/50 shadow-xs ring-2 ring-purple-500/20'
                      : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/60 hover:border-purple-300 dark:hover:border-purple-700'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xl leading-none">{lang.flag}</span>
                      <div>
                        <div className="text-xs font-bold text-slate-900 dark:text-white leading-tight">
                          {lang.name}
                        </div>
                        <span className="text-[10px] text-slate-500 dark:text-slate-400">
                          {lang.short}
                        </span>
                      </div>
                    </div>
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 border transition-all ${
                      isSelected
                        ? 'bg-purple-700 border-purple-700 text-white'
                        : 'border-slate-300 dark:border-slate-600 bg-transparent'
                    }`}>
                      {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug">
                    {lang.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Panel Interaktif Khusus jika Mode BILINGUAL Terpilih */}
          {languageConfig.mode === 'bilingual' && (
            <div className="mt-3.5 p-4 rounded-xl border border-purple-300 dark:border-purple-800 bg-gradient-to-r from-purple-50/90 via-indigo-50/70 to-purple-50/90 dark:from-slate-800 dark:via-purple-950/30 dark:to-slate-800 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <Split className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    Proporsi Distribusi Soal Bilingual
                  </h4>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400">
                    Atur pembagian jumlah soal antara Bahasa Indonesia dan Bahasa Inggris (Total: {totalQuestions} Soal)
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    const half = Math.ceil(totalQuestions / 2);
                    const rest = totalQuestions - half;
                    setExamConfig(prev => ({
                      ...prev,
                      languageConfig: {
                        ...prev.languageConfig,
                        bilingualCounts: { id: half, en: rest }
                      }
                    }));
                  }}
                  className="px-2.5 py-1 text-xs font-bold text-purple-700 dark:text-purple-300 bg-white dark:bg-slate-700 border border-purple-200 dark:border-purple-700 rounded-lg hover:bg-purple-50 shadow-2xs self-start sm:self-auto cursor-pointer"
                >
                  Bagi Rata (50 : 50)
                </button>
              </div>

              {/* Slider & Counter Input */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {/* Bahasa Indonesia Count */}
                <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-purple-200 dark:border-slate-700">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                      <span>🇮🇩</span> Bahasa Indonesia
                    </span>
                    <span className="text-xs font-extrabold text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950 px-2 py-0.5 rounded border border-purple-200 dark:border-purple-800">
                      {bilingualCountId} Butir ({totalQuestions > 0 ? Math.round((bilingualCountId / totalQuestions) * 100) : 0}%)
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max={totalQuestions}
                    value={bilingualCountId}
                    onChange={(e) => {
                      const newId = parseInt(e.target.value) || 0;
                      const newEn = Math.max(0, totalQuestions - newId);
                      setExamConfig(prev => ({
                        ...prev,
                        languageConfig: {
                          ...prev.languageConfig,
                          bilingualCounts: { id: newId, en: newEn }
                        }
                      }));
                    }}
                    className="w-full accent-purple-600 cursor-pointer"
                  />
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-[10px] text-slate-500">Soal No. 1 s/d {bilingualCountId > 0 ? bilingualCountId : '-'}</span>
                    <div className="flex items-center gap-1">
                      <span className="text-[10px] font-semibold text-slate-600 dark:text-slate-400">Jumlah:</span>
                      <input
                        type="number"
                        min="0"
                        max={totalQuestions}
                        value={bilingualCountId}
                        onChange={(e) => {
                          const newId = Math.max(0, Math.min(totalQuestions, parseInt(e.target.value) || 0));
                          const newEn = Math.max(0, totalQuestions - newId);
                          setExamConfig(prev => ({
                            ...prev,
                            languageConfig: {
                              ...prev.languageConfig,
                              bilingualCounts: { id: newId, en: newEn }
                            }
                          }));
                        }}
                        className="w-14 px-1.5 py-0.5 text-xs font-bold text-center border border-slate-300 dark:border-slate-600 rounded bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                      />
                    </div>
                  </div>
                </div>

                {/* Bahasa Inggris Count */}
                <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-purple-200 dark:border-slate-700">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                      <span>🇬🇧</span> Bahasa Inggris (English)
                    </span>
                    <span className="text-xs font-extrabold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950 px-2 py-0.5 rounded border border-blue-200 dark:border-blue-800">
                      {bilingualCountEn} Butir ({totalQuestions > 0 ? Math.round((bilingualCountEn / totalQuestions) * 100) : 0}%)
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max={totalQuestions}
                    value={bilingualCountEn}
                    onChange={(e) => {
                      const newEn = parseInt(e.target.value) || 0;
                      const newId = Math.max(0, totalQuestions - newEn);
                      setExamConfig(prev => ({
                        ...prev,
                        languageConfig: {
                          ...prev.languageConfig,
                          bilingualCounts: { id: newId, en: newEn }
                        }
                      }));
                    }}
                    className="w-full accent-blue-600 cursor-pointer"
                  />
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-[10px] text-slate-500">
                      Soal No. {bilingualCountId + 1} s/d {bilingualCountId + bilingualCountEn}
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="text-[10px] font-semibold text-slate-600 dark:text-slate-400">Jumlah:</span>
                      <input
                        type="number"
                        min="0"
                        max={totalQuestions}
                        value={bilingualCountEn}
                        onChange={(e) => {
                          const newEn = Math.max(0, Math.min(totalQuestions, parseInt(e.target.value) || 0));
                          const newId = Math.max(0, totalQuestions - newEn);
                          setExamConfig(prev => ({
                            ...prev,
                            languageConfig: {
                              ...prev.languageConfig,
                              bilingualCounts: { id: newId, en: newEn }
                            }
                          }));
                        }}
                        className="w-14 px-1.5 py-0.5 text-xs font-bold text-center border border-slate-300 dark:border-slate-600 rounded bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Status Info Box */}
              <div className="text-[11px] p-2.5 rounded-lg bg-purple-100/60 dark:bg-purple-950/40 text-purple-950 dark:text-purple-200 border border-purple-200/80 dark:border-purple-800/60 flex items-center justify-between">
                <span>
                  💡 <strong>Struktur Soal:</strong> {bilingualCountId} butir Bahasa Indonesia (No. 1 s/d {bilingualCountId || 1}) dan {bilingualCountEn} butir Bahasa Inggris (No. {bilingualCountId + 1} s/d {totalQuestions}).
                </span>
                <span className="font-bold text-xs">
                  {bilingualCountId + bilingualCountEn === totalQuestions ? '✓ Proporsi Tepat' : '⚠️ Periksa Jumlah'}
                </span>
              </div>
            </div>
          )}

          {/* Info Banner untuk Bahasa Arab */}
          {languageConfig.mode === 'ar' && (
            <div className="mt-3 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-900 dark:text-emerald-200 flex items-center gap-2">
              <span className="text-base">🇸🇦</span>
              <div>
                <strong>Mode Bahasa Arab Aktif:</strong> Seluruh narasi stimulus, pertanyaan, opsi jawaban, pembahasan, dan pedoman penskoran akan dibuat dalam <em>Bahasa Arab Fusha (اللغة العربية)</em> terstandar.
              </div>
            </div>
          )}

          {/* Info Banner untuk Bahasa Prancis */}
          {languageConfig.mode === 'fr' && (
            <div className="mt-3 p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 text-xs text-indigo-900 dark:text-indigo-200 flex items-center gap-2">
              <span className="text-base">🇫🇷</span>
              <div>
                <strong>Mode Bahasa Prancis Aktif:</strong> Seluruh butir soal dan kunci jawaban akan disusun dalam <em>Bahasa Prancis (Langue Française)</em> sesuai kaidah gramatika formal.
              </div>
            </div>
          )}

          {/* Info Banner untuk Bahasa Palembang */}
          {languageConfig.mode === 'palembang' && (
            <div className="mt-3 p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs text-amber-900 dark:text-amber-200 flex items-center gap-2">
              <span className="text-base">🏛️</span>
              <div>
                <strong>Mode Kearifan Lokal Palembang Aktif:</strong> Seluruh soal akan disusun menggunakan kosakata dialek santun khas Palembang (Sumatera Selatan) yang edukatif dan komunikatif, memperkuat muatan lokal dan relevansi kearifan daerah.
              </div>
            </div>
          )}
        </div>

        {/* 6. Instruksi Tambahan (Custom Instruction) */}
        <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1.5">
            <MessageSquareQuote className="w-4 h-4 text-purple-700 dark:text-purple-400" />
            Instruksi Tambahan untuk Sistem AI (Opsional)
          </label>
          <textarea
            rows={2}
            value={customInstruction}
            onChange={(e) => setExamConfig(prev => ({ ...prev, customInstruction: e.target.value }))}
            placeholder="Contoh: Gunakan bahasa santun dan kontekstual, sertakan referensi literasi digital terkini, sajikan studi kasus pemecahan masalah nyata di era kecerdasan artifisial."
            className="w-full px-3.5 py-2 text-xs sm:text-sm border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
        </div>

        {/* Tombol Aksi */}
        <div className="pt-4 flex items-center justify-between border-t border-slate-100 dark:border-slate-800">
          <button
            type="button"
            onClick={onPrevStep}
            className="px-4 py-2 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
          >
            &larr; Kembali ke Langkah 1
          </button>

          <button
            type="button"
            disabled={isGenerating || totalQuestions === 0}
            onClick={onStartGenerate}
            className={`px-6 py-3 rounded-xl font-bold text-sm text-white shadow-md flex items-center gap-2 transition-all ${
              isGenerating || totalQuestions === 0
                ? 'bg-slate-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-maroon-800 via-purple-700 to-indigo-800 hover:from-maroon-900 hover:to-indigo-900 shadow-purple-500/25 active:scale-98'
            }`}
          >
            {isGenerating ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Memproses Pembuatan Soal & Dokumen...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Mulai Pembuatan Otomatis ({totalQuestions} Soal)</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
}
