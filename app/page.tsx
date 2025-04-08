"use client";

import React, { useState, useEffect } from "react";

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("light");

  // No need to add light class on load since it's already in the HTML tag
  // Just keeping theme state in sync with actual DOM
  useEffect(() => {
    // If for some reason the class doesn't match the state, update the state
    const isLightMode = document.documentElement.classList.contains("light");
    if (
      (isLightMode && theme !== "light") ||
      (!isLightMode && theme !== "dark")
    ) {
      setTheme(isLightMode ? "light" : "dark");
    }
  }, [theme]);

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);

    if (newTheme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  };

  return (
    <div className="h-screen bg-background text-foreground flex flex-col">
      {/* Header */}
      <header className="px-6 pt-4 flex justify-between items-center max-w-7xl mx-auto w-full backdrop-blur-sm">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-2.5 rounded-xl shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          </div>
          <h1 className="text-xl font-bold tracking-tight">Quizz Today</h1>
        </div>

        {/* Theme toggle button */}
        <button
          onClick={toggleTheme}
          className="theme-toggle"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </button>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto px-6 ">
        <div className="md:w-1/2 space-y-8 text-center md:text-left mb-12 md:mb-0">
          <div className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 text-sm font-medium text-primary mb-3 backdrop-blur-sm shadow-sm transition-all hover:shadow-md">
            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1.5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
              One question every evening
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Turn <span className="gradient-text">distractions</span> into
            knowledge gains
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
            Next time you reach for WhatsApp, answer a quick quiz instead.
            Transform idle scrolling into bite-sized learning that builds your
            knowledge one question at a time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="https://wa.me/17312525726"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp shadow-lg shadow-green-900/10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Start Learning Now
            </a>
          </div>
          <div className="text-muted-foreground">
            <p className="text-md text-muted-foreground">
              add the contact: +1 731 252 5726
            </p>
          </div>
        </div>

        {/* Chat preview */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="relative bg-secondary/80 backdrop-blur-md rounded-2xl p-5 w-full max-w-sm shadow-2xl border border-white/5 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-accent/20 rounded-full blur-2xl"></div>

            <div className="flex items-center space-x-3 mb-5 relative">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-semibold">Quizz Today</p>
                <p className="text-xs text-muted-foreground">
                  Your knowledge companion
                </p>
              </div>

              {/* Online indicator */}
              <div className="ml-auto flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-1.5"></span>
                <span className="text-xs text-muted-foreground">Online</span>
              </div>
            </div>

            <div className="space-y-3">
              <div
                className="message-bubble message-received"
                style={{ "--index": 1 } as React.CSSProperties}
              >
                <p>What topics are you most interested in learning about?</p>
                <div className="chat-timestamp">9:15</div>
              </div>

              <div
                className="message-bubble message-sent"
                style={{ "--index": 2 } as React.CSSProperties}
              >
                <p>System Design</p>
                <div className="chat-timestamp">9:16</div>
              </div>

              <div
                className="message-bubble message-received"
                style={{ "--index": 3 } as React.CSSProperties}
              >
                <p>
                  Great choice! I&apos;ll send you a daily quiz about System
                  Design every evening. Here&apos;s your first question:
                </p>
                <div className="chat-timestamp">9:17</div>
              </div>

              <div
                className="message-bubble message-received"
                style={{ "--index": 4 } as React.CSSProperties}
              >
                <p>
                  Which architectural pattern is characterized by independent
                  components that process events asynchronously and can scale
                  horizontally?
                </p>
                <div className="chat-timestamp">9:17</div>
              </div>
            </div>

            {/* Input field */}
            <div className="mt-4 relative">
              <input
                type="text"
                placeholder="Type your answer..."
                className="w-full bg-secondary border border-white/10 rounded-full py-2.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button className="absolute right-1 top-1 bg-primary text-white rounded-full p-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
