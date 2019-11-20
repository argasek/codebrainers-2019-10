import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Row, Col } from 'reactstrap';
import UserSkills from "./components/user/skill/UserSkills";
import obrazek from './images/zadanie-domowe-01.png';

// xs sm md lg xl

function App() {
  return (
    <div className="container">
      <Row>
        <Col xs={6}>
          <p class="text-danger font-weight-bold">ZAD 1 Przeczytać dokumentację Bootstrapa. Chociaż część. Uczyń itemy po lewej tak ładnymi jak te w ściągawce</p>
          <UserSkills />
        </Col>
        <Col xs={6}>
          <p class="text-danger font-weight-bold">ZAD 2 Na ekranach mobilnych ta ściąga jest za mała! Niech ułoży się pod spód!</p>
          <img src={obrazek} width="100%"/>
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

export default App;
