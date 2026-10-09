import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  X, 
  Clock, 
  Award, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  ArrowRight,
  RotateCcw
} from 'lucide-react';
import { soundEffects } from '../services/soundEffects';

export default function ModalKuisInteraktif({ questions, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isMuted, setIsMuted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  const playableQuestions = questions.filter(q => q.type !== 'esai');
  const currentQ = playableQuestions[currentIndex] || questions[0];

  // Timer countdown
  useEffect(() => {
    if (isAnswerRevealed || quizFinished) return;

    if (timeLeft <= 0) {
      handleTimeOut();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 5 && !isMuted) {
          soundEffects.playTick();
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isAnswerRevealed, quizFinished, isMuted]);

  const handleTimeOut = () => {
    setIsAnswerRevealed(true);
    if (!isMuted) soundEffects.playWrong();
  };

  const handleSelectOption = (key) => {
    if (isAnswerRevealed || quizFinished) return;

    setSelectedAnswer(key);
    setIsAnswerRevealed(true);

    const isCorrect = key === currentQ.correctKey || (currentQ.correctKeys && currentQ.correctKeys.includes(key));
    if (isCorrect) {
      setScore(prev => prev + 100 + timeLeft * 2);
      if (!isMuted) soundEffects.playCorrect();
    } else {
      if (!isMuted) soundEffects.playWrong();
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex + 1 < playableQuestions.length) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setIsAnswerRevealed(false);
      setTimeLeft(30);
    } else {
      setQuizFinished(true);
      if (!isMuted) soundEffects.playFinish();
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsAnswerRevealed(false);
    setScore(0);
    setTimeLeft(30);
    setQuizFinished(false);
  };

  const optionColorStyles = [
    'bg-red-500 hover:bg-red-600 border-red-600',
    'bg-blue-500 hover:bg-blue-600 border-blue-600',
    'bg-amber-500 hover:bg-amber-600 border-amber-600',
    'bg-emerald-500 hover:bg-emerald-600 border-emerald-600',
    'bg-purple-500 hover:bg-purple-600 border-purple-600'
  ];

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 text-white overflow-y-auto">
      {/* Top Bar */}
      <div className="max-w-5xl mx-auto w-full flex items-center justify-between py-2 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <span className="bg-amber-500 text-slate-950 font-black text-xs px-2.5 py-1 rounded-md uppercase tracking-wider">
            Mode Kuis Proyektor Kelas
          </span>
          <span className="text-xs text-slate-400">
            Soal {currentIndex + 1} dari {playableQuestions.length}
          </span>
        </div>

        <div className="flex items-center gap-4">
          {/* Skor */}
          <div className="flex items-center gap-1.5 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
            <Award className="w-4 h-4 text-amber-400" />
            <span className="font-extrabold text-amber-400 text-sm">{score}</span>
            <span className="text-[11px] text-slate-400">PTS</span>
          </div>

          {/* Mute toggle */}
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300"
            title={isMuted ? 'Aktifkan Suara' : 'Matikan Suara'}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
          </button>

          {/* Exit */}
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-red-900/60 hover:bg-red-800 text-red-200"
            title="Keluar dari Kuis"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Area */}
      <div className="max-w-4xl mx-auto w-full my-auto py-4">
        {!quizFinished ? (
          <div className="space-y-6">
            {/* Timer Bar & Counter */}
            <div className="flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-blue-400" />
                <span>Waktu Menjawab:</span>
              </div>
              <span className={`font-black text-base ${timeLeft <= 5 ? 'text-red-400 animate-pulse' : 'text-slate-200'}`}>
                {timeLeft} Detik
              </span>
            </div>

            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
              <div 
                className={`h-full transition-all duration-1000 ${
                  timeLeft <= 5 ? 'bg-red-500' : 'bg-gradient-to-r from-blue-500 to-indigo-500'
                }`}
                style={{ width: `${(timeLeft / 30) * 100}%` }}
              />
            </div>

            {/* Question Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 text-center shadow-xl">
              {currentQ.stimulus && (
                <div className="text-xs sm:text-sm text-slate-300 italic mb-4 max-w-2xl mx-auto bg-slate-800/60 p-3 rounded-xl border border-slate-700/60">
                  {currentQ.stimulus}
                </div>
              )}

              {/* Visual If available */}
              {currentQ.hasVisual && currentQ.svgVisual && (
                <div 
                  className="my-3 overflow-hidden flex justify-center max-w-sm mx-auto"
                  dangerouslySetInnerHTML={{ __html: currentQ.svgVisual }}
                />
              )}

              <h2 className="text-base sm:text-xl font-extrabold text-white leading-relaxed">
                {currentQ.questionText}
              </h2>
            </div>

            {/* Answer Options Grid (Kahoot-Style Big Colored Buttons) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {currentQ.options && currentQ.options.map((opt, idx) => {
                const colorStyle = optionColorStyles[idx % optionColorStyles.length];
                const isSelected = selectedAnswer === opt.key;
                const isCorrect = opt.key === currentQ.correctKey;

                let stateClass = colorStyle;
                if (isAnswerRevealed) {
                  if (isCorrect) {
                    stateClass = 'bg-emerald-600 border-emerald-400 ring-4 ring-emerald-400/50 scale-[1.02]';
                  } else if (isSelected) {
                    stateClass = 'bg-red-600 border-red-400 opacity-80';
                  } else {
                    stateClass = 'bg-slate-800 border-slate-700 opacity-40';
                  }
                }

                return (
                  <button
                    key={opt.key}
                    disabled={isAnswerRevealed}
                    onClick={() => handleSelectOption(opt.key)}
                    className={`p-4 rounded-xl border-2 text-left font-bold text-sm sm:text-base flex items-start gap-3 transition-all active:scale-98 shadow-md ${stateClass}`}
                  >
                    <span className="w-8 h-8 rounded-lg bg-black/25 flex items-center justify-center font-black text-sm shrink-0">
                      {opt.key}
                    </span>
                    <span className="pt-1 flex-1 leading-snug">{opt.text}</span>
                    {isAnswerRevealed && isCorrect && (
                      <CheckCircle2 className="w-6 h-6 text-white shrink-0 self-center" />
                    )}
                    {isAnswerRevealed && isSelected && !isCorrect && (
                      <XCircle className="w-6 h-6 text-white shrink-0 self-center" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Reveal Explanation & Next Button */}
            {isAnswerRevealed && (
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 animate-in fade-in slide-in-from-bottom-2">
                <div className="text-left text-xs sm:text-sm text-slate-300">
                  <span className="font-bold text-emerald-400 block mb-0.5">
                    Kunci Jawaban: {currentQ.correctKey}
                  </span>
                  <span>{currentQ.explanation}</span>
                </div>

                <button
                  onClick={handleNextQuestion}
                  className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 font-extrabold text-sm rounded-xl flex items-center gap-2 shadow-lg shrink-0"
                >
                  <span>{currentIndex + 1 < playableQuestions.length ? 'Soal Berikutnya' : 'Lihat Hasil Akhir'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Final Leaderboard / Quiz Result Screen */
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 text-center max-w-md mx-auto shadow-2xl space-y-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-500 text-slate-950 flex items-center justify-center mx-auto shadow-lg shadow-amber-500/20">
              <Award className="w-10 h-10" />
            </div>

            <div>
              <h2 className="text-2xl font-black text-white">Kuis Selesai!</h2>
              <p className="text-xs text-slate-400 mt-1">Latihan Interaktif Berhasil Diselesaikan</p>
            </div>

            <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700">
              <div className="text-xs text-slate-400 font-semibold mb-1">Total Poin Diperoleh</div>
              <div className="text-4xl font-black text-amber-400">{score}</div>
              <div className="text-xs text-emerald-400 font-bold mt-2">
                Menyelesaikan {playableQuestions.length} Butir Soal Interaktif
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleRestart}
                className="flex-1 py-3 bg-slate-800 hover:bg-slate-700 rounded-xl font-bold text-xs flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Mainkan Lagi</span>
              </button>

              <button
                onClick={onClose}
                className="flex-1 py-3 bg-purple-700 hover:bg-purple-800 text-white rounded-xl font-bold text-xs"
              >
                Kembali ke Dashboard
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="text-center text-[11px] text-slate-500 py-1">
        EduAsesmen AI • Mode Kuis Interaktif Layar Kelas
      </div>
    </div>
  );
}
