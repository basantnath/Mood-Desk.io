"use client";

import { Instagram } from "lucide-react";

export default function InstagramWidget() {
  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/_basantnath_7/", "_blank");
  };

  return (
    <div
      className=" backdrop-blur-3xl border-gray-700 p-3 flex items-center gap-3 w-fit cursor-pointer rounded-xl "
      onClick={handleInstagramClick}
    >
      <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg p-2">
        <Instagram className="w-5 h-5 text-white" />
      </div>
      <div>
        <div className="text-white font-medium text-xs">FOLLOW ME ON</div>
        <div className="text-white font-bold text-sm">Instagram</div>
      </div>
    </div>
  );
}
