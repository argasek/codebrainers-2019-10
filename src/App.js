import React from 'react';
import './App.css';
import { Row, Col } from 'reactstrap';
import UserSkills from "./components/user/skill/UserSkills";
import placeholderImage from './images/zadanie-domowe-01.png';
import Chance from 'chance';
import classNames from 'classnames';
import skillLevels from "./models/SkillLevels";

const chance = new Chance();

// xs sm md lg xl

class App extends React.PureComponent {
  static NUMBER_OF_SKILLS_TO_ADD = 5;

  constructor(props) {
    super(props);

    const userSkillLevels = this.cloneSkillLevels(skillLevels);

    this.state = {
      clickedOnUserSkillLevel: false,
      clickedOnPlaceholderImage: false,
      userSkillLevels: this.getShuffledSkillLevels(userSkillLevels)
    }
  }

  getShuffledSkillLevels = (items) => {
    const shuffledSkillLevels = [];

    while (items.length > 0) {
      let randomItemIndex = this.getRandomIndex(items.length);

      shuffledSkillLevels.push(items[randomItemIndex]);
      items.splice(randomItemIndex, 1);
    }

    return shuffledSkillLevels;
  };

  cloneSkillLevels = (items) => items.map((item) => item.clone());
  getRandomIndex = (n) => Math.floor(Math.random() * n);

  getRandomSkillLevel = () => {
    const index = this.getRandomIndex(skillLevels.length);
    return skillLevels[index].clone();
  };

  userSkillClickAction = (event) => {
    const userSkillLevels = this.cloneSkillLevels(this.state.userSkillLevels);

    Array(App.NUMBER_OF_SKILLS_TO_ADD).fill(0).forEach(() => {
      const level = this.getRandomSkillLevel();
      level.description = chance.paragraph({ sentences: 1 });
      userSkillLevels.unshift(level);
    });

    this.setState({
      clickedOnUserSkillLevel: true,
      userSkillLevels: userSkillLevels
    });
  };

  rightItemClickAction = (event) => {
    const userSkillLevels = this.cloneSkillLevels(skillLevels);
    this.setState({
      clickedOnPlaceholderImage: true,
      userSkillLevels: userSkillLevels
    });
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
