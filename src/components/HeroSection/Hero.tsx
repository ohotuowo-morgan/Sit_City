import { ArrowLeft, ArrowRight } from 'lucide-react'; 
import { useState } from 'react';
import { useRef } from 'react';

import Testimonials from '../Testimonial/Testimonial';
import Carousel from '../Carousel/Carousel';
import WhyChooseUs from '../WhyChooseUs';
import './Hero.css';


const carousels = [
  { id: 1, title: "Yellow Beyani Chair", price: "$ 282 USD", location: "Amani Crested", image: "../images/location.svg", chairtype: "Single chair", background: "../images/yellow.jpg" },
  { id: 2, title: "Green Beyani Chair", price: "$ 282 USD", location: "Amani Crested", image: "../images/location.svg", chairtype: "Single chair", background: "../images/green.jpg" },
  { id: 3, title: "Bour Couple Chair", price: "$ 282 USD", location: "Amani Crested", image: "../images/location.svg", chairtype: "Double chair", background: "../images/bour.jpg" },
  { id: 4, title: "Blue Beyani Chair", price: "$ 282 USD", location: "Amani Crested", image: "../images/location.svg", chairtype: "Single chair", background: "../images/blue.jpg" },
]



const HeroSection = () => {
  const [isShrunk, setIsShrunk] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Shrink logic
  const toggleImageSize = () => {
    setIsShrunk(!isShrunk);
  }

  //scroll logic
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -350 : 350;

      current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };


  return (
    <div>
      <section className="hero-container">
        <div className="hero-text">
          <h1>
            Luxury Design <br />
            Unique, Durable <br />
            Comfortable Chairs.
          </h1>

          <div>
            <p className="hero-desc">
              Our chairs are well crafted to suit <br />
              any space, crafted and <span className="highlight">sculpted</span> to <br />
              your desired taste that will effortlessly <br />
              fit your space.
            </p>
          </div>
        </div>


        <div className="hero-image-wrapper">
          <img
            src="/images/hero.jpg"
            alt="Luxury Beige Chair"
            className="main-hero-img"
          />

          <div className="cutout-wrapper">
            <button className="contact-pill-btn">
              Contact Us
              <span className="arrow">↗</span>
            </button>
          </div>

          <div className='chair-frame'>
            <img src="../images/chair1.png" alt="sofa" className='couche-icon' />
            <img src="../images/chair2.png" alt="couche" className='couche-icon' />
            <img src="../images/chair3.png" alt="chair" className='couche-icon' />
          </div>
        </div>


      </section>

      <section className='second-section'>
        <div className='row-display'>
          <img src="../images/Rectangle.png" alt="" className='row-image' />

          <p className='row-text'>
            At SitCity, we meticulously handcraft each piece using only the finest
            materials, from supple, full-grain leather to sustainably sourced exotic
            woods. Our designs are a harmonious blend of timeless elegance and modern
            innovation, ensuring that every chair not only looks stunning but also provides
            an unparalleled seating experience.
          </p>
        </div>

        <div className='lower-section'>
          <img src="../images/blue-chair.png" alt="blue chair" className='lower-image' />
          <img src="../images/beige-chair.png" alt="beige chair" className='lower-image' />
        </div>
      </section>

      <section className='carousel-section'>

        <div className='carousel-header'>

          <div>
            <p className='sub-title'>DISCOVER SIT CITY</p>
            <h3>
              EXPLORE OUR <br />
              LUXURY CHAIRS
            </h3>
          </div>

          <span>View More</span>

        </div>


        <div className='carousel-container' ref={scrollRef}>

          {carousels.map((carousel) =>

            <Carousel
              key={carousel.id}
              title={carousel.title}
              price={carousel.price}
              location={carousel.location}
              image={carousel.image}
              background={carousel.background}
              chairtype={carousel.chairtype}
            />

          )}
        </div>

        <div className='controls-wrapper'>
          <div className="testimonial-controls">
            <button onClick={() => scroll('left')} className="nav-btn">
              <ArrowLeft size={20} color="#000" />
            </button>
            <button onClick={() => scroll('right')}className="nav-btn">
              <ArrowRight size={20} color="#000" />
            </button>
          </div>
          {/* <ArrowLeft size={20} color="#000" onClick={() => scroll('left')}/> */}
          {/* <ArrowRight size={20} color="#000" onClick={() => scroll('right')}/> */}
          {/* <span className='arrow-btn' onClick={() => scroll('left')}><img src="../images/chevondown.svg" alt="left arrow" className='leftarrow' /></span> */}
          {/* <span className='arrow-btn' onClick={() => scroll('right')}><img src="../images/chevondown.svg" alt="rigth arrow" className='rightarrow' /></span> */}
        </div>

      </section>

      <WhyChooseUs />

      <section className='foldable'>
        <img 
        src="../images/Frame.png" 
        alt="foldabel img" 
        onClick={toggleImageSize}
        // onClick={() => setIsShrunk(!isShrunk)}
        className= {`fimage ${isShrunk ? 'shrunk' : ''}`} />
      </section>

      <Testimonials />

    </div>
  );
};

export default HeroSection;