import "./App.css";
import TopHeader from "./components/Header/TopHeader";
import BottomHeader from "./components/Header/BottomHeader";
import Row from "./components/common/Row";
import HeroSection from "./components/Home/HeroSection";
import Container from "./components/common/Container";
import PopularProducts from "./components/Home/PopularProducts";

function App() {
  return (
    <div className="w-full bg-[#1e28320d] h-[60px]">
      <TopHeader />
      <BottomHeader />
      <HeroSection />
      <PopularProducts />
    </div>
  );
}

export default App;
