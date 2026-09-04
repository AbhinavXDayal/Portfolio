import React, { useState, useRef, useEffect } from "react";
import {
  ChatMessage,
  EmailDraft,
  QUICK_PROMPTS,
  generateAIResponse,
  getGmailUrl,
  getOutlookUrl,
  getMailtoUrl,
} from "../../utils/aiContactAssistant";

export const Contact: React.FC = () => {
  // Mode toggle: 'ai' (default) or 'form'
  const [mode, setMode] = useState<"ai" | "form">("ai");

  // AI Chat State
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      sender: "ai",
      text: "Hi! I'm Abhinav's AI assistant. Ask me anything or tell me what you need, and I'll draft an email ready to launch directly in Gmail, Outlook, or your default mail app.",
      timestamp: "Just now",
    },
  ]);
  const [inputPrompt, setInputPrompt] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  // Direct Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // Auto-scroll chat to bottom on new messages
  useEffect(() => {
    if (mode === "ai") {
      chatBottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping, mode]);

  const handleSendPrompt = (promptText: string) => {
    const textToSend = promptText.trim();
    if (!textToSend) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: "user",
      text: textToSend,
      timestamp: "Just now",
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputPrompt("");
    setIsTyping(true);

    // Simulate natural AI thinking delay
    setTimeout(() => {
      const response = generateAIResponse(textToSend);
      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: response.reply,
        draft: response.draft,
        timestamp: "Just now",
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 450);
  };

  const handleCopyDraft = (draft: EmailDraft, id: string) => {
    const fullText = `Subject: ${draft.subject}\n\n${draft.body}`;
    navigator.clipboard.writeText(fullText);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: Date.now().toString(),
        sender: "ai",
        text: "Chat reset. How can I help you connect with Abhinav?",
        timestamp: "Just now",
      },
    ]);
  };

  return (
    <section
      id="contact"
      className="w-full py-2.5 md:py-4 bg-transparent text-[var(--foreground)]"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left mb-2.5">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--foreground)]">
            Contact Me
          </h2>
        </div>

        {/* Compact, Premium Contact Card */}
        <div className="bg-[var(--card)] text-[var(--card-foreground)] border border-[var(--border)] rounded-[var(--radius)] p-3.5 sm:p-4 md:p-5 shadow-xs hover:border-[var(--brand-accent)]/30 transition-all duration-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Left Column: Context & Direct Contact Points */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-2.5">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[var(--foreground)] tracking-tight">
                  Let's Connect
                </h3>
              </div>

              {/* Minimalist Contact Points */}
              <div className="space-y-2 pt-0.5">
                {/* Email */}
                <a
                  href="mailto:abhinavxdayal@gmail.com"
                  className="flex items-center gap-2.5 text-xs text-[var(--muted-foreground)] hover:text-[var(--brand-accent)] transition-colors group"
                >
                  <div className="w-7 h-7 rounded-md bg-[var(--accent)] text-[var(--brand-accent)] border border-[var(--border)] flex items-center justify-center text-xs group-hover:border-[var(--brand-accent)]/50 transition-colors shrink-0">
                    ✉️
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[9.5px] font-semibold uppercase tracking-wider text-[var(--muted-foreground)]/80">
                      Email
                    </span>
                    <span className="font-medium text-[var(--foreground)] group-hover:text-[var(--brand-accent)] transition-colors truncate block">
                      abhinavxdayal@gmail.com
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+918318215585"
                  className="flex items-center gap-2.5 text-xs text-[var(--muted-foreground)] hover:text-[var(--brand-accent)] transition-colors group"
                >
                  <div className="w-7 h-7 rounded-md bg-[var(--accent)] text-[var(--brand-accent)] border border-[var(--border)] flex items-center justify-center text-xs group-hover:border-[var(--brand-accent)]/50 transition-colors shrink-0">
                    📱
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[9.5px] font-semibold uppercase tracking-wider text-[var(--muted-foreground)]/80">
                      Phone
                    </span>
                    <span className="font-medium text-[var(--foreground)] group-hover:text-[var(--brand-accent)] transition-colors">
                      +91 8318215585
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-2.5 text-xs text-[var(--muted-foreground)]">
                  <div className="w-7 h-7 rounded-md bg-[var(--accent)] text-[var(--brand-accent)] border border-[var(--border)] flex items-center justify-center text-xs shrink-0">
                    📍
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[9.5px] font-semibold uppercase tracking-wider text-[var(--muted-foreground)]/80">
                      Location
                    </span>
                    <span className="font-medium text-[var(--foreground)]">
                      Delhi / Lucknow, India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: AI Chat & Email Drafter */}
            <div className="lg:col-span-7">
              {/* Header with Mode Switcher & Reset */}
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-[var(--border)]/60">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-xs font-bold text-[var(--foreground)] tracking-tight">
                    {mode === "ai" ? "AI Email & Chat Assistant" : "Direct Message"}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-[10px]">
                  {mode === "ai" && (
                    <button
                      onClick={handleResetChat}
                      className="px-2 py-0.5 rounded text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--accent)] transition-colors cursor-pointer"
                      title="Clear chat history"
                    >
                      Reset
                    </button>
                  )}
                  <button
                    onClick={() => setMode(mode === "ai" ? "form" : "ai")}
                    className="px-2.5 py-0.5 rounded-full border border-[var(--border)] bg-[var(--accent)] text-[var(--foreground)] hover:border-[var(--brand-accent)]/50 font-semibold transition-colors cursor-pointer"
                  >
                    {mode === "ai" ? "📝 Use Form" : "✨ AI Assistant"}
                  </button>
                </div>
              </div>

              {mode === "ai" ? (
                /* AI Chat & Email Drafter View */
                <div className="flex flex-col space-y-2">
                  {/* Quick Prompt Chips */}
                  <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none select-none">
                    {QUICK_PROMPTS.map((item) => (
                      <button
                        key={item.label}
                        onClick={() => handleSendPrompt(item.prompt)}
                        className="whitespace-nowrap px-2 py-1 rounded-full text-[10px] font-medium bg-[var(--background)] hover:bg-[var(--accent)] text-[var(--foreground)] border border-[var(--border)] hover:border-[var(--brand-accent)]/40 transition-all cursor-pointer shadow-2xs shrink-0"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>

                  {/* Messages Feed */}
                  <div className="h-[155px] sm:h-[175px] overflow-y-auto space-y-2 pr-1 text-xs rounded-[var(--radius)] bg-[var(--background)]/60 border border-[var(--border)]/70 p-2.5">
                    {messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex flex-col ${
                          msg.sender === "user" ? "items-end" : "items-start"
                        }`}
                      >
                        <div
                          className={`max-w-[90%] rounded-lg px-2.5 py-1.5 leading-relaxed text-[11px] ${
                            msg.sender === "user"
                              ? "bg-[var(--primary)] text-[var(--primary-foreground)] font-medium"
                              : "bg-[var(--card)] text-[var(--foreground)] border border-[var(--border)] shadow-2xs"
                          }`}
                        >
                          <p>{msg.text}</p>

                          {/* Email Draft Preview Card */}
                          {msg.draft && (
                            <div className="mt-2 pt-2 border-t border-[var(--border)]/70 space-y-1.5 text-left">
                              <div className="bg-[var(--accent)]/50 rounded px-2 py-1 border border-[var(--border)]/60">
                                <span className="text-[9.5px] font-bold text-[var(--brand-accent)] uppercase block">
                                  Subject:
                                </span>
                                <span className="text-[10px] font-semibold text-[var(--foreground)] block truncate">
                                  {msg.draft.subject}
                                </span>
                              </div>

                              <div className="bg-[var(--background)] rounded p-2 text-[10px] font-mono text-[var(--foreground)] whitespace-pre-wrap max-h-24 overflow-y-auto border border-[var(--border)]/40">
                                {msg.draft.body}
                              </div>

                              {/* Dispatch to Email Services */}
                              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                                <a
                                  href={getGmailUrl(msg.draft)}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#EA4335] hover:bg-[#D93025] text-white text-[10.5px] font-bold transition-all shadow-xs cursor-pointer"
                                  title="Compose and send in Gmail web"
                                >
                                  <span>✉️ Open Gmail</span>
                                </a>

                                <a
                                  href={getOutlookUrl(msg.draft)}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 px-2 py-1 rounded bg-[#0078D4] hover:bg-[#006CBE] text-white text-[10px] font-bold transition-all shadow-xs cursor-pointer"
                                  title="Compose in Outlook web"
                                >
                                  <span>Outlook</span>
                                </a>

                                <a
                                  href={getMailtoUrl(msg.draft)}
                                  className="inline-flex items-center gap-1 px-2 py-1 rounded bg-[var(--accent)] hover:bg-[var(--border)] text-[var(--foreground)] text-[10px] font-semibold border border-[var(--border)] transition-all cursor-pointer"
                                  title="Open default email application"
                                >
                                  <span>Mail App</span>
                                </a>

                                <button
                                  type="button"
                                  onClick={() => handleCopyDraft(msg.draft!, msg.id)}
                                  className="inline-flex items-center gap-1 px-2 py-1 rounded bg-[var(--accent)] hover:bg-[var(--border)] text-[var(--foreground)] text-[10px] font-semibold border border-[var(--border)] transition-all cursor-pointer ml-auto"
                                  title="Copy draft to clipboard"
                                >
                                  <span>{copiedId === msg.id ? "✓ Copied!" : "📋 Copy"}</span>
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}

                    {/* Typing Indicator */}
                    {isTyping && (
                      <div className="flex items-center gap-1.5 text-[10.5px] text-[var(--muted-foreground)] pt-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-accent)] animate-bounce"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-accent)] animate-bounce [animation-delay:0.15s]"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-accent)] animate-bounce [animation-delay:0.3s]"></span>
                        <span>AI is drafting...</span>
                      </div>
                    )}
                    <div ref={chatBottomRef} />
                  </div>

                  {/* Chat Input Bar */}
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSendPrompt(inputPrompt);
                    }}
                    className="flex items-center gap-1.5"
                  >
                    <input
                      type="text"
                      value={inputPrompt}
                      onChange={(e) => setInputPrompt(e.target.value)}
                      placeholder="Type a prompt (e.g. 'Draft an inquiry for a React Native app')..."
                      className="flex-1 px-2.5 py-1.5 rounded-[var(--radius)] bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] placeholder-[var(--muted-foreground)]/50 text-xs focus:outline-none focus:border-[var(--brand-accent)] focus:ring-1 focus:ring-[var(--brand-accent)] transition-colors"
                    />
                    <button
                      type="submit"
                      disabled={!inputPrompt.trim() || isTyping}
                      className="inline-flex items-center justify-center gap-1 px-3 py-1.5 rounded-[var(--radius)] bg-[var(--brand-accent)] text-[#0E1613] font-bold text-xs hover:bg-[#A3CEB3] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-2xs cursor-pointer shrink-0"
                    >
                      <span>Prompt</span>
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                        className="w-3 h-3"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                    </button>
                  </form>
                </div>
              ) : (
                /* Classic Direct Form View */
                <div>
                  {submitted ? (
                    <div className="py-6 text-center space-y-2">
                      <div className="w-9 h-9 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto text-base font-bold">
                        ✓
                      </div>
                      <h3 className="text-sm font-bold text-[var(--foreground)]">
                        Message Sent!
                      </h3>
                      <p className="text-xs text-[var(--muted-foreground)]">
                        Thank you for reaching out. I will get back to you promptly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-2">
                      {/* Name & Email Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-[9.5px] font-semibold text-[var(--muted-foreground)] uppercase mb-0.5 tracking-wider"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            required
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleFormChange}
                            className="w-full px-2.5 py-1.5 rounded-[var(--radius)] bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] placeholder-[var(--muted-foreground)]/50 text-xs focus:outline-none focus:border-[var(--brand-accent)] focus:ring-1 focus:ring-[var(--brand-accent)] transition-colors"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="email"
                            className="block text-[9.5px] font-semibold text-[var(--muted-foreground)] uppercase mb-0.5 tracking-wider"
                          >
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            required
                            placeholder="you@example.com"
                            value={formData.email}
                            onChange={handleFormChange}
                            className="w-full px-2.5 py-1.5 rounded-[var(--radius)] bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] placeholder-[var(--muted-foreground)]/50 text-xs focus:outline-none focus:border-[var(--brand-accent)] focus:ring-1 focus:ring-[var(--brand-accent)] transition-colors"
                          />
                        </div>
                      </div>

                      {/* Message Field */}
                      <div>
                        <div className="flex items-center justify-between mb-0.5">
                          <label
                            htmlFor="message"
                            className="block text-[9.5px] font-semibold text-[var(--muted-foreground)] uppercase tracking-wider"
                          >
                            Message
                          </label>
                          <span className="text-[9.5px] font-mono text-[var(--muted-foreground)]/80">
                            {formData.message.length} / 500
                          </span>
                        </div>
                        <textarea
                          id="message"
                          required
                          maxLength={500}
                          rows={2}
                          placeholder="Your message here..."
                          value={formData.message}
                          onChange={handleFormChange}
                          className="w-full px-2.5 py-1.5 rounded-[var(--radius)] bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] placeholder-[var(--muted-foreground)]/50 text-xs focus:outline-none focus:border-[var(--brand-accent)] focus:ring-1 focus:ring-[var(--brand-accent)] transition-colors resize-none"
                        ></textarea>
                      </div>

                      {/* Submit Button */}
                      <div className="flex justify-end pt-0.5">
                        <button
                          type="submit"
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-1.5 rounded-[var(--radius)] bg-[var(--brand-accent)] text-[#0E1613] font-bold text-xs hover:bg-[#A3CEB3] active:scale-[0.98] transition-all shadow-2xs cursor-pointer"
                        >
                          <span>Send Message</span>
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth="2.5"
                            viewBox="0 0 24 24"
                            className="w-3 h-3"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <line x1="22" y1="2" x2="11" y2="13"></line>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                          </svg>
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
