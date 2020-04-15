import React from 'react';
import './App.scss';
import axios from 'axios';
import {
  Button,
  Input,
  Label,
  Row,
  Col,
  FormGroup,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  Collapse,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Card,
  CardBody, ListGroup
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCog, faHome, faLeaf, faSeedling} from '@fortawesome/free-solid-svg-icons'
import CategoryItem from './components/categories/CategoryItem';
import Plant from './components/plants/Plant';
import Select from './components/shared/Select';
import {
  NavLink as RouterNavLink,
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';

const CATEGORIES_FETCH_DELAY = 50;
const PLANTS_FETCH_DELAY = 50;

const someArray = [
  { label: 'Jeszcze inne coś', value: '132', size: 1 },
  { label: 'Inne', value: '333' },
  { label: 'Coś', value: '13232' },
];

const someOtherArray = [
  { label: 'Codziennie', value: '1' },
  { label: 'Co dwa dni', value: '2' },
  { label: 'Co tydzień', value: '7' },
];

class App extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      plants: [],
      successCategories: undefined,
      successPlants: undefined,
      inProgress: true,
      plantName: '',
      someSelectField: '333',
      fertilizingFrequency: someOtherArray[someOtherArray.length-1].value
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
      this.fetchPlants()
    ]).then(stopProgress);

  }

  delayFetch(ms, method) {
    return new Promise((resolve, reject) => setTimeout(() => method(resolve, reject), ms));
  }

  fetchCategories() {
    const requestUrl = 'http://gentle-tor-07382.herokuapp.com/categories/';

    return this.delayFetch(CATEGORIES_FETCH_DELAY, (resolve, reject) => {
      axios.get(requestUrl)
        .then((response) => {
          const data = response.data;
          const categories = data.map((item) => item.name);
          const successCategories = true;
          this.setState({categories, successCategories});
          resolve();
        })
        .catch((error) => {
          this.setState({successCategories: false});
          reject();
        })
        .finally(() => {
          console.log('Resolved');
        });
    });
  }

  fetchPlants() {
    const requestUrl = 'http://gentle-tor-07382.herokuapp.com/plants/';

    return this.delayFetch(PLANTS_FETCH_DELAY, (resolve, reject) => {
      axios.get(requestUrl)
        .then((response) => {
          const data = response.data;
          const plants = data.map((item) => item.name);
          const successPlants = true;
          this.setState({ plants, successPlants });
          resolve();
        })
        .catch((error) => {
          this.setState({successPlants: false});
          reject();
        });
    });
  }

  inputOnChange = (event) => {
    const { currentTarget } = event;
    const { value, name } = currentTarget;
    this.setState({ [name]: value });
  };

  // componentDidUpdate(prevProps, prevState) {
  //   console.log(prevState.plantName + '=>' + this.state.plantName);
  // }

  render() {
    const {
      categories,
      plants,
      inProgress,
      successCategories,
      successPlants,
      plantName,
      someSelectField,
      fertilizingFrequency
    } = this.state;

    const isOpen = false;
    const toggle = () => {};

    return (
      <Router>
        <Navbar color="dark" dark expand="md" className="mb-4">
          <NavbarBrand href="/">Plantastic</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink tag={RouterNavLink} exact to="/" activeClassName="active">
                  <FontAwesomeIcon icon={faSeedling}/>
                  {' '}
                  Plants
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RouterNavLink} to="/categories" activeClassName="active">
                  <FontAwesomeIcon icon={faLeaf}/>
                  {' '}
                  Categories
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RouterNavLink} to="/rooms">
                  <FontAwesomeIcon icon={faHome}/>
                  {' '}
                  Rooms
                </NavLink>
              </NavItem>
            </Nav>
            <Nav navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <FontAwesomeIcon icon={faCog}/>
                  {' '}
                  Account
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Preferences…
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        <Container>
          <Switch>
            <Route exact path="/">
              <Card className="mb-4">
                <CardBody>
                  <form method="GET">
                    <Row>
                      <Col xs={6} lg={3}>
                        <Select name="someSelectField" value={someSelectField} onChange={this.inputOnChange} options={someArray} label="Jakieś pole" />
                      </Col>
                      <Col xs={6} lg={5}>
                        <Select name="fertilizingFrequency" value={fertilizingFrequency} onChange={this.inputOnChange} options={someOtherArray} label="Fertilizing frequency" />
                      </Col>
                      <Col xs={12} lg={4}>
                        <FormGroup>
                          <Label for="plantName">Plant name:</Label>
                          <Input
                            id="plantName"
                            name="plantName"
                            type="text"
                            value={plantName}
                            onChange={this.inputOnChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Button type="submit" className="mt-3">Wyślij formularz</Button>
                  </form>
                </CardBody>
              </Card>
            </Route>
            <Route path="/categories">
              <Card>
                <CardBody>
                  <div className="app-container">
                    {
                      inProgress && <p>Loading data...</p>
                    }
                    {
                      successCategories === false &&
                      <p>Nie udało się pobrać Kategorii</p>
                    }
                    {
                      successPlants === false &&
                      <p>Nie udało się pobrać Kwiatow</p>
                    }
                    {
                      successPlants &&
                      <div className="plants">
                        {
                          plants.map((plant, index, arr) =>
                            <Plant
                              name={plant}
                              key={index}
                            />
                          )
                        }
                      </div>
                    }
                    {
                      successCategories &&
                      <ListGroup className="categories">
                        {
                          categories.map((item, index, arr) =>
                            <CategoryItem
                              category={item}
                              label='category'
                              key={index}
                              isLastItem={arr.length - 1 === index}
                              index={index}
                            />
                          )
                        }
                      </ListGroup>
                    }
                  </div>
                </CardBody>
              </Card>
            </Route>
            <Route path="/rooms">
              Rooms
            </Route>
          </Switch>
        </Container>
      </Router>
    )
  }
}


export default App;
