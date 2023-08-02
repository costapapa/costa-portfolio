import React from 'react';
import image from './Portofolio Picture.png';
import { Container, Col, Row } from 'react-bootstrap';
import './Homepage.css'
import { DiReact, DiJsBadge, DiHtml5, DiCss3, DiPython, DiNodejs, DiDjango, DiMongodb, DiPostgresql, DiBootstrap } from 'react-icons/di'
import { SiExpress, SiVisualstudiocode, SiGit, SiJest, SiPostman, } from 'react-icons/si'
export default function Homepage() {
    return (
        <>
            <h1>HomePage</h1>
            <Container className="homepage-container">
                <Row className="align-items-center"> {/* Add 'align-items-center' class here */}
                    <Col xs={12} md={4}>
                        <img src={image} alt="Logo" />
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
                        <DiJsBadge size={40} />
                        <DiPython size={40} />
                    </Col>
                    <Col>
                        <h4>Front-End</h4>
                        <DiReact size={40} />
                        <DiHtml5 size={40} />
                        <DiCss3 size={40} />
                        <DiBootstrap size={40} />
                    </Col>
                    <Col>
                        <h4>Back-End</h4>
                        <DiNodejs size={40} className="icon" />
                        <DiDjango size={40} className="icon" />
                        <SiExpress size={40} className="icon" />
                    </Col>
                    <Col>
                        <h4>Databases</h4>
                        <DiMongodb size={40} />
                        <DiPostgresql size={40} />
                    </Col>
                </Row>
            </Container>

        </>
    );
}
