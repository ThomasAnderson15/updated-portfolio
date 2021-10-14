import "./App.css"
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Thinkful from './components/Thinkful/Thinkful'
import { Route, Switch } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import Projects from "./components/Projects/Projects";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";



function App() {
  return (
    <div >
      <div className="main-container">
      <Navbar />
      <hr/>

        <Switch>
       

          <Route path="/about">
            <About />
            <Thinkful />
            <Footer />

          </Route>

          <Route path='/projects'>
            <Projects />
            <Footer />

          </Route>

          <Route path='/contact'>
            <Contact />

          </Route>

          <Route exact path='/'>
        <br/>
        <br/>
            <Home />
          </Route>

          <Route>
            <NotFound />

          </Route>

        </Switch>



      </div>

    </div>
  );
}

export default App;
