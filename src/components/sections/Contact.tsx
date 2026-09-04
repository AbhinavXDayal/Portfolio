import React, { useState, useRef, useEffect } from "react";
import {
  ChatMessage,
  EmailDraft,
  QUICK_PROMPTS,
  generateAIResponse,
  getGmailUrl,
} from "../../utils/aiContactAssistant";

export const Contact: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      sender: "ai",
      text: "Select a topic or type a prompt to draft an email for Abhinav.",
      timestamp: "Just now",
    },
  ]);
  const [inputPrompt, setInputPrompt] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only scroll the internal chat box when user enters prompts (never scroll window on refresh)
    if (messages.length > 1 || isTyping) {
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTo({
          top: chatContainerRef.current.scrollHeight,
          behavior: "smooth",
        });
      }
    }
  }, [messages, isTyping]);

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
    }, 300);
  };

  const handleCopyDraft = (draft: EmailDraft, id: string) => {
    const fullText = `Subject: ${draft.subject}\n\n${draft.body}`;
    navigator.clipboard.writeText(fullText);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: Date.now().toString(),
        sender: "ai",
        text: "Select a topic or type a prompt to draft an email for Abhinav.",
        timestamp: "Just now",
      },
    ]);
  };

  // Helper to open email reliably across mobile and desktop
  const getEmailHref = (draft: EmailDraft) => {
    const isMobile =
      typeof navigator !== "undefined" &&
      /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // On mobile phones, mailto opens the phone's native Gmail / Mail app seamlessly
      return `mailto:abhinavxdayal@gmail.com?subject=${encodeURIComponent(
        draft.subject
      )}&body=${encodeURIComponent(draft.body)}`;
    }
    // On desktop, open official Gmail web compose
    return getGmailUrl(draft);
  };

  return (
    <section
      id="contact"
      className="w-full py-1.5 sm:py-2.5 md:py-4 bg-transparent text-[var(--foreground)]"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left mb-1.5 sm:mb-2">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[var(--foreground)]">
            Contact Me
          </h2>
        </div>

        {/* Compact, Minimal Contact Card */}
        <div className="bg-[var(--card)] text-[var(--card-foreground)] border border-[var(--border)] rounded-[var(--radius)] p-2.5 sm:p-3.5 md:p-5 shadow-xs hover:border-[var(--brand-accent)]/30 transition-all duration-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 lg:gap-8 items-center">
            {/* Left Column: Direct Contact Points (Ultra-compact on phone) */}
            <div className="lg:col-span-4 flex flex-col justify-center space-y-1.5 sm:space-y-2.5">
              <div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-[var(--foreground)] tracking-tight">
                  Let's Connect
                </h3>
              </div>

              {/* Minimal contact items: horizontal on phone, stacked on larger screens */}
              <div className="flex flex-wrap sm:flex-col gap-x-3 gap-y-1 sm:gap-y-2 pt-0.5">
                {/* Email */}
                <a
                  href="mailto:abhinavxdayal@gmail.com"
                  className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-[var(--muted-foreground)] hover:text-[var(--brand-accent)] transition-colors group"
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-[var(--accent)] text-[var(--brand-accent)] border border-[var(--border)] flex items-center justify-center shrink-0">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      className="w-3 h-3"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <span className="font-medium text-[var(--foreground)] group-hover:text-[var(--brand-accent)] transition-colors truncate">
                    abhinavxdayal@gmail.com
                  </span>
                </a>

                {/* Phone */}
                <a
                  href="tel:+918318215585"
                  className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-[var(--muted-foreground)] hover:text-[var(--brand-accent)] transition-colors group"
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-[var(--accent)] text-[var(--brand-accent)] border border-[var(--border)] flex items-center justify-center shrink-0">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      className="w-3 h-3"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <span className="font-medium text-[var(--foreground)] group-hover:text-[var(--brand-accent)] transition-colors">
                    +91 8318215585
                  </span>
                </a>

                {/* Location */}
                <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-[var(--muted-foreground)]">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-[var(--accent)] text-[var(--brand-accent)] border border-[var(--border)] flex items-center justify-center shrink-0">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      className="w-3 h-3"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <span className="font-medium text-[var(--foreground)]">
                    Delhi / Lucknow
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Minimal AI Email Chat (Clean, No Nested Boxes) */}
            <div className="lg:col-span-8">
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-[var(--border)]/60">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span className="text-[11px] sm:text-xs font-bold text-[var(--foreground)] tracking-tight">
                    AI Email Assistant
                  </span>
                </div>

                <button
                  onClick={handleResetChat}
                  className="px-2 py-0.5 rounded text-[10.5px] font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--accent)] transition-colors cursor-pointer"
                  title="Reset conversation"
                >
                  Reset
                </button>
              </div>

              {/* Single Minimal Chat Flow */}
              <div className="flex flex-col space-y-1.5 sm:space-y-2">
                {/* Pre-prompts Row */}
                <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto pb-0.5 scrollbar-none select-none">
                  {QUICK_PROMPTS.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => handleSendPrompt(item.prompt)}
                      className="whitespace-nowrap px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[9.5px] sm:text-[10px] font-medium bg-[var(--background)] hover:bg-[var(--accent)] text-[var(--foreground)] border border-[var(--border)] hover:border-[var(--brand-accent)]/50 transition-all cursor-pointer shadow-2xs shrink-0"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                {/* Messages Feed (Scrollable without Lenis conflict) */}
                <div
                  ref={chatContainerRef}
                  data-lenis-prevent="true"
                  className="h-[110px] sm:h-[140px] md:h-[160px] overflow-y-auto overscroll-contain space-y-2 pr-1 text-xs rounded-[var(--radius)] bg-[var(--background)]/60 border border-[var(--border)]/70 p-2 sm:p-2.5"
                >
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex flex-col ${
                        msg.sender === "user" ? "items-end" : "items-start"
                      }`}
                    >
                      {msg.sender === "user" ? (
                        <div className="bg-[var(--primary)] text-[var(--primary-foreground)] font-medium text-[10.5px] px-2.5 py-0.5 sm:py-1 rounded-full max-w-[85%]">
                          {msg.text}
                        </div>
                      ) : (
                        <div className="text-[10.5px] sm:text-[11px] leading-relaxed text-[var(--foreground)] max-w-full space-y-1">
                          <p className="text-[var(--muted-foreground)]">{msg.text}</p>

                          {/* Email Draft: Clean Direct Text — NO Nested Boxes */}
                          {msg.draft && (
                            <div className="pt-1 space-y-1 text-left">
                              <div className="text-[10.5px] font-semibold text-[var(--foreground)]">
                                <span className="text-[var(--brand-accent)]">Subject: </span>
                                {msg.draft.subject}
                              </div>

                              <div className="text-[10px] sm:text-[10.5px] whitespace-pre-wrap text-[var(--foreground)]/90 leading-relaxed font-sans pt-0.5">
                                {msg.draft.body}
                              </div>

                              {/* Single Reliable Open in Gmail Button & Copy */}
                              <div className="flex items-center gap-2 pt-1">
                                <a
                                  href={getEmailHref(msg.draft)}
                                  target={
                                    typeof navigator !== "undefined" &&
                                    /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
                                      ? "_self"
                                      : "_blank"
                                  }
                                  rel="noopener noreferrer"
                                  onClick={() => {
                                    // Also copy draft to clipboard automatically
                                    navigator.clipboard?.writeText(
                                      `Subject: ${msg.draft!.subject}\n\n${msg.draft!.body}`
                                    );
                                  }}
                                  className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-[var(--radius)] bg-[var(--brand-accent)] hover:bg-[#96c19c] text-[#0E1613] text-[10.5px] sm:text-[11px] font-bold transition-all shadow-xs cursor-pointer"
                                  title="Open in Gmail"
                                >
                                  <span>Open in Gmail</span>
                                  <svg
                                    stroke="currentColor"
                                    fill="none"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    className="w-3 h-3"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                  </svg>
                                </a>

                                <button
                                  type="button"
                                  onClick={() => handleCopyDraft(msg.draft!, msg.id)}
                                  className="inline-flex items-center gap-1 px-2 py-0.5 sm:py-1 rounded-[var(--radius)] bg-[var(--accent)] hover:bg-[var(--border)] text-[var(--foreground)] text-[10px] sm:text-[10.5px] font-medium border border-[var(--border)] transition-all cursor-pointer"
                                  title="Copy draft to clipboard"
                                >
                                  <span>{copiedId === msg.id ? "Copied" : "Copy Draft"}</span>
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Typing Indicator */}
                  {isTyping && (
                    <div className="flex items-center gap-1.5 text-[10px] text-[var(--muted-foreground)] pt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-accent)] animate-bounce"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-accent)] animate-bounce [animation-delay:0.15s]"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-accent)] animate-bounce [animation-delay:0.3s]"></span>
                      <span>Drafting...</span>
                    </div>
                  )}
                </div>

                {/* Custom Prompt Input Bar */}
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
                    placeholder="Type a custom prompt to draft an email..."
                    className="flex-1 px-2.5 py-1 rounded-[var(--radius)] bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] placeholder-[var(--muted-foreground)]/50 text-xs focus:outline-none focus:border-[var(--brand-accent)] focus:ring-1 focus:ring-[var(--brand-accent)] transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={!inputPrompt.trim() || isTyping}
                    className="inline-flex items-center justify-center gap-1 px-2.5 sm:px-3 py-1 rounded-[var(--radius)] bg-[var(--brand-accent)] text-[#0E1613] font-bold text-xs hover:bg-[#96c19c] active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-2xs cursor-pointer shrink-0"
                  >
                    <span>Send</span>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
