import React from "react";
import { HeroHighlight } from "./ui/hero-highlight";
import { BorderBeam } from "./ui/border-beam";

import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./ui/text-reveal-card";

export function Quote() {
  return (
    <div className="h-30 relative">
      <HeroHighlight>
        <div className="flex items-center justify-center bg-[#0E0E10] relative">
          <BorderBeam className="absolute top-1 left-0 right-0 bottom-0" />
          <TextRevealCard
            text="You Enjoy the Journey"
            revealText="I Guide the Way. "
            className="z-10"
          />
        </div>
      </HeroHighlight>
    </div>
  );
}

export default Quote;
