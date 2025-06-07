import React from "react";
import Navigation from "../navigation/Navigation";

// PUBLIC_INTERFACE
export default function AppLayout({ children }) {
  /** Main app shell: nav + content */
  return (
    <div className="flex h-screen bg-primary text-secondary font-serif">
      <Navigation />
      <main className="flex-1 min-h-screen overflow-y-auto transition-all">
        {children}
      </main>
    </div>
  );
}
