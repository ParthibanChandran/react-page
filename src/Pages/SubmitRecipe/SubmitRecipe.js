import React, { Component } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
import { FormContainer, InputFieldTitle, NewIng } from "./style";
import Input from "./Input";
import axios from "../axios_recipes";

export default class SubmitRecipe extends Component {
  state = {
    formFields: {
      recipe_name: {
        label: "Recipe Title",
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Enter the title",
          required: true,
        },
        value: "",
      },
      recipe_content: {
        label: "Recipe Description",
        elementType: "textarea",
        elementConfig: {
          type: "text",
          maxLength: "500",
          placeholder: "Type the description here..",
          cols: "5",
          required: true,
        },
        value: "",
      },
      type: {
        label: "Choose Category",
        elementType: "select",
        elementConfig: {
          type: "text",
          placeholder: "Select",
          options: [
            "Breakfast",
            "Lunch",
            "Beverages",
            "Appetizers",
            "Soups",
            "Salads",
            "Beef",
            "Poultry",
            "Pork",
            "Vegetarian",
            "Seafood",
            "Vegetables",
            "Desserts",
            "Freezing",
            "Bread",
            "Baking",
          ],
          required: true,
        },
        value: "breakfast",
      },
      ingredients: {
        label: "Ingredients",
        elementType: "IngradientAdd",
        elementConfig: {
          type: "text",
          placeholder: [
            "Name of the ingredient",
            "Quantity (e.g 1/2)",
          ],
          required: true,
        },
        value: [{ value1: "", value2: "" }],
      },
      directions: {
        label: "Directions",
        elementType: "DirectionsAdd",
        elementConfig: {
          type: "text",
          placeholder: "Type the directions here..",
          required: true,
        },
        value: [{ value: "" }],
      },
      timing: {
        label: "Preparation Time",
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "(e.g 30 min)",
          required: true,
        },
        value: "",
      },
      servings: {
        label: "Servings",
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "(e.g 4 servings)",
          required: true,
        },
        value: "",
      },
      calories: {
        label: "Calories",
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "(e.g 634 kcal)",
          required: true,
        },
        value: "",
      },
      //   upload: {
      //     label: "Upload your photos",
      //     elementType: "file",
      //     elementConfig: {
      //       type: "file",
      //     },
      //     value: "",
      //   },
    },
  };
  recipeOrderHandler = (event) => {
    event.preventDefault();
    let cardData = {};
    for (let key in this.state.formFields) {
      cardData[key]=this.state.formFields[key].value;
    }
    let arr= cardData["ingredients"].map((data)=>{
      return [data.value2+" "+data.value1].join();
    })
    cardData["ingredients"]=arr;
    let arr1= cardData["directions"].map((data)=>{
      return data.value;
    })
    cardData["directions"]=arr1;
    axios.post("/recipes.json",cardData)
    .then(response =>{
      console.log(response);
    })
  };
  inputChangedHandler = (event, data) => {
    let oldstate = { ...this.state.formFields };
    let newstate = { ...oldstate.data };
    newstate.value = event.target.value;
    oldstate[data].value = newstate.value;
    this.setState({ formFields: oldstate });
  };
  addIngHandler = (data) => {
    let updated_data = data.toLowerCase();
    let oldstate = { ...this.state.formFields };
    let newstate = { ...oldstate[updated_data] };
    let tmp = [...newstate.value];
    tmp.push({ value1: "", value2: "" });
    newstate.value = tmp;
    oldstate[updated_data] = newstate;
    this.setState({ formFields: oldstate });
  };
  setIngradient = (event, data, index) => {
    let oldstate = { ...this.state.formFields };
    let newstate = { ...oldstate.ingredients };
    let tmp = [...newstate.value];
    let tmpObj = { ...tmp[index] };
    if (data === "quantity") {
      tmpObj.value2 = event.target.value;
    } else if (data === "name") {
      tmpObj.value1 = event.target.value;
    }
    tmp[index] = tmpObj;
    newstate.value = tmp;
    oldstate.ingredients = newstate;
    this.setState({ formFields: oldstate });
  };
  deleteIngradient = (index) => {
    let oldstate = { ...this.state.formFields };
    let newstate = { ...oldstate.ingredients };
    let tmp = [...newstate.value];
    tmp.splice(index, 1);
    newstate.value = tmp;
    oldstate.ingredients = newstate;
    this.setState({ formFields: oldstate });
  };
  addDirectionsHandler = (data) => {
    let updated_data = data.toLowerCase();
    let oldstate = { ...this.state.formFields };
    let newstate = { ...oldstate[updated_data] };
    let tmp = [...newstate.value];
    tmp.push({ value: "" });
    newstate.value = tmp;
    oldstate[updated_data] = newstate;
    this.setState({ formFields: oldstate });
  };
  setDirections = (event, index) => {
    let oldstate = { ...this.state.formFields };
    let newstate = { ...oldstate.directions };
    let tmp = [...newstate.value];
    let tmpObj = { ...tmp[index] };
    tmpObj.value = event.target.value;
    tmp[index] = tmpObj;
    newstate.value = tmp;
    oldstate.directions = newstate;
    this.setState({ formFields: oldstate });
  };
  deleteDirections = (index) => {
    let oldstate = { ...this.state.formFields };
    let newstate = { ...oldstate.directions };
    let tmp = [...newstate.value];
    tmp.splice(index, 1);
    newstate.value = tmp;
    oldstate.directions = newstate;
    this.setState({ formFields: oldstate });
  };
  render() {
    const formElementsArray = [];
    for (let key in this.state.formFields) {
      formElementsArray.push({
        id: key,
        config: this.state.formFields[key],
      });
    }
    let forms = (
      <form onSubmit={this.recipeOrderHandler}>
        {formElementsArray.map((formElement) => {
          return (
            <React.Fragment key={formElement.id}>
              <InputFieldTitle>{formElement.config.label}</InputFieldTitle>
              <Input
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                setIngradient={this.setIngradient}
                deleteIngradient={this.deleteIngradient}
                setDirections={this.setDirections}
                deleteDirections={this.deleteDirections}
                addIngradient={() => {
                  this.addIngHandler(formElement.config.label);
                }}
                addDirections={() => {
                  this.addDirectionsHandler(formElement.config.label);
                }}
                changed={(event) =>
                  this.inputChangedHandler(event, formElement.id)
                }
              />
            </React.Fragment>
          );
        })}
        <NewIng>SUBMIT RECIPE</NewIng>
      </form>
    );
    return (
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <PageTitle title={"Submit Recipe"} />
          <FormContainer>{forms}</FormContainer>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
