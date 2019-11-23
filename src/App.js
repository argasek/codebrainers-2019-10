import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Row, Col } from 'reactstrap';
import UserSkills from "./components/user/skill/UserSkills";
import obrazek from './images/zadanie-domowe-01.png';

import classNames from 'classnames';

// xs sm md lg xl

class App extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      clickedYet: false,
      secondclick: false
    }
  }

  clickActionToPerform = (event) => {
    console.log('Yay, clicked!')
    console.log(event);
    console.log(event.currentTarget);
    this.setState({ clickedYet: !this.state.clickedYet });
  };

  secondclickActionToPerform = (event) => {
    this.setState({secondclick: true});
    console.log('dupa')
  };

  render() {
    const { clickedYet, secondclick } = this.state;

    const paragraphClassName = classNames(
      'font-weight-bold',
      {'text-danger' : !clickedYet || !secondclick },
      {'text-primary' : clickedYet && secondclick}
    );
    console.log('dwie dupy', clickedYet, secondclick);
    console.log(!clickedYet && !secondclick);

  return (
    <div className="container">
      <Row >
        <Col xs={6}>
          <p className={paragraphClassName}>ZAD 1 Przeczytać dokumentację Bootstrapa. Chociaż część. Uczyń itemy po lewej tak ładnymi jak te w ściągawce</p>
          <UserSkills secondclickaction={this.secondclickActionToPerform} />
        </Col>
        <Col xs={6}>
          <p className="text-danger font-weight-bold">ZAD 2 Na ekranach mobilnych ta ściąga jest za mała! Niech ułoży się pod spód!</p>
          <img src={obrazek} width="100%" onClick={(event) => this.clickActionToPerform(event)}/>
        </Col>
      </Row>
      <Row>
        <p className="text-primary font-weight-bold">
          ZAD 3*
          1. Spraw, aby po najechaniu kursorem myszki tło pod elementem Skilla zmieniało swój odcień
          na lekko szarawy.
          2. Spraw, aby po kliknięciu w każdy ze Skilli ten klik przenosił do jakiejś strony internetowej o
          kwiatkach. Np. wolnekonopie.eu.
          3. Spraw, aby po najechaniu kursorem myszki szare tło pojawiało się płynnie :)
        </p>
      </Row>
    </div>
  );

  }
}

export default App;
