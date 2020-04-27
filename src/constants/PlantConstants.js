import PlantExposure from 'models/PlantExposure';
import PlantHumidity from 'models/PlantHumidity';

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
  { id: '1', name: 'Very easy' },
  { id: '2', name: 'Easy' },
  { id: '3', name: 'Medium' },
  { id: '4', name: 'Hard' },
  { id: '5', name: 'Very hard' },
];

export {
  plantExposureOptions,
  plantExposureUnknown,
  plantTemperatureOptions,
  plantHumidityOptions,
  plantHumidityUnknown,
  plantDifficultyOptions,
};
