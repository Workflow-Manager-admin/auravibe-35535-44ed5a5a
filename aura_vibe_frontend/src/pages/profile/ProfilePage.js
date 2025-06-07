import React from "react";

// PUBLIC_INTERFACE
export default function ProfilePage() {
  return (
    <section className="max-w-xl mx-auto py-8">
      <h2 className="text-2xl font-serif mb-2">Your Profile</h2>
      <div className="bg-black/70 p-4 rounded mb-6">[Profile avatar/bio stub]</div>
      <div className="flex gap-4">
        <a className="rounded px-3 py-2 bg-accent text-white" href="/profile/your-username/edit">Edit</a>
        <button className="rounded px-3 py-2 bg-gray-800 text-white">Logout</button>
      </div>
    </section>
  );
}
