import HeroSection from "@/components/HeroSection/HeroSection";
import PageSearch from "@/components/PageSearch/PageSearch";
import Gallery from "@/components/Gallery/Gallery";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import { getFeaturedRoom } from "@/libs/apis";
import FeaturedRoom from "@/components/FeaturedRoom/FeaturedRoom";

export default async function Home() {
  const featuredRoom = await getFeaturedRoom();

  return(
    <>
      <HeroSection />
      <PageSearch />
      <FeaturedRoom featuredRoom={featuredRoom} />
      <Gallery />
      <NewsLetter />
      {/* NEWS LETTER */}
    </>
  )
}
