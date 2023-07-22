import { BrowserNotSupported } from '@mui/icons-material';
import Home from './Components/Home'
import React from 'react';
import ContactForm from './Components/ContactForm';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Certificates from './Components/Certificates';
import Project from './Components/Project';
import TopBar from './Components/TopBar';
import { Router } from 'react-router-dom';
import { Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Home />
      {/* // <Router>
      //   <TopBar />
      //   <Routes>
      //     <Route exact path="/"><Home /></Route>
      //     <Route exact path="/contact"><ContactForm /></Route>
      //     <Route exact path="/certificates" ><Certificates /></Route>
      //     <Route exact path="/projects"><Project /></Route> 
      //   </Routes>
      // </Router> */}
      {/* <div>
        <TopBar />
        <Router>
          <Routes>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={ContactForm} />
            <Route exact path="/certificates" component={Certificates} />
            <Route exact path="/projects" component={Project} />
          </Routes>
        </Router>
      </div> */}
    </>
  );
}

export default App;


