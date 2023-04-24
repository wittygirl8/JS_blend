import './App.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Index from './pages/index';
import About from './pages/about';
import Contact from './pages/contact';
import Blogs from './pages/blogs';
import Service from './pages/service';
import TermsConditions from './pages/ResourcePages/term';
import Cookiepolicy from './pages/ResourcePages/cookiepolicy';
import Privecy from './pages/ResourcePages/privecy';
import ResearchDevelopment from "./pages/servicesPages/ResearchDevelopment/ResearchDevelopment";
import BigDataAnalytics from "./pages/servicesPages/BidDataAnalytics/BidDataAnalytics";
import BotDevelopment from "./pages/servicesPages/BotDevelopment/BotDevelopment";
import SupportServices from "./pages/servicesPages/SupportServices/SupportServices";
import QASoftwareTesting from "./pages/servicesPages/QASoftwareTesting/QASoftwareTesting";
import Rfid from './pages/servicesPages/rfid/rfid';
import ApplicationDevelopment from './pages/servicesPages/applicationDevelopment/applicationDevelopment';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/contact">
          <Contact />
        </Route>

        <Route exact path="/blog">
          <Blogs />
        </Route>
        <Route exact path="/portfolio">
          <Service />
        </Route>
        <Route exact path="/termconditions">
          <TermsConditions />
        </Route>
        <Route exact path="/cookiepolicy">
          <Cookiepolicy />
        </Route>
        <Route exact path="/privecy">
          <Privecy />
        </Route>
        <Route exact path="/rfid">
          <Rfid />
        </Route>
        <Route exact path="/research-and-development">
          <ResearchDevelopment />
        </Route>
        <Route exact path="/bigdata-analytics">
          <BigDataAnalytics />
        </Route>
        <Route exact path="/bot-development">
          <BotDevelopment />
        </Route>
        <Route exact path="/support-services">
          <SupportServices />
        </Route>
        <Route exact path="/qa-software-testing">
          <QASoftwareTesting />
        </Route>
        <Route exact path="/application-development">
          <ApplicationDevelopment />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
