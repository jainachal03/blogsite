import React from "react"
import FooterStyle from "./footer.module.css"
import { GrFacebook } from "react-icons/gr"
import { FaTwitterSquare } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
const Footer = props => {
  return (
    <footer>
      <div className={FooterStyle.lst}>
        <p className={FooterStyle.p}>Achal Jain © 2019.</p>
        <div className={FooterStyle.contact}>
          <div className="con">
            <a
              className={FooterStyle.cons}
              href="https://www.facebook.com/profile.php?id=100009157051064"
            >
              <GrFacebook className={FooterStyle.iconsfa}></GrFacebook>
            </a>
            <a href="https://mobile.twitter.com/AchalJa95935761">
              <FaTwitterSquare
                className={FooterStyle.iconstw}
              ></FaTwitterSquare>
            </a>

            <a href="https://www.linkedin.com/in/achal-jain-503638197/">
              <FaLinkedin className={FooterStyle.iconsin}> </FaLinkedin>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
