import React from "react"
import { Link } from "gatsby"
import { FaBars } from "react-icons/fa"
import "./click.css"

const Click = () => (
  <div className="click">
    <Link to="/" className="links">
      HOME
    </Link>
    <Link to="/about" className="links">
      ABOUT
    </Link>
    <Link to="/blogs" className="links">
      BLOGS
    </Link>
  </div>
)

export default Click
