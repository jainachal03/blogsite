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
      <p>
        <h3>Meanwhile I highly suggest reading these blogs/articles </h3>
      </p>
      <ul className={Blog.list}>
        <li>
          <a
            target="_blank"
            className={Blog.links}
            href="http://debarghyadas.com/writes/hacking-into-the-indian-education-system/#:~:text=Originally%20published%20on%20Quora%20garnering,the%20frontpage%20of%20Hacker%20News."
          >
            <h2>Hacking into Indian Education System</h2>
          </a>
          <p className={Blog.para}>
            This is an eye opening article. I have always thought that there is
            something fishy with the board results, this article just confirms
            that. The author gives a very detailed desciption and a lot of
            evidence. Do read this.
          </p>
        </li>
        <li>
          <a
            target="_blank"
            className={Blog.links}
            href="https://www.quora.com/Does-attending-an-Ivy-League-school-really-matter"
          >
            {" "}
            <h2>Does attending an IVY League school really matter?</h2>
          </a>
          <p className={Blog.para}>
            This answer is about IVY League schools but the the arguments are
            valid for anyone who is in conondrum, specifically regarding the
            college-branch cutoff. Read it to find out.
          </p>
        </li>
        <li>
          <a
            target="_blank"
            className={Blog.links}
            href="https://www.thehindu.com/features/education/issues/get-rid-of-herd-mentality/article2376696.ece"
          >
            <h2>Get Rid of Herd Mentality</h2>
          </a>
          <p className={Blog.para}>
            This article appeared in The Hindu, and is from 2011, but whatever that is written in it still applies.
          </p>
        </li>
      </ul>
    </Layout>
  )
}
