"use client";

import React from "react";
import { useIntl } from "react-intl";

const ContactPage = () => {
  const intl = useIntl();
  const locale = intl.locale;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // logic for handling interest registration
    alert(locale === "ar" ? "تم استلام طلبك بنجاح! سنتواصل معك قريباً." : "Interest registered! We will contact you soon.");
  };

  return (
    <main 
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="min-h-screen bg-gray-50 py-20 px-4"
    >
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Information Section */}
        <div className="md:w-1/3 bg-[#AB957E] p-8 text-white flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-6">
              {locale === "ar" ? "سجل اهتمامك" : "Register Interest"}
            </h1>
            <p className="text-sm opacity-90 leading-relaxed mb-8">
              {locale === "ar" 
                ? "يسعدنا تواصلك معنا. اترك بياناتك وسيقوم فريقنا بمساعدتك في اختيار العقار الأنسب لك."
                : "We are happy to hear from you. Leave your details and our team will help you find the perfect property."}
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="text-xl">📞</span>
              <div>
                <p className="text-xs opacity-70">{locale === "ar" ? "اتصل بنا" : "Call us"}</p>
                <p className="font-medium">+966 500 000 000</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-xl">📧</span>
              <div>
                <p className="text-xs opacity-70">{locale === "ar" ? "البريد الإلكتروني" : "Email"}</p>
                <p className="font-medium">info@hemma.sa</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="md:w-2/3 p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-600">
                  {locale === "ar" ? "الاسم" : "Name"}
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-100 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#AB957E] focus:outline-none transition-all"
                  placeholder={locale === "ar" ? "اسمك الكامل" : "Full Name"}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-600">
                  {locale === "ar" ? "الجوال" : "Phone"}
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-100 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#AB957E] focus:outline-none transition-all"
                  placeholder="05xxxxxxxx"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-600">
                {locale === "ar" ? "البريد الإلكتروني" : "Email"}
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-100 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#AB957E] focus:outline-none transition-all"
                placeholder="name@example.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-600">
                {locale === "ar" ? "ملاحظات إضافية" : "Additional Notes"}
              </label>
              <textarea
                rows={3}
                className="w-full px-4 py-3 rounded-lg border border-gray-100 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#AB957E] focus:outline-none transition-all resize-none"
                placeholder={locale === "ar" ? "أي تفاصيل أخرى تود ذكرها..." : "Any other details..."}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#AB957E] text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:bg-[#9c8873] active:scale-[0.97] transition-all duration-200"
            >
              {locale === "ar" ? "إرسال الآن" : "Send Now"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;