'use client';

import React from "react";
import HeroArrows from "../../components/Arrows"; // عدلي المسار حسب مشروعك
import ReusableText from "../../components/ReusableText";

const HeroSection: React.FC = () => {
  const handlePrev = () => {
    console.log("Previous clicked");
  };

  const handleNext = () => {
    console.log("Next clicked");
  };

  return (
    <section className="w-full px-4 md:px-12 lg:px-24 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
      {/* ====== TEXT ====== */}
      <ReusableText
        firstWord="مرحبا"
        secondWord="بكم"
        thirdWord="في الموقع"
        firstFontSize={28}
        secondFontSize={28}
        thirdFontSize={28}
        firstColor="#4297a7"
        secondColor="#000"
        thirdColor="#000"
        className="flex-1 text-center md:text-left"
      />

      {/* ====== ARROWS ====== */}
      <div className="flex gap-4 md:gap-6">
        <HeroArrows
          onPrev={handlePrev}
          onNext={handleNext}
          leftColor="#4297a7"
          leftBorderColor="#4297a7"
          leftHoverBackground="#4297a7"
          leftHoverColor="#fff"
          rightColor="#4297a7"
          rightBorderColor="#4297a7"
          rightHoverBackground="#4297a7"
          rightHoverColor="#fff"
        />
      </div>
    </section>
  );
};

export default HeroSection;
