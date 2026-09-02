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
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col items-center md:items-start text-center md:text-left mb-3">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--foreground)]">
            Contact Me
          </h2>
        </div>

        {/* Integrated Single Card */}
        <div className="bg-[var(--card)] text-[var(--card-foreground)] border border-[var(--border)] rounded-[var(--radius)] p-4 sm:p-5 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
            {/* Left Sub-Panel: Contact Details */}
            <div className="md:col-span-5 flex flex-col justify-between space-y-3 md:border-r md:border-[var(--border)]/60 md:pr-5">
              <div>
                <h3 className="text-sm sm:text-base font-bold text-[var(--foreground)] mb-1">
                  Let's Connect
                </h3>
                <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                  Open to app development opportunities, mobile projects, and
                  engineering collaborations.
                </p>
              </div>

              <div className="space-y-2">
                {/* Email */}
                <div className="flex items-center gap-2.5 p-2 rounded-[var(--radius)] bg-[var(--background)]/60 border border-[var(--border)]/70 text-left">
                  <div className="p-1 rounded bg-[var(--accent)] text-xs">
                    ✉️
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-[9px] font-semibold text-[var(--muted-foreground)] uppercase">
                      Email
                    </h4>
                    <a
                      href="mailto:abhinavxdayal@gmail.com"
                      className="text-xs font-medium text-[var(--foreground)] hover:underline truncate block"
                    >
                      abhinavxdayal@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-2.5 p-2 rounded-[var(--radius)] bg-[var(--background)]/60 border border-[var(--border)]/70 text-left">
                  <div className="p-1 rounded bg-[var(--accent)] text-xs">
                    📱
                  </div>
                  <div>
                    <h4 className="text-[9px] font-semibold text-[var(--muted-foreground)] uppercase">
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

                {/* Location */}
                <div className="flex items-center gap-2.5 p-2 rounded-[var(--radius)] bg-[var(--background)]/60 border border-[var(--border)]/70 text-left">
                  <div className="p-1 rounded bg-[var(--accent)] text-xs">
                    📍
                  </div>
                  <div>
                    <h4 className="text-[9px] font-semibold text-[var(--muted-foreground)] uppercase">
                      Location
                    </h4>
                    <p className="text-xs font-medium text-[var(--foreground)]">
                      Delhi / Lucknow, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sub-Panel: Send Message Form */}
            <div className="md:col-span-7">
              {submitted ? (
                <div className="py-6 text-center space-y-1.5">
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
                  {/* Name & Email Row */}
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
      </div>
    </section>
  );
};
