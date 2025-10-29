import React, { useState, useEffect } from "react";
import "./AboutMarquee.css";
import Marquee from "react-fast-marquee";
import MarqueeItem from "./MarqueeItem";
import HeroMarqueeItem from "./HeroMarqueeItem";

const HeroMarquee = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <Marquee
      className="marquee"
      speed={isMobile ? 30 : 50} // Slower speed on mobile for better readability
      gradient={false}
      direction="left"
    >
      <HeroMarqueeItem
        name={"We can deliver from 4 pieces up to 10,000 pieces a day"}
      />
      <HeroMarqueeItem
        name={"We can deliver from 4 pieces up to 10,000 pieces a day"}
      />
      <HeroMarqueeItem
        name={"We can deliver from 4 pieces up to 10,000 pieces a day"}
      />
      <HeroMarqueeItem
        name={"We can deliver from 4 pieces up to 10,000 pieces a day"}
      />
      <HeroMarqueeItem
        name={"We can deliver from 4 pieces up to 10,000 pieces a day"}
      />
    </Marquee>
  );
};

export default HeroMarquee;
