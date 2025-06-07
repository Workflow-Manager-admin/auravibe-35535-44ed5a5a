import React from "react";

// PUBLIC_INTERFACE
export default function Navigation() {
  /** Responsive navigation (desktop side rail, mobile bottom bar) - updated for new structure
   * Now includes "glowing" hover effect for nav labels
   */
  return (
    <nav className="bg-black border-r border-gray-900 p-5 min-w-[88px] w-28 flex flex-col items-center gap-7">
      {/* LOGO/ICON */}
      <span className="text-2xl font-bold font-serif">AuraGram</span>
      <ul className="flex flex-col gap-5 mt-7">
        <li>
          <a
            href="/"
            className="hover:text-accent transition duration-200 nav-glow"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/search"
            className="hover:text-accent transition duration-200 nav-glow"
          >
            Search
          </a>
        </li>
        <li>
          <a
            href="/messages"
            className="hover:text-accent transition duration-200 nav-glow"
          >
            Messages
          </a>
        </li>
        <li>
          <a
            href="/notifications"
            className="hover:text-accent transition duration-200 nav-glow"
          >
            Notifications
          </a>
        </li>
        <li>
          <a
            href="/profile/your-username"
            className="hover:text-accent transition duration-200 nav-glow"
          >
            Profile
          </a>
        </li>
        <li>
          <a
            href="/settings"
            className="hover:text-accent transition duration-200 nav-glow"
          >
            Settings
          </a>
        </li>
      </ul>
    </nav>
  );
}
