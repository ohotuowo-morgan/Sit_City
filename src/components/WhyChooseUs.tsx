import './WhyChooseUs.css';
import { Clock, Gem, Package, Armchair } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: <Clock size={24}
        fill='#ffffff'
        color='#2a2a2a'
        strokeWidth='1.5' />,
      title: "The Legacy of Comfort",
      desc: "More than a chair, it’s an heirloom. Our pieces are meticulously crafted to stand the test of time, promising a legacy of comfort that can be enjoyed for generations to come."
    },
    {
      id: 2,
      icon: <Gem
        size={24}
        fill='#ffffff'
        color='#2a2a2a'
        strokeWidth='1.5'
      />,
      title: "A Statement, Not a Seat",
      desc: "Each SitCity chair is a singular work of art. We design beyond the trends, crafting pieces that are as individual as you are—a true reflection of your unique style."
    },
    {
      id: 3,
      icon: <Package size={24}
        fill='#ffffff'
        color='#2a2a2a'
        strokeWidth='1.5' />, // Replace with appropriate icon
      title: "The Foundation of Form",
      desc: "Beneath our elegant exteriors lies an unyielding core of strength. We select only the most resilient materials and employ master-level construction, ensuring your chair is built to withstand the test of time."
    },
    {
      id: 4,
      icon: <Armchair size={24}
        fill='#ffffff'
        color='#2a2a2a'
        strokeWidth='1.5' />,
      title: "The Pursuit of Perfection",
      desc: "Quality is the cornerstone of every SitCity creation. From the selection of full-grain leathers to the final stitch, we are relentlessly dedicated to perfection, ensuring an unparalleled level of excellence in every detail."
    }
  ];

  return (
    <section className="why-choose-section">
      <div className="why-header">
        <span className="sub-header">WHY CHOOSE SIT CITY</span>
        <h2>We have redefined the art of <span className="highlight">sit</span>ting.<span><img src="../images/chair.svg" alt="sitcity logo" className='sitcitylogo' /></span></h2>
      </div>

      <div className="features-grid">
        {/* The dotted line background */}
        {/* <div className="connector-line"></div> */}

        {features.map((feature) => (
          <div key={feature.id} className="feature-card">
            <div className="icon-box">
              {feature.icon}
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;