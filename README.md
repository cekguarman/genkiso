# EduAsesmen AI 🎓
### Sistem Terpadu Pembuat Soal, Kisi-Kisi, Kartu Soal, Analisis Butir Soal & Kuis Interaktif

**Dibuat oleh: Armansyah, S.Kom, M.Pd, Gr.**  
*Narasumber Koding & Kecerdasan Artifisial Nasional Kemendikdasmen 2025*

---

## 🌟 Ikhtisar Aplikasi

**EduAsesmen AI** adalah platform asesmen komprehensif berbasis web (*web-based*) yang dirancang khusus untuk memfasilitasi pendidik dari seluruh jenjang pendidikan (SD/MI, SMP/MTs, SMA/SMK/MA) dalam merancang instrumen evaluasi pembelajaran berstandar tinggi yang selaras dengan regulasi kurikulum nasional terkini.

Aplikasi ini mencakup siklus evaluasi lengkap:
1. **Perancangan & Spesifikasi Soal (Pre-Exam)**
2. **Pembuatan Otomatis Terintegrasi (AI Generation)**
3. **Ekspor Dokumen Kedinasan (Word .doc & PDF Siap Cetak)**
4. **Analisis Butir Soal & Ketuntasan Belajar (Post-Exam Analysis & Excel .xlsx)**
5. **Mode Interaktif Kelas (Kuis Proyektor & Simulator TKA CBT Asesmen Nasional)**

---

## ✨ Fitur Unggulan

### 1. Identitas & Hierarki Kurikulum Dinamis (Langkah 1)
- **Fase Pembelajaran Adaptif**:
  - **Fase A, B, C**: Menampilkan pilihan tingkat otomatis **Kelas 1 s.d. Kelas 6**.
  - **Fase D**: Menampilkan pilihan tingkat otomatis **Kelas 7, Kelas 8, Kelas 9**.
  - **Fase E**: Menampilkan pilihan tingkat otomatis **Kelas 10**.
  - **Fase F**: Menampilkan pilihan tingkat otomatis **Kelas 11, Kelas 12**.
- **Kurikulum Dinamis**:
  - Fase A-C: *Kurikulum Merdeka, K-13, Kurikulum Berbasis Cinta (KBC), Cambridge Primary, IPC, IB PYP, Pearson Edexcel iPrimary, IB, Lainnya*.
  - Fase D: *Kurikulum Merdeka, K-13, Kurikulum Berbasis Cinta (KBC), Cambridge Lower Secondary, IB MYP, Pearson Edexcel iLowerSecondary, IB, Lainnya*.
  - Fase E-F: *Kurikulum Merdeka, K-13, Kurikulum Berbasis Cinta (KBC), Cambridge IGCSE, Cambridge International AS & A Level, IB DP, Pearson Edexcel GCSE / A Level, AP, IB, Lainnya*.
  - Dilengkapi input teks khusus bila memilih opsi *Lainnya*.
- **Integrasi Elemen Karakter**:
  - **Kurikulum Berbasis Cinta (KBC)**:
    1. *Cinta Allah Swt. dan Rasul-Nya*
    2. *Cinta Ilmu*
    3. *Cinta Lingkungan*
    4. *Cinta Diri dan Sesama Manusia*
    5. *Cinta Tanah Air*
  - **Kurikulum Merdeka**: **8 Dimensi Profil Lulusan**:
    1. *Keimanan dan Ketakwaan terhadap Tuhan Yang Maha Esa*
    2. *Kewargaan*
    3. *Penalaran Kritis*
    4. *Kreativitas*
    5. *Kolaborasi*
    6. *Kemandirian*
    7. *Kesehatan*
    8. *Komunikasi*
  - AI menghubungkan elemen yang dipilih ke dalam stimulus, indikator soal, kartu soal, dan rubrik penilaian.

### 2. Konfigurasi Teknis & Spesifikasi Soal (Langkah 2)
- **Aturan Bentuk Soal**:
  - Fase A, B, C, D: Pilihan Ganda (A-D), Benar-Salah, Pilihan Ganda Komplek (A-D), Esai.
  - Fase E, F: Pilihan Ganda (A-E), Pilihan Ganda Komplek (A-E), Esai.
- **Media**: Kotak centang (*checkbox*) untuk menyertakan diagram alir (*flowchart*), diagram grafik, atau skema ilustrasi vektor SVG.
- **Tingkat Kesulitan**: Slider persentase Mudah, Sedang, dan Sulit.
- **Taksonomi Bloom**: Distribusi level kognitif LOTS (C1, C2, C3) dan HOTS (C4, C5, C6).
- **Instruksi Tambahan (Custom Instruction)**: Untuk konteks kearifan lokal, bahasa khusus, dalil/ayat, atau studi kasus era digital.

### 3. Output Dokumen Kedinasan Terintegrasi (Deliverables)
- **Naskah Soal**: Format resmi dengan kop surat, stimulus kontekstual, ilustrasi visual, pilihan ganda A-D/A-E, dan ruang jawab esai.
- **Kunci Jawaban**: Rekapitulasi kunci cepat, pembahasan ilmiah, dan pedoman penskoran.
- **Kisi-Kisi Ujian**: Matriks CP, materi pokok, indikator, level kognitif, elemen karakter, dan bentuk soal.
- **Kartu Soal**: Format resmi LPMP/Kementerian per butir soal lengkap dengan rubrik.
- **Fitur Ekspor**:
  - **Unduh Word (.doc)** dengan tabel dan tata letak rapi.
  - **Cetak / PDF** berstandar A4 siap cetak.
  - **Unduh Paket Lengkap (Semua Dokumen)** hanya dalam satu klik.

### 4. Analisis Butir Soal Tingkat Lanjut (Post-Exam)
- **Matriks Respon Siswa**: Tersedia tombol instan *Muat Simulasi Data 30 Siswa*.
- **Taraf Kesukaran ($P$)**: Klasifikasi Mudah ($P > 0.70$), Sedang ($0.30 \le P \le 0.70$), dan Sukar ($P < 0.30$).
- **Daya Pembeda ($D$)**: Klasifikasi Sangat Baik ($D \ge 0.40$), Baik, Cukup, Buruk, dan Sangat Jelek ($D < 0$).
- **Reliabilitas Tes**: Dihitung otomatis menggunakan formula **KR-20 (Kuder-Richardson)**.
- **Deteksi Eror Otomatis (Smart Anomaly)**:
  - Mendeteksi jika kelompok siswa atas mayoritas memilih opsi tertentu selain kunci resmi (indikasi kunci salah/tertukar).
  - Mendeteksi daya pembeda negatif ($D < 0$).
  - Mendeteksi distraktor mati (tidak ada yang memilih).
- **Analisis Ketuntasan & Remedial**:
  - Grafik batang sebaran skor siswa di kelas (Chart.js).
  - Kurva peringkat nilai terhadap batas ambang KKM/KKTP.
  - Diagnosis materi spesifik yang paling banyak belum dikuasai (kelemahan klasikal).
  - Rekapitulasi otomatis nama siswa yang wajib remedial dan pengayaan.
  - Ekspor seluruh laporan ke **Microsoft Excel (.xlsx)**.

### 5. Pilihan Bahasa Soal & Lokalisasi Budaya
- **Bahasa Indonesia (Penuh)**: Baku dan sesuai kaidah tata bahasa Indonesia.
- **Bahasa Inggris (Full English)**: Seluruh stimulus, butir soal, opsi, dan pembahasan dalam Bahasa Inggris internasional.
- **Bilingual Kustom (Indonesia & Inggris)**: Kustomisasi jumlah soal Bahasa Indonesia dan Bahasa Inggris dengan dual counter/slider otomatis serta tombol bagi rata (50:50).
- **Bahasa Arab (Full Arabic - اللغة العربية)**: Seluruh butir soal disusun dalam Bahasa Arab fusha terstandar lengkap dengan dukungan RTL (*Right-to-Left*).
- **Bahasa Prancis (Full French - Français)**: Naskah soal dan rubrik penilaian dalam Bahasa Prancis baku.
- **Bahasa Palembang (Baso Pelembang / Kearifan Lokal)**: Stimulus dan soal kontekstual berbasis dialek khas Palembang (Sumatera Selatan) yang santun dan mendidik.

### 6. Fitur Tambahan & Aksesibilitas
- **Mode Kuis Interaktif (Kahoot/Quizizz Style)**: Dapat diproyeksikan langsung di kelas, dilengkapi countdown timer, Web Audio API sound effects, reveal jawaban, dan efek confetti.
- **Simulator TKA CBT**: Simulasi Asesmen Nasional otentik hingga 50 soal, timer mundur, kalkulasi skor otomatis, dan review per butir soal.
- **Date Picker Hari & Tanggal Pelaksanaan**: Konversi nama hari Indonesia otomatis dan input rentang tanggal kustom.
- **Dukungan Tema & Tata Letak**: Pilihan Dark Mode / Light Mode kontras tinggi serta pilihan Dashboard Atas atau Panel Kiri (Sidebar).

---

## 🚀 Cara Menjalankan Aplikasi Secara Lokal

Aplikasi dibangun menggunakan **React 19**, **Vite**, **Tailwind CSS**, **Lucide Icons**, **Chart.js**, dan **XLSX**.

1. Pastikan dependensi sudah terpasang:
   ```bash
   npm install
   ```

2. Jalankan server lokal:
   ```bash
   npm run dev
   ```

3. Buka browser pada alamat:
   ```
   http://localhost:3000
   ```

---

## ☁️ Panduan Deploy ke Vercel

Aplikasi ini sudah dilengkapi berkas `vercel.json` dan siap di-deploy langsung ke Vercel via GitHub:

1. **Repository GitHub**:
   - `https://github.com/cekguarman/genkiso.git`
2. **Langkah di Vercel**:
   - Masuk ke dashboard [Vercel](https://vercel.com).
   - Klik **"Add New..."** &rarr; **"Project"**.
   - Hubungkan akun GitHub Anda dan pilih repository **`genkiso`**.
   - Framework Preset: **Vite** (otomatis terdeteksi).
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Klik **Deploy**!
   - Aplikasi akan langsung live dengan domain `*.vercel.app`.

---

## 👤 Pengembang Aplikasi

**Armansyah, S.Kom, M.Pd, Gr.**  
*Narasumber Koding & Kecerdasan Artifisial Nasional Kemendikdasmen 2025*
