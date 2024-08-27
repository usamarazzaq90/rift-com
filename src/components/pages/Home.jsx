import Layout from "../common/Layout";
import BottomHeader from "../Header/BottomHeader";
import BestSellerProducts from "../Home/BestSellerProducts";
import HeroSection from "../Home/HeroSection";
import PopularProducts from "../Home/PopularProducts";

function Home() {
  return (
    <Layout>
      <BottomHeader />
      <HeroSection />
      <PopularProducts />
      <BestSellerProducts />
      </Layout>
  );
}

export default Home;
