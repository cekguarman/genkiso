import * as XLSX from 'xlsx';
import { formatHariTanggal, getLanguageLabel } from '../data/curriculumData';

/**
 * Download text content as a file with specified MIME type
 */
const downloadFile = (content, filename, mimeType) => {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

/**
 * Bungkus konten HTML dalam template dokumen Word (.doc) berstandar Microsoft Office
 * Menggunakan styling MSO resmi, margin standar (2.54 cm / 1 inch), font terstandar
 */
export const wrapWordDocument = (title, bodyHtml) => {
  return `<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head>
  <meta charset="utf-8">
  <title>${title}</title>
  <!--[if gte mso 9]>
  <xml>
    <w:WordDocument>
      <w:View>Print</w:View>
      <w:Zoom>100</w:Zoom>
      <w:DoNotOptimizeForBrowser/>
    </w:WordDocument>
  </xml>
  <![endif]-->
  <style>
    @page {
      size: A4;
      margin: 2.54cm 2.54cm 2.54cm 2.54cm;
      mso-page-orientation: portrait;
    }
    body {
      font-family: 'Calibri', 'Times New Roman', Times, serif;
      font-size: 11pt;
      line-height: 1.25;
      color: #111111;
      margin: 0;
      padding: 0;
    }
    h1, h2, h3, h4 {
      font-family: 'Arial', sans-serif;
      color: #000000;
      margin-top: 6pt;
      margin-bottom: 4pt;
    }
    table {
      border-collapse: collapse;
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
    }
    /* Tabel tanpa garis untuk identitas dan tata letak */
    table.table-borderless {
      width: 100%;
      border: 0;
      border-collapse: collapse;
      margin-bottom: 12pt;
    }
    table.table-borderless td {
      border: 0;
      padding: 3pt 4pt;
      vertical-align: top;
      font-size: 10.5pt;
    }
    /* Tabel data dengan border rapi */
    table.table-data {
      width: 100%;
      border-collapse: collapse;
      margin-top: 10pt;
      margin-bottom: 14pt;
      font-size: 10pt;
    }
    table.table-data th, table.table-data td {
      border: 1px solid #444444;
      padding: 5pt 6pt;
      vertical-align: top;
    }
    table.table-data th {
      background-color: #f3f4f6;
      font-weight: bold;
      text-align: center;
      color: #000000;
    }
    .kop-header {
      text-align: center;
      border-bottom: 2.5pt double #000000;
      padding-bottom: 6pt;
      margin-bottom: 14pt;
    }
    .kop-instansi {
      font-size: 10pt;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 1pt;
      color: #444444;
      margin-bottom: 2pt;
    }
    .kop-sekolah {
      font-size: 15pt;
      font-weight: bold;
      text-transform: uppercase;
      margin-bottom: 3pt;
    }
    .kop-sub {
      font-size: 10.5pt;
      color: #222222;
    }
    .stimulus-box {
      background-color: #f8fafc;
      border-left: 3pt solid #7e22ce;
      padding: 6pt 10pt;
      margin-top: 4pt;
      margin-bottom: 6pt;
      font-style: italic;
      font-size: 10pt;
      color: #334155;
    }
    .page-break {
      page-break-after: always;
      mso-special-character: line-break;
    }
    .card-box {
      border: 1.5pt solid #333333;
      padding: 12pt;
      margin-bottom: 18pt;
      page-break-inside: avoid;
    }
  </style>
</head>
<body>
  ${bodyHtml}
</body>
</html>`;
};

/**
 * 1. Ekspor Naskah Soal ke Word (.doc)
 * Bersih, rapi dengan tabel border 0 untuk identitas & opsi pilihan
 */
export const exportNaskahSoalToWord = (examConfig, questions) => {
  const actualKurikulum = examConfig.kurikulum === 'Lainnya' ? examConfig.kurikulumCustom : examConfig.kurikulum;
  const actualMapel = examConfig.mataPelajaran === 'Lainnya' ? examConfig.mataPelajaranCustom : examConfig.mataPelajaran;

  let body = `
  <!-- KOP SURAT (Tabel Border 0 Bersih) -->
  <div class="kop-header">
    <div class="kop-instansi">DINAS PENDIDIKAN / PEMERINTAH DAERAH</div>
    <div class="kop-sekolah">${examConfig.namaInstitusi.toUpperCase()}</div>
    <div class="kop-sub">PENILAIAN / ASESMEN SUMATIF TAHUN AJARAN 2025/2026</div>
    <div class="kop-sub">Kurikulum: ${actualKurikulum} | ${examConfig.fase} - ${examConfig.kelas}</div>
  </div>

  <!-- TABEL IDENTITAS UJIAN (Border 0) -->
  <table class="table-borderless">
    <tr>
      <td width="18%"><strong>Mata Pelajaran</strong></td>
      <td width="32%">: ${actualMapel}</td>
      <td width="18%"><strong>Hari / Tanggal</strong></td>
      <td width="32%">: ${formatHariTanggal(examConfig.tanggalUjian, examConfig.hariTanggalCustom)}</td>
    </tr>
    <tr>
      <td><strong>Tingkat / Kelas</strong></td>
      <td>: ${examConfig.kelas} (${examConfig.fase})</td>
      <td><strong>Alokasi Waktu</strong></td>
      <td>: ${examConfig.alokasiWaktu || '90 Menit'}</td>
    </tr>
    <tr>
      <td><strong>Guru Pengampu</strong></td>
      <td>: ${examConfig.namaGuru}</td>
      <td><strong>Bahasa Pengantar</strong></td>
      <td>: ${getLanguageLabel(examConfig.languageConfig)}</td>
    </tr>
    <tr>
      <td><strong>Jumlah Soal</strong></td>
      <td>: ${questions.length} Butir</td>
      <td><strong>Kurikulum</strong></td>
      <td>: ${actualKurikulum}</td>
    </tr>
  </table>

  <!-- PETUNJUK UMUM -->
  <div style="border: 1px solid #cbd5e1; background-color: #f8fafc; padding: 6pt 10pt; margin-bottom: 16pt; font-size: 9.5pt; border-radius: 4px;">
    <strong>PETUNJUK PENGERJAAN:</strong>
    <ol style="margin: 2pt 0 0 16pt; padding: 0;">
      <li>Periksa dan bacalah setiap butir soal dengan teliti sebelum Anda menjawabnya.</li>
      <li>Laporkan kepada pengawas jika terdapat naskah soal yang rusak, buram, atau tidak lengkap.</li>
      <li>Dahulukan menjawab butir-butir soal yang Anda anggap lebih mudah.</li>
      <li>Periksa kembali kelengkapan jawaban Anda sebelum diserahkan kepada pengawas ujian.</li>
    </ol>
  </div>

  <div style="text-align: center; font-size: 13pt; font-weight: bold; margin-bottom: 14pt; letter-spacing: 0.5pt;">
    NASKAH SOAL
  </div>
  `;

  // Render Setiap Butir Soal dengan Tabel Border 0
  questions.forEach(q => {
    const isArabic = q.language === 'ar';
    body += `
    <table class="table-borderless" style="margin-bottom: 12pt;" ${isArabic ? 'dir="rtl"' : ''}>
      <tr>
        <td style="width: 26pt; font-weight: bold; font-size: 11pt;" align="${isArabic ? 'left' : 'right'}">
          ${q.no}.
        </td>
        <td>
          ${q.language && q.language !== 'id' ? `<div style="font-size: 8.5pt; font-weight: bold; color: #6b21a8; background-color: #f3e8ff; padding: 1.5pt 5pt; border-radius: 3px; display: inline-block; margin-bottom: 3pt;">[${q.language === 'en' ? 'English' : (q.language === 'ar' ? 'العربية' : (q.language === 'fr' ? 'Français' : (q.language === 'palembang' ? 'Baso Pelembang' : q.language)))}]</div>` : ''}
          ${q.stimulus ? `<div class="stimulus-box">${q.stimulus}</div>` : ''}
          <div style="font-weight: 600; margin-bottom: 5pt; line-height: 1.3;">
            ${q.questionText}
          </div>
    `;

    // Opsi Pilihan Ganda dalam Tabel Border 0
    if (q.options && q.options.length > 0) {
      body += `<table style="width: 100%; border: 0; border-collapse: collapse; margin-top: 3pt;">`;
      q.options.forEach(opt => {
        body += `
        <tr>
          <td style="width: 22pt; font-weight: bold; border: 0; padding: 2.5pt 0; vertical-align: top;">${opt.key}.</td>
          <td style="border: 0; padding: 2.5pt 0; vertical-align: top;">${opt.text}</td>
        </tr>`;
      });
      body += `</table>`;
    } else {
      // Area Jawaban Esai Rapi
      body += `
      <div style="margin-top: 10pt; height: 75pt; border: 1px dashed #94a3b8; background-color: #fafafa; padding: 6pt; font-size: 9pt; color: #94a3b8; font-style: italic;">
        (Ruang Jawaban Uraian Peserta Didik)
      </div>`;
    }

    body += `
        </td>
      </tr>
    </table>
    `;
  });

  // Tanda Tangan Guru Pengampu (Tabel Border 0 Rapi di Kanan Bawah)
  body += `
  <table class="table-borderless" style="margin-top: 25pt;">
    <tr>
      <td width="60%"></td>
      <td width="40%" align="center">
        Mengetahui,<br>
        Guru Pengampu Mata Pelajaran,<br><br><br><br>
        <strong><u>${examConfig.namaGuru}</u></strong>
      </td>
    </tr>
  </table>
  `;

  const wordContent = wrapWordDocument(`Naskah Soal - ${actualMapel}`, body);
  downloadFile(wordContent, `Naskah_Soal_${actualMapel}_${examConfig.kelas}.doc`, 'application/msword');
};

/**
 * 2. Ekspor Kunci Jawaban ke Word (.doc)
 * Tabel bersih, proporsional, tanpa atribut footer yang berulang
 */
export const exportKunciJawabanToWord = (examConfig, questions) => {
  const actualMapel = examConfig.mataPelajaran === 'Lainnya' ? examConfig.mataPelajaranCustom : examConfig.mataPelajaran;
  const actualKurikulum = examConfig.kurikulum === 'Lainnya' ? examConfig.kurikulumCustom : examConfig.kurikulum;

  let body = `
  <div class="kop-header">
    <div class="kop-instansi">DINAS PENDIDIKAN / PEMERINTAH DAERAH</div>
    <div class="kop-sekolah">${examConfig.namaInstitusi.toUpperCase()}</div>
    <div class="kop-sub">REKAPITULASI KUNCI JAWABAN & PEDOMAN PENILAIAN</div>
    <div class="kop-sub">Mata Pelajaran: ${actualMapel} | Kelas: ${examConfig.kelas} | Kurikulum: ${actualKurikulum}</div>
  </div>

  <table class="table-data">
    <thead>
      <tr>
        <th width="7%">No.</th>
        <th width="20%">Bentuk Soal</th>
        <th width="15%">Kunci Jawaban</th>
        <th width="14%">Level Kognitif</th>
        <th width="44%">Pembahasan & Pedoman Penskoran</th>
      </tr>
    </thead>
    <tbody>
  `;

  questions.forEach(q => {
    const kunci = q.correctKeys ? q.correctKeys.join(', ') : (q.correctKey || '-');
    body += `
    <tr>
      <td align="center" style="font-weight: bold;">${q.no}</td>
      <td>${q.typeName}</td>
      <td align="center" style="font-weight: bold; font-size: 11pt; color: #7e22ce;">${kunci}</td>
      <td align="center">${q.levelKognitif}<br><small>(${q.difficulty})</small></td>
      <td>
        <div style="margin-bottom: 3pt;"><strong>Pembahasan:</strong> ${q.explanation}</div>
        <div style="font-size: 9pt; color: #374151; background-color: #f9fafb; padding: 3pt; border-left: 2pt solid #9333ea;">
          <strong>Pedoman Penskoran:</strong> ${q.scoringGuide}
        </div>
      </td>
    </tr>`;
  });

  body += `
    </tbody>
  </table>

  <table class="table-borderless" style="margin-top: 25pt;">
    <tr>
      <td width="60%"></td>
      <td width="40%" align="center">
        Penyusun Instrumen,<br><br><br><br>
        <strong><u>${examConfig.namaGuru}</u></strong>
      </td>
    </tr>
  </table>
  `;

  const wordContent = wrapWordDocument(`Kunci Jawaban - ${actualMapel}`, body);
  downloadFile(wordContent, `Kunci_Jawaban_${actualMapel}_${examConfig.kelas}.doc`, 'application/msword');
};

/**
 * 3. Ekspor Kisi-Kisi Ujian ke Word (.doc)
 * Matriks terstruktur rapi
 */
export const exportKisiKisiToWord = (examConfig, questions) => {
  const actualMapel = examConfig.mataPelajaran === 'Lainnya' ? examConfig.mataPelajaranCustom : examConfig.mataPelajaran;
  const actualKurikulum = examConfig.kurikulum === 'Lainnya' ? examConfig.kurikulumCustom : examConfig.kurikulum;

  let body = `
  <div class="kop-header">
    <div class="kop-instansi">DINAS PENDIDIKAN / PEMERINTAH DAERAH</div>
    <div class="kop-sekolah">${examConfig.namaInstitusi.toUpperCase()}</div>
    <div class="kop-sub">KISI-KISI PENULISAN SOAL ASESMEN SUMATIF</div>
    <div class="kop-sub">Kurikulum: ${actualKurikulum} | Mata Pelajaran: ${actualMapel} | Kelas: ${examConfig.kelas}</div>
  </div>

  <table class="table-data">
    <thead>
      <tr>
        <th width="5%">No.</th>
        <th width="22%">Capaian Pembelajaran (CP)</th>
        <th width="16%">Materi Pokok</th>
        <th width="23%">Indikator Soal</th>
        <th width="10%">Level Kognitif</th>
        <th width="12%">Elemen Karakter</th>
        <th width="12%">Bentuk Soal</th>
      </tr>
    </thead>
    <tbody>
  `;

  questions.forEach(q => {
    body += `
    <tr>
      <td align="center" style="font-weight: bold;">${q.no}</td>
      <td>${q.capaianPembelajaran}</td>
      <td><strong>${q.materi}</strong></td>
      <td>${q.indikator}</td>
      <td align="center"><strong>${q.levelKognitif}</strong><br><small>(${q.difficulty})</small></td>
      <td align="center"><span style="background-color: #f3e8ff; color: #6b21a8; font-weight: bold; padding: 2pt 4pt; font-size: 8.5pt;">${q.elemenIntegrasi || '-'}</span></td>
      <td align="center">${q.typeName}</td>
    </tr>`;
  });

  body += `
    </tbody>
  </table>

  <!-- Tanda Tangan Dua Kolom (Border 0) -->
  <table class="table-borderless" style="margin-top: 30pt;">
    <tr>
      <td width="50%" align="center">
        Mengetahui,<br>
        Kepala Sekolah / Waka Kurikulum,<br><br><br><br>
        <strong><u>............................................................</u></strong><br>
        NIP. .....................................................
      </td>
      <td width="50%" align="center">
        Dibuat Oleh,<br>
        Guru Mata Pelajaran,<br><br><br><br>
        <strong><u>${examConfig.namaGuru}</u></strong><br>
        NIP. .....................................................
      </td>
    </tr>
  </table>
  `;

  const wordContent = wrapWordDocument(`Kisi-Kisi Ujian - ${actualMapel}`, body);
  downloadFile(wordContent, `Kisi_Kisi_${actualMapel}_${examConfig.kelas}.doc`, 'application/msword');
};

/**
 * 4. Ekspor Kartu Soal ke Word (.doc)
 * Setiap kartu soal memiliki bingkai rapi dan terpisah halaman (page break)
 */
export const exportKartuSoalToWord = (examConfig, questions) => {
  const actualMapel = examConfig.mataPelajaran === 'Lainnya' ? examConfig.mataPelajaranCustom : examConfig.mataPelajaran;
  const actualKurikulum = examConfig.kurikulum === 'Lainnya' ? examConfig.kurikulumCustom : examConfig.kurikulum;

  let body = '';

  questions.forEach((q, idx) => {
    const kunci = q.correctKeys ? q.correctKeys.join(', ') : (q.correctKey || '-');

    body += `
    <div class="card-box">
      <!-- Kop Kartu -->
      <table class="table-borderless" style="border-bottom: 2pt solid #000; margin-bottom: 8pt; padding-bottom: 4pt;">
        <tr>
          <td width="100%" align="center">
            <div style="font-size: 13pt; font-weight: bold; text-transform: uppercase;">${examConfig.namaInstitusi}</div>
            <div style="font-size: 10.5pt; font-weight: bold;">KARTU SOAL ASESMEN SUMATIF TAHUN AJARAN 2025/2026</div>
          </td>
        </tr>
      </table>

      <!-- Identitas Satuan Pendidikan & Mata Pelajaran (Border 0) -->
      <table class="table-borderless" style="margin-bottom: 6pt;">
        <tr>
          <td width="50%">
            <strong>Satuan Pendidikan:</strong> ${examConfig.namaInstitusi}<br>
            <strong>Mata Pelajaran:</strong> ${actualMapel}<br>
            <strong>Kelas / Fase:</strong> ${examConfig.kelas} / ${examConfig.fase}
          </td>
          <td width="50%">
            <strong>Kurikulum:</strong> ${actualKurikulum}<br>
            <strong>Penyusun:</strong> ${examConfig.namaGuru}<br>
            <strong>Bentuk Soal:</strong> ${q.typeName} ${q.language && q.language !== 'id' ? `(${q.languageLabel || q.language})` : ''}
          </td>
        </tr>
      </table>

      <!-- Tabel Spesifikasi Butir -->
      <table class="table-data" style="margin-top: 4pt; margin-bottom: 8pt;">
        <tr>
          <td width="30%" style="background-color: #f8fafc; font-weight: bold;">Capaian Pembelajaran (CP)</td>
          <td>${q.capaianPembelajaran}</td>
        </tr>
        <tr>
          <td style="background-color: #f8fafc; font-weight: bold;">Materi Pokok</td>
          <td><strong>${q.materi}</strong></td>
        </tr>
        <tr>
          <td style="background-color: #f8fafc; font-weight: bold;">Indikator Soal</td>
          <td>${q.indikator}</td>
        </tr>
        <tr>
          <td style="background-color: #f8fafc; font-weight: bold;">Level Kognitif & Kesulitan</td>
          <td><strong>${q.levelKognitif}</strong> (${q.levelLabel}) | Tingkat: <strong>${q.difficulty}</strong></td>
        </tr>
        <tr>
          <td style="background-color: #f8fafc; font-weight: bold;">Elemen Karakter Terintegrasi</td>
          <td><strong>${q.elemenIntegrasi || '-'}</strong></td>
        </tr>
        <tr>
          <td style="background-color: #f8fafc; font-weight: bold;">Sumber / Acuan Materi</td>
          <td style="font-style: italic;">${q.sumber}</td>
        </tr>
      </table>

      <!-- Rumusan Butir Soal -->
      <div style="border: 1px solid #94a3b8; background-color: #fcfcfc; padding: 8pt; margin-top: 8pt; margin-bottom: 8pt;">
        <div style="font-weight: bold; margin-bottom: 4pt; font-size: 10.5pt; color: #000;">
          RUMUSAN BUTIR SOAL NOMOR: ${q.no}
        </div>
        ${q.stimulus ? `<div class="stimulus-box">${q.stimulus}</div>` : ''}
        <div style="font-weight: 600; margin-bottom: 6pt;">
          ${q.questionText}
        </div>
        `;

    if (q.options && q.options.length > 0) {
      body += `<table style="width: 100%; border: 0; border-collapse: collapse;">`;
      q.options.forEach(opt => {
        body += `
        <tr>
          <td style="width: 20pt; font-weight: bold; border: 0; padding: 2pt 0; vertical-align: top;">${opt.key}.</td>
          <td style="border: 0; padding: 2pt 0; vertical-align: top;">${opt.text}</td>
        </tr>`;
      });
      body += `</table>`;
    }

    body += `
      </div>

      <!-- Kunci & Rubrik Penskoran -->
      <table class="table-data" style="margin-top: 4pt;">
        <tr>
          <td width="30%" style="background-color: #f8fafc; font-weight: bold;">Kunci Jawaban</td>
          <td style="font-weight: bold; color: #7e22ce; font-size: 11pt;">${kunci}</td>
        </tr>
        <tr>
          <td style="background-color: #f8fafc; font-weight: bold;">Pedoman Penskoran</td>
          <td>${q.scoringGuide}</td>
        </tr>
        <tr>
          <td style="background-color: #f8fafc; font-weight: bold;">Pembahasan Ilmiah</td>
          <td>${q.explanation}</td>
        </tr>
      </table>
    </div>
    ${idx < questions.length - 1 ? '<div class="page-break"></div>' : ''}
    `;
  });

  const wordContent = wrapWordDocument(`Kartu Soal - ${actualMapel}`, body);
  downloadFile(wordContent, `Kartu_Soal_${actualMapel}_${examConfig.kelas}.doc`, 'application/msword');
};

/**
 * 5. Ekspor Hasil Analisis ke Excel (.xlsx)
 */
export const exportAnalysisToExcel = (examConfig, analysisData, studentsWithScores, questions) => {
  const wb = XLSX.utils.book_new();

  // Sheet 1: Rekap Nilai Siswa
  const studentDataRows = studentsWithScores.map((s, idx) => {
    const row = {
      'No.': idx + 1,
      'Nama Siswa': s.name,
      'Total Skor': s.totalScore,
      'Skor Maksimal': s.maxPossibleScore,
      'Nilai Akhir (0-100)': s.finalGrade,
      'Status Ketuntasan': s.finalGrade >= analysisData.kkm ? 'TUNTAS' : 'REMEDIAL'
    };
    questions.forEach(q => {
      row[`No. ${q.no}`] = s.scoresPerQuestion[q.no] || 0;
    });
    return row;
  });

  const wsStudents = XLSX.utils.json_to_sheet(studentDataRows);
  XLSX.utils.book_append_sheet(wb, wsStudents, 'Matriks Skor Siswa');

  // Sheet 2: Analisis Butir Soal
  const itemDataRows = analysisData.itemStats.map(item => ({
    'Nomor Soal': item.no,
    'Bentuk Soal': item.typeName,
    'Materi Pokok': item.materi,
    'Level Kognitif': item.levelKognitif,
    'Jumlah Benar': item.totalCorrect,
    'Tingkat Kesukaran (P)': item.pVal,
    'Kategori Kesukaran': item.kesukaranLabel,
    'Daya Pembeda (D)': item.dVal,
    'Kategori Daya Pembeda': item.dayaPembedaLabel,
    'Rekomendasi Status Soal': item.statusSoal,
    'Peringatan / Catatan Eror': item.warnings.map(w => w.message).join(' | ') || 'Normal'
  }));

  const wsItems = XLSX.utils.json_to_sheet(itemDataRows);
  XLSX.utils.book_append_sheet(wb, wsItems, 'Analisis Butir Soal');

  // Sheet 3: Statistik Ujian & Ketuntasan Klasikal
  const statsRows = [
    { 'Parameter Evaluasi': 'Mata Pelajaran', 'Nilai': examConfig.mataPelajaran },
    { 'Parameter Evaluasi': 'Tingkat / Kelas', 'Nilai': examConfig.kelas },
    { 'Parameter Evaluasi': 'Guru Pengampu', 'Nilai': examConfig.namaGuru },
    { 'Parameter Evaluasi': 'Jumlah Peserta Tes (N)', 'Nilai': analysisData.sampleSize },
    { 'Parameter Evaluasi': 'Kriteria Ketuntasan Minimal (KKM)', 'Nilai': analysisData.kkm },
    { 'Parameter Evaluasi': 'Rata-rata Nilai (Mean)', 'Nilai': analysisData.meanGrade },
    { 'Parameter Evaluasi': 'Standar Deviasi', 'Nilai': analysisData.stdDev },
    { 'Parameter Evaluasi': 'Nilai Tertinggi', 'Nilai': analysisData.maxGrade },
    { 'Parameter Evaluasi': 'Nilai Terendah', 'Nilai': analysisData.minGrade },
    { 'Parameter Evaluasi': 'Reliabilitas Tes (KR-20)', 'Nilai': `${analysisData.kr20} (${analysisData.reliabilityLabel})` },
    { 'Parameter Evaluasi': 'Persentase Ketuntasan Belajar', 'Nilai': `${analysisData.passRate}%` },
    { 'Parameter Evaluasi': 'Jumlah Siswa Tuntas', 'Nilai': analysisData.passedCount },
    { 'Parameter Evaluasi': 'Jumlah Siswa Belum Tuntas (Remedial)', 'Nilai': analysisData.failedCount }
  ];

  const wsStats = XLSX.utils.json_to_sheet(statsRows);
  XLSX.utils.book_append_sheet(wb, wsStats, 'Statistik & Ringkasan');

  // Sheet 4: Daftar Remedial & Pengayaan
  const remedialRows = analysisData.failedStudents.map((s, idx) => ({
    'No.': idx + 1,
    'Nama Siswa': s.name,
    'Nilai': s.finalGrade,
    'Status': 'Perlu Remedial',
    'Rekomendasi Tindak Lanjut': `Pembelajaran ulang materi: ${analysisData.weakTopics.slice(0, 2).map(t => t.topic).join(', ')}`
  }));
  const wsRemedial = XLSX.utils.json_to_sheet(remedialRows.length > 0 ? remedialRows : [{ 'Keterangan': 'Semua siswa tuntas' }]);
  XLSX.utils.book_append_sheet(wb, wsRemedial, 'Daftar Remedial');

  const enrichmentRows = analysisData.passedStudents.map((s, idx) => ({
    'No.': idx + 1,
    'Nama Siswa': s.name,
    'Nilai': s.finalGrade,
    'Status': 'Tuntas / Pengayaan',
    'Rekomendasi Tindak Lanjut': 'Diberikan penugasan berbasis proyek / pengayaan HOTS'
  }));
  const wsEnrichment = XLSX.utils.json_to_sheet(enrichmentRows);
  XLSX.utils.book_append_sheet(wb, wsEnrichment, 'Daftar Pengayaan');

  XLSX.writeFile(wb, `Laporan_Analisis_Asesmen_${examConfig.mataPelajaran}_${examConfig.kelas}.xlsx`);
};

/**
 * 6. Cetak Langsung / Unduh PDF menggunakan browser engine
 */
export const triggerPrintDocument = () => {
  window.print();
};
