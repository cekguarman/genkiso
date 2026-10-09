import React, { useState } from 'react';
import { 
  BarChart3, 
  Users, 
  Sparkles, 
  AlertTriangle, 
  CheckCircle2, 
  FileSpreadsheet, 
  RotateCcw, 
  ShieldAlert, 
  BookOpen 
} from 'lucide-react';
import { exportAnalysisToExcel } from '../services/exportService';

export default function TabAnalisisSoal({ 
  examConfig, 
  questions, 
  analysisData, 
  studentsWithScores, 
  onGenerateDemoStudents,
  kkm,
  setKkm 
}) {
  const [selectedItemDetail, setSelectedItemDetail] = useState(null);

  if (!analysisData) {
    return (
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-10 text-center border border-purple-100 dark:border-purple-900/40 transition-colors">
        <Users className="w-12 h-12 text-purple-600 dark:text-purple-400 mx-auto mb-3" />
        <h3 className="text-base font-bold text-slate-800 dark:text-white mb-1">Belum Ada Data Respon Siswa</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-5">
          Klik tombol di bawah untuk menghasilkan simulasi otomatis matriks jawaban 30 siswa guna menguji reliabilitas, daya pembeda, tingkat kesukaran, dan deteksi eror kunci.
        </p>
        <button
          onClick={onGenerateDemoStudents}
          className="px-5 py-2.5 bg-gradient-to-r from-maroon-800 to-purple-800 hover:from-maroon-900 hover:to-purple-900 text-white font-bold text-xs rounded-xl shadow-md flex items-center gap-2 mx-auto transition-all"
        >
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span>Muat Simulasi Data 30 Siswa</span>
        </button>
      </div>
    );
  }

  const {
    sampleSize,
    meanGrade,
    stdDev,
    maxGrade,
    minGrade,
    kr20,
    reliabilityLabel,
    passRate,
    itemStats,
    anomalyWarnings
  } = analysisData;

  return (
    <div className="space-y-6">
      {/* Top Banner Actions & Summary */}
      <div className="bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-xl border border-purple-100 dark:border-purple-900/40 shadow-2xs flex flex-wrap items-center justify-between gap-4 transition-colors">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 flex items-center justify-center font-bold">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Analisis Butir Soal & Daya Pembeda (Item Analysis)
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Dihitung dari {sampleSize} peserta didik | Formula: Taraf Kesukaran (P), Daya Pembeda (D), Reliabilitas KR-20
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {/* Atur KKM */}
          <div className="flex items-center gap-1.5 bg-purple-50/70 dark:bg-slate-800/80 border border-purple-200 dark:border-slate-700 px-3 py-1.5 rounded-lg text-xs">
            <span className="font-semibold text-purple-900 dark:text-purple-300">KKM/KKTP:</span>
            <input
              type="number"
              min="40"
              max="100"
              value={kkm}
              onChange={(e) => setKkm(Math.max(10, Math.min(100, parseInt(e.target.value) || 75)))}
              className="w-12 text-center font-bold border border-purple-300 dark:border-slate-600 rounded bg-white dark:bg-slate-700 text-slate-900 dark:text-white py-0.5 focus:outline-none"
            />
          </div>

          <button
            onClick={onGenerateDemoStudents}
            className="px-3 py-2 text-xs font-semibold text-purple-800 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-slate-800 border border-purple-200 dark:border-slate-700 rounded-lg flex items-center gap-1.5 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Regenerasi Siswa</span>
          </button>

          <button
            onClick={() => exportAnalysisToExcel(examConfig, analysisData, studentsWithScores, questions)}
            className="px-4 py-2 text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg shadow-xs flex items-center gap-1.5 transition-colors"
          >
            <FileSpreadsheet className="w-4 h-4" />
            <span>Ekspor Laporan ke Excel (.xlsx)</span>
          </button>
        </div>
      </div>

      {/* KPI Cards: Reliabilitas KR-20, Rata-rata, Ketuntasan */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Reliabilitas KR-20 */}
        <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-purple-100 dark:border-purple-900/40 shadow-2xs transition-colors">
          <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">Reliabilitas Tes (KR-20)</div>
          <div className="text-2xl font-black text-purple-700 dark:text-purple-400">{kr20}</div>
          <div className="text-[11px] font-semibold text-slate-600 dark:text-slate-300 mt-1 flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>{reliabilityLabel}</span>
          </div>
        </div>

        {/* Nilai Rata-rata (Mean) */}
        <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-purple-100 dark:border-purple-900/40 shadow-2xs transition-colors">
          <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">Rata-rata Kelas (Mean)</div>
          <div className="text-2xl font-black text-slate-900 dark:text-white">{meanGrade}</div>
          <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
            Standar Deviasi: <strong className="text-slate-700 dark:text-slate-200">{stdDev}</strong>
          </div>
        </div>

        {/* Nilai Tertinggi & Terendah */}
        <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-purple-100 dark:border-purple-900/40 shadow-2xs transition-colors">
          <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">Rentang Nilai Siswa</div>
          <div className="text-2xl font-black text-indigo-700 dark:text-indigo-400">
            {maxGrade} <span className="text-xs font-normal text-slate-400">/ min {minGrade}</span>
          </div>
          <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
            Selisih Skor: <strong className="text-slate-700 dark:text-slate-200">{maxGrade - minGrade} Poin</strong>
          </div>
        </div>

        {/* Ketuntasan Klasikal */}
        <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-purple-100 dark:border-purple-900/40 shadow-2xs transition-colors">
          <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">Ketuntasan Belajar Klasikal</div>
          <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400">{passRate}%</div>
          <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
            {analysisData.passedCount} Tuntas | {analysisData.failedCount} Remedial
          </div>
        </div>
      </div>

      {/* DETEKSI EROR OTOMATIS (SMART ANOMALY DETECTION) */}
      {anomalyWarnings.length > 0 && (
        <div className="bg-amber-50/90 dark:bg-amber-950/30 border-2 border-amber-300 dark:border-amber-800/70 rounded-xl p-4 sm:p-5 transition-colors">
          <div className="flex items-center gap-2.5 mb-2.5 text-amber-900 dark:text-amber-300 font-bold text-sm">
            <ShieldAlert className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />
            <span>Deteksi Eror Otomatis (Smart Anomaly Detection Pada Instrumen Soal)</span>
          </div>
          <p className="text-xs text-amber-800 dark:text-amber-300/90 mb-4 leading-relaxed">
            Sistem menganalisis pola pilihan siswa kelompok atas dan bawah untuk mendeteksi potensi kunci jawaban yang tertukar, soal ambigu, atau distraktor mati:
          </p>

          <div className="space-y-2.5">
            {anomalyWarnings.map((item) => (
              <div 
                key={item.no} 
                className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-amber-200 dark:border-amber-800/60 text-xs shadow-2xs"
              >
                <div className="font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-2">
                  <span className="bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-300 border border-amber-300 dark:border-amber-800 px-2 py-0.5 rounded text-[11px] font-black">
                    Butir Soal No. {item.no}
                  </span>
                  <span className="text-slate-600 dark:text-slate-300 truncate max-w-md">{item.questionText}</span>
                </div>
                <div className="space-y-1 mt-1 pl-1">
                  {item.warnings.map((w, wIdx) => (
                    <div 
                      key={wIdx} 
                      className={`flex items-start gap-2 ${
                        w.severity === 'danger' ? 'text-red-700 dark:text-red-400 font-semibold' : 'text-amber-700 dark:text-amber-400'
                      }`}
                    >
                      <AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                      <span>{w.message}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tabel Utama Analisis Butir Soal */}
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-purple-100 dark:border-purple-900/40 shadow-xs overflow-hidden transition-colors">
        <div className="p-4 border-b border-purple-100 dark:border-purple-900/40 bg-purple-50/50 dark:bg-purple-950/40 flex items-center justify-between">
          <h4 className="text-xs sm:text-sm font-bold text-purple-950 dark:text-purple-200">
            Matriks Taraf Kesukaran (P) & Daya Pembeda (D) Per Butir Soal
          </h4>
          <span className="text-xs text-purple-700 dark:text-purple-300 font-medium">
            Klik nomor untuk melihat sebaran opsi distraktor
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold border-b border-slate-200 dark:border-slate-700">
                <th className="p-3 text-center w-12">No.</th>
                <th className="p-3">Bentuk Soal</th>
                <th className="p-3">Materi Pokok</th>
                <th className="p-3 text-center">Level</th>
                <th className="p-3 text-center">Siswa Benar</th>
                <th className="p-3 text-center">Taraf Kesukaran (P)</th>
                <th className="p-3 text-center">Daya Pembeda (D)</th>
                <th className="p-3 text-center">Status Rekomendasi</th>
                <th className="p-3 text-center">Catatan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {itemStats.map((item) => {
                const hasAnomaly = item.warnings.length > 0;
                return (
                  <tr 
                    key={item.no} 
                    className={`hover:bg-purple-50/40 dark:hover:bg-slate-800/60 cursor-pointer transition-colors ${
                      hasAnomaly ? 'bg-amber-50/40 dark:bg-amber-950/20' : ''
                    }`}
                    onClick={() => setSelectedItemDetail(item)}
                  >
                    <td className="p-3 text-center font-bold text-slate-800 dark:text-slate-200">
                      {item.no}
                    </td>
                    <td className="p-3 font-medium text-slate-700 dark:text-slate-300">
                      {item.typeName}
                    </td>
                    <td className="p-3 font-medium text-slate-900 dark:text-white max-w-[180px] truncate" title={item.materi}>
                      {item.materi}
                    </td>
                    <td className="p-3 text-center font-bold text-slate-700 dark:text-slate-300">
                      {item.levelKognitif}
                    </td>
                    <td className="p-3 text-center font-semibold text-slate-700 dark:text-slate-300">
                      {item.totalCorrect} / {sampleSize}
                    </td>
                    <td className="p-3 text-center">
                      <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${item.kesukaranBadge}`}>
                        {item.pVal} ({item.kesukaranLabel})
                      </span>
                    </td>
                    <td className="p-3 text-center">
                      <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${item.dayaPembedaBadge}`}>
                        {item.dVal} ({item.dayaPembedaLabel})
                      </span>
                    </td>
                    <td className="p-3 text-center font-semibold text-slate-800 dark:text-slate-200">
                      {item.statusSoal}
                    </td>
                    <td className="p-3 text-center">
                      {hasAnomaly ? (
                        <span className="inline-flex items-center gap-1 text-red-600 dark:text-red-400 font-bold text-[11px] bg-red-50 dark:bg-red-950/50 px-2 py-0.5 rounded-full border border-red-200 dark:border-red-800">
                          <AlertTriangle className="w-3 h-3" />
                          <span>Perlu Ditinjau</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold text-[11px]">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Valid</span>
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Detail Distribusi Pilihan Opsi */}
      {selectedItemDetail && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100 dark:border-slate-800">
              <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                Detail Sebaran Jawaban Siswa - Soal No. {selectedItemDetail.no}
              </h3>
              <button
                onClick={() => setSelectedItemDetail(null)}
                className="text-slate-400 hover:text-slate-200 font-bold text-lg"
              >
                &times;
              </button>
            </div>

            <div className="space-y-3 text-xs mb-4">
              <div>
                <span className="text-slate-500 dark:text-slate-400 font-semibold">Bentuk Soal:</span>{' '}
                <span className="font-bold text-slate-800 dark:text-slate-200">{selectedItemDetail.typeName}</span>
              </div>
              <div>
                <span className="text-slate-500 dark:text-slate-400 font-semibold">Taraf Kesukaran:</span>{' '}
                <span className="font-bold text-slate-900 dark:text-white">{selectedItemDetail.pVal} ({selectedItemDetail.kesukaranLabel})</span>
              </div>
              <div>
                <span className="text-slate-500 dark:text-slate-400 font-semibold">Daya Pembeda:</span>{' '}
                <span className="font-bold text-slate-900 dark:text-white">{selectedItemDetail.dVal} ({selectedItemDetail.dayaPembedaLabel})</span>
              </div>
              <div>
                <span className="text-slate-500 dark:text-slate-400 font-semibold">Kelompok Atas Benar:</span>{' '}
                <span className="font-bold text-purple-700 dark:text-purple-400">{selectedItemDetail.pUpper * 100}%</span> | 
                <span className="text-slate-500 dark:text-slate-400 font-semibold ml-2">Kelompok Bawah Benar:</span>{' '}
                <span className="font-bold text-slate-700 dark:text-slate-300">{selectedItemDetail.pLower * 100}%</span>
              </div>
            </div>

            {/* Sebaran Opsi */}
            {selectedItemDetail.optionDistribution && Object.keys(selectedItemDetail.optionDistribution).length > 0 && (
              <div className="border border-slate-200 dark:border-slate-700 rounded-xl p-3 bg-slate-50/60 dark:bg-slate-800/60">
                <div className="font-bold text-slate-800 dark:text-slate-200 text-xs mb-2">Frekuensi Pilihan Siswa:</div>
                <div className="space-y-1.5">
                  {Object.entries(selectedItemDetail.optionDistribution).map(([optKey, count]) => {
                    const pct = Math.round((count / sampleSize) * 100);
                    return (
                      <div key={optKey} className="flex items-center gap-2 text-xs">
                        <span className="w-6 font-bold text-slate-700 dark:text-slate-300">{optKey}</span>
                        <div className="flex-1 bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden">
                          <div 
                            className="bg-purple-600 dark:bg-purple-500 h-full rounded-full transition-all"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                        <span className="w-16 text-right font-medium text-slate-600 dark:text-slate-400">{count} siswa ({pct}%)</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="mt-5 text-right">
              <button
                onClick={() => setSelectedItemDetail(null)}
                className="px-4 py-2 bg-gradient-to-r from-maroon-800 to-purple-800 hover:from-maroon-900 hover:to-purple-900 text-white rounded-lg text-xs font-semibold shadow-xs"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Pedoman Teori Taraf Kesukaran & Daya Pembeda */}
      <div className="p-4 bg-purple-50/60 dark:bg-purple-950/30 rounded-xl border border-purple-200 dark:border-purple-900/50 text-xs text-slate-700 dark:text-slate-300 space-y-1 leading-relaxed transition-colors">
        <div className="font-bold text-purple-900 dark:text-purple-300 flex items-center gap-1.5">
          <BookOpen className="w-4 h-4 text-purple-700 dark:text-purple-400" />
          Pedoman Interpretasi Statistik Evaluasi Pendidikan:
        </div>
        <p>• <strong>Taraf Kesukaran (P):</strong> P &gt; 0.70 (Mudah), 0.30 &le; P &le; 0.70 (Sedang - Ideal), P &lt; 0.30 (Sukar).</p>
        <p>• <strong>Daya Pembeda (D):</strong> D &ge; 0.40 (Sangat Baik), 0.30 &le; D &lt; 0.40 (Baik), 0.20 &le; D &lt; 0.30 (Cukup/Revisi), D &lt; 0.20 (Buruk), D &lt; 0 (Kunci Salah / Dibuang).</p>
        <p>• <strong>Reliabilitas (KR-20):</strong> Mengukur konsistensi internal instrumen. Skor &ge; 0.70 menunjukkan instrumen asesmen sangat andal.</p>
      </div>

    </div>
  );
}
