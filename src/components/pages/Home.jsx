import Footer from "../Footer";
import BottomHeader from "../Header/BottomHeader";
import TopHeader from "../Header/TopHeader";
import BestSellerProducts from "../Home/BestSellerProducts";
import HeroSection from "../Home/HeroSection";
import PopularProducts from "../Home/PopularProducts";

function Home() {
  return (
    <div className="w-full bg-[#1e28320d] h-[60px]">
      <TopHeader />
      <BottomHeader />
      <HeroSection />
      <PopularProducts />
      <BestSellerProducts />
      <Footer />
    </div>
  );
}

export default Home;
