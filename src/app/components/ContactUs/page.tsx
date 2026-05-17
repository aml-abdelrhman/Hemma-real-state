"use client";

import React, { useState } from "react";
import { useIntl } from "react-intl";

const ContactUs: React.FC = () => {
  const intl = useIntl();
  const locale = intl.locale;
  const isRtl = locale === "ar";

  // حالة حقول الإدخال
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // النصوص باللغتين للتحكم الكامل والدقيق
  const content = {
    titleFirst: isRtl ? "تواصل" : "Contact",
    titleSecond: isRtl ? "معنا" : "Us",
    subtitle: isRtl 
      ? "نحن هنا لمساعدتك في العثور على عقارك المثالي. تواصل معنا اليوم وسيقوم مستشارونا الخبراء بالرد عليك في أقرب وقت."
      : "We are here to help you find your perfect property. Reach out today, and our expert advisors will get back to you shortly.",
    
    // بيانات الاتصال
    officeTitle: isRtl ? "المقر الرئيسي" : "Head Office",
    officeAddress: isRtl ? "طريق الملك فهد، البرج العقاري، الرياض، المملكة العربية السعودية" : "King Fahd Road, Real Estate Tower, Riyadh, KSA",
    phoneTitle: isRtl ? "اتصل بنا" : "Call Us",
    emailTitle: isRtl ? "البريد الإلكتروني" : "Email Us",
    hoursTitle: isRtl ? "ساعات العمل" : "Business Hours",
    hoursValue: isRtl ? "الأحد - الخميس: 9:00 ص - 6:00 م" : "Sunday - Thursday: 9:00 AM - 6:00 PM",

    // حقول النموذج
    labelName: isRtl ? "الاسم الكامل" : "Full Name",
    labelEmail: isRtl ? "البريد الإلكتروني" : "Email Address",
    labelPhone: isRtl ? "رقم الجوال" : "Phone Number",
    labelSubject: isRtl ? "الموضوع" : "Subject",
    labelMessage: isRtl ? "رسالتك" : "Your Message",
    placeholderMessage: isRtl ? "اكتب تفاصيل استفسارك هنا..." : "Describe your inquiry here...",
    btnSubmit: isRtl ? "إرسال الرسالة" : "Send Message",
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, name: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // هنا يتم ربط الـ API الخاص بالإرسال
    console.log("Submitted Data:", formData);
  };

  return (
    <section 
      dir={isRtl ? "rtl" : "ltr"} 
      className="min-h-screen pt-32 pb-20 bg-[#EBECEF] text-black relative overflow-hidden"
    >
      {/* تأثير ضوئي هندسي ناعم في الخلفية لمنح عمق فخم */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1450px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* العناوين الرئيسية */}
        <div className="max-w-3xl mb-16 animate-fade-in">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
            {content.titleFirst} <span className="font-light text-gray-600">{content.titleSecond}</span>
          </h1>
          <p className="text-sm font-light leading-relaxed text-gray-600 md:text-base">
            {content.subtitle}
          </p>
        </div>

        {/* شبكة المحتوى المكونة من قسمين */}
        <div className="grid items-start grid-cols-1 gap-12 lg:grid-cols-12">
          
          {/* القسم الأيسر/الأيمن: بيانات الاتصال الفاخرة (4 أعمدة) */}
          <div className="space-y-6 lg:col-span-4">
            
            {/* بطاقة العنوان */}
            <div className="p-8 bg-white/60 backdrop-blur-md border border-white/80 rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.02)] transition-all duration-300 hover:bg-white">
              <div className="flex items-center justify-center w-10 h-10 mb-5 text-white bg-black shadow-sm rounded-xl">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <h3 className="mb-2 text-base font-bold">{content.officeTitle}</h3>
              <p className="text-xs font-light leading-relaxed text-gray-600 md:text-sm">{content.officeAddress}</p>
            </div>

            {/* بطاقة الهاتف والإيميل */}
            <div className="p-8 bg-white/60 backdrop-blur-md border border-white/80 rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.02)] transition-all duration-300 hover:bg-white">
              <div className="flex items-center justify-center w-10 h-10 mb-5 text-white bg-black shadow-sm rounded-xl">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <h3 className="mb-3 text-base font-bold">{content.phoneTitle}</h3>
              <p className="inline-block mb-4 text-xs font-semibold text-gray-800 md:text-sm dir-ltr">+966 11 000 0000</p>
              
              <div className="h-[1px] bg-black/5 my-4" />
              
              <h3 className="mt-4 mb-2 text-base font-bold">{content.emailTitle}</h3>
              <p className="text-xs font-light text-gray-600 md:text-sm">info@hemma-realestate.com</p>
            </div>

            {/* بطاقة ساعات العمل */}
            <div className="p-8 bg-white/60 backdrop-blur-md border border-white/80 rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.02)] transition-all duration-300 hover:bg-white">
              <div className="flex items-center justify-center w-10 h-10 mb-5 text-white bg-black shadow-sm rounded-xl">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <h3 className="mb-2 text-base font-bold">{content.hoursTitle}</h3>
              <p className="text-xs font-light text-gray-600 md:text-sm">{content.hoursValue}</p>
            </div>

          </div>

          {/* القسم الأيمن/الأيسر: فورم التواصل الذكي والنظيف (8 أعمدة) */}
          <div className="lg:col-span-8">
            <form 
              onSubmit={handleSubmit}
              className="p-8 md:p-10 bg-white border border-gray-200/60 rounded-[32px] shadow-[0_30px_70px_rgba(0,0,0,0.03)] space-y-6"
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* حقل الاسم */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold tracking-wider text-gray-700 uppercase">{content.labelName}</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-5 py-4 bg-[#EBECEF]/40 border border-gray-200/80 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black focus:bg-white text-sm transition-all duration-300"
                  />
                </div>

                {/* حقل البريد الإلكتروني */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold tracking-wider text-gray-700 uppercase">{content.labelEmail}</label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-5 py-4 bg-[#EBECEF]/40 border border-gray-200/80 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black focus:bg-white text-sm transition-all duration-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* حقل الجوال */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold tracking-wider text-gray-700 uppercase">{content.labelPhone}</label>
                  <input 
                    type="tel" 
                    required
                    className="w-full px-5 py-4 bg-[#EBECEF]/40 border border-gray-200/80 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black focus:bg-white text-sm transition-all duration-300 text-left dir-ltr"
                  />
                </div>

                {/* حقل الموضوع */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold tracking-wider text-gray-700 uppercase">{content.labelSubject}</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-5 py-4 bg-[#EBECEF]/40 border border-gray-200/80 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black focus:bg-white text-sm transition-all duration-300"
                  />
                </div>
              </div>

              {/* حقل الرسالة */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold tracking-wider text-gray-700 uppercase">{content.labelMessage}</label>
                <textarea 
                  rows={5}
                  required
                  placeholder={content.placeholderMessage}
                  className="w-full px-5 py-4 bg-[#EBECEF]/40 border border-gray-200/80 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black focus:bg-white text-sm transition-all duration-300 resize-none placeholder-gray-400"
                />
              </div>

              {/* زر الإرسال الحاسم باللون الأسود الملكي */}
              <button 
                type="submit"
                className="w-full py-4.5 bg-black text-white font-bold text-sm rounded-2xl shadow-md hover:bg-gray-900 active:scale-[0.99] transition-all duration-300 mt-4 flex items-center justify-center gap-2 group"
              >
                {content.btnSubmit}
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className={`transition-transform duration-300 ${isRtl ? 'group-hover:-translate-x-1 rotate-180' : 'group-hover:translate-x-1'}`}
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactUs;