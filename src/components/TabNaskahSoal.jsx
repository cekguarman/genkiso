import React from 'react';
import { formatHariTanggal, getLanguageLabel } from '../data/curriculumData';

export default function TabNaskahSoal({ examConfig, questions }) {
  const actualKurikulum = examConfig.kurikulum === 'Lainnya' ? examConfig.kurikulumCustom : examConfig.kurikulum;
  const actualMapel = examConfig.mataPelajaran === 'Lainnya' ? examConfig.mataPelajaranCustom : examConfig.mataPelajaran;

  return (
    <div className="space-y-4">
      {/* Document Sheet (A4 Styled Paper) */}
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 sm:p-10 document-sheet max-w-4xl mx-auto transition-colors">
        {/* Kop Surat Resmi */}
        <div className="text-center pb-4 mb-6 border-b-2 border-slate-900 dark:border-slate-100">
          <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-1">
            PEMERINTAH DAERAH PROVINSI / DINAS PENDIDIKAN
          </div>
          <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white uppercase tracking-tight">
            {examConfig.namaInstitusi}
          </h2>
          <div className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 mt-1">
            PENILAIAN / ASESMEN SUMATIF TAHUN AJARAN 2025/2026
          </div>
          <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 font-medium">
            Kurikulum: {actualKurikulum} | {examConfig.fase} - {examConfig.kelas}
          </div>
        </div>

        {/* Tabel Identitas Ujian (Border 0 Bersih) */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-1.5 text-xs text-slate-800 dark:text-slate-200 bg-slate-50/70 dark:bg-slate-800/80 p-3.5 rounded-lg border border-slate-200 dark:border-slate-700 mb-6">
          <div className="flex">
            <span className="w-32 font-semibold text-slate-600 dark:text-slate-400">Mata Pelajaran</span>
            <span className="font-bold text-slate-900 dark:text-white">: {actualMapel}</span>
          </div>
          <div className="flex">
            <span className="w-32 font-semibold text-slate-600 dark:text-slate-400">Hari / Tanggal</span>
            <span className="font-bold text-purple-900 dark:text-purple-300">: {formatHariTanggal(examConfig.tanggalUjian, examConfig.hariTanggalCustom)}</span>
          </div>
          <div className="flex">
            <span className="w-32 font-semibold text-slate-600 dark:text-slate-400">Tingkat / Kelas</span>
            <span className="font-bold text-slate-900 dark:text-white">: {examConfig.kelas}</span>
          </div>
          <div className="flex">
            <span className="w-32 font-semibold text-slate-600 dark:text-slate-400">Alokasi Waktu</span>
            <span className="font-medium">: {examConfig.alokasiWaktu || '90 Menit'}</span>
          </div>
          <div className="flex">
            <span className="w-32 font-semibold text-slate-600 dark:text-slate-400">Guru Pengampu</span>
            <span className="font-medium">: {examConfig.namaGuru}</span>
          </div>
          <div className="flex">
            <span className="w-32 font-semibold text-slate-600 dark:text-slate-400">Bahasa Pengantar</span>
            <span className="font-semibold text-purple-900 dark:text-purple-300">: {getLanguageLabel(examConfig.languageConfig)}</span>
          </div>
          <div className="flex">
            <span className="w-32 font-semibold text-slate-600 dark:text-slate-400">Jumlah Butir</span>
            <span className="font-medium">: {questions.length} Butir Soal</span>
          </div>
        </div>

        {/* Petunjuk Umum */}
        <div className="text-xs text-slate-600 dark:text-slate-400 mb-6 pb-3 border-b border-slate-200 dark:border-slate-700 leading-relaxed">
          <span className="font-bold text-slate-900 dark:text-slate-100 block mb-1">PETUNJUK UMUM:</span>
          <ol className="list-decimal list-inside space-y-0.5">
            <li>Periksa dan bacalah lembar soal dengan teliti sebelum Anda menjawabnya.</li>
            <li>Laporkan kepada pengawas ujian jika terdapat tulisan yang kurang jelas, rusak, atau jumlah soal tidak lengkap.</li>
            <li>Dahulukan menjawab soal-soal yang Anda anggap mudah.</li>
            <li>Periksalah seluruh pekerjaan Anda sebelum diserahkan kepada pengawas ujian.</li>
          </ol>
        </div>

        {/* Daftar Soal */}
        <div className="space-y-8">
          {questions.map((q) => (
            <div 
              key={q.no} 
              dir={q.language === 'ar' ? 'rtl' : 'ltr'}
              className="text-sm leading-relaxed pb-6 border-b border-slate-100 dark:border-slate-800 last:border-0"
            >
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300 border border-purple-200 dark:border-purple-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {q.no}
                </span>

                <div className="space-y-3 w-full">
                  {/* Language Indicator Badge if mixed/foreign */}
                  {q.language && q.language !== 'id' && (
                    <div>
                      <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-purple-50 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                        {q.language === 'en' ? '🇬🇧 English Language' : (q.language === 'ar' ? '🇸🇦 اللغة العربية الفصحى' : (q.language === 'fr' ? '🇫🇷 Langue Française' : (q.language === 'palembang' ? '🏛️ Baso Pelembang' : q.language)))}
                      </span>
                    </div>
                  )}
                  {/* Stimulus Contextual */}
                  {q.stimulus && (
                    <div className="bg-slate-50 dark:bg-slate-800/70 p-3 rounded-lg border-l-4 border-purple-600 text-xs sm:text-sm text-slate-700 dark:text-slate-300 italic">
                      {q.stimulus}
                    </div>
                  )}

                  {/* Visual Illustration (SVG) */}
                  {q.hasVisual && q.svgVisual && (
                    <div 
                      className="my-3 overflow-hidden flex justify-center p-2 rounded-lg bg-white dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800"
                      dangerouslySetInnerHTML={{ __html: q.svgVisual }}
                    />
                  )}

                  {/* Question Stem */}
                  <div className="font-semibold text-slate-900 dark:text-slate-100 whitespace-pre-line text-sm sm:text-base">
                    {q.questionText}
                  </div>

                  {/* Options for Multiple Choice */}
                  {q.options && q.options.length > 0 && (
                    <div className="space-y-2 mt-2 pt-1">
                      {q.options.map((opt) => (
                        <div key={opt.key} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                          <span className="w-6 h-6 rounded-md border border-slate-300 dark:border-slate-600 font-bold flex items-center justify-center shrink-0 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200">
                            {opt.key}
                          </span>
                          <span className="pt-0.5">{opt.text}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Essay Answer Box Area */}
                  {q.type === 'esai' && (
                    <div className="mt-3 p-4 rounded-lg border-2 border-dashed border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/40 min-h-[90px] text-xs text-slate-500 dark:text-slate-400 italic">
                      Lembar / Ruang Jawaban Uraian Peserta Didik:
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pengesahan Guru Pengampu di Kanan Bawah */}
        <div className="mt-12 pt-6 border-t border-slate-300 dark:border-slate-700 flex justify-end text-xs text-slate-700 dark:text-slate-300">
          <div className="text-center w-64">
            <p>Guru Mata Pelajaran,</p>
            <div className="h-16"></div>
            <p className="font-bold underline text-slate-900 dark:text-white">{examConfig.namaGuru}</p>
          </div>
        </div>

      </div>
    </div>
  );
}
