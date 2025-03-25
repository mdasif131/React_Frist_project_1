import './App.css';
import Allocute from './Component/Allocute';
import ComLogo from './Component/ComLogo';
import Embrace from './Component/Embrace';
import Footer from './Component/Footer';

import Header from './Component/Header';
import Hero from './Component/Hero';
import Salider from './Component/Salider';
import Service from './Component/Service';
import Train from './Component/Train';
function App() {
  return (
    <>
      <main className="overflow-x-hidden">
        <Header />

        <div className="w-ful max-w-[1400px] mx-auto py-5">
          <Hero />
          <ComLogo />
          <div className="space-y-[80px]">
            <Service />
            <Train />
            <Salider />
            <Allocute />
            <Embrace />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}

export default App;
