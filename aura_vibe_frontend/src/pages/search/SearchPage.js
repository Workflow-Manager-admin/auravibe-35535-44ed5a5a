import React, { useState } from "react";

// PUBLIC_INTERFACE
/**
 * AuraGram Search/Explore Page
 * Features:
 *  - Top search bar with magnifying glass icon (glows/accent)
 *  - Left: trending hashtags as pastel pill-style clickable buttons
 *  - Right: grid (2-3 col responsive) of image suggestion placeholders with smooth glowing/animated hovers
 *  - All: elegant, dark/pastel, glowing-accented style, fully mobile responsive
 */

const TRENDING_HASHTAGS = [
  "#moodshots",
  "#auravibes",
  "#pastelmania",
  "#glowup",
  "#colorwave",
  "#citynight",
  "#natureluxe",
  "#softcore",
  "#artpop",
  "#mindset"
];

// pastel colors for hashtag pills (cycling)
const PASTEL_PALETTE = [
  "bg-rose-200 text-pink-900/95",
  "bg-sky-200 text-blue-900/90",
  "bg-green-200 text-green-900/90",
  "bg-purple-200 text-purple-900/90",
  "bg-yellow-200 text-yellow-900/80",
  "bg-cyan-200 text-cyan-900/90",
  "bg-pink-100 text-fuchsia-900/90",
];

const EXPORE_IMAGES = [
  // Placeholder image URLs or null for 🖼️ emoji
  null, null, null, null, null, null, null, null, null,
];

export default function SearchPage() {
  // Dummy state for search input (optional)
  const [searchQuery, setSearchQuery] = useState("");

  // Highlighted hashtag demo state
  const [activeTag, setActiveTag] = useState(null);

  return (
    <div
      className="relative flex flex-col min-h-screen bg-black text-white font-serif"
      style={{
        fontFamily: "'Times New Roman', Times, serif",
        background: "linear-gradient(135deg, #171e3a 0%, #240c2b 40%, #55073A 70%, #121313 100%)",
        backgroundSize: "400% 400%",
        animation: "gradientBG 18s ease infinite"
      }}
    >
      {/* --- Top search bar --- */}
      <div className="w-full py-8 px-4 md:px-12 bg-black/80 shadow-lg z-10 flex justify-center items-center sticky top-0">
        <form
          className="relative w-full max-w-lg"
          autoComplete="off"
          role="search"
          onSubmit={e => e.preventDefault()}
        >
          <input
            className="
              block w-full py-3 pl-12 pr-4 rounded-2xl
              bg-gray-900 text-white placeholder-gray-400 border border-gray-800
              shadow focus:outline-none focus:border-accent
              transition-all duration-200
              font-serif text-lg
            "
            type="text"
            value={searchQuery}
            placeholder="Search AuraGram"
            aria-label="Search"
            onChange={e => setSearchQuery(e.target.value)}
          />
          <span className="
            absolute left-4 top-1/2 -translate-y-1/2 text-lg
            pointer-events-none
            text-accent drop-shadow-[0_0_6px_#ffdee9bb]
          ">
            {/* Magnifying glass SVG */}
            <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current" aria-hidden="true">
              <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
              <rect x="17" y="17" width="4" height="2" rx="1" transform="rotate(45 17 17)" fill="currentColor"/>
            </svg>
          </span>
        </form>
      </div>

      <div className="flex-1 flex flex-col md:flex-row w-full max-w-7xl mx-auto md:pt-10 pt-4 gap-3 md:gap-7 px-2">
        {/* --- Left Trending Hashtags --- */}
        <aside
          className="
            mb-10 md:mb-0
            md:w-1/3 xl:w-1/4 md:pr-0 flex-shrink-0
            flex md:block justify-center
            animate-fade-in
          "
        >
          <div className="md:sticky top-28 flex flex-col gap-5 items-center md:items-stretch w-fit md:w-full mx-auto">
            <h3 className="text-accent text-xl font-bold mb-2 tracking-wide select-none text-center md:text-left">Trending</h3>
            <nav aria-label="Trending Hashtags" className="flex md:flex-col flex-row flex-wrap md:gap-3 gap-2 justify-center md:justify-start">
              {TRENDING_HASHTAGS.map((tag, idx) => (
                <button
                  key={tag}
                  className={`
                    px-5 py-2 rounded-full font-serif text-base font-bold shadow-sm
                    border-2 border-white/10 focus:outline-none
                    transition-all duration-200
                    drop-shadow
                    hover:scale-105 hover:shadow-lg
                    ${PASTEL_PALETTE[idx % PASTEL_PALETTE.length]}
                    ${activeTag === tag ? "ring-4 ring-pink-400/40" : ""}
                  `}
                  tabIndex={0}
                  aria-pressed={activeTag === tag}
                  onMouseEnter={() => setActiveTag(tag)}
                  onMouseLeave={() => setActiveTag(null)}
                  onFocus={() => setActiveTag(tag)}
                  onBlur={() => setActiveTag(null)}
                >
                  {tag}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* --- Right: Grid of image/content suggestions --- */}
        <main className="
          flex-1
          flex justify-center
        ">
          <section
            className="
              w-full
              grid gap-5
              grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
              items-start
              animate-fade-in
            "
            aria-label="Explore Content Grid"
          >
            {EXPORE_IMAGES.map((img, idx) => (
              <div
                key={idx}
                className={`
                  aspect-[4/5] rounded-2xl overflow-hidden
                  relative
                  flex items-center justify-center
                  bg-gradient-to-br from-gray-900 via-black to-gray-800
                  border border-accent/20 shadow-xl
                  transition-all
                  group
                  hover:scale-[1.04] hover:shadow-[0_0_32px_4px_rgba(255,174,243,0.28)]
                  hover:border-pink-400/60
                  ring-1 ring-white/5
                  cursor-pointer
                `}
                tabIndex={0}
                role="button"
                aria-label="Explore Image Placeholder"
              >
                {img ? (
                  // If using actual images, use <img />
                  <img
                    src={img}
                    alt="Suggested"
                    className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <span
                    className="
                      text-[4rem] md:text-[5rem] text-white/20 drop-shadow-lg
                      animate-pulse
                      pointer-events-none
                      select-none
                      transition duration-300
                      group-hover:text-pink-100 group-hover:drop-shadow-[0_0_24px_#fcdcfdbb]
                    "
                  >
                    🖼️
                  </span>
                )}
                {/* Glowing hover overlay animation */}
                <span
                  className="
                    absolute inset-0 pointer-events-none
                    rounded-2xl
                    opacity-0 group-hover:opacity-90
                    transition-all duration-300
                    bg-gradient-to-br from-pink-300/20 via-fuchsia-200/10 to-violet-300/8
                    blur-[1.5px]
                  "
                  aria-hidden="true"
                />
              </div>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}
