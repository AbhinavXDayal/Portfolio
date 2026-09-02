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
      className="w-full py-3 md:py-4 bg-transparent text-[var(--foreground)]"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center md:items-start text-center md:text-left mb-3">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--foreground)]">
            Contact Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-start">
          {/* Left Column Contact Details */}
          <div className="flex flex-col space-y-2.5 text-center lg:text-left">
            <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
              I am open to app development opportunities, mobile projects, and
              engineering collaborations. Feel free to reach out via email or
              phone!
            </p>

            <div className="space-y-2">
              {/* Email Card */}
              <div className="flex items-center space-x-2.5 p-2.5 rounded-[var(--radius)] bg-[var(--card)] border border-[var(--border)] text-left shadow-2xs">
                <div className="p-1.5 rounded-[var(--radius)] bg-[var(--accent)] text-[var(--foreground)] text-xs">
                  ✉️
                </div>
                <div>
                  <h4 className="text-[10px] font-semibold text-[var(--muted-foreground)] uppercase">
                    Email
                  </h4>
                  <a
                    href="mailto:abhinavxdayal@gmail.com"
                    className="text-xs font-medium text-[var(--foreground)] hover:underline"
                  >
                    abhinavxdayal@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="flex items-center space-x-2.5 p-2.5 rounded-[var(--radius)] bg-[var(--card)] border border-[var(--border)] text-left shadow-2xs">
                <div className="p-1.5 rounded-[var(--radius)] bg-[var(--accent)] text-[var(--foreground)] text-xs">
                  📱
                </div>
                <div>
                  <h4 className="text-[10px] font-semibold text-[var(--muted-foreground)] uppercase">
                    Phone
                  </h4>
                  <a
                    href="tel:+918318215585"
                    className="text-xs font-medium text-[var(--foreground)] hover:underline"
                  >
                    +91 8318215585
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="flex items-center space-x-2.5 p-2.5 rounded-[var(--radius)] bg-[var(--card)] border border-[var(--border)] text-left shadow-2xs">
                <div className="p-1.5 rounded-[var(--radius)] bg-[var(--accent)] text-[var(--foreground)] text-xs">
                  📍
                </div>
                <div>
                  <h4 className="text-[10px] font-semibold text-[var(--muted-foreground)] uppercase">
                    Location
                  </h4>
                  <p className="text-xs font-medium text-[var(--foreground)]">
                    Delhi / Lucknow, India
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-0.5">
              <div className="flex flex-wrap justify-center lg:justify-start gap-1.5">
                <a
                  href="https://github.com/AbhinavXDayal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 text-xs font-semibold rounded-[var(--radius)] bg-[var(--accent)] text-[var(--foreground)] border border-[var(--border)] hover:bg-[var(--background)] transition-colors shadow-2xs"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/abhinavxdayal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 text-xs font-semibold rounded-[var(--radius)] bg-[var(--accent)] text-[var(--foreground)] border border-[var(--border)] hover:bg-[var(--background)] transition-colors shadow-2xs"
                >
                  LinkedIn
                </a>
                <a
                  href="https://abhinavxportfolio.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 text-xs font-semibold rounded-[var(--radius)] bg-[var(--accent)] text-[var(--foreground)] border border-[var(--border)] hover:bg-[var(--background)] transition-colors shadow-2xs"
                >
                  Portfolio
                </a>
              </div>
            </div>
          </div>

          {/* Right Column Form - Compact */}
          <div className="bg-[var(--card)] text-[var(--card-foreground)] border border-[var(--border)] rounded-[var(--radius)] p-3.5 sm:p-4 shadow-xs">
            {submitted ? (
              <div className="py-4 text-center space-y-1.5">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-600 flex items-center justify-center mx-auto text-base font-bold">
                  ✓
                </div>
                <h3 className="text-sm font-bold text-[var(--foreground)]">
                  Message Sent!
                </h3>
                <p className="text-[11px] text-[var(--muted-foreground)]">
                  Thank you for reaching out. I will get back to you promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-2.5">
                {/* 2-Column Name & Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-[10px] font-semibold text-[var(--muted-foreground)] uppercase mb-0.5"
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
                      className="w-full px-2.5 py-1.5 rounded-[var(--radius)] bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] placeholder-[var(--muted-foreground)]/60 text-xs focus:outline-none focus:ring-1 focus:ring-[var(--ring)] transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[10px] font-semibold text-[var(--muted-foreground)] uppercase mb-0.5"
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
                      className="w-full px-2.5 py-1.5 rounded-[var(--radius)] bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] placeholder-[var(--muted-foreground)]/60 text-xs focus:outline-none focus:ring-1 focus:ring-[var(--ring)] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-0.5">
                    <label
                      htmlFor="message"
                      className="block text-[10px] font-semibold text-[var(--muted-foreground)] uppercase"
                    >
                      Message
                    </label>
                    <span className="text-[9px] font-mono text-[var(--muted-foreground)]">
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
                    className="w-full px-2.5 py-1.5 rounded-[var(--radius)] bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] placeholder-[var(--muted-foreground)]/60 text-xs focus:outline-none focus:ring-1 focus:ring-[var(--ring)] transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-2 px-3 rounded-[var(--radius)] bg-[var(--primary)] text-[var(--primary-foreground)] font-semibold text-xs hover:opacity-90 active:scale-[0.99] transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
