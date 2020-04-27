import React from 'react';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthenticatedNavbar from "components/authenticated/AuthenticatedNavbar";
import AuthenticatedContainer from "components/authenticated/AuthenticatedContainer";

class App extends React.PureComponent {

  render() {

    return (
      <Router>
        <AuthenticatedNavbar />
        <AuthenticatedContainer />
      </Router>
    );
  }

}


export default App;
