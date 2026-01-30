import "./Carousel.css";


interface CarouselcardProps {
    title: string;
    price: string;
    location: string;
    image: string;
    chairtype: string;
    background: string;
    className?: string;
}

function Carousel ({title, price, location, image, chairtype, background, className}: CarouselcardProps) {
    return (
        <div className={`carousel-card ${className ? className : ""}`}>

            <img src={background} alt={title} className="carousel-image"/>
            <span className="top">{chairtype}</span>


            <div className="carousel-info">
                <div className="info ">
                    <h3 className="title">{title}</h3>

                    <div className="carousel-location">
                        <img src={image} alt="location icon" />
                        <p>{location}</p>
                    </div>
                </div>

                <span>{price}</span>
            </div>

        </div>
    );
}

export default Carousel