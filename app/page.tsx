
"use client";

import { useState } from "react";
import ScrollExperience from "../components/experience/ScrollExperience";
import BootIntro from "../components/BootIntro";

export default function Home() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      {!introDone && (
        <BootIntro onComplete={() => setIntroDone(true)} />
      )}

      {introDone && <ScrollExperience />}
    </>
  );
}
