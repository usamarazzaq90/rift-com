import "./App.css";
import TopHeader from "./components/Header/TopHeader";
import BottomHeader from "./components/Header/BottomHeader";
import Row from "./components/common/Row";
import HeroSection from "./components/Home/HeroSection";

function App() {
  return (
    <div className="w-full bg-[#1e28320d] h-[60px]">
      <TopHeader />
      <BottomHeader />
      <HeroSection />
    </div>
  );
}

export default App;
