import "./App.css";
import TopHeader from "./components/Header/TopHeader";
import BottomHeader from "./components/Header/BottomHeader";

function App() {
  return (
    <div className="w-full bg-[#1e28320d] h-[60px]">
      <TopHeader />
      <BottomHeader />
    </div>
  );
}

export default App;
