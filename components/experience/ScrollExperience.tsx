
"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const linkedinUrl =
  "https://www.linkedin.com/in/mohammed-vaseem-a350bb171/";

const fullName = "MOHAMMED VASEEM";

export default function ScrollExperience() {
  const [typedName, setTypedName] = useState("");

  // Type the name when the page loads
  useEffect(() => {
    let index = 0;

    const timer = window.setInterval(() => {
      index += 1;
      setTypedName(fullName.slice(0, index));

      if (index >= fullName.length) {
        window.clearInterval(timer);
      }
    }, 100);

    return () => window.clearInterval(timer);
  }, []);

  const firstName = typedName.slice(0, 8);
  const lastName = typedName.slice(9);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
        gsap.fromTo(
          element,
          { y: 55, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      gsap.to(".scene-stage", {
        scale: 0.72,
        rotate: 8,
        opacity: 0.48,
        ease: "none",
        scrollTrigger: {
          trigger: ".story",
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      gsap.to(".hero-title", {
        yPercent: -24,
        opacity: 0.25,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-screen",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.utils.toArray<HTMLElement>(".story-screen").forEach((screen) => {
        const copy = screen.querySelector(".story-copy");
        if (!copy) return;

        gsap.fromTo(
          copy,
          { y: 70, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: screen,
              start: "top 70%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    });

    return () => context.revert();
  }, []);

  return (
    <main className="immersive-site">
      <div className="site-grain" aria-hidden="true" />

      <header className="topbar">
        <a className="wordmark" href="#home" aria-label="Vaseem home">
          V<span>.</span>
        </a>

        <span className="topbar-caption">
          PROFESSIONAL PORTFOLIO · 2026
        </span>

        <a
          className="topbar-link"
          href={linkedinUrl}
          target="_blank"
          rel="noreferrer"
        >
          LET&apos;S CONNECT <span>↗</span>
        </a>
      </header>

      <div className="scene-stage" aria-hidden="true">
         <img src="/images/vaseem.jpg.png" alt="" />
      </div>


      <section className="hero-screen" id="home">
        <div className="hero-meta">
          <span>SALES · SERVICE · ELECTRONICS</span>
          <span className="live-indicator">
            <i /> INDIA &amp; SRI LANKA
          </span>
        </div>

        <div className="hero-title">
          <p className="micro-label">
            CONNECTING TECHNOLOGY WITH OPPORTUNITY
          </p>

          <div className="hero-name-row">
            <h1 aria-label="Mohammed Vaseem">
              {firstName}
              <br />
              <span className="typed-surname">
                {lastName}
                <i
                  className={`typing-cursor ${
                    typedName.length === fullName.length
                      ? "typing-complete"
                      : ""
                  }`}
                  aria-hidden="true"
                />
              </span>
              <b className="name-period">.</b>
            </h1>

            <div className="hero-portrait">
              <img
                src="/images/vaseem.jpg.png"
                alt="Mohammed Vaseem"
              />
            </div>
          </div>

          <div className="hero-description-row">
            <p className="hero-intro">
              Building meaningful connections between electronic components,
              engineering needs, and the people shaping tomorrow&apos;s
              technology.
            </p>

            <div className="hero-role">
              <span className="role-dash" />
              <div>
                <small>SALES &amp; SERVICE</small>
                <strong>Mouser Electronics</strong>
                <small>INDIA &amp; SRI LANKA</small>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-bottomline">
          <span>ENGINEERING CONNECTIONS. ENABLING INNOVATION.</span>
          <a href="#introduction">
            SCROLL TO EXPLORE <span className="scroll-symbol">↓</span>
          </a>
        </div>

        <span className="hero-coordinate">13° / 80° · 01—05</span>
      </section>

      <section className="story story-intro" id="introduction">
        <div className="story-screen">
          <div className="story-copy reveal">
            <p className="section-index">01 / THE PHILOSOPHY</p>
            <p className="section-eyebrow">
              WHERE TECHNOLOGY MEETS PEOPLE
            </p>
            <h2>
              Every great innovation starts with the{" "}
              <span>right connection.</span>
            </h2>
            <p className="body-copy">
              Behind every electronic breakthrough is a network of people,
              ideas, and components working together. The right connection
              turns a technical requirement into an opportunity to move
              forward.
            </p>
            <a className="underlined-link" href="#expertise">
              EXPLORE THE WORK <span>↘</span>
            </a>
          </div>
        </div>
      </section>

      <section className="story story-dark" id="expertise">
        <div className="story-screen story-screen-right">
          <div className="story-copy reveal">
            <p className="section-index">02 / THE DOMAIN</p>
            <p className="section-eyebrow">A WORLD BUILT ON PRECISION</p>
            <h2>
              Electronics is more than components. It&apos;s{" "}
              <span>possibility.</span>
            </h2>
            <p className="body-copy">
              From sourcing electronic components to understanding engineering
              requirements, every conversation is an opportunity to connect
              the right solution with the right application.
            </p>
            <div className="keyword-list">
              <span>COMPONENTS</span>
              <span>ENGINEERING</span>
              <span>CUSTOMER RELATIONSHIPS</span>
            </div>
          </div>
        </div>
      </section>

      <section className="story story-light" id="experience">
        <div className="story-screen">
          <div className="story-copy reveal">
            <p className="section-index">03 / PROFESSIONAL FOCUS</p>
            <p className="section-eyebrow">SALES &amp; SERVICE</p>
            <h2>
              Bringing technical needs and{" "}
              <span>human understanding</span> together.
            </h2>
            <p className="body-copy">
              Working with Mouser Electronics across India and Sri Lanka means
              being part of a wider electronics ecosystem—where product
              knowledge, responsiveness, and strong relationships matter.
            </p>
            <div className="company-signature">
              <span className="company-symbol">M</span>
              <div>
                <strong>Mouser Electronics</strong>
                <small>INDIA &amp; SRI LANKA REGION</small>
              </div>
            </div>
          </div>
        </div>
      </section>


<section className="story story-outro" id="contact">
  <div className="outro-content reveal">
    <p className="section-index">04 / THE NEXT CONNECTION</p>

    <p className="section-eyebrow">
      LET&apos;S MOVE IDEAS FORWARD
    </p>

    <h2>
      Every connection
      <br />
      starts with a <span>conversation.</span>
    </h2>

    <p className="body-copy">
      Connect with Mohammed Vaseem to continue the conversation around
      electronics, customer relationships, and engineering possibilities.
    </p>

    <div className="contact-actions">
      <a
        className="contact-button"
        href={linkedinUrl}
        target="_blank"
        rel="noreferrer"
      >
        CONNECT ON LINKEDIN <span>↗</span>
      </a>

      <a
        className="contact-button contact-email-button"
        href="mailto:vaseemvathi@gmail.com?subject=Professional%20Enquiry"
      >
        EMAIL ME <span>↗</span>
      </a>
    </div>
  </div>

  <footer className="immersive-footer">
    <a className="wordmark" href="#home">
      V<span>.</span>
    </a>

    <span>MOHAMMED VASEEM · PROFESSIONAL PORTFOLIO</span>

    <a href="#home">BACK TO TOP ↑</a>
  </footer>
</section>
</main>
);
}
