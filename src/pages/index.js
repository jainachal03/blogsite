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
      <img src={Image} className={MainStyles.image}></img>
      <article className={MainStyles.article}>
        If you are a JEE aspirant then there is one thing which you must have
        heard-<b>JEE</b> is not easy. It takes hours and hours of preparation
        and complete focus on only and only one thing - studying math and
        science. Now before anything, I want to put against this mentality since
        I was too a product of this train of thougts. I know what it does it
        feel like to continuosly not get the desired rank in the coaching tests
        and the feeling when you get when you are not able to understand
        something but your friend or <b>topper</b> breeze through it. This
        article is a mix of both my experiences and somethings which can be
        beneficial to anyone. Moreover I am not going too bore you or write down
        the books which are must and stuff like that, I seriousy think it's
        waste of time.
        On a more serious note, the number of students who fill JEE Mains form is over 9 Lakh.
        The number of seats in all the IIT's combined is less than 14,000.Let that sink.
    
        <p> </p>
        <p>
          The first thing which I feel that is wrong with aspirants is that the
          aspirants forget why are they even preparing for IIT's. If it is
          because that once you pass out from IIT you are gonna make loads and
          loads of money, please don't. Seriously don't, it is just wrong. If
          you think that IIT's mean you mean establishing your
          intelligence.Please don't. You don't need to slog day in and day out.
          Then too please don't. There is no single metric to intelligence. So
          then why should you prepare for IIT? The answer is simple. Are you
          interested towards scientific termperament. Are you interested in
          lerning the mechanisms of things? Then go ahead. And remember the most
          important thing is to remember that it does not decide your future. In
          fact Engineering is one of the most versatile filed in the world. You
          can almost always take a serperate path without much loss, though it
          does take up yout time. One of the biggest flaws of aspirants is they
          don't have a clear idea about what they want. They have no road map of
          what they want to achieve. <b>Getting the best rank possible</b> is
          not an answer to it. Instead of this I urge you to sit down and really
          thinkg about a rank or a range of rank, that you want to achieve. Do
          it honeslty, and with a lot of thought. If you are confused about the
          rank, don't worry. First of all look for programs and then think about
          your aspirations. Find what would be best fit for you. This will not
          only help you for JEE but also help in your college life. This is
          because college life is much more different, you are free to pursue a
          lot of different things, things which you like and matter to you. For
          our purpose let's say you want a rank in the top <b>1000</b>
          <img src={Figure} class={MainStyles.figures}></img>
          As you can see from the graphs. getting above <b>220</b> will ensure
          that you get a rank below 1000. Remember this figure and plan how are
          you going to achieve that. By thinking like it you have carfully
          removed the burden of scoring 360 out of 360!. This means you{" "}
          <b>don't</b> have to study everything. Just being good at some topics
          is enough. Now start your prep with this score as your benchmark socre
          and always try to score at least this score. If you are not able to
          then decrease the benchmark but try to reach the score. If you are
          able to score these many marks, good, increase the benchmark and focus
          on that. The increment should be little like 10 or 15 at max.
        </p>
        <p>
          Another important thing is resisting herd mentality. <b>Don't</b> fill
          various forms of exams if you are not prepared or you are not serious
          about them. Seriously it won't do anything good. Many students
          aimlessly fill the forms of <b>KVPY</b>,<b>RMO</b> and many other
          olympiads. Seriously, first check whether you are up to that level or
          not. Though the trend suggests that majority of students under{" "}
          <b> 1000</b> clear most of these examinations, this is not a hard and
          fast rule. After all <b>JEE</b> is a lot different from these
          examinations. One thing which you have to understant is that{" "}
          <b>JEE</b> is <b>not</b> just about <b>Intelligence</b>. In fact it
          checks your <b>perseverance</b> , <b>memoriaztion</b>,
          <b>thought-process</b> and <b>confidence</b>. And yes, memoirzation
          does help. This is because even though science and mathematics have
          changed drastically over the past few years, but the syllabus hasn't.
          We are still forces to learn things which don't make any sense. I
          won't go into the depth but, yeah overall the syllabus is still pretty
          primitive. But one has to bear it nevertheless.
        </p>
        <p>
          Don't take it too Seriously. Seriously don't. I have gone through the
          previous 20 year question papers and what I found was that there is no
          gaurantee of paper. No matter how much you teachers shout{" "}
          <b>Calculus </b> is the most important or that <b>Rotation</b> is
          fundamentally the most challenging, there is no surity. So try your to
          give your best in each topic and frame the concept in your words.
          <a href="https://en.wikipedia.org/wiki/Richard_Feynman" className={MainStyles.links}><b>Richard Feynman</b></a> one of the smartest human being had developed a
          technique called the feynman technique. It is “If you can’t explain it
          simply, you don’t understand it well enough.” Try to implement it. I
          would also suggest that don't give up on your hobbies,you like Anime,
          watch it but with self restraint,like football, play atleast
          twice/thricee a week. Don't give up on Extracurriculars, untill they
          are seriously affecting your studies.
          <p>
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
