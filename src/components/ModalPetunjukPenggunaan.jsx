import React, { useState } from 'react';
import { 
  X, 
  BookOpen, 
  HelpCircle, 
  FileText, 
  BarChart3, 
  Gamepad2, 
  MonitorPlay, 
  Download, 
  Sparkles, 
  CheckCircle2, 
  ChevronRight, 
  Layers, 
  Languages, 
  BrainCircuit, 
  FileSpreadsheet, 
  Printer, 
  Settings, 
  Search,
  Key
} from 'lucide-react';

export default function ModalPetunjukPenggunaan({ onClose, onOpenApiKey }) {
  const [activeTab, setActiveTab] = useState('pembuatan_soal');
  const [searchQuery, setSearchQuery] = useState('');

  const navItems = [
    { id: 'pembuatan_soal', label: '1. Pembuatan Soal & AI', icon: FileText },
    { id: 'spesifikasi_soal', label: '2. Bentuk, Bloom & Bahasa', icon: BrainCircuit },
    { id: 'dokumen_ekspor', label: '3. Dokumen Asesmen & Ekspor', icon: Download },
    { id: 'analisis_butir', label: '4. Analisis Butir Soal & Eror', icon: BarChart3 },
    { id: 'analisis_nilai', label: '5. Nilai, KKM & Excel', icon: FileSpreadsheet },
    { id: 'fitur_interaktif', label: '6. Kuis & Simulator TKA', icon: Gamepad2 },
    { id: 'faq_tips', label: '7. Pengaturan & FAQ', icon: Settings },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200">
      <div 
        className="bg-white dark:bg-slate-900 rounded-3xl max-w-5xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-purple-200/80 dark:border-purple-900/60 overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        
        {/* HEADER MODAL */}
        <div className="bg-gradient-to-r from-maroon-900 via-maroon-800 to-purple-900 text-white p-5 sm:p-6 shrink-0 border-b border-purple-800/40 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-amber-400/20 border border-amber-300/40 text-amber-300 flex items-center justify-center shadow-inner">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-purple-200 text-[11px] font-semibold mb-1">
                <Sparkles className="w-3 h-3 text-amber-300" />
                <span>Buku Panduan Komprehensif EduAsesmen AI</span>
              </div>
              <h2 className="text-lg sm:text-xl font-black text-white tracking-tight">
                Petunjuk Lengkap Penggunaan Aplikasi
              </h2>
              <p className="text-xs text-purple-200 hidden sm:block">
                Panduan langkah demi langkah pembuatan soal, dokumen asesmen, evaluasi butir soal & analisis nilai
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none"
            title="Tutup Panduan"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* CONTAINER UTAMA DENGAN DUA KOLOM: MENU KIRI & KONTEN KANAN */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          
          {/* SIDEBAR NAVIGATION KIRI */}
          <div className="w-full md:w-64 bg-slate-50 dark:bg-slate-950/70 border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800 p-3 sm:p-4 shrink-0 flex flex-col">
            <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 px-2 hidden md:block">
              Daftar Modul Panduan
            </div>

            <div className="flex md:flex-col gap-1 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0 custom-scrollbar">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-bold text-left transition-all shrink-0 md:shrink ${
                      isActive
                        ? 'bg-gradient-to-r from-maroon-800 to-purple-800 text-white shadow-sm'
                        : 'text-slate-600 dark:text-slate-400 hover:bg-purple-50 dark:hover:bg-slate-800/60 hover:text-maroon-800 dark:hover:text-purple-300'
                    }`}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    <span className="whitespace-nowrap md:whitespace-normal">{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Quick Box di Bawah Sidebar */}
            <div className="mt-auto pt-4 border-t border-slate-200 dark:border-slate-800 hidden md:block text-xs">
              <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200/80 dark:border-purple-900/60 text-purple-900 dark:text-purple-300">
                <div className="font-bold flex items-center gap-1.5 mb-1 text-[11px]">
                  <HelpCircle className="w-3.5 h-3.5 text-amber-500" />
                  <span>Butuh Bantuan Cepat?</span>
                </div>
                <p className="text-[11px] leading-relaxed text-slate-600 dark:text-slate-400">
                  Aplikasi dapat berjalan 100% offline dengan mesin otomatis bawaan.
                </p>
              </div>
            </div>
          </div>

          {/* AREA KONTEN PANDUAN KANAN (SCROLLABLE) */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-6 text-slate-800 dark:text-slate-200 text-sm leading-relaxed custom-scrollbar">

            {/* 1. PEMBUATAN SOAL & AI */}
            {activeTab === 'pembuatan_soal' && (
              <div className="space-y-5">
                <div className="border-b border-purple-100 dark:border-purple-900/40 pb-3">
                  <h3 className="text-lg font-black text-maroon-900 dark:text-purple-200 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-maroon-700 dark:text-purple-400" />
                    <span>Langkah 1: Identitas & Hierarki Kurikulum</span>
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Petunjuk pengisian data profil asesmen, fase, mata pelajaran, dan perumusan capaian pembelajaran otomatis.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="bg-purple-50/60 dark:bg-slate-800/60 p-4 rounded-2xl border border-purple-100 dark:border-slate-700">
                    <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 text-xs sm:text-sm mb-2">
                      <span className="w-5 h-5 rounded-full bg-maroon-800 text-white text-xs flex items-center justify-center font-bold">1</span>
                      <span>Identitas Sekolah, Guru & Tanggal Asesmen</span>
                    </h4>
                    <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300 pl-7 list-disc">
                      <li>
                        <strong>Nama Institusi:</strong> Terisi default <em>SMAN Sumatera Selatan</em>. Anda dapat menggantinya sesuai nama madrasah/sekolah Anda.
                      </li>
                      <li>
                        <strong>Nama Guru / Penyusun:</strong> Masukkan nama lengkap beserta gelar pendidik Anda.
                      </li>
                      <li>
                        <strong>Hari / Tanggal Ujian:</strong> Gunakan kalender <em>Date Picker</em>. Sistem akan secara cerdas mengenali hari dalam format bahasa Indonesia (misal: <em>Senin, 10 November 2026</em>).
                      </li>
                      <li>
                        <strong>Alokasi Waktu:</strong> Tentukan durasi pengerjaan ujian (misal: 60, 90, atau 120 menit).
                      </li>
                    </ul>
                  </div>

                  <div className="bg-purple-50/60 dark:bg-slate-800/60 p-4 rounded-2xl border border-purple-100 dark:border-slate-700">
                    <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 text-xs sm:text-sm mb-2">
                      <span className="w-5 h-5 rounded-full bg-maroon-800 text-white text-xs flex items-center justify-center font-bold">2</span>
                      <span>Hierarki Fase & Kurikulum yang Didukung</span>
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mb-2 pl-7">
                      Saat Anda memilih salah satu <strong>Fase Pembelajaran (A s.d. F)</strong>, sistem akan secara otomatis memfilter pilihan kelas dan kurikulum yang valid:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pl-7">
                      <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                        <strong className="text-purple-700 dark:text-purple-300">Fase A, B, C (Jenjang SD):</strong>
                        <div className="text-slate-500 mt-1">• Kelas: 1, 2, 3, 4, 5, 6</div>
                        <div className="text-slate-500">• Kurikulum: Merdeka, K-13, KBC, Cambridge Primary, IPC, IB PYP, Pearson Edexcel, Lainnya.</div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                        <strong className="text-purple-700 dark:text-purple-300">Fase D (Jenjang SMP):</strong>
                        <div className="text-slate-500 mt-1">• Kelas: 7, 8, 9</div>
                        <div className="text-slate-500">• Kurikulum: Merdeka, K-13, KBC, Cambridge Lower Secondary, IB MYP, Pearson iLowerSecondary, Lainnya.</div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 sm:col-span-2">
                        <strong className="text-purple-700 dark:text-purple-300">Fase E & F (Jenjang SMA/SMK):</strong>
                        <div className="text-slate-500 mt-1">• Kelas: Fase E = Kelas 10; Fase F = Kelas 11, Kelas 12</div>
                        <div className="text-slate-500">• Kurikulum: Merdeka, K-13, KBC, Cambridge IGCSE, Cambridge AS/A Level, IB DP, Pearson Edexcel, AP, Lainnya.</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50/60 dark:bg-slate-800/60 p-4 rounded-2xl border border-purple-100 dark:border-slate-700">
                    <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 text-xs sm:text-sm mb-2">
                      <span className="w-5 h-5 rounded-full bg-maroon-800 text-white text-xs flex items-center justify-center font-bold">3</span>
                      <span>Integrasi Karakter: Kurikulum Merdeka & Kurikulum Berbasis Cinta (KBC)</span>
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 pl-7 leading-relaxed">
                      AI terintegrasi khusus untuk menautkan butir soal dengan elemen karakter:
                    </p>
                    <ul className="text-xs text-slate-600 dark:text-slate-300 pl-11 list-disc mt-1.5 space-y-1">
                      <li>
                        <strong>Kurikulum Berbasis Cinta (KBC):</strong> Mendukung 5 Elemen: <em>Cinta Allah Swt. dan Rasul-Nya, Cinta Ilmu, Cinta Lingkungan, Cinta Diri dan Sesama Manusia,</em> serta <em>Cinta Tanah Air</em>.
                      </li>
                      <li>
                        <strong>Kurikulum Merdeka:</strong> Mendukung 8 Dimensi Profil Lulusan: <em>Keimanan & Ketakwaan, Kewargaan, Penalaran Kritis, Kreativitas, Kolaborasi, Kemandirian, Kesehatan,</em> dan <em>Komunikasi</em>.
                      </li>
                    </ul>
                  </div>

                  <div className="bg-purple-50/60 dark:bg-slate-800/60 p-4 rounded-2xl border border-purple-100 dark:border-slate-700">
                    <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 text-xs sm:text-sm mb-2">
                      <span className="w-5 h-5 rounded-full bg-maroon-800 text-white text-xs flex items-center justify-center font-bold">4</span>
                      <span>Fitur Auto AI Capaian Pembelajaran (CP, TP & ATP)</span>
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 pl-7 leading-relaxed">
                      Cukup ketik atau ubah <strong>Topik / Lingkup Materi</strong> (default: <em>Berpikir Komputasional</em>), lalu klik tombol <strong>"Auto-Generate CP/TP via AI"</strong>. Sistem akan langsung merumuskan Capaian Pembelajaran resmi, Alur Tujuan Pembelajaran (ATP), dan Tujuan Pembelajaran (TP) yang presisi sesuai Fase dan Mata Pelajaran Anda.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 2. SPESIFIKASI SOAL, BLOOM & MULTI-BAHASA */}
            {activeTab === 'spesifikasi_soal' && (
              <div className="space-y-5">
                <div className="border-b border-purple-100 dark:border-purple-900/40 pb-3">
                  <h3 className="text-lg font-black text-maroon-900 dark:text-purple-200 flex items-center gap-2">
                    <BrainCircuit className="w-5 h-5 text-maroon-700 dark:text-purple-400" />
                    <span>Langkah 2: Konfigurasi Teknis, Bloom & Bahasa</span>
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Konfigurasi bentuk butir soal, Taksonomi Bloom (LOTS/HOTS), tingkat kesulitan, media dan pilihan bahasa.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="bg-purple-50/60 dark:bg-slate-800/60 p-4 rounded-2xl border border-purple-100 dark:border-slate-700">
                    <h4 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm mb-2">
                      A. Bentuk Soal Otomatis Berdasarkan Fase
                    </h4>
                    <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300 pl-2">
                      <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                        <strong className="text-maroon-800 dark:text-purple-300">Fase A, B, C, dan D:</strong>
                        <p className="mt-1">Pilihan Ganda 4 Opsi (A–D), Pilihan Ganda Kompleks (A–D), Benar-Salah, dan Esai / Uraian.</p>
                      </div>
                      <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                        <strong className="text-maroon-800 dark:text-purple-300">Fase E dan F (SMA/SMK):</strong>
                        <p className="mt-1">Pilihan Ganda 5 Opsi (A–E), Pilihan Ganda Kompleks (A–E), dan Esai / Uraian.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50/60 dark:bg-slate-800/60 p-4 rounded-2xl border border-purple-100 dark:border-slate-700">
                    <h4 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm mb-2">
                      B. Opsi Multi-Bahasa (Termasuk Bahasa Arab, Prancis, & Palembang)
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mb-2">
                      Aplikasi mendukung 6 mode bahasa pembuatan soal:
                    </p>
                    <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1.5 pl-5 list-disc">
                      <li><strong>Bahasa Indonesia:</strong> Bahasa standar pengantar kurikulum nasional.</li>
                      <li><strong>100% Bahasa Inggris:</strong> Cocok untuk kelas Bilingual, Cambridge, IB, atau tes bahasa Inggris.</li>
                      <li><strong>Bilingual (Kustom Proporsi):</strong> Anda dapat menentukan berapa butir soal berbahasa Indonesia dan berapa butir berbahasa Inggris secara fleksibel.</li>
                      <li><strong>Bahasa Arab:</strong> Didukung perataan teks otomatis kanan-ke-kiri (RTL) dan terminologi akademis berbahasa Arab.</li>
                      <li><strong>Bahasa Prancis:</strong> Pembuatan soal untuk mata pelajaran bahasa asing atau sekolah internasional.</li>
                      <li><strong>Bahasa Palembang (Khas Wong Kito):</strong> Menyajikan soal dengan kearifan lokal Sumatera Selatan yang kontekstual dan komunikatif.</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50/60 dark:bg-slate-800/60 p-4 rounded-2xl border border-purple-100 dark:border-slate-700">
                    <h4 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm mb-2">
                      C. Taksonomi Bloom & Tingkat Kesukaran
                    </h4>
                    <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1.5 pl-5 list-disc">
                      <li><strong>LOTS (C1, C2, C3):</strong> Mengingat, Memahami, dan Menerapkan.</li>
                      <li><strong>HOTS (C4, C5, C6):</strong> Menganalisis, Mengevaluasi, dan Mencipta.</li>
                      <li><strong>Tingkat Kesulitan:</strong> Tentukan jumlah butir untuk soal kategori Mudah, Sedang, dan Sukar.</li>
                      <li><strong>Checkbox Media Ilustrasi:</strong> Centang opsi ini jika Anda ingin soal dilengkapi diagram dan ilustrasi visual terpadu.</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50/60 dark:bg-slate-800/60 p-4 rounded-2xl border border-purple-100 dark:border-slate-700">
                    <h4 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm mb-2 flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-700 dark:text-amber-300 text-[11px] font-black">Asesmen Nyata</span>
                      <span>D. Soal Kuantitatif Berangka & Rumus Sesuai Fase (Matematika, Fisika, Kimia, Informatika, Ekonomi, dll.)</span>
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mb-2">
                      Ketika Anda memilih mata pelajaran eksak atau bermuatan numerik (Matematika, Fisika, Kimia, Informatika/Koding, Ekonomi, Biologi, Geografi), sistem secara otomatis mengaktifkan mesin perhitungan kuantitatif autentik:
                    </p>
                    <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1.5 pl-5 list-disc">
                      <li><strong>Natural Sesuai Fase & Kelas:</strong> 
                        <br />• <em>SD (Fase A/B/C):</em> Hitungan bilangan cacah, operasi pecahan belanja/panen, keliling/luas taman persegi panjang, skala denah rumah, volume bak balok & debit air, statistika rata-rata (mean).
                        <br />• <em>SMP (Fase D):</em> Aljabar SPLDV, teorema Pythagoras segitiga siku-siku, luas juring & busur lingkaran, volume tabung, gradien garis lurus.
                        <br />• <em>SMA/SMK (Fase E/F):</em> Trigonometri sudut elevasi/aturan sinus, kurva fungsi kuadrat parabola Kartesius, barisan & deret aritmetika/geometri, persamaan eksponen & logaritma, matriks, kalkulus turunan fungsi.
                      </li>
                      <li><strong>Mata Pelajaran Terapan Lainnya:</strong>
                        <br />• <em>Fisika:</em> FBD gaya gesek bidang miring, hukum Kirchhoff rangkaian resistor seri-paralel, grafik gerak \(v-t\) trapesium, usaha energi mekanik.
                        <br />• <em>Kimia:</em> Titrasi asam-basa volumetri buret-erlenmeyer, perubahan entalpi \(\Delta H\) termokimia, stoikiometri volume STP gas, potensial sel Volta standar.
                        <br />• <em>Informatika & Koding:</em> Subnetting IPv4 CIDR /26 host valid, konversi biner 8-bit ke desimal & heksadesimal, kompleksitas algoritma perulangan Big-O \(O(n^2)\), metrik akurasi & presisi AI.
                        <br />• <em>Ekonomi:</em> Keseimbangan pasar \(Q_d = Q_s\), Break Even Point (BEP unit & rupiah), koefisien elastisitas permintaan.
                        <br />• <em>Biologi & Geografi:</em> Persilangan dihibrid Mendel rasio 9:3:3:1 pada populasi riil, piramida aliran energi 10%, skala peta dan kontur interval (CI).
                      </li>
                      <li><strong>Bukan Soal Teori / Hafalan:</strong> Menyajikan data numerik nyata, satuan resmi, dan formula ilmiah yang harus dihitung layaknya ujian TKA, UTBK/SNBT, dan Asesmen Sumatif standar nasional.</li>
                      <li><strong>Pembahasan Terstruktur:</strong> Disertai tahapan pengerjaan runut: <em>Diketahui, Ditanya, Rumus, Perhitungan Angka Rinci, dan Kesimpulan Satuan</em>.</li>
                      <li><strong>Diagram Teknis Vektor (SVG):</strong> Diagram tersemat langsung pada naskah soal dan kartu soal di aplikasi maupun saat diekspor ke Microsoft Word (.doc).</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* 3. DOKUMEN ASESMEN & EKSPOR */}
            {activeTab === 'dokumen_ekspor' && (
              <div className="space-y-5">
                <div className="border-b border-purple-100 dark:border-purple-900/40 pb-3">
                  <h3 className="text-lg font-black text-maroon-900 dark:text-purple-200 flex items-center gap-2">
                    <Download className="w-5 h-5 text-maroon-700 dark:text-purple-400" />
                    <span>Langkah 3: Deliverables & Ekspor Word / PDF</span>
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Setelah AI menyelesaikan pembuatan soal, Anda mendapatkan 4 dokumen lengkap siap pakai.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-purple-100 dark:border-slate-700 shadow-2xs">
                    <strong className="text-purple-800 dark:text-purple-300 font-bold flex items-center gap-2 mb-1.5">
                      <FileText className="w-4 h-4 text-purple-600" />
                      1. Naskah Soal
                    </strong>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Memuat kop resmi madrasah/sekolah, petunjuk umum, teks stimulus soal, gambar ilustrasi, opsi jawaban, dan kolom esai siap cetak.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-purple-100 dark:border-slate-700 shadow-2xs">
                    <strong className="text-purple-800 dark:text-purple-300 font-bold flex items-center gap-2 mb-1.5">
                      <Sparkles className="w-4 h-4 text-amber-500" />
                      2. Kunci Jawaban
                    </strong>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Tabel rekapitulasi kunci jawaban per nomor soal, opsi yang benar, dan ringkasan pembahasan singkat.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-purple-100 dark:border-slate-700 shadow-2xs">
                    <strong className="text-purple-800 dark:text-purple-300 font-bold flex items-center gap-2 mb-1.5">
                      <Layers className="w-4 h-4 text-purple-600" />
                      3. Kisi-Kisi Ujian
                    </strong>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Format matriks standar dinas berisi Nomor Soal, Lingkup Materi, Indikator Soal, Level Kognitif (C1–C6), dan Bentuk Soal.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-purple-100 dark:border-slate-700 shadow-2xs">
                    <strong className="text-purple-800 dark:text-purple-300 font-bold flex items-center gap-2 mb-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      4. Kartu Soal
                    </strong>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Dokumen telaah butir soal mendalam per nomor: Capaian Pembelajaran, Materi Pokok, Indikator, Rumusan Butir, Kunci, dan Pedoman Penskoran.
                    </p>
                  </div>
                </div>

                <div className="bg-purple-50/70 dark:bg-purple-950/30 p-4 rounded-2xl border border-purple-200 dark:border-purple-900/60 text-xs space-y-2">
                  <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Download className="w-4 h-4 text-maroon-700 dark:text-purple-400" />
                    <span>Cara Mengunduh Dokumen Word (.doc) Rapi & Bebas Rusak</span>
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Aplikasi menyediakan <strong>1 Tombol Tunggal "Unduh Word (.doc)"</strong> di pojok kanan atas tab. Dokumen diekspor dalam format dokumen Microsoft Word yang telah dioptimasi dengan tabel bersih, font Calibri standar, dan spasi proporsional sehingga siap langsung diedit atau dicetak tanpa perlu dirapikan ulang.
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Tersedia juga tombol <strong>"Cetak / PDF"</strong> untuk langsung memunculkan dialog print browser dan menyimpan sebagai PDF beresolusi tinggi.
                  </p>
                </div>
              </div>
            )}

            {/* 4. ANALISIS BUTIR SOAL & DETEKSI EROR */}
            {activeTab === 'analisis_butir' && (
              <div className="space-y-5">
                <div className="border-b border-purple-100 dark:border-purple-900/40 pb-3">
                  <h3 className="text-lg font-black text-maroon-900 dark:text-purple-200 flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-maroon-700 dark:text-purple-400" />
                    <span>Langkah 4A: Analisis Butir Soal & Deteksi Eror Kunci</span>
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Evaluasi psikometrik pasca-ujian untuk mengukur kualitas dan validitas instrumen tes.
                  </p>
                </div>

                <div className="space-y-3.5 text-xs text-slate-700 dark:text-slate-300">
                  <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1.5">
                    <strong className="text-slate-900 dark:text-white text-sm">1. Input Matriks Jawaban Siswa</strong>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Buka tab <em>Analisis Butir & Nilai</em>. Anda dapat memasukkan data nama siswa dan opsi jawaban yang mereka pilih per nomor soal, atau klik tombol cepat <strong>"Simulasikan 30 Siswa"</strong> untuk langsung melihat hasil olahan secara instan.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1.5">
                    <strong className="text-slate-900 dark:text-white text-sm">2. Koefisien Reliabilitas Tes (KR-20)</strong>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Sistem menghitung reliabilitas internal tes menggunakan rumus <em>Kuder-Richardson 20 (KR-20)</em>. Skor di atas <strong>0.70</strong> menunjukkan instrumen memiliki reliabilitas tinggi dan sangat konsisten mengukur kemampuan siswa.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1.5">
                    <strong className="text-slate-900 dark:text-white text-sm">3. Daya Pembeda (DP)</strong>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Mengukur kemampuan soal membedakan siswa kelompok atas (pandai) dan kelompok bawah:
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 font-mono text-[11px]">
                      <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 font-bold border border-emerald-200">
                        DP ≥ 0.40: Sangat Baik / Baik
                      </div>
                      <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-800 dark:text-blue-300 font-bold border border-blue-200">
                        0.20 – 0.39: Cukup
                      </div>
                      <div className="p-2 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 font-bold border border-amber-200">
                        0.00 – 0.19: Jelek (Revisi)
                      </div>
                      <div className="p-2 rounded-lg bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300 font-bold border border-rose-200">
                        DP &lt; 0: Ditolak (Kunci/Distraktor)
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1.5">
                    <strong className="text-slate-900 dark:text-white text-sm">4. Tingkat Kesukaran (TK)</strong>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Dihitung dari persentase peserta didik yang menjawab butir dengan benar: <strong>Mudah</strong> (&gt; 0.70), <strong>Sedang</strong> (0.30 s.d. 0.70), dan <strong>Sukar</strong> (&lt; 0.30).
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 space-y-1.5">
                    <strong className="text-amber-900 dark:text-amber-200 text-sm flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-amber-600" />
                      5. Deteksi Eror Kunci Jawaban Otomatis
                    </strong>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      Fitur cerdas ini secara otomatis memberikan tanda peringatan warna merah/kuning jika ada soal di mana mayoritas kelompok siswa pintar (kelompok atas) memilih opsi lain yang bukan merupakan kunci jawaban resmi, sehingga guru dapat segera memeriksa dan mengoreksi kemungkinan salah kunci.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 5. NILAI, KKM & EXCEL */}
            {activeTab === 'analisis_nilai' && (
              <div className="space-y-5">
                <div className="border-b border-purple-100 dark:border-purple-900/40 pb-3">
                  <h3 className="text-lg font-black text-maroon-900 dark:text-purple-200 flex items-center gap-2">
                    <FileSpreadsheet className="w-5 h-5 text-maroon-700 dark:text-purple-400" />
                    <span>Langkah 4B: Analisis Nilai, Ketuntasan & Ekspor Excel</span>
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Pengolahan skor kelas, visualisasi grafik, rekap remedial, dan unduh laporan Excel supervisi.
                  </p>
                </div>

                <div className="space-y-3.5 text-xs text-slate-700 dark:text-slate-300">
                  <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
                    <strong className="text-slate-900 dark:text-white text-sm">Penyesuaian KKM / Kriteria Ketuntasan Minimal</strong>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Anda dapat mengubah batas KKM (default: 75) secara langsung pada kotak input. Seluruh persentase kelulusan, grafik, dan daftar remedial akan langsung disesuaikan secara real-time.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
                    <strong className="text-slate-900 dark:text-white text-sm">Visualisasi Grafik Sebaran Nilai</strong>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Menampilkan diagram batang dan garis interaktif sebaran nilai siswa dalam rentang interval skor, memudahkan guru melihat distribusi nilai kelas secara visual.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
                    <strong className="text-slate-900 dark:text-white text-sm">Daftar Remedial & Materi yang Belum Dikuasai</strong>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Sistem secara otomatis mendata nama-nama siswa yang nilainya masih di bawah KKM dan memerlukan bimbingan remedial, serta memetakan materi/indikator mana yang paling banyak dijawab salah oleh siswa di kelas tersebut.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/60 space-y-1">
                    <strong className="text-emerald-900 dark:text-emerald-200 text-sm flex items-center gap-1.5">
                      <Download className="w-4 h-4 text-emerald-600" />
                      Ekspor Laporan Resmi ke Microsoft Excel (.xlsx)
                    </strong>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      Cukup klik tombol <strong>"Unduh Laporan Excel (.xlsx)"</strong>, sistem akan menghasilkan buku kerja spreadsheet lengkap berisi lembar rekap nilai siswa, matriks jawaban butir, dan rekapitulasi analisis butir soal untuk keperluan supervisi kepala sekolah atau pengawas dinas.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 6. FITUR INTERAKTIF: KUIS & SIMULATOR TKA */}
            {activeTab === 'fitur_interaktif' && (
              <div className="space-y-5">
                <div className="border-b border-purple-100 dark:border-purple-900/40 pb-3">
                  <h3 className="text-lg font-black text-maroon-900 dark:text-purple-200 flex items-center gap-2">
                    <Gamepad2 className="w-5 h-5 text-amber-500" />
                    <span>Langkah 5: Fitur Interaktif (Kuis Proyektor & CBT TKA)</span>
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Memanfaatkan paket soal yang telah dibuat untuk sarana belajar interaktif dan simulasi tes standar nasional.
                  </p>
                </div>

                <div className="space-y-4 text-xs text-slate-700 dark:text-slate-300">
                  <div className="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 space-y-2">
                    <h4 className="font-bold text-amber-900 dark:text-amber-200 text-sm flex items-center gap-2">
                      <Gamepad2 className="w-4 h-4 text-amber-600" />
                      <span>Mode Kuis Interaktif di Kelas</span>
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      Fitur ini dirancang khusus untuk ditampilkan di layar proyektor ruang kelas.
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-300">
                      <li>Menampilkan pertanyaan satu per satu dengan huruf besar yang jelas terbaca dari belakang kelas.</li>
                      <li>Dilengkapi dengan hitung mundur (countdown timer) interaktif untuk melatih konsentrasi.</li>
                      <li>Efek suara instan saat jawaban benar atau salah, serta efek hujan konfeti (confetti) di akhir kuis.</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl bg-purple-50/60 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-900/50 space-y-2">
                    <h4 className="font-bold text-purple-900 dark:text-purple-200 text-sm flex items-center gap-2">
                      <MonitorPlay className="w-4 h-4 text-purple-600" />
                      <span>Simulator TKA (Tes Kemampuan Akademik) CBT</span>
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      Simulasi ujian standar Asesmen Nasional dengan antarmuka modern Computer-Based Test:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-300">
                      <li><strong>Kustomisasi Butir:</strong> Anda dapat menentukan berapa butir soal yang diujikan (maksimum hingga 50 butir soal).</li>
                      <li><strong>Timer & Panel Soal:</strong> Dilengkapi navigasi nomor soal (terjawab/ragu-ragu/belum) dan sisa waktu ujian.</li>
                      <li><strong>Pembahasan Instan:</strong> Setelah siswa menekan tombol selesaikan ujian, nilai dan kunci pembahasan per butir dapat langsung ditelaah.</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* 7. PENGATURAN & FAQ */}
            {activeTab === 'faq_tips' && (
              <div className="space-y-5">
                <div className="border-b border-purple-100 dark:border-purple-900/40 pb-3">
                  <h3 className="text-lg font-black text-maroon-900 dark:text-purple-200 flex items-center gap-2">
                    <Settings className="w-5 h-5 text-maroon-700 dark:text-purple-400" />
                    <span>Pengaturan Aplikasi & Pertanyaan Umum (FAQ)</span>
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Tips penyesuaian tema, layout, integrasi Google Gemini AI, dan solusi kendala teknis.
                  </p>
                </div>

                <div className="space-y-3.5 text-xs text-slate-700 dark:text-slate-300">
                  <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1.5">
                    <strong className="text-slate-900 dark:text-white text-sm">Mode Terang & Mode Gelap (Dark Mode)</strong>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Klik ikon <strong>Matahari / Bulan</strong> di navbar atas untuk beralih mode. Skema warna telah dirancang dengan rasio kontras tinggi (Purple/Maroon) agar tetap nyaman dibaca baik di ruangan terang maupun saat gelap.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1.5">
                    <strong className="text-slate-900 dark:text-white text-sm">Ganti Tata Letak: Dashboard Atas vs Panel Kiri (Sidebar)</strong>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Klik tombol <strong>"Panel Kiri"</strong> di navbar untuk mengubah tata letak form menjadi menu bilah samping kiri (sidebar) sesuai kenyamanan preferensi kerja Anda.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-2">
                    <strong className="text-slate-900 dark:text-white text-sm flex items-center gap-1.5">
                      <Key className="w-4 h-4 text-emerald-600" />
                      Konfigurasi Google Gemini AI Key (Opsional)
                    </strong>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Secara bawaan, aplikasi sudah dilengkapi dengan mesin generator pedagogis offline. Namun jika Anda ingin menggunakan model online Google Gemini API:
                    </p>
                    <button
                      onClick={onOpenApiKey}
                      className="px-3.5 py-1.5 rounded-lg bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300 font-bold hover:bg-purple-200 text-xs transition-colors"
                    >
                      Buka Pengaturan Gemini API Key
                    </button>
                  </div>

                  <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1.5">
                    <strong className="text-slate-900 dark:text-white text-sm">Bagaimana cara melihat profil pengembang?</strong>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Di bagian paling bawah aplikasi (footer), klik pada nama <strong>"Armansyah, S.Kom, M.Pd, Gr."</strong>. Jendela popup lengkap mengenai riwayat SK Narasumber Kemendikdasmen, pendidikan, sertifikasi, dan buku karya akan terbuka dan dapat digulir ke bawah.
                    </p>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

        {/* MODAL FOOTER */}
        <div className="p-4 sm:px-6 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between shrink-0">
          <div className="text-xs text-slate-500 dark:text-slate-400 hidden sm:block">
            EduAsesmen AI • Pusat Panduan Terpadu Asesmen Pendidikan Kemendikdasmen 2025
          </div>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-maroon-800 to-purple-800 hover:from-maroon-900 hover:to-purple-900 transition-all shadow-md ml-auto"
          >
            Tutup Buku Panduan
          </button>
        </div>

      </div>
    </div>
  );
}
