import PlantExposure from 'models/PlantExposure';
import PlantHumidity from 'models/PlantHumidity';
import PlantDifficulty from 'models/PlantDifficulty';

const plantExposureOptions = [
  new PlantExposure('dark', 'Full shade', '\u2601'),
  new PlantExposure('shade', 'Partial shade', '\u26C5'),
  new PlantExposure('partsun', 'Light shade', '\u{1F324}'),
  new PlantExposure('fullsun', 'Full sun', '\u2600'),
];

const plantExposureUnknown = new PlantExposure('unknown', 'Unknown', '\u{1F937}');

const plantTemperatureOptions = [
  { id: 'cold', name: 'Cold' },
  { id: 'medium', name: 'Moderate' },
  { id: 'warm', name: 'Warm' },
];

const plantHumidityOptions = [
  new PlantHumidity('low', 'Dry', 1),
  new PlantHumidity('medium', 'Standard', 2),
  new PlantHumidity('high', 'Moist', 3),
];

const plantHumidityUnknown = new PlantHumidity('unknown', 'Unknown', 0);

const plantDifficultyOptions = [
  new PlantDifficulty(1, 'Very easy', 1, 'You won\'t be able to kill this plant no matter what'),
  new PlantDifficulty(2, 'Easy', 2, 'Well, to keep this one alive one has to water it once in a while'),
  new PlantDifficulty(3, 'Medium', 3, 'A regular flower with moderate care requirements'),
  new PlantDifficulty(4, 'Hard', 4, 'This plant will require a lot of love and regular care'),
  new PlantDifficulty(5, 'Very hard', 5, 'Damn princess. Will find thousand of reasons to die'),
];

export {
  plantExposureOptions,
  plantExposureUnknown,
  plantTemperatureOptions,
  plantHumidityOptions,
  plantHumidityUnknown,
  plantDifficultyOptions,
};
