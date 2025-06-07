"use client";

import { useState, useEffect, useRef } from "react";
import Header from "@/components/header";
import TimerSection from "@/components/timer-section";
import InstagramWidget from "@/components/instagram-widget";
import SpotifyPlayer from "@/components/spotify-player";
import BottomRightButtons from "@/components/bottom-right-buttons";
import MobileRestriction from "@/components/mobile-restriction";
import { themes } from "@/lib/themes";
import { useSoundEffects } from "@/hooks/use-sound-effects";

export default function StudyTimer() {
  const [currentTheme, setCurrentTheme] = useState("seoul");
  const [timerMode, setTimerMode] = useState<"pomodoro" | "short" | "long">(
    "pomodoro"
  );
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [showVideo, setShowVideo] = useState(true);
  const [notifications, setNotifications] = useState(false);
  const [showSpotifyPlaylist, setShowSpotifyPlaylist] = useState(true);
  const [soundEffects, setSoundEffects] = useState(true);
  const [hasPlayedWarning, setHasPlayedWarning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  //timer durations
  const [pomodoroTime, setPomodoroTime] = useState(25);
  const [shortBreakTime, setShortBreakTime] = useState(5);
  const [longBreakTime, setLongBreakTime] = useState(15);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const { playTimerWarning, playTimerComplete, playButtonClick } =
    useSoundEffects();

  //current mode duration
  const getCurrentModeDuration = () => {
    switch (timerMode) {
      case "pomodoro":
        return pomodoroTime * 60;
      case "short":
        return shortBreakTime * 60;
      case "long":
        return longBreakTime * 60;
      default:
        return 25 * 60;
    }
  };

  //if mobile
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // page title with timer
  useEffect(() => {
    const formatTime = (seconds: number) => {
      const mins = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${mins.toString().padStart(2, "0")}:${secs
        .toString()
        .padStart(2, "0")}`;
    };

    if (isRunning) {
      document.title = `${formatTime(timeLeft)} - ${
        timerMode.charAt(0).toUpperCase() + timerMode.slice(1)
      } | Study With Me.io`;
    } else {
      document.title = " Mood Desk.io - Pomodoro Timer";
    }
  }, [timeLeft, isRunning, timerMode]);

  //  ONLY runs when isRunning is true
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            setIsRunning(false);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    // Cleanup function
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isRunning]); // ONLY depends on isRunning

  // Timer completion and warning effects
  useEffect(() => {
    if (timeLeft === 10 && isRunning && soundEffects && !hasPlayedWarning) {
      playTimerWarning();
      setHasPlayedWarning(true);
    }

    if (timeLeft === 0 && !isRunning) {
      setHasPlayedWarning(false);

      if (soundEffects) {
        playTimerComplete();
      }

      if (notifications) {
        new Notification("Timer finished!", {
          body: `Your ${timerMode} session is complete.`,
        });
      }
    }
  }, [
    timeLeft,
    isRunning,
    timerMode,
    notifications,
    soundEffects,
    playTimerWarning,
    playTimerComplete,
    hasPlayedWarning,
  ]);

  // SIMPLE Start/Pause handler
  const handleStart = () => {
    if (soundEffects) playButtonClick();
    setIsRunning(!isRunning);
  };

  // EXPLICIT Reset handler - ONLY resets when user clicks reset
  const handleReset = () => {
    if (soundEffects) playButtonClick();

    // Stop the timer
    setIsRunning(false);

    // Reset to current mode duration
    setTimeLeft(getCurrentModeDuration());
    setHasPlayedWarning(false);
  };

  // EXPLICIT Mode change handler - ONLY resets when user changes mode
  const handleModeChange = (mode: "pomodoro" | "short" | "long") => {
    if (soundEffects) playButtonClick();

    // Stop the timer
    setIsRunning(false);

    // Change mode
    setTimerMode(mode);

    // Reset to new mode duration
    const newDuration =
      mode === "pomodoro"
        ? pomodoroTime * 60
        : mode === "short"
        ? shortBreakTime * 60
        : longBreakTime * 60;
    setTimeLeft(newDuration);
    setHasPlayedWarning(false);
  };

  // ONLY reset timer when duration settings change AND timer is not running
  useEffect(() => {
    if (!isRunning) {
      setTimeLeft(getCurrentModeDuration());
    }
  }, [pomodoroTime, shortBreakTime, longBreakTime]);

  if (isMobile) {
    return <MobileRestriction />;
  }

  const currentThemeData = themes[currentTheme as keyof typeof themes];

  return (
    <div
      className="h-screen relative overflow-hidden flex flex-col"
      style={{
        background: currentThemeData.background,
        backgroundSize: currentThemeData.backgroundSize || "cover",
        backgroundPosition: "center",
        backgroundRepeat: currentThemeData.backgroundSize
          ? "repeat"
          : "no-repeat",
        zIndex: 0, // Background layer
      }}
    >
      {/* Background Overlay - Above background, below content */}
      <div
        className={`absolute inset-0 ${currentThemeData.overlay}`}
        style={{ zIndex: 1 }}
      />

      {/* Header - Above overlay */}
      <div
        className="relative h-24 md:h-32 flex-shrink-0"
        style={{ zIndex: 20 }}
      >
        <Header showVideo={showVideo} setShowVideo={setShowVideo} />
      </div>

      {/* Main Content - Above overlay */}
      <div
        className="relative flex-1 flex flex-col justify-center min-h-0"
        style={{ zIndex: 20 }}
      >
        <TimerSection
          timerMode={timerMode}
          timeLeft={timeLeft}
          isRunning={isRunning}
          onModeChange={handleModeChange}
          onStart={handleStart}
          onReset={handleReset}
        />
      </div>

      {/* Bottom Section - Above overlay */}
      <div
        className="relative h-40 md:h-48 flex-shrink-0 flex items-end justify-between p-4 md:p-6"
        style={{ zIndex: 20 }}
      >
        {/* Left side - Instagram and Spotify */}
        <div className="flex flex-col gap-4">
          <InstagramWidget />
          {showSpotifyPlaylist && <SpotifyPlayer />}
        </div>

        {/* Right side - Action buttons */}
        <BottomRightButtons
          currentTheme={currentTheme}
          setCurrentTheme={setCurrentTheme}
          notifications={notifications}
          setNotifications={setNotifications}
          showSpotifyPlaylist={showSpotifyPlaylist}
          setShowSpotifyPlaylist={setShowSpotifyPlaylist}
          soundEffects={soundEffects}
          setSoundEffects={setSoundEffects}
          pomodoroTime={pomodoroTime}
          setPomodoroTime={setPomodoroTime}
          shortBreakTime={shortBreakTime}
          setShortBreakTime={setShortBreakTime}
          longBreakTime={longBreakTime}
          setLongBreakTime={setLongBreakTime}
        />
      </div>
    </div>
  );
}
