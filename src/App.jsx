import React from 'react';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import PlantasticNavbar from "components/nav/navbar/PlantasticNavbar";
import PlantasticContainer from "components/main/PlantasticContainer";

class App extends React.PureComponent {

  render() {

    return (
      <Router>
        <PlantasticNavbar />
        <PlantasticContainer />
      </Router>
    );
  }

}


export default App;
