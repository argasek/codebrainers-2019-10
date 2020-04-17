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
      categories: [],
      successCategories: undefined,
      inProgress: true,
      plantName: '',
      someSelectField: '333',
      fertilizingFrequency: someOtherArray[someOtherArray.length - 1].value
    };
  }

  componentDidMount() {

    console.log('componentDidMount');

    const stopProgress = () => {
      console.log('stopProgress');
      this.setState({ inProgress: false });
    };

    const allPromises = Promise.allSettled([
      this.fetchCategories(),
    ]);

    allPromises
      .then(stopProgress);

  }

  delayFetch(ms, method) {
    return new Promise((resolve, reject) => setTimeout(() => method(resolve, reject), ms));
  }

  fetchCategories() {

    console.log(this.a);

    const requestUrl = 'http://gentle-tor-07382.herokuapp.com/categories/';

    return this.delayFetch(CATEGORIES_FETCH_DELAY, (resolve, reject) => {
      axios.get(requestUrl)
        .then((response) => {
          const data = response.data;
          const categories = data.map((item) => item.name);
          const successCategories = true;
          this.setState({ categories, successCategories });
          resolve();
        })
        .catch((error) => {
          this.setState({ successCategories: false });
          reject();
        })
        .finally(() => {
          console.log('Resolved');
        });
    });
  }

  inputOnChange = (event) => {
    const { currentTarget } = event;
    const { value, name } = currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    const {
      categories,
      fertilizingFrequency,
      inProgress,
      plantName,
      someSelectField,
      successCategories,
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
          categories={ categories }
          inProgress={ inProgress }
          successCategories={ successCategories }
        />
      </Router>
    )
  }
}


export default App;
