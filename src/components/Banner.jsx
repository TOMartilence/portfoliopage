import { Container, Row, Col } from 'react-bootstrap';
import pdf from "../assets/fonts/ThomasJefferson.pdf"
import { useTypewriter } from 'react-simple-typewriter';
import { Cursor } from 'react-simple-typewriter';
import danceinspace from "../assets/images/danceinspace.png"
function Banner() {
  const[display]=useTypewriter({
    words:["Developer","UI/UX designer","Electrical Engineer"],
    loop:{},
    typeSpeed:200,
    deleteSpeed:50,
  });
  return (
    <section className='banner' id='home'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={7}>
            <h5 className='tagline'>Welcome to my portfolio</h5>
            <h1 className='titular'>Hi! I'm Tom - <br /> <span className='runSkills'>{display}</span><Cursor/></h1>
            <p className='description'>Hearty Welcome! I'm Thomas Jefferson an Electrical Engineering sophomore. I offer you
            a unique blend of skills embedding various technolgies with a creative mindset and commitment to excellence. Feel free to explore this 
            portfolio and discover my journey, skills and exciting projects I've been a part of. 
            Lets connect to explore new oppurtunities together.</p>
          </Col>

          <Col xs={12} md={6} xl={5}>
                <img className='danceinspace' src={danceinspace} alt="" />
          </Col>
        </Row>

        <Row>
        <button className="connect-button vvd" id='bottomconnect'>
  <a href={pdf} download className='downLoadLink' style={{textDecoration:"none"}}>Download Resume</a>
</button>

        </Row>
      </Container>
    </section>
  );
}

export default Banner;
