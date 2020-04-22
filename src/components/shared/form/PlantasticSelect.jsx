import React from "react";
import { CustomInput, FormFeedback } from "reactstrap";

const PlantasticSelect = React.memo(
  ({ field, form: { touched, errors }, ...props }) => {
    return (
      <CustomInput
        type="select"
        invalid={!!(touched[field.name] && errors[field.name])}
        {...field}
        {...props}
      >
        {props.children}
        {props.items.map((item) => (
          <option value={item.id} key={item.id}>
            {item.name}
          </option>
        ))}
        {touched[field.name] && errors[field.name] && (
          <FormFeedback>{errors[field.name]}</FormFeedback>
        )}
      </CustomInput>
    );
  }
);

export default PlantasticSelect;

/* <option value={item.id} key={item.id}>
                    {/* tu wyrenderowac ustawienia */

//                     {item.name}
//                   </option>

// <Table hover>
// <thead>
//   <tr>
//     <th>#</th>
//     <th>First Name</th>
//     <th>Last Name</th>
//     <th>Username</th>
//   </tr>
// </thead>
// <tbody>
//   <tr>
//     <th scope="row">1</th>
//     <td>Mark</td>
//     <td>Otto</td>
//     <td>@mdo</td>
//   </tr>

//   <tr>
//     <th scope="row">3</th>
//     <td>Larry</td>
//     <td>the Bird</td>
//     <td>@twitter</td>
//   </tr>
// </tbody>
// </Table> */}
