"use client";

import React from "react";
import Image from "next/image";
import { useIntl } from "react-intl";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroPage: React.FC = () => {
  const intl = useIntl();
  const imageSrc = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop";

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Image Layer - Static with Fade-in only */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src={imageSrc}
          alt="Luxury Architecture"
          fill
          className="object-cover"
          priority
        />
        {/* Dark linear gradient overlay for text readability */}
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40" />
      </motion.div>

      {/* Content Layer */}
      <div className="container relative z-10 flex items-center justify-center h-full px-6 mx-auto md:px-12">
        <div className="max-w-4xl pt-20 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-[1px] bg-[#C9AA7B]" />
              <span className="text-[#C9AA7B] uppercase tracking-[0.4em] text-[10px] md:text-xs font-black">
                {intl.formatMessage({ id: "hero.slide3.tag" })}
              </span>
              <div className="w-12 h-[1px] bg-[#C9AA7B]" />
            </div>

            <h1 className="mb-8 text-5xl font-bold leading-none tracking-tighter md:text-8xl">
              {intl.formatMessage({ id: "hero.slide3.title1" })}{" "}
              <span className="text-[#C9AA7B] italic font-light drop-shadow-lg">
                {intl.formatMessage({ id: "hero.slide3.title2" })}
              </span>
            </h1>

            <p className="max-w-2xl mx-auto mb-12 text-base font-light leading-relaxed md:text-xl text-white/90">
              {intl.formatMessage({ id: "hero.slide3.description" })}
            </p>

            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
              <Link
                href="/LatestProjects"
                className="group relative px-10 py-4 bg-[#C9AA7B] text-[#683C21] font-bold rounded-full text-sm uppercase tracking-widest overflow-hidden transition-all duration-500"
              >
                <span className="relative z-10">{intl.formatMessage({ id: "hero.cta.projects" })}</span>
                <div className="absolute inset-0 transition-transform duration-500 translate-y-full bg-white group-hover:translate-y-0" />
              </Link>

              <Link
                href="/components/Interest"
                className="px-10 py-4 border border-white/30 backdrop-blur-md text-white font-bold rounded-full text-sm uppercase tracking-widest hover:bg-white hover:text-[#683C21] transition-all duration-500"
              >
                {intl.formatMessage({ id: "footer.cta" })}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Blur Overlays - Fixed Position */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[#683C21]/20 blur-[120px] rounded-full pointer-events-none z-20" />
      <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-[#C9AA7B]/10 blur-[100px] rounded-full pointer-events-none z-20" />
    </section>
  );
};

export default HeroPage;
