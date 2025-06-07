"use client"

import { useEffect, useRef } from "react"

export function useSoundEffects() {
  const audioContextRef = useRef<AudioContext | null>(null)

  useEffect(() => {
    const initAudio = () => {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
      }
    }

    document.addEventListener("click", initAudio, { once: true })
    return () => document.removeEventListener("click", initAudio)
  }, [])

  const playBeep = (frequency = 800, duration = 200, volume = 0.1) => {
    if (!audioContextRef.current) return

    const oscillator = audioContextRef.current.createOscillator()
    const gainNode = audioContextRef.current.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(audioContextRef.current.destination)

    oscillator.frequency.setValueAtTime(frequency, audioContextRef.current.currentTime)
    oscillator.type = "sine"

    gainNode.gain.setValueAtTime(0, audioContextRef.current.currentTime)
    gainNode.gain.linearRampToValueAtTime(volume, audioContextRef.current.currentTime + 0.01)
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContextRef.current.currentTime + duration / 1000)

    oscillator.start(audioContextRef.current.currentTime)
    oscillator.stop(audioContextRef.current.currentTime + duration / 1000)
  }

  const playTimerWarning = () => {
    // 3 quick beeps
    playBeep(1000, 150, 0.15)
    setTimeout(() => playBeep(1000, 150, 0.15), 200)
    setTimeout(() => playBeep(1000, 150, 0.15), 400)
  }

  const playTimerComplete = () => {
    //  completion melody
    playBeep(800, 300, 0.2)
    setTimeout(() => playBeep(1000, 300, 0.2), 350)
    setTimeout(() => playBeep(1200, 500, 0.2), 700)
  }

  const playButtonClick = () => {
    playBeep(600, 100, 0.05)
  }

  return {
    playTimerWarning,
    playTimerComplete,
    playButtonClick,
  }
}
