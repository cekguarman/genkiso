// Service Generator Capaian Pembelajaran (CP), Tujuan Pembelajaran (TP), dan Alur Tujuan Pembelajaran (ATP)
// Otomatis menyesuaikan Fase, Kelas, Kurikulum, Mata Pelajaran, dan Topik Materi

export const generateCP_TP_ATP = async ({
  fase,
  kelas,
  kurikulum,
  mataPelajaran,
  mataPelajaranCustom,
  topik,
  apiKey
}) => {
  const actualMapel = mataPelajaran === 'Lainnya' ? (mataPelajaranCustom || 'Mata Pelajaran') : mataPelajaran;
  const cleanTopik = topik && topik.trim() !== '' ? topik.trim() : 'Materi Pembelajaran Pokok';

  // Jika ada API Key Gemini, gunakan Gemini API untuk respon yang sangat spesifik
  if (apiKey && apiKey.trim() !== '') {
    try {
      const prompt = `Anda adalah Ahli Kurikulum dan Pengembangan Pembelajaran Nasional Kemendikdasmen.
Berdasarkan data berikut:
- Jenjang & Fase: Fase ${fase} (${kelas})
- Kurikulum: ${kurikulum}
- Mata Pelajaran: ${actualMapel}
- Topik / Lingkup Materi: ${cleanTopik}

Hasilkan rumusan resmi:
1. Capaian Pembelajaran (CP) untuk Fase ini pada topik tersebut (1 paragraf ringkas dan berbobot).
2. Tujuan Pembelajaran (TP) terukur (3-4 butir tujuan pembelajaran spesifik).
3. Alur Tujuan Pembelajaran (ATP) berurutan dari tahap awal hingga tahap aplikasi/evaluasi (3-4 tahapan alur).

Format JSON:
{
  "capaianPembelajaran": "...",
  "tujuanPembelajaran": ["TP 1...", "TP 2...", "TP 3..."],
  "alurTujuanPembelajaran": ["Tahap 1: ...", "Tahap 2: ...", "Tahap 3: ...", "Tahap 4: ..."]
}`;

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey.trim()}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: {
              temperature: 0.6,
              responseMimeType: 'application/json'
            }
          })
        }
      );

      if (response.ok) {
        const data = await response.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (text) {
          const parsed = JSON.parse(text);
          if (parsed.capaianPembelajaran && Array.isArray(parsed.tujuanPembelajaran)) {
            return parsed;
          }
        }
      }
    } catch (e) {
      console.warn('Gemini CP generator fallback to pedagogical engine:', e);
    }
  }

  // Built-in High-Fidelity Pedagogical Heuristic Engine (100% Offline & Instan)
  const isKodingAI = actualMapel.toLowerCase().includes('koding') || actualMapel.toLowerCase().includes('kecerdasan') || actualMapel.toLowerCase().includes('ai');
  const isInformatika = actualMapel.toLowerCase().includes('informatika');
  const isMatematika = actualMapel.toLowerCase().includes('matematika') || actualMapel.toLowerCase().includes('aljabar') || actualMapel.toLowerCase().includes('kalkulus');
  const isFisika = actualMapel.toLowerCase().includes('fisika');
  const isKimia = actualMapel.toLowerCase().includes('kimia');

  let cp = '';
  let tp = [];
  let atp = [];

  if (isMatematika) {
    cp = `Pada akhir Fase ${fase} (${kelas}), peserta didik mampu memodelkan persoalan secara matematis, melakukan operasi aljabar, geometri, dan trigonometri berbasis perhitungan angka terukur pada materi "${cleanTopik}", menganalisis grafik kurva Kartesius, serta menyelesaikan masalah kuantitatif kontekstual dengan penalaran logis dan pembuktian matematis yang akurat.`;
    tp = [
      `Mengidentifikasi data numerik, variabel, dan parameter rumus matematis pada topik "${cleanTopik}".`,
      `Menerapkan algoritma perhitungan eksak, manipulasi aljabar, dan teorema geometri untuk menyelesaikan soal hitungan pada "${cleanTopik}".`,
      `Menganalisis representasi grafik koordinat Kartesius serta diagram geometris untuk memvalidasi hasil kalkulasi numerik.`
    ];
    atp = [
      `Tahap 1 (Konseptualisasi & Definisi Variabel): Pemahaman notasi, besaran, dan rumus inti "${cleanTopik}".`,
      `Tahap 2 (Representasi Geometri & Grafik): Pemodelan diagram segitiga, grafik fungsi, atau tabel data angka.`,
      `Tahap 3 (Kalkulasi Eksak): Operasi hitung bertahap, eliminasi/substitusi, dan penentuan nilai akhir angka.`,
      `Tahap 4 (Verifikasi Solusi): Pengujian hasil perhitungan terhadap batasan matematis dan interpretasi kontekstual.`
    ];
  } else if (isFisika) {
    cp = `Pada akhir Fase ${fase} (${kelas}), peserta didik mampu menerapkan hukum-hukum fisika, memetakan diagram gaya bebas dan vektor gerak pada materi "${cleanTopik}", melakukan perhitungan kuantitatif berbasis data angka numerik dan satuan SI, serta mengevaluasi grafik fisis (seperti grafik v-t atau rangkaian listrik) secara ilmiah dan teliti.`;
    tp = [
      `Mengidentifikasi besaran fisis terukur, satuan baku internasional (SI), dan diagram vektor pada materi "${cleanTopik}".`,
      `Memformulasikan hukum fisika (Hukum Newton, Ohm/Kirchhoff, termodinamika, kinematika) ke dalam perhitungan matematis bertahap.`,
      `Menghitung nilai percepatan, resultan gaya, kuat arus, tegangan, atau energi secara presisi berdasarkan stimulus gambar diagram.`
    ];
    atp = [
      `Tahap 1 (Diagram Sistem & Vektor): Pengamatan sketsa fisis, diagram gaya bebas (FBD), atau skema rangkaian listrik pada "${cleanTopik}".`,
      `Tahap 2 (Formulasi Matematis): Penurunan persamaan hukum fisika sesuai kondisi sistem benda.`,
      `Tahap 3 (Kalkulasi Numerik): Substitusi nilai angka besaran terukur ke dalam rumus fisika hingga diperoleh hasil kuantitatif.`,
      `Tahap 4 (Analisis Grafik & Refleksi): Penarikan kesimpulan berdasarkan kurva gerak atau hukum kekekalan fisis.`
    ];
  } else if (isKimia) {
    cp = `Pada akhir Fase ${fase} (${kelas}), peserta didik mampu menganalisis hubungan kuantitatif zat kimia, melakukan perhitungan stoikiometri mol, titrasi asam-basa, termokimia, atau potensial sel pada materi "${cleanTopik}", menginterpretasikan data eksperimen volumetri dan diagram tingkat energi, serta memecahkan persoalan kimia berbasis data empiris secara teliti.`;
    tp = [
      `Menyetarakan persamaan reaksi kimia dan menentukan perbandingan mol serta massa zat pada topik "${cleanTopik}".`,
      `Melakukan perhitungan volumetri asam-basa, perubahan entalpi (ΔH), atau potensial sel (E° sel) dengan langkah matematis terstruktur.`,
      `Menganalisis diagram tingkat energi, data alat buret laboratorium, atau sel elektrokimia untuk menyimpulkan hasil reaksi.`
    ];
    atp = [
      `Tahap 1 (Persamaan Reaksi & Data Awal): Identifikasi rumus kimia, kesetaraan reaksi, dan data massa/volume/molaritas pada "${cleanTopik}".`,
      `Tahap 2 (Konversi Stoikiometri Mol): Perhitungan perbandingan mol pereaksi dan penentuan pereaksi pembatas.`,
      `Tahap 3 (Kalkulasi Kuantitatif Eksak): Penggunaan rumus volumetri netralisasi, termokimia, atau persamaan potensial sel.`,
      `Tahap 4 (Evaluasi Data Eksperimen): Analisis titik akhir titrasi, perubahan entalpi reaksi, dan efisiensi hasil kimiawi.`
    ];
  } else if (isKodingAI) {
    cp = `Pada akhir Fase ${fase} (${kelas}), peserta didik mampu memahami logika komputasi mendasar, merancang struktur algoritma program, mengeksplorasi cara kerja model kecerdasan artifisial secara kontekstual pada materi "${cleanTopik}", serta menerapkan prinsip etika dan keselamatan digital dalam pemanfaatan teknologi kecerdasan artifisial.`;
    tp = [
      `Memahami konsep fundamental, istilah kunci, dan mekanisme kerja pada topik "${cleanTopik}".`,
      `Merancang algoritma solutif dan logika pemrograman terstruktur untuk menyelesaikan permasalahan kontekstual terkait "${cleanTopik}".`,
      `Mengevaluasi output model kecerdasan artifisial dan menganalisis implikasi etis, privasi data, serta dampaknya bagi masyarakat.`
    ];
    atp = [
      `Tahap 1 (Konseptualisasi): Eksplorasi fenomena, definisi, dan pondasi berpikir komputasional pada "${cleanTopik}".`,
      `Tahap 2 (Konstruksi Logika): Perancangan diagram alir (flowchart), pseudocode, dan blok kode pemrograman.`,
      `Tahap 3 (Implementasi AI): Eksperimentasi integrasi model pembelajaran mesin sederhana dan pengolahan data.`,
      `Tahap 4 (Refleksi & Etika): Penilaian kritis terhadap akurasi, bias algoritma, dan tanggung jawab etis.`
    ];
  } else if (isInformatika) {
    cp = `Pada akhir Fase ${fase} (${kelas}), peserta didik mampu menerapkan cara berpikir komputasional secara terstruktur, mengoperasikan perangkat teknologi digital secara optimal pada materi "${cleanTopik}", dan menghasilkan artefak komputasional yang bermanfaat dengan memperhatikan etika kewargaan digital.`;
    tp = [
      `Mengidentifikasi dan menjelaskan struktur konsep utama pada materi "${cleanTopik}" secara kritis.`,
      `Menganalisis data dan pola persoalan dengan pendekatan dekomposisi serta abstraksi komputasional.`,
      `Menghasilkan solusi teknologi terpadu yang adaptif terhadap perkembangan era masyarakat 5.0.`
    ];
    atp = [
      `Tahap 1: Pengenalan Lingkup & Fenomena Masalah pada materi "${cleanTopik}".`,
      `Tahap 2: Analisis Sistemik, Pengumpulan Data, dan Pemetaan Pola Informasi.`,
      `Tahap 3: Pembuatan Model Pemecahan Masalah dan Pengujian Solusi Digital.`,
      `Tahap 4: Diseminasi, Dokumentasi Teknis, dan Evaluasi Kinerja Artefak.`
    ];
  } else {
    // Mata Pelajaran Umum (IPA, IPS, Bahasa, dll.)
    cp = `Pada akhir Fase ${fase} (${kelas}), peserta didik mampu menganalisis, menginterpretasikan, dan merefleksikan konsep-konsep esensial pada materi "${cleanTopik}" dalam mata pelajaran ${actualMapel} guna memecahkan masalah kontekstual kehidupan sehari-hari dengan penalaran kritis dan berkarakter luhur.`;
    tp = [
      `Menjelaskan prinsip, kaidah ilmiah, dan konsep inti yang mendasari materi "${cleanTopik}".`,
      `Menerapkan prosedur pemecahan masalah secara terstruktur dengan memanfaatkan bukti empiris dan penalaran logis.`,
      `Mengkomunikasikan hasil analisis dan gagasan solutif secara runtut, kritis, dan kolaboratif.`
    ];
    atp = [
      `Tahap 1 (Orientasi Masalah): Membangun pemahaman awal dan identifikasi pertanyaan pemantik seputar "${cleanTopik}".`,
      `Tahap 2 (Penyelidikan Terbimbing): Pengumpulan informasi, eksperimentasi, atau analisis sumber terpercaya.`,
      `Tahap 3 (Sintesis & Aplikasi): Mengembangkan simpulan, generalisasi konsep, dan pengaplikasian pada situasi baru.`,
      `Tahap 4 (Refleksi & Asesmen): Evaluasi proses berpikir, penyusunan umpan balik, dan penguatan kompetensi.`
    ];
  }

  return {
    capaianPembelajaran: cp,
    tujuanPembelajaran: tp,
    alurTujuanPembelajaran: atp
  };
};
