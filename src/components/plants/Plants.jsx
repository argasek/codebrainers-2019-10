import React from "react";
import { Table } from "reactstrap";
import Plant from "components/plants/Plant";
import { plantsPropTypes } from 'proptypes/PlantsPropTypes';
import { categoriesPropTypes } from 'proptypes/CategoriesPropTypes';
import { roomsPropTypes } from 'proptypes/RoomsPropTypes';

/**
 * This is an example of JSDoc comment.
 *
 * @param {Plant[]} plants Array of plants
 * @param {Category[]} categories Array of categories
 * @param {Room[]} categories Array of categories
 * @returns {*}
 * @constructor
 */
const Plants = ({ plants, categories, rooms }) => {
  return (
    <Table hover striped responsive>
      <thead className="thead-dark">
      <tr>
        <th>Name</th>
        <th>Category</th>
        <th>Exposure</th>
        <th>Humidity</th>
        <th>Temperature</th>
        <th>Blooming</th>
        <th>Difficulty</th>
        <th>Room</th>
        <th>Last Fertilized</th>
        <th>Last Watered</th>
      </tr>
      </thead>
      <tbody>
      {
        plants.map((plant) => (
          <Plant
            plant={ plant }
            plantCategories={ categories }
            plantRooms={ rooms }
            key={ plant.id }
          />
        ))
      }
      </tbody>
    </Table>
  );
};

Plants.propTypes = {
  plants: plantsPropTypes,
  categories: categoriesPropTypes,
  rooms: roomsPropTypes,
};

export default Plants;
