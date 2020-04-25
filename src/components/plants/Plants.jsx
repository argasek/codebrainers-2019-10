import React from "react";
import { Table } from "reactstrap";
import Plant from "components/plants/Plant";
import PropTypes from "prop-types";

const Plants = ({ plants }) => {
  return (
    <Table hover striped>
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
            <Plant plant={ plant } key={ plant.id }/>
          ))
        }
      </tbody>
    </Table>
  );
};

Plants.propTypes = {
  plants: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Plants;
