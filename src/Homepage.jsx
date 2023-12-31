import React from 'react';
import image from './img/Portofolio Picture.png'
import { Container, Col, Row } from 'react-bootstrap';
import './Homepage.css'
import { DiReact, DiJsBadge, DiHtml5, DiCss3, DiPython, DiNodejs, DiDjango, DiMongodb, DiPostgresql, DiBootstrap } from 'react-icons/di'
import { SiExpress, SiVisualstudiocode, SiGit, SiJest, SiPostman, } from 'react-icons/si'
import { motion } from 'framer-motion'


export default function Homepage() {

    const slideInLeft = {
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 1.5 } },
      };
    
      const slideInRight = {
        hidden: { x: 100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 3 }  },
      };

    

    return (
        <>
            <Container className="homepage-container">
            <h1 className="font mt-4">Welcome 👋🏽</h1>
                <Row className="align-items-center">
                    <Col xs={12} md={4} className="text-center mb-4">
                        <motion.img src={image} alt="Logo" className="profile-pic" initial="hidden" animate="visible" variants={slideInLeft} />
                    </Col>
                    <Col xs={12} md={8} className="">
                    <motion.h1 initial="hidden" animate="visible" variants={slideInRight}>
                     Costa Papadopoulos
                    </motion.h1>
                        <h2>Software Engineer</h2>
                        <Row md={8} className="mx-auto">
                        <p className="mt-3 text-start">After embarking on a Full Stack General Assembly course, I’m now looking to combine my customer centric mentality with my knowledge and passion for solving problems, to become a well rounded software engineer. I am looking to join a vibrant team that would help me develop my skills and enable me to keep learning. I love working alongside other people and bouncing ideas off of each other. I can’t wait to get started and continue learning!</p>
                        </Row>
                    </Col>
                    
                </Row>
            </Container>
            <h1 className='font mt-5'>Skills</h1>
            <Container>
                <Row>
                    <Col className="font">
                        <h4 className="mb-4">Languages</h4>
                        <DiJsBadge size={40} color="#ee9499d9" /><p>Javascript</p>
                        <DiPython size={40} color="#ee9499d9" /><p>Python</p>
                    </Col>
                    <Col className="font">
                        <h4 className="mb-4">Front-End</h4>
                        <DiReact size={40} color="#f0a28bd9"/><p>React</p>
                        <DiHtml5 size={40} color="#f0a28bd9" /><p>HTML</p>
                        <DiCss3 size={40} color="#f0a28bd9" /><p>CSS</p>
                        <DiBootstrap size={40} color="#f0a28bd9" /><p>Bootstrap</p>
                    </Col>
                    <Col className="font">
                        <h4 className="mb-4">Back-End</h4>
                        <DiNodejs size={40} color="#f2b37ad9" className="icon" /><p>nodeJS</p>
                        <DiDjango size={40} color="#f2b37ad9"  className="icon" /><p>django</p>
                        <SiExpress size={40} color="#f2b37ad9"  className="icon" /><p>express</p>
                    </Col>
                    <Col className="font">
                        <h4 className="mb-4">Databases</h4>
                        <DiMongodb size={40} color="#f4ca63d9" /><p>MongoDB</p>
                        <DiPostgresql size={40} color="#f4ca63d9" /><p>PostGreSQL</p>
                    </Col>
                </Row>
            </Container>

        </>
    );
}
