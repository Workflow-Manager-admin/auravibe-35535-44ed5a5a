import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useTheme } from "../../contexts/ThemeContext";

/**
 * Shows a sample Unsplash avatar with attribution, matching the app's accessible style.
 */
const SampleAvatar = () => {
  const avatarUrl =
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=160&h=160&facepad=2&q=80";
  const avatarAlt =
    "Portrait of a smiling woman in pink sunglasses, by Lidya Nada on Unsplash";
  const attribution = {
    name: "Lidya Nada",
    link: "https://unsplash.com/@lidyanada",
    source: "Unsplash",
    sourceLink: "https://unsplash.com/photos/8manzosDSGM"
  };

  return (
    <div className="flex flex-col items-center">
      <img
        src={avatarUrl}
        alt={avatarAlt}
        className="w-20 h-20 rounded-full object-cover border-4 border-accent/30 shadow-lg"
        draggable="false"
      />
      {/* Visible attribution below avatar for accessibility */}
      <div className="mt-2 text-xs text-gray-300 text-center max-w-[155px]">
        <span>
          Photo by&nbsp;
          <a
            href={attribution.link}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-accent"
            tabIndex={0}
          >
            {attribution.name}
          </a>
          &nbsp;on&nbsp;
          <a
            href={attribution.sourceLink}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-accent"
            tabIndex={0}
          >
            {attribution.source}
          </a>
        </span>
      </div>
    </div>
  );
};

// Toggle Switch Component
function ToggleSwitch({ checked, onChange, label, id }) {
  return (
    <label className="flex items-center cursor-pointer gap-3 select-none" htmlFor={id}>
      <div className="relative">
        <input
          id={id}
          type="checkbox"
          className="sr-only peer"
          checked={checked}
          onChange={e => onChange(e.target.checked)}
        />
        <div className="
          w-11 h-6
          bg-gray-700 peer-checked:bg-accent
          rounded-full
          transition-colors duration-200
          shadow-inner
        " />
        <div className="
          absolute left-1 top-1
          w-4 h-4
          bg-white peer-checked:bg-[#fae6e9] rounded-full
          shadow
          transition-transform duration-200
          peer-checked:translate-x-5
        " />
      </div>
      <span className="text-base font-serif text-gray-300">{label}</span>
    </label>
  );
}

// Slider Component
function Slider({ min, max, value, onChange, label, id, step = 1, postfix = "" }) {
  return (
    <div className="flex flex-col gap-0.5">
      <div className="flex justify-between items-center">
        <label htmlFor={id} className="text-base font-serif text-gray-300">{label}</label>
        <span className="text-gray-400 text-sm">{value}{postfix}</span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        value={value}
        step={step}
        onChange={e => onChange(Number(e.target.value))}
        className="
          mt-2 appearance-none w-full h-2 rounded-full
          bg-gradient-to-r from-accent/40 via-primary to-secondary/30
          outline-none transition
          accent-accent
        "
        style={{
          accentColor: "#780707"
        }}
      />
    </div>
  );
}

// PUBLIC_INTERFACE
export default function SettingsPage() {
  // Would use real user context here, but for demo we use fake data or AuthContext stub.
  const { user, logout } = useAuth() || {};
  const { theme, setTheme } = useTheme() || {};

  // Settings state (would normally come from user/preferences context)
  const [privacyStory, setPrivacyStory] = useState(true);
  const [privacyAccount, setPrivacyAccount] = useState(false);
  const [notificationsPush, setNotificationsPush] = useState(true);
  const [notificationsLikes, setNotificationsLikes] = useState(true);
  const [notificationsComments, setNotificationsComments] = useState(true);
  const [notificationsDMs, setNotificationsDMs] = useState(true);
  const [fontSize, setFontSize] = useState(16);

  // Demo theme toggle option
  const handleThemeToggle = (val) => setTheme && setTheme(val ? "dark" : "light");

  const profileName = user?.username || "auranaut";
  const profileHandle = user?.handle || "@auranaut";
  const avatar = user?.avatar_url || null;

  return (
    <section className="w-full max-w-lg mx-auto py-8 px-2 sm:px-0">
      {/* Card container */}
      <div className="
        flex flex-col gap-6 rounded-3xl
        bg-gradient-to-tr from-[#181921]/95 via-black/95 to-[#1a1820]/95
        border border-gray-800 shadow-2xl
        p-6 lg:p-9
        ring-1 ring-accent/15
        backdrop-blur-[1px]
        transition-all
        mb-5
      ">
        {/* Profile section */}
        <div className="flex items-center gap-5 pb-4 border-b border-accent/10 mb-2">
          {avatar ? (
            <img
              src={avatar}
              alt={profileName}
              className="w-20 h-20 rounded-full border-4 border-accent/10 object-cover shadow-lg"
            />
          ) : (
            <SampleAvatar />
          )}
          <div>
            <div className="text-2xl font-serif font-semibold text-secondary drop-shadow-md">{profileName}</div>
            <div className="text-gray-400 font-serif text-base rounded mt-1">{profileHandle}</div>
          </div>
          <a
            href={`/profile/${profileName}/edit`}
            className="
              ml-auto px-4 py-2 rounded-full bg-gradient-to-r from-accent/80 to-pink-900/80 text-white
              font-serif font-bold shadow hover:scale-105 hover:ring-2 hover:ring-pink-200/50
              transition-all duration-150 text-xs md:text-sm
            "
          >
            Edit Profile
          </a>
        </div>
        {/* Account Settings */}
        <section>
          <h3 className="text-accent font-serif font-bold text-lg mb-2 mt-1">Account Settings</h3>
          <div className="flex flex-col gap-4">
            <a
              href={`/profile/${profileName}/edit`}
              className="block rounded-xl px-4 py-3 bg-gray-900/90 hover:bg-accent/10 border border-gray-800 text-gray-200 font-serif shadow ring-accent/20 ring-0 hover:ring-2 transition-all"
            >Edit Profile</a>
            <a
              href="#"
              className="block rounded-xl px-4 py-3 bg-gray-900/90 hover:bg-accent/10 border border-gray-800 text-gray-200 font-serif shadow ring-accent/20 ring-0 hover:ring-2 transition-all"
            >Change Password</a>
            <div className="flex flex-col md:flex-row gap-2 md:gap-8">
              <a
                href="#"
                className="rounded-xl px-4 py-3 flex-1 bg-gray-900/90 hover:bg-accent/10 border border-gray-800 text-gray-200 font-serif shadow ring-accent/20 ring-0 hover:ring-2 transition-all text-center"
              >Manage Email</a>
              <a
                href="#"
                className="rounded-xl px-4 py-3 flex-1 bg-gray-900/90 hover:bg-accent/10 border border-gray-800 text-gray-200 font-serif shadow ring-accent/20 ring-0 hover:ring-2 transition-all text-center"
              >Manage Phone</a>
            </div>
          </div>
        </section>

        {/* Privacy Settings */}
        <section>
          <h3 className="text-accent font-serif font-bold text-lg mb-2 mt-1">Privacy Settings</h3>
          <div className="flex flex-col gap-3">
            <a
              href="#"
              className="block rounded-xl px-4 py-3 bg-gray-900/90 hover:bg-accent/10 border border-gray-800 text-gray-200 font-serif shadow ring-accent/20 ring-0 hover:ring-2 transition-all"
            >Blocked Users</a>
            <ToggleSwitch
              id="privacy-account"
              checked={privacyAccount}
              onChange={setPrivacyAccount}
              label="Private Account"
            />
            <ToggleSwitch
              id="privacy-story"
              checked={privacyStory}
              onChange={setPrivacyStory}
              label="Hide My Stories from Public"
            />
          </div>
        </section>

        {/* Notifications */}
        <section>
          <h3 className="text-accent font-serif font-bold text-lg mb-2 mt-1">Notifications</h3>
          <div className="flex flex-col gap-3">
            <ToggleSwitch
              id="notifications-push"
              checked={notificationsPush}
              onChange={setNotificationsPush}
              label="Push Notifications"
            />
            <ToggleSwitch
              id="notifications-likes"
              checked={notificationsLikes}
              onChange={setNotificationsLikes}
              label="Likes"
            />
            <ToggleSwitch
              id="notifications-comments"
              checked={notificationsComments}
              onChange={setNotificationsComments}
              label="Comments"
            />
            <ToggleSwitch
              id="notifications-dms"
              checked={notificationsDMs}
              onChange={setNotificationsDMs}
              label="Direct Messages"
            />
          </div>
        </section>

        {/* App Appearance */}
        <section>
          <h3 className="text-accent font-serif font-bold text-lg mb-2 mt-1">App Appearance</h3>
          <div className="flex flex-col gap-6 md:gap-3">
            <ToggleSwitch
              id="theme-toggle"
              checked={theme === "dark"}
              onChange={handleThemeToggle}
              label="Dark Theme"
            />
            <Slider
              id="font-size-slider"
              min={14}
              max={22}
              value={fontSize}
              onChange={setFontSize}
              label="Font Size"
              step={1}
              postfix="px"
            />
          </div>
        </section>
      </div>

      {/* Logout Button */}
      <div className="flex w-full mt-8 mb-4">
        <button
          className="
            w-full py-4 rounded-2xl bg-gradient-to-tr from-[#780707] via-[#7a1d3f]/80 to-[#2d090b]/85
            text-white font-bold font-serif text-lg drop-shadow-md shadow-xl
            border-2 border-[#780707]/90 hover:scale-[1.035]
            hover:bg-[#a3221a] hover:border-red-400
            transition-all duration-200
            hover:shadow-[0_0_16px_2px_rgba(255,32,32,0.20)]
            focus:outline-none focus:ring-2 focus:ring-[#f26565]/50
            ring-0
          "
          onClick={logout}
          type="button"
          aria-label="Logout of AuraGram"
        >
          Log Out
        </button>
      </div>
    </section>
  );
}
