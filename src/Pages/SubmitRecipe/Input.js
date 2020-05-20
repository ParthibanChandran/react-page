import React from "react";
import {
  IngradientInputWrapper,
  IngradientInputAlignment,
  NewIng,
  IngIcon,
  IngIconWrapper,
  IngradientInput,
  TextArea,
  Input,
  SelectOption,
} from "./style";

const input = (props) => {
  let inputElement = null;

  switch (props.elementType) {
    case "input":
      inputElement = (
        <Input
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <TextArea
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      inputElement = (
        <SelectOption value={props.value} onChange={props.changed}>
          {props.elementConfig.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </SelectOption>
      );
      break;
    case "DirectionsAdd":
      const directions = props.value.map((ele, index) => {
        return (
          <IngradientInputWrapper key={index}>
            <IngradientInputAlignment>
              <IngradientInput
                {...props.elementConfig}
                value={props.value[index].value}
                onChange={(event) => props.setDirections(event, index)}
              />
              <IngIconWrapper
                delete
                onClick={() => props.deleteDirections(index)}
              >
                <IngIcon className="fa fa-times" aria-hidden="true"></IngIcon>
              </IngIconWrapper>
            </IngradientInputAlignment>
          </IngradientInputWrapper>
        );
      });
      inputElement = (
        <React.Fragment>
          {directions}
          <NewIng onClick={props.addDirections}>ADD SEPARATOR</NewIng>
        </React.Fragment>
      );
      break;
    case "IngradientAdd":
      const ing = props.value.map((ele, index) => {
        return (
          <IngradientInputWrapper key={index}>
            <IngradientInputAlignment>
              <IngradientInput
                placeholder={props.elementConfig.placeholder[0]}
                value={props.value[index].value1}
                onChange={(event) => props.setIngradient(event, "name", index)}
              />
              <IngradientInput
                placeholder={props.elementConfig.placeholder[1]}
                value={props.value[index].value2}
                onChange={(event) =>
                  props.setIngradient(event, "quantity", index)
                }
              />
              <IngIconWrapper
                delete
                onClick={() => props.deleteIngradient(index)}
              >
                <IngIcon className="fa fa-times" aria-hidden="true"></IngIcon>
              </IngIconWrapper>
            </IngradientInputAlignment>
          </IngradientInputWrapper>
        );
      });
      inputElement = (
        <React.Fragment>
          {ing}
          <NewIng onClick={props.addIngradient}>ADD NEW INGRADIENT</NewIng>
        </React.Fragment>
      );
      break;
    default:
      inputElement = (
        <Input
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }
  return (
    <div>
      <label>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;
