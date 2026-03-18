export interface Project {
  id: number;
  slug: string;
  title: string;
  hero: string;
  details: string;
  description: {
    location: string;
    type: string;
    area: string;
    status: string;
    price: string;
    floors: string;
    availability: string;
    sold: string;
  };
}
