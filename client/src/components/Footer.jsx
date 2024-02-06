import "../styles/Footer.scss"
import { LocationOn, LocalPhone, Email } from "@mui/icons-material"
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <a href="/"><img src="/assets/logo.png" alt="logo" /></a>
      </div>

      <div className="footer_center">
        <h3>About Us</h3>
        <p>At Luminal Stay, we believe that every journey is an opportunity to create unforgettable memories. Whether you're embarking on a spontaneous adventure or meticulously planning your dream getaway, Luminal Stay is here to elevate your travel experience.</p>
      </div>

      <div className="footer_right">
        <h3>Contact</h3>
        <div className="footer_right_info">
          <LocalPhone />
          <p>+91 569 569 3569</p>
        </div>
        <div className="footer_right_info">
          <Email />
          <p>luminalnest@support.com</p>
        </div>
        <img src="/assets/payment.png" alt="payment" />
      </div>
    </div>
  )
}

export default Footer