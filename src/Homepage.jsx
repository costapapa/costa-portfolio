import React from 'react';
import image from './img/Portofolio Picture.png'
import { Container, Col, Row } from 'react-bootstrap';
import './Homepage.css'
import { DiReact, DiJsBadge, DiHtml5, DiCss3, DiPython, DiNodejs, DiDjango, DiMongodb, DiPostgresql, DiBootstrap } from 'react-icons/di'
import { SiExpress, SiVisualstudiocode, SiGit, SiJest, SiPostman, } from 'react-icons/si'


export default function Homepage() {
    return (
        <>
            <h1 className="mt-4">Welcome!</h1>
            <Container className="homepage-container">
                <Row className="align-items-center">
                    <Col xs={12} md={4}>
                        <img src={image} alt="Logo" className="profile-pic" />
                    </Col>
                    <Col xs={12} md={8} className="name-column">
                        <p>Costa Papadopoulos</p>
                        <p>Software Engineer</p>
                    </Col>
                </Row>
            </Container>
            <h1 className='mt-5'>Skills</h1>
            <Container>
                <Row>
                    <Col>
                        <h4>Languages</h4>
                        <DiJsBadge size={40} /><p>Javascript</p>
                        <DiPython size={40} /><p>Python</p>
                    </Col>
                    <Col>
                        <h4>Front-End</h4>
                        <DiReact size={40} /><p>React</p>
                        <DiHtml5 size={40} /><p>HTML</p>
                        <DiCss3 size={40} /><p>CSS</p>
                        <DiBootstrap size={40} /><p>Bootstrap</p>
                    </Col>
                    <Col>
                        <h4>Back-End</h4>
                        <DiNodejs size={40} className="icon" /><p>nodeJS</p>
                        <DiDjango size={40} className="icon" /><p>django</p>
                        <SiExpress size={40} className="icon" /><p>express</p>
                    </Col>
                    <Col>
                        <h4>Databases</h4>
                        <DiMongodb size={40} /><p>MongoDB</p>
                        <DiPostgresql size={40} /><p>PostGreSQL</p>
                    </Col>
                </Row>
            </Container>

        </>
    );
}
