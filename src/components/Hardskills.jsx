import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import Hardskillcards from './Hardskillcards';
import web from "../assets/images/webdev.jpeg"
import ai from "../assets/images/aiml.jpeg"
import cpp from "../assets/images/cpp.jpeg"
import rob from "../assets/images/robot.jpeg"
import ui from "../assets/images/ui.jpeg"
import ele from "../assets/images/elec.jpeg"
function Projects() {
  return (
    <> 
      <section className='hardSkills'>
       
      <Container>
        <Row className='titrow'>
          <Col lg={12} sm={12}>
          <h2 className="hardSkillTitle">Hard Skills</h2>
        <p className='hardDes'>I posses a blend of skills to make my domain more extensible and versatile. I focus mostly on software integration with hardware. All changes in the hardware must be monitored and understood with the proper use of an interface. And I bring exactly this to life. </p>
          </Col>
        </Row>
        <Row className='row1 brow brow1'>
          <Col lg={4} md={6} sm={12}>
            <Hardskillcards   Title="Web Dev" imageURL={web} Description="Hello there! I'm a dedicated and creative Full Stack Developer specializing in the MERN (MongoDB, Express.js, React.js, Node.js) stack. With a keen eye for detail and a love for crafting seamless web experiences, I bring your ideas to life by combining robust back-end solutions with stunning front-end interfaces." ></Hardskillcards>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <Hardskillcards   Title="DSA with C++" imageURL={cpp} Description="In the realm of Data Structures and Algorithms, my proficiency in C++ shines. I've tackled diverse problem domains, optimizing solutions for efficiency and readability. From sorting algorithms to graph theory, my C++ expertise is the backbone of robust and scalable software solutions."></Hardskillcards>
            
          </Col>
          <Col lg={4} md={6} sm={12}>
            <Hardskillcards   Title="AI/ML" imageURL={ai} Description="Explore my portfolio to delve into fascinating AI/ML projects where I've implemented predictive models, natural language processing, and computer vision. From sentiment analysis to image recognition, each project showcases my commitment to leveraging AI for tangible and impactful results"></Hardskillcards>
          </Col>
        </Row>

        <Row className='row2 brow borw2'>
          <Col lg={4} md={6} sm={12}>
            <Hardskillcards   Title="Robotics" imageURL={rob} Description="Hello there! I'm a dedicated and creative Full Stack Developer specializing in the MERN (MongoDB, Express.js, React.js, Node.js) stack. With a keen eye for detail and a love for crafting seamless web experiences, I bring your ideas to life by combining robust back-end solutions with stunning front-end interfaces." ></Hardskillcards>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <Hardskillcards   Title="UI/UX design" imageURL={ui} Description="In the realm of Data Structures and Algorithms, my proficiency in C++ shines. I've tackled diverse problem domains, optimizing solutions for efficiency and readability. From sorting algorithms to graph theory, my C++ expertise is the backbone of robust and scalable software solutions."></Hardskillcards>
            
          </Col>
          <Col lg={4} md={6} sm={12}>
            <Hardskillcards   Title="Electronics" imageURL={ele} Description="Explore my portfolio to delve into fascinating AI/ML projects where I've implemented predictive models, natural language processing, and computer vision. From sentiment analysis to image recognition, each project showcases my commitment to leveraging AI for tangible and impactful results"></Hardskillcards>
          </Col>
        </Row>
         
         


        
      </Container>
      </section>
    </>
  );
}

export default Projects;
