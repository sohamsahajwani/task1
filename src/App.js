import './App.css';
import Carousel2 from './components/Carousel2';
import Carousel3 from './components/Carousel3';
import Footer from './components/Footer';
import ImageSlider from './components/ImageSlider';
import Innovation from './components/Innovation';
import Navbarr from './components/Navbarr';

function App() {

  return (
    <div className="app">
      <Navbarr/>
      <ImageSlider/>
      <Carousel2/>
      <Innovation/>
      <Carousel3/>
      <Footer/>
    </div>
  );
}

export default App;
