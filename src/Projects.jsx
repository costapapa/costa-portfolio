import babytoy from './img/babytoysapp.png'
import apodpage from './img/apodpage.png'
import workoutlogger from './img/workoutlogger.png'
import snake from './img/snake.png'
import './Projects.css'
import { Container, Row, Col, Image } from 'react-bootstrap';
import { DiReact, DiNodejs, DiMongodb, DiPostgresql } from 'react-icons/di'
import { SiExpress, SiGithub, SiGooglemaps, SiPython, SiDjango, SiJavascript, SiHtml5, SiCss3 } from 'react-icons/si'
import { TfiWorld } from "react-icons/tfi";
import { motion, AnimatePresence } from "framer-motion"

function Projects() {

  const slideInLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 2 } },
  };

  const slideInRight = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 2 } },
  };

  return (
    <>
        <h1 className="font mb-5 mt-5">Projects</h1>
        <motion.div className="container-fluid mt-4" initial="hidden" animate="visible" variants={slideInLeft}>
          <Container className="projects">
            <div className="row align-items-center">
              <div className="col-8">
                <h1 className="mb-4">

                  <a href="https://babytoysapp-4319c3b1333b.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="project-link">Baby Toys App</a></h1>
                <Row md={8} className="mx-auto">
                  <p>This project involved creating a Full Stack Web Application. For this project the requirement was to use React Front-End and Express Back-end. I wanted to create a free Baby Toy collection App. As a new Dad I found we have so many unneeded toys, these toys would be valuable to others as baby’s love new toys, but get bored of them very quickly!</p>
                </Row>
                <Row>
                  <p>Keys Skills: <DiReact size={30} className="icon m-1" color="#FD84A3" />
                    <SiExpress size={30} className="icon m-1" color="#FD84A3" />
                    <DiMongodb size={30} className="icon m-1" color="#FD84A3" />
                    <DiNodejs size={40} className="icon m-1" color="#FD84A3" />
                    <SiGooglemaps size={30} className="icon m-1" color="#FD84A3" /></p>
                </Row>
                <hr></hr>
                <Row>
                  <Col>
                    <h6>GitHub</h6>
                    <a href="https://github.com/costapapa/BabyToys" target="_blank" rel="noopener noreferrer">
                      <SiGithub size={30} className="icon" color="#FCCB46" />
                    </a>
                  </Col>
                  <Col>
                    <h6>Website</h6>
                    <a href="https://babytoysapp-4319c3b1333b.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                      <TfiWorld size={30} className="icon" color="#FCCB46" />
                    </a>
                  </Col>
                </Row>
                <hr></hr>
              </div>
              <Col>
                <div className="col-4 w-25">
                  <div className="d-flex">
                    <Image src={babytoy} alt='babytoy' className="baby-toy-img mr-3 mb-3" style={{ maxWidth: '300px' }} />
                    {/* <img src={toysmap} alt='toysmap' className="baby-toy-img ml-4" /> */}
                  </div>
                </div>
              </Col>
            </div>
          </Container>
        </motion.div>
        <motion.div className="container-fluid mt-4" initial="hidden" animate="visible" variants={slideInRight}>
        <Container className="projects">
            <div className="row align-items-center">
              <div className="col-8">
                <h1 className="mb-4">
                  <a href="https://space-cat.fly.dev/" target="_blank" rel="noopener noreferrer" className="project-link">Space Cat App</a></h1>
                <Row md={8} className="mx-auto">
                  <p>The app was designed to search Nasa Image of the day by date and save the images down to an album. Once the pictures were saved down to the database they made them more easily accessible, as you would not need to keep calling the NASA API. My key contribution to this group project was ensuring the API was working correctly. </p>
                </Row>
                <p className="mt-5">Keys Skills:
                  <SiPython size={30} className="icon m-2" color="#FD84A3" />
                  <SiDjango size={30} className="icon m-2" color="#FD84A3" />
                  <DiPostgresql size={30} className="icon m-2" color="#FD84A3" />
                </p>
                <hr></hr>
                <Row>
                  <Col>
                    <h6>GitHub</h6>
                    <a href="https://github.com/costapapa/SpaceCAT" target="_blank" rel="noopener noreferrer">
                      <SiGithub size={30} className="icon" color="#FCCB46" />
                    </a>
                  </Col>
                  <Col>
                    <h6>Website</h6>
                    <a href="https://space-cat.fly.dev/" target="_blank" rel="noopener noreferrer">
                      <TfiWorld size={30} className="icon" color="#FCCB46" />
                    </a>
                  </Col>
                </Row>
                <hr />
              </div>
              <Col>
                <div className="col-4 w-25">
                  <div className="d-flex">
                    <Image src={apodpage} alt='apodpage' className="baby-toy-img mr-3 mb-3" style={{ maxWidth: '300px' }} />
                    {/* <img src={albumpage} alt='albumpage' className="baby-toy-img ml-4" /> */}
                  </div>
                </div>
              </Col>
            </div>
        </Container>
          </motion.div>
          <motion.div className="container-fluid mt-4" initial="hidden" animate="visible" variants={slideInLeft}>
        <Container className="projects">
            <div className="row align-items-center">
              <div className="col-8">
                <h1 className="mb-4">
                  <a href="https://workoutlogger.fly.dev/" target="_blank" rel="noopener noreferrer" className="project-link">Workout Logger</a></h1>
                <Row md={10} className="mx-auto">
                  <p>The app was designed as an app where you could record and log all your workouts. I learnt how to implement database information through my app and even included Google Authentication for users to sign up . The goal of the project was to create an App that included CRUD (Create, Read, Update & Delete) functionality.</p>
                </Row>
                <p>Keys Skills: <SiJavascript size={30} className="icon m-2" color="#FD84A3" />
                  <SiExpress size={30} className="icon m-2" color="#FD84A3" />
                  <DiMongodb size={30} className="icon m-2" color="#FD84A3" />
                  <DiNodejs size={40} className="icon m-2" color="#FD84A3" />
                </p>
                <hr></hr>
                <Row>
                  <Col>
                    <h6>GitHub</h6>
                    <a href="https://github.com/costapapa/workout-app" target="_blank" rel="noopener noreferrer">
                      <SiGithub size={30} className="icon" color="#FCCB46" />
                    </a>
                  </Col>
                  <Col>
                    <h6>Website</h6>
                    <a href="https://workoutlogger.fly.dev/" target="_blank" rel="noopener noreferrer">
                      <TfiWorld size={30} className="icon" color="#FCCB46" />
                    </a>
                  </Col>
                </Row>
                <hr></hr>
              </div>
              <Col>
                <div className="col-4 w-25">
                  <div className="d-flex">
                    <Image src={workoutlogger} alt='workoutlogger' className="baby-toy-img mr-3 mb-3" style={{ maxWidth: '300px' }} />
                    {/* <img src={toysmap} alt='toysmap' className="baby-toy-img ml-4" /> */}
                  </div>
                </div>
              </Col>
            </div>
        </Container>
          </motion.div>
          <motion.div className="container-fluid mt-4" initial="hidden" animate="visible" variants={slideInRight}>
        <Container className="projects mb-5">
            <div className="row align-items-center">
              <div className="col-8">
                <h1 className="mb-4">
                  <a href="https://costapapa.github.io/snake/" target="_blank" rel="noopener noreferrer" className="project-link">Snake Game</a></h1>
                <Row md={8} className="mx-auto">

                  <p> Involved learning Javascript Fundamentals. For this Solo project I created a clone of the famous Snake Game within 5 days.
                    The technical processes involved learning how to manipulate DOM and the basics of building a game using Javascript, HTML and CSS.
                  </p>
                </Row>
                <p>Keys Skills: <SiJavascript size={30} className="icon m-2" color="#FD84A3" />
                  <SiHtml5 size={30} className="icon m-2" color="#FD84A3" />
                  <SiCss3 size={30} className="icon m-2" color="#FD84A3" />
                </p>
                <hr></hr>
                <Row>
                  <Col>
                    <h6>GitHub</h6>
                    <a href="https://github.com/costapapa/snake" target="_blank" rel="noopener noreferrer">
                      <SiGithub size={30} className="icon" color="#FCCB46" />
                    </a>
                  </Col>
                  <Col>
                    <h6>Website</h6>
                    <a href="https://costapapa.github.io/snake/" target="_blank" rel="noopener noreferrer">
                      <TfiWorld size={30} className="icon" color="#FCCB46" />
                    </a>
                  </Col>
                </Row>
                <hr></hr>
              </div>
              <Col>
                <div className="col-4 w-25">
                  <div className="d-flex">
                    <Image src={snake} alt='workoutlogger' className="baby-toy-img mr-3 mb-3" style={{ maxWidth: '300px' }} />
                    {/* <img src={toysmap} alt='toysmap' className="baby-toy-img ml-4" /> */}
                  </div>
                </div>
              </Col>
            </div>
        </Container>
          </motion.div>
    </>
  );
}

export default Projects;