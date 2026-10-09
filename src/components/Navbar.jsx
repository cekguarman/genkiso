import React, { useState } from 'react';
import { 
  GraduationCap, 
  Sparkles, 
  Key, 
  FileText, 
  BarChart3, 
  Gamepad2, 
  MonitorPlay,
  Sun,
  Moon,
  Sidebar as SidebarIcon
} from 'lucide-react';

export default function Navbar({ 
  activeView, 
  setActiveView, 
  apiKey, 
  setApiKey, 
  onOpenKuis, 
  onOpenTKA,
  hasGeneratedQuestions,
  isDarkMode,
  onToggleDarkMode,
  onToggleLayout
}) {
  const [showKeyModal, setShowKeyModal] = useState(false);
  const [tempKey, setTempKey] = useState(apiKey || '');

  const handleSaveKey = () => {
    setApiKey(tempKey);
    localStorage.setItem('GEMINI_API_KEY', tempKey);
    setShowKeyModal(false);
  };

  return (
    <>
      <header className="bg-white dark:bg-slate-900 border-b border-purple-200/80 dark:border-purple-900/50 sticky top-0 z-40 shadow-xs no-print transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo & Title */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-maroon-800 via-maroon-700 to-purple-800 text-white flex items-center justify-center shadow-md">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Edu<span className="text-maroon-700 dark:text-purple-400">Asesmen</span> AI
                  </h1>
                  <span className="hidden sm:inline-block bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-purple-200 dark:border-purple-800">
                    KBC & Merdeka
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 hidden md:block">
                  Sistem Terpadu Pembuat Soal, Kisi-Kisi, Kartu Soal & Analisis Butir Soal
                </p>
              </div>
            </div>

            {/* Navigation & Controls */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              <button
                onClick={() => setActiveView('generator')}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeView === 'generator'
                    ? 'bg-gradient-to-r from-maroon-800 to-purple-800 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:text-maroon-700 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-slate-800'
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>Pembuat Soal</span>
              </button>

              <button
                onClick={() => setActiveView('analisis')}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeView === 'analisis'
                    ? 'bg-gradient-to-r from-maroon-800 to-purple-800 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:text-maroon-700 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-slate-800'
                }`}
              >
                <BarChart3 className="w-4 h-4" />
                <span>Analisis Butir & Nilai</span>
              </button>

              <button
                onClick={onOpenKuis}
                disabled={!hasGeneratedQuestions}
                title={!hasGeneratedQuestions ? 'Generate soal terlebih dahulu' : 'Buka Kuis Interaktif di Kelas'}
                className={`hidden md:flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                  hasGeneratedQuestions
                    ? 'bg-amber-500 hover:bg-amber-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                }`}
              >
                <Gamepad2 className="w-4 h-4" />
                <span>Kuis</span>
              </button>

              <button
                onClick={onOpenTKA}
                disabled={!hasGeneratedQuestions}
                title={!hasGeneratedQuestions ? 'Generate soal terlebih dahulu' : 'Buka Simulator TKA CBT'}
                className={`hidden md:flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                  hasGeneratedQuestions
                    ? 'bg-purple-800 hover:bg-purple-900 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                }`}
              >
                <MonitorPlay className="w-4 h-4" />
                <span>Simulator TKA</span>
              </button>

              {/* TOGGLE TEMA TERANG / GELAP */}
              <button
                onClick={onToggleDarkMode}
                className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                title={isDarkMode ? 'Ganti ke Tema Terang' : 'Ganti ke Tema Gelap'}
              >
                {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-purple-700" />}
              </button>

              {/* TOGGLE LAYOUT KE PANEL KIRI */}
              <button
                onClick={onToggleLayout}
                className="p-2 rounded-xl border border-purple-200 dark:border-slate-700 bg-purple-50 dark:bg-slate-800 text-purple-800 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-slate-700 transition-colors hidden sm:flex items-center gap-1 text-xs font-medium"
                title="Ganti ke Tampilan Panel Kiri (Sidebar)"
              >
                <SidebarIcon className="w-4 h-4" />
                <span className="hidden xl:inline">Panel Kiri</span>
              </button>

              {/* Gemini API Key config button */}
              <button
                onClick={() => setShowKeyModal(true)}
                className={`p-2 rounded-xl border text-xs flex items-center gap-1.5 transition-colors ${
                  apiKey
                    ? 'border-emerald-300 bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
                    : 'border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-slate-800 text-purple-800 dark:text-purple-300 hover:bg-purple-100'
                }`}
                title="Konfigurasi Google Gemini AI Key"
              >
                <Key className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Modal API Key */}
      {showKeyModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">Konfigurasi Google Gemini AI</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Opsional: Gunakan API Key Anda sendiri</p>
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
              Aplikasi ini sudah dilengkapi dengan <strong>Built-in High-Fidelity Pedagogical Engine</strong> yang dapat bekerja 100% offline dan instan tanpa API Key. Jika Anda ingin menghubungkan langsung dengan model terbaru <strong>Google Gemini</strong>, masukkan API Key di bawah:
            </p>

            <div className="mb-4">
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Google Gemini API Key
              </label>
              <input
                type="password"
                placeholder="AIzaSy..."
                value={tempKey}
                onChange={(e) => setTempKey(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none font-mono"
              />
              <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 block">
                API Key disimpan secara aman di browser lokal Anda (Local Storage).
              </span>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={() => setShowKeyModal(false)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
              >
                Tutup
              </button>
              <button
                type="button"
                onClick={handleSaveKey}
                className="px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-maroon-800 to-purple-800 hover:from-maroon-900 hover:to-purple-900 rounded-lg shadow-sm"
              >
                Simpan Konfigurasi
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
