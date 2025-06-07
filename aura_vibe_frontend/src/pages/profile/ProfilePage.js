import React, { useRef, useState } from "react";

// PUBLIC_INTERFACE
/**
 * AuraGram Profile Page
 *
 * Step 1: Collect user info with a vibrant, multi-field form (name, gender, phone, email, username, DOB, purpose, photo).
 * Step 2: After submit, show a fancy profile card (profile pic, username right, name below, edit option, editable bio, relationship status).
 * File upload supports in-browser image preview.
 * Aesthetic: animated gradient background, Times New Roman, dark theme, accent glow, clean alignment.
 */
export default function ProfilePage() {
  // Profile form states
  const [form, setForm] = useState({
    name: "",
    gender: "",
    phone: "",
    email: "",
    username: "",
    dob: "",
    purpose: "",
    photo: null, // File object
  });
  const [bio, setBio] = useState("");
  const [relationship, setRelationship] = useState("");
  const [editing, setEditing] = useState(true); // Initially editing
  const [photoUrl, setPhotoUrl] = useState(null); // preview URL

  const photoInputRef = useRef();

  // Relationship status options
  const REL_OPTIONS = [
    "Single",
    "In a relationship",
    "Engaged",
    "Married",
    "It's complicated",
    "Prefer not to say",
  ];

  // Validation helpers
  function validateEmail(email) {
    return (
      !email ||
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    );
  }
  function validatePhone(phone) {
    return (
      !phone ||
      /^\+?[\d\- ]{7,15}$/.test(phone)
    );
  }
  function canSubmit() {
    // Now, profile picture and bio are optional. Everything else must be non-empty/valid.
    return (
      form.name.trim() &&
      form.username.trim() &&
      validateEmail(form.email) &&
      validatePhone(form.phone) &&
      form.dob &&
      form.purpose.trim()
    );
  }

  // Handle photo upload & preview
  function handlePhotoChange(e) {
    const file = e.target.files[0];
    if (file) {
      setForm((prev) => ({ ...prev, photo: file }));
      const reader = new FileReader();
      reader.onload = (ev) => setPhotoUrl(ev.target.result);
      reader.readAsDataURL(file);
    }
  }

  // Step 1: Handle form input change
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  // Step 1: Handle submit
  function handleSubmit(e) {
    e.preventDefault();
    if (canSubmit()) {
      setEditing(false);
      // Use initial purpose for bio if not customized yet
      setBio(form.purpose);
    }
  }

  // Handle profile "Edit" action
  function handleEdit() {
    setEditing(true);
  }

  // Step 2: Handle bio/relationship editing
  function handleBioChange(e) {
    setBio(e.target.value.slice(0, 250));
  }
  function handleRelationshipChange(e) {
    setRelationship(e.target.value);
  }

  // If editing, show profile creation form
  if (editing) {
    return (
      <section
        className="min-h-screen flex items-center justify-center home-gradient-bg transition-all duration-600"
        style={{
          fontFamily: "'Times New Roman', Times, serif",
          background: "linear-gradient(135deg, #171e3a 0%, #240c2b 35%, #55073A 70%, #121313 100%)",
          animation: "gradientBG 18s ease infinite",
        }}
      >
        <form
          className="bg-black bg-opacity-85 p-12 rounded-[2.3rem] shadow-2xl w-full max-w-xl mx-auto flex flex-col gap-9 border border-gray-800 min-w-[360px] font-serif transition-all duration-200"
          autoComplete="off"
          onSubmit={handleSubmit}
          style={{
            boxShadow:
              "0 0 44px 10px rgba(120,7,57,0.11), 0 3px 18px #d6407c25",
          }}
        >
          <h2 className="text-4xl text-center font-bold font-serif mb-1.5 text-accent tracking-wide drop-shadow glow">
            Complete Your AuraGram Profile
          </h2>
          {/* Avatar photo upload/preview */}
          <div className="flex items-center justify-center flex-col gap-2">
            <div
              className="w-32 h-32 rounded-full bg-gray-900 border-4 border-accent/30 shadow-lg flex items-center justify-center overflow-hidden group transition-all duration-200"
              style={{
                boxShadow: photoUrl
                  ? "0 0 20px 5px #7a174c44, 0 2px 16px #9a24b966"
                  : undefined,
              }}
            >
              {photoUrl ? (
                <img
                  src={photoUrl}
                  alt="Profile preview"
                  className="object-cover w-full h-full"
                />
              ) : (
                <span className="text-accent text-4xl opacity-55 select-none">+</span>
              )}
            </div>
            <label
              className="text-base text-gray-400 px-4 py-2 text-center font-serif cursor-pointer rounded-lg mt-0.5 border border-accent/40 hover:bg-accent/20 transition-all"
              tabIndex={0}
            >
              <input
                type="file"
                className="hidden"
                accept="image/*"
                ref={photoInputRef}
                onChange={handlePhotoChange}
                name="photo"
                aria-label="Choose your profile photo"
              />
              {photoUrl ? "Change" : "Upload"} Photo
            </label>
            {!photoUrl && (
              <span className="text-xs text-gray-500 text-center">
                JPG/PNG, up to 2MB
              </span>
            )}
          </div>

          {/* Grouped fields in a 2-col responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block mb-1 font-serif text-base">Full Name <span className="text-accent">*</span></label>
              <input
                className="px-3 py-2 rounded bg-gray-900 border border-accent/20 text-white font-serif w-full focus:border-accent/70 focus:outline-none"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                minLength={2}
                maxLength={48}
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-serif text-base">Gender</label>
              <select
                className="px-3 py-2 rounded bg-gray-900 border border-accent/20 text-white font-serif w-full focus:border-accent/70 focus:outline-none"
                name="gender"
                value={form.gender}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option>Female</option>
                <option>Male</option>
                <option>Non-binary</option>
                <option>Prefer not to disclose</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 font-serif text-base">Phone <span className="text-accent">*</span></label>
              <input
                className={
                  "px-3 py-2 rounded bg-gray-900 border " +
                  (validatePhone(form.phone)
                    ? "border-accent/20"
                    : "border-red-400/50") +
                  " text-white font-serif w-full focus:border-accent/70 focus:outline-none"
                }
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                maxLength={18}
                placeholder="+1 123-456-7890"
                autoComplete="tel"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-serif text-base">Date of Birth <span className="text-accent">*</span></label>
              <input
                className="px-3 py-2 rounded bg-gray-900 border border-accent/20 text-white font-serif w-full focus:border-accent/70 focus:outline-none"
                type="date"
                name="dob"
                value={form.dob}
                onChange={handleChange}
                required
                max={new Date().toISOString().split("T")[0]}
              />
            </div>
            <div>
              <label className="block mb-1 font-serif text-base">Email <span className="text-accent">*</span></label>
              <input
                className={
                  "px-3 py-2 rounded bg-gray-900 border " +
                  (validateEmail(form.email)
                    ? "border-accent/20"
                    : "border-red-400/50") +
                  " text-white font-serif w-full focus:border-accent/70 focus:outline-none"
                }
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                maxLength={40}
                autoComplete="email"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-serif text-base">Username <span className="text-accent">*</span></label>
              <input
                className="px-3 py-2 rounded bg-gray-900 border border-accent/20 text-white font-serif w-full focus:border-accent/70 focus:outline-none"
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                minLength={3}
                maxLength={18}
                autoComplete="username"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-1 font-serif text-base">Purpose of Account <span className="text-accent">*</span></label>
              <select
                className="px-3 py-2 rounded bg-gray-900 border border-accent/20 text-white font-serif w-full focus:border-accent/70 focus:outline-none"
                name="purpose"
                value={form.purpose}
                onChange={handleChange}
                required
              >
                <option value="">Select account type…</option>
                <option value="public">Public</option>
                <option value="private">Private</option>
                <option value="business">Business</option>
              </select>
            </div>
          </div>

          {/* Move bio field below purpose; it's optional */}
          <div className="w-full flex flex-col gap-1 mt-0">
            <label className="font-serif font-semibold text-accent text-lg mb-1">
              Bio
            </label>
            <textarea
              className="bg-gray-900 border border-accent/20 rounded-xl px-4 py-2 w-full text-white font-serif text-base focus:outline-none focus:border-accent/70 transition-all min-h-[44px] max-h-28 shadow-inner"
              value={bio}
              onChange={handleBioChange}
              maxLength={250}
              rows={3}
              aria-label="Write your bio"
              placeholder="Write something about your vibe, dreams, or mood…"
              style={{ resize: "vertical" }}
            />
            <div className="flex justify-end text-xs text-gray-400">{bio.length} / 250</div>
          </div>

          <button
            type="submit"
            className={
              "w-full py-3 rounded-xl font-bold font-serif text-xl bg-gradient-to-tr from-accent via-pink-700/80 to-fuchsia-900/80 shadow-md text-white drop-shadow-2xl ring-2 ring-accent/30 hover:scale-105 transition-all duration-200" +
              (canSubmit()
                ? ""
                : " opacity-60 cursor-not-allowed pointer-events-none")
            }
            disabled={!canSubmit()}
            aria-label="Create profile with provided details"
          >
            Create Your Profile
          </button>
        </form>
      </section>
    );
  }

  // Show profile card with editable bio & relationship status
  return (
    <section
      className="min-h-screen flex items-center justify-center home-gradient-bg transition-all duration-700 px-2"
      style={{
        fontFamily: "'Times New Roman', Times, serif",
        background: "linear-gradient(135deg, #171e3a 0%, #240c2b 40%, #55073A 70%, #121313 100%)",
        animation: "gradientBG 18s ease infinite",
      }}
    >
      <div
        className="max-w-xl w-full mx-auto bg-black/80 rounded-3xl shadow-2xl border border-gray-800 p-8 pt-7 flex flex-col gap-8 items-center font-serif backdrop-blur-[2px]"
        style={{
          boxShadow: "0 0 44px 8px #7a174c11, 0 3px 28px #d6407c25",
          marginBottom: 35,
        }}
      >
        {/* Profile Card */}
        <div className="w-full flex flex-col items-center md:flex-row md:items-start gap-6 md:gap-9">
          {/* Profile photo */}
          <div className="relative flex flex-col items-center shrink-0">
            <div className="w-32 h-32 rounded-full bg-gray-900 border-4 border-accent/40 shadow-2xl overflow-hidden">
              {photoUrl ? (
                <img
                  src={photoUrl}
                  alt="Profile photo"
                  className="object-cover w-full h-full select-none"
                  draggable="false"
                />
              ) : (
                <span className="text-5xl text-accent/70 select-none flex items-center justify-center w-full h-full">👤</span>
              )}
            </div>
          </div>
          {/* Info area */}
          <div className="flex-1 w-full min-w-0">
            <div className="flex flex-row items-center justify-between w-full gap-2">
              <div>
                <div className="font-serif font-bold text-2xl md:text-3xl text-accent drop-shadow mb-1">
                  @{form.username}
                </div>
                <div className="font-serif text-xl font-semibold text-secondary">
                  {form.name}
                </div>
              </div>
              <button
                className="ml-2 px-4 py-2 rounded-lg bg-gradient-to-r from-accent/80 to-pink-900/80 text-white font-serif font-bold shadow hover:scale-105 hover:ring-2 hover:ring-pink-200/50 transition-all duration-150 text-xs md:text-base"
                onClick={handleEdit}
                aria-label="Edit Profile"
                type="button"
              >
                Edit Profile
              </button>
            </div>
            {/* Email/phone (small) */}
            <div className="flex gap-4 mt-2 text-sm text-gray-400">
              <span>
                <span className="font-semibold">Email:</span>{" "}
                <span className="select-all">{form.email}</span>
              </span>
              <span>
                <span className="font-semibold">Phone:</span>{" "}
                <span className="select-all">{form.phone}</span>
              </span>
            </div>
            {/* Date of Birth */}
            <div className="mt-1 text-xs text-gray-400">
              <span className="font-semibold">DOB:</span> {form.dob}
            </div>
          </div>
        </div>
        {/* Editable bio */}
        <div className="w-full flex flex-col gap-2">
          <label className="font-serif font-semibold text-accent mb-0.5 tracking-wide text-lg">
            Bio
          </label>
          <textarea
            className="bg-gray-900 border border-accent/25 rounded-xl px-4 py-2 w-full text-white font-serif text-base focus:outline-none focus:border-accent/70 transition-all min-h-[54px] max-h-28 shadow-inner"
            value={bio}
            onChange={handleBioChange}
            maxLength={250}
            rows={3}
            aria-label="Edit your bio"
            placeholder="Write something about your vibe, dreams, or mood..."
            style={{ resize: "vertical" }}
          />
          <div className="flex justify-end text-xs text-gray-400">{bio.length} / 250</div>
        </div>
        {/* Relationship status */}
        <div className="w-full flex flex-col gap-2">
          <label className="font-serif font-semibold text-accent text-lg mb-1">
            Relationship Status
          </label>
          <select
            className="px-4 py-2 bg-gray-900 border border-accent/30 rounded-xl w-full font-serif text-white focus:outline-none focus:border-accent/70 transition-all"
            value={relationship}
            onChange={handleRelationshipChange}
            aria-label="Choose relationship status"
          >
            <option value="">Please choose…</option>
            {REL_OPTIONS.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        </div>
        {/* Purpose (non-editable after submit) */}
        <div className="w-full flex flex-col gap-1">
          <span className="font-serif font-semibold text-accent text-lg">Account Purpose</span>
          <span className="text-base text-gray-200 font-serif bg-gray-900 border border-accent/15 rounded-xl px-4 py-2 shadow-inner">
            {form.purpose}
          </span>
        </div>
      </div>
    </section>
  );
}
