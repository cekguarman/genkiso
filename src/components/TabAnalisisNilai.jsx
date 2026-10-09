import React from 'react';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend, 
  PointElement, 
  LineElement, 
  ArcElement,
  Filler
} from 'chart.js';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import { 
  Award, 
  AlertCircle, 
  CheckCircle2, 
  FileSpreadsheet, 
  TrendingUp, 
  BookX
} from 'lucide-react';
import { exportAnalysisToExcel } from '../services/exportService';

// Registrasi komponen Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

export default function TabAnalisisNilai({ 
  examConfig, 
  questions, 
  analysisData, 
  studentsWithScores 
}) {
  if (!analysisData) {
    return (
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-10 text-center border border-purple-100 dark:border-purple-900/40 transition-colors">
        <AlertCircle className="w-10 h-10 text-slate-400 mx-auto mb-2" />
        <p className="text-sm text-slate-600 dark:text-slate-300">Silakan muat data siswa terlebih dahulu di tab Analisis Butir Soal.</p>
      </div>
    );
  }

  const {
    sampleSize,
    kkm,
    passRate,
    passedCount,
    failedCount,
    passedStudents,
    failedStudents,
    weakTopics,
    sortedStudents
  } = analysisData;

  // 1. Data Distribusi Skor Siswa (Histogram Interval: 0-40, 41-60, 61-70, 71-80, 81-90, 91-100)
  const intervals = [
    { label: '0 - 40', min: 0, max: 40, count: 0 },
    { label: '41 - 60', min: 41, max: 60, count: 0 },
    { label: '61 - 70', min: 61, max: 70, count: 0 },
    { label: '71 - 80', min: 71, max: 80, count: 0 },
    { label: '81 - 90', min: 81, max: 90, count: 0 },
    { label: '91 - 100', min: 91, max: 100, count: 0 },
  ];

  sortedStudents.forEach(std => {
    const g = std.finalGrade;
    const match = intervals.find(i => g >= i.min && g <= i.max);
    if (match) match.count++;
  });

  const barChartData = {
    labels: intervals.map(i => i.label),
    datasets: [
      {
        label: 'Jumlah Siswa',
        data: intervals.map(i => i.count),
        backgroundColor: intervals.map(i => (i.max < kkm ? '#ef4444' : '#9333ea')),
        borderRadius: 6,
      },
    ],
  };

  // 2. Data Garis Distribusi Skor Individu
  const lineChartData = {
    labels: sortedStudents.map((_, idx) => `S${idx + 1}`),
    datasets: [
      {
        label: 'Nilai Siswa (Urutan Peringkat)',
        data: sortedStudents.map(s => s.finalGrade),
        borderColor: '#a855f7',
        backgroundColor: 'rgba(168, 85, 247, 0.15)',
        tension: 0.3,
        fill: true,
        pointRadius: 3,
      },
      {
        label: `Batas KKM (${kkm})`,
        data: sortedStudents.map(() => kkm),
        borderColor: '#ef4444',
        borderDash: [5, 5],
        pointRadius: 0,
        fill: false,
      }
    ],
  };

  // 3. Doughnut Ketuntasan
  const doughnutData = {
    labels: ['Tuntas (Lulus KKM)', 'Belum Tuntas (Remedial)'],
    datasets: [
      {
        data: [passedCount, failedCount],
        backgroundColor: ['#10b981', '#ef4444'],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-xl border border-purple-100 dark:border-purple-900/40 shadow-2xs flex flex-wrap items-center justify-between gap-4 transition-colors">
        <div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            Analisis Nilai, Ketuntasan Belajar & Program Tindak Lanjut
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Kriteria Ketuntasan Minimal (KKM): <strong className="text-purple-900 dark:text-purple-300">{kkm}</strong> | Total Siswa: <strong className="text-purple-900 dark:text-purple-300">{sampleSize}</strong>
          </p>
        </div>

        <button
          onClick={() => exportAnalysisToExcel(examConfig, analysisData, sortedStudents, questions)}
          className="px-4 py-2 text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg shadow-xs flex items-center gap-1.5 transition-colors"
        >
          <FileSpreadsheet className="w-4 h-4" />
          <span>Ekspor Rekap & Remedial ke Excel</span>
        </button>
      </div>

      {/* Visualisasi Grafik: Sebaran Nilai & Ketuntasan */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Grafik Batang Sebaran Skor */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-5 rounded-xl border border-purple-100 dark:border-purple-900/40 shadow-2xs transition-colors">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-white flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-purple-700 dark:text-purple-400" />
              Grafik Sebaran Frekuensi Nilai Kelas
            </h4>
            <span className="text-[11px] text-slate-500 dark:text-slate-400">
              Merah = Di bawah KKM ({kkm})
            </span>
          </div>
          <div className="h-64">
            <Bar 
              data={barChartData} 
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                  x: {
                    grid: { color: 'rgba(148, 163, 184, 0.1)' },
                    ticks: { color: '#94a3b8' }
                  },
                  y: { 
                    beginAtZero: true, 
                    ticks: { stepSize: 1, color: '#94a3b8' },
                    grid: { color: 'rgba(148, 163, 184, 0.1)' }
                  }
                }
              }} 
            />
          </div>
        </div>

        {/* Doughnut Ketuntasan */}
        <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-purple-100 dark:border-purple-900/40 shadow-2xs flex flex-col justify-between transition-colors">
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-white mb-1 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              Ketuntasan Belajar Klasikal
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
              Persentase ketercapaian kompetensi
            </p>
          </div>
          
          <div className="h-44 flex items-center justify-center relative">
            <Doughnut 
              data={doughnutData} 
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: { 
                  legend: { 
                    position: 'bottom',
                    labels: { color: '#94a3b8', font: { size: 11 } }
                  } 
                }
              }} 
            />
          </div>

          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 text-center text-xs mt-2">
            <div>
              <div className="font-bold text-emerald-600 dark:text-emerald-400 text-lg">{passRate}%</div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">Tuntas ({passedCount})</div>
            </div>
            <div>
              <div className="font-bold text-red-600 dark:text-red-400 text-lg">{Number((100 - passRate).toFixed(1))}%</div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">Remedial ({failedCount})</div>
            </div>
          </div>
        </div>
      </div>

      {/* Grafik Garis Sebaran Seluruh Siswa Terhadap Garis KKM */}
      <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-purple-100 dark:border-purple-900/40 shadow-2xs transition-colors">
        <h4 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-white mb-2">
          Kurva Peringkat Skor Siswa Terhadap Garis Ambang KKM ({kkm})
        </h4>
        <div className="h-56">
          <Line 
            data={lineChartData} 
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: { 
                legend: { 
                  position: 'top',
                  labels: { color: '#94a3b8', font: { size: 11 } }
                } 
              },
              scales: {
                x: {
                  grid: { color: 'rgba(148, 163, 184, 0.1)' },
                  ticks: { color: '#94a3b8' }
                },
                y: { 
                  min: 0, 
                  max: 100,
                  grid: { color: 'rgba(148, 163, 184, 0.1)' },
                  ticks: { color: '#94a3b8' }
                }
              }
            }} 
          />
        </div>
      </div>

      {/* MATERI SPESIFIK YANG PALING BANYAK BELUM DIKUASAI */}
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-purple-100 dark:border-purple-900/40 shadow-2xs p-5 transition-colors">
        <div className="flex items-center gap-2 mb-2">
          <BookX className="w-5 h-5 text-red-600 dark:text-red-400" />
          <h4 className="text-sm font-bold text-slate-900 dark:text-white">
            Diagnosis AI: Materi Spesifik yang Belum Dikuasai Klasikal
          </h4>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
          Sistem secara otomatis menghitung persentase daya serap per materi/lingkup pembelajaran untuk menentukan materi yang memerlukan remidiasi pembelajaran:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {weakTopics.map((item, idx) => (
            <div 
              key={idx} 
              className={`p-3.5 rounded-xl border transition-all ${
                item.masteryRate < 60 
                  ? 'border-red-200 dark:border-red-900/50 bg-red-50/60 dark:bg-red-950/25' 
                  : (item.masteryRate < 75 ? 'border-amber-200 dark:border-amber-900/50 bg-amber-50/60 dark:bg-amber-950/25' : 'border-emerald-200 dark:border-emerald-900/50 bg-emerald-50/50 dark:bg-emerald-950/25')
              }`}
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="font-bold text-slate-900 dark:text-white text-xs">
                  {item.topic}
                </span>
                <span className={`px-2 py-0.5 rounded text-[11px] font-black ${
                  item.masteryRate < 60 
                    ? 'bg-red-200 dark:bg-red-950 text-red-800 dark:text-red-300 border border-red-300 dark:border-red-800' 
                    : 'bg-amber-200 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800'
                }`}>
                  Daya Serap: {item.masteryRate}%
                </span>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-300 mb-2">
                Total butir uji: {item.totalQuestions} soal | Total respon tepat: {item.totalCorrect} dari {item.totalPossible}
              </p>
              <div className="text-[11px] font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900/90 p-2.5 rounded-lg border border-slate-200 dark:border-slate-700">
                <span className="text-purple-800 dark:text-purple-300 font-bold">Rekomendasi Tindak Lanjut: </span>
                {item.masteryRate < 60 
                  ? 'Perlu pembelajaran ulang (re-teaching) dengan metode tutor sebaya atau praktikum kontekstual.'
                  : 'Diberikan latihan soal penguatan konsep dan pendalaman studi kasus.'}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DAFTAR SISWA REMEDIAL & PENGAYAAN */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Siswa Butuh Remedial */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-red-200 dark:border-red-900/50 shadow-2xs overflow-hidden transition-colors">
          <div className="p-4 bg-red-50 dark:bg-red-950/40 border-b border-red-200 dark:border-red-900/50 flex items-center justify-between">
            <h4 className="text-xs sm:text-sm font-bold text-red-900 dark:text-red-200 flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-red-600 dark:text-red-400" />
              Daftar Siswa Pembelajaran Remedial ({failedCount} Siswa)
            </h4>
            <span className="text-[11px] font-bold text-red-700 dark:text-red-400">Nilai &lt; {kkm}</span>
          </div>

          <div className="max-h-72 overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800 text-xs">
            {failedStudents.length === 0 ? (
              <div className="p-6 text-center text-slate-500 dark:text-slate-400">
                Luar biasa! Seluruh peserta didik telah mencapai nilai di atas KKM.
              </div>
            ) : (
              failedStudents.map((std, idx) => (
                <div key={std.id} className="p-3 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 text-slate-400 dark:text-slate-500 font-semibold">{idx + 1}.</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">{std.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-black text-red-600 dark:text-red-400 text-sm">{std.finalGrade}</span>
                    <span className="text-[10px] bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800 px-2 py-0.5 rounded font-bold">
                      Remedial
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Siswa Tuntas (Pengayaan) */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-emerald-200 dark:border-emerald-900/50 shadow-2xs overflow-hidden transition-colors">
          <div className="p-4 bg-emerald-50 dark:bg-emerald-950/40 border-b border-emerald-200 dark:border-emerald-900/50 flex items-center justify-between">
            <h4 className="text-xs sm:text-sm font-bold text-emerald-900 dark:text-emerald-200 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              Daftar Siswa Tuntas & Pengayaan ({passedCount} Siswa)
            </h4>
            <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400">Nilai &ge; {kkm}</span>
          </div>

          <div className="max-h-72 overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800 text-xs">
            {passedStudents.map((std, idx) => (
              <div key={std.id} className="p-3 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors">
                <div className="flex items-center gap-2.5">
                  <span className="w-5 text-slate-400 dark:text-slate-500 font-semibold">{idx + 1}.</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{std.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-black text-emerald-600 dark:text-emerald-400 text-sm">{std.finalGrade}</span>
                  <span className="text-[10px] bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 px-2 py-0.5 rounded font-bold">
                    Tuntas
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
