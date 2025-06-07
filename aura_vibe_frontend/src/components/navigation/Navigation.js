import React from "react";

// PUBLIC_INTERFACE
export default function Navigation() {
  /**
   * Refined vertical navigation sidebar per feedback:
   * - No persistent highlights (hover/active only)
   * - Nav items (icon/text) right-aligned (justify-end, items-end)
   * - Smaller nav font size
   * - No "Vibe Network" or extra descriptors
   * - Modern simple logo (SVG, not text/emoji) at the very bottom
   */
  // Social-style icons for nav items (can use emojis as placeholders)
  const navItems = [
    { label: "Home", href: "/", icon: "🏠" },
    { label: "Search", href: "/search", icon: "🔍" },
    { label: "Messages", href: "/messages", icon: "💌" },
    { label: "Notifications", href: "/notifications", icon: "🔔" },
    { label: "Profile", href: "/profile/your-username", icon: "🧑‍🎤" },
    { label: "Settings", href: "/settings", icon: "⚙️" },
  ];

  // Social-like minimal logo (Instagram-flavored camera SVG) for the bottom corner
  function SocialLogoSVG() {
    return (
      <div className="mt-auto flex flex-col items-end w-full pb-3">
        <span className="text-xs text-gray-400 font-serif mb-1 pr-1 select-none" aria-hidden="true">
          {/* Optionally remove this line for no label */}
        </span>
        <svg
          viewBox="0 0 40 40"
          width="38"
          height="38"
          fill="none"
          aria-label="Aura social media logo"
          className="drop-shadow-md rounded-full p-[2px] ring-2 ring-accent/40 bg-gradient-to-br from-fuchsia-300/30 to-cyan-200/30 hover:ring-accent/70 hover:scale-105 transition-all"
          style={{
            background:
              "radial-gradient(circle at 65% 20%, #fff6 0%, #a3e0ff15 60%, #ff86d049 100%)",
          }}
        >
          <defs>
            <linearGradient id="socialLogoGradient" x1="8" y1="4" x2="32" y2="36" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FAE6F3" />
              <stop offset="0.5" stopColor="#89e6d7" />
              <stop offset="1" stopColor="#780707" />
            </linearGradient>
          </defs>
          <rect x="5" y="5" width="30" height="30" rx="8" fill="url(#socialLogoGradient)" />
          <circle cx="20" cy="20" r="8" fill="#000" stroke="#fff" strokeWidth="2.1" />
          <circle cx="28" cy="13.5" r="1.7" fill="#fff8" />
          <circle cx="20" cy="20" r="4.45" fill="none" stroke="#fff" strokeWidth="2.2" />
        </svg>
      </div>
    );
  }

  return (
    <nav
      className="
        bg-black border-r border-gray-900
        flex flex-col items-end
        p-6 min-w-[148px] w-36 max-w-xs
        h-full
        gap-y-7
        font-serif
        select-none
        shadow-[8px_0_28px_0_rgba(68,15,53,0.045)]
        z-30
      "
      style={{ minHeight: "100vh" }}
      aria-label="Site Navigation"
    >
      {/* Only main brand heading at the very top, right-aligned */}
      <div
        className="
          w-full flex flex-col items-end text-right mb-2 pt-1 pb-1
        "
      >
        <span
          className="
            text-3xl md:text-4xl font-extrabold font-serif tracking-wide
            drop-shadow-white glow-white text-white mb-0.5 transition-all leading-tight
          "
          style={{
            letterSpacing: "0.04em",
            textShadow: "0 0 20px #fff, 0 0 12px #780707a8, 0 1px 0 #aa24cf11"
          }}
        >
          AuraGram
        </span>
      </div>

      {/* Navigation Menu */}
      <ul
        className="
          flex flex-col gap-y-6 items-end w-full
          mt-7 px-0
        "
      >
        {navItems.map((item) => (
          <li key={item.label} className="w-full flex items-end justify-end">
            <a
              href={item.href}
              className="
                nav-glow
                flex flex-row-reverse
                gap-2
                items-end
                justify-end
                font-serif
                text-[1.05rem]
                font-semibold
                text-white
                hover:text-accent
                px-2 py-[5.5px]
                w-full
                rounded-lg
                transition-all
                duration-200
                shadow-none
                outline-none
                ring-0
                focus:scale-105
                bg-transparent
              "
              tabIndex={0}
              aria-label={item.label}
              style={{
                fontSize: "1.03rem", // Decrease font size
                fontWeight: 500,
              }}
            >
              <span
                className="
                  text-xl
                  drop-shadow
                  transition
                  group-hover:animate-bounce
                  select-none
                  ml-2
                "
                aria-hidden="true"
                style={{ lineHeight: 1.1 }}
              >
                {item.icon}
              </span>
              <span className="pr-0.5">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>

      {/* Spacer grows to push logo to bottom */}
      <div className="flex-1" />

      {/* Modern SVG social-logo at the bottom */}
      <SocialLogoSVG />
    </nav>
  );
}
