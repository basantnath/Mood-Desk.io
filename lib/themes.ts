export const themes = {
  seoul: {
    name: "Seoul",
    background: "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&h=1080&fit=crop')",
    overlay: "bg-gradient-to-br from-orange-500/30 via-pink-500/20 to-purple-600/30",
    category: "city",
  },
  tokyo: {
    name: "Tokyo Night",
    background: "url('https://plus.unsplash.com/premium_photo-1661914240950-b0124f20a5c1?w=1920&h=1080&fit=crop center')",
    overlay: "bg-gradient-to-br from-indigo-900/40 via-purple-900/30 to-blue-900/40",
    category: "city",
  },
  newyork: {
    name: "New York",
    background: "url('https://plus.unsplash.com/premium_photo-1714051660720-888e8454a021?w=1920&h=1080&fit=crop center')",
    overlay: "bg-gradient-to-br from-gray-900/30 via-gray-800/20 to-gray-700/30",
    category: "city",
  },

  // Nature themes
  forest: {
    name: "Forest Path",
    background: "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&h=1080&fit=crop')",
    overlay: "bg-gradient-to-br from-green-900/30 via-emerald-800/20 to-teal-900/30",
    category: "nature",
  },
  ocean: {
    name: "Ocean Waves",
    background: "url('https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1920&h=1080&fit=crop')",
    overlay: "bg-gradient-to-br from-blue-900/30 via-cyan-800/20 to-sky-900/30",
    category: "nature",
  },
  mountains: {
    name: "Mountain Peak",
    background: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop')",
    overlay: "bg-gradient-to-br from-slate-900/30 via-gray-800/20 to-zinc-900/30",
    category: "nature",
  },
  sunset: {
    name: "Golden Sunset",
    background: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop')",
    overlay: "bg-gradient-to-br from-orange-700/30 via-red-600/20 to-pink-700/30",
    category: "nature",
  },

  // Flowers & Plants
  sakura: {
    name: "Cherry Blossoms",
    background: "url('https://images.unsplash.com/photo-1522383225653-ed111181a951?w=1920&h=1080&fit=crop')",
    overlay: "bg-gradient-to-br from-pink-500/30 via-rose-400/20 to-purple-500/30",
    category: "flowers",
  },
  White_asphode: {
    name: "White asphodel",
    background: "url('https://images.unsplash.com/photo-1486944859394-ed1c44255713?w=1920&h=1080&fit=crop')",
    overlay: "bg-gradient-to-br from-purple-600/30 via-violet-500/20 to-indigo-600/30",
    category: "flowers",
  },
  sunflower: {
    name: "Sunflower Garden",
    background: "url('https://images.unsplash.com/photo-1470509037663-253afd7f0f51?w=1920&h=1080&fit=crop center')",
    overlay: "bg-gradient-to-br from-yellow-500/30 via-orange-400/20 to-amber-600/30",
    category: "flowers",
  },
  Red_poppies: {
    name: "Red poppies",
    background: "url('https://images.unsplash.com/photo-1444930694458-01babf71870c?w=1920&h=1080&fit=crop center')",
    overlay: "bg-gradient-to-br from-red-500/30 via-pink-500/20 to-rose-600/30",
    category: "flowers",
  },

  // Books & Study
  study: {
    name: "Coffee & Books",
    background: "url('https://images.unsplash.com/photo-1742867114109-c09040395c09?w=1920&h=1080&fit=crop center')",
    overlay: "bg-gradient-to-br from-amber-800/30 via-brown-700/20 to-orange-800/30",
    category: "books",
  },

  study1: {
    name: "Study Desk",
    background: "url('https://images.unsplash.com/photo-1727363995163-d67ccdb408e2?w=1920&h=1080&fit=crop center ')",
    overlay: "bg-gradient-to-br from-gray-700/30 via-slate-600/20 to-zinc-700/30",
    category: "books",
  },
  

  // Lamp Effects
  warmLamp: {
    name: "Warm Desk Lamp",
    background: `
      radial-gradient(ellipse 800px 600px at 20% 20%, #fbbf24 0%, transparent 50%),
      radial-gradient(ellipse 600px 400px at 80% 80%, #f59e0b 0%, transparent 50%),
      #000000
    `,
    overlay: "bg-gradient-to-br from-amber-900/40 via-orange-900/30 to-black/60",
    category: "lamp",
  },
  studyLamp: {
    name: "Study Room Lamp",
    background: `
      radial-gradient(ellipse 1000px 800px at 50% 30%, #fcd34d 0%, transparent 60%),
      radial-gradient(ellipse 400px 300px at 10% 70%, #f97316 0%, transparent 40%),
      #0a0a0a
    `,
    overlay: "bg-gradient-to-br from-yellow-900/30 via-amber-900/20 to-black/70",
    category: "lamp",
  },
  cozyLamp: {
    name: "Cozy Evening Lamp",
    background: `
      radial-gradient(ellipse 700px 500px at 70% 40%, #fb923c 0%, transparent 55%),
      radial-gradient(ellipse 500px 350px at 30% 80%, #fdba74 0%, transparent 45%),
      #111111
    `,
    overlay: "bg-gradient-to-br from-orange-900/35 via-amber-900/25 to-black/65",
    category: "lamp",
  },
  readingLamp: {
    name: "Reading Nook Lamp",
    background: `
      radial-gradient(ellipse 600px 800px at 80% 20%, #fde047 0%, transparent 50%),
      radial-gradient(ellipse 400px 600px at 20% 60%, #facc15 0%, transparent 40%),
      #050505
    `,
    overlay: "bg-gradient-to-br from-yellow-900/40 via-amber-900/30 to-black/60",
    category: "lamp",
  },
  vintageLight: {
    name: "Vintage Light",
    background: `
      radial-gradient(ellipse 900px 700px at 40% 50%, #d97706 0%, transparent 55%),
      radial-gradient(ellipse 300px 400px at 80% 30%, #ea580c 0%, transparent 35%),
      #1a1a1a
    `,
    overlay: "bg-gradient-to-br from-orange-900/45 via-red-900/25 to-black/70",
    category: "lamp",
  },
  moonlamp: {
    name: "Moonlight Lamp",
    background: `
      radial-gradient(ellipse 800px 600px at 60% 40%, #e5e7eb 0%, transparent 50%),
      radial-gradient(ellipse 400px 300px at 20% 70%, #f3f4f6 0%, transparent 40%),
      #000000
    `,
    overlay: "bg-gradient-to-br from-gray-800/40 via-slate-800/30 to-black/60",
    category: "lamp",
  },

  // Sea & Ocean Backgrounds
  deepOcean: {
    name: "Deep Ocean",
    background: "url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&h=1080&fit=crop')",
    overlay: "bg-gradient-to-br from-blue-900/40 via-indigo-900/30 to-slate-900/50",
    category: "sea",
  },
  tropicalSea: {
    name: "Tropical Sea",
    background: "url('https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1920&h=1080&fit=crop')",
    overlay: "bg-gradient-to-br from-cyan-800/30 via-teal-800/20 to-blue-900/40",
    category: "sea",
  },
  calmWaves: {
    name: "Calm Waves",
    background: "url('https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1920&h=1080&fit=crop')",
    overlay: "bg-gradient-to-br from-blue-800/35 via-cyan-800/25 to-slate-800/45",
    category: "sea",
  },
  underwater: {
    name: "Underwater",
    background: "url('https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=1920&h=1080&fit=crop')",
    overlay: "bg-gradient-to-br from-blue-900/50 via-teal-900/40 to-indigo-900/60",
    category: "sea",
  },
  seashore: {
    name: "Peaceful Seashore",
    background: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&h=1080&fit=crop')",
    overlay: "bg-gradient-to-br from-blue-700/30 via-cyan-700/20 to-slate-700/40",
    category: "sea",
  },
  oceanSunset: {
    name: "Ocean Sunset",
    background: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop')",
    overlay: "bg-gradient-to-br from-orange-800/40 via-pink-800/30 to-purple-900/50",
    category: "sea",
  },
  stormySea: {
    name: "Stormy Sea",
    background: "url('https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=1920&h=1080&fit=crop')",
    overlay: "bg-gradient-to-br from-gray-800/50 via-slate-800/40 to-blue-900/60",
    category: "sea",
  },

  // Solid colors
  purple: {
    name: "Purple",
    background: "linear-gradient(135deg, #8B5CF6 0%, #A855F7 100%)",
    overlay: "bg-black/10",
    category: "solid",
  },
  pink: {
    name: "Pink",
    background: "linear-gradient(135deg, #EC4899 0%, #F472B6 100%)",
    overlay: "bg-black/10",
    category: "solid",
  },
  blue: {
    name: "Blue",
    background: "linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)",
    overlay: "bg-black/10",
    category: "solid",
  },
  green: {
    name: "Green",
    background: "linear-gradient(135deg, #10B981 0%, #34D399 100%)",
    overlay: "bg-black/10",
    category: "solid",
  },
  orange: {
    name: "Orange",
    background: "linear-gradient(135deg, #F97316 0%, #FB923C 100%)",
    overlay: "bg-black/10",
    category: "solid",
  },
  red: {
    name: "Red",
    background: "linear-gradient(135deg, #EF4444 0%, #F87171 100%)",
    overlay: "bg-black/10",
    category: "solid",
  },
  teal: {
    name: "Teal",
    background: "linear-gradient(135deg, #14B8A6 0%, #5EEAD4 100%)",
    overlay: "bg-black/10",
    category: "solid",
  },
  indigo: {
    name: "Indigo",
    background: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)",
    overlay: "bg-black/10",
    category: "solid",
  },

  // Pattern themes
  gridBlack: {
    name: "Black Grid",
    background: `
      linear-gradient(to right, #333 1px, transparent 1px),
      linear-gradient(to bottom, #333 1px, transparent 1px),
      #000000
    `,
    backgroundSize: "40px 40px, 40px 40px, 100%",
    overlay: "bg-black/10",
    category: "patterns",
  },
  gridDark: {
    name: "Dark Grid",
    background: `
      linear-gradient(to right, #444 1px, transparent 1px),
      linear-gradient(to bottom, #444 1px, transparent 1px),
      #111111
    `,
    backgroundSize: "30px 30px, 30px 30px, 100%",
    overlay: "bg-black/20",
    category: "patterns",
  },
  gridNeon: {
    name: "Neon Grid",
    background: `
      linear-gradient(to right, #00ff88 1px, transparent 1px),
      linear-gradient(to bottom, #00ff88 1px, transparent 1px),
      #000000
    `,
    backgroundSize: "50px 50px, 50px 50px, 100%",
    overlay: "bg-black/30",
    category: "patterns",
  },
  gridPurple: {
    name: "Purple Grid",
    background: `
      linear-gradient(to right, #8b5cf6 1px, transparent 1px),
      linear-gradient(to bottom, #8b5cf6 1px, transparent 1px),
      #000000
    `,
    backgroundSize: "35px 35px, 35px 35px, 100%",
    overlay: "bg-black/20",
    category: "patterns",
  },
  gridCyan: {
    name: "Cyan Grid",
    background: `
      linear-gradient(to right, #06b6d4 1px, transparent 1px),
      linear-gradient(to bottom, #06b6d4 1px, transparent 1px),
      #000000
    `,
    backgroundSize: "45px 45px, 45px 45px, 100%",
    overlay: "bg-black/25",
    category: "patterns",
  },
  dotGrid: {
    name: "Dot Grid",
    background: `
      radial-gradient(circle, #555 1px, transparent 1px),
      #000000
    `,
    backgroundSize: "30px 30px, 100%",
    overlay: "bg-black/10",
    category: "patterns",
  },
}
