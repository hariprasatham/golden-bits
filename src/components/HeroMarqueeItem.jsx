import React from "react";
import "./MarqueeItem.css";
import FastDelivery from "../assets/fast-delivery.png";

const HeroMarqueeItem = ({name}) => {
  return (
    <div className="marquee-item-container">
      <span className="marquee-text" style={{marginRight: "30px"}}>{name}</span>
      <img src={FastDelivery} style={{height: "auto", width: "45px"}} alt="Hero Marquee Item" />
    </div>
  );
};

export default HeroMarqueeItem;
