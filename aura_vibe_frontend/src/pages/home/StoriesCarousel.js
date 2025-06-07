import React from "react";
import "./StoriesCarousel.module.css";

// PUBLIC_INTERFACE
/**
 * A horizontally scrollable Stories carousel for AuraGram.
 * - Shows avatar (Unsplash/Pexels image), username, glowing border, pastel accent, and soft hover animation.
 * - Responsive, accessible, styled to match the dark/pastel theme.
 */
export default function StoriesCarousel() {
  // Sample story data (avatars & usernames)
  // All photos from Unsplash or Pexels, Open License.
  const stories = [
    {
      username: "auranaut",
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=160&h=160&facepad=2&q=80",
      alt: "Smiling woman in pink sunglasses, by Lidya Nada on Unsplash",
    },
    {
      username: "cutiequeen",
      avatar:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&w=80&h=80&q=80",
      alt: "Stylish young woman selfie by Pixabay on Pexels",
    },
    {
      username: "moodymuse",
      avatar:
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=160&h=160&facepad=2&q=80",
      alt: "Moody city street, Anthony DELANOIX on Unsplash",
    },
    {
      username: "plantparent",
      avatar:
        "https://images.unsplash.com/photo-1465101178521-c1a9136a37b1?auto=format&fit=facearea&w=160&h=160&facepad=2&q=80",
      alt: "Tropical plant leaves close up, by Chris Lee on Unsplash",
    },
    {
      username: "bri",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&w=160&h=160&facepad=2&q=80",
      alt: "Three women laughing, Simon Maage on Unsplash",
    },
    {
      username: "mint",
      avatar:
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=160&h=160&facepad=2&q=80",
      alt: "Green potted plant, Paul Hanaoka on Unsplash",
    },
    {
      username: "alexvibes",
      avatar:
        "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&w=80&h=80&q=80",
      alt: "Neon city street by Alexandre Chambon on Pexels",
    },
    {
      username: "joy",
      avatar:
        "https://images.pexels.com/photos/110854/pexels-photo-110854.jpeg?auto=compress&w=80&h=80&q=80",
      alt: "Balloons floating in sky by Pixabay on Pexels",
    },
  ];

  // Pastel ring gradient options for border effect (cycle for variety)
  const pastelRings = [
    "from-fuchsia-400 via-pink-200 to-white/20",
    "from-cyan-300 via-blue-200 to-fuchsia-500/20",
    "from-pink-200 via-yellow-100 to-blue-100/30",
    "from-purple-200 via-blue-300 to-green-100/40",
    "from-yellow-200 via-rose-200 to-fuchsia-400/30",
    "from-green-300 via-cyan-100 to-white/30",
  ];

  return (
    <nav
      aria-label="Stories"
      className="w-full select-none"
      style={{ WebkitOverflowScrolling: "touch" }}
    >
      {/* Scroll-x container: also supports keyboard scroll and touch swipe */}
      <div
        className={`flex flex-row gap-5 overflow-x-auto pb-3 px-1 snap-x snap-mandatory hide-scrollbar`}
        tabIndex={0}
        role="listbox"
        style={{
          scrollPadding: "0.5rem",
          overscrollBehaviorX: "contain"
        }}
      >
        {stories.map((story, idx) => (
          <button
            key={story.username}
            tabIndex={0}
            className={`flex flex-col items-center group relative snap-center focus:outline-none`}
            style={{ minWidth: 70, maxWidth: 82, width: 74 }}
            aria-label={`View story from ${story.username}`}
            type="button"
            disabled
          >
            {/* Glowing animated avatar ring */}
            <span
              className={`
                relative w-16 h-16 rounded-full flex items-center justify-center mb-1
                ring-2 ring-accent/40
                bg-gradient-to-tr ${pastelRings[idx % pastelRings.length]}
                shadow-[0_0_16px_1px_rgba(248,132,255,0.10)]
                transition-all
                before:absolute before:inset-0 before:rounded-full
                before:bg-gradient-to-tl before:opacity-0
                group-hover:before:opacity-80
                before:from-accent/70 before:via-pink-100/15 before:to-black/10
                group-hover:shadow-[0_0_32px_10px_#d7b2ee55]
                hover:scale-105
                focus:scale-105
                duration-200
              `}
            >
              <img
                src={story.avatar}
                alt={story.alt || `${story.username} profile story`}
                className={`
                  object-cover rounded-full w-14 h-14 border-2 border-white/10
                  shadow-md
                  group-hover:blur-[1px] group-hover:opacity-80 transition-all
                  duration-150
                  select-none
                  pointer-events-none
                  bg-gray-800
                `}
                draggable="false"
              />
            </span>
            {/* Username under avatar */}
            <span className={`
              mt-0.5 text-xs font-semibold font-serif text-white/85 text-center
              transition-colors
              group-hover:text-accent
              w-full max-w-[66px] truncate
              drop-shadow
            `}>
              {story.username}
            </span>
            {/* Decorative glowing ring on hover/focus */}
            <span
              className={`
                pointer-events-none absolute inset-0
                rounded-full blur-[2.5px]
                opacity-0 group-hover:opacity-60 group-focus:opacity-60
                transition-all duration-200
                bg-pink-300/10
              `}
              aria-hidden="true"
            />
          </button>
        ))}
      </div>
    </nav>
  );
}

