import React from "react";

type TextProps = {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | number; // أو px
  color?: string;
  weight?: "thin" | "normal" | "bold" | number;
  className?: string;
};

const Text: React.FC<TextProps> = ({
  children,
  size = "md",
  color = "white",
  weight = "normal",
  className = "",
}) => {
  // نخلي حجم الخط responsive
  let style: React.CSSProperties = {
    color,
    fontWeight: weight,
    lineHeight: 1.6,
  };

  if (typeof size === "number") {
    // استخدام clamp لجعل الحجم responsive
    style.fontSize = `clamp(${Math.floor(size * 0.8)}px, ${size * 0.2}vw, ${size}px)`;
  }

  let tailwindClass = "";
  if (size === "sm") tailwindClass = "text-sm md:text-base";
  else if (size === "md") tailwindClass = "text-base md:text-lg";
  else if (size === "lg") tailwindClass = "text-lg md:text-xl";

  return (
    <p style={style} className={`${tailwindClass} ${className}`}>
      {children}
    </p>
  );
};

export default Text;

// {/* <Text size={20} weight={400} color="white">
//   همه العقارية ...
// </Text> */}
