import React from 'react';
import { TableProperties } from 'lucide-react';
import { getLanguageLabel } from '../data/curriculumData';

export default function TabKisiKisi({ examConfig, questions }) {
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
          <div className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-0.5 uppercase">
            KISI-KISI PENULISAN SOAL ASESMEN SUMATIF
          </div>
          <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
            Kurikulum: {actualKurikulum} | Mata Pelajaran: {actualMapel} | {examConfig.fase} - {examConfig.kelas} | Bahasa: {getLanguageLabel(examConfig.languageConfig)}
          </div>
        </div>

        {/* Tabel Kisi-kisi */}
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse border border-slate-300 dark:border-slate-700">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 font-bold">
                <th className="border border-slate-300 dark:border-slate-700 p-2 text-center w-10">No.</th>
                <th className="border border-slate-300 dark:border-slate-700 p-2 w-48">Capaian Pembelajaran (CP)</th>
                <th className="border border-slate-300 dark:border-slate-700 p-2 w-36">Materi Pokok</th>
                <th className="border border-slate-300 dark:border-slate-700 p-2">Indikator Soal</th>
                <th className="border border-slate-300 dark:border-slate-700 p-2 text-center w-24">Level Kognitif</th>
                <th className="border border-slate-300 dark:border-slate-700 p-2 text-center w-36">Elemen Karakter</th>
                <th className="border border-slate-300 dark:border-slate-700 p-2 text-center w-28">Bentuk Soal</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {questions.map((q) => (
                <tr key={q.no} className="hover:bg-slate-50 dark:hover:bg-slate-800/60">
                  <td className="border border-slate-300 dark:border-slate-700 p-2 text-center font-bold text-slate-700 dark:text-slate-300">
                    {q.no}
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-2 text-slate-800 dark:text-slate-200 leading-snug">
                    {q.capaianPembelajaran}
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-2 font-semibold text-slate-900 dark:text-white leading-snug">
                    {q.materi}
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-2 text-slate-700 dark:text-slate-300 leading-relaxed">
                    {q.indikator}
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-2 text-center font-bold text-slate-800 dark:text-slate-200">
                    <span className="px-2 py-0.5 rounded bg-purple-50 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                      {q.levelKognitif}
                    </span>
                    <div className="text-[10px] text-slate-400 dark:text-slate-500 font-normal mt-0.5">{q.difficulty}</div>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-2 text-center">
                    <span className="inline-block px-2 py-1 rounded text-[11px] font-semibold bg-purple-50 dark:bg-purple-950/60 text-purple-900 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                      {q.elemenIntegrasi || '-'}
                    </span>
                  </td>
                  <td className="border border-slate-300 dark:border-slate-700 p-2 text-center font-medium text-slate-700 dark:text-slate-300">
                    <div>{q.typeName}</div>
                    {q.language && q.language !== 'id' && (
                      <span className="inline-block mt-0.5 px-1.5 py-0.5 rounded text-[9px] font-bold bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                        {q.language === 'en' ? 'English' : (q.language === 'ar' ? 'العربية' : (q.language === 'fr' ? 'Français' : (q.language === 'palembang' ? 'Pelembang' : q.language)))}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Tanda Tangan Pengesahan (Bersih Rapi) */}
        <div className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-700 grid grid-cols-2 text-xs text-slate-700 dark:text-slate-300">
          <div>
            <p>Mengetahui,<br />Kepala Sekolah / Waka Kurikulum,</p>
            <div className="h-16"></div>
            <p className="font-bold underline text-slate-900 dark:text-white">............................................................</p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">NIP. .....................................................</p>
          </div>
          <div className="text-right">
            <p>Dibuat Oleh,<br />Guru Pengampu Mata Pelajaran,</p>
            <div className="h-16"></div>
            <p className="font-bold underline text-slate-900 dark:text-white">{examConfig.namaGuru}</p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">NIP. .....................................................</p>
          </div>
        </div>

      </div>
    </div>
  );
}
