import React from "react";

// PUBLIC_INTERFACE
export default function Navigation() {
  /** Responsive navigation (desktop side rail, mobile bottom bar) placeholder */
  return (
    <nav className="bg-black border-r border-gray-900 p-4 min-w-[64px] flex flex-col items-center gap-6">
      {/* LOGO/ICON */}
      <span className="text-2xl font-bold font-serif">AuraGram</span>
      <ul className="flex flex-col gap-4 mt-6">
        <li><a href="/" className="hover:text-accent">Feed</a></li>
        <li><a href="/explore" className="hover:text-accent">Explore</a></li>
        <li><a href="/stories" className="hover:text-accent">Stories</a></li>
        <li><a href="/dms" className="hover:text-accent">DMs</a></li>
        <li><a href="/notifications" className="hover:text-accent">Notifications</a></li>
        <li><a href="/profile/your-username" className="hover:text-accent">Profile</a></li>
        <li><a href="/admin" className="hover:text-accent">Admin</a></li>
      </ul>
    </nav>
  );
}
