import { Col, Container, Row } from "react-bootstrap";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";
import './Contact.css'
import { motion } from "framer-motion"

export default function Contact() {

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
            <h1 className="mt-5">Contact</h1>
            <p className="mt-5">Looking forward to connecting with you!</p>
            <Container className="mt-5">
            <Row className="mx-1">
                <Col className="mt-5 mx-1">
                <motion.div initial="hidden" animate="visible" variants={slideInLeft}>
                <a href="https://www.linkedin.com/in/costa-papadopoulos87/" target="_blank" rel="noopener noreferrer">
                    <SiLinkedin size={100} color="#ed8ba2d9" className="icon" />
                </a>
                </motion.div>
                </Col>
                <Col className="mt-5 mx-1">
                <a href="mailto:costa.papa87@gmail.com" target="_blank" rel="noopener noreferrer">
                    <SiGmail size={100} color="#f1aa83d9" className="icon" />
                </a>
                    <p className="mail">costa.papa87@gmail.com</p>
                </Col>
                <Col className="mt-5 mx-1">
                <motion.div initial="hidden" animate="visible" variants={slideInRight}>
                <a href="https://github.com/costapapa" target="_blank" rel="noopener noreferrer">
                    <SiGithub size={100} color="#f4ca61d9" className="icon" />
                </a>
                </motion.div>
                </Col>
            </Row>
            </Container>
        </>

    )
}