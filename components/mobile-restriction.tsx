"use client";

import { useEffect, useState } from "react";

export default function MobileRestriction() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024); // Hide on screens smaller than 1024px
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  if (!isMobile) return null;

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="text-center max-w-md">
        <div className="mb-8 flex justify-center">
          <div className="text-8xl animate-bounce">🤣</div>
        </div>

        <h1 className="text-white text-3xl font-bold mb-6 font-handwritten">
          {" "}
          Mood Desk.io
        </h1>

        <div className="space-y-4">
          <p className="text-white/80 text-3xl leading-relaxed font-handwritten">
            This site is allergic to screens that make web designers cry.
          </p>
          <div className="text-white/60 text-xs">
            Minimum screen width: 1024px
          </div>
        </div>

        <div className="mt-8 text-white/50 text-xs">© Mood Desk.io</div>
      </div>
    </div>
  );
}
