import React from "react"
import FooterStyle from "./footer.module.css"
import { FaFacebookSquare } from "react-icons/fa"
import { FaTwitterSquare } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
const Footer = props => {
  return (
    <footer>
      <div className={FooterStyle.lst}>
        <p className={FooterStyle.p}>Achal Jain © 2019</p>
        <div className={FooterStyle.contact}>
        <a href="https://www.facebook.com/profile.php?id=100009157051064"><FaFacebookSquare className={FooterStyle.iconsfa}></FaFacebookSquare></a>
        <a href="https://twitter.com/AchalJa95935761"><FaTwitterSquare className={FooterStyle.iconstw}></FaTwitterSquare></a>
        
        
        <a href="">
        <FaLinkedin className={FooterStyle.iconsin}>
        </FaLinkedin>
        </a>
        
        
        </div>
        
      </div>
    </footer>
    
  )
}
export default Footer
