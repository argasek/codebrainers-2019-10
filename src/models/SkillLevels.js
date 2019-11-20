import { Levels, Level } from "./Levels";

const skillLevels = [
  new Level(Levels.HOPELESS, 'Hopeless', 'Beznadzieja'),
  new Level(Levels.BEGINNER, 'Beginner', 'Every now and then I manage to keep a cactus alive'),
  new Level(Levels.EXPERIENCED, 'Doświadczony', 'I have my plants under control, we\'re all right')
];

const levelExperienced = skillLevels.find((skillLevel) => skillLevel.id === Levels.EXPERIENCED);


export default skillLevels;
