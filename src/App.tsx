import React from 'react';
//import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Launch from './components/Launch';
import Home from './components/Home/Home';
import LaunchDetails from './components/LaunchDetails'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from './components/Header';


// function App() {
//   return (
//     <div >
//       {/* <Launch/> */}
//       <Home/>
//     </div>
//   );
// }

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/launch" component={Launch} />
          <Route exact path="/launch/:id" component={LaunchDetails}/>
          <Route path="*" component={() => <h2>Error 404 <br></br> Page Not Found</h2>} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
