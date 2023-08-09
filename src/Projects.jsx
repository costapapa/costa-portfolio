import babytoy from './img/babytoysapp.png'
import apodpage from './img/apodpage.png'
import workoutlogger from './img/workoutlogger.png'
import snake from './img/snake.png'
import './Projects.css'
import { Container, Row, Col } from 'react-bootstrap';
import { DiReact, DiNodejs, DiMongodb, DiPostgresql } from 'react-icons/di'
import { SiExpress, SiGithub, SiGooglemaps, SiPython, SiDjango, SiJavascript, SiHtml5, SiCss3 } from 'react-icons/si'

function Projects() {

  return (
    <>
      <h1 className="mb-5 mt-5">Projects</h1>
      <Container>
        <div className="container-fluid mt-4">
          <div className="row align-items-center">
            <div className="col-8">
              <h2 className="mb-4">
                <a href="https://babytoysapp-4319c3b1333b.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="project-link">Baby Toys App</a></h2>
              <p>A toy app, where users can upload unwanted Baby Toys and can organise collections amongst users. This includes a Google maps API which maps the Users location</p>
              <p>Keys Skills: <DiReact size={30} className="icon" color="#FD84A3" />
                <SiExpress size={30} className="icon" color="#FD84A3" />
                <DiMongodb size={30} className="icon" color="#FD84A3" />
                <DiNodejs size={40} className="icon" color="#FD84A3" />
                <SiGooglemaps size={30} className="icon" color="#FD84A3" /></p>
              <hr></hr>
              <Row>
                <a href="https://github.com/costapapa/BabyToys" target="_blank" rel="noopener noreferrer">
                  <SiGithub size={30} className="icon" color="#FCCB46" />
                </a>
              </Row>
              <hr></hr>
            </div>
            <Col>
              <div className="col-4 w-25">
                <div className="d-flex">
                  <img src={babytoy} alt='babytoy' className="baby-toy-img mr-3" />
                  {/* <img src={toysmap} alt='toysmap' className="baby-toy-img ml-4" /> */}
                </div>
              </div>
            </Col>
          </div>
        </div>
      </Container>
      <Container>
        <div className="container-fluid mt-4">
          <div className="row align-items-center">
            <div className="col-8">
              <h2 className="mb-4">
                <a href="https://space-cat.fly.dev/" target="_blank" rel="noopener noreferrer" className="project-link">Space Cat App</a></h2>
              <p>The app was designed to search Nasa Image of the day by date and save the images down to an album. Once the pictures were saved down to the database they made them more easily accessible, as you would not need to keep calling the NASA API. My key contribution to this group project was ensuring the API was working correctly. </p>
              <p>Keys Skills: 
                <SiPython size={30} className="icon ml-5" color="#FD84A3" />
                <SiDjango size={30} className="icon" color="#FD84A3" />
                <DiPostgresql size={30} className="icon" color="#FD84A3" />
                </p>
              <hr></hr>
              <Row>
                <a href="https://github.com/costapapa/SpaceCAT" target="_blank" rel="noopener noreferrer">
                  <SiGithub size={30} className="icon" color="#FCCB46" />
                </a>
              </Row>
              <hr />
            </div>
            <Col>
              <div className="col-4 w-25">
                <div className="d-flex">
                  <img src={apodpage} alt='apodpage' className="baby-toy-img mr-3" />
                  {/* <img src={albumpage} alt='albumpage' className="baby-toy-img ml-4" /> */}
                </div>
              </div>
            </Col>
          </div>
        </div>
      </Container>
      <Container>
        <div className="container-fluid mt-4">
          <div className="row align-items-center">
            <div className="col-8">
              <h2 className="mb-4">
                <a href="https://workoutlogger.fly.dev/" target="_blank" rel="noopener noreferrer" className="project-link">Workout Logger</a></h2>
              <p>The app was designed as an app where you could record and log all your workouts. I learnt how to implement database information through my app and even included Google Authentication for users to sign up . The goal of the project was to create an App that included CRUD (Create, Read, Update & Delete) functionality.</p>
              <p>Keys Skills: <SiJavascript size={30} className="icon" color="#FD84A3" />
                <SiExpress size={30} className="icon" color="#FD84A3" />
                <DiMongodb size={30} className="icon" color="#FD84A3" />
                <DiNodejs size={40} className="icon" color="#FD84A3" />
              </p>
              <hr></hr>
              <Row>
                <a href="https://github.com/costapapa/workout-app" target="_blank" rel="noopener noreferrer">
                  <SiGithub size={30} className="icon" color="#FCCB46" />
                </a>
              </Row>
              <hr></hr>
            </div>
            <Col>
              <div className="col-4 w-25">
                <div className="d-flex">
                  <img src={workoutlogger} alt='workoutlogger' className="baby-toy-img mr-3" />
                  {/* <img src={toysmap} alt='toysmap' className="baby-toy-img ml-4" /> */}
                </div>
              </div>
            </Col>
          </div>
        </div>
      </Container>
      <Container>
        <div className="container-fluid mt-4">
          <div className="row align-items-center">
            <div className="col-8">
              <h2 className="mb-4">
                <a href="https://costapapa.github.io/snake/" target="_blank" rel="noopener noreferrer" className="project-link">Snake Game</a></h2>
              <p> Involved learning Javascript Fundamentals. For this Solo project I created a clone of the famous Snake Game within 5 days.  
                  The technical processes involved learning how to manipulate DOM and the basics of building a game using Javascript, HTML and CSS.
              </p>
              <p>Keys Skills: <SiJavascript size={30} className="icon" color="#FD84A3" />
                <SiHtml5 size={30} className="icon" color="#FD84A3" />
                <SiCss3 size={30} className="icon" color="#FD84A3" />
              </p>
              <hr></hr>
              <Row>
                <a href="https://github.com/costapapa/snake" target="_blank" rel="noopener noreferrer">
                  <SiGithub size={30} className="icon" color="#FCCB46" />
                </a>
              </Row>
              <hr></hr>
            </div>
            <Col>
              <div className="col-4 w-25">
                <div className="d-flex">
                  <img src={snake} alt='workoutlogger' className="baby-toy-img mr-3" />
                  {/* <img src={toysmap} alt='toysmap' className="baby-toy-img ml-4" /> */}
                </div>
              </div>
            </Col>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Projects;