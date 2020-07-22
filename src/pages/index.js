import React, { useState } from "react"
import Layout from "../components/Layout"
import MainStyles from "../styles/index.module.css"
import Image from "../assets/My Post.png"
//import Figure from "../assets/figure.png"
import Figure from "../assets/Finalimage.png"
import bdata from "../assets/bdata.png"
import { FaCentercode } from "react-icons/fa"
import Click from "../components/click"
import { FaBars, FaWindowClose } from "react-icons/fa"
import { GrClose } from "react-icons/gr"

export default function Home() {
  const [isMenuOpen, setisMenuOpen] = useState(false)
  const handleMenu = () => {
    setisMenuOpen(!isMenuOpen)
  }
  return (
    <Layout>
      {isMenuOpen ? (
        <GrClose onClick={handleMenu} className={MainStyles.bars} />
      ) : (
        <FaBars onClick={handleMenu} className={MainStyles.bars} />
      )}
      {isMenuOpen ? <Click /> : null}
      <div className={MainStyles.container}>
        <h1 className={MainStyles.heading}>
          Why JEE is not as hard as it seems
        </h1>
      </div>
      <h3 className={MainStyles.subheading}> BY ACHAL JAIN</h3>
      <img
        src="https://i.ibb.co/R2Cz9zN/My-Post.png"
        className={MainStyles.image}
      ></img>
      <article className={MainStyles.article}>
        If you are a JEE aspirant then there is one thing which you must have
        heard-<b>JEE</b> is not easy. It takes hours and hours of preparation
        and complete focus on only and only one thing - studying math and
        science. Now before anything,I want to put against this mentality since
        I was too a product of this train of thougts. I know what does it feel
        like to not get the desired rank in the coaching tests and the feeling
        you get when you are not able to understand something but your friend or
        topper breeze through it.This article is a mix of both my experiences
        and somethings which can be beneficial to anyone. Moreover I am not
        going to bore you or write down the books which are must and stuff like
        that, I seriousy think it's waste of time.Books don't serve much purpose
        unless you actually know how to use them. Moreover there is a plethora
        of reference material available on internet anyways.
        <p className={MainStyles.para}>
          The first thing which I feel that is wrong with aspirants is that the
          aspirants don't consider or forget why are they even preparing for
          IIT's.&nbsp;Is it because once you pass out from IIT you are going to
          make loads and loads of money, or clearing IIT's is way to establish
          your intelligence? In all honesty if these are your motivation for
          studying for JEE, get ready to be dissapointed. Studying from IIT's
          does not guarantee loads and loads and money, as a matter of fact no
          college can guarantee that, and thinking that JEE is a correct metric
          of intelligence is plain wrong. No exam can measure that.Okay then why
          should you prepare for IIT? The answer is simple. Do you have a
          scientific termperament? Do you want to have scientific termperament?
          Are you interested in lerning the mechanisms of things? Do you want to
          learn from the best proffesors and learn from the smartest in India?
          Then go ahead. Don't study for the label of being an IITian.&nbsp;And
          remember the most important thing, it does not decide your future.
          IIT's are just a platform to learn and grow as a human being. In fact
          Engineering is one of the most versatile field in the world. You can
          almost always take a serparate path without much loss, though it does
          take up your time.&nbsp;You will find Engineering graduates in
          Consulting, in Finance Companies in Theater and what not.&nbsp;They
          are everywhere!.
        </p>
        <p className={MainStyles.para}>
          So coming back to JEE, one of the biggest flaws of aspirants is they
          don't have a clear idea about what they want. They have no road map of
          what they want to achieve. <b>Getting the best rank possible</b> is
          not an answer to it. Instead of this I think it is better to aim for a
          rank or a range of rank, that you want to achieve. It should be done
          honeslty, with a lot of thought. If you are confused about the rank,
          don't worry. First of all look for programs and then think about your
          aspirations. Find what would be the best fit for you. If you are still
          confused then reach out to people who are currently studying in IIT's.
          Seriouly, talk to your seniors and get insights. This will not only
          help you for JEE but also help in your college life. This is because
          college life is much more different, you are free to pursue a lot of
          different things, things which you like and matter to you. Now for our
          purpose let's say you want a rank in the top <b>1000</b>
          <img
            src="https://i.ibb.co/k60ScmC/Finalimage.png"
            class={MainStyles.figures}
          ></img>
          As you can see from the graphs. getting above <b>220</b> will ensure
          that you get a rank below 1000. Remember this figure and plan how are
          you going to achieve that. By thinking like this you have carefully
          removed the burden of scoring 360 out of 360!. This means you{" "}
          <b>don't</b> have to study everything. Just being through with some
          topics is enough. Now start your prep with this score as your
          benchmark socre and always try to score at least this score. If you
          are not able to then decrease the benchmark but try to reach the
          score. If you are able to score these many marks, good, increase the
          benchmark and focus on that. The increment should be little like 10 or
          15 at max.
        </p>
        <p className={MainStyles.para}>
          Another important thing is resisting herd mentality. <b>Don't</b> fill
          various forms of exams if you are not prepared or you are not serious
          about them. Seriously it won't do anything good. Many students
          aimlessly fill the forms of{" "}
          <b>
            <a
              className={MainStyles.exams}
              href="http://www.kvpy.iisc.ernet.in/main/index.htm"
            >
              KVPY
            </a>
          </b>
          ,
          <b>
            <a
              className={MainStyles.exams}
              href="https://secure.hbcse.tifr.res.in/rmo/"
            >
              {" "}
              RMO
            </a>
          </b>{" "}
          and many other olympiads. Seriously, first check whether you are up to
          that level or not. Though the trend suggests that majority of students
          under <b> 1000</b> clear most of these examinations, this is not a
          hard and fast rule. After all <b>JEE</b> is a lot different from these
          examinations. One thing which you have to understant is that{" "}
          <b>JEE</b> is <b> not </b>just about<b> Intelligence </b>. In fact it
          checks your<b> perseverance</b>,<b> memoriaztion</b>,
          <b> thought-process</b> and<b> confidence</b>. And yes, memoriaztion
          does help. This is because even though science and mathematics have
          changed drastically over the past few years, but the syllabus hasn't.
          We are still forced to learn things which are quite old and really
          don't have much relevance and the way it is taught just kills any
          motivation that one has. I won't go into the depth but, yeah overall
          the syllabus is still pretty primitive. But one has to bear it
          nevertheless.
        </p>
        <p className={MainStyles.para}>
          Don't take it too Seriously. Seriously don't. I have gone through the
          previous 20 year question papers and what I found was that there is no
          guarantee of paper. No matter how much you teachers shout{" "}
          <b>Calculus </b> is the most important or that <b>Rotation</b> is
          fundamentally the most challenging, there is no surety. So try to give
          your best in each topic and frame the concept in your words.
          <a
            href="https://en.wikipedia.org/wiki/Richard_Feynman"
            target="_blank"
            className={MainStyles.links}
          >
            <b> Richard Feynman </b>
          </a>{" "}
          one of the smartest human being had developed a technique called the
          feynman technique. It is “If you can’t explain it simply, you don’t
          understand it well enough.” Try to implement it. I would also suggest
          that don't give up on your hobbies,you like Anime, watch it with self
          restraint,like football, play atleast twice/thrice a week. Don't give
          up on Extracurriculars, untill they are seriously affecting your
          studies.
          <p className={MainStyles.para}>
            {" "}
            At last I would just like to add that with a little planning and
            chill attitude, you would find that that JEE is really not as hard
            as it seems.{" "}
          </p>
        </p>
      </article>
    </Layout>
  )
}
