import React from "react";

// PUBLIC_INTERFACE
export default function NotFoundPage() {
  return (
    <div className="h-full flex flex-col items-center justify-center py-48">
      <h1 className="text-4xl font-serif mb-6">404</h1>
      <p className="text-gray-400 mb-12">Sorry, this page doesn&apos;t exist (yet).</p>
      <a href="/" className="rounded px-4 py-2 bg-accent text-white font-serif">Go Home</a>
    </div>
  );
}
