import Routes from 'constants/Routes';
import { faHome, faLeaf, faSeedling } from '@fortawesome/free-solid-svg-icons';

const navbarItems = [
  { path: Routes.PLANTS, icon: faSeedling, name: 'Plants' },
  { path: Routes.CATEGORIES, icon: faLeaf, name: 'Categories' },
  { path: Routes.ROOMS, icon: faHome, name: 'Rooms' },
];

export default navbarItems;