"use client";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Settings, Palette, Volume2 } from "lucide-react";
import { themes } from "@/lib/themes";

interface GeneralSettingsDropdownProps {
  notifications: boolean;
  setNotifications: (enabled: boolean) => void;
  showSpotifyPlaylist: boolean;
  setShowSpotifyPlaylist: (show: boolean) => void;
  pomodoroTime: number;
  setPomodoroTime: (time: number) => void;
  shortBreakTime: number;
  setShortBreakTime: (time: number) => void;
  longBreakTime: number;
  setLongBreakTime: (time: number) => void;
}

export function GeneralSettingsDropdown({
  notifications,
  setNotifications,
  showSpotifyPlaylist,
  setShowSpotifyPlaylist,
  pomodoroTime,
  setPomodoroTime,
  shortBreakTime,
  setShortBreakTime,
  longBreakTime,
  setLongBreakTime,
}: GeneralSettingsDropdownProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/20 h-8 w-8 md:h-10 md:w-10 rounded-lg relative"
          style={{ zIndex: 30 }}
          title="General Settings"
        >
          <Settings className="h-4 w-4 md:h-5 md:w-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-80 bg-black border-gray-800 backdrop-blur-sm"
        align="end"
        sideOffset={8}
        style={{ zIndex: 40 }}
      >
        <div className="space-y-4">
          <h3 className="text-white font-semibold text-sm">General Settings</h3>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-white text-xs">
                  Browser notifications
                </Label>
                <p className="text-gray-400 text-xs">
                  Get notified when timer finishes
                </p>
              </div>
              <Switch
                checked={notifications}
                onCheckedChange={setNotifications}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label className="text-white text-xs">
                  Show Spotify playlist
                </Label>
                <p className="text-gray-400 text-xs">Display music player</p>
              </div>
              <Switch
                checked={showSpotifyPlaylist}
                onCheckedChange={setShowSpotifyPlaylist}
              />
            </div>
          </div>

          <div className="border-t border-gray-800 pt-3 space-y-3">
            <h4 className="text-white text-xs font-medium">Timer Durations</h4>

            <div className="grid grid-cols-3 gap-2">
              <div>
                <Label className="text-white text-xs">Pomodoro</Label>
                <Input
                  type="number"
                  min="1"
                  max="60"
                  value={pomodoroTime}
                  onChange={(e) => setPomodoroTime(Number(e.target.value))}
                  className="bg-gray-900 border-gray-700 text-white text-xs h-8"
                />
              </div>
              <div>
                <Label className="text-white text-xs">Short</Label>
                <Input
                  type="number"
                  min="1"
                  max="30"
                  value={shortBreakTime}
                  onChange={(e) => setShortBreakTime(Number(e.target.value))}
                  className="bg-gray-900 border-gray-700 text-white text-xs h-8"
                />
              </div>
              <div>
                <Label className="text-white text-xs">Long</Label>
                <Input
                  type="number"
                  min="1"
                  max="60"
                  value={longBreakTime}
                  onChange={(e) => setLongBreakTime(Number(e.target.value))}
                  className="bg-gray-900 border-gray-700 text-white text-xs h-8"
                />
              </div>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

interface ThemeSettingsDropdownProps {
  currentTheme: string;
  setCurrentTheme: (theme: string) => void;
}

export function ThemeSettingsDropdown({
  currentTheme,
  setCurrentTheme,
}: ThemeSettingsDropdownProps) {
  const groupedThemes = {
    city: Object.entries(themes).filter(
      ([_, theme]) => theme.category === "city"
    ),
    nature: Object.entries(themes).filter(
      ([_, theme]) => theme.category === "nature"
    ),
    flowers: Object.entries(themes).filter(
      ([_, theme]) => theme.category === "flowers"
    ),
    books: Object.entries(themes).filter(
      ([_, theme]) => theme.category === "books"
    ),
    patterns: Object.entries(themes).filter(
      ([_, theme]) => theme.category === "patterns"
    ),
    solid: Object.entries(themes).filter(
      ([_, theme]) => theme.category === "solid"
    ),
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/20 h-8 w-8 md:h-10 md:w-10 rounded-lg relative"
          style={{ zIndex: 30 }}
          title="Theme Settings"
        >
          <Palette className="h-4 w-4 md:h-5 md:w-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-80 bg-black border-gray-800 backdrop-blur-sm"
        align="end"
        sideOffset={8}
        style={{ zIndex: 40 }}
      >
        <div className="space-y-4">
          <h3 className="text-white font-semibold text-sm">Theme Settings</h3>

          <div>
            <Label className="text-white text-xs mb-2 block">
              Select theme:
            </Label>
            <Select value={currentTheme} onValueChange={setCurrentTheme}>
              <SelectTrigger className="bg-gray-900 border-gray-700 text-white text-xs">
                <SelectValue />
              </SelectTrigger>
              <SelectContent
                className="bg-black border-gray-800 max-h-60"
                style={{ zIndex: 45 }}
              >
                {Object.entries(groupedThemes).map(([category, themeList]) => (
                  <div key={category}>
                    <div className="px-2 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wide">
                      {category}
                    </div>
                    {themeList.map(([key, theme]) => (
                      <SelectItem
                        key={key}
                        value={key}
                        className="text-white text-xs"
                      >
                        {theme.name}
                      </SelectItem>
                    ))}
                  </div>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Theme Preview Grid */}
          <div className="space-y-3">
            {Object.entries(groupedThemes).map(([category, themeList]) => (
              <div key={category}>
                <h4 className="text-white text-xs font-medium mb-2 capitalize">
                  {category}
                </h4>
                <div className="grid grid-cols-4 gap-2">
                  {themeList.map(([key, theme]) => (
                    <button
                      key={key}
                      onClick={() => setCurrentTheme(key)}
                      className={`h-12 w-full rounded-lg border-2 transition-all hover:scale-105 relative ${
                        currentTheme === key
                          ? "border-white shadow-lg"
                          : "border-gray-600"
                      }`}
                      style={{
                        background: theme.background,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        zIndex: 35,
                      }}
                      title={theme.name}
                    >
                      <div
                        className={`w-full h-full rounded-md ${theme.overlay} flex items-center justify-center`}
                      >
                        <span className="text-white text-xs font-medium opacity-0 hover:opacity-100 transition-opacity">
                          {theme.name.split(" ")[0]}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

interface SoundSettingsDropdownProps {
  soundEffects: boolean;
  setSoundEffects: (enabled: boolean) => void;
}

export function SoundSettingsDropdown({
  soundEffects,
  setSoundEffects,
}: SoundSettingsDropdownProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/20 h-8 w-8 md:h-10 md:w-10 rounded-lg relative"
          style={{ zIndex: 30 }}
          title="Sound Settings"
        >
          <Volume2 className="h-4 w-4 md:h-5 md:w-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-64 bg-black border-gray-800 backdrop-blur-sm"
        align="end"
        sideOffset={8}
        style={{ zIndex: 40 }}
      >
        <div className="space-y-4">
          <h3 className="text-white font-semibold text-sm">Sound Settings</h3>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-white text-xs">Sound effects</Label>
                <p className="text-gray-400 text-xs">
                  Timer completion and button sounds
                </p>
              </div>
              <Switch
                checked={soundEffects}
                onCheckedChange={setSoundEffects}
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
