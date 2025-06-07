import React, { useState, useRef, useEffect } from "react";

// Demo/mock data for UI scaffolding
const DEMO_CHAT_LIST = [
  {
    id: 1,
    username: "cutiequeen",
    avatar: null,
    preview: "See you soon! 💜",
    active: true,
    lastMessageTime: "6:14 PM",
    unread: 2,
    messages: [
      // from, type, text, timestamp
      { fromMe: false, text: "Hey! How was your day 🥰", timestamp: "6:02 PM" },
      { fromMe: true, text: "Good! Just working on AuraGram stuff for launch.", timestamp: "6:04 PM" },
      { fromMe: false, text: "Ahhh so cool! Can't wait to see ✨", timestamp: "6:07 PM" },
      { fromMe: true, text: "See you soon! 💜", timestamp: "6:14 PM" },
    ],
  },
  {
    id: 2,
    username: "moodymuse",
    avatar: null,
    preview: "I'll send the pics tomorrow.",
    active: false,
    lastMessageTime: "Yesterday",
    unread: 0,
    messages: [
      { fromMe: false, text: "You at the studio today?", timestamp: "Yesterday" },
      { fromMe: true, text: "Yep! Just finished.", timestamp: "Yesterday" },
      { fromMe: false, text: "I'll send the pics tomorrow.", timestamp: "Yesterday" },
    ],
  },
  {
    id: 3,
    username: "plantparent",
    avatar: null,
    preview: "🌱 Growing my new monstera!",
    active: false,
    lastMessageTime: "Mon",
    unread: 0,
    messages: [
      { fromMe: false, text: "🌱 Growing my new monstera!", timestamp: "Mon" }
    ],
  }
];

// PUBLIC_INTERFACE
export default function MessagesPage() {
  const [chats, setChats] = useState(DEMO_CHAT_LIST);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [input, setInput] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);
  const messagesEndRef = useRef(null);

  const selectedChat = chats[selectedIdx];

  useEffect(() => {
    // Scroll to bottom of chat view on new message or select
    if (messagesEndRef.current) messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [selectedIdx, selectedChat.messages.length]);

  // Handle sending message (demo - client only)
  function handleSend(e) {
    e.preventDefault();
    if (!input.trim()) return;
    const newMsg = { fromMe: true, text: input, timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setChats(prev =>
      prev.map((chat, idx) =>
        idx === selectedIdx
          ? {
              ...chat,
              messages: [...chat.messages, newMsg],
              preview: input,
              lastMessageTime: newMsg.timestamp,
            }
          : chat
      )
    );
    setInput("");
    setShowEmoji(false);
  }

  // Demo emoji picker - super basic for placeholder
  function EmojiPicker() {
    // Just simple emoji row for demo, not an actual picker
    const emojis = ["💜", "😃", "🌙", "🥰", "✨", "😂"];
    return (
      <div className="absolute bottom-full left-0 mb-2 bg-black/80 rounded-xl shadow-xl border border-accent/30 p-2 flex gap-2 z-50">
        {emojis.map((emoji) => (
          <button
            type="button"
            key={emoji}
            className="text-2xl hover:scale-125 transition-transform duration-150"
            onClick={() => {
              setInput((prev) => prev + emoji);
              setShowEmoji(false);
            }}
            aria-label={`Insert emoji ${emoji}`}
          >
            {emoji}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div
      className="flex h-[calc(100vh-2rem)] min-h-[540px] rounded-2xl overflow-hidden shadow-2xl mx-auto my-4 bg-gradient-to-br from-indigo-900/70 via-purple-900/80 to-black/[0.90]"
      style={{ maxWidth: 1100, fontFamily: "'Times New Roman', Times, serif" }}
    >
      {/* LEFT: Chat list */}
      <aside
        className="w-24 md:w-80 bg-black/60 border-r border-accent/15 flex flex-col py-4 px-2 md:px-3"
        style={{ minWidth: 70, maxWidth: 330 }}
      >
        <h2 className="hidden md:block text-lg font-serif font-bold text-accent pb-2 pl-1 select-none tracking-wide">
          Chats
        </h2>
        <nav
          className="flex flex-col gap-2 md:gap-3 flex-1 overflow-y-auto"
          aria-label="Chat List"
        >
          {chats.map((chat, idx) => (
            <button
              key={chat.id}
              aria-label={`Chat with ${chat.username}`}
              className={`
                flex items-center gap-4 md:gap-3 px-2 py-2 md:py-3 rounded-2xl group
                transition-all duration-150
                bg-black/40 hover:bg-accent/10 focus:bg-accent/20
                outline-none border-2 border-transparent
                ${selectedIdx === idx ? "border-accent/60 scale-105 shadow-accent/10 shadow-lg" : ""}
              `}
              onClick={() => setSelectedIdx(idx)}
            >
              {/* Avatar */}
              <div className="relative w-11 h-11 min-w-[2.5rem] rounded-full bg-gradient-to-tr from-fuchsia-300/30 via-blue-100/10 to-black flex items-center justify-center overflow-hidden brightness-105 shadow-inner border border-accent/20">
                {chat.avatar ? (
                  <img
                    src={chat.avatar}
                    alt={`${chat.username}'s avatar`}
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <span className="text-2xl font-bold text-white/70">
                    {chat.username.charAt(0).toUpperCase()}
                  </span>
                )}
                {/* Active dot */}
                {chat.active && (
                  <span className="absolute bottom-0.5 right-1 w-3 h-3 bg-green-400 ring-2 ring-black rounded-full animate-pulse" />
                )}
              </div>
              {/* Username/preview/timestamp (show on md+) */}
              <div className="flex-col flex-1 min-w-0 hidden md:flex">
                <div className="flex items-center gap-1">
                  <span className="font-bold text-base leading-tight text-secondary truncate">
                    {chat.username}
                  </span>
                  {chat.unread > 0 && (
                    <span className="ml-1 px-1.5 rounded-full text-xs bg-accent/90 text-white font-bold drop-shadow animate-in">
                      {chat.unread}
                    </span>
                  )}
                </div>
                <span className="block truncate text-sm text-white/60">
                  {chat.preview}
                </span>
              </div>
              {/* Timestamp (show on md+) */}
              <span className="ml-auto hidden md:block text-xs font-serif text-accent/70 font-bold min-w-[56px] text-right">
                {chat.lastMessageTime}
              </span>
            </button>
          ))}
        </nav>
      </aside>
      {/* RIGHT: Conversation area */}
      <main className="flex-1 flex flex-col bg-black/30">
        {/* Conversation top bar */}
        <div
          className="flex items-center px-4 py-2 md:py-4 border-b border-accent/15 gap-4 md:gap-5"
          style={{ minHeight: 72 }}
        >
          {/* Profile avatar with glow */}
          <div className="w-12 h-12 rounded-full bg-gradient-to-tl from-fuchsia-300/10 to-purple-700/20 flex items-center justify-center border border-accent/30 shadow-lg relative">
            {selectedChat.avatar ? (
              <img
                src={selectedChat.avatar}
                alt={selectedChat.username}
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <span className="text-2xl font-bold text-white/80">
                {selectedChat.username.charAt(0).toUpperCase()}
              </span>
            )}
            {selectedChat.active && (
              <span className="absolute bottom-1 right-2 w-3 h-3 bg-green-400 ring-2 ring-black rounded-full animate-pulse" />
            )}
          </div>
          <div className="flex-1 min-w-0 flex flex-col">
            <span className="font-bold text-lg md:text-xl text-secondary truncate">{selectedChat.username}</span>
            <span className="text-xs text-accent/70 font-serif">
              {selectedChat.active ? "Active now" : "Offline"}
            </span>
          </div>
        </div>
        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-2 md:px-6 py-4 md:py-6 bg-gradient-to-b from-black/[0.12] to-black/[0.32]">
          <ul className="flex flex-col gap-2 md:gap-5">
            {selectedChat.messages.map((msg, i) => (
              <li
                key={i}
                className={`
                  flex ${msg.fromMe ? "justify-end" : "justify-start"} group
                `}
              >
                <div
                  className={`
                    max-w-[86vw] md:max-w-xl px-5 py-2.5 rounded-3xl
                    font-serif text-base whitespace-pre-line break-words
                    shadow-md border-2
                    ${msg.fromMe ?
                      "bg-gradient-to-tr from-fuchsia-500/20 to-pink-300/10 text-white/90 border-pink-400/20 ml-8 rounded-br-xl"
                    : "bg-black/50 border-blue-200/10 text-white/85 mr-8 rounded-bl-xl"}
                    relative
                  `}
                >
                  {msg.text}
                  <span className={`
                    block text-xs font-serif text-accent/70 font-semibold mt-0.5 text-right opacity-70
                  `}>
                    {msg.timestamp}
                  </span>
                </div>
              </li>
            ))}
            <div ref={messagesEndRef} />
          </ul>
        </div>
        {/* Input Bar */}
        <form
          className="relative w-full px-1 py-2 bg-black/40 border-t border-accent/20 flex items-center gap-1 md:gap-3"
          style={{ minHeight: 64 }}
          onSubmit={handleSend}
          autoComplete="off"
        >
          {/* Emoji button */}
          <div className="relative">
            <button
              type="button"
              className={`
                text-2xl md:text-3xl ml-2 p-1 rounded-full
                hover:bg-accent/20 text-accent/90 transition-all duration-100 focus:outline-none focus:ring-2 focus:ring-accent/40
                drop-shadow-lg
              `}
              aria-label="Open emoji picker"
              onClick={() => setShowEmoji((v) => !v)}
            >
              <span role="img" aria-hidden="true">😊</span>
            </button>
            {showEmoji && <EmojiPicker />}
          </div>
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Type your message…"
            className={`
              flex-1 px-4 py-2.5 md:py-3 rounded-2xl font-serif text-base bg-black/60 border-2 border-accent/20
              text-white placeholder-gray-400 outline-none shadow-inner transition-all duration-150
              focus:ring-2 focus:ring-accent/30 focus:border-accent
              mx-2
            `}
            style={{ fontFamily: "'Times New Roman', Times, serif" }}
            aria-label="Message input"
            autoFocus
          />
          <button
            type="submit"
            className={`
              px-4 py-2 rounded-full bg-accent text-white font-bold font-serif ml-1
              shadow hover:bg-pink-600/90 hover:text-white transition-all
              active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed
            `}
            aria-label="Send message"
            disabled={!input.trim()}
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" className="inline align-text-bottom mr-1">
              <path d="M2 21L23 12L2 3V10L17 12L2 14V21Z" />
            </svg>
            <span className="hidden md:inline">Send</span>
          </button>
        </form>
      </main>
    </div>
  );
}
