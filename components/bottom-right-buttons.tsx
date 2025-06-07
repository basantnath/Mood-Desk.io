"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCw, Maximize } from "lucide-react";
import {
  GeneralSettingsDropdown,
  ThemeSettingsDropdown,
  SoundSettingsDropdown,
} from "./settings-dropdowns";

interface BottomRightButtonsProps {
  currentTheme: string;
  setCurrentTheme: (theme: string) => void;
  notifications: boolean;
  setNotifications: (enabled: boolean) => void;
  showSpotifyPlaylist: boolean;
  setShowSpotifyPlaylist: (show: boolean) => void;
  soundEffects: boolean;
  setSoundEffects: (enabled: boolean) => void;
  pomodoroTime: number;
  setPomodoroTime: (time: number) => void;
  shortBreakTime: number;
  setShortBreakTime: (time: number) => void;
  longBreakTime: number;
  setLongBreakTime: (time: number) => void;
}

const inspirationalQuotes = [
  // God & Faith Inspired
  "Maybe they hate me because I’m too good!",
  "they hate us cause they ain't us",

  "God’s plan rarely comes with a map.",
  "Pray, hustle, repeat.",
  "Grace hits harder than karma.",
  "Faith is quiet. Fear is loud.",
  "God hears what your heart can’t say.",
  "Built by grace, not luck.",
  "Divine delays are still divine.",
  "God knows. You grow.",

  // Anime Energy
  "Power comes from pain.",
  "Fall. Rise. Repeat.",
  "A scar means you survived.",
  "Heroes break too.",
  "The weak today, the strong tomorrow.",
  "Quiet ones hit hardest.",
  "You train. You bleed. You win.",
  "Broken doesn’t mean beaten.",

  // Sarcastic & Darkly Inspirational
  "Rock bottom builds character.",
  "Smiling while dying inside = skill unlocked.",
  "Procrastination: chasing peace through panic.",
  "Burnout is just overachiever seasoning.",
  "Perfect is a myth. Chaos is real.",
  "Hard work pays off... eventually... maybe.",
  "Dream big. Cry quietly.",
  "Motivation died. Discipline took over.",
];

export default function BottomRightButtons({
  currentTheme,
  setCurrentTheme,
  notifications,
  setNotifications,
  showSpotifyPlaylist,
  setShowSpotifyPlaylist,
  soundEffects,
  setSoundEffects,
  pomodoroTime,
  setPomodoroTime,
  shortBreakTime,
  setShortBreakTime,
  longBreakTime,
  setLongBreakTime,
}: BottomRightButtonsProps) {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isQuoteChanging, setIsQuoteChanging] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsQuoteChanging(true);
      setTimeout(() => {
        setCurrentQuote((prev) => (prev + 1) % inspirationalQuotes.length);
        setIsQuoteChanging(false);
      }, 150);
    }, 15000); // Change quote every 12 seconds

    return () => clearInterval(interval);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const handleNewQuote = () => {
    setIsQuoteChanging(true);
    setTimeout(() => {
      setCurrentQuote((prev) => (prev + 1) % inspirationalQuotes.length);
      setIsQuoteChanging(false);
    }, 150);
  };

  return (
    <div className="flex flex-col gap-3 items-end">
      {/* Enhanced Quote Component */}
      <div className="relative" style={{ zIndex: 25 }}>
        <Button
          className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 hover:from-purple-700 hover:via-pink-700 hover:to-purple-800 text-white px-4 md:px-6 py-3 md:py-4 rounded-2xl flex items-center gap-3 text-sm max-w-sm text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 backdrop-blur-sm"
          onClick={handleNewQuote}
        >
          <RefreshCw
            className={`h-4 w-4 transition-transform duration-300 ${
              isQuoteChanging ? "rotate-180" : ""
            }`}
          />
          <span
            className={`truncate font-medium transition-all duration-300 ${
              isQuoteChanging ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
          >
            {inspirationalQuotes[currentQuote]}
          </span>
        </Button>

        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-purple-700/20 rounded-2xl blur-xl -z-10 opacity-50" />
      </div>

      {/* Settings Icons Row */}
      <div className="flex items-center gap-2" style={{ zIndex: 25 }}>
        <GeneralSettingsDropdown
          notifications={notifications}
          setNotifications={setNotifications}
          showSpotifyPlaylist={showSpotifyPlaylist}
          setShowSpotifyPlaylist={setShowSpotifyPlaylist}
          pomodoroTime={pomodoroTime}
          setPomodoroTime={setPomodoroTime}
          shortBreakTime={shortBreakTime}
          setShortBreakTime={setShortBreakTime}
          longBreakTime={longBreakTime}
          setLongBreakTime={setLongBreakTime}
        />
        <ThemeSettingsDropdown
          currentTheme={currentTheme}
          setCurrentTheme={setCurrentTheme}
        />
        <SoundSettingsDropdown
          soundEffects={soundEffects}
          setSoundEffects={setSoundEffects}
        />
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/20 h-8 w-8 md:h-10 md:w-10 rounded-lg relative"
          style={{ zIndex: 30 }}
          onClick={toggleFullscreen}
          title="Fullscreen"
        >
          <Maximize className="h-4 w-4 md:h-5 md:w-5" />
        </Button>
      </div>
    </div>
  );
}
