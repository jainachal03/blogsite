import React, { useState } from "react"
import Layout from "../components/Layout"
import aboutme from "../styles/aboutme.module.css"
import minephoto from "../assets/linkedinprofile.jpg"
import Click from "../components/click"
import { FaBars, FaWindowClose } from "react-icons/fa"
import { GrClose } from "react-icons/gr"
export default function About() {
  const [isMenuOpen, setisMenuOpen] = useState(false)
  const handleMenu = () => {
    setisMenuOpen(!isMenuOpen)
  }
  return (
    <Layout>
      {isMenuOpen ? (
        <GrClose onClick={handleMenu} className={aboutme.bars} />
      ) : (
        <FaBars onClick={handleMenu} className={aboutme.bars} />
      )}
      {isMenuOpen ? <Click /> : null}
      <div className={aboutme.container}>
        <h1 className={aboutme.whoami}> Hola!</h1>
        <img src={minephoto} className={aboutme.minephoto}></img>

        <h2 className={aboutme.second}> So who am I?</h2>
        <p>
          {" "}
          I am a sophomore(second year student) at{" "}
          <a>BITS PILANI,PILANI Campus</a>. I am pursuing Computer Science. I
          love to guide fellow students and am always ready to solve Jee and
          other college selection related issues etc. I love playing with Data
          and making predictions from it. I am also a Machine Learning
          Enthusiast.{" "}
        </p>
        <p>Feel free to connect with me.</p>
      </div>
    </Layout>
  )
}
