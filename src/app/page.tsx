import Hero from './components/Hero';
import LatestProjects from './components/LatestProjects';
import BestSellerProjects from './components/BestSellerProjects';
import FavouriteProjects from './components/fav-pro';
import Partners from './components/Partners';


export default function Home() {
  return (
    <>
      <Hero />
      <LatestProjects  />
      <FavouriteProjects />
      <BestSellerProjects />
      <Partners />

    </>
  );
}
