import React from "react";

// PUBLIC_INTERFACE
export default function MessagesPage() {
  return (
    <section className="py-4 mx-auto max-w-xl">
      <h2 className="text-xl font-serif mb-4">Messages</h2>
      <div className="flex space-x-4 mb-4">
        <div className="rounded-full w-16 h-16 bg-gray-800"></div>
        <div className="rounded-full w-16 h-16 bg-gray-700"></div>
      </div>
      <div className="bg-black/70 p-4 rounded">[Selected message stub]</div>
    </section>
  );
}
