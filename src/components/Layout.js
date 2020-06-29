import React from "react"
import Header from "./header"
import Footer from "./footer"
import LayoutStyle from "./layout.module.css"
import Image from "../assets/poster.jpg"
const Layout = props => {
  return (
    <div>
      <Header />
      <div className={LayoutStyle.container}>
        <div classname={LayoutStyle.content}>{props.children}</div>
        <Footer />
      </div>
    </div>
  )
}
export default Layout
