import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <div className="flex justify-center mt-20">
        <Stats />
      </div>
    </div>
  );
}

export default App;