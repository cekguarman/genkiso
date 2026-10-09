import React, { useState, useEffect } from 'react';
import { 
  X, 
  Clock, 
  ChevronLeft, 
  ChevronRight, 
  AlertCircle, 
  RotateCcw,
  Award,
  ListFilter,
  Play,
  SlidersHorizontal,
  CheckCircle2
} from 'lucide-react';
import confetti from 'canvas-confetti';

// Generator cerdas untuk memperluas bank soal hingga batas maksimum 50 butir soal
const buildExamPool = (sourceQuestions, targetCount, config) => {
  const count = Math.min(50, Math.max(1, targetCount));
  if (sourceQuestions.length >= count) {
    return sourceQuestions.slice(0, count);
  }

  const pool = [...sourceQuestions];
  const topicBank = [
    {
      q: 'Manakah dari skenario berikut yang merepresentasikan penerapan teknik Dekomposisi dalam berpikir komputasional?',
      opts: [
        { key: 'A', text: 'Memecah program aplikasi kasir menjadi sub-modul inventaris barang, kalkulasi harga, dan cetak struk pembayaran.' },
        { key: 'B', text: 'Mengabaikan jenis font teks saat merancang skema basis data relasional.' },
        { key: 'C', text: 'Menghitung waktu eksekusi kode program per milidetik.' },
        { key: 'D', text: 'Menggandakan seluruh berkas kode program ke server cadangan.' },
        { key: 'E', text: 'Membuat tata letak antarmuka pengguna tanpa memikirkan fungsi tombol.' }
      ],
      ans: 'A',
      exp: 'Dekomposisi adalah proses memecah permasalahan kompleks menjadi komponen-komponen sub-masalah yang lebih kecil dan terkelola.',
      diff: 'Mudah',
      lvl: 'C2'
    },
    {
      q: 'Pada struktur data Tumpukan (Stack), elemen yang pertama kali dimasukkan akan dikeluarkan paling akhir (LIFO). Manakah implementasi fitur berikut yang beroperasi berdasarkan prinsip Stack?',
      opts: [
        { key: 'A', text: 'Fitur Undo dan Redo pada aplikasi text editor' },
        { key: 'B', text: 'Antrean pencetakan dokumen di spooler printer kantor' },
        { key: 'C', text: 'Pemutaran daftar lagu berurutan pada pemutar musik digital' },
        { key: 'D', text: 'Sistem panggilan antrean nomor registrasi pasien rumah sakit' },
        { key: 'E', text: 'Pengiriman pesan email masuk berurutan berdasarkan waktu pengiriman' }
      ],
      ans: 'A',
      exp: 'Fitur Undo/Redo menyimpan riwayat aksi pengguna dalam struktur data Stack (LIFO), di mana aksi terakhir yang dilakukan akan dibatalkan pertama kali.',
      diff: 'Sedang',
      lvl: 'C3'
    },
    {
      q: 'Diberikan larik (array) bilangan bulat: [29, 10, 14, 37, 13]. Jika diurutkan secara menaik (ascending) menggunakan Selection Sort pada putaran pertama, elemen terkecil akan ditukar dengan elemen berindeks ke-...',
      opts: [
        { key: 'A', text: '0 (elemen pertama)' },
        { key: 'B', text: '1 (elemen kedua)' },
        { key: 'C', text: '2 (elemen ketiga)' },
        { key: 'D', text: '4 (elemen terakhir)' },
        { key: 'E', text: 'Tidak ada penukaran posisi' }
      ],
      ans: 'A',
      exp: 'Pada Selection Sort putaran pertama, sistem mencari nilai minimum di seluruh larik (angka 10) lalu menukarnya ke posisi paling awal (indeks 0).',
      diff: 'Sedang',
      lvl: 'C3'
    },
    {
      q: 'Mengapa algoritma Binary Search memiliki kompleksitas waktu yang jauh lebih efisien O(log n) dibandingkan Linear Search O(n)?',
      opts: [
        { key: 'A', text: 'Binary Search membagi dua ruang pencarian secara berulang pada setiap tahap pembandingan.' },
        { key: 'B', text: 'Binary Search tidak memerlukan memori tambahan saat eksekusi.' },
        { key: 'C', text: 'Binary Search dapat mencari data tanpa perlu data diurutkan terlebih dahulu.' },
        { key: 'D', text: 'Binary Search bekerja dengan cara memeriksa elemen dari dua sisi secara bersamaan.' },
        { key: 'E', text: 'Binary Search hanya dapat memproses tipe data string singkat.' }
      ],
      ans: 'A',
      exp: 'Dengan membagi ruang pencarian menjadi setengah pada setiap langkah, jumlah iterasi berkurang secara logaritmik terhadap ukuran data n.',
      diff: 'Sulit',
      lvl: 'C4'
    },
    {
      q: 'Perhatikan tahapan berikut: (1) Menghilangkan detail warna mobil, (2) Hanya mencatat nomor plat dan tipe kendaraan, (3) Memetakan kepadatan jalan tol. Aktivitas nomor (1) dan (2) adalah perwujudan dari...',
      opts: [
        { key: 'A', text: 'Abstraksi' },
        { key: 'B', text: 'Dekomposisi' },
        { key: 'C', text: 'Pengenalan Pola' },
        { key: 'D', text: 'Perancangan Algoritma' },
        { key: 'E', text: 'Evaluasi Efisiensi' }
      ],
      ans: 'A',
      exp: 'Abstraksi berfokus pada informasi penting yang relevan dan menyaring detail rincian yang tidak esensial.',
      diff: 'Mudah',
      lvl: 'C2'
    },
    {
      q: 'Struktur data Antrean (Queue) beroperasi dengan prinsip FIFO (First In First Out). Sistem manakah berikut yang paling akurat merefleksikan kerja Queue?',
      opts: [
        { key: 'A', text: 'Sistem antrean penjadwalan prosesor (CPU scheduling) FIFO' },
        { key: 'B', text: 'Tumpukan piring bersih di meja prasmanan' },
        { key: 'C', text: 'Daftar panggilan telepon tak terjawab di ponsel' },
        { key: 'D', text: 'Tombol kembali (Back) pada peramban web' },
        { key: 'E', text: 'Penyimpanan tumpukan kontainer di dermaga pelabuhan' }
      ],
      ans: 'A',
      exp: 'Antrean proses CPU FIFO melayani instruksi yang datang terlebih dahulu untuk diproses pertama kali sesuai konsep Queue.',
      diff: 'Sedang',
      lvl: 'C3'
    },
    {
      q: 'Sebuah algoritma rekursif harus memiliki kondisi basis (base condition). Apa konsekuensi utama jika kondisi basis tidak pernah tercapai?',
      opts: [
        { key: 'A', text: 'Terjadi Stack Overflow error akibat pemanggilan fungsi tanpa henti' },
        { key: 'B', text: 'Output program akan bernilai nol secara otomatis' },
        { key: 'C', text: 'Data masukan akan terhapus dari media penyimpanan' },
        { key: 'D', text: 'Kecepatan pemrosesan komputer meningkat dua kali lipat' },
        { key: 'E', text: 'Compiler akan mengabaikan sisa fungsi lain' }
      ],
      ans: 'A',
      exp: 'Ketiadaan kondisi basis menyebabkan rekursi tak terbatas (infinite recursion) yang menghabiskan alokasi memori tumpukan panggilan (call stack overflow).',
      diff: 'Sulit',
      lvl: 'C4'
    },
    {
      q: 'Dalam graf (graph), algoritma Breadth-First Search (BFS) digunakan untuk menjelajahi simpul (node). Struktur data pendukung apakah yang lazim digunakan untuk mengimplementasikan BFS?',
      opts: [
        { key: 'A', text: 'Queue (Antrean)' },
        { key: 'B', text: 'Stack (Tumpukan)' },
        { key: 'C', text: 'Priority Tree tunggal' },
        { key: 'D', text: 'Array 1 dimensi statis' },
        { key: 'E', text: 'Hash Table sederhana' }
      ],
      ans: 'A',
      exp: 'BFS menelusuri simpul tetangga level demi level menggunakan Queue untuk memastikan urutan kunjungan FIFO.',
      diff: 'Sulit',
      lvl: 'C4'
    }
  ];

  let addIndex = 0;
  while (pool.length < count) {
    const tmpl = topicBank[addIndex % topicBank.length];
    const itemNo = pool.length + 1;
    pool.push({
      no: itemNo,
      type: 'pg_ae',
      typeName: 'Pilihan Ganda',
      materi: config.topikCapaian || 'Berpikir Komputasional',
      capaianPembelajaran: config.capaianPembelajaran,
      indikator: `Menganalisis prinsip dan penerapan komputasional pada butir simulasi ke-${itemNo}.`,
      levelKognitif: tmpl.lvl,
      levelLabel: 'Aplikasi Komputasional',
      difficulty: tmpl.diff,
      stimulus: `Diberikan stimulus pemecahan masalah informatika dan logika komputasi butir ${itemNo}:`,
      questionText: tmpl.q,
      options: tmpl.opts,
      correctKey: tmpl.ans,
      correctKeys: null,
      explanation: tmpl.exp,
      scoringGuide: 'Jawaban tepat bernilai 1 poin, salah bernilai 0.',
      elemenIntegrasi: 'Penalaran Kritis',
      sumber: 'Bank Instrumen CBT Standar Kemendikdasmen'
    });
    addIndex++;
  }

  return pool.slice(0, count).map((item, idx) => ({ ...item, no: idx + 1 }));
};

export default function ModalSimulatorTKA({ examConfig, questions, onClose }) {
  // Mode Setup Ujian vs Mode Sedang Mengerjakan
  const [isConfiguring, setIsConfiguring] = useState(true);
  const [customQuestionCount, setCustomQuestionCount] = useState(() => Math.min(50, Math.max(10, questions.length || 10)));
  const [customDurationMinutes, setCustomDurationMinutes] = useState(() => Math.max(10, Math.min(120, Math.min(50, Math.max(10, questions.length || 10)) * 2)));
  const [isRandomize, setIsRandomize] = useState(false);

  // Soal yang diujikan setelah dikustomisasi
  const [activeExamQuestions, setActiveExamQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [doubtful, setDoubtful] = useState({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [isExamFinished, setIsExamFinished] = useState(false);
  const [showConfirmFinish, setShowConfirmFinish] = useState(false);

  // Inisialisasi Kustomisasi Ujian
  const handleStartCustomExam = () => {
    const targetCount = Math.min(50, Math.max(1, customQuestionCount));
    let pool = buildExamPool(questions, targetCount, examConfig);
    if (isRandomize) {
      pool.sort(() => Math.random() - 0.5);
    }
    const finalSelected = pool.slice(0, targetCount).map((q, idx) => ({ ...q, no: idx + 1 }));
    setActiveExamQuestions(finalSelected);
    setTimeLeft(customDurationMinutes * 60);
    setCurrentIndex(0);
    setUserAnswers({});
    setDoubtful({});
    setIsExamFinished(false);
    setIsConfiguring(false);
  };

  // Timer Countdown
  useEffect(() => {
    if (isConfiguring || isExamFinished) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          finishExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isConfiguring, isExamFinished]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const currentQ = activeExamQuestions[currentIndex] || questions[0];

  const handleSelectAnswer = (qNo, answerKey) => {
    setUserAnswers(prev => ({
      ...prev,
      [qNo]: answerKey
    }));
  };

  const handleToggleComplexAnswer = (qNo, answerKey) => {
    setUserAnswers(prev => {
      const existing = prev[qNo] || [];
      const updated = existing.includes(answerKey)
        ? existing.filter(k => k !== answerKey)
        : [...existing, answerKey];
      return { ...prev, [qNo]: updated };
    });
  };

  const toggleDoubtful = () => {
    setDoubtful(prev => ({
      ...prev,
      [currentQ.no]: !prev[currentQ.no]
    }));
  };

  const finishExam = () => {
    setIsExamFinished(true);
    setShowConfirmFinish(false);
    confetti({
      particleCount: 100,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  // Hitung Skor Akhir CBT
  let totalScore = 0;
  let maxScore = 0;
  activeExamQuestions.forEach(q => {
    const ans = userAnswers[q.no];
    if (q.type === 'pg_ad' || q.type === 'pg_ae' || q.type === 'benar_salah') {
      maxScore += 1;
      if (ans === q.correctKey) totalScore += 1;
    } else if (q.type.includes('kompleks')) {
      maxScore += 2;
      if (Array.isArray(ans) && q.correctKeys) {
        const correctChosen = ans.filter(k => q.correctKeys.includes(k)).length;
        const wrongChosen = ans.filter(k => !q.correctKeys.includes(k)).length;
        if (correctChosen === q.correctKeys.length && wrongChosen === 0) totalScore += 2;
        else if (correctChosen > 0 && wrongChosen === 0) totalScore += 1;
      }
    } else if (q.type === 'esai') {
      maxScore += 4;
      if (typeof ans === 'string' && ans.trim().length > 15) totalScore += 3;
    }
  });

  const finalPercentage = maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0;
  const answeredCount = Object.keys(userAnswers).filter(k => {
    const v = userAnswers[k];
    return Array.isArray(v) ? v.length > 0 : Boolean(v);
  }).length;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex flex-col justify-between overflow-hidden text-slate-900 dark:text-white">
      {/* CBT Top Bar */}
      <header className="bg-slate-900 border-b border-purple-900/50 text-white px-4 py-3 shrink-0">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-maroon-700 to-purple-700 flex items-center justify-center font-black text-sm text-white">
              TKA
            </div>
            <div>
              <h2 className="text-sm font-bold tracking-tight">
                Simulator TKA & Asesmen Standar Nasional CBT
              </h2>
              <p className="text-[11px] text-slate-400">
                {examConfig.mataPelajaran} • {examConfig.kelas} ({examConfig.fase})
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Timer (Hanya saat ujian berjalan) */}
            {!isConfiguring && !isExamFinished && (
              <div className="flex items-center gap-2 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
                <Clock className="w-4 h-4 text-amber-400" />
                <span className="font-mono text-sm font-bold text-amber-300">
                  {formatTime(timeLeft)}
                </span>
              </div>
            )}

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300"
              title="Tutup Simulator"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* CBT Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 overflow-y-auto">
        {/* LAYAR 1: KUSTOMISASI SIMULASI TKA */}
        {isConfiguring ? (
          <div className="max-w-lg mx-auto bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-purple-200 dark:border-purple-900 shadow-2xl space-y-6">
            <div className="text-center space-y-2">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-maroon-700 to-purple-700 text-white flex items-center justify-center mx-auto shadow-md">
                <SlidersHorizontal className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Kustomisasi Parameter Simulator TKA
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Atur jumlah butir soal dan alokasi waktu simulasi sesuai kebutuhan Anda
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {/* Pilihan Jumlah Soal (Maksimal 50 Soal) */}
              <div className="bg-purple-50/50 dark:bg-slate-800/60 p-4 rounded-2xl border border-purple-100 dark:border-slate-700">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                    Jumlah Soal yang Diujikan
                  </span>
                  <span className="text-sm font-extrabold text-purple-800 dark:text-purple-300">
                    {customQuestionCount} dari Maksimal 50 Butir
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="50"
                  value={customQuestionCount}
                  onChange={(e) => {
                    const count = Math.min(50, Math.max(1, parseInt(e.target.value) || 1));
                    setCustomQuestionCount(count);
                    setCustomDurationMinutes(Math.max(5, Math.min(120, count * 2)));
                  }}
                  className="w-full accent-purple-700 mt-2"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>1 Soal</span>
                  <span>Maksimal 50 Soal</span>
                </div>
              </div>

              {/* Pilihan Alokasi Waktu */}
              <div className="bg-purple-50/50 dark:bg-slate-800/60 p-4 rounded-2xl border border-purple-100 dark:border-slate-700">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                    Durasi Waktu Ujian
                  </span>
                  <span className="text-sm font-extrabold text-maroon-700 dark:text-purple-300">
                    {customDurationMinutes} Menit
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="120"
                  step="5"
                  value={customDurationMinutes}
                  onChange={(e) => setCustomDurationMinutes(parseInt(e.target.value) || 10)}
                  className="w-full accent-maroon-700 mt-2"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>5 Menit</span>
                  <span>120 Menit</span>
                </div>
              </div>

              {/* Opsi Acak Soal */}
              <label className="flex items-center gap-2.5 p-3 rounded-xl border border-slate-200 dark:border-slate-700 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50">
                <input
                  type="checkbox"
                  checked={isRandomize}
                  onChange={(e) => setIsRandomize(e.target.checked)}
                  className="w-4 h-4 rounded text-purple-700 focus:ring-purple-500"
                />
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Acak urutan nomor butir soal (*Shuffle*)
                </span>
              </label>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={handleStartCustomExam}
                className="w-full py-3 bg-gradient-to-r from-maroon-800 via-purple-700 to-indigo-800 hover:from-maroon-900 hover:to-indigo-900 text-white font-bold text-sm rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all active:scale-98"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Mulai Simulasi Sekarang ({customQuestionCount} Soal)</span>
              </button>
            </div>
          </div>
        ) : !isExamFinished ? (
          /* LAYAR 2: INTERFASI CBT BERJALAN */
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-full">
            {/* Left Column: Question Area (3 Cols) */}
            <div className="lg:col-span-3 flex flex-col justify-between bg-white dark:bg-slate-900 rounded-2xl border border-purple-200/80 dark:border-purple-900/50 shadow-sm p-6">
              <div>
                {/* Header Question */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900 dark:text-white text-base">
                      Soal Nomor {currentIndex + 1}
                    </span>
                    <span className="text-xs bg-purple-50 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 font-semibold px-2 py-0.5 rounded border border-purple-200 dark:border-purple-800">
                      {currentQ.typeName}
                    </span>
                  </div>
                  <span className="text-xs text-slate-400">
                    Tingkat: {currentQ.difficulty} | {currentQ.levelKognitif}
                  </span>
                </div>

                {/* Stimulus */}
                {currentQ.stimulus && (
                  <div className="bg-slate-50 dark:bg-slate-800/60 border-l-4 border-purple-700 p-3.5 rounded-lg text-xs sm:text-sm text-slate-700 dark:text-slate-300 italic mb-4 leading-relaxed">
                    {currentQ.stimulus}
                  </div>
                )}

                {/* Visual */}
                {currentQ.hasVisual && currentQ.svgVisual && (
                  <div 
                    className="my-3 overflow-hidden flex justify-center max-w-md mx-auto"
                    dangerouslySetInnerHTML={{ __html: currentQ.svgVisual }}
                  />
                )}

                {/* Question Text */}
                <div className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white mb-6 leading-relaxed whitespace-pre-line">
                  {currentQ.questionText}
                </div>

                {/* Options List */}
                {currentQ.options && currentQ.options.length > 0 && (
                  <div className="space-y-2.5">
                    {currentQ.options.map(opt => {
                      const isMulti = currentQ.type.includes('kompleks');
                      const selected = isMulti
                        ? (userAnswers[currentQ.no] || []).includes(opt.key)
                        : userAnswers[currentQ.no] === opt.key;

                      return (
                        <div
                          key={opt.key}
                          onClick={() => {
                            if (isMulti) handleToggleComplexAnswer(currentQ.no, opt.key);
                            else handleSelectAnswer(currentQ.no, opt.key);
                          }}
                          className={`p-3 rounded-xl border-2 cursor-pointer flex items-start gap-3 transition-all ${
                            selected
                              ? 'border-purple-700 bg-purple-50/60 dark:bg-purple-950/50 font-semibold text-purple-950 dark:text-purple-200'
                              : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                          }`}
                        >
                          <div className={`w-6 h-6 rounded-md flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border ${
                            selected ? 'bg-purple-700 text-white border-purple-700' : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-600'
                          }`}>
                            {opt.key}
                          </div>
                          <div className="text-xs sm:text-sm pt-0.5 leading-snug">
                            {opt.text}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Essay input */}
                {currentQ.type === 'esai' && (
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">
                      Ketikkan jawaban uraian Anda di bawah:
                    </label>
                    <textarea
                      rows={5}
                      value={userAnswers[currentQ.no] || ''}
                      onChange={(e) => handleSelectAnswer(currentQ.no, e.target.value)}
                      placeholder="Uraikan langkah pemecahan masalah dan argumentasi logis Anda..."
                      className="w-full p-3 text-xs sm:text-sm border border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    />
                  </div>
                )}
              </div>

              {/* Navigation Controls */}
              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
                <button
                  type="button"
                  disabled={currentIndex === 0}
                  onClick={() => setCurrentIndex(prev => prev - 1)}
                  className="px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Sebelumnya</span>
                </button>

                <button
                  type="button"
                  onClick={toggleDoubtful}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                    doubtful[currentQ.no]
                      ? 'bg-amber-500 border-amber-600 text-white shadow-sm'
                      : 'border-amber-400 dark:border-amber-600 bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-amber-900/40'
                  }`}
                >
                  {doubtful[currentQ.no] ? '✓ Ragu-Ragu Aktif' : 'Tandai Ragu-Ragu'}
                </button>

                {currentIndex + 1 < activeExamQuestions.length ? (
                  <button
                    type="button"
                    onClick={() => setCurrentIndex(prev => prev + 1)}
                    className="px-5 py-2 bg-purple-700 hover:bg-purple-800 text-white rounded-xl text-xs font-bold shadow-sm flex items-center gap-1.5"
                  >
                    <span>Berikutnya</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setShowConfirmFinish(true)}
                    className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-sm"
                  >
                    Selesai Ujian
                  </button>
                )}
              </div>
            </div>

            {/* Right Column: Number Grid Panel */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-purple-200/80 dark:border-purple-900/50 shadow-sm p-5 flex flex-col justify-between">
              <div>
                <div className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm mb-1 flex items-center gap-1.5">
                  <ListFilter className="w-4 h-4 text-purple-700 dark:text-purple-400" />
                  Daftar Nomor Soal
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-4">
                  Terjawab: {answeredCount} / {activeExamQuestions.length} Butir
                </p>

                {/* Grid */}
                <div className="grid grid-cols-5 gap-2">
                  {activeExamQuestions.map((q, idx) => {
                    const isAns = Boolean(userAnswers[q.no]) && (Array.isArray(userAnswers[q.no]) ? userAnswers[q.no].length > 0 : true);
                    const isDoubt = doubtful[q.no];
                    const isCurrent = idx === currentIndex;

                    let bgClass = 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700';
                    if (isDoubt) bgClass = 'bg-amber-500 text-white border-amber-600';
                    else if (isAns) bgClass = 'bg-purple-700 text-white border-purple-800 font-bold';

                    return (
                      <button
                        key={q.no}
                        type="button"
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-9 rounded-lg border text-xs font-bold transition-all relative ${bgClass} ${
                          isCurrent ? 'ring-2 ring-purple-500 ring-offset-2' : ''
                        }`}
                      >
                        {idx + 1}
                      </button>
                    );
                  })}
                </div>

                {/* Legend */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-1.5 text-[11px] text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded bg-purple-700 border border-purple-800"></span>
                    <span>Sudah Terjawab</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded bg-amber-500 border border-amber-600"></span>
                    <span>Ragu-Ragu</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded bg-slate-100 dark:bg-slate-700 border border-slate-300 dark:border-slate-600"></span>
                    <span>Belum Dijawab</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => setShowConfirmFinish(true)}
                  className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs"
                >
                  Kumpulkan Ujian
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* LAYAR 3: HASIL & REVIEW AKHIR */
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-purple-200 dark:border-purple-900 shadow-xl max-w-3xl mx-auto space-y-6">
            <div className="text-center space-y-2">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-maroon-700 to-purple-700 text-white flex items-center justify-center mx-auto shadow-md">
                <Award className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white">Hasil Simulasi TKA CBT</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Mata Pelajaran: {examConfig.mataPelajaran} | {examConfig.kelas} ({customQuestionCount} Butir Soal Terpilih)
              </p>
            </div>

            {/* Score Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="p-4 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800">
                <div className="text-xs font-semibold text-purple-700 dark:text-purple-300">Nilai Akhir (Skala 100)</div>
                <div className="text-4xl font-black text-purple-900 dark:text-purple-100 mt-1">{finalPercentage}</div>
                <div className="text-[11px] text-purple-700 dark:text-purple-300 font-bold mt-1">
                  {finalPercentage >= 75 ? 'TUNTAS KOMPETEN' : 'PERLU PENGUATAN'}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">Skor Diperoleh</div>
                <div className="text-3xl font-black text-slate-800 dark:text-slate-100 mt-1">
                  {totalScore} <span className="text-xs font-normal text-slate-400">/ {maxScore}</span>
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Akumulasi Butir Soal</div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
                <div className="text-xs font-semibold text-emerald-700 dark:text-emerald-300">Soal Dijawab</div>
                <div className="text-3xl font-black text-emerald-900 dark:text-emerald-100 mt-1">
                  {answeredCount} <span className="text-xs font-normal text-emerald-600">/ {activeExamQuestions.length}</span>
                </div>
                <div className="text-[11px] text-emerald-600 dark:text-emerald-300 mt-1">Total Soal Dikerjakan</div>
              </div>
            </div>

            {/* Review Soal & Kunci */}
            <div className="border border-purple-100 dark:border-slate-800 rounded-2xl p-4 bg-slate-50 dark:bg-slate-800/40">
              <h3 className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-3">
                Review Pembahasan Per Butir Soal:
              </h3>
              <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
                {activeExamQuestions.map((q, idx) => {
                  const studentAns = userAnswers[q.no];
                  const kunci = q.correctKeys ? q.correctKeys.join(', ') : (q.correctKey || '-');
                  return (
                    <div key={q.no} className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs shadow-2xs">
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <span className="font-bold text-slate-900 dark:text-white">
                          No. {idx + 1} ({q.typeName})
                        </span>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                          Kunci Resmi: <strong className="text-purple-700 dark:text-purple-400">{kunci}</strong>
                        </span>
                      </div>
                      <p className="text-slate-700 dark:text-slate-300 mb-2 leading-relaxed">{q.questionText}</p>
                      <div className="text-[11px] bg-purple-50/50 dark:bg-slate-800 p-2 rounded border border-purple-100 dark:border-slate-700 text-slate-600 dark:text-slate-300">
                        <strong className="text-purple-900 dark:text-purple-300">Pembahasan:</strong> {q.explanation}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setIsConfiguring(true)}
                className="px-4 py-2.5 rounded-xl text-xs font-bold border border-purple-200 dark:border-slate-700 text-purple-800 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-slate-800 flex items-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Kustomisasi Ulang</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 bg-gradient-to-r from-maroon-800 to-purple-800 hover:from-maroon-900 hover:to-purple-900 text-white font-bold text-xs rounded-xl shadow-sm"
              >
                Tutup & Kembali
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Confirmation Modal */}
      {showConfirmFinish && (
        <div className="fixed inset-0 z-60 bg-slate-950/70 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-sm w-full p-6 text-center space-y-4 shadow-2xl">
            <AlertCircle className="w-12 h-12 text-amber-500 mx-auto" />
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Konfirmasi Selesai Ujian</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Anda telah menjawab {answeredCount} dari {activeExamQuestions.length} butir soal. Yakin ingin mengakhiri tes?
              </p>
            </div>
            <div className="flex items-center gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowConfirmFinish(false)}
                className="flex-1 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                Lanjutkan Ujian
              </button>
              <button
                type="button"
                onClick={finishExam}
                className="flex-1 py-2 text-xs font-bold text-white bg-purple-700 hover:bg-purple-800 rounded-lg shadow-sm"
              >
                Ya, Selesai
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-500 text-[11px] text-center py-2 border-t border-purple-900/40">
        EduAsesmen AI • Simulator Asesmen Standar Nasional
      </footer>
    </div>
  );
}
