import React, { useState } from "react"
import Layout from "../components/Layout"
import MainStyles from "../styles/index.module.css"
import Image from "../assets/poster.jpg"
//import Figure from "../assets/figure.png"
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
        <p>
          Everyone want's a good rank in JEE.But it is a fact that it is not a
          child's play.
        </p>
        <p> Why do I say it's not that hard? Read to find out.</p>
        <p>
          {" "}
          Okay, so let's ask ourselves one question, what makes anything
          difficult or rather what makes any 'entrance exam' difficult? The
          foremost reason is the sheer fact not being able to clear it means
          that you cannot get admitted to that college at any cost!. No amount
          of money, political connections will help you. Thus making something
          entirely merit based makes it 'hard'. Then comes the more visible form
          the acceptance percentage.
          <p></p>
          So here comes the daunting figure. Out of approx <b>9,00,000</b>
          candidates 'atmost' <b>13,000</b> are able to get in an IIT. For the
          Academic Session 2019-2020, the total number of seats in IIT's was{" "}
          <b>13583</b>. The acceptance rate comes out to be <b> 1.05% </b>!.
          That is low, quite low as a matter of fact. To put that into
          perspective MIT has an acceptance rate of <b>7.2%</b>, Harvad has{" "}
          <b>5.8%</b>. The world's best have a higher acceptance rate than
          IIT's!. That's got to mean something. But in all seriousness, this is
          plain wrong.
          <p>
            {" "}
            One thing which we don't count is the number of serious applicants .
            It is hard to define a serious candidate, because it is quite
            subjective. For a guy who hates acads it may mean studying 1 to 2
            hours a day, while for a studious guy it may mean studying 8 hours a
            day. I strongly believe the number of serious candidates is not
            equal to the number of people who clear JEE Mains, but we need a
            figure So for our assumption, I will take that number as <b>
              1
            </b>{" "}
            Lakh. I Now if we caculate the acceptance rate it comes out to be{" "}
            <b>13.583%</b>. Okay the percentage rose, but it is still not that
            low. Agreed, but look at the rise, I mean from a mere 1 percent the
            number rose to 10 percent. I need to clarify a few things,the most
            important being the acceptance percentage calculated is only for
            IIT's and not other public institutions which take students through
            JEE and as to why the 1 Lakh figure? I have numbers in my defense.
            The following number are for the Academic Year 2019-2020. The total
            number of seats in IIT's - <b>13,583.</b>. The total number of seats
            in NIT's - <b>21,133 .</b>
            The total number of seats in IIIT's- <b>4,713.</b>
            The total number of seats in these institutions comes out to be{" "}
            <b>39,429</b>.I have mentioned these numbers because in general if
            someone is serious about IIT's he will be able to get admitted into
            these institutions. I know I am generalsing a bit, but need some
            concrete figures.There will always be outliers.
          </p>
          Okay, so now comes the elephant in the room, the Branch/College
          tradeoff. It is one of those things that is never discussed and looked
          upon. For somepeople the reputation of college matters the most, while
          for some it is the branch. There is not a straight answer to this
          question. This a serious flaw of our Education system, some branches
          like Computer Science are considered to be money making, where as
          braches like civil and metallurgy are frowned upon. This is because
          all we hear is about the average packages of the branches. This is
          such a wrong metric, because it assumes that once you are done with
          college you will only do a job, it does not take upon consideration
          the biggest factor -'the type and skill required for the job'. The
          specifics are never discussed Another thing is when a major section
          just studies something because they have to it results in disaster. I
          mean look at this{" "}
          <a
            className={MainStyles.a}
            href="https://www.businesstoday.in/current/corporate/indian-engineers-tech-jobs-survey-80-per-cent-of-indian-engineers-not-fit-for-jobs-says-survey/story/330869.html"
          >
            {" "}
            article{" "}
          </a>
          . It is in no motivational and maybe even makes on question if he/she
          should even pursue engineering. Here's another mind blowing fact, in
          many of the top institutions there is nothing such an average package
        </p>
        <p>
          {" "}
          So the point that I am trying to make is the absolute nature of the
          engineering stream that you get to study is what really makes it
          difficult. What I mean by that is the student have no idea what they
          are getting into.This is the harsh reality, most of the student have
          no idea about the differnt engineering streams have to offer. Most
          importantly a not so good rank takes away the power of choice about
          what you study.
        </p>
        <p>
          {" "}
          Now I will present the real deal. First some context, I will be only
          talking about three specific branches{" "}
          <b>Computer Science,Electrical and Mechanical</b>. The reason that I
          am only taking these branches it because these are the most sought
          after, this certainly does not mean these are the best(it is again a
          subjective question), it just means that someone would prefer to take
          these branches rather than other branches. And what is Old? These are
          the following IIT's-{" "}
          <b>
            {" "}
            IIT Bombay,IIT Delhi,IIT Guwahati,IIT Kanpur,IIT Kharagphur,IIT
            Madras and IIT Roorkee
          </b>
          The total figure reresents the total number of IIT's which is{" "}
          <b>23</b>. I am little biased towards those because these IIT's
          perform the best in International and National Rankings and therse are
          old. Except for Guwahati and Roorke all had been established before
          1970. Thus they have been here for the past 50 or so years.
        </p>
        <img
          src={bdata}
          style={{ margin: 10 }}
          className={MainStyles.datagraph}
        ></img>
        <p>
          {" "}
          So if you want a seat in an Old IIT you need to have a rank within{" "}
          <b>2549</b> and if your general the figure becomes <b>1275</b>. So
          before anything ask yourself can you bring a rank that is well within
          these figures.This is quite serious and nothing to be ashamed of.
          Knowing the extent of your capabalities is useful because then you can
          decide for yourself. Of course there is the branch/college trade
          cutoff and the ranks do vary but the above figure are the 'safest'
          figure meaning that a rank within those figure guarantees the desired
          branch and college.
        </p>

        <p> </p>
      </article>
    </Layout>
  )
}
