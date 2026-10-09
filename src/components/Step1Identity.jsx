import React, { useEffect, useState } from 'react';
import { 
  User, 
  School, 
  BookOpen, 
  Layers, 
  GraduationCap, 
  Sparkles, 
  Heart, 
  Check, 
  AlertCircle,
  GitBranch,
  Target,
  RefreshCw,
  ChevronDown,
  ChevronUp,
  Calendar,
  Clock
} from 'lucide-react';
import { 
  FASE_LIST, 
  JENJANG_OPTIONS, 
  getKelasByFase, 
  getKurikulumByFase, 
  ELEMEN_KBC, 
  ELEMEN_MERDEKA_8_DIMENSI,
  MATA_PELAJARAN_SUGGESTIONS,
  formatHariTanggal 
} from '../data/curriculumData';
import { generateCP_TP_ATP } from '../services/pedagogyService';

export default function Step1Identity({ examConfig, setExamConfig, onNextStep, apiKey }) {
  const {
    namaGuru,
    namaInstitusi,
    jenjang,
    fase,
    kelas,
    kurikulum,
    kurikulumCustom,
    mataPelajaran,
    mataPelajaranCustom,
    topikCapaian,
    tanggalUjian,
    hariTanggalCustom,
    alokasiWaktu,
    capaianPembelajaran,
    tujuanPembelajaran = [],
    alurTujuanPembelajaran = [],
    selectedElements = []
  } = examConfig;

  const [isGeneratingPedagogy, setIsGeneratingPedagogy] = useState(false);
  const [showPedagogyDetail, setShowPedagogyDetail] = useState(true);

  // Daftar kelas & kurikulum dinamis berdasarkan Fase
  const availableKelas = getKelasByFase(fase);
  const availableKurikulum = getKurikulumByFase(fase);

  // Jika fase berganti dan kelas sebelumnya tidak ada dalam daftar yang valid, otomatis sesuaikan
  useEffect(() => {
    if (!availableKelas.includes(kelas)) {
      setExamConfig(prev => ({ ...prev, kelas: availableKelas[0] }));
    }
  }, [fase, availableKelas, kelas, setExamConfig]);

  // Jika kurikulum sebelumnya tidak ada dalam daftar kurikulum yang valid untuk fase ini, sesuaikan
  useEffect(() => {
    if (!availableKurikulum.includes(kurikulum)) {
      setExamConfig(prev => ({ ...prev, kurikulum: availableKurikulum[0] }));
    }
  }, [fase, availableKurikulum, kurikulum, setExamConfig]);

  // Otomatis sinkronkan CP, TP, dan ATP saat topik, fase, atau mapel berubah (dengan debounce)
  useEffect(() => {
    if (!topikCapaian || topikCapaian.trim() === '') return;

    const timer = setTimeout(async () => {
      setIsGeneratingPedagogy(true);
      try {
        const ped = await generateCP_TP_ATP({
          fase,
          kelas,
          kurikulum,
          mataPelajaran,
          mataPelajaranCustom,
          topik: topikCapaian,
          apiKey
        });
        setExamConfig(prev => ({
          ...prev,
          capaianPembelajaran: ped.capaianPembelajaran,
          tujuanPembelajaran: ped.tujuanPembelajaran,
          alurTujuanPembelajaran: ped.alurTujuanPembelajaran
        }));
      } catch (err) {
        console.warn('Error auto-generating pedagogy:', err);
      } finally {
        setIsGeneratingPedagogy(false);
      }
    }, 700);

    return () => clearTimeout(timer);
  }, [topikCapaian, fase, kelas, mataPelajaran, mataPelajaranCustom, kurikulum, apiKey, setExamConfig]);

  // Manual Trigger Sinkronisasi CP / TP / ATP
  const handleManualSyncPedagogy = async () => {
    setIsGeneratingPedagogy(true);
    try {
      const ped = await generateCP_TP_ATP({
        fase,
        kelas,
        kurikulum,
        mataPelajaran,
        mataPelajaranCustom,
        topik: topikCapaian,
        apiKey
      });
      setExamConfig(prev => ({
        ...prev,
        capaianPembelajaran: ped.capaianPembelajaran,
        tujuanPembelajaran: ped.tujuanPembelajaran,
        alurTujuanPembelajaran: ped.alurTujuanPembelajaran
      }));
    } finally {
      setIsGeneratingPedagogy(false);
    }
  };

  // Toggle seleksi elemen kurikulum
  const handleToggleElement = (elementLabel) => {
    if (selectedElements.includes(elementLabel)) {
      setExamConfig(prev => ({
        ...prev,
        selectedElements: prev.selectedElements.filter(e => e !== elementLabel)
      }));
    } else {
      setExamConfig(prev => ({
        ...prev,
        selectedElements: [...prev.selectedElements, elementLabel]
      }));
    }
  };

  const isKBC = kurikulum.includes('Cinta') || kurikulum.includes('KBC');
  const isMerdeka = kurikulum.includes('Merdeka');

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xs border border-purple-200/70 dark:border-purple-900/40 overflow-hidden transition-colors">
      {/* Header Langkah (Purple & Maroon) */}
      <div className="bg-gradient-to-r from-maroon-50 via-purple-50/70 to-purple-100/50 dark:from-maroon-950/40 dark:via-purple-950/30 dark:to-slate-900 border-b border-purple-200/70 dark:border-purple-900/40 p-5 sm:p-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-maroon-800 to-purple-800 text-white flex items-center justify-center font-bold text-base shadow-sm">
            1
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              Langkah 1: Identitas & Hierarki Kurikulum
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Profil penyusun, jenjang, fase, kurikulum, serta auto-generasi CP, TP, & ATP oleh AI
            </p>
          </div>
        </div>
      </div>

      <div className="p-5 sm:p-6 space-y-6">
        {/* Bagian 1: Identitas Guru & Satuan Pendidikan */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1.5">
              <User className="w-4 h-4 text-maroon-700 dark:text-purple-400" />
              Nama Guru Pengampu / Penyusun
            </label>
            <input
              type="text"
              value={namaGuru}
              onChange={(e) => setExamConfig(prev => ({ ...prev, namaGuru: e.target.value }))}
              placeholder="Contoh: Armansyah, S.Kom, M.Pd, Gr."
              className="w-full px-3.5 py-2.5 text-sm border border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1.5">
              <School className="w-4 h-4 text-maroon-700 dark:text-purple-400" />
              Nama Institusi / Satuan Pendidikan
            </label>
            <input
              type="text"
              value={namaInstitusi}
              onChange={(e) => setExamConfig(prev => ({ ...prev, namaInstitusi: e.target.value }))}
              placeholder="Contoh: SMAN Sumatera Selatan"
              className="w-full px-3.5 py-2.5 text-sm border border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Jadwal & Waktu Pelaksanaan Ujian (Hari / Tanggal & Alokasi Waktu) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-slate-100 dark:border-slate-800">
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-maroon-700 dark:text-purple-400" />
                Hari / Tanggal Pelaksanaan Ujian
              </label>
              {/* Badge Preview Hari & Tanggal Otomatis */}
              <span className="text-[11px] font-bold text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/70 border border-purple-200 dark:border-purple-800 px-2 py-0.5 rounded-md">
                {formatHariTanggal(tanggalUjian || new Date().toISOString().split('T')[0], hariTanggalCustom)}
              </span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div>
                <input
                  type="date"
                  value={tanggalUjian || ''}
                  onChange={(e) => setExamConfig(prev => ({ ...prev, tanggalUjian: e.target.value }))}
                  className="w-full px-3 py-2 text-xs sm:text-sm border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none cursor-pointer"
                  title="Pilih tanggal ujian menggunakan kalender"
                />
                <span className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 block">
                  Date picker kalender (konversi nama hari otomatis)
                </span>
              </div>
              <div>
                <input
                  type="text"
                  value={hariTanggalCustom || ''}
                  onChange={(e) => setExamConfig(prev => ({ ...prev, hariTanggalCustom: e.target.value }))}
                  placeholder="Atau teks custom (cth: 6 - 8 Okt 2025)"
                  className="w-full px-3 py-2 text-xs sm:text-sm border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  title="Ketik manual jika ingin format khusus atau rentang hari"
                />
                <span className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 block">
                  Opsional: Kustom teks jika rentang hari
                </span>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-maroon-700 dark:text-purple-400" />
              Alokasi Waktu Pengerjaan
            </label>
            <input
              type="text"
              value={alokasiWaktu || ''}
              onChange={(e) => setExamConfig(prev => ({ ...prev, alokasiWaktu: e.target.value }))}
              placeholder="Contoh: 90 Menit"
              className="w-full px-3.5 py-2.5 text-sm border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
            <span className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 block">
              Format durasi yang dicetak di lembar naskah soal (default: 90 Menit)
            </span>
          </div>
        </div>

        {/* Bagian 2: Jenjang, Fase, dan Tingkat/Kelas */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-slate-100 dark:border-slate-800">
          {/* Jenjang */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-purple-700 dark:text-purple-400" />
              Jenjang Pendidikan
            </label>
            <select
              value={jenjang}
              onChange={(e) => setExamConfig(prev => ({ ...prev, jenjang: e.target.value }))}
              className="w-full px-3.5 py-2.5 text-sm border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none font-medium"
            >
              {JENJANG_OPTIONS.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
          </div>

          {/* Fase Pembelajaran (Dropdown A, B, C, D, E, F) */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-purple-700 dark:text-purple-400" />
              Fase Pembelajaran
            </label>
            <select
              value={fase}
              onChange={(e) => setExamConfig(prev => ({ ...prev, fase: e.target.value }))}
              className="w-full px-3.5 py-2.5 text-sm border border-purple-300 dark:border-purple-700 bg-purple-50/70 dark:bg-purple-950/40 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none font-bold text-purple-900 dark:text-purple-200"
            >
              {FASE_LIST.map((f) => (
                <option key={f.id} value={f.id}>{f.label}</option>
              ))}
            </select>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 block">
              Pilihan kelas & kurikulum disesuaikan otomatis
            </span>
          </div>

          {/* Tingkat / Kelas (Dinamis sesuai fase terpilih) */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-maroon-700 dark:text-purple-400" />
              Tingkat / Kelas
            </label>
            <select
              value={kelas}
              onChange={(e) => setExamConfig(prev => ({ ...prev, kelas: e.target.value }))}
              className="w-full px-3.5 py-2.5 text-sm border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none font-bold"
            >
              {availableKelas.map((k) => (
                <option key={k} value={k}>{k}</option>
              ))}
            </select>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 block">
              Fase {fase} ({availableKelas.length} pilihan kelas)
            </span>
          </div>
        </div>

        {/* Bagian 3: Kurikulum Dinamis & Opsi Lainnya */}
        <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-500" />
            Kurikulum Pembelajaran (Tersinkronisasi dengan Fase {fase})
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <select
              value={kurikulum}
              onChange={(e) => setExamConfig(prev => ({ ...prev, kurikulum: e.target.value }))}
              className="w-full px-3.5 py-2.5 text-sm border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none font-medium"
            >
              {availableKurikulum.map((kur) => (
                <option key={kur} value={kur}>{kur}</option>
              ))}
            </select>

            {/* Input Tambahan Jika User Memilih "Lainnya" */}
            {kurikulum === 'Lainnya' && (
              <div>
                <input
                  type="text"
                  value={kurikulumCustom}
                  onChange={(e) => setExamConfig(prev => ({ ...prev, kurikulumCustom: e.target.value }))}
                  placeholder="Ketikkan nama kurikulum spesifik..."
                  className="w-full px-3.5 py-2.5 text-sm border border-purple-400 dark:border-purple-600 bg-purple-50/40 dark:bg-slate-800 text-slate-800 dark:text-white rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none font-medium"
                  required
                />
              </div>
            )}
          </div>
        </div>

        {/* Bagian 4: Mata Pelajaran & Topik Capaian Pembelajaran */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-slate-100 dark:border-slate-800">
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Mata Pelajaran (Default: Informatika)
            </label>
            <div className="space-y-2">
              <select
                value={MATA_PELAJARAN_SUGGESTIONS.includes(mataPelajaran) ? mataPelajaran : 'Lainnya'}
                onChange={(e) => {
                  if (e.target.value === 'Lainnya') {
                    setExamConfig(prev => ({ ...prev, mataPelajaran: 'Lainnya' }));
                  } else {
                    setExamConfig(prev => ({ ...prev, mataPelajaran: e.target.value, mataPelajaranCustom: '' }));
                  }
                }}
                className="w-full px-3.5 py-2.5 text-sm border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none font-semibold"
              >
                {MATA_PELAJARAN_SUGGESTIONS.map((mapel) => (
                  <option key={mapel} value={mapel}>{mapel}</option>
                ))}
                <option value="Lainnya">-- Mata Pelajaran Lainnya (Ketik Manual) --</option>
              </select>

              {(!MATA_PELAJARAN_SUGGESTIONS.includes(mataPelajaran) || mataPelajaran === 'Lainnya') && (
                <input
                  type="text"
                  value={mataPelajaranCustom}
                  onChange={(e) => setExamConfig(prev => ({ ...prev, mataPelajaranCustom: e.target.value }))}
                  placeholder="Ketikkan nama mata pelajaran..."
                  className="w-full px-3.5 py-2 text-sm border border-purple-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
              )}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                Topik / Lingkup Materi Ujian
              </label>
              <button
                type="button"
                onClick={handleManualSyncPedagogy}
                disabled={isGeneratingPedagogy}
                className="text-[11px] font-bold text-maroon-700 dark:text-purple-400 hover:underline flex items-center gap-1"
                title="Sinkronkan ulang CP, TP & ATP"
              >
                <RefreshCw className={`w-3 h-3 ${isGeneratingPedagogy ? 'animate-spin' : ''}`} />
                <span>AI Auto-Generate CP/TP</span>
              </button>
            </div>
            <textarea
              rows={3}
              value={topikCapaian}
              onChange={(e) => setExamConfig(prev => ({ ...prev, topikCapaian: e.target.value }))}
              placeholder="Contoh: Berpikir Komputasional"
              className="w-full px-3.5 py-2 text-xs sm:text-sm border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
            <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 block">
              💡 Saat Anda mengetik topik, AI otomatis menganalisis dan menghasilkan CP, TP, & ATP sesuai Fase {fase} dan {kelas}.
            </span>
          </div>
        </div>

        {/* ======================================================== */}
        {/* FITUR BARU: PANEL CP, TP & ALUR PEMBELAJARAN (ATP) DARI AI */}
        {/* ======================================================== */}
        <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
          <div className="bg-gradient-to-r from-purple-50/70 via-maroon-50/60 to-purple-50/50 dark:from-slate-800/80 dark:to-slate-800/40 border border-purple-200/80 dark:border-purple-900/60 rounded-xl p-4">
            <div className="flex items-center justify-between cursor-pointer" onClick={() => setShowPedagogyDetail(!showPedagogyDetail)}>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-maroon-700 to-purple-700 text-white flex items-center justify-center font-bold">
                  <Target className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span>Capaian Pembelajaran (CP), TP & Alur Pembelajaran (ATP)</span>
                    <span className="bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                      AI Generated
                    </span>
                  </h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Otomatis sinkron dengan Fase {fase}, {kelas}, dan topik "{topikCapaian}"
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleManualSyncPedagogy();
                  }}
                  className="px-2.5 py-1 text-xs font-semibold bg-white dark:bg-slate-700 border border-purple-200 dark:border-slate-600 rounded-lg text-purple-800 dark:text-purple-300 hover:bg-purple-50 shadow-2xs flex items-center gap-1"
                >
                  <RefreshCw className={`w-3 h-3 ${isGeneratingPedagogy ? 'animate-spin' : ''}`} />
                  <span>Perbarui</span>
                </button>
                {showPedagogyDetail ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
              </div>
            </div>

            {showPedagogyDetail && (
              <div className="mt-4 pt-3 border-t border-purple-200/60 dark:border-purple-900/40 space-y-3.5 text-xs">
                {/* 1. Capaian Pembelajaran (CP) */}
                <div>
                  <span className="font-bold text-purple-900 dark:text-purple-300 block mb-1">
                    1. Rumusan Capaian Pembelajaran (CP):
                  </span>
                  <div className="p-3 bg-white dark:bg-slate-900/90 rounded-lg border border-purple-200/70 dark:border-purple-900/50 text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                    {isGeneratingPedagogy ? (
                      <span className="text-slate-400 italic">Sedang menyusun rumusan Capaian Pembelajaran...</span>
                    ) : (
                      capaianPembelajaran
                    )}
                  </div>
                </div>

                {/* 2. Tujuan Pembelajaran (TP) */}
                <div>
                  <span className="font-bold text-purple-900 dark:text-purple-300 block mb-1">
                    2. Tujuan Pembelajaran (TP) Terukur:
                  </span>
                  <div className="space-y-1.5">
                    {tujuanPembelajaran && tujuanPembelajaran.map((tp, idx) => (
                      <div key={idx} className="flex items-start gap-2 p-2 bg-white dark:bg-slate-900/90 rounded-lg border border-purple-200/50 dark:border-purple-900/40 text-slate-700 dark:text-slate-300">
                        <span className="w-4 h-4 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span className="leading-snug">{tp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Alur Tujuan Pembelajaran (ATP) */}
                <div>
                  <span className="font-bold text-maroon-900 dark:text-purple-300 block mb-1 flex items-center gap-1.5">
                    <GitBranch className="w-3.5 h-3.5 text-maroon-700 dark:text-purple-400" />
                    3. Alur Tujuan Pembelajaran (ATP / Alur Tahapan):
                  </span>
                  <div className="space-y-1.5">
                    {alurTujuanPembelajaran && alurTujuanPembelajaran.map((atp, idx) => (
                      <div key={idx} className="p-2 bg-white dark:bg-slate-900/90 rounded-lg border border-purple-200/50 dark:border-purple-900/40 text-slate-700 dark:text-slate-300 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-maroon-600 dark:bg-purple-500 shrink-0"></span>
                        <span className="font-semibold text-slate-800 dark:text-slate-200">{atp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bagian 5: INTEGRASI ELEMEN KURIKULUM (KBC / 8 DIMENSI PROFIL LULUSAN MERDEKA) */}
        <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-maroon-600 dark:text-purple-400" />
                Integrasi Elemen Karakter Pembelajaran oleh AI
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Pilih elemen yang akan dihubungkan ke stimulus, indikator, kisi-kisi, dan kartu soal
              </p>
            </div>
            <div className="text-xs text-maroon-800 dark:text-purple-300 font-semibold bg-maroon-50 dark:bg-purple-950/50 px-2.5 py-1 rounded-lg border border-maroon-200 dark:border-purple-800 inline-block self-start sm:self-auto">
              Terpilih: {selectedElements.length} Elemen
            </div>
          </div>

          {/* Jika Kurikulum Berbasis Cinta (KBC) */}
          {isKBC && (
            <div className="bg-purple-50/40 dark:bg-slate-800/50 border border-purple-200 dark:border-purple-900/60 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2 text-purple-950 dark:text-purple-200 font-bold text-xs">
                <span>5 Elemen Kurikulum Berbasis Cinta (KBC):</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {ELEMEN_KBC.map((item) => {
                  const isChecked = selectedElements.includes(item.label);
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleToggleElement(item.label)}
                      className={`flex items-center gap-2.5 p-2.5 rounded-lg border text-left text-xs transition-all ${
                        isChecked
                          ? 'bg-maroon-800 text-white border-maroon-800 shadow-sm'
                          : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-purple-200 dark:border-slate-700 hover:border-purple-400'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border ${
                        isChecked ? 'bg-white text-maroon-800 border-white' : 'border-slate-300 dark:border-slate-600'
                      }`}>
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span className="font-semibold">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Jika Kurikulum Merdeka */}
          {isMerdeka && (
            <div className="bg-purple-50/40 dark:bg-slate-800/50 border border-purple-200 dark:border-purple-900/60 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2 text-purple-950 dark:text-purple-200 font-bold text-xs">
                <span>8 Dimensi Profil Lulusan Kurikulum Merdeka:</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                {ELEMEN_MERDEKA_8_DIMENSI.map((item) => {
                  const isChecked = selectedElements.includes(item.label);
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleToggleElement(item.label)}
                      className={`flex items-center gap-2.5 p-2.5 rounded-lg border text-left text-xs transition-all ${
                        isChecked
                          ? 'bg-purple-800 text-white border-purple-800 shadow-sm'
                          : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-purple-200 dark:border-slate-700 hover:border-purple-400'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border ${
                        isChecked ? 'bg-white text-purple-800 border-white' : 'border-slate-300 dark:border-slate-600'
                      }`}>
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span className="font-semibold leading-snug">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Jika Kurikulum Internasional / Lainnya */}
          {!isKBC && !isMerdeka && (
            <div className="bg-slate-50 dark:bg-slate-800/50 border border-purple-100 dark:border-slate-700 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2 text-slate-800 dark:text-slate-200 font-bold text-xs">
                <span>Karakter & Profil Peserta Didik ({kurikulum}):</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                {['Inquiring & Critical Thinking', 'Knowledgeable & Reflective', 'Ethical & Caring', 'Global Citizenship'].map((attr) => {
                  const isChecked = selectedElements.includes(attr);
                  return (
                    <button
                      key={attr}
                      type="button"
                      onClick={() => handleToggleElement(attr)}
                      className={`flex items-center gap-2 p-2.5 rounded-lg border text-left text-xs transition-all ${
                        isChecked
                          ? 'bg-purple-800 text-white border-purple-800 shadow-sm'
                          : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-purple-300'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border ${
                        isChecked ? 'bg-white text-purple-800 border-white' : 'border-slate-300'
                      }`}>
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span className="font-semibold">{attr}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Navigasi ke Langkah 2 */}
        <div className="pt-4 flex items-center justify-between border-t border-slate-100 dark:border-slate-800">
          <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
            <AlertCircle className="w-4 h-4 text-purple-700 dark:text-purple-400" />
            <span>Fase ({fase}), Kelas ({kelas}) & CP otomatis tersinkron</span>
          </div>
          <button
            type="button"
            onClick={onNextStep}
            className="px-5 py-2.5 bg-gradient-to-r from-maroon-800 to-purple-800 hover:from-maroon-900 hover:to-purple-900 text-white rounded-xl font-bold text-sm shadow-sm flex items-center gap-2 transition-all"
          >
            <span>Lanjut ke Langkah 2: Konfigurasi Soal</span>
            <span>&rarr;</span>
          </button>
        </div>

      </div>
    </div>
  );
}
