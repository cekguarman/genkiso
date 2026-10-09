import React from 'react';
import { KeyRound, CheckCircle } from 'lucide-react';
import { getLanguageLabel } from '../data/curriculumData';

export default function TabKunciJawaban({ examConfig, questions }) {
  const actualKurikulum = examConfig.kurikulum === 'Lainnya' ? examConfig.kurikulumCustom : examConfig.kurikulum;
  const actualMapel = examConfig.mataPelajaran === 'Lainnya' ? examConfig.mataPelajaranCustom : examConfig.mataPelajaran;

  return (
    <div className="space-y-4">
      {/* Sheet Content */}
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 sm:p-10 document-sheet max-w-5xl mx-auto transition-colors">
        {/* Kop */}
        <div className="text-center pb-4 mb-6 border-b-2 border-slate-900 dark:border-slate-100">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white uppercase">
            {examConfig.namaInstitusi}
          </h2>
          <div className="text-sm font-semibold text-slate-700 dark:text-slate-200 mt-0.5">
            REKAPITULASI KUNCI JAWABAN & PEDOMAN PENILAIAN
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Mata Pelajaran: {actualMapel} | Kelas: {examConfig.kelas} ({examConfig.fase}) | Kurikulum: {actualKurikulum} | Bahasa: {getLanguageLabel(examConfig.languageConfig)}
          </div>
        </div>

        {/* Quick Answer Key Matrix for Multiple Choice */}
        <div className="mb-6 p-4 rounded-xl bg-purple-50/70 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800/60">
          <div className="text-xs font-bold text-purple-900 dark:text-purple-200 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-purple-700 dark:text-purple-400" />
            Ringkasan Cepat Kunci Pilihan Ganda & Benar-Salah
          </div>
          <div className="flex flex-wrap gap-2">
            {questions
              .filter(q => q.type !== 'esai')
              .map(q => {
                const ans = q.correctKeys ? q.correctKeys.join(',') : q.correctKey;
                return (
                  <div key={q.no} className="px-2.5 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-purple-200 dark:border-purple-800 shadow-2xs text-xs font-medium text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                    <span className="text-slate-400 dark:text-slate-500 font-bold">{q.no}.</span>
                    <span className="font-extrabold text-purple-800 dark:text-purple-300">{ans}</span>
                  </div>
                );
              })}
          </div>
        </div>

        {/* Detailed Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse border border-slate-300 dark:border-slate-700">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 font-bold">
                <th className="border border-slate-300 dark:border-slate-700 p-2.5 text-center w-12">No.</th>
                <th className="border border-slate-300 dark:border-slate-700 p-2.5 w-32">Bentuk Soal</th>
                <th className="border border-slate-300 dark:border-slate-700 p-2.5 text-center w-28">Kunci Jawaban</th>
                <th className="border border-slate-300 dark:border-slate-700 p-2.5 text-center w-24">Level</th>
                <th className="border border-slate-300 dark:border-slate-700 p-2.5">Pembahasan Ilmiah & Pedoman Penskoran</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {questions.map((q) => {
                const displayKey = q.correctKeys ? q.correctKeys.join(', ') : (q.correctKey || '-');
                return (
                  <tr key={q.no} className="hover:bg-slate-50 dark:hover:bg-slate-800/60">
                    <td className="border border-slate-300 dark:border-slate-700 p-2.5 text-center font-bold text-slate-700 dark:text-slate-300">
                      {q.no}
                    </td>
                    <td className="border border-slate-300 dark:border-slate-700 p-2.5 font-medium text-slate-800 dark:text-slate-200">
                      <div>{q.typeName}</div>
                      {q.language && q.language !== 'id' && (
                        <span className="inline-block mt-0.5 px-1.5 py-0.5 rounded text-[9px] font-bold bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                          {q.language === 'en' ? 'English' : (q.language === 'ar' ? 'العربية' : (q.language === 'fr' ? 'Français' : (q.language === 'palembang' ? 'Pelembang' : q.language)))}
                        </span>
                      )}
                    </td>
                    <td className="border border-slate-300 dark:border-slate-700 p-2.5 text-center font-black text-purple-700 dark:text-purple-300 text-sm">
                      {displayKey}
                    </td>
                    <td className="border border-slate-300 dark:border-slate-700 p-2.5 text-center font-semibold text-slate-600 dark:text-slate-300">
                      <span className="px-2 py-0.5 rounded bg-purple-50 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 border border-purple-200 dark:border-purple-800 font-bold">
                        {q.levelKognitif}
                      </span>
                      <div className="text-[10px] text-slate-400 dark:text-slate-500 mt-1">{q.difficulty}</div>
                    </td>
                    <td className="border border-slate-300 dark:border-slate-700 p-2.5 text-slate-700 dark:text-slate-300 space-y-1.5 leading-relaxed">
                      <div>
                        <strong className="text-slate-900 dark:text-white">Pembahasan:</strong> {q.explanation}
                      </div>
                      <div className="text-[11px] text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/80 p-2 rounded border border-slate-200/80 dark:border-slate-700">
                        <strong className="text-slate-700 dark:text-slate-200">Pedoman Penskoran:</strong> {q.scoringGuide}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Footer Tanda Tangan */}
        <div className="mt-10 pt-4 border-t border-slate-200 dark:border-slate-700 flex justify-end text-xs text-slate-700 dark:text-slate-300">
          <div className="text-center w-64">
            <p>Penyusun Instrumen,</p>
            <div className="h-16"></div>
            <p className="font-bold underline text-slate-900 dark:text-white">{examConfig.namaGuru}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
