import React, { useState } from 'react';
import { 
  X, 
  Award, 
  BookOpen, 
  GraduationCap, 
  Briefcase, 
  Mail, 
  Share2, 
  CheckCircle2, 
  FileText, 
  Calendar,
  Building,
  Sparkles,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  UserCheck
} from 'lucide-react';

export default function ModalProfilPengembang({ onClose }) {
  const [activeSection, setActiveSection] = useState('pengalaman'); // 'pengalaman' | 'pendidikan' | 'karya'

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200">
      <div 
        className="bg-white dark:bg-slate-900 rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-purple-200/80 dark:border-purple-900/60 overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        
        {/* HEADER MODAL: BANNER & BIODATA UTAMA */}
        <div className="relative bg-gradient-to-r from-maroon-900 via-maroon-800 to-purple-900 text-white p-6 sm:p-7 shrink-0 border-b border-purple-800/40">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors shadow-sm focus:outline-none"
            title="Tutup Profil"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            {/* Avatar / Badge Initial */}
            <div className="relative">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-tr from-amber-400 to-amber-200 text-maroon-950 font-black text-3xl sm:text-4xl flex items-center justify-center shadow-xl border-2 border-white/30">
                A
              </div>
              <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-white p-1 rounded-full border-2 border-maroon-900 shadow-sm" title="Terverifikasi Kemendikdasmen">
                <ShieldCheck className="w-4 h-4" />
              </div>
            </div>

            {/* Nama & Gelar */}
            <div className="space-y-1.5 flex-1 pr-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-400/20 border border-amber-300/40 text-amber-200 text-xs font-semibold">
                <Award className="w-3.5 h-3.5 text-amber-300" />
                <span>Profil Resmi Pengembang Aplikasi</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug">
                Armansyah, S.Kom, M.Pd, Gr.
              </h2>
              <div className="text-xs sm:text-sm text-purple-200 font-medium">
                NUPTK: <span className="font-mono font-bold text-white tracking-wider">9450753654130093</span>
              </div>
              
              <div className="pt-1 text-xs sm:text-[13px] text-amber-300 font-bold flex flex-wrap items-center gap-x-2 gap-y-1">
                <span>Ketua Umum MGMP Informatika Jenjang SMA Provinsi Sumatera Selatan 2025–2030</span>
              </div>
              <div className="text-[11px] text-purple-200/90 font-mono">
                SK Kepala Dinas Pendidikan Provinsi Sumatera Selatan No. 420/043/PTK/DISDIK.SS/2025
              </div>
            </div>
          </div>

          {/* Kontak & Satuan Pendidikan Quick Bar */}
          <div className="mt-5 pt-4 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs text-purple-100">
            <div className="flex items-center gap-2">
              <Building className="w-4 h-4 text-amber-300 shrink-0" />
              <span>SMAN Sumatera Selatan (Guru Informatika / KKA)</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-amber-300 shrink-0" />
              <a href="mailto:armansyah@smansumsel.sch.id" className="hover:underline text-white font-mono">
                armansyah@smansumsel.sch.id
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Share2 className="w-4 h-4 text-amber-300 shrink-0" />
              <span className="font-medium text-white">Medsos: @cekguarman</span>
            </div>
          </div>
        </div>

        {/* NAVIGATION TAB INTERNAL MODAL */}
        <div className="flex items-center gap-2 px-6 pt-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 shrink-0">
          <button
            onClick={() => setActiveSection('pengalaman')}
            className={`flex items-center gap-2 px-4 py-2.5 font-bold text-xs sm:text-sm border-b-2 transition-all ${
              activeSection === 'pengalaman'
                ? 'border-maroon-700 dark:border-purple-400 text-maroon-800 dark:text-purple-300'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Pengalaman & Narasumber (Kemendikdasmen)</span>
          </button>

          <button
            onClick={() => setActiveSection('pendidikan')}
            className={`flex items-center gap-2 px-4 py-2.5 font-bold text-xs sm:text-sm border-b-2 transition-all ${
              activeSection === 'pendidikan'
                ? 'border-maroon-700 dark:border-purple-400 text-maroon-800 dark:text-purple-300'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>Riwayat Pendidikan & Sertifikasi</span>
          </button>

          <button
            onClick={() => setActiveSection('karya')}
            className={`flex items-center gap-2 px-4 py-2.5 font-bold text-xs sm:text-sm border-b-2 transition-all ${
              activeSection === 'karya'
                ? 'border-maroon-700 dark:border-purple-400 text-maroon-800 dark:text-purple-300'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Karya Buku & Publikasi Ilmiah</span>
          </button>
        </div>

        {/* SCROLLABLE BODY CONTENT */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-slate-800 dark:text-slate-200 text-sm leading-relaxed custom-scrollbar">

          {/* TAB 1: PENGALAMAN & NARASUMBER */}
          {activeSection === 'pengalaman' && (
            <div className="space-y-6">
              
              {/* Highlight Utama Kemendikdasmen 2025 */}
              <div className="bg-purple-50/70 dark:bg-purple-950/30 rounded-2xl p-5 border border-purple-200 dark:border-purple-900/60 shadow-2xs">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-maroon-800 text-white flex items-center justify-center font-bold text-sm">
                    🏛️
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base text-maroon-950 dark:text-purple-200">
                      Narasumber Nasional Mata Pelajaran Koding dan Kecerdasan Artifisial Kemendikdasmen Tahun 2025
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Surat Keputusan (SK) Resmi Direktorat Jenderal Guru dan Tenaga Kependidikan (GTK) Kemendikdasmen
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mt-3">
                  <div className="bg-white dark:bg-slate-800 p-3.5 rounded-xl border border-purple-100 dark:border-slate-700">
                    <div className="font-bold text-xs text-maroon-900 dark:text-purple-300">
                      • SK Direktur Pendidikan Dasar Nomor: 010/Manual.1/B5/GT.02.00/2025
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                      15 April 2025 — Bertempat di Pusat Pelatihan Sumber Daya Manusia (Pusdiklat) Kemdikdasmen, Kota Depok, Jawa Barat.
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-800 p-3.5 rounded-xl border border-purple-100 dark:border-slate-700">
                    <div className="font-bold text-xs text-maroon-900 dark:text-purple-300">
                      • SK Direktur Guru Pendidikan Menengah dan Pendidikan Khusus No. 0378/B6/GT.02.00/2025
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                      Narasumber untuk Batch 2: 5–10 Mei 2025 di D'prima Hotel, Tangerang.
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-800 p-3.5 rounded-xl border border-purple-100 dark:border-slate-700">
                    <div className="font-bold text-xs text-maroon-900 dark:text-purple-300">
                      • SK Direktur Guru Pendidikan Menengah dan Pendidikan Khusus No. 0438/B6/GT.02.00/2025
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                      Narasumber Batch 3: 14–19 Mei 2025 di Hotel Platinum Tunjungan, Surabaya.
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-800 p-3.5 rounded-xl border border-purple-100 dark:border-slate-700">
                    <div className="font-bold text-xs text-maroon-900 dark:text-purple-300">
                      • SK Direktur Guru Pendidikan Menengah dan Pendidikan Khusus No. 0476/B6/GT.02.00/2025
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                      Narasumber Batch 4: 22–27 Mei 2025 di Hotel Four Points by Sheraton, Makassar.
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-800 p-3.5 rounded-xl border border-purple-100 dark:border-slate-700">
                    <div className="font-bold text-xs text-maroon-900 dark:text-purple-300">
                      • SK Direktur Guru Pendidikan Dasar No. 1197/B5/GT.02.00/2025
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                      Batch 6: 10–15 Juni 2025 di VOUK Hotel & Suites, Bali.
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-800 p-3.5 rounded-xl border border-purple-100 dark:border-slate-700">
                    <div className="font-bold text-xs text-maroon-900 dark:text-purple-300">
                      • Surat Tugas Direktur SMA, Ditjen PAUD Dikdasmen Kemendikdasmen No. 1751/C5/DM.00.07/2025
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                      19–23 Agustus 2025 — Pendampingan Pelatihan di SMAN 10 Kota Ternate, Maluku Utara.
                    </div>
                  </div>
                </div>
              </div>

              {/* Narasumber Erlangga, Disdik & Lembaga */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 border border-slate-200 dark:border-slate-700 space-y-3">
                <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>Narasumber Penerbit, Forum Provinsi & Diklat Nasional 2025</span>
                </h4>

                <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>Narasumber Penerbit Erlangga untuk Mapel Koding & Kecerdasan Artifisial Fase C, D, E dan F di Sumut</strong>
                      <div className="text-slate-500 text-[11px]">Surat Permohonan Kacab Siantar Penerbit Erlangga No. 007/MARCOM-SIANTAR/VII/2025</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>Narasumber Penerbit Erlangga untuk Mapel Koding & Kecerdasan Artifisial Fase C, D, E dan F di Prabumulih</strong>
                      <div className="text-slate-500 text-[11px]">Surat Permohonan Marcomm Penerbit Erlangga Palembang No. 139/MARCOMM/ERL-PLG/XI/2025</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>Narasumber FESTIKA JATIM 2025: “Digitalisasi Pembelajaran Wujudkan Pendidikan Bermutu Untuk Semua”</strong>
                      <div className="text-slate-500 text-[11px]">Surat Permohonan Kadisdik Provinsi Jawa Timur No. 400.3.7.6/6704.5/101.7.1/2025</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>Narasumber Nasional Diklat Online: "Menerapkan Koding dan Kecerdasan Artifisial (KKA) dalam Pembelajaran"</strong>
                      <div className="text-slate-500 text-[11px]">Surat Permohonan No. 02.002/DO-UPKA/VII/2025</div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Narasumber Lokal di Sumatera Selatan 2025 */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 border border-slate-200 dark:border-slate-700 space-y-3">
                <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Narasumber Lokal Koding & Kecerdasan Artifisial Fase C, D, E, F di Sumsel (2025)</span>
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Pelatihan dan pengimbasan tatap muka di berbagai sekolah dan organisasi guru:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                  {[
                    'KKGK SD Kota Palembang (Aula Disdik)',
                    'SMPN 3 Kota Palembang',
                    'SMPN 5 Kota Palembang',
                    'SMPN 15 Kota Palembang',
                    'SMP Puja Handayani Palembang',
                    'SMP PTI Palembang',
                    'SMPN 9 Kota Palembang',
                    'SIT Ishlahul Ummah Prabumulih',
                    'Pesantren Kampoeng Tauhiid',
                    'SDN 117 Kota Palembang',
                    'SDN 238 Kota Palembang',
                    'SDN 79 Kota Palembang',
                    'SDN 189 Kota Palembang',
                    'SDN 139 Kota Palembang',
                    'SD Methodist 3 Palembang',
                    'SD Pusri Kota Palembang',
                    'BGTK Sumsel',
                    'SMA Unggul Islam Al-Fahd',
                    'SDN 123 Kota Palembang',
                    'SDN 83 Kota Palembang',
                    'SDN 195 Kota Palembang',
                    'SDN 60 Kota Palembang',
                    'SDN 114 Kota Palembang',
                    'SDN 68 Kota Palembang',
                    'SMKN 5 Palembang',
                    'SMAN 11 Palembang'
                  ].map((loc, i) => (
                    <div key={i} className="p-2 rounded-lg bg-slate-50 dark:bg-slate-700/50 border border-slate-200/60 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium text-[11px]">
                      • {loc}
                    </div>
                  ))}
                </div>
              </div>

              {/* Pengalaman Profesional & Kepakaran Lainnya */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 border border-slate-200 dark:border-slate-700 space-y-3">
                <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-purple-600" />
                  <span>Pengalaman Profesional, Akademik & Industri</span>
                </h4>
                <div className="space-y-3 text-xs text-slate-700 dark:text-slate-300">
                  <div className="border-l-2 border-purple-500 pl-3">
                    <div className="font-bold text-slate-900 dark:text-white">Mentor Google Master Trainer Level 2 Tahun 2024</div>
                    <div className="text-slate-500">Sertifikat Direktur Guru Pendidikan Dasar, Ditjen GTK Nomor: 3428/B5/GT.02.00/2024</div>
                  </div>
                  <div className="border-l-2 border-purple-500 pl-3">
                    <div className="font-bold text-slate-900 dark:text-white">Pendamping Program Microcredential CS50x Indonesia – Harvard University Tahun 2023/2024</div>
                    <div className="text-slate-500">SK Direktur Guru Pendidikan Menengah dan Pendidikan Khusus Ditjen GTK No. 3402/B6/GT.00.12/2023</div>
                  </div>
                  <div className="border-l-2 border-purple-500 pl-3">
                    <div className="font-bold text-slate-900 dark:text-white">Narasumber Peningkatan Kompetensi Guru Informatika SMP (2024) & SMA/SMK (2023/2024)</div>
                    <div className="text-slate-500">SK Direktur Guru Dikdas No. 2172/B5/GT.01.00/2024 & SK No. 1062/B6/PP.01.03/2024</div>
                  </div>
                  <div className="border-l-2 border-purple-500 pl-3">
                    <div className="font-bold text-slate-900 dark:text-white">Narasumber Uji Materi & Pembahasan Akademik Quick Count & SITUNG KPU (2019)</div>
                    <div className="text-slate-500">Bersama Para Intelektual, Akademisi dan Praktisi (GNUPB, Sentul Bogor)</div>
                  </div>
                  <div className="border-l-2 border-purple-500 pl-3">
                    <div className="font-bold text-slate-900 dark:text-white">Dosen LP3I Palembang (2016–2020)</div>
                    <div className="text-slate-500">Pengampu: Database Design & Administration with SQL Server & Oracle, Web Programming with Database, LAN & Internet</div>
                  </div>
                  <div className="border-l-2 border-purple-500 pl-3">
                    <div className="font-bold text-slate-900 dark:text-white">Staf Direktur/PSDM Bidang Teknologi Informasi Kelompok Kompas Gramedia (2001–2008)</div>
                    <div className="text-slate-500">PT. Rambang Palembang</div>
                  </div>
                  <div className="border-l-2 border-purple-500 pl-3">
                    <div className="font-bold text-slate-900 dark:text-white">Instruktur Komputer & Pemrograman (2001–2003)</div>
                    <div className="text-slate-500">Lembaga Pendidikan IPI-Leppindo & INTI Komputer Palembang (Classic ASP, Web, Desain Grafis)</div>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: PENDIDIKAN & SERTIFIKASI */}
          {activeSection === 'pendidikan' && (
            <div className="space-y-4">
              <div className="bg-purple-50/70 dark:bg-purple-950/30 rounded-2xl p-5 border border-purple-200 dark:border-purple-900/60">
                <h3 className="font-extrabold text-base text-maroon-950 dark:text-purple-200 flex items-center gap-2 mb-4">
                  <GraduationCap className="w-5 h-5 text-maroon-700 dark:text-purple-400" />
                  <span>Riwayat Pendidikan Formal, Profesi & Pelatihan Unggulan</span>
                </h3>

                <div className="relative border-l-2 border-purple-300 dark:border-purple-700 ml-3 space-y-5 pl-5">
                  
                  <div>
                    <div className="font-bold text-sm text-slate-900 dark:text-white">Microcredential CS50 Harvard University (2022/2023 LPDP)</div>
                    <div className="text-xs text-purple-700 dark:text-purple-300 font-medium">Program Beasiswa LPDP Kementerian Keuangan RI & Harvard University</div>
                  </div>

                  <div>
                    <div className="font-bold text-sm text-slate-900 dark:text-white">Pendidikan Profesi Guru (PPG) – Universitas Negeri Padang (2024)</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">Pendidikan Profesi Guru Bersertifikat Pendidik (Gr.)</div>
                  </div>

                  <div>
                    <div className="font-bold text-sm text-slate-900 dark:text-white">Pendidikan Guru Penggerak Angkatan 10 (2024)</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi</div>
                  </div>

                  <div>
                    <div className="font-bold text-sm text-slate-900 dark:text-white">S2 Keguruan dan Ilmu Pendidikan, Fakultas Teknologi Pendidikan</div>
                    <div className="text-xs text-purple-700 dark:text-purple-300 font-medium">Universitas Sriwijaya (2014) — Penerima Beasiswa Pemerintah Provinsi Sumatera Selatan</div>
                  </div>

                  <div>
                    <div className="font-bold text-sm text-slate-900 dark:text-white">Stage 1 Introductory Cambridge IGCSE ICT (0417) (2012)</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">University of Cambridge International Examinations</div>
                  </div>

                  <div>
                    <div className="font-bold text-sm text-slate-900 dark:text-white">S1 Komputer, Jurusan Manajemen Informatika</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">STMIK Bina Darma Palembang (1999)</div>
                  </div>

                  <div>
                    <div className="font-bold text-sm text-slate-900 dark:text-white">Program Ahli Komputer 1 Tahun, Jurusan Computer Programmer</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">MDP Palembang (1995)</div>
                  </div>

                  <div>
                    <div className="font-bold text-sm text-slate-900 dark:text-white">Pendidikan Profesi Teknisi Komputer LPPMK (1996)</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">Lembaga Pendidikan Profesi & Manajemen Kejuruan</div>
                  </div>

                </div>
              </div>
            </div>
          )}

          {/* TAB 3: BUKU KARYA & PUBLIKASI */}
          {activeSection === 'karya' && (
            <div className="space-y-4">
              <div className="bg-purple-50/70 dark:bg-purple-950/30 rounded-2xl p-5 border border-purple-200 dark:border-purple-900/60">
                <h3 className="font-extrabold text-base text-maroon-950 dark:text-purple-200 flex items-center gap-2 mb-2">
                  <BookOpen className="w-5 h-5 text-maroon-700 dark:text-purple-400" />
                  <span>Daftar Buku Karya & Publikasi Ilmiah Resmi</span>
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                  Koleksi buku ber-ISBN nasional/internasional serta publikasi jurnal ilmiah:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  
                  {/* Jurnal */}
                  <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-purple-100 dark:border-slate-700 md:col-span-2">
                    <div className="text-xs font-bold text-purple-800 dark:text-purple-300 uppercase tracking-wider mb-1">
                      Jurnal Ilmiah Pendidikan
                    </div>
                    <h5 className="font-bold text-slate-900 dark:text-white text-sm">
                      Pengembangan Bahan Ajar Materi Berpikir Komputasi Berbasis Android (2021)
                    </h5>
                    <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                      Jurnal Pendar Vol. 01 No. 01, Penerbit SMAN Sumatera Selatan • <span className="font-mono font-semibold">ISSN: 2776-1665</span>
                    </div>
                  </div>

                  {/* Buku 1 */}
                  <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <h5 className="font-bold text-slate-900 dark:text-white text-sm">
                      Rekonstruksi Sejarah Isa Al-Masih : Jawaban untuk Dinasti Yesus (2007)
                    </h5>
                    <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                      Penerbit Restu Agung, Jakarta • <span className="font-mono">ISBN: 979-007-048-9</span>
                    </div>
                  </div>

                  {/* Buku 2 */}
                  <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <h5 className="font-bold text-slate-900 dark:text-white text-sm">
                      Jejak Nabi Palsu : Dari Mirza Ghulam Ahmad, Lia Aminudin hingga Ahmad Musaddiq (2008)
                    </h5>
                    <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                      Penerbit Mizan Publika, Jakarta • <span className="font-mono">ISBN: 978-979-114-143-7</span>
                    </div>
                  </div>

                  {/* Buku 3 */}
                  <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <h5 className="font-bold text-slate-900 dark:text-white text-sm">
                      Ramalan Imam Mahdi : Menjawab Jaber Bolushi Kiamat 2015 (2008)
                    </h5>
                    <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                      Penerbit Serambi Ilmu Semesta • <span className="font-mono">ISBN: 978-979-024-081-0</span>
                    </div>
                  </div>

                  {/* Buku 4 */}
                  <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <h5 className="font-bold text-slate-900 dark:text-white text-sm">
                      Misteri Kecerdasan Syahadat (2009)
                    </h5>
                    <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                      Penerbit Ufuq Press • <span className="font-mono">ISBN: 978-602-8224-73-4</span>
                    </div>
                  </div>

                  {/* Buku 5 (Malaysia) */}
                  <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <h5 className="font-bold text-slate-900 dark:text-white text-sm">
                      Israk Mikraj : Tinjauan Saintifik di Sebalik Kontroversi (2011)
                    </h5>
                    <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                      Penerbit PTS Islamika Sdn Bhd (Malaysia) • <span className="font-mono">ISBN: 978-967-5137-91-5</span>
                    </div>
                  </div>

                  {/* Buku 6 */}
                  <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <h5 className="font-bold text-slate-900 dark:text-white text-sm">
                      Hukum Anjing Menurut Islam (2015)
                    </h5>
                    <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                      Penerbit Esword • <span className="font-mono">ISBN: 978-131-0289255</span>
                    </div>
                  </div>

                  {/* Buku 7 (Malaysia) */}
                  <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <h5 className="font-bold text-slate-900 dark:text-white text-sm">
                      Dan Tuhan Ciptakan Anjing (2018)
                    </h5>
                    <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                      Penerbit Dubook Press (Malaysia) • <span className="font-mono">ISBN: 978-967-210-8184</span>
                    </div>
                  </div>

                  {/* Tulisan Artikel */}
                  <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <h5 className="font-bold text-slate-900 dark:text-white text-sm">
                      Muhammad adalah Nabi Terakhir (2021/2008)
                    </h5>
                    <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                      Harian Sriwijaya Pos, 25 April 2008, hal. 17, Rubrik Mimbar Jum’at
                    </div>
                  </div>

                </div>
              </div>
            </div>
          )}

        </div>

        {/* MODAL FOOTER */}
        <div className="p-4 sm:px-6 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between shrink-0">
          <div className="text-xs text-slate-500 dark:text-slate-400 hidden sm:block">
            Pengembang Aplikasi: EduAsesmen AI • Kurikulum Merdeka & KBC Kemendikdasmen
          </div>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-maroon-800 to-purple-800 hover:from-maroon-900 hover:to-purple-900 transition-all shadow-md ml-auto"
          >
            Tutup Jendela Profil
          </button>
        </div>

      </div>
    </div>
  );
}
