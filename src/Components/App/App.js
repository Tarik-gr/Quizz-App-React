import '../../App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../Header'
import Landing from '../Landing'
import Footer from '../Footer'
import Connected from '../Connected'
import Login from '../Login';
import Signup from '../Signup'
import ErrorPage from '../ErrorPage'
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <Router>
        <Header />
          <Switch>
            <Route path="/" exact component ={Landing} />
            <Route path="/start" component ={Connected} />
            <Route path="/login" component ={Login} />
            <Route path="/signup" component ={Signup} />
            <Route component ={ErrorPage} />
          </Switch>
        <Footer />
    </Router>
  );
}

export default App;
