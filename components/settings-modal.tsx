"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { X } from "lucide-react";
import { themes } from "@/lib/themes";

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentTheme: string;
  setCurrentTheme: (theme: string) => void;
  notifications: boolean;
  setNotifications: (enabled: boolean) => void;
  showSpotifyPlaylist: boolean;
  setShowSpotifyPlaylist: (show: boolean) => void;
  soundEffects: boolean;
  setSoundEffects: (enabled: boolean) => void;
  currentThemeData: any;
  pomodoroTime: number;
  setPomodoroTime: (time: number) => void;
  shortBreakTime: number;
  setShortBreakTime: (time: number) => void;
  longBreakTime: number;
  setLongBreakTime: (time: number) => void;
  initialTab?: string;
}

export default function SettingsModal({
  isOpen,
  onClose,
  currentTheme,
  setCurrentTheme,
  notifications,
  setNotifications,
  showSpotifyPlaylist,
  setShowSpotifyPlaylist,
  soundEffects,
  setSoundEffects,
  currentThemeData,
  pomodoroTime,
  setPomodoroTime,
  shortBreakTime,
  setShortBreakTime,
  longBreakTime,
  setLongBreakTime,
  initialTab = "general",
}: SettingsModalProps) {
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab);
    }
  }, [isOpen, initialTab]);

  const handleSaveChanges = () => {
    onClose();
  };

  const handleResetAll = () => {
    setCurrentTheme("seoul");
    setNotifications(false);
    setShowSpotifyPlaylist(true);
    setSoundEffects(true);
    setPomodoroTime(25);
    setShortBreakTime(5);
    setLongBreakTime(15);
  };

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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="max-w-2xl w-[90vw] h-[85vh] p-0 bg-black/95 border-gray-800"
        style={{ zIndex: 50 }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: currentThemeData.background,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 51,
          }}
        />
        <div
          className={`absolute inset-0 ${currentThemeData.overlay} opacity-50`}
          style={{ zIndex: 52 }}
        />

        <div className="relative flex flex-col h-full" style={{ zIndex: 53 }}>
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b border-gray-700">
            <h2 className="text-white text-xl font-semibold">Settings</h2>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-white"
              onClick={onClose}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="h-full"
            >
              <TabsList className="grid w-full grid-cols-3 bg-gray-800/50 m-4">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="timers">Timers</TabsTrigger>
                <TabsTrigger value="sounds">Sounds</TabsTrigger>
              </TabsList>

              <div className="px-6 pb-6">
                <TabsContent value="general" className="space-y-6 mt-0">
                  <div>
                    <Label className="text-white text-base font-medium mb-4 block">
                      Select theme:
                    </Label>
                    <Select
                      value={currentTheme}
                      onValueChange={setCurrentTheme}
                    >
                      <SelectTrigger className="bg-gray-800/50 border-gray-600 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent
                        className="bg-gray-800 border-gray-600 max-h-60"
                        style={{ zIndex: 55 }}
                      >
                        {Object.entries(groupedThemes).map(
                          ([category, themeList]) => (
                            <div key={category}>
                              <div className="px-2 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wide">
                                {category}
                              </div>
                              {themeList.map(([key, theme]) => (
                                <SelectItem
                                  key={key}
                                  value={key}
                                  className="text-white"
                                >
                                  {theme.name}
                                </SelectItem>
                              ))}
                            </div>
                          )
                        )}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-white text-sm">
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
                        <Label className="text-white text-sm">
                          Show Spotify playlist
                        </Label>
                        <p className="text-gray-400 text-xs">
                          Display music player
                        </p>
                      </div>
                      <Switch
                        checked={showSpotifyPlaylist}
                        onCheckedChange={setShowSpotifyPlaylist}
                      />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="timers" className="space-y-6 mt-0">
                  <div className="space-y-4">
                    <div>
                      <Label className="text-white text-sm mb-2 block">
                        Pomodoro Duration (minutes)
                      </Label>
                      <Input
                        type="number"
                        min="1"
                        max="60"
                        value={pomodoroTime}
                        onChange={(e) =>
                          setPomodoroTime(Number(e.target.value))
                        }
                        className="bg-gray-800/50 border-gray-600 text-white"
                      />
                    </div>

                    <div>
                      <Label className="text-white text-sm mb-2 block">
                        Short Break Duration (minutes)
                      </Label>
                      <Input
                        type="number"
                        min="1"
                        max="30"
                        value={shortBreakTime}
                        onChange={(e) =>
                          setShortBreakTime(Number(e.target.value))
                        }
                        className="bg-gray-800/50 border-gray-600 text-white"
                      />
                    </div>

                    <div>
                      <Label className="text-white text-sm mb-2 block">
                        Long Break Duration (minutes)
                      </Label>
                      <Input
                        type="number"
                        min="1"
                        max="60"
                        value={longBreakTime}
                        onChange={(e) =>
                          setLongBreakTime(Number(e.target.value))
                        }
                        className="bg-gray-800/50 border-gray-600 text-white"
                      />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="sounds" className="space-y-6 mt-0">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-white text-sm">
                          Sound effects
                        </Label>
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
                </TabsContent>
              </div>
            </Tabs>
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center p-6 border-t border-gray-700">
            <Button
              variant="outline"
              onClick={handleResetAll}
              className="border-red-500 text-red-500 hover:bg-red-500/10"
            >
              Reset all
            </Button>
            <div className="flex gap-3">
              <Button
                variant="secondary"
                onClick={onClose}
                className="bg-gray-600 text-white"
              >
                Close
              </Button>
              <Button
                onClick={handleSaveChanges}
                className="bg-white text-black"
              >
                Save changes
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
