// Post-Exam Analysis Service
// Analisis Butir Soal (Item Analysis), Daya Pembeda, Tingkat Kesukaran, KR-20, Deteksi Eror & Ketuntasan Belajar

export const SAMPLE_STUDENT_NAMES = [
  'Ahmad Fauzan', 'Aisyah Putri Rahmawati', 'Anisa Nurul Hidayah', 'Bagas Pratama',
  'Bayu Aji Pangestu', 'Cantika Dewi Lestari', 'Daffa Arya Kusuma', 'Dimas Setiawan',
  'Fadhil Muhammad', 'Fatima Zahra', 'Gita Permatasari', 'Hafidz Abdurrahman',
  'Indah Cahyani', 'Irfan Hakim', 'Khadijah Al-Zahra', 'Luthfi Hakim',
  'Maya Anggraini', 'Muhammad Rizky', 'Nadia Safitri', 'Naufal Farhan',
  'Putri Ayu Wulandari', 'Rafi Ramadhan', 'Rania Salsabila', 'Rehan Aditya',
  'Siti Maryam', 'Syahrul Ramadhan', 'Tiara Andini', 'Wildan Pratama',
  'Yusuf Maulana', 'Zahra Amalia'
];

/**
 * Menghasilkan simulasi matriks jawaban siswa untuk testing / preview cepat
 */
export const generateSampleStudentSubmissions = (questions, studentCount = 30) => {
  const names = SAMPLE_STUDENT_NAMES.slice(0, studentCount);
  
  return names.map((name, sIdx) => {
    // Siswa dengan indeks rendah cenderung lebih pintar (membuat variasi kelompok atas & bawah)
    const competence = 1 - (sIdx / studentCount) * 0.75 + (Math.random() * 0.2 - 0.1);
    const answers = {};

    questions.forEach((q, qIdx) => {
      // Simulasikan potensi error pada salah satu butir soal untuk menguji 'Deteksi Eror Kunci'
      const isBuggedQuestion = (qIdx === 2 && questions.length > 3);

      if (q.type === 'pg_ad' || q.type === 'pg_ae') {
        const optionKeys = q.options.map(o => o.key);
        const correct = q.correctKey;
        
        if (isBuggedQuestion) {
          // Buat pola anomali: Siswa pintar memilih opsi B, padahal kunci di sistem A
          const distractor = optionKeys.find(k => k !== correct) || 'B';
          answers[q.no] = Math.random() < 0.85 ? distractor : correct;
        } else {
          const willAnswerCorrect = Math.random() < Math.max(0.2, Math.min(0.95, competence));
          if (willAnswerCorrect) {
            answers[q.no] = correct;
          } else {
            const wrongOptions = optionKeys.filter(k => k !== correct);
            answers[q.no] = wrongOptions[Math.floor(Math.random() * wrongOptions.length)] || optionKeys[0];
          }
        }
      } else if (q.type === 'benar_salah') {
        const willAnswerCorrect = Math.random() < Math.max(0.3, Math.min(0.9, competence));
        answers[q.no] = willAnswerCorrect ? q.correctKey : (q.correctKey === 'Benar' ? 'Salah' : 'Benar');
      } else if (q.type.includes('kompleks')) {
        // Multi-select answers
        const willAnswerCorrect = Math.random() < Math.max(0.2, Math.min(0.85, competence));
        if (willAnswerCorrect && q.correctKeys) {
          answers[q.no] = [...q.correctKeys];
        } else {
          answers[q.no] = ['A'];
        }
      } else {
        // Esai: skor 1 - 4
        const essayScore = Math.min(4, Math.max(1, Math.round(competence * 4 + (Math.random() * 0.8 - 0.4))));
        answers[q.no] = essayScore;
      }
    });

    return {
      id: `std_${sIdx + 1}`,
      name,
      answers
    };
  });
};

/**
 * Menghitung skor siswa per nomor dan total
 */
export const calculateStudentScores = (questions, students) => {
  return students.map(student => {
    let totalScore = 0;
    let maxPossibleScore = 0;
    const scoresPerQuestion = {};

    questions.forEach(q => {
      const studentAns = student.answers[q.no];
      let score = 0;
      let qMax = 1;

      if (q.type === 'pg_ad' || q.type === 'pg_ae' || q.type === 'benar_salah') {
        qMax = 1;
        score = studentAns === q.correctKey ? 1 : 0;
      } else if (q.type.includes('kompleks')) {
        qMax = 2;
        if (Array.isArray(studentAns) && q.correctKeys) {
          const correctChosen = studentAns.filter(k => q.correctKeys.includes(k)).length;
          const wrongChosen = studentAns.filter(k => !q.correctKeys.includes(k)).length;
          if (correctChosen === q.correctKeys.length && wrongChosen === 0) {
            score = 2;
          } else if (correctChosen > 0 && wrongChosen === 0) {
            score = 1;
          } else {
            score = 0;
          }
        }
      } else if (q.type === 'esai') {
        qMax = 4;
        score = Number(studentAns) || 0;
      }

      scoresPerQuestion[q.no] = score;
      totalScore += score;
      maxPossibleScore += qMax;
    });

    const finalGrade100 = maxPossibleScore > 0 ? Math.round((totalScore / maxPossibleScore) * 100) : 0;

    return {
      ...student,
      scoresPerQuestion,
      totalScore,
      maxPossibleScore,
      finalGrade: finalGrade100
    };
  });
};

/**
 * Analisis Butir Soal Lengkap:
 * - Tingkat Kesukaran (P)
 * - Daya Pembeda (D)
 * - Deteksi Anomali / Error Kunci
 * - Reliabilitas KR-20
 */
export const runItemAnalysis = (questions, studentsWithScores, kkm = 75) => {
  const N = studentsWithScores.length;
  if (N === 0) return null;

  // Urutkan siswa dari skor tertinggi ke terendah
  const sortedStudents = [...studentsWithScores].sort((a, b) => b.totalScore - a.totalScore);
  
  // Kelompok atas dan bawah (27% atau minimal 25%)
  const groupSize = Math.max(1, Math.round(N * 0.27));
  const upperGroup = sortedStudents.slice(0, groupSize);
  const lowerGroup = sortedStudents.slice(N - groupSize);

  let sumVarianceItems = 0;
  const itemStats = [];
  const anomalyWarnings = [];

  questions.forEach(q => {
    let totalCorrect = 0;
    let upperCorrect = 0;
    let lowerCorrect = 0;
    const optionDistribution = {};

    // Inisialisasi frekuensi pilihan jawaban
    if (q.options && q.options.length > 0) {
      q.options.forEach(opt => {
        optionDistribution[opt.key] = 0;
      });
    }

    // Hitung seluruh jawaban
    studentsWithScores.forEach(std => {
      const isCorrect = (std.scoresPerQuestion && (std.scoresPerQuestion[q.no] || 0) > 0);
      if (isCorrect) totalCorrect++;

      const ans = std.answers[q.no];
      if (ans && typeof ans === 'string') {
        optionDistribution[ans] = (optionDistribution[ans] || 0) + 1;
      }
    });

    // Hitung kelompok atas & bawah
    upperGroup.forEach(std => {
      if ((std.scoresPerQuestion[q.no] || 0) > 0) upperCorrect++;
    });
    lowerGroup.forEach(std => {
      if ((std.scoresPerQuestion[q.no] || 0) > 0) lowerCorrect++;
    });

    // Tingkat Kesukaran (P)
    const pVal = totalCorrect / N;
    let kesukaranLabel = 'Sedang';
    let kesukaranBadge = 'bg-blue-100 text-blue-800';
    if (pVal > 0.70) {
      kesukaranLabel = 'Mudah';
      kesukaranBadge = 'bg-emerald-100 text-emerald-800';
    } else if (pVal < 0.30) {
      kesukaranLabel = 'Sukar';
      kesukaranBadge = 'bg-purple-100 text-purple-800';
    }

    // Daya Pembeda (D)
    // D = (Upper Correct / GroupSize) - (Lower Correct / GroupSize)
    const pUpper = upperCorrect / groupSize;
    const pLower = lowerCorrect / groupSize;
    const dVal = Number((pUpper - pLower).toFixed(3));

    let dayaPembedaLabel = 'Cukup';
    let dayaPembedaBadge = 'bg-yellow-100 text-yellow-800';
    let statusSoal = 'Diterima dengan Revisi';

    if (dVal >= 0.40) {
      dayaPembedaLabel = 'Sangat Baik';
      dayaPembedaBadge = 'bg-emerald-100 text-emerald-800';
      statusSoal = 'Diterima Baik';
    } else if (dVal >= 0.30) {
      dayaPembedaLabel = 'Baik';
      dayaPembedaBadge = 'bg-blue-100 text-blue-800';
      statusSoal = 'Diterima';
    } else if (dVal >= 0.20) {
      dayaPembedaLabel = 'Cukup';
      dayaPembedaBadge = 'bg-amber-100 text-amber-800';
      statusSoal = 'Revisi';
    } else if (dVal >= 0.00) {
      dayaPembedaLabel = 'Jelek / Buruk';
      dayaPembedaBadge = 'bg-orange-100 text-orange-800';
      statusSoal = 'Perlu Revisi Total';
    } else {
      dayaPembedaLabel = 'Sangat Jelek (Negatif)';
      dayaPembedaBadge = 'bg-red-100 text-red-800';
      statusSoal = 'Dibuang / Kunci Salah';
    }

    // Varians butir untuk KR-20: p * q
    const qVal = 1 - pVal;
    sumVarianceItems += (pVal * qVal);

    // ==========================================
    // DETEKSI EROR OTOMATIS (Smart Anomaly Check)
    // ==========================================
    const warnings = [];

    // Deteksi 1: Daya Pembeda Negatif (Siswa pintar banyak salah)
    if (dVal < 0) {
      warnings.push({
        type: 'negative_discrimination',
        severity: 'danger',
        message: `Daya pembeda negatif (D = ${dVal}). Kelompok bawah (${lowerCorrect}) menjawab benar lebih banyak daripada kelompok atas (${upperCorrect}). Potensi Kunci Jawaban TERBALIK atau ambigu.`
      });
    }

    // Deteksi 2: Mayoritas kelompok atas memilih distraktor yang sama
    if (q.options && q.options.length > 0) {
      const upperDistractorCounts = {};
      upperGroup.forEach(std => {
        const a = std.answers[q.no];
        if (a && a !== q.correctKey) {
          upperDistractorCounts[a] = (upperDistractorCounts[a] || 0) + 1;
        }
      });

      Object.entries(upperDistractorCounts).forEach(([optKey, cnt]) => {
        if (cnt >= Math.ceil(groupSize * 0.5)) {
          warnings.push({
            type: 'misleading_key',
            severity: 'danger',
            message: `Sebanyak ${cnt} dari ${groupSize} siswa kelompok atas memilih opsi [${optKey}] daripada kunci resmi [${q.correctKey}]. Periksa kembali kunci jawaban atau redaksi soal.`
          });
        }
      });
    }

    // Deteksi 3: Pengecoh tidak berfungsi (0 siswa memilih)
    if (q.options && q.options.length > 2) {
      const unchosenOptions = Object.entries(optionDistribution)
        .filter(([k, cnt]) => k !== q.correctKey && cnt === 0)
        .map(([k]) => k);
      if (unchosenOptions.length > 0) {
        warnings.push({
          type: 'dead_distractor',
          severity: 'warning',
          message: `Opsi distraktor (${unchosenOptions.join(', ')}) tidak dipilih oleh satupun siswa (pengecoh tidak homogen/tidak mengecoh).`
        });
      }
    }

    // Deteksi 4: Soal 0% benar
    if (pVal === 0) {
      warnings.push({
        type: 'zero_percent',
        severity: 'danger',
        message: `Tidak ada satupun siswa yang menjawab benar (P = 0.00). Soal memiliki tingkat kesulitan ekstrem atau rumus/teks soal salah ketik.`
      });
    }

    if (warnings.length > 0) {
      anomalyWarnings.push({
        no: q.no,
        questionText: q.questionText,
        warnings
      });
    }

    itemStats.push({
      no: q.no,
      type: q.type,
      typeName: q.typeName,
      materi: q.materi,
      indikator: q.indikator,
      levelKognitif: q.levelKognitif,
      totalCorrect,
      pVal: Number(pVal.toFixed(3)),
      kesukaranLabel,
      kesukaranBadge,
      pUpper: Number(pUpper.toFixed(3)),
      pLower: Number(pLower.toFixed(3)),
      dVal,
      dayaPembedaLabel,
      dayaPembedaBadge,
      statusSoal,
      warnings,
      optionDistribution
    });
  });

  // ==========================================
  // STATISTIK KESELURUHAN & RELIABILITAS KR-20
  // ==========================================
  const allFinalGrades = studentsWithScores.map(s => s.finalGrade);
  const meanGrade = Number((allFinalGrades.reduce((a, b) => a + b, 0) / N).toFixed(2));
  
  // Standar Deviasi
  const varianceClass = allFinalGrades.reduce((sum, g) => sum + Math.pow(g - meanGrade, 2), 0) / (N > 1 ? N - 1 : 1);
  const stdDev = Number(Math.sqrt(varianceClass).toFixed(2));

  // Varians Total Skor Mentah (untuk rumus KR-20)
  const rawScores = studentsWithScores.map(s => s.totalScore);
  const meanRaw = rawScores.reduce((a, b) => a + b, 0) / N;
  const varianceRaw = rawScores.reduce((sum, s) => sum + Math.pow(s - meanRaw, 2), 0) / (N > 1 ? N - 1 : 1);

  const kItems = questions.length;
  let kr20 = 0;
  if (kItems > 1 && varianceRaw > 0) {
    kr20 = (kItems / (kItems - 1)) * (1 - (sumVarianceItems / varianceRaw));
    kr20 = Math.max(0, Math.min(1, kr20));
  }
  const kr20Val = Number(kr20.toFixed(3));

  let reliabilityLabel = 'Rendah';
  if (kr20Val >= 0.80) reliabilityLabel = 'Sangat Tinggi (Sangat Andal)';
  else if (kr20Val >= 0.60) reliabilityLabel = 'Tinggi (Andal)';
  else if (kr20Val >= 0.40) reliabilityLabel = 'Cukup';
  else reliabilityLabel = 'Rendah (Perlu Perbaikan Instrumen)';

  // ==========================================
  // KETUNTASAN BELAJAR & REMEDIAL/PENGAYAAN
  // ==========================================
  const passedStudents = studentsWithScores.filter(s => s.finalGrade >= kkm);
  const failedStudents = studentsWithScores.filter(s => s.finalGrade < kkm);
  const passRate = Number(((passedStudents.length / N) * 100).toFixed(1));

  // Materi yang paling banyak belum dikuasai (daya serap terendah)
  const topicStats = {};
  questions.forEach(q => {
    const topic = q.materi || 'Materi Umum';
    if (!topicStats[topic]) {
      topicStats[topic] = { topic, totalQuestions: 0, totalCorrect: 0, totalPossible: 0 };
    }
    const stat = itemStats.find(i => i.no === q.no);
    topicStats[topic].totalQuestions++;
    topicStats[topic].totalCorrect += (stat?.totalCorrect || 0);
    topicStats[topic].totalPossible += N;
  });

  const weakTopics = Object.values(topicStats)
    .map(t => ({
      ...t,
      masteryRate: Number(((t.totalCorrect / t.totalPossible) * 100).toFixed(1))
    }))
    .sort((a, b) => a.masteryRate - b.masteryRate);

  return {
    sampleSize: N,
    kkm,
    meanGrade,
    stdDev,
    maxGrade: Math.max(...allFinalGrades),
    minGrade: Math.min(...allFinalGrades),
    kr20: kr20Val,
    reliabilityLabel,
    passRate,
    passedCount: passedStudents.length,
    failedCount: failedStudents.length,
    passedStudents: passedStudents.sort((a, b) => b.finalGrade - a.finalGrade),
    failedStudents: failedStudents.sort((a, b) => a.finalGrade - b.finalGrade),
    weakTopics,
    itemStats,
    anomalyWarnings,
    sortedStudents
  };
};
