import { Container, Row, Col } from "react-bootstrap";
import './AboutMe.css'
import { motion } from "framer-motion"

export default function AboutMe() {

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 2 } },
  };

  return (
    <>
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
      <Container>
      <h1 className="about-me mt-5">About Me</h1>
        <Row>
        <Col md={8} className="mx-auto">
        <p className="about-me text-start">
          I am a former Operations Manager accustomed to working in fast paced team environments looking for a complete career change. I've always enjoyed being creative when it comes to solving complex problems, and after doing a few online courses I realised becoming a software engineer would enable me to continue following my passion. After embarking on a Full Stack General Assembly course, I’m now looking to combine my customer centric mentality with my knowledge and passion for solving problems, to become a well rounded software engineer. I am looking to join a vibrant team that would help me develop my skills and enable me to keep learning.
          I love working alongside other people and bouncing ideas off of each other. I can’t wait to get started and continue learning!
        </p>
        </Col>
        </Row>
      </Container>
      <Container>
        <Row>
        <Col md={8} className="mx-auto">
        <h1 className="about-me mt-5">Interests</h1>
        <p className="about-me text-start">Outside of work, I’m really passionate about animal welfare; I recently flew over and rehomed a blind kitten from Cyprus who could’ve sadly had a completely different fate. It’s mine and my wife’s dream to one day rescue all of the cats there! Aside from animals, I’m really into fitness, and in particular olympic weightlifting; during my time being furloughed (COVID) I undertook a strength and conditioning course simply because I loved it. Becoming a dad recently, I am also finding myself enjoying nostalgic kids TV like Sesame Street and dare I admit, Teletubbies! </p>
        </Col>
        </Row>
      </Container>
      <Container>

        <h1 className="about-me mt-5">Experience</h1>
        <Row>
        <Col className="">
        <div id="ul-parent">
        <ul className="list experience-list">
          <li className="about-me"><span className="weight ">General Assembly Software Engineering Immersive</span> - Student - April 2023 - July 2023 - Remote</li>
          <li className="about-me"><span className="weight">Accounting Wise</span> - Client Manager - September 2020 - April 2023 - Remote</li>
          <li className="about-me"><span className="weight">McQueens Flowers</span> - Operations Manager - January 2019 - August 2020 - London </li>
          <li className="about-me"><span className="weight">McQueens Flowers</span> - Office Manager - September 2012 - December 2018 - London</li>
        </ul>
        </div>
        </Col>
        </Row>
      </Container>
      </motion.div>
    </>
  )
}