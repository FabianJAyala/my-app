import React from 'react';
import "../components/styles/Footer.css";
import Logo from "../components/assets/logo.png";

const Footer = () => {
  return (
    <div>
        <div className="footer-background">
            <div className="footer-container">
                <img src={ Logo } alt="Little Lemon logo" />
                <p>Little Lemon the best restaurant in Chicago. You have to bring your family to enjoy a perfect meal!</p>
                <div className="footer-content">
                    <div>
                        <h5>QUICK LINKS</h5>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Menu</a></li>
                            <li><a href="/reservations">Reservations</a></li>
                            <li><a href="#">login</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5>CONTACT US</h5>
                        <ul>
                            <li>1733 N Halsted St, Chicago, IL 60614</li>
                            <li>Tel: 343 4333 0849</li>
                            <li>Email: info@littlelemon.com</li>
                        </ul>
                    </div>
                    <div>
                        <h5>SOCIAL MEDIA</h5>
                        <ul>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">Twitter</a></li>
                        </ul>
                    </div>
            </div>
            <div>
                <p>© 2023 Little Lemon Ltd. All rights reserved.</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer;