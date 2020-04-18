import React from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import { Field, Form, Formik } from 'formik';

const commonSchema = Yup.object()
  .shape({
    field: Yup.number()
      .typeError('...')
      .positive('...')
  });

const someSchema = Yup.object()
  .shape({
    content: Yup.string()
      .trim()
      .required('Please provide string.'),
  })
  .concat(commonSchema);

const otherSchema = Yup.object()
  .shape({
    file: Yup.mixed()
      .required('Some error.')
  })
  .concat(commonSchema);

class SomeForm extends React.PureComponent {

  render() {

    const initialValues = {
      content: '',
      price: '',
    };

    const validationSchema = undefined;

    return (
      <React.Fragment>
        <React.Fragment>
          <h3>Add a new plant</h3>
          <form method="POST" action="">
            <Label>Plant name:</Label>
            <Input
              type="text"
              name="name"
              value={name}
              onChange={this.handleInputChange}
            />
            <Label>Plant category:</Label>
            <Input
              type="text"
              name="category"
              value={category}
              onChange={this.handleInputChange}
            />
            <Label>Room:</Label>
            <Input
              type="text"
              name="room"
              value={room}
              onChange={this.handleInputChange/*, this.isPalindrom*/}
            />
            <Label>Watering interval:</Label>
            <Input
              type="text"
              name="wateringInterval"
              value={wateringInterval}
              onChange={this.handleInputChange}
            />
            <Label>Fertilizing interval:</Label>
            <Input
              type=""
              name="fertilizingInterval"
              value={fertilizingInterval}
              onChange={this.handleInputChange}
            />
            <Label>Required exposure:</Label>
            <Input
              type="select"
              name="requiredExposure"
              value={requiredExposure}
              onChange={this.handleInputChange}>
              {
                requiredExposureOptions.map(item =>
                  (<option value={item.value} key={item.value}>{item.label}</option>
                  ))
              }
            </Input>
            <Label>Required temperature:</Label>
            <Input
              type="select"
              name="requiredTemperature"
              value={requiredTemperature}
              onChange={this.handleInputChange}>
              {
                requiredTemperatureOptions.map(item =>
                  (<option value={item.value} key={item.value}>{item.label}</option>
                  ))
              }
            </Input>
            <Label>Required humidity:</Label>
            <Input
              type="select"
              name="requiredHumidity"
              value={requiredHumidity}
              onChange={this.handleInputChange}>
              {
                requiredHumidityOptions.map(item =>
                  (<option value={item.value} key={item.value}>{item.label}</option>
                  ))
              }
            </Input>
            <Label>Bloomig:</Label>
            <Input
              type="checkbox"
              name="blooming"
              value={blooming}
              onChange={this.handleInputChange}
            />
            <Label>Difficulty:</Label>
            <Input
              type="select"
              name="difficulty"
              value={difficulty}
              onChange={this.handleInputChange}>
              {
                difficultyLevel.map(item =>
                  (<option value={item.value} key={item.value}>{item.label}</option>
                  ))
              }
            </Input>
            <Label>Last watered:</Label>
            <Input
              type="text"
              name="lastWatered"
              value={lastWatered}
              onChange={this.handleInputChange}
            />
            <Label>Last fertilized:</Label>
            <Input
              type="text"
              name="lastFertilized"
              value={lastFertilized}
              onChange={this.handleInputChange}
            />
            <Button type="submit">Submit new plant</Button>
          </form>
        </React.Fragment>
        <Formik initialValues={ initialValues } onSubmit={ onSubmit } validationSchema={validationSchema}>
          { ({ isValid }) => (
            <Form>
              <FormGroup className="required">
                <Label htmlFor="label>">Quotation Body</Label>
                <Field
                  id="label"
                  name="content"
                  type="textarea"
                  rows="10"
                  placeholder="Enter your text…"
                  component={ FlockInput }
                  disabled={ isDisabled }
                />
              </FormGroup>
            </Form>
          ) }
        </Formik>
      </React.Fragment>
    )
  }

}
