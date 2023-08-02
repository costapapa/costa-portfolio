import { Col, Container, Row } from "react-bootstrap";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";

export default function Contact() {
    return (
        <>
            <h1>Contact</h1>
            <Container>
            <Row>
                <Col>
                <a href="https://www.linkedin.com/in/costa-papadopoulos87/" target="_blank" rel="noopener noreferrer">
                    <SiLinkedin size={50} />
                </a>
                </Col>
                <Col>
                <a href="mailto:costa@gmail.com" target="_blank" rel="noopener noreferrer">
                    <SiGmail size={50}/>
                </a>
                </Col>
            </Row>
            </Container>
        </>

    )
}