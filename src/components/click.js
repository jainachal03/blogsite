import React from "react"
import { Link } from "gatsby"
import "./click.css"
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa"

const Click = ({ closeHandle, active }) => (
  <div
    style={{
      position: "fixed",
      top: 0,
      bottom: 0,
      right: 0,
      width: "100%",
      height: "100%",
      background: "rgba(100,100,100,0.5)",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "flex-end",
    }}
    onClick={closeHandle}
  >
    <div
      className={active ? "clickAnimate" : "click"}
      onClick={e => {
        e.stopPropagation()
        closeHandle()
      }}
    >
      <Link to="/" className="header" activeClassName="headerActive">
        HOME
      </Link>
      <Link to="/about" className="header" activeClassName="headerActive">
        ABOUT
      </Link>
      <Link to="/blogs" className="header" activeClassName="headerActive">
        BLOGS
      </Link>
      <div
        style={{
            paddingTop: 40,
            borderTopWidth: 1,
            borderToppColor: 'grey',
            borderTopStyle: 'solid'
            
          
        }}
      >
        <a href="https://www.facebook.com/profile.php?id=100009157051064">
          <FaFacebookSquare className="iconsfa"></FaFacebookSquare>
        </a>
        <a href="https://twitter.com/AchalJa95935761">
          <FaTwitterSquare className="iconstw"></FaTwitterSquare>
        </a>
        <a href="">
          <FaLinkedin className="iconsin"></FaLinkedin>
        </a>
      </div>
    </div>
  </div>
)

export default Click
