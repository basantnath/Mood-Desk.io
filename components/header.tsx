"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface HeaderProps {
  showVideo: boolean;
  setShowVideo: (show: boolean) => void;
}

export default function Header({ showVideo, setShowVideo }: HeaderProps) {
  return (
    <div className="p-4 md:p-6 h-full flex items-start justify-between">
      <div className="text-center md:text-left">
        <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-light tracking-wide font-handwritten">
          Mood Desk.io
        </h1>
        <p className="text-white/75  md:text-lg mt-1 tracking-widest font-handwritten">
          BY NINJA
        </p>
      </div>

      {/* Video Placeholder */}
      {showVideo && (
        <div className=" p-3 md:p-4  max-w-xs relative">
          <div className="flex justify-between items-start mb-3">
            <div></div>
            <Button
              variant="ghost"
              size="icon"
              className="text-black h-5 w-5"
              onClick={() => setShowVideo(false)}
            >
              <X className="h-5 w-5 bg-white/80 text-black rounded-full p-1" />
            </Button>
          </div>

          {/* Ronaldo Video */}
          <div className="relative rounded-lg overflow-hidden aspect-video">
         <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              controls={false}
              style={{ outline: "none" }}
            >
              <source src="/ronaldo.mp4" type="video/mp4" />
            </video>

          </div>
        </div>
      )}
    </div>
  );
}
