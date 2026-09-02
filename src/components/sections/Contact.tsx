import React, { useState } from "react";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="w-full py-2.5 md:py-4 bg-transparent text-[var(--foreground)]"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left mb-2.5">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--foreground)]">
            Contact Me
          </h2>
        </div>

        {/* Compact, Premium Contact Card */}
        <div className="bg-[var(--card)] text-[var(--card-foreground)] border border-[var(--border)] rounded-[var(--radius)] p-3.5 sm:p-4 md:p-5 shadow-xs hover:border-[var(--brand-accent)]/30 transition-all duration-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Left Column: Context & Contact Points */}
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

            {/* Right Column: Send Message Form */}
            <div className="lg:col-span-7">
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
                <form onSubmit={handleSubmit} className="space-y-2">
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
                        onChange={handleChange}
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
                        onChange={handleChange}
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
                      onChange={handleChange}
                      className="w-full px-2.5 py-1.5 rounded-[var(--radius)] bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] placeholder-[var(--muted-foreground)]/50 text-xs focus:outline-none focus:border-[var(--brand-accent)] focus:ring-1 focus:ring-[var(--brand-accent)] transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button (Tasteful Herbal Botanical Tone) */}
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
          </div>
        </div>
      </div>
    </section>
  );
};
