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
  const isInformatika = actualMapel.toLowerCase().includes('informatika') || actualMapel.toLowerCase().includes('komputer');
  const isMatematika = actualMapel.toLowerCase().includes('matematika') || actualMapel.toLowerCase().includes('aljabar') || actualMapel.toLowerCase().includes('kalkulus') || actualMapel.toLowerCase().includes('geometri');
  const isFisika = actualMapel.toLowerCase().includes('fisika');
  const isKimia = actualMapel.toLowerCase().includes('kimia');
  const isEkonomi = actualMapel.toLowerCase().includes('ekonomi') || actualMapel.toLowerCase().includes('akuntansi');
  const isBiologi = actualMapel.toLowerCase().includes('biologi') || actualMapel.toLowerCase().includes('genetika');
  const isGeografi = actualMapel.toLowerCase().includes('geografi');

  let cp = '';
  let tp = [];
  let atp = [];

  if (isMatematika) {
    cp = `Pada akhir Fase ${fase} (${kelas}), peserta didik mampu memodelkan persoalan secara matematis, melakukan operasi hitung, manipulasi aljabar, kalkulasi geometri, dan analisis statistik berbasis data angka terukur pada materi "${cleanTopik}", menganalisis grafik koordinat dan diagram teknis, serta menyelesaikan masalah kuantitatif kontekstual dengan penalaran logis dan pembuktian matematis yang akurat.`;
    tp = [
      `Mengidentifikasi data numerik, variabel, dan parameter rumus matematis pada topik "${cleanTopik}".`,
      `Menerapkan formulasi perhitungan matematis, teorema geometri, dan manipulasi aljabar untuk menyelesaikan persoalan hitungan pada "${cleanTopik}".`,
      `Menganalisis representasi diagram geometris, grafik koordinat Kartesius, atau tabel data angka untuk memvalidasi hasil kalkulasi numerik.`
    ];
    atp = [
      `Tahap 1 (Konseptualisasi & Definisi Variabel): Pemahaman notasi, besaran, dan rumus inti "${cleanTopik}".`,
      `Tahap 2 (Representasi Geometri & Grafik): Pemodelan diagram, grafik fungsi, atau tabel data angka terukur.`,
      `Tahap 3 (Kalkulasi Numerik Eksak): Operasi hitung bertahap, eliminasi/substitusi, dan penentuan nilai akhir angka beserta satuannya.`,
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
  } else if (isEkonomi) {
    cp = `Pada akhir Fase ${fase} (${kelas}), peserta didik mampu memodelkan fungsi ekonomi matematis, menghitung titik keseimbangan pasar (Qd = Qs), elastisitas harga, analisis titik impas (Break Even Point), serta pendapatan nasional pada materi "${cleanTopik}" secara akurat dan aplikatif.`;
    tp = [
      `Mengidentifikasi variabel ekonomi kuantitatif (harga, kuantitas, biaya tetap, biaya variabel) pada topik "${cleanTopik}".`,
      `Menghitung harga keseimbangan pasar, kuantitas ekuilibrium, dan BEP dengan metode aljabar matematis.`,
      `Menganalisis kurva permintaan-penawaran dan menarik kesimpulan finansial rasional berdasarkan data numerik.`
    ];
    atp = [
      `Tahap 1 (Model Matematis Ekonomi): Penyusunan fungsi permintaan, penawaran, atau struktur biaya pada "${cleanTopik}".`,
      `Tahap 2 (Kalkulasi Ekuilibrium): Perhitungan aljabar titik potong kurva dan ambang batas impas produksi.`,
      `Tahap 3 (Interpretasi Manajerial): Evaluasi kelayakan usaha dan elastisitas pasar berdasarkan hasil perhitungan.`
    ];
  } else if (isBiologi) {
    cp = `Pada akhir Fase ${fase} (${kelas}), peserta didik mampu menganalisis pola hereditas pewarisan sifat hukum Mendel, melakukan perhitungan rasio persilangan genotipe-fenotipe dan efisiensi aliran energi trofik 10% pada materi "${cleanTopik}" berbasis data empiris kuantitatif.`;
    tp = [
      `Menentukan gamet dan membuat bagan kotak Punnett persilangan monohibrid/dihibrid pada topik "${cleanTopik}".`,
      `Menghitung peluang perolehan sifat keturunan serta jumlah populasi anakan berdasarkan rasio matematika genetika.`,
      `Menganalisis transfer energi pada piramida biomassa ekologi dengan kaidah matematis terukur.`
    ];
    atp = [
      `Tahap 1 (Diagram Punnett): Penyusunan kombinasi alel parental dan tabel silang pada "${cleanTopik}".`,
      `Tahap 2 (Kalkulasi Probabilitas): Penghitungan proporsi fenotipe dan persentase keturunan.`,
      `Tahap 3 (Analisis Populasi): Perhitungan jumlah anakan riil dalam populasi dan refleksi keanekaragaman hayati.`
    ];
  } else if (isGeografi) {
    cp = `Pada akhir Fase ${fase} (${kelas}), peserta didik mampu membaca dan menganalisis data spasial, melakukan perhitungan skala peta numerik, jarak sebenarnya di lapangan, serta kontur interval (CI) pada materi "${cleanTopik}" secara tepat.`;
    tp = [
      `Menerapkan rumus skala peta untuk menghitung jarak sebenarnya dan perbesaran peta pada materi "${cleanTopik}".`,
      `Menghitung ketinggian titik dan kontur interval pada peta topografi dengan formulasi baku.`,
      `Menganalisis interaksi keruangan antarwilayah dengan model kuantitatif gravitasi geografi.`
    ];
    atp = [
      `Tahap 1 (Parameter Peta): Identifikasi jarak pada peta, penyebut skala, dan garis kontur pada "${cleanTopik}".`,
      `Tahap 2 (Kalkulasi Numerik Spasial): Operasi hitung konversi satuan panjang dan rumus kontur interval.`,
      `Tahap 3 (Interpretasi Wilayah): Penyimpulan profil morfologi muka bumi dan konektivitas wilayah.`
    ];
  } else if (isKodingAI) {
    cp = `Pada akhir Fase ${fase} (${kelas}), peserta didik mampu memahami logika komputasi mendasar, merancang struktur algoritma program, melakukan konversi sistem bilangan dan kalkulasi kompleksitas waktu pada materi "${cleanTopik}", serta mengevaluasi performa model kecerdasan artifisial dengan metrik akurasi terukur.`;
    tp = [
      `Melakukan konversi sistem bilangan biner, desimal, dan heksadesimal serta evaluasi aljabar boolean pada topik "${cleanTopik}".`,
      `Menghitung frekuensi eksekusi perulangan algoritma dan menganalisis kompleksitas waktu Big-O.`,
      `Mengevaluasi confusion matrix untuk menghitung akurasi dan presisi model kecerdasan artifisial secara kuantitatif.`
    ];
    atp = [
      `Tahap 1 (Konseptualisasi & Bilangan Digital): Eksplorasi representasi data biner dan aljabar boolean pada "${cleanTopik}".`,
      `Tahap 2 (Konstruksi Logika & Kompleksitas): Perancangan perulangan dan kalkulasi jumlah iterasi algoritma.`,
      `Tahap 3 (Metrik AI): Eksperimentasi pengujian data uji dan perhitungan performa akurasi model.`,
      `Tahap 4 (Refleksi Solutif): Evaluasi efisiensi algoritma dan integritas etis sistem komputasi.`
    ];
  } else if (isInformatika) {
    cp = `Pada akhir Fase ${fase} (${kelas}), peserta didik mampu menerapkan cara berpikir komputasional, melakukan perhitungan subnetting jaringan IPv4, konversi data digital, dan analisis efisiensi algoritma pada materi "${cleanTopik}" secara optimal dan beretika.`;
    tp = [
      `Menghitung subnet mask, network ID, broadcast, dan host valid pada konfigurasi jaringan materi "${cleanTopik}".`,
      `Melakukan analisis efisiensi algoritma pencarian dan pengurutan dengan penalaran komputasional kuantitatif.`,
      `Menghasilkan artefak teknologi terpadu yang teruji secara fungsional dan logis.`
    ];
    atp = [
      `Tahap 1: Pengenalan Arsitektur Data & Pengalamatan Jaringan pada materi "${cleanTopik}".`,
      `Tahap 2: Kalkulasi Alokasi Subnetting dan Evaluasi Gerbang Logika Digital.`,
      `Tahap 3: Pembuatan Model Pemecahan Masalah dan Pengujian Kinerja Komputasi.`,
      `Tahap 4: Diseminasi, Dokumentasi Teknis, dan Evaluasi Efisiensi Sistem.`
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
