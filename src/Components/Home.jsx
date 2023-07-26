import React, { useState } from 'react'
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
import Certificates from './Certificates'
import project from '../images/project.jpg'
import StarIcon from '@mui/icons-material/Star';
import Typewriter from "typewriter-effect";
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'aos/dist/aos.css';
import CertificatesData from './CertificatesData'
import ProjectData from './ProjectData'
function Home() {
    const [certificateData, setData] = useState(CertificatesData);
    const [projectData, setProjectData] = useState(ProjectData);
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
                        &emsp;&emsp;&emsp;&emsp;Enthusiastic and self-motivated Web Developer
                        knowledge in front-end and back-end technologies. Eager to
                        embark on a rewarding career in web development, showcasing a passion for
                        creating seamless user experiences and eager to learn and stay updated with
                        the latest trends in the industry.  Adept at collaborating with  others and I'm open to
                        growing and improving in a fast-paced environment.
                    </Stack>
                    <Button className="btn" onClick={() => window.open("https://drive.google.com/file/d/1QCfvFEFovL6JNd2kwBt4iBA8xN7pFa7m/view?usp=sharing", '_blank')}>&nbsp;Download CV</Button>
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
                        <div className='projectContainer' style={{ marginBottom: "3%" }} >
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
                        <Project data={projectData} />
                    </div>
                </div>


                <div className='split' id='certificate' data-aos="fade-up">
                    <div >
                        <h2 style={{ paddingTop: "7%" }}>
                            Certifications </h2>
                        <hr style={{ border: "1.5px solid red", width: "50%" }}></hr>
                        <Certificates data={certificateData} />
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