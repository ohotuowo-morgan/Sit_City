import './Hero.css';

const HeroSection = () => {
  return (
    <section className="hero-container">
      <div className="hero-text">
        <h1>
          Luxury Design <br />
          Unique, Durable <br />
          Comfortable Chairs.
        </h1>
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

      {/* <div>
        <p>
          Our chairs are well crafter to suit
          any space, crafter and sculpted to
          your desired taste that will effortlessly
          fit your space.
        </p>
      </div> */}
    </section>
  );
};

export default HeroSection;