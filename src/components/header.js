import React from "react"
import { Link } from "gatsby"
import HeaderStyle from "./header.module.css"
import Image from "../assets/jee.png"
// import { FaBars } from "react-icons/fa"
const Header = () => {
  return (
    <header>
      <nav>
        <div className={HeaderStyle.topnavbar}>
          <span>
            <Link className={HeaderStyle.link} to="/">
              {/* <img classname={HeaderStyle.image} src={Img}></img> */}
              {/* <h1> JEE Ninja</h1> */}
              <img src={Image} className={HeaderStyle.image}></img>
            </Link>
          </span>
          <div className={HeaderStyle.listdiv}>
            <Link
              to="/"
              className={HeaderStyle.fora}
              activeClassName={HeaderStyle.activeLink}
            >
              HOME
            </Link>
            <Link
              className={HeaderStyle.fora}
              to="/about"
              activeClassName={HeaderStyle.activeLink}
            >
              ABOUT
            </Link>
            <Link
              className={HeaderStyle.fora}
              to="/blogs"
              activeClassName={HeaderStyle.activeLink}
            >
              BLOGS
            </Link>
          </div>
          
        </div>
      </nav>
    </header>
  )
}
export default Header
