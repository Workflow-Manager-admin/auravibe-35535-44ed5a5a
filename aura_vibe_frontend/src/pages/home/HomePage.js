import React from "react";

// PUBLIC_INTERFACE
/**
 * AuraVibe Instagram-like Home Page, 3-column layout,
 * Times New Roman, Tailwind CSS, animated gradient background, white text.
 * Left: Fixed vertical sidebar with icons
 * Mid: Post feed with sample posts
 * Right: Trending hashtags & suggested accounts
 *
 * Updated background for more dynamic "social media" style.
 * Updated sidebar/glow effects are handled elsewhere (in Navigation).
 */
export default function HomePage() {
  // Fake feed posts
  const posts = [
    {
      username: "moodymuse",
      profile_pic: null,
      img: null,
      caption: "Feeling the vibes today!",
      comments: ["awesome!", "so cool!"],
    },
    {
      username: "dailyplantlove",
      profile_pic: null,
      img: null,
      caption: "New plant in my collection 🌱",
      comments: ["gorgeous!", "plant goals!"],
    },
    {
      username: "cutiequeen",
      profile_pic: null,
      img: null,
      caption: "Selfie Sunday 👑",
      comments: ["pretty!", "slay!"],
    },
  ];
  // NEW health/lifestyle themed hashtags per instructions
  const trending = [
    "#workoutmotivation",
    "#healthylifestyle",
    "#wellnessjourney",
    "#foodreels",
    "#tastyrecipes",
  ];

  // NEW suggested accounts list per instructions
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

  // The surrounding sidebar/nav is now handled exclusively by AppLayout
  // Only render HOME PAGE main feed and right-side panel here
  return (
    <div
      className="flex min-h-screen bg-black text-white font-serif home-gradient-bg"
      style={{
        fontFamily: "'Times New Roman', Times, serif",
        minHeight: "100vh",
        // Fallback if CSS class does not load, but prefer Tailwind/CSS override
        background:
          "linear-gradient(135deg, #171e3a 0%, #240c2b 40%, #55073A 70%, #121313 100%)",
        // Added blend for extra pop (subtle pattern)
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
          {/* Spacer for sidebar (for visual continuity if needed) */}
          <div className="h-4 lg:h-0" />
          {/* Posts */}
          {posts.map((post, idx) => (
            <div
              key={idx}
              className="
                rounded-xl bg-black/70 shadow-lg
                px-4 py-5 flex flex-col gap-3 border border-gray-800
                transition-all hover:shadow-2xl
              "
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                  {/* Placeholder profile */}
                  <span className="text-lg font-bold text-white">
                    {post.username.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <span className="font-bold text-base">{post.username}</span>
                  <span className="block text-xs text-gray-400 font-serif ml-1">• {Math.floor(Math.random()*6)+2}m ago</span>
                </div>
              </div>
              {/* Image area */}
              <div
                className="
                  w-full rounded-lg aspect-[4/3] bg-gray-900 border border-gray-800 flex items-center justify-center
                  overflow-hidden
                "
              >
                <span className="text-4xl text-gray-600 select-none">🖼️</span>
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
                  <div
                    key={cidx}
                    className="text-gray-300"
                  >
                    <span className="font-bold">{["alex","bri","max","mint","joy"][cidx%5]}:</span>
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
