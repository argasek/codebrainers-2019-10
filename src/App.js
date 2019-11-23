import React from 'react';
import './App.css';
import { Row, Col } from 'reactstrap';
import UserSkills from "./components/user/skill/UserSkills";
import placeholderImage from './images/zadanie-domowe-01.png';

import classNames from 'classnames';
import skillLevels from "./models/SkillLevels";

// xs sm md lg xl

class App extends React.PureComponent {

  constructor(props) {
    super(props);

    const userSkillLevels = this.cloneSkillLevels(skillLevels);

    this.state = {
      clickedOnUserSkillLevel: false,
      clickedOnPlaceholderImage: false,
      userSkillLevels
    }
  }

  cloneSkillLevels = (items) => items.map((item) => item.clone());
  getRandomIndex = (n) => Math.floor(Math.random() * n);

  getRandomSkillLevel = () => {
    const index = this.getRandomIndex(skillLevels.length);
    return skillLevels[index];
  };

  userSkillClickAction = (event) => {
    const userSkillLevels = this.cloneSkillLevels(this.state.userSkillLevels);
    const randomSkillLevel = this.getRandomSkillLevel();

    userSkillLevels.push(randomSkillLevel);

    this.setState({
      clickedOnUserSkillLevel: true,
      userSkillLevels
    });
  };

  rightItemClickAction = (event) => {
    this.setState({ clickedOnPlaceholderImage: true });
  };

  render() {
    const {
      clickedOnUserSkillLevel,
      clickedOnPlaceholderImage,
      userSkillLevels
    } = this.state;

    const textDanger = !clickedOnUserSkillLevel || !clickedOnPlaceholderImage;
    const textPrimary = clickedOnUserSkillLevel && clickedOnPlaceholderImage;

    const paragraphClassName = classNames(
      'font-weight-bold',
      { 'text-danger': textDanger },
      { 'text-primary': textPrimary }
    );

    return (
      <div className="container">
        <Row>
          <Col xs={12} lg={6}>
            <p className={paragraphClassName}></p>
            <UserSkills
              skillLevels={userSkillLevels}
              onUserSkillClick={this.userSkillClickAction}
            />
          </Col>
          <Col xs={12} lg={6} className="p-3">
            <h4 className="text-danger font-weight-bold">Zadania domowe:</h4>
            <ol className="text-white-50 small">
              <li>
                Spraw, aby kliknięcie w element listy w lewej kolumnie dodawało
                nowy (tj. losowany spośród istniejących) element na jej początku (nie zaś, jak obecnie, na końcu).
              </li>
              <li>
                Spraw, aby kliknięcie w element listy w lewej kolumnie dodawało
                5 nowych (j.w.) elementów na jej początku.
              </li>
              <li>
                Spraw, aby kliknięcie w obrazek poniżej treści zadań przywracało
                na liście 5 początkowych elementów.
              </li>
              <li>
                Spraw, aby każdy nowododany element listy miał taki sam tytuł, ale nieco inny (losowy) opis.
                Skorzystaj z biblioteki <code>chance</code>, np. tak:
                <pre className="p-3 mt-3 bg-light">
                  const description = chance.paragraph({'{'} sentences: 1 {'}'});
                </pre>
              </li>
              <li>
                <span className="text-success">Dodatkowo: </span>
                Spraw, aby podczas startu aplikacji pięć elementów listy widocznej
                po lewej stronie ułożonych było w losowej kolejności.
              </li>
            </ol>
            <p className="text-center">
              <img src={placeholderImage} width="50%" onClick={(event) => this.rightItemClickAction(event)}/>
            </p>

          </Col>
        </Row>
        <Row>
          <p className="text-primary font-weight-bold">
          </p>
        </Row>
      </div>
    );

  }
}

export default App;
