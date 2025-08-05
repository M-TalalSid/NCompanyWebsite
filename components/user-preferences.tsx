"use client";

import { useState, useEffect } from "react";
import {
  Settings,
  Palette,
  Moon,
  Sun,
  Monitor,
  Save,
  User,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface UserPreferences {
  theme: "light" | "dark" | "system";
  colorScheme: "purple" | "blue" | "green" | "orange";
  animations: boolean;
  notifications: boolean;
  autoSave: boolean;
  language: string;
  fontSize: "small" | "medium" | "large";
}

const defaultPreferences: UserPreferences = {
  theme: "dark",
  colorScheme: "purple",
  animations: true,
  notifications: true,
  autoSave: true,
  language: "en",
  fontSize: "medium",
};

export default function UserPreferences() {
  const [isOpen, setIsOpen] = useState(false);
  const [preferences, setPreferences] =
    useState<UserPreferences>(defaultPreferences);
  const [hasChanges, setHasChanges] = useState(false);

  useEffect(() => {
    // Load preferences from localStorage
    const saved = localStorage.getItem("mt-international-preferences");
    if (saved) {
      try {
        const parsedPreferences = JSON.parse(saved);
        setPreferences({ ...defaultPreferences, ...parsedPreferences });
      } catch (error) {
        console.error("Error loading preferences:", error);
      }
    }
  }, []);

  const updatePreference = <K extends keyof UserPreferences>(
    key: K,
    value: UserPreferences[K]
  ) => {
    setPreferences((prev) => ({ ...prev, [key]: value }));
    setHasChanges(true);
  };

  const savePreferences = () => {
    localStorage.setItem("mt-international-preferences", JSON.stringify(preferences));
    setHasChanges(false);

    // Apply theme changes
    document.documentElement.setAttribute("data-theme", preferences.theme);
    document.documentElement.setAttribute(
      "data-color-scheme",
      preferences.colorScheme
    );
    document.documentElement.setAttribute(
      "data-animations",
      preferences.animations.toString()
    );
    document.documentElement.setAttribute(
      "data-font-size",
      preferences.fontSize
    );

    // Show success message
    const event = new CustomEvent("preferences-saved", { detail: preferences });
    window.dispatchEvent(event);
  };

  const resetPreferences = () => {
    setPreferences(defaultPreferences);
    setHasChanges(true);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Open preferences"
      >
        <Settings className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-purple-900/95 backdrop-blur-md rounded-3xl p-8 border border-purple-700/50 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <User className="w-6 h-6 text-purple-400" />
            <h2 className="text-2xl font-bold text-white">User Preferences</h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-purple-300 hover:text-white transition-colors duration-300"
          >
            ✕
          </button>
        </div>

        <div className="space-y-8">
          {/* Theme Settings */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Palette className="w-5 h-5 mr-2" />
              Appearance
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-purple-200 mb-2">Theme</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: "light", icon: Sun, label: "Light" },
                    { value: "dark", icon: Moon, label: "Dark" },
                    { value: "system", icon: Monitor, label: "System" },
                  ].map((theme) => (
                    <button
                      key={theme.value}
                      onClick={() =>
                        updatePreference("theme", theme.value as any)
                      }
                      className={`flex items-center justify-center space-x-2 p-3 rounded-xl border transition-all duration-300 ${
                        preferences.theme === theme.value
                          ? "border-purple-400 bg-purple-700/50 text-white"
                          : "border-purple-600/50 text-purple-300 hover:border-purple-500/50 hover:bg-purple-800/30"
                      }`}
                    >
                      <theme.icon className="w-4 h-4" />
                      <span className="text-sm">{theme.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-purple-200 mb-2">
                  Color Scheme
                </label>
                <div className="grid grid-cols-4 gap-3">
                  {[
                    { value: "purple", color: "from-purple-500 to-pink-500" },
                    { value: "blue", color: "from-blue-500 to-cyan-500" },
                    { value: "green", color: "from-green-500 to-teal-500" },
                    { value: "orange", color: "from-orange-500 to-red-500" },
                  ].map((scheme) => (
                    <button
                      key={scheme.value}
                      onClick={() =>
                        updatePreference("colorScheme", scheme.value as any)
                      }
                      className={`h-12 rounded-xl bg-gradient-to-r ${
                        scheme.color
                      } transition-all duration-300 ${
                        preferences.colorScheme === scheme.value
                          ? "ring-2 ring-white ring-offset-2 ring-offset-purple-900 scale-110"
                          : "hover:scale-105"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-purple-200 mb-2">Font Size</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: "small", label: "Small" },
                    { value: "medium", label: "Medium" },
                    { value: "large", label: "Large" },
                  ].map((size) => (
                    <button
                      key={size.value}
                      onClick={() =>
                        updatePreference("fontSize", size.value as any)
                      }
                      className={`p-3 rounded-xl border transition-all duration-300 ${
                        preferences.fontSize === size.value
                          ? "border-purple-400 bg-purple-700/50 text-white"
                          : "border-purple-600/50 text-purple-300 hover:border-purple-500/50 hover:bg-purple-800/30"
                      }`}
                    >
                      <span
                        className={`${
                          size.value === "small"
                            ? "text-sm"
                            : size.value === "large"
                            ? "text-lg"
                            : ""
                        }`}
                      >
                        {size.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Behavior Settings */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Eye className="w-5 h-5 mr-2" />
              Behavior
            </h3>
            <div className="space-y-4">
              {[
                {
                  key: "animations",
                  label: "Enable Animations",
                  description: "Smooth transitions and effects",
                },
                {
                  key: "notifications",
                  label: "Notifications",
                  description: "Receive updates and alerts",
                },
                {
                  key: "autoSave",
                  label: "Auto Save",
                  description: "Automatically save your preferences",
                },
              ].map((setting) => (
                <div
                  key={setting.key}
                  className="flex items-center justify-between p-4 bg-purple-800/30 rounded-xl"
                >
                  <div>
                    <div className="text-white font-medium">
                      {setting.label}
                    </div>
                    <div className="text-purple-300 text-sm">
                      {setting.description}
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      updatePreference(
                        setting.key as keyof UserPreferences,
                        !preferences[
                          setting.key as keyof UserPreferences
                        ] as any
                      )
                    }
                    className={`relative w-12 h-6 rounded-full transition-all duration-300 ${
                      preferences[setting.key as keyof UserPreferences]
                        ? "bg-purple-500"
                        : "bg-purple-700"
                    }`}
                  >
                    <div
                      className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-all duration-300 ${
                        preferences[setting.key as keyof UserPreferences]
                          ? "left-6"
                          : "left-0.5"
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Language Settings */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Language</h3>
            <select
              value={preferences.language}
              onChange={(e) => updatePreference("language", e.target.value)}
              className="w-full bg-purple-800/50 border border-purple-600/50 text-white rounded-xl px-4 py-3 focus:border-purple-400 focus:outline-none"
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
              <option value="zh">中文</option>
            </select>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-purple-700/50">
          <Button
            onClick={resetPreferences}
            variant="outline"
            className="border-purple-400 text-purple-200 hover:bg-purple-800/50 bg-transparent"
          >
            Reset to Default
          </Button>

          <div className="flex space-x-3">
            <Button
              onClick={() => setIsOpen(false)}
              variant="outline"
              className="border-purple-600 text-purple-300 hover:bg-purple-800/30 bg-transparent"
            >
              Cancel
            </Button>
            <Button
              onClick={savePreferences}
              disabled={!hasChanges}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
