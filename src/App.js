import React from 'react';
import './App.scss';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import PlantasticNavbar from "components/nav/navbar/PlantasticNavbar";
import { someOtherArray } from "constants/PlantConstants";
import PlantasticContainer from "components/main/PlantasticContainer";

const CATEGORIES_FETCH_DELAY = 500;

class App extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      plantName: '',
      someSelectField: '333',
      fertilizingFrequency: someOtherArray[someOtherArray.length - 1].value
    };
  }

  delayFetch(ms, func) {
    return new Promise((resolve, reject) => setTimeout(() => func(resolve, reject), ms));
  }

  inputOnChange = (event) => {
    const { currentTarget } = event;
    const { value, name } = currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    const {
      fertilizingFrequency,
      plantName,
      someSelectField,
    } = this.state;

    return (
      <Router>
        <PlantasticNavbar/>
        <PlantasticContainer
          delayFetch={ this.delayFetch }
          someSelectField={ someSelectField }
          fertilizingFrequency={ fertilizingFrequency }
          inputOnChange={ this.inputOnChange }
          plantName={ plantName }
        />
      </Router>
    )
  }
}


export default App;
