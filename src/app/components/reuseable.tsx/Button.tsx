"use client";

import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        bg-transparent
        text-white
        border border-white
        px-6 md:px-8
        py-2 md:py-2.5
        rounded-md
        w-full sm:w-fit
        text-sm md:text-base
        underline decoration-white underline-offset-2
        hover:bg-white/10
        transition
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
