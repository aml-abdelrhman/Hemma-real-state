"use client";

import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useIntl } from "react-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

// CSS Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { projectsData } from "../../projects/data";

export default function ProjectDetails() {
  const { slug } = useParams();
  const intl = useIntl();
  const locale = intl.locale;

  const project = projectsData.find((p) => p.slug === slug);

  if (!project) return (
    <div className="h-screen flex items-center justify-center bg-[#F9F6F0] text-[#683C21] font-bold text-2xl">
      {intl.formatMessage({ id: "project.notFound" })}
    </div>
  );

  return (
    <main dir={locale === "ar" ? "rtl" : "ltr"} className="bg-[#FAF9F6] min-h-screen pb-24 overflow-x-hidden">

      {/* 1. Hero Section */}
      <section className="relative h-[85vh] w-full overflow-hidden">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src={project.hero}
            alt="Hero"
            fill
            priority
            className="object-cover brightness-[0.7]"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#FAF9F6]/100" />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#C9AA7B] uppercase tracking-widest text-sm mb-4 font-bold"
          >
            {intl.formatMessage({ id: "uxx.first" })} {intl.formatMessage({ id: "uxx.second" })}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-7xl font-bold font-['GE_Dinar_Two'] mb-8 drop-shadow-lg"
          >
            {intl.formatMessage({ id: `projects.${project.slug}.title` })}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <button 
              onClick={() => document.getElementById('floor-plans')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#683C21] hover:bg-[#8B5E3C] text-white px-8 md:px-10 py-3 md:py-4 rounded-full transition-all shadow-xl hover:scale-105 active:scale-95 font-bold text-sm md:text-base"
            >
              {locale === "ar" ? "استكشاف المخطط" : "Explore Floor Plan"}
            </button>
            <button 
              onClick={() => document.getElementById('project-map')?.scrollIntoView({ behavior: 'smooth' })}
              className="backdrop-blur-md border-2 border-white/50 hover:bg-white hover:text-[#683C21] text-white px-8 md:px-10 py-3 md:py-4 rounded-full transition-all shadow-xl font-bold text-sm md:text-base"
            >
              {intl.formatMessage({ id: "project.viewOnMap" })}
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. Key Stats */}
      <section className="container relative z-10 px-4 mx-auto -mt-16">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
          {[
            { label: "project.unitType", val: "project.unitTypeVal" },
            { label: "project.sqm", val: "project.sqmVal" },
            // هنا نستخدم slug المشروع لجلب عدد الأدوار الخاص به
            { label: "projects.project1.description.floors", isFullText: true, slugKey: `projects.${project.slug}.description.floors` },
            { label: "project.status", val: "project.statusVal" }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="flex flex-col items-center p-4 text-center border border-white shadow-sm md:p-8 bg-white/80 backdrop-blur-lg rounded-2xl md:rounded-3xl"
            >
              <p className="text-[#C9AA7B] text-xs font-bold mb-2 uppercase tracking-tighter">
                {/* إذا كان السطر يعرض معلومة كاملة مثل "8 أدوار" نترك العنوان فارغاً أو نضع كلمة "تفاصيل" */}
                {item.isFullText ? (locale === "ar" ? "الارتفاع" : "Levels") : intl.formatMessage({ id: item.label })}
              </p>

              <p className="text-[#683C21] text-base md:text-xl font-black italic md:tracking-widest leading-none">
                {item.isFullText
                  ? intl.formatMessage({ id: item.slugKey })
                  : intl.formatMessage({ id: item.val })}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="container px-6 mx-auto mt-16 space-y-20 md:mt-32 md:space-y-32">

        {/* 3. Details & Gallery Section */}
        <section className="grid items-start gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-6 lg:col-span-4 md:space-y-8">
            <h2 className="text-2xl md:text-4xl font-bold text-[#683C21] font-['GE_Dinar_Two'] leading-tight text-center lg:text-start">
              {locale === "ar" ? "تفاصيل" : "Details of"} <br />
              <span className="text-[#C9AA7B]">{locale === "ar" ? "التحفة المعمارية" : "Architectural Masterpiece"}</span>
            </h2>
            <p className="text-base italic leading-relaxed text-center text-gray-600 md:text-lg lg:text-start">
              {intl.formatMessage({ id: `projects.${project.slug}.details` })}
            </p>
            <div className="pt-6 md:pt-8 border-t border-[#C9AA7B]/20">
              <div className="flex items-center justify-center lg:justify-start gap-4 text-[#683C21]">
                <span className="w-12 h-[1px] bg-[#683C21]"></span>
                <span className="text-sm font-bold tracking-widest uppercase">Luxury Experience</span>
              </div>
            </div>
          </div>

          <div className="min-w-0 lg:col-span-8">
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={15}
              slidesPerView={1}
              loop
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              breakpoints={{ 768: { slidesPerView: 1.5, spaceBetween: 20 } }}
              className="rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl gallery-swiper"
            >
              {project.gallery?.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className="relative h-[250px] md:h-[500px] w-full group overflow-hidden">
                    <Image src={img} alt="Gallery" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* 4. Floor Plans */}
        <section id="floor-plans" className="bg-white py-12 md:py-24 px-4 md:px-8 rounded-[2.5rem] md:rounded-[4rem] shadow-sm border border-[#F1E9DB]">
          <div className="mb-10 text-center md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#683C21] mb-4 font-['GE_Dinar_Two']">
              {intl.formatMessage({ id: "project.floorPlans" })}
            </h2>
            <p className="text-[#C9AA7B]">
              {locale === "ar" ? "مخططات مدروسة بعناية لتناسب أسلوب حياتك" : "Carefully studied plans to suit your lifestyle"}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 md:gap-12">
            {project.floorPlans?.map((plan, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="cursor-pointer group"
              >
                <div className="relative h-64 md:h-80 bg-[#F9F6F0] rounded-3xl p-6 md:p-8 mb-4 md:mb-6 overflow-hidden flex items-center justify-center">
                  <Image
                    src={plan.img}
                    alt="Floor Plan"
                    fill
                    className="object-contain p-8 transition-all group-hover:scale-105"
                  />
                </div>
                <h4 className="text-[#683C21] font-bold text-center text-xl">{plan.title}</h4>
                <p className="text-center text-[#C9AA7B] text-sm">
                  {locale === "ar" ? "انقر للتكبير" : "Click to expand"}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 5. Features & Map */}
        <section id="project-map" className="grid items-stretch gap-12 lg:grid-cols-2">
          <div className="bg-[#683C21] p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] text-white flex flex-col justify-center shadow-2xl">
            <h3 className="mb-8 text-2xl font-bold text-center md:text-3xl md:mb-10 lg:text-start">
              {intl.formatMessage({ id: "project.features" })}
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8">
              {['feature1', 'feature2', 'feature3', 'feature4'].map((feat, i) => (
                <div key={i} className="flex items-center gap-6 group">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-[#C9AA7B] transition-colors flex-shrink-0">
                    <span className="text-2xl">🏠</span>
                  </div>
                  <span className="text-base font-light tracking-wide md:text-lg">
                    {intl.formatMessage({ id: `project.${feat}` })}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[350px] md:min-h-[500px] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-4 md:border-8 border-white group">
            <Image
              src="/images/mapp.png"
              alt="Map"
              fill
              className="object-cover transition-all duration-1000 group-hover:scale-105 grayscale hover:grayscale-0"
            />
            <div className="absolute top-4 left-4 md:top-8 md:left-8">
              <div className="bg-white/90 backdrop-blur px-6 py-4 md:px-8 md:py-6 rounded-2xl md:rounded-3xl shadow-2xl border-b-4 border-[#C9AA7B]">
                <p className="text-[#683C21] font-black text-lg md:text-2xl mb-1 italic">
                  {intl.formatMessage({ id: `projects.${project.slug}.description.location` })}
                </p>
                <p className="text-[#C9AA7B] font-bold uppercase text-xs tracking-[0.2em]">
                  {locale === "ar" ? "موقع استراتيجي" : "The Prime Location"}
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}