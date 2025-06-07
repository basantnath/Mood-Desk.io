"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";

interface TimerSectionProps {
  timerMode: "pomodoro" | "short" | "long";
  timeLeft: number;
  isRunning: boolean;
  onModeChange: (mode: "pomodoro" | "short" | "long") => void;
  onStart: () => void;
  onReset: () => void;
}

export default function TimerSection({
  timerMode,
  timeLeft,
  isRunning,
  onModeChange,
  onStart,
  onReset,
}: TimerSectionProps) {
  const [isResetAnimating, setIsResetAnimating] = useState(false);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const handleReset = () => {
    setIsResetAnimating(true);
    onReset();
    setTimeout(() => setIsResetAnimating(false), 300);
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 -mt-8 md:-mt-12">
      {/* Timer Mode Buttons */}
      <div
        className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8 justify-center"
        style={{ zIndex: 25 }}
      >
        <Button
          variant={timerMode === "pomodoro" ? "default" : "outline"}
          className={`px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base relative backdrop-blur-sm ${
            timerMode === "pomodoro"
              ? "bg-white/85 text-gray-900 hover:bg-white/90 shadow-lg"
              : "bg-white/15 text-white border-white/30 hover:bg-white/25"
          }`}
          style={{ zIndex: 25 }}
          onClick={() => onModeChange("pomodoro")}
        >
          pomodoro
        </Button>
        <Button
          variant={timerMode === "short" ? "default" : "outline"}
          className={`px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base relative backdrop-blur-sm ${
            timerMode === "short"
              ? "bg-white/85 text-gray-900 hover:bg-white/90 shadow-lg"
              : "bg-white/15 text-white border-white/30 hover:bg-white/25"
          }`}
          style={{ zIndex: 25 }}
          onClick={() => onModeChange("short")}
        >
          short break
        </Button>
        <Button
          variant={timerMode === "long" ? "default" : "outline"}
          className={`px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base relative backdrop-blur-sm ${
            timerMode === "long"
              ? "bg-white/85 text-gray-900 hover:bg-white/90 shadow-lg"
              : "bg-white/15 text-white border-white/30 hover:bg-white/25"
          }`}
          style={{ zIndex: 25 }}
          onClick={() => onModeChange("long")}
        >
          long break
        </Button>
      </div>

      {/* Timer Display */}
      <div
        className={`text-white text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-timer font-black mb-4 md:mb-6 tracking-widest relative ${
          timeLeft <= 10 && isRunning ? "animate-pulse text-red-400" : ""
        }`}
        style={{
          fontFeatureSettings: "'tnum' 1",
          textShadow:
            "0 0 30px rgba(255, 255, 255, 0.3), 0 0 60px rgba(255, 255, 255, 0.1)",
          filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))",
          zIndex: 25,
        }}
      >
        {formatTime(timeLeft)}
      </div>

      {/* Control Buttons */}
      <div className="flex items-center gap-4 md:gap-6" style={{ zIndex: 25 }}>
        <Button
          onClick={onStart}
          className="bg-white/90 text-gray-900 hover:bg-white/95 px-6 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg font-medium relative backdrop-blur-sm shadow-lg"
          style={{ zIndex: 25 }}
        >
          {isRunning ? "pause" : "start"}
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className={`text-white hover:bg-white/20 h-20 w-20s md:h-20 md:w-20 rounded-full transition-all duration-300 relative  ${
            isResetAnimating ? "animate-spin scale-110" : ""
          }`}
          style={{ zIndex: 25 }}
          onClick={handleReset}
        >
          <RotateCcw className="h-8 w-8 md:h-20 md:w-20" />
        </Button>
      </div>
    </div>
  );
}
