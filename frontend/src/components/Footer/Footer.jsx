import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>

        <div className="footer-content">

            <div className="footer-content-left">
                <img src={assets.logo} alt="" className='footer-logo'/>
                <p>Test Matter</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>

            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div className="footer-content-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>Contact Number: +91 9876543210 </li>
                    <li>Email: contact@fooddelivery.com</li>
                </ul>
            </div>
        </div>

        <hr />
        <p className="footer-copyright">Copyright 2025 © fooddelivery.com All Rights Reserved.</p>
      
    </div>
  )
}

export default Footer

