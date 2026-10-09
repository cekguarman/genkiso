import React from 'react';
import { CreditCard } from 'lucide-react';

export default function TabKartuSoal({ examConfig, questions }) {
  const actualKurikulum = examConfig.kurikulum === 'Lainnya' ? examConfig.kurikulumCustom : examConfig.kurikulum;
  const actualMapel = examConfig.mataPelajaran === 'Lainnya' ? examConfig.mataPelajaranCustom : examConfig.mataPelajaran;

  return (
    <div className="space-y-4">
      {/* Cards List */}
      <div className="max-w-4xl mx-auto space-y-6">
        {questions.map((q) => {
          const kunci = q.correctKeys ? q.correctKeys.join(', ') : (q.correctKey || '-');

          return (
            <div 
              key={q.no} 
              className="bg-white dark:bg-slate-900 rounded-xl border-2 border-slate-300 dark:border-slate-700 shadow-sm p-6 document-sheet page-break transition-colors"
            >
              {/* Kop Kartu */}
              <div className="text-center pb-3 mb-4 border-b-2 border-slate-900 dark:border-slate-100">
                <h3 className="text-base font-extrabold text-slate-900 dark:text-white uppercase">
                  {examConfig.namaInstitusi}
                </h3>
                <div className="text-xs font-bold text-slate-700 dark:text-slate-200 uppercase">
                  KARTU SOAL ASESMEN SUMATIF TAHUN AJARAN 2025/2026
                </div>
              </div>

              {/* Header Info Grid */}
              <div className="grid grid-cols-2 gap-4 text-xs border border-slate-300 dark:border-slate-700 p-3 rounded-lg bg-slate-50/70 dark:bg-slate-800/80 mb-4">
                <div>
                  <div className="mb-1"><span className="font-semibold text-slate-500 dark:text-slate-400">Satuan Pendidikan:</span> <span className="font-bold text-slate-800 dark:text-slate-100">{examConfig.namaInstitusi}</span></div>
                  <div className="mb-1"><span className="font-semibold text-slate-500 dark:text-slate-400">Mata Pelajaran:</span> <span className="font-bold text-slate-800 dark:text-slate-100">{actualMapel}</span></div>
                  <div><span className="font-semibold text-slate-500 dark:text-slate-400">Kelas / Fase:</span> <span className="font-bold text-slate-800 dark:text-slate-100">{examConfig.kelas} / {examConfig.fase}</span></div>
                </div>
                <div>
                  <div className="mb-1"><span className="font-semibold text-slate-500 dark:text-slate-400">Kurikulum:</span> <span className="font-bold text-slate-800 dark:text-slate-100">{actualKurikulum}</span></div>
                  <div className="mb-1"><span className="font-semibold text-slate-500 dark:text-slate-400">Penyusun:</span> <span className="font-bold text-slate-800 dark:text-slate-100">{examConfig.namaGuru}</span></div>
                  <div>
                    <span className="font-semibold text-slate-500 dark:text-slate-400">Bentuk Soal:</span> <span className="font-bold text-purple-700 dark:text-purple-400">{q.typeName}</span>
                    {q.language && q.language !== 'id' && (
                      <span className="ml-2 px-1.5 py-0.5 rounded text-[10px] font-bold bg-purple-50 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                        {q.language === 'en' ? '🇬🇧 English' : (q.language === 'ar' ? '🇸🇦 العربية' : (q.language === 'fr' ? '🇫🇷 Français' : (q.language === 'palembang' ? '🏛️ Baso Pelembang' : q.language)))}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Rincian Spesifikasi Kartu Soal */}
              <table className="w-full text-xs border-collapse border border-slate-300 dark:border-slate-700 mb-4">
                <tbody>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-700 p-2 font-bold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 w-1/3">
                      Capaian Pembelajaran (CP)
                    </td>
                    <td className="border border-slate-300 dark:border-slate-700 p-2 text-slate-800 dark:text-slate-200">
                      {q.capaianPembelajaran}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-700 p-2 font-bold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                      Materi Pokok
                    </td>
                    <td className="border border-slate-300 dark:border-slate-700 p-2 font-semibold text-slate-900 dark:text-white">
                      {q.materi}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-700 p-2 font-bold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                      Indikator Soal
                    </td>
                    <td className="border border-slate-300 dark:border-slate-700 p-2 text-slate-800 dark:text-slate-200">
                      {q.indikator}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-700 p-2 font-bold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                      Level Kognitif & Kesukaran
                    </td>
                    <td className="border border-slate-300 dark:border-slate-700 p-2">
                      <span className="font-bold text-purple-800 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/60 px-2 py-0.5 rounded border border-purple-200 dark:border-purple-800">
                        {q.levelKognitif} ({q.levelLabel})
                      </span>
                      <span className="ml-2 text-slate-600 dark:text-slate-400 font-medium">Tingkat Kesulitan: <strong className="text-slate-800 dark:text-slate-200">{q.difficulty}</strong></span>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-700 p-2 font-bold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                      Elemen Karakter Terintegrasi
                    </td>
                    <td className="border border-slate-300 dark:border-slate-700 p-2">
                      <span className="font-semibold text-purple-900 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/60 px-2 py-0.5 rounded border border-purple-200 dark:border-purple-800">
                        {q.elemenIntegrasi || '-'}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-700 p-2 font-bold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                      Sumber / Bahan Acuan
                    </td>
                    <td className="border border-slate-300 dark:border-slate-700 p-2 text-slate-600 dark:text-slate-400 italic">
                      {q.sumber}
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* Rumusan Butir Soal */}
              <div className="border border-slate-300 dark:border-slate-700 rounded-lg p-4 bg-slate-50/70 dark:bg-slate-800/50 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wide">
                    RUMUSAN BUTIR SOAL NOMOR: {q.no}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                    Bentuk: {q.typeName}
                  </span>
                </div>

                {q.stimulus && (
                  <div className="text-xs italic text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 p-2.5 rounded border border-slate-200 dark:border-slate-700 mb-2">
                    {q.stimulus}
                  </div>
                )}

                {/* SVG Visual */}
                {q.hasVisual && q.svgVisual && (
                  <div 
                    className="my-2 overflow-hidden flex justify-center p-2 rounded bg-white dark:bg-slate-950/60 border border-slate-200 dark:border-slate-700"
                    dangerouslySetInnerHTML={{ __html: q.svgVisual }}
                  />
                )}

                <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white whitespace-pre-line mb-3">
                  {q.questionText}
                </div>

                {/* Options */}
                {q.options && q.options.length > 0 && (
                  <div className="space-y-1.5 pt-1 text-xs">
                    {q.options.map(opt => (
                      <div key={opt.key} className="flex items-start gap-2">
                        <span className="w-5 h-5 rounded border border-slate-300 dark:border-slate-600 font-bold flex items-center justify-center shrink-0 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200">
                          {opt.key}
                        </span>
                        <span className="pt-0.5 text-slate-800 dark:text-slate-200">{opt.text}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Kunci Jawaban & Rubrik */}
              <table className="w-full text-xs border-collapse border border-slate-300 dark:border-slate-700">
                <tbody>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-700 p-2 font-bold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 w-1/3">
                      Kunci Jawaban
                    </td>
                    <td className="border border-slate-300 dark:border-slate-700 p-2 font-black text-purple-700 dark:text-purple-300 text-sm">
                      {kunci}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-700 p-2 font-bold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                      Pedoman Penskoran
                    </td>
                    <td className="border border-slate-300 dark:border-slate-700 p-2 text-slate-700 dark:text-slate-300 whitespace-pre-line leading-relaxed">
                      {q.scoringGuide}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-700 p-2 font-bold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                      Pembahasan Ilmiah
                    </td>
                    <td className="border border-slate-300 dark:border-slate-700 p-2 text-slate-700 dark:text-slate-300 leading-relaxed">
                      {q.explanation}
                    </td>
                  </tr>
                </tbody>
              </table>

            </div>
          );
        })}
      </div>
    </div>
  );
}
