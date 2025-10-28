import React, { useState, useEffect } from "react";
import "./AboutMarquee.css";
import Marquee from "react-fast-marquee";
import MarqueeItem from "./MarqueeItem";

const AboutMarquee = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <Marquee
      className="marquee"
      speed={isMobile ? 30 : 50} // Slower speed on mobile for better readability
      gradient={false}
      direction="left"
    >
      <MarqueeItem name={'Eggless Choco Lava'} />
      <MarqueeItem name={'Eggless Choco Lava'} />
      <MarqueeItem name={'Eggless Brownie'} />
      <MarqueeItem name={'Eggless Doughnut'} />
      <MarqueeItem name={'Eggless Sandwich'} />
      <MarqueeItem name={"Chicken Burger"} />
      <MarqueeItem name={"Eggless Chocolate Muffin"} />
      <MarqueeItem name={"Eggless Strawberry Muffin"} />
      <MarqueeItem name={"Eggless Banana Muffin"} />
      <MarqueeItem name={'Eggless Choco Lava'} />
      <MarqueeItem name={'Eggless Choco Lava'} />
      <MarqueeItem name={'Eggless Brownie'} />
      <MarqueeItem name={'Eggless Doughnut'} />
      <MarqueeItem name={'Eggless Sandwich'} />
      <MarqueeItem name={"Chicken Burger"} />
      <MarqueeItem name={"Eggless Chocolate Muffin"} />
      <MarqueeItem name={"Eggless Strawberry Muffin"} />
      <MarqueeItem name={"Eggless Banana Muffin"} />

    </Marquee>
  );
};

export default AboutMarquee;



