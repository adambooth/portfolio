"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("darkMode") === "true";
    }
    return false;
  });

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const [showSocials, setShowSocials] = useState(false);
  const [showExperiencePopup, setShowExperiencePopup] = useState(false);
  const [showDarkModePopup, setShowDarkModePopup] = useState(false);

  return (
    <div className="header">
      <div className="header-about-container">
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <a href="/AdamBoothCV.pdf">Résumé</a>
      </div>

      <div className="header-img-container">
        <img
          src="./SoftwareDevIMG.png"
          alt="software-developer-img"
          className="header-img"
        />
      </div>

      <div className="header-socials-container">
        <div
          style={{ position: "relative", display: "inline-block" }}
          onMouseEnter={() => setShowExperiencePopup(true)}
          onMouseLeave={() => setShowExperiencePopup(false)}
        >
          <a href="#experience">Experience</a>
        </div>

        <div
          className="socials-wrapper"
          style={{
            position: "relative",
            display: "inline-block",
            margin: "0 10px",
          }}
          onMouseEnter={() => setShowSocials(true)}
          onMouseLeave={() => setShowSocials(false)}
        >
          <button>Socials</button>

          {showSocials && (
            <div
              className="socials-popup"
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                background: "#fff",
                border: "1px solid #ccc",
                padding: "8px",
                borderRadius: "6px",
                zIndex: 10,
              }}
            >
              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                <li>
                  <Link href="https://github.com/adambooth" target="_blank">
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/adam-booth-35981636a/"
                    target="_blank"
                  >
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div
          style={{ position: "relative", display: "inline-block" }}
          onMouseEnter={() => setShowDarkModePopup(true)}
          onMouseLeave={() => setShowDarkModePopup(false)}
        >
          <button
            onClick={toggleDarkMode}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <img
              width="50"
              height="50"
              src={
                darkMode
                  ? "https://img.icons8.com/ios/50/light-off--v1.png"
                  : "https://img.icons8.com/ios/50/light-on--v1.png"
              }
              alt="lightbulb"
              className="lightbulb"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
