import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import MissionVision from './sections/MissionVision';
import Values from './sections/Values';
import Advantages from './sections/Advantages';
import Services from './sections/Services';
import SuccessCases from './sections/SuccessCases';
import Products from './sections/Products';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#F9FBF9]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <MissionVision />
        <Values />
        <Advantages />
        <Services />
        <SuccessCases />
        <Products />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
