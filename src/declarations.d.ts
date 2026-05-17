// قم بإضافة هذا السطر في البداية لإخبار ESLint بتجاهل منع 'any' في هذا الملف
/* eslint-disable @typescript-eslint/no-explicit-any */

declare module 'swiper/css' {
  const content: any;
  export default content;
}

declare module 'swiper/css/*' {
  const content: any;
  export default content;
}