import React from "react";
import { Table } from "reactstrap";
import Plant from "components/plants/Plant";
import { plantsPropTypes } from 'proptypes/PlantsPropTypes';

/**
 * This is an example of JSDoc comment.
 *
 * @param {Plant[]} plants Array of plants
 * @param {Category[]} categories Array of categories
 * @param {Room[]} categories Array of categories
 * @param {function} onEdit Callback invoked on row click
 * @returns {*}
 */
const Plants = ({ plants, ...rest }) => {
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
            key={ plant.id }
            plant={ plant }
            { ...rest }
          />
        ))
      }
      </tbody>
    </Table>
  );
};

Plants.propTypes = plantsPropTypes;

export default Plants;
