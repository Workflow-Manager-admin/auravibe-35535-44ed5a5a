import React, { useEffect, useRef, useState, useCallback } from "react";
import StoriesCarousel from "./StoriesCarousel";

/**
 * PUBLIC_INTERFACE
 * AuraVibe Instagram-like Home Page with Infinite Scroll
 * Now displays a large, extended feed using real (public/open) sample images.
 * Uses IntersectionObserver for efficient infinite scrolling.
 */
export default function HomePage() {
  // --- ALL possible fake posts to infinitely scroll through ---
  // (Cycle, pseudo-random, or expand with more real Unsplash/Pexels/Coverr photos)
  const ALL_POSTS = [
    {
      username: "moodymuse",
      profile_pic: null,
      img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
      caption: "Feeling the vibes today!",
      comments: ["awesome!", "so cool!"],
      alt: "Moody city street by Anthony DELANOIX on Unsplash"
    },
    {
      username: "dailyplantlove",
      profile_pic: null,
      img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
      caption: "New plant in my collection 🌱",
      comments: ["gorgeous!", "plant goals!"],
      alt: "Green potted plant in sunlight by Paul Hanaoka on Unsplash"
    },
    {
      username: "cutiequeen",
      profile_pic: null,
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&w=800&q=80",
      caption: "Selfie Sunday 👑",
      comments: ["pretty!", "slay!"],
      alt: "Stylish young woman selfie smiling by Pixabay on Pexels"
    },
    {
      username: "mintflavor",
      profile_pic: null,
      img: "https://images.pexels.com/photos/110854/pexels-photo-110854.jpeg?auto=compress&w=800&q=80",
      caption: "Cloudy with a chance of confetti ☁️🎈",
      comments: ["fun!", "live your vibe!"],
      alt: "Balloons floating in sky by Pixabay on Pexels"
    },
    {
      username: "sunsetdream",
      profile_pic: null,
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      caption: "That golden hour glow 🌅",
      comments: ["dreamy!", "wow!"],
      alt: "Mountain at sunset, Sean Pierce on Unsplash"
    },
    {
      username: "neoncity",
      profile_pic: null,
      img: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&w=800&q=80",
      caption: "Neon nights, electric vibes ⚡",
      comments: ["city goals!", "vibes!"],
      alt: "Neon city street by Alexandre Chambon on Pexels"
    },
    {
      username: "plantparent",
      profile_pic: null,
      img: "https://images.unsplash.com/photo-1465101178521-c1a9136a37b1?auto=format&fit=crop&w=800&q=80",
      caption: "Repotting day adventures 🌿",
      comments: ["so green!", "teach me!"],
      alt: "Tropical plant leaves, Chris Lee on Unsplash"
    },
    {
      username: "laughingtribe",
      profile_pic: null,
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
      caption: "Laugh out loud with besties 💬",
      comments: ["love this energy!", "squad!"],
      alt: "Three women laughing by Simon Maage on Unsplash"
    },
    {
      username: "artpopwave",
      profile_pic: null,
      img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80",
      caption: "Pop of color for the soul 🖌️💜",
      comments: ["inspiring!", "art attack!"],
      alt: "Pastel graffiti wall by Hugo Sousa on Unsplash"
    },
    {
      username: "chillmist",
      profile_pic: null,
      img: "https://images.unsplash.com/photo-1424746219973-8fe3bd07d8e3?auto=format&fit=crop&w=800&q=80",
      caption: "Serene scenes and misty mornings 🌫️",
      comments: ["peace!", "meditation vibes"],
      alt: "Lake at dawn by Tony Liao on Unsplash"
    },
    {
      username: "vibecafe",
      profile_pic: null,
      img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
      caption: "Coffee, plants, books. That’s a vibe ☕🌱📚",
      comments: ["yes please!", "aesthetic!"],
      alt: "Café with plants by Paul Hanaoka on Unsplash"
    },
    {
      username: "rooftopjoy",
      profile_pic: null,
      img: "https://images.pexels.com/photos/247932/pexels-photo-247932.jpeg?auto=compress&w=800&q=80",
      caption: "Rainbow after the rain 🌈",
      comments: ["stunning!", "need this!"],
      alt: "People under rainbow umbrella by Pixabay on Pexels"
    },
    {
      username: "auranaut",
      profile_pic: null,
      img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
      caption: "Just vibing. 🚀✨",
      comments: ["iconic!", "stellar look!"],
      alt: "Woman in sunglasses on pink wall by Lidya Nada on Unsplash"
    },
    // You can always add more here for demo effect!
  ];

  // FEED STATE: Show only a slice that expands as you scroll
  const BATCH_SIZE = 5;
  const [feedCount, setFeedCount] = useState(BATCH_SIZE);
  const [displayedPosts, setDisplayedPosts] = useState(() =>
    ALL_POSTS.slice(0, BATCH_SIZE)
  );
  const [hasMore, setHasMore] = useState(true);
  const sentinelRef = useRef(null);

  // --- Load more posts (simulate API) ---
  const loadMorePosts = useCallback(() => {
    setDisplayedPosts((old) => {
      let nextCount = old.length + BATCH_SIZE;
      const next = [
        ...old,
        ...ALL_POSTS.slice(
          old.length % ALL_POSTS.length,
          nextCount % ALL_POSTS.length || ALL_POSTS.length
        ),
      ];
      // If looping past end, continue to cycle demo posts
      return next.slice(0, nextCount);
    });
    setFeedCount((prev) => prev + BATCH_SIZE);
    // Always true for demo; in real use, could check for end or API return
    setHasMore(true);
  }, [ALL_POSTS]);

  // -- IntersectionObserver for infinite scroll --
  useEffect(() => {
    if (!hasMore) return;
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMorePosts();
        }
      },
      { root: null, rootMargin: "0px", threshold: 1.0 }
    );
    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }
    return () => observer.disconnect();
  }, [loadMorePosts, hasMore]);

  // Trending and suggested data (unchanged)
  const trending = [
    "#workoutmotivation",
    "#healthylifestyle",
    "#wellnessjourney",
    "#foodreels",
    "#tastyrecipes",
  ];
  const accounts = [
    "@joseph.rajan",
    "@deborah_rose",
    "@micah.muthu",
    "@christy.vino",
    "@gabrielraj_official",
    "@natasha.anan",
    "@princy.joy",
    "@ashley_rajkumar",
    "@roshan.isaac",
    "@blessy.reign",
  ];

  return (
    <div
      className="flex min-h-screen bg-black text-white font-serif home-gradient-bg"
      style={{
        fontFamily: "'Times New Roman', Times, serif",
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #171e3a 0%, #240c2b 40%, #55073A 70%, #121313 100%)",
        backgroundSize: "400% 400%",
        animation: "gradientBG 18s ease infinite",
      }}
    >
      {/* --- Main Feed --- */}
      <main
        className="flex-1 mx-auto flex justify-center px-2 md:px-0"
        style={{ minHeight: "100vh" }}
      >
        <section className="w-full max-w-xl py-8 flex flex-col gap-6">
          {/* Story Carousel: horizontally scrollable avatars */}
          <StoriesCarousel />
          {/* Spacer for sidebar (for visual continuity if needed) */}
          <div className="h-4 lg:h-0" />
          {/* Posts */}
          {displayedPosts.map((post, idx) => (
            <div
              key={idx + "-" + post.username}
              className="
                rounded-xl bg-black/70 shadow-lg
                px-4 py-5 flex flex-col gap-3 border border-gray-800
                transition-all hover:shadow-2xl
              "
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                  <span className="text-lg font-bold text-white">
                    {post.username.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <span className="font-bold text-base">{post.username}</span>
                  <span className="block text-xs text-gray-400 font-serif ml-1">
                    • {Math.floor(Math.random() * 6) + 2}m ago
                  </span>
                </div>
              </div>
              {/* Image area */}
              <div
                className="
                  w-full rounded-lg aspect-[4/3] bg-gray-900 border border-gray-800 flex items-center justify-center
                  overflow-hidden
                "
              >
                {post.img ? (
                  <img
                    src={post.img}
                    alt={post.alt || "AuraVibe sample post image"}
                    className="w-full h-full object-cover object-center transition-transform duration-200 hover:scale-105"
                    draggable="false"
                  />
                ) : (
                  <span className="text-4xl text-gray-600 select-none">🖼️</span>
                )}
              </div>
              {/* Action bar */}
              <div className="flex gap-5 items-center mt-0 mb-[-6px] select-none">
                <button className="hover:text-accent transition-colors" aria-label="Like">
                  <span className="text-2xl">❤️</span>
                </button>
                <button className="hover:text-accent transition-colors" aria-label="Comment">
                  <span className="text-2xl">💬</span>
                </button>
                <button className="hover:text-accent transition-colors" aria-label="Save">
                  <span className="text-2xl">🔖</span>
                </button>
              </div>
              {/* Caption */}
              <div className="font-serif text-base mt-2 mb-1">
                <span className="font-bold mr-2">{post.username}</span>
                {post.caption}
              </div>
              {/* Comments */}
              <div className="ml-2 flex flex-col gap-1 text-sm">
                {post.comments.map((c, cidx) => (
                  <div key={cidx} className="text-gray-300">
                    <span className="font-bold">
                      {["alex", "bri", "max", "mint", "joy"][cidx % 5]}:
                    </span>
                    <span className="ml-2">{c}</span>
                  </div>
                ))}
              </div>
              {/* Small input (not functional, placeholder only) */}
              <form className="mt-2 flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  className="bg-gray-950 border border-gray-900 rounded-xl py-1 px-3 text-white text-sm focus:outline-none w-full font-serif"
                  disabled
                />
                <button
                  type="button"
                  className="text-accent font-bold text-xs hover:underline"
                  disabled
                >
                  Post
                </button>
              </form>
            </div>
          ))}
          {/* Loading sentinel for infinite scroll */}
          <div
            ref={sentinelRef}
            style={{
              width: "100%",
              height: 60,
              display: hasMore ? "block" : "none",
            }}
            aria-hidden="true"
          >
            <div className="flex w-full items-center justify-center py-4">
              <span className="text-gray-400 animate-pulse font-serif text-base">
                Loading more posts...
              </span>
            </div>
          </div>
        </section>
      </main>

      {/* --- Right Panel: Trending, Suggestions --- */}
      <aside
        className="
          hidden xl:flex flex-col min-w-[285px] max-w-xs
          border-l border-gray-900 bg-black py-12 px-7
          sticky top-0 right-0 h-screen gap-12
          font-serif
        "
        style={{ marginLeft: 12 }}
      >
        {/* Trending */}
        <div>
          <h3 className="mb-3 text-lg font-semibold text-accent tracking-wide">Trending</h3>
          <ul className="flex flex-col gap-1">
            {trending.map((tag, idx) => (
              <li key={idx}>
                <a
                  href="#"
                  className="
                    text-secondary hover:text-accent
                    transition-colors block px-2 py-1 rounded-lg w-fit
                  "
                  tabIndex={0}
                >
                  {tag}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Suggestions */}
        <div>
          <h3 className="mb-3 text-lg font-semibold text-accent tracking-wide">Suggested for you</h3>
          <ul className="flex flex-col gap-2">
            {accounts.map((ac, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-lg font-bold text-white">
                  {ac.charAt(1).toUpperCase()}
                </div>
                <span className="font-serif text-base">{ac}</span>
                <button
                  className="
                    ml-auto px-3 py-1 text-xs rounded-lg bg-accent text-white font-semibold
                    transition-all duration-200 hover:bg-accent/70
                  "
                  type="button"
                  tabIndex={0}
                  disabled
                >
                  Follow
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}
