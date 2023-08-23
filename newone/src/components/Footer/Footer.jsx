import React from 'react';
import "./footer1.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXTwitter, faLinkedin, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <div className="footer">
        <div className="sb__footer section_padding">
            <div className="sb__footer-links">
                <div className="sb__footer-links_div">
                    <h4>Quick Links</h4>
                    <a href="#">
                        <p>My Account</p>
                    </a>
                    <a href="/healthplan">
                        <p>Login</p>
                    </a>
                    <a href="/individual">
                        <p>My Cart</p>
                    </a>
                </div>
                <div className="sb__footer-links_div">
                    <h4>Shopping Guide</h4>
                    <a href="/resource">
                        <p>Payments</p>
                    </a>
                    <a href="/resource">
                        <p>Shipment</p>
                    </a>
                    <a href="/resource">
                        <p>Return Policy</p>
                    </a>
                </div>
                <div className="sb__footer-links_div">
                    <h4>About Us</h4>
                    <a href="/resource">
                        <p>About Grocerio</p>
                    </a>
                    <a href="/resource">
                        <p>Careers</p>
                    </a>
                    <a href="/resource">
                        <p>Investors</p>
                    </a>
                </div>
                <div className="sb__footer-links_div">
                    <h4>Contact</h4>
                    <a href="/resource">
                        <p>1800-600-5055</p>
                    </a>
                    <a href="/resource">
                        <p>groceriomart@gmail.com</p>
                    </a>
                </div>
                <div className="sb__footer-links_div">
                    <h4 style={{marginLeft: '16px'}}>Coming soon on</h4>
                        <div className="socialmedia">
                            <p><FontAwesomeIcon icon={faFacebook} className='my-auto mx-auto'  style={{fontSize: '30px'}}/></p>
                            <p><FontAwesomeIcon icon={faInstagram} className='my-auto mx-auto' style={{fontSize: '30px'}}/></p>
                            <p><FontAwesomeIcon icon={faXTwitter} className='my-auto mx-auto' style={{fontSize: '30px'}}/></p>
                        </div>
                </div>
            </div>
                <hr></hr>
                <div className="sb__footer-below">
                    <div className="sb__footer-copyright">
                        <p>
                            @{new Date().getFullYear()} <span style={{color: '#e7b031'}}>G</span><span style={{color: '#383337'}}>rocerio</span>. All right reserved.
                        </p>
                    </div>
                    <div className="sb__footer-below-links">
                        <a href="#"><div><p>Terms & Conditions</p></div></a>
                        <a href="#"><div><p>Privacy</p></div></a>
                        <a href="#"><div><p>Security</p></div></a>
                        <a href="#"><div><p>Cookie Declaration</p></div></a>
                    </div>
                </div>
            </div>
        </div>
    
  )
}

export default Footer