import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Row, Col } from 'reactstrap';
import UserSkills from "./components/user/skill/UserSkills";

// xs sm md lg xl

function App() {
  return (
    <div className="container">
      <Row>
        <Col xs={12} md={6} lg={3}>
          <UserSkills />
        </Col>
        <Col xs={12} md={6} lg={3}>
        </Col>
      </Row>
    </div>
  );
}

export default App;
