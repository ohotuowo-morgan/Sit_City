import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
    return (
        <footer>

            <img src="../images/elipse.svg" alt="curve" className="footer-curve"/>
            <section className="top-section">

                <div className="footer-column">
                    <p className="footer-heading">Sit City</p>

                    <nav className="navigation">
                        <Link to="" className="nav-link">Home</Link>
                        <Link to="" className="nav-link">Products</Link>
                        <Link to="" className="nav-link">About</Link>
                        <Link to="" className="nav-link">Pricing</Link>
                        <Link to="" className="nav-link">Reviews</Link>
                    </nav>
                </div>

                <div className="footer-column">
                    <p>LEGAL</p>

                    <div className="legal-links">
                        <p>Terms and Conditions</p>
                        <p>Licence and Agreement</p>
                        <p>Payment and Install</p>
                    </div>
                </div>

                <div className="footer-column">
                    <p className="footer-heading">CONTACT</p>

                    <div className="contact-list">
                        <div className="contact-item">
                            <img src="../images/Vector.svg" alt="" className="icon"/>
                            <p>+234 123 4567 890</p>
                        </div>

                        <div className="contact-item">
                            <img src="../images/whatsapp.svg" alt=""className="icon" />
                            <p>+234 123 6278 8289</p>
                        </div>

                        <div className="contact-item">
                            <img src="../images/mail.svg" alt="" className="icon"/>
                            <p>sitcity@gmail.com</p>
                        </div>

                        <div className="contact-item align-top">
                            <img src="../images/time.svg" alt="" className="icon"/>
                            <p style={{ lineHeight: '1.4' }}>
                                Open and Close <br/>
                                <span style={{ opacity: 0.7 }}>09:00 am - 10:00 pm</span>
                            </p>
                        </div>
                    </div>
                </div>

            </section>

            <section className="bottom">
                <img src="../images/chair.png" alt="sitcity-chair" className="footer-image" />
                <p className="bottom-text">SITCITY</p>
            </section>

            <section className="copyright">
                <p className="copyright-text"> ©  2025  PIXELS BY JAY- JOY JIMMY</p>
            </section>
        </footer>
    )
}

export default Footer