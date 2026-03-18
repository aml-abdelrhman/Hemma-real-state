"use client";

import React from "react";
import Image from "next/image";

const HeroPage: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <div className="absolute w-full h-full">
        <Image
          src="/images/heroo.png.png"
          alt="Hero"
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "top" }}
          priority
        />
      </div>

      <div
        className="absolute bg-[#60708E] rounded-full pointer-events-none z-0"
        style={{
          width: "30vw",
          height: "30vw",
          right: "-8vw",
          top: "-10vw",
          filter: "blur(51px)",
        }}
      ></div>

      {/* Ellipse 803 */}
      <div
        className="absolute bg-[#8695B6] rounded-full pointer-events-none z-0 overflow-x-hidden"
        style={{
          width: "32vw",
          height: "30vw",
          left: "-8vw",
          top: "-8vw",
          filter: "blur(21px)",
        }}
      ></div>
    </div>
  );
};

export default HeroPage;
