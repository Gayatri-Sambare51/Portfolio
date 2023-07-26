import React from 'react'
import photo from '../images/sitephoto.jpg'
import '../styles/home.css'
import '../styles/project.css'
import Footer from './Footer'
import { Button, Paper, Stack, Typography, Box } from "@mui/material";
import ContactForm from './ContactForm'
import Technologies from './Technologies'
import Project from './Project'
import java from '../images/java.png';
import python from '../images/python.png';
import mysql from '../images/mysql.png'
import html from '../images/html.png'
import css from '../images/css.png'
import react from '../images/logo512.png'
import javascript from '../images/javascript.png'
import cpp from '../images/cpp.png'
import javac from '../images/Programming In Java.jpg'
import Certificates from './Certificates'
import event from '../images/eventt.png'
import portfolio from '../images/portfolio.png'
import face from '../images/face.png'
import project from '../images/project.jpg'
import StarIcon from '@mui/icons-material/Star';
import BootcampMicrosoft from '../images/BootcampMicrosoft.jpg'
import BootcampGoogle from '../images/BootcampGoogle.jpg'
import Techsaksham from '../images/Techsaksham.jpg'
import Typewriter from "typewriter-effect";
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'aos/dist/aos.css';
function Home() {
    return (
        <>
            <div >
                <Navbar bg="dark" fixed="top" data-bs-theme="dark" collapseOnSelect expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand href="#home">Gayatri Sambare</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end" >
                            <Nav style={{ gap: 20 }}>
                                <Nav.Link className='text-white' href="#home">Home</Nav.Link>
                                <Nav.Link className='text-white' href="#home">
                                    Resume
                                </Nav.Link>
                                <Nav.Link className='text-white' href="#project">Projects</Nav.Link>
                                <Nav.Link className='text-white' href="#certificate">Certification</Nav.Link>
                                <Nav.Link className='text-white' href="#contact">Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div >
            <div className='split' id='home' data-aos="fade-up">
                <div className='split left'>
                    <img
                        className="testimonial-avatar"
                        src={photo}
                        alt="Gayatri Sambare"
                    />
                </div>
                <div className='split right'>
                    <div className="testimonial-quote">
                        <h3>Hello, I am </h3>
                        <h1> Gayatri Sambare<hr></hr></h1>
                    </div>
                    <p className="testimonial-name">
                        <h5>
                            <Typewriter
                                options={{
                                    strings: ['Web Developer'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h5>
                    </p>
                    <Stack
                        direction={{ xs: "column", md: "row" }}
                        alignItems={"flex-start"}
                        style={{ flex: 1 }}
                        sx={{ paddingInline: "1rem" }}
                        gap={2}
                        fontSize={20}
                        textAlign={"justify"}
                    >
                        &emsp;&emsp;&emsp;&emsp;I am a enthusiastic full-stack web developer with an ability to work under
                        pressure & take new responsibilities with challenges. Seeking to build
                        a reliable web application in a reputed and innovative organization, as
                        well as improve individual skills as a full-stack web developer.
                    </Stack>
                    <Button className="btn" onClick={() => window.open("https://drive.google.com/file/d/1QCfvFEFovL6JNd2kwBt4iBA8xN7pFa7m/view?usp=sharing", '_blank')}>&nbsp;Download CV</Button>
                    {/* <Button className="btn">&nbsp;Contact</Button> */}
                </div>
                <br /><br />
                <div >
                    <h2 style={{ marginLeft: "7%" }}>My Journey</h2>
                    <hr style={{ border: "1.5px solid red", marginLeft: "5%", width: "50%" }}></hr>
                    <div className='graduationtext mb-4 mt-4'>
                        <br />
                        <h3>Graduation</h3>
                        <ul>
                            <li>2021-2024</li>
                            <li>Government College Of Engineering, Chh.Sambhajinagar</li>
                            <li>BAMU University</li>
                            <li>Information Technology</li>
                        </ul>
                    </div>
                </div>
                <br />
                <div className='split' style={{ marginBottom: "5%" }} data-aos="fade-up">
                    <h2>Technologies</h2>
                    <hr style={{ border: "1.5px solid red", width: "50%" }}></hr>
                    <br />
                    <div class="outer">
                        <div class="box"><Technologies title="Java" img={java} /></div>
                        <div class="box"><Technologies title="CPP" img={cpp} /></div>
                        <div class="box"><Technologies title="HTML" img={html} /></div>
                        <div class="box"> <Technologies title="CSS" img={css} /></div>
                        <div class="box"><Technologies title="ReactJs" img={react} /></div>
                        <div class="box"><Technologies title="Python" img={python} /></div>
                        <div class="box"><Technologies title="MySql" img={mysql} /></div>
                        <div class="box"><Technologies title="Javascript" img={javascript} /></div>
                        <div class="box"><Technologies title="Rest API" img={mysql} /></div>
                    </div>
                </div>
                <div className='split' id='project' data-aos="fade-up">
                    <div >
                        <h2 style={{ paddingTop: "7%" }}>
                            Projects </h2>
                        <hr style={{ border: "1.5px solid red", width: "50%" }}></hr>
                        <div className='projectContainer' marginBottom="5%" >
                            <div className='projectText'><p width="50%">
                                You can find all my projects on my profile on Github.
                                You can view my activities, contributions and code on this projects.
                                Some of these are completed and some are in progress.I am always looking for
                                new projects and ideas.
                            </p>
                                <Button className="btn" onClick={() => window.open("https://github.com/Gayatri-Sambare51/", '_blank')}><StarIcon />&nbsp;Star me on Github</Button>
                            </div>
                            <div className='projectImg'>
                                <img src={project} ></img>
                            </div>
                        </div>
                        <Project title="My Portfolio&emsp;&emsp;" name="&emsp; - This is my portfolio website include resume, projects certificates and technologies use are html,css,and reactjs." img={portfolio} file="https://github.com/Gayatri-Sambare51/Event-Planning-System" />
                        <Project title="Event Planning System" name="&emsp;- Java desktop application with swing,JDBC connectivity , Mysql and java mail api." img={event} file="https://github.com/Gayatri-Sambare51/Event-Planning-System" />
                        <Project title="Face Recognition for Online Exam" name="&emsp; - In this project technologies use face recognition module,python django." img={face} file="https://github.com/Gayatri-Sambare51/Event-Planning-System" />
                    </div>
                </div>
                <div className='split' id='certificate' data-aos="fade-up">
                    <div >
                        <h2 style={{ paddingTop: "7%" }}>
                            Certifications </h2>
                        <hr style={{ border: "1.5px solid red", width: "50%" }}></hr>
                        <Certificates title="Programming In Java" name="- NPTEL IIT Kharagpur" img={javac} date="30 April 2023" file="https://drive.google.com/file/d/1-QJz1jKGyejfnlXqk8v67RseoG_55pfk/view?usp=sharing" />
                        <Certificates title="Bootcamp Javascript" name="- DevTown under Developer Student Club " img={BootcampGoogle} date="7 Jan 2023" file="https://drive.google.com/file/d/1XePG4dFW0GJ24fr3rxS8_Eq74DsE9iMO/view?usp=sharing" />
                        <Certificates title="Bootcamp Javascript" name="- DevTown under Microsoft Student Ambassador" img={BootcampMicrosoft} date="15 Jan 2023" file="https://drive.google.com/file/d/1V7Pl4sLObVlgVY-EEZAGX3yjxDEIboNu/view?usp=sharing" />
                        <Certificates title="TechSaksham Foundation Course" name="- By Microsoft, SAP,Edunet" img={Techsaksham} date="15 Dec 2022" file="https://drive.google.com/file/d/1hNahrA1xpliPM9WBJHzrsAuHVj2MIZKh/view?usp=sharing" />
                    </div>
                </div>
                <div className='split' id='contact' data-aos="fade-up">
                    <div style={{ paddingTop: "7%" }}>
                        <p style={{ marginLeft: "8%", fontWeight: "bold", fontSize: "1.8rem" }}>Get In Touch</p>
                        <hr style={{ border: "1.5px solid red", width: "50%" }}></hr>
                        <ContactForm />
                    </div>
                </div>
                <div>
                    <div  >

                        <Paper sx={{
                            width: "90%",

                            mx: 1,
                            px: 0.4,
                            py: 2,
                            my: 5,
                            mb: 3,
                            display: 'flex',
                            borderLeft: 4,
                            borderRight: 4,
                            cursor: "pointer",
                            textAlign: "justify",
                            borderColor: "green",
                            backgroundColor: "rgb(234, 235, 241)",
                            ml: "5%",

                        }}
                            elevation={2}
                        >

                            <Box>
                                <Typography style=
                                    {{
                                        padding: "2%",

                                    }}>
                                    Thank you for visiting my portfolio website!
                                    <br></br>I hope this glimpse into my skills and experinces
                                    has provided you with a better understanding of how I can add value
                                    to Projects. I look forward to connecting you soon.
                                </Typography>
                            </Box>
                        </Paper>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Home