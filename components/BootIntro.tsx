
"use client";

import { useEffect, useState } from "react";
import "./BootIntro.css";

type BootIntroProps = {
  onComplete: () => void;
};

export default function BootIntro({ onComplete }: BootIntroProps) {
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const exitTimer = window.setTimeout(() => setLeaving(true), 3900);
    const completeTimer = window.setTimeout(onComplete, 4700);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(completeTimer);
    };
  }, [onComplete]);

  const words = ["PRECISION.", "PERFORMANCE.", "POSSIBILITY."];

  return (
    <div className={`boot-intro ${leaving ? "boot-intro--leaving" : ""}`}>
      <div className="boot-intro__grain" />

      <div className="boot-intro__content">
        <p className="boot-intro__eyebrow">
          MOHAMMED VASEEM · PROFESSIONAL PORTFOLIO
        </p>

        <div className="boot-intro__words">
          {words.map((word, index) => (
            <div className="boot-intro__line" key={word}>
              <span
                className="boot-intro__word"
                style={{ "--line-index": index } as React.CSSProperties}
              >
                {word}
              </span>
            </div>
          ))}
        </div>

        <div className="boot-intro__progress">
          <div className="boot-intro__progress-fill" />
        </div>

        <div className="boot-intro__footer">
          <span>SALES &amp; SERVICE</span>
          <span>INDIA · SRI LANKA</span>
        </div>
      </div>
    </div>
  );
}
