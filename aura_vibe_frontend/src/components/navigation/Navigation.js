import React from "react";

// PUBLIC_INTERFACE
export default function Navigation() {
  /**
   * Enhanced vertical navigation: wider, centered, bold & glowing "AuraGram",
   * emoji doodles for nav, large logo at bottom.
   */
  // Emoji doodle icons for nav items
  const navItems = [
    {
      label: "Home",
      href: "/",
      icon: "🏠",
    },
    {
      label: "Search",
      href: "/search",
      icon: "🔍",
    },
    {
      label: "Messages",
      href: "/messages",
      icon: "💌",
    },
    {
      label: "Notifications",
      href: "/notifications",
      icon: "🔔",
    },
    {
      label: "Profile",
      href: "/profile/your-username",
      icon: "🧑‍🎤",
    },
    {
      label: "Settings",
      href: "/settings",
      icon: "⚙️",
    },
  ];

  // Fancy "logo" with pastel-glow ring and an emoji/symbol
  // (You can swap emoji below for SVG or image for production)
  function AuraGramLogo() {
    return (
      <div className="mt-auto flex flex-col items-center w-full pb-2 pt-4">
        <div className="relative flex items-center justify-center group">
          {/* Glowing ring with animated gradient, suggest pastel style */}
          <span
            className="
              absolute
              inset-0
              rounded-full
              bg-gradient-to-br from-pink-300/40 via-fuchsia-500/25 to-cyan-200/30
              blur-[3.5px]
              opacity-80
              w-20 h-20
              animate-pulse
              z-0
            "
            aria-hidden="true"
          />
          <span
            className="
              relative z-10 flex items-center justify-center
              w-20 h-20 rounded-full
              shadow-[0_0_32px_8px_#ffdeea55,0_0_8px_2px_#89e6d733]
              ring-4 ring-accent/15
              bg-black/80
              border-2 border-white/10
              select-none
            "
            style={{
              fontSize: "2.9rem",
              filter: "drop-shadow(0 0 12px #fff7) drop-shadow(0 0 20px #FAE6F3)"
            }}
            title="AuraGram social logo"
          >
            <span
              role="img"
              aria-label="AuraGram Logo"
              className="drop-shadow-lg"
              style={{
                fontFamily: "Times New Roman, serif",
                textShadow: "0 0 24px #fff, 0 0 16px #f0ffd7b0",
              }}
            >
              ✨📸
            </span>
          </span>
        </div>
        {/* Subtle brand descriptor */}
        <div className="text-xs mt-2 text-white/60 font-serif tracking-wider font-semibold uppercase select-none">
          AuraGram
        </div>
      </div>
    );
  }

  return (
    <nav
      className="
        bg-black border-r border-gray-900
        flex flex-col items-center
        p-6 min-w-[162px] w-36 max-w-xs
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
      {/* AURAGRAM Heading */}
      <div
        className="
          text-center w-full 
          mb-2
          pt-1 pb-3
          flex flex-col items-center
        "
      >
        <span
          className="
            text-4xl md:text-5xl lg:text-5xl
            font-extrabold font-serif
            tracking-wide
            drop-shadow-white glow-white
            text-white
            mb-0.5
            transition-all
            leading-tight
          "
          style={{
            letterSpacing: "0.04em",
            textShadow: "0 0 20px #fff, 0 0 12px #780707a8, 0 1px 0 #aa24cf11"
          }}
        >
          AuraGram
        </span>
        <span
          className="
            text-xs font-bold tracking-wider text-accent mt-1 uppercase drop-shadow animate-pulse
          "
        >
          Vibe Network
        </span>
      </div>

      {/* Navigation Menu */}
      <ul
        className="
          flex flex-col gap-y-8 items-center w-full
          mt-6 px-0
        "
      >
        {navItems.map((item) => (
          <li key={item.label} className="w-full flex items-center justify-center">
            <a
              href={item.href}
              className="
                nav-glow
                flex
                flex-row
                gap-3
                items-center
                justify-center
                font-serif
                text-lg
                font-bold
                text-white
                hover:text-accent
                px-3 py-2
                w-full
                rounded-xl
                transition-all
                duration-200
                shadow-none
                outline-none
                ring-0
                focus:scale-105
              "
              tabIndex={0}
              aria-label={item.label}
            >
              <span
                className="
                  text-2xl
                  drop-shadow
                  transition
                  group-hover:animate-bounce
                  select-none
                  mr-1
                "
                aria-hidden="true"
              >
                {item.icon}
              </span>
              <span className="pl-0.5">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>

      {/* Spacer grows to push logo to bottom */}
      <div className="flex-1" />

      {/* Logo at the bottom */}
      <AuraGramLogo />
    </nav>
  );
}
