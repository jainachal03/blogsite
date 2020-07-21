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
        <img src="https://lh3.googleusercontent.com/Gu3QXGfjCIyjwiaVtztsECilXlsWtZ134wZRSxvlN9uFz_cZ6Mv_shidjQJ_FFODWwVsID-ihNyvLD_gl9DiwGz_vqiLU_SaQmvpQ2nmm5OkLmUbokguXLspawpykJBeg3WnohXGVbbwV_t9V1GK8rTGqZGXLkP3mp2ZMrQ9Y4dTPeX_D7Bm3XALiBmcL5JnqneOVx-hhNTHtfhkA-BpmsXUVZEPpRQbgqQb7Ka3Dm-B8AzTnws-q9J8nkrWC2ixTRexq0Pt9icy1jOQrn4eMoLf_RAqYq_KWvIDYjpjxLXs6iNVOM-38bhjs59VUY2hHx4pmrfuY3h5KQCSXMdfA_hDG_j7wp7CUdE4bdmZqglk6XKnRHJUg-2kJSe6kdjvh6wH4c6nSgg_B5z3jWd2v-DFAb4tY9P7UIR9SFkCEpKYppESdMhMb0yEj8W0sJNPQL35x2FD6vZsf5C1cMv5_Q20-cYMU2XKQMpXCH2Aq8DEW3p1a05UegvZ8M1Tk-STYuBWMEssvRpEZ__GybCLDmDtXgaQo1SyWfvjfQz_Bi_1E--Ka1HDFKKiVcdNJt-Tawv3SjseP6WtWSWFDfujPFuviG6scUreijJcHjG7lzmPJyT-QEqbb79-DKCdXscakQusbLRemyDWKVDdOODckgNRVnXos4RhmzrSorPITyZf0BE9Dhqo4_2tXKy8sg=w328-h246-no?authuser=0" className={aboutme.minephoto}></img>

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
