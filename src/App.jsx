import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Step1Identity from './components/Step1Identity';
import Step2Config from './components/Step2Config';
import TabNaskahSoal from './components/TabNaskahSoal';
import TabKunciJawaban from './components/TabKunciJawaban';
import TabKisiKisi from './components/TabKisiKisi';
import TabKartuSoal from './components/TabKartuSoal';
import TabAnalisisSoal from './components/TabAnalisisSoal';
import TabAnalisisNilai from './components/TabAnalisisNilai';
import ModalKuisInteraktif from './components/ModalKuisInteraktif';
import ModalSimulatorTKA from './components/ModalSimulatorTKA';
import ModalProfilPengembang from './components/ModalProfilPengembang';
import ModalPetunjukPenggunaan from './components/ModalPetunjukPenggunaan';

import { DEFAULT_EXAM_CONFIG } from './data/curriculumData';
import { generateQuestionsViaGemini } from './services/aiGenerator';
import { 
  generateSampleStudentSubmissions, 
  calculateStudentScores, 
  runItemAnalysis 
} from './services/itemAnalysis';
import { 
  exportNaskahSoalToWord, 
  exportKunciJawabanToWord, 
  exportKisiKisiToWord, 
  exportKartuSoalToWord,
  triggerPrintDocument
} from './services/exportService';

import { 
  FileText, 
  KeyRound, 
  TableProperties, 
  CreditCard, 
  Download,
  RotateCcw,
  Sparkles,
  Award,
  Sun,
  Moon,
  LayoutTemplate,
  Sidebar as SidebarIcon,
  Printer,
  ChevronDown,
  Layers,
  GraduationCap,
  BarChart3,
  Gamepad2,
  MonitorPlay,
  Key,
  BookOpen
} from 'lucide-react';

export default function App() {
  const [examConfig, setExamConfig] = useState(DEFAULT_EXAM_CONFIG);
  const [activeStep, setActiveStep] = useState(1);
  const [activeTab, setActiveTab] = useState('naskah');
  const [activeView, setActiveView] = useState('generator'); // 'generator' | 'analisis'
  
  // Theme: Terang / Gelap
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('THEME_MODE') === 'dark';
  });

  // Layout: Dashboard Atas vs Panel Kiri
  const [layoutMode, setLayoutMode] = useState(() => {
    return localStorage.getItem('LAYOUT_MODE') || 'top'; // 'top' | 'sidebar'
  });

  const [apiKey, setApiKey] = useState(() => localStorage.getItem('GEMINI_API_KEY') || '');
  const [isGenerating, setIsGenerating] = useState(false);
  const [downloadDropdownOpen, setDownloadDropdownOpen] = useState(false);
  
  // Data Hasil Generator
  const [generatedData, setGeneratedData] = useState(null);
  
  // Data Post-Exam & Analisis Butir Soal
  const [students, setStudents] = useState([]);
  const [studentsWithScores, setStudentsWithScores] = useState([]);
  const [analysisData, setAnalysisData] = useState(null);
  const [kkm, setKkm] = useState(75);

  // Modals
  const [showKuisModal, setShowKuisModal] = useState(false);
  const [showTKAModal, setShowTKAModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showPetunjukModal, setShowPetunjukModal] = useState(false);

  // Sinkronisasi Dark Mode class di HTML document root
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('THEME_MODE', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('THEME_MODE', 'light');
    }
  }, [isDarkMode]);

  // Simpan preferensi layout
  const handleToggleLayout = () => {
    const next = layoutMode === 'top' ? 'sidebar' : 'top';
    setLayoutMode(next);
    localStorage.setItem('LAYOUT_MODE', next);
  };

  // Inisialisasi awal: Otomatis generate paket contoh
  useEffect(() => {
    handleStartGenerate();
  }, []);

  // Update Analisis saat data siswa atau kkm berubah
  useEffect(() => {
    if (generatedData?.questions && students.length > 0) {
      const scored = calculateStudentScores(generatedData.questions, students);
      setStudentsWithScores(scored);
      const res = runItemAnalysis(generatedData.questions, scored, kkm);
      setAnalysisData(res);
    }
  }, [generatedData, students, kkm]);

  // Handler Generate Soal
  const handleStartGenerate = async () => {
    setIsGenerating(true);
    try {
      const result = await generateQuestionsViaGemini(examConfig, apiKey);
      setGeneratedData(result);
      
      const initialStudents = generateSampleStudentSubmissions(result.questions, 30);
      setStudents(initialStudents);

      setActiveStep(3);
      setActiveTab('naskah');
    } catch (err) {
      console.error('Error generating questions:', err);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleGenerateDemoStudents = () => {
    if (!generatedData?.questions) return;
    const newStudents = generateSampleStudentSubmissions(generatedData.questions, 30);
    setStudents(newStudents);
  };

  // 1 Tombol Download Tunggal untuk format Word (.doc)
  const handleDownloadActiveWordDoc = () => {
    if (!generatedData?.questions) return;
    setDownloadDropdownOpen(false);

    if (activeTab === 'naskah') {
      exportNaskahSoalToWord(examConfig, generatedData.questions);
    } else if (activeTab === 'kunci') {
      exportKunciJawabanToWord(examConfig, generatedData.questions);
    } else if (activeTab === 'kisi') {
      exportKisiKisiToWord(examConfig, generatedData.questions);
    } else if (activeTab === 'kartu') {
      exportKartuSoalToWord(examConfig, generatedData.questions);
    } else {
      // Default: Unduh paket lengkap
      handleDownloadAllWordDocs();
    }
  };

  const handleDownloadAllWordDocs = () => {
    if (!generatedData?.questions) return;
    setDownloadDropdownOpen(false);
    exportNaskahSoalToWord(examConfig, generatedData.questions);
    setTimeout(() => exportKunciJawabanToWord(examConfig, generatedData.questions), 600);
    setTimeout(() => exportKisiKisiToWord(examConfig, generatedData.questions), 1200);
    setTimeout(() => exportKartuSoalToWord(examConfig, generatedData.questions), 1800);
  };

  const questions = generatedData?.questions || [];

  return (
    <div className={`min-h-screen flex ${layoutMode === 'sidebar' ? 'flex-row' : 'flex-col'} bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors`}>
      
      {/* ======================================================== */}
      {/* PILIHAN 1: PANEL KIRI (SIDEBAR LAYOUT) */}
      {/* ======================================================== */}
      {layoutMode === 'sidebar' && (
        <aside className="w-72 bg-white dark:bg-slate-900 border-r border-purple-200/80 dark:border-purple-900/50 flex flex-col justify-between p-4 sticky top-0 h-screen z-40 no-print shrink-0 overflow-y-auto">
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-3 pb-3 border-b border-purple-100 dark:border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-maroon-800 via-maroon-700 to-purple-800 text-white flex items-center justify-center shadow-md">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-base font-extrabold text-slate-900 dark:text-white leading-tight">
                  Edu<span className="text-maroon-700 dark:text-purple-400">Asesmen</span> AI
                </h1>
                <span className="text-[10px] font-bold text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950 px-2 py-0.5 rounded-full border border-purple-200 dark:border-purple-800">
                  Kemendikdasmen 2025
                </span>
              </div>
            </div>

            {/* Menu Navigasi Utama */}
            <nav className="space-y-1.5">
              <button
                onClick={() => setActiveView('generator')}
                className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all text-left ${
                  activeView === 'generator'
                    ? 'bg-gradient-to-r from-maroon-800 to-purple-800 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-purple-50 dark:hover:bg-slate-800'
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>Pembuat Soal & Dokumen</span>
              </button>

              <button
                onClick={() => setActiveView('analisis')}
                className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all text-left ${
                  activeView === 'analisis'
                    ? 'bg-gradient-to-r from-maroon-800 to-purple-800 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-purple-50 dark:hover:bg-slate-800'
                }`}
              >
                <BarChart3 className="w-4 h-4" />
                <span>Analisis Butir & Nilai</span>
              </button>

              <button
                onClick={() => setShowKuisModal(true)}
                disabled={questions.length === 0}
                className="w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-amber-50 dark:hover:bg-amber-950/30 hover:text-amber-800 transition-all text-left disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <Gamepad2 className="w-4 h-4 text-amber-500" />
                <span>Kuis Interaktif Kelas</span>
              </button>

              <button
                onClick={() => setShowTKAModal(true)}
                disabled={questions.length === 0}
                className="w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-purple-50 dark:hover:bg-purple-950/30 hover:text-purple-800 transition-all text-left disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <MonitorPlay className="w-4 h-4 text-purple-600" />
                <span>Simulator TKA CBT</span>
              </button>

              <button
                onClick={() => setShowPetunjukModal(true)}
                className="w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-bold text-purple-900 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/40 hover:bg-purple-100 dark:hover:bg-purple-900/60 border border-purple-200/80 dark:border-purple-800 transition-all text-left shadow-2xs"
              >
                <BookOpen className="w-4 h-4 text-maroon-700 dark:text-purple-400" />
                <span>Buku Petunjuk Aplikasi</span>
              </button>
            </nav>

            {/* Profil Ujian Aktif Ringkas */}
            <div className="p-3 bg-purple-50/60 dark:bg-slate-800/60 rounded-xl border border-purple-100 dark:border-slate-700 text-xs space-y-1">
              <div className="font-bold text-slate-800 dark:text-slate-200 truncate">
                {examConfig.mataPelajaran}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">
                {examConfig.kelas} ({examConfig.fase}) • {examConfig.kurikulum}
              </div>
            </div>
          </div>

          {/* Pengaturan Bawah Sidebar: Dark Mode & Layout Switch */}
          <div className="pt-4 border-t border-purple-100 dark:border-slate-800 space-y-2">
            {/* Tombol Ganti Tema Terang / Gelap */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
            >
              <span className="flex items-center gap-2">
                {isDarkMode ? <Moon className="w-4 h-4 text-purple-400" /> : <Sun className="w-4 h-4 text-amber-500" />}
                <span>Tema {isDarkMode ? 'Gelap' : 'Terang'}</span>
              </span>
              <span className="text-[10px] text-slate-400 uppercase font-bold">Ubah</span>
            </button>

            {/* Tombol Ganti Layout ke Header Atas */}
            <button
              onClick={handleToggleLayout}
              className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold bg-purple-50 dark:bg-purple-950/40 text-purple-800 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-950 transition-all border border-purple-200/60 dark:border-purple-800/50"
              title="Pindah ke Tampilan Dashboard Atas"
            >
              <span className="flex items-center gap-2">
                <LayoutTemplate className="w-4 h-4" />
                <span>Ganti: Header Atas</span>
              </span>
            </button>
          </div>
        </aside>
      )}

      {/* ======================================================== */}
      {/* PILIHAN 2: DASHBOARD ATAS (TOP NAVBAR LAYOUT) */}
      {/* ======================================================== */}
      {layoutMode === 'top' && (
        <Navbar
          activeView={activeView}
          setActiveView={setActiveView}
          apiKey={apiKey}
          setApiKey={setApiKey}
          onOpenKuis={() => setShowKuisModal(true)}
          onOpenTKA={() => setShowTKAModal(true)}
          onOpenPetunjuk={() => setShowPetunjukModal(true)}
          hasGeneratedQuestions={questions.length > 0}
          isDarkMode={isDarkMode}
          onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
          onToggleLayout={handleToggleLayout}
        />
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">

          {/* VIEW 1: PEMBUAT SOAL (GENERATOR WORKFLOW) */}
          {activeView === 'generator' && (
            <div className="space-y-6">

              {/* Stepper Progress Bar */}
              <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-purple-100 dark:border-purple-900/40 shadow-2xs no-print">
                <div className="flex items-center justify-between max-w-3xl mx-auto">
                  <button
                    onClick={() => setActiveStep(1)}
                    className={`flex items-center gap-2 text-xs sm:text-sm font-bold transition-all ${
                      activeStep === 1 ? 'text-maroon-700 dark:text-purple-400' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                    }`}
                  >
                    <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                      activeStep === 1 ? 'bg-gradient-to-tr from-maroon-800 to-purple-800 text-white shadow-sm' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                    }`}>1</span>
                    <span>Identitas & CP/TP</span>
                  </button>

                  <div className={`flex-1 h-0.5 mx-3 sm:mx-6 ${activeStep >= 2 ? 'bg-maroon-700 dark:bg-purple-600' : 'bg-slate-200 dark:bg-slate-800'}`} />

                  <button
                    onClick={() => setActiveStep(2)}
                    className={`flex items-center gap-2 text-xs sm:text-sm font-bold transition-all ${
                      activeStep === 2 ? 'text-maroon-700 dark:text-purple-400' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                    }`}
                  >
                    <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                      activeStep === 2 ? 'bg-gradient-to-tr from-maroon-800 to-purple-800 text-white shadow-sm' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                    }`}>2</span>
                    <span>Konfigurasi & Bloom</span>
                  </button>

                  <div className={`flex-1 h-0.5 mx-3 sm:mx-6 ${activeStep >= 3 ? 'bg-maroon-700 dark:bg-purple-600' : 'bg-slate-200 dark:bg-slate-800'}`} />

                  <button
                    onClick={() => {
                      if (questions.length > 0) setActiveStep(3);
                    }}
                    disabled={questions.length === 0}
                    className={`flex items-center gap-2 text-xs sm:text-sm font-bold transition-all ${
                      activeStep === 3 ? 'text-maroon-700 dark:text-purple-400' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                    }`}
                  >
                    <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                      activeStep === 3 ? 'bg-gradient-to-tr from-maroon-800 to-purple-800 text-white shadow-sm' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                    }`}>3</span>
                    <span>Dokumen Asesmen ({questions.length})</span>
                  </button>
                </div>
              </div>

              {/* Step 1 Component */}
              {activeStep === 1 && (
                <Step1Identity
                  examConfig={examConfig}
                  setExamConfig={setExamConfig}
                  onNextStep={() => setActiveStep(2)}
                  apiKey={apiKey}
                />
              )}

              {/* Step 2 Component */}
              {activeStep === 2 && (
                <Step2Config
                  examConfig={examConfig}
                  setExamConfig={setExamConfig}
                  onPrevStep={() => setActiveStep(1)}
                  onStartGenerate={handleStartGenerate}
                  isGenerating={isGenerating}
                />
              )}

              {/* Step 3 Component: Deliverable Tabs */}
              {activeStep === 3 && (
                <div className="space-y-6">

                  {/* Sub-Header Deliverables Toolbar: SATU TOMBOL DOWNLOAD UTAMA YANG RAPI & BERSIH */}
                  <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-purple-100 dark:border-purple-900/40 shadow-2xs flex flex-wrap items-center justify-between gap-4 no-print">
                    <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
                      <button
                        onClick={() => setActiveTab('naskah')}
                        className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 ${
                          activeTab === 'naskah'
                            ? 'bg-gradient-to-r from-maroon-800 to-purple-800 text-white shadow-sm'
                            : 'text-slate-600 dark:text-slate-300 hover:bg-purple-50 dark:hover:bg-slate-800'
                        }`}
                      >
                        <FileText className="w-4 h-4" />
                        <span>Naskah Soal</span>
                      </button>

                      <button
                        onClick={() => setActiveTab('kunci')}
                        className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 ${
                          activeTab === 'kunci'
                            ? 'bg-gradient-to-r from-maroon-800 to-purple-800 text-white shadow-sm'
                            : 'text-slate-600 dark:text-slate-300 hover:bg-purple-50 dark:hover:bg-slate-800'
                        }`}
                      >
                        <KeyRound className="w-4 h-4" />
                        <span>Kunci Jawaban</span>
                      </button>

                      <button
                        onClick={() => setActiveTab('kisi')}
                        className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 ${
                          activeTab === 'kisi'
                            ? 'bg-gradient-to-r from-maroon-800 to-purple-800 text-white shadow-sm'
                            : 'text-slate-600 dark:text-slate-300 hover:bg-purple-50 dark:hover:bg-slate-800'
                        }`}
                      >
                        <TableProperties className="w-4 h-4" />
                        <span>Kisi-Kisi Ujian</span>
                      </button>

                      <button
                        onClick={() => setActiveTab('kartu')}
                        className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 ${
                          activeTab === 'kartu'
                            ? 'bg-gradient-to-r from-maroon-800 to-purple-800 text-white shadow-sm'
                            : 'text-slate-600 dark:text-slate-300 hover:bg-purple-50 dark:hover:bg-slate-800'
                        }`}
                      >
                        <CreditCard className="w-4 h-4" />
                        <span>Kartu Soal</span>
                      </button>
                    </div>

                    {/* Actions: Edit Config & HANYA 1 TOMBOL DOWNLOAD WORD RAPI */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setActiveStep(2)}
                        className="px-3 py-2 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-xl text-xs font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-1 transition-colors"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Ubah Parameter</span>
                      </button>

                      {/* Tombol Cetak / Simpan PDF */}
                      <button
                        onClick={triggerPrintDocument}
                        className="px-3.5 py-2 bg-slate-800 dark:bg-slate-700 hover:bg-slate-900 text-white rounded-xl text-xs font-bold shadow-xs flex items-center gap-1.5 transition-all"
                        title="Cetak langsung atau simpan sebagai PDF berstandar A4"
                      >
                        <Printer className="w-4 h-4" />
                        <span className="hidden sm:inline">Cetak / PDF</span>
                      </button>

                      {/* 1 TOMBOL DOWNLOAD WORD UTAMA (.DOC) */}
                      <div className="relative">
                        <div className="inline-flex rounded-xl shadow-md overflow-hidden bg-gradient-to-r from-maroon-800 to-purple-800 hover:from-maroon-900 hover:to-purple-900 text-white">
                          <button
                            type="button"
                            onClick={handleDownloadActiveWordDoc}
                            className="px-4 py-2 text-xs font-bold flex items-center gap-1.5 border-r border-white/20 transition-all"
                            title="Unduh dokumen aktif ke format Word (.doc) rapi"
                          >
                            <Download className="w-4 h-4" />
                            <span>Unduh Word (.doc)</span>
                          </button>
                          
                          <button
                            type="button"
                            onClick={() => setDownloadDropdownOpen(!downloadDropdownOpen)}
                            className="px-2 py-2 hover:bg-black/20 transition-all"
                            title="Pilihan unduhan dokumen"
                          >
                            <ChevronDown className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Dropdown Options */}
                        {downloadDropdownOpen && (
                          <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-purple-100 dark:border-slate-800 py-1.5 z-50 text-xs">
                            <button
                              onClick={handleDownloadActiveWordDoc}
                              className="w-full text-left px-3.5 py-2 hover:bg-purple-50 dark:hover:bg-slate-800 font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2"
                            >
                              <span>Unduh Tab Aktif ({activeTab.toUpperCase()})</span>
                            </button>
                            <button
                              onClick={handleDownloadAllWordDocs}
                              className="w-full text-left px-3.5 py-2 hover:bg-purple-50 dark:hover:bg-slate-800 font-bold text-maroon-700 dark:text-purple-400 flex items-center gap-2 border-t border-slate-100 dark:border-slate-800"
                            >
                              <span>Unduh Semua Dokumen Sekaligus (.doc)</span>
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Active Tab View */}
                  <div>
                    {activeTab === 'naskah' && (
                      <TabNaskahSoal examConfig={examConfig} questions={questions} />
                    )}

                    {activeTab === 'kunci' && (
                      <TabKunciJawaban examConfig={examConfig} questions={questions} />
                    )}

                    {activeTab === 'kisi' && (
                      <TabKisiKisi examConfig={examConfig} questions={questions} />
                    )}

                    {activeTab === 'kartu' && (
                      <TabKartuSoal examConfig={examConfig} questions={questions} />
                    )}
                  </div>

                </div>
              )}

            </div>
          )}

          {/* VIEW 2: FITUR ANALISIS TINGKAT LANJUT (POST-EXAM ANALYSIS) */}
          {activeView === 'analisis' && (
            <div className="space-y-6">
              {/* Tab Selection Analisis Butir Soal vs Analisis Nilai & Ketuntasan */}
              <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-purple-100 dark:border-purple-900/40 shadow-2xs flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveTab('analisis_butir')}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                      activeTab !== 'analisis_nilai'
                        ? 'bg-gradient-to-r from-maroon-800 to-purple-800 text-white shadow-sm'
                        : 'text-slate-600 dark:text-slate-300 hover:bg-purple-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    Analisis Butir Soal (Item Analysis & Eror)
                  </button>

                  <button
                    onClick={() => setActiveTab('analisis_nilai')}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                      activeTab === 'analisis_nilai'
                        ? 'bg-gradient-to-r from-maroon-800 to-purple-800 text-white shadow-sm'
                        : 'text-slate-600 dark:text-slate-300 hover:bg-purple-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    Analisis Nilai & Ketuntasan Belajar
                  </button>
                </div>

                <div className="text-xs text-maroon-700 dark:text-purple-400 font-medium hidden md:block">
                  Evaluasi Pasca-Ujian Terstandar Kemendikdasmen
                </div>
              </div>

              {activeTab !== 'analisis_nilai' ? (
                <TabAnalisisSoal
                  examConfig={examConfig}
                  questions={questions}
                  analysisData={analysisData}
                  studentsWithScores={studentsWithScores}
                  onGenerateDemoStudents={handleGenerateDemoStudents}
                  kkm={kkm}
                  setKkm={setKkm}
                />
              ) : (
                <TabAnalisisNilai
                  examConfig={examConfig}
                  questions={questions}
                  analysisData={analysisData}
                  studentsWithScores={studentsWithScores}
                />
              )}
            </div>
          )}

        </main>

        {/* FOOTER APLIKASI (Tempat Utama Keterangan Pembuat Sesuai Instruksi User) */}
        <footer className="bg-white dark:bg-slate-900 border-t border-purple-200/80 dark:border-purple-900/50 mt-12 py-8 no-print shadow-xs transition-colors">
          <div className="max-w-7xl mx-auto px-4 text-center space-y-2">
            
            <div className="inline-flex items-center gap-2 text-maroon-900 dark:text-purple-300 font-bold text-base">
              <Award className="w-5 h-5 text-amber-500 shrink-0" />
              <span className="text-slate-600 dark:text-slate-400 font-normal">Dibuat oleh</span>
              {/* Hanya dapat diakses bila nama di klik saja */}
              <button
                type="button"
                onClick={() => setShowProfileModal(true)}
                className="font-extrabold text-maroon-800 dark:text-purple-300 hover:text-maroon-950 dark:hover:text-purple-100 underline decoration-purple-400 hover:decoration-maroon-700 decoration-2 underline-offset-4 transition-all cursor-pointer inline-flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded-md px-1 group"
                title="Klik untuk membuka Profil Lengkap Armansyah, S.Kom, M.Pd, Gr."
              >
                <span>Armansyah, S.Kom, M.Pd, Gr.</span>
                <span className="text-[10px] bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300 px-2 py-0.5 rounded-full border border-purple-200 dark:border-purple-800 font-semibold group-hover:bg-purple-200 shadow-2xs">
                  Lihat Profil
                </span>
              </button>
            </div>

            <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">
              Narasumber Koding & Kecerdasan Artifisial Nasional Kemendikdasmen 2025
            </div>

            {/* Tambahan Teks Sesuai Instruksi User */}
            <div className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
              Guru Informatika/Koding & Kecerdasan Artifisial SMAN Sumatera Selatan
            </div>

            <div className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
              Ketua Umum MGMP Informatika Jenjang SMA Tingkat Provinsi Sumatera Selatan
            </div>

            {/* Tombol Akses Cepat Buku Petunjuk di Footer */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setShowPetunjukModal(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-50 dark:bg-purple-950/60 hover:bg-purple-100 dark:hover:bg-purple-900/60 text-purple-800 dark:text-purple-300 text-xs font-bold border border-purple-200/80 dark:border-purple-800 transition-all shadow-2xs"
                title="Buka Buku Panduan Penggunaan Lengkap"
              >
                <BookOpen className="w-3.5 h-3.5 text-maroon-700 dark:text-purple-400" />
                <span>Buka Petunjuk Penggunaan Aplikasi</span>
              </button>
            </div>

            <p className="text-xs text-slate-400 dark:text-slate-500 pt-2 border-t border-purple-100/60 dark:border-slate-800 max-w-xl mx-auto">
              EduAsesmen AI • Platform Generator Soal, Kisi-Kisi, Kartu Soal, Analisis Butir Soal, Kuis Interaktif & Simulator TKA CBT
            </p>
          </div>
        </footer>
      </div>

      {/* Bonus Modal: Kuis Interaktif Proyektor */}
      {showKuisModal && (
        <ModalKuisInteraktif
          questions={questions}
          onClose={() => setShowKuisModal(false)}
        />
      )}

      {/* Bonus Modal: Simulator TKA CBT (Dengan Kustomisasi Jumlah Soal) */}
      {showTKAModal && (
        <ModalSimulatorTKA
          examConfig={examConfig}
          questions={questions}
          onClose={() => setShowTKAModal(false)}
        />
      )}

      {/* Modal: Profil Lengkap Pengembang (Hanya tampil saat nama diklik) */}
      {showProfileModal && (
        <ModalProfilPengembang
          onClose={() => setShowProfileModal(false)}
        />
      )}

      {/* Modal: Petunjuk Lengkap Penggunaan Aplikasi */}
      {showPetunjukModal && (
        <ModalPetunjukPenggunaan
          onClose={() => setShowPetunjukModal(false)}
          onOpenApiKey={() => {
            setShowPetunjukModal(false);
          }}
        />
      )}

    </div>
  );
}
