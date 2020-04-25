import React from 'react';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import PlantasticNavbar from "components/nav/navbar/PlantasticNavbar";
import PlantasticContainer from "components/main/PlantasticContainer";

class App extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {};
  }

  delayFetch(ms, func) {
    return new Promise((resolve, reject) => setTimeout(() => func(resolve, reject), ms));
  }

  render() {

    return (
      <Router>
        <PlantasticNavbar/>
        <PlantasticContainer
          delayFetch={ this.delayFetch }
        />
      </Router>
    )
  }
}


export default App;
