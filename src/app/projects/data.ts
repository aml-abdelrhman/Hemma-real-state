export type Project = {
  id: number;
  slug: string;
  hero: string;
  gallery: string[];
  map: {
    lat: number;
    lng: number;
  };
  units?: {
    area: string;
  }[];
  floorPlans?: {
    img: string;
    title: string;
  }[];
};

export const projectsData: Project[] = [
  {
    id: 1,
    slug: 'project1',
    hero: '/images/hero5.png',
    gallery: [
      '/images/carousel2.webp',
      '/images/hero5.png',
      '/images/hero2.png',
      '/images/carousel.webp',
      '/images/carousel4.webp',
      '/images/carousel3.webp',
      '/images/carousel5.webp',
      '/images/hero7.png'
    ],
    map: { lat: 24.7925, lng: 46.7277 },
    units: [
      { area: "150" },
      { area: "200" }
    ],
    floorPlans: [
      { img: "/images/piic.jpeg", title: "Ground Floor" }
    ]
  },
  {
    id: 2,
    slug: 'project2',
    hero: '/images/first1.png',
    gallery: [
      '/images/hero5.png',
      '/images/carousel5.webp',
      '/images/carousel.webp',
      '/images/hero2.png',
      '/images/hero7.png',
      '/images/carousel2.webp',
      '/images/carousel4.webp',
      '/images/carousel3.webp'
    ],
    map: { lat: 21.572972, lng: 46.7300 },
    units: [
      { area: "100" },
      { area: "100" }
    ],
    floorPlans: [{ img: "/images/pic.jpeg", title: "Main Floor" }]
  },
  {
    id: 3,
    slug: 'project3',
    hero: '/images/hero5.png',
    gallery: [
      '/images/carousel4.webp',
      '/images/carousel2.webp',
      '/images/carousel.webp',
      '/images/hero7.png',
      '/images/hero2.png',
      '/images/carousel3.webp',
      '/images/hero5.png',
      '/images/carousel5.webp'
    ],
    map: { lat: 24.7940, lng: 46.7250 },
    units: [
      { area: "400" },
      { area: "300" }
    ],
    floorPlans: [{ img: "/images/pic.jpeg", title: "Main Floor" }]
  },
  {
    id: 4,
    slug: 'project4',
    hero: '/images/carousel.webp',
    gallery: [
      '/images/carousel5.webp',
      '/images/hero5.png',
      '/images/carousel2.webp',
      '/images/carousel4.webp',
      '/images/hero7.png',
      '/images/hero2.png',
      '/images/carousel3.webp',
      '/images/carousel.webp'
    ],
    map: { lat: 24.7950, lng: 46.7280 },
    units: [],
    floorPlans: [{ img: "/images/pic.jpeg", title: "Main Floor" }]
  },
  {
    id: 5,
    slug: 'project5',
    hero: '/images/carousel2.webp',
    gallery: [
      '/images/carousel.webp',
      '/images/hero7.png',
      '/images/hero5.png',
      '/images/carousel5.webp',
      '/images/hero2.png',
      '/images/carousel2.webp',
      '/images/carousel3.webp',
      '/images/carousel4.webp'
    ],
    map: { lat: 24.7960, lng: 46.7290 },
    units: [],
    floorPlans: [{ img: "/images/pic.jpeg", title: "Main Floor" }]
  },
  {
    id: 6,
    slug: 'project6',
    hero: '/images/carousel3.webp',
    gallery: [
      '/images/hero5.png',
      '/images/carousel2.webp',
      '/images/carousel5.webp',
      '/images/carousel3.webp',
      '/images/hero2.png',
      '/images/carousel.webp',
      '/images/carousel4.webp',
      '/images/hero7.png'
    ],
    map: { lat: 24.7970, lng: 46.7310 },
    units: [],
    floorPlans: [{ img: "/images/pic.jpeg", title: "Main Floor" }]
  },
  {
    id: 7,
    slug: 'project7',
    hero: '/images/carousel4.webp',
    gallery: [
      '/images/carousel3.webp',
      '/images/carousel2.webp',
      '/images/carousel5.webp',
      '/images/hero7.png',
      '/images/carousel4.webp',
      '/images/hero2.png',
      '/images/carousel.webp',
      '/images/hero5.png'
    ],
    map: { lat: 24.7980, lng: 46.7320 },
    units: [],
    floorPlans: [{ img: "/images/pic.jpeg", title: "Main Floor" }]
  },
  {
    id: 8,
    slug: 'project8',
    hero: '/images/carousel5.webp',
    gallery: [
      '/images/hero2.png',
      '/images/hero7.png',
      '/images/carousel2.webp',
      '/images/carousel4.webp',
      '/images/carousel5.webp',
      '/images/carousel.webp',
      '/images/hero5.png',
      '/images/carousel3.webp'
    ],
    map: { lat: 24.7990, lng: 46.7330 },
    units: [],
    floorPlans: [{ img: "/images/pic.jpeg", title: "Main Floor" }]
  },
];