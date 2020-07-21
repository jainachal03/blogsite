import React, { useState } from "react"
import Layout from "../components/layout"
import Blog from "../styles/blogs.module.css"
import Click from "../components/click"
import { FaBars } from "react-icons/fa"
import { GrClose } from "react-icons/gr"
export default function Blogs() {
  const [isMenuOpen, setisMenuOpen] = useState(false)
  const handleMenu = () => {
    setisMenuOpen(!isMenuOpen)
  }
  return (
    <Layout>
      {isMenuOpen ? (
        <GrClose onClick={handleMenu} className={Blog.bars} />
      ) : (
        <FaBars onClick={handleMenu} className={Blog.bars} />
      )}
      {isMenuOpen ? <Click /> : null}
      <h1 className={Blog.coming}>More Blogs coming soon</h1>
      <p>Meanwhile I highly suggest reading these blogs 
      </p>
      <ul>
      <li>
      <a href="http://debarghyadas.com/writes/hacking-into-the-indian-education-system/#:~:text=Originally%20published%20on%20Quora%20garnering,the%20frontpage%20of%20Hacker%20News.">
      
      Hacking into Indian Education System</a>
      
      </li>
      <li>
      <a href="https://www.quora.com/Does-attending-an-Ivy-League-school-really-matter">
      This answer is about IVY League schools but the the arguments are valid for anyone who is in conondrum, specifically
      regarding the college-branch cutoff. Read it to find out.
      </a>
      </li>
      </ul>
    </Layout>
  )
}
