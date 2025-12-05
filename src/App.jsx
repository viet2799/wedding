import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Couple from './components/Couple';
import Story from './components/Story';
import Gallery from './components/Gallery';
import RSVP from './components/RSVP';
import Location from './components/Location';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
// import MusicPlayer from './components/MusicPlayer'; // Uncomment nếu muốn dùng

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out'
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <div id="hero">
        <Hero />
      </div>
      <div id="couple">
        <Couple />
      </div>
      <div id="story">
        <Story />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <div id="rsvp">
        <RSVP />
      </div>
      <div id="location">
        <Location />
      </div>
      <Footer />
      <ScrollToTop />
      {/* <MusicPlayer /> Uncomment để bật nhạc nền */}
    </div>
  );
}

export default App;
