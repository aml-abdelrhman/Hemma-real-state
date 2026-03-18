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

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
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
            className="text-4xl md:text-7xl font-bold font-['GE_Dinar_Two'] mb-8 drop-shadow-lg"
          >
            {intl.formatMessage({ id: `projects.${project.slug}.title` })}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-6 justify-center"
          >
            <button className="bg-[#683C21] hover:bg-[#8B5E3C] text-white px-10 py-4 rounded-full transition-all shadow-xl hover:scale-105 active:scale-95 font-bold">
              {intl.formatMessage({ id: "project.downloadBrochure" })}
            </button>
            <button className="backdrop-blur-md border-2 border-white/50 hover:bg-white hover:text-[#683C21] text-white px-10 py-4 rounded-full transition-all shadow-xl font-bold">
              {intl.formatMessage({ id: "project.viewOnMap" })}
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. Key Stats */}
      <section className="container mx-auto px-4 -mt-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
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
              className="bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-sm border border-white flex flex-col items-center text-center"
            >
              <p className="text-[#C9AA7B] text-xs font-bold mb-2 uppercase tracking-tighter">
                {/* إذا كان السطر يعرض معلومة كاملة مثل "8 أدوار" نترك العنوان فارغاً أو نضع كلمة "تفاصيل" */}
                {item.isFullText ? (locale === "ar" ? "الارتفاع" : "Levels") : intl.formatMessage({ id: item.label })}
              </p>

              <p className="text-[#683C21] text-xl font-black italic tracking-widest leading-none">
                {item.isFullText
                  ? intl.formatMessage({ id: item.slugKey })
                  : intl.formatMessage({ id: item.val })}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="container mx-auto px-6 mt-32 space-y-32">

        {/* 3. Details & Gallery Section */}
        <section className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4 space-y-8">
            <h2 className="text-4xl font-bold text-[#683C21] font-['GE_Dinar_Two'] leading-tight">
              {locale === "ar" ? "تفاصيل" : "Details of"} <br />
              <span className="text-[#C9AA7B]">{locale === "ar" ? "التحفة المعمارية" : "Architectural Masterpiece"}</span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg italic">
              {intl.formatMessage({ id: `projects.${project.slug}.details` })}
            </p>
            <div className="pt-8 border-t border-[#C9AA7B]/20">
              <div className="flex items-center gap-4 text-[#683C21]">
                <span className="w-12 h-[1px] bg-[#683C21]"></span>
                <span className="font-bold tracking-widest uppercase text-sm">Luxury Experience</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1.1}
              loop
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              breakpoints={{ 768: { slidesPerView: 1.5 } }}
              className="rounded-[2.5rem] shadow-2xl gallery-swiper"
            >
              {project.gallery?.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className="relative h-[500px] w-full group overflow-hidden">
                    <Image src={img} alt="Gallery" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* 4. Floor Plans */}
        <section className="bg-white py-24 px-8 rounded-[4rem] shadow-sm border border-[#F1E9DB]">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#683C21] mb-4 font-['GE_Dinar_Two']">
              {intl.formatMessage({ id: "project.floorPlans" })}
            </h2>
            <p className="text-[#C9AA7B]">
              {locale === "ar" ? "مخططات مدروسة بعناية لتناسب أسلوب حياتك" : "Carefully studied plans to suit your lifestyle"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {project.floorPlans?.map((plan, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="group cursor-pointer"
              >
                <div className="relative h-80 bg-[#F9F6F0] rounded-3xl p-8 mb-6 overflow-hidden flex items-center justify-center">
                  <Image
                    src={plan.img}
                    alt="Floor Plan"
                    fill
                    className="object-contain p-8 group-hover:scale-105 transition-all"
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
        <section className="grid lg:grid-cols-2 gap-12 items-stretch">
          <div className="bg-[#683C21] p-12 rounded-[3rem] text-white flex flex-col justify-center shadow-2xl">
            <h3 className="text-3xl font-bold mb-10">
              {intl.formatMessage({ id: "project.features" })}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {['feature1', 'feature2', 'feature3', 'feature4'].map((feat, i) => (
                <div key={i} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-[#C9AA7B] transition-colors">
                    <span className="text-2xl">🏠</span>
                  </div>
                  <span className="text-lg font-light tracking-wide">
                    {intl.formatMessage({ id: `project.${feat}` })}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group">
            <Image
              src="/images/mapp.png"
              alt="Map"
              fill
              className="object-cover group-hover:scale-105 transition-all duration-1000 grayscale hover:grayscale-0"
            />
            <div className="absolute top-8 left-8">
              <div className="bg-white/90 backdrop-blur px-8 py-6 rounded-3xl shadow-2xl border-b-4 border-[#C9AA7B]">
                <p className="text-[#683C21] font-black text-2xl mb-1 italic">
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