import React from "react";
import PropTypes from "prop-types";
import "./Plant.scss";

class Plant extends React.PureComponent {
  constructor(props) {
    super(props);
    const plant = this.props;
  }

  render() {
    const plant = this.props;
    console.log("Props w plant component", this.props.name);
    return (
      <React.Fragment>
        <div>
          <p>{this.props.name}</p>
        </div>
      </React.Fragment>
    );
  }
}

Plant.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Plant;

//
