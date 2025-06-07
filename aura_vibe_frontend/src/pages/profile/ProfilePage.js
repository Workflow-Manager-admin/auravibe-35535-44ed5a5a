import React from "react";

// PUBLIC_INTERFACE
export default function ProfilePage() {
  // Sample Unsplash avatar data (Photo by Lidya Nada on Unsplash)
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
    <section className="max-w-xl mx-auto py-8">
      <h2 className="text-2xl font-serif mb-2">Your Profile</h2>
      <div className="bg-black/70 p-6 rounded mb-6 flex items-center gap-6">
        <div className="relative flex-shrink-0">
          <img
            src={avatarUrl}
            alt={avatarAlt}
            className="w-24 h-24 rounded-full object-cover border-4 border-accent/30 shadow-md"
            draggable="false"
          />
          {/* Visible attribution below avatar for accessibility */}
          <div className="mt-3 text-xs text-gray-300 text-left">
            <span>Photo by&nbsp;
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
        <div>
          {/* Bio and username stub (can be expanded in full implementation) */}
          <div className="font-serif text-xl font-bold text-secondary">auranaut</div>
          <div className="font-serif text-gray-400 mt-1 text-base">@auranaut</div>
          <div className="font-serif text-sm text-gray-300 mt-3">This is your bio! Add a bit about your vibe, energy, and what brings you joy today.</div>
        </div>
      </div>
      <div className="flex gap-4">
        <a className="rounded px-3 py-2 bg-accent text-white" href="/profile/your-username/edit">Edit</a>
        <button className="rounded px-3 py-2 bg-gray-800 text-white">Logout</button>
      </div>
    </section>
  );
}
