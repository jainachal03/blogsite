import React from "react"
import { Link } from "gatsby"
import { FaBars } from "react-icons/fa"
import "./click.css"

const Click = () => (
  <div className="click">
    <Link to="/">HOME</Link>
    <Link to="/">ABOUT</Link>
    <Link to="/">BLOGS</Link>
  </div>
)

export default Click
