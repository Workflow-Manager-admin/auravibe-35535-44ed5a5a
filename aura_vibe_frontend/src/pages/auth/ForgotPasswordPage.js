import React from "react";

// PUBLIC_INTERFACE
export default function ForgotPasswordPage() {
  return (
    <section className="w-full max-w-md mx-auto py-16 text-center">
      <h1 className="text-2xl font-serif mb-2">Reset Password</h1>
      <p className="text-gray-400 mb-8">[Password reset placeholder]</p>
      <button className="rounded px-5 py-2 bg-accent text-white font-serif">Send Reset Link</button>
    </section>
  );
}
