import React from "react"
import FooterStyle from "./footer.module.css"
const Footer = props => {
  return (
    <footer>
      <div className={FooterStyle.lst}>
        <p className={FooterStyle.p}>Achal Jain © 2019.</p>
      </div>
    </footer>
  )
}
export default Footer
