import React, { useState } from "react"
import { Link } from "gatsby"
import HeaderStyle from "./header.module.css"
import Image from "../assets/jee.png"
import Click from "./click"
import { GrClose } from "react-icons/gr"
import { FaBars } from "react-icons/fa"
import aboutme from "../styles/aboutme.module.css"

// import { FaBars } from "react-icons/fa"
const Header = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false)
  const handleMenu = () => {
    setisMenuOpen(!isMenuOpen)
  }
  return (
    <header>
      <nav>
        {isMenuOpen ? (
          <GrClose
            onClick={handleMenu}
            style={{
              padding: "0 10px 0 10px",
              margin: 0,
              strokeWidth: 4,
            }}
            className={aboutme.bars}
            size={25}
          />
        ) : (
          <FaBars
            onClick={handleMenu}
            // height={40}
            // width={40}
            style={{ padding: "0 10px 0 10px", margin: 0 }}
            className={aboutme.bars}
            size={25}
          />
        )}
        <div className={HeaderStyle.topnavbar}>
          <span>
            <Link className={HeaderStyle.link} to="/">
              {/* <img classname={HeaderStyle.image} src={Img}></img> */}
              {/* <h1> JEE Ninja</h1> */}
              <img src={Image} className={HeaderStyle.image}></img>
            </Link>
          </span>
          {isMenuOpen ? (
            <Click closeHandle={handleMenu} active={isMenuOpen} />
          ) : (
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
          )}
        </div>
      </nav>
    </header>
  )
}
export default Header
