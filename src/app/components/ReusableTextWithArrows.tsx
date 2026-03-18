"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ReusableTextWithArrowsProps {
  firstWord?: string;
  secondWord?: string;
  firstColor?: string;
  secondColor?: string;
  className?: string;
  showContent?: boolean;
  onPrev?: () => void;
  onNext?: () => void;
  showArrows?: boolean;
  showBackground?: boolean;
  showIcon?: boolean;
}

const ReusableTextWithArrows: React.FC<ReusableTextWithArrowsProps> = ({
  firstWord = "",
  secondWord = "",
  firstColor = "#8F6126",
  secondColor = "#8F6126",
  showContent = true,
  showArrows = true,
  showBackground = true,
  showIcon = true,
  onPrev,
  onNext,
}) => {
  const [leftHover, setLeftHover] = useState(false);
  const [rightHover, setRightHover] = useState(false);

  return (
    <div className="w-full h-[300px] lg:h-[200px] flex justify-center items-center relative">
      <div className="relative mx-auto max-w-[1311px] w-full flex flex-col md:flex-row items-center justify-between gap-8 z-10 px-5 py-3 h-full">
        {/* النص + أيقونة مع الخلفية */}
        {showContent && (
          <div className="relative flex flex-col items-center justify-center h-full gap-3 md:flex-row">
            {/* الخلفية فقط وراء النص + الأيقونة */}
            {showBackground && (
              <div
                className="absolute top-0 right-0 w-[600px] h-full opacity-30 pointer-events-none"
                style={{
                  backgroundImage: `
        linear-gradient(39.2deg, #F8F4F1 29.47%, rgba(248, 244, 241, 0) 68.12%),
        linear-gradient(0deg, rgba(248, 244, 241, 0) 80.19%, #F8F4F1 100%),
        linear-gradient(90deg, rgba(248, 244, 241, 0) 52.8%, #F8F4F1 100.02%),
        url('/images/bg_removal [Background removed].png')
      `,
                  transform: "rotate(180deg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  zIndex: -1,
                }}
              />
            )}
            {showIcon && (
              <Image
                src="/images/H-icon.png"
                alt="Icon"
                width={60}
                height={60}
              />
            )}{" "}
            <div className="flex font-['GE Dinar Two'] text-[32px] md:text-[35px] font-light gap-1">
              <span style={{ color: firstColor }}>{firstWord}</span>
              <span style={{ color: secondColor }}>{secondWord}</span>
            </div>
          </div>
        )}

        {/* الأسهم */}
        {showArrows && (
          <div
            className={`flex gap-3 mt-10 md:mt-0 ${
              showContent ? "hidden md:flex" : "flex justify-center md:hidden"
            }`}
            style={{ direction: "ltr" }}
          >
            <button
              onClick={onPrev}
              onMouseEnter={() => setLeftHover(true)}
              onMouseLeave={() => setLeftHover(false)}
              className={`w-[51px] h-[51px] rounded-full border border-[#683C21] flex items-center justify-center text-[28px] transition-all ${
                leftHover
                  ? "bg-[#683C21] text-white"
                  : "bg-white text-[#683C21]"
              }`}
            >
              &#8592;
            </button>

            <button
              onClick={onNext}
              onMouseEnter={() => setRightHover(true)}
              onMouseLeave={() => setRightHover(false)}
              className={`w-[51px] h-[51px] rounded-full border border-[#683C21] flex items-center justify-center text-[28px] transition-all ${
                rightHover
                  ? "bg-[#683C21] text-white"
                  : "bg-white text-[#683C21]"
              }`}
            >
              &#8594;
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReusableTextWithArrows;
