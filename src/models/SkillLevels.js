import { Levels, Level } from "./Levels";

const skillLevels = [
  new Level(Levels.HOPELESS, 'Hopeless', 'Nie jest tak źle. Można użyć d-flex. Albo floatów! (ale floaty mają zęby!) '),
  new Level(Levels.BEGINNER, 'Beginner', 'Every now and then I manage to keep a cactus alive'),
  new Level(Levels.EXPERIENCED, 'Doświadczony', 'I have my plants under control, we\'re all right'),
  new Level(Levels.MASTER, 'Master', 'It look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy'),
];

const levelExperienced = skillLevels.find((skillLevel) => skillLevel.id === Levels.EXPERIENCED);


export default skillLevels;
