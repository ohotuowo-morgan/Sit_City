import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react'; 
import './Testimonial.css';

const testimonialsData = [
  {
    id: 1,
    image: "/images/testimonial1.png",
    profile: "../images/profile.png",
    quote: "I’ve always believed a great chair can transform a room, and the chair I received from SitCity proves it. The leather is incredibly soft, and the chair itself is like a personal retreat. It’s more than just furniture; it’s a piece of art that makes a statement. Worth every single penny.",
    name: "Sarah M",
    role: "Interior Designer"
  },
  {
    id: 2,
    image: "/images/testimonial2.png", 
    profile: "../images/profile2.png",
    quote: "Finding a chair that was both beautiful and comfortable felt impossible until I found SitCity. The design is so unique—it immediately became the focal point of my living room. I get compliments on it from everyone who visits. This chair is a perfect blend of high-end design and luxurious comfort.",
    name: "Olivia B",
    role: "Architect"
  },
  {
    id: 3,
    image: "/images/testimonial3.png", 
    profile: "../images/profile1.png",
    quote: "My SitCity chair has been a game-changer for my home office. After months of use, it still looks and feels brand new. The craftsmanship is truly next-level, with a rock-solid feel that tells you it’s built to last. This isn’t just a purchase; it’s an investment in enduring quality.",
    name: "David R",
    role: "Financial Analyst"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const current = testimonialsData[currentIndex];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        
        {/* LEFT: The Image */}
        <div className="testimonial-image-wrapper" key={`img-${current.id}`}>
          <img 
            src={current.image} 
            alt={`Testimonial from ${current.name}`} 
            className="testimonial-img fade-in" 
          />
        </div>

        {/* RIGHT: The Content */}
        <div className="testimonial-content" key={`content-${current.id}`}>
          <p className="quote-text fade-in">“{current.quote}”</p>
          
          <div className="author-info fade-in">
            <div className="author-details">
               <img src={current.profile} className="mini-avatar" alt="avatar"/>
               <div>
                  <h4>{current.name}</h4>
                  <span className="role">{current.role}</span>
               </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="testimonial-controls">
            <button onClick={handlePrev} className="nav-btn">
              <ArrowLeft size={20} color="#000" />
            </button>
            <button onClick={handleNext} className="nav-btn">
              <ArrowRight size={20} color="#000" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;