import React, { Component } from "react";
import Dashboard from "./Dashboard.js";
import { RecipeTabs } from "./style";
import { TabWrapper } from "../../containers/style";

export default class HomeSlider extends Component {
  state = {
    Recipe_list: [
      {
        receipeId: 0,
        recipe_name: "Mexican grilled Corn Recipe",
        servings: "4 Servings",
        timing: "4 min",
        name: "sandra fortin",
        img: require("../../assets/images/sliderA_01.jpg"),
        type: "Baking",
      },
      {
        receipeId: 1,
        recipe_name: "Roast Chicken With Lemon Gravy",
        servings: "4 Servings",
        timing: "30 min",
        name: "sandra fortin",
        img: require("../../assets/images/sliderA_02.jpg"),
        type: "Curry",
      },
      {
        receipeId: 2,
        recipe_name: "American grilled Corn Recipe",
        servings: "4 Servings",
        timing: "5 hour 10 min",
        name: "sandra fortin",
        img: require("../../assets/images/sliderA_03.jpg"),
        type: "Salad",
      },
      {
        receipeId: 3,
        recipe_name: "Grilled Corn Recipe",
        servings: "4 Servings",
        timing: "4 min",
        name: "sandra fortin",
        img: require("../../assets/images/sliderA_04.jpg"),
        type: "Beef",
      },
    ],
    activeBanner: 0,
  };

  banner_tabchanger = (id) => {
    this.setState({ activeBanner: id });
  };
  render() {
    return (
      <div>
        <Dashboard obj={this.state.Recipe_list[this.state.activeBanner]} />
        <TabWrapper>
          {this.state.Recipe_list.map((element, index) => {
            return (
              <RecipeTabs
                key={index}
                active={element.receipeId === this.state.activeBanner}
                onClick={() => this.banner_tabchanger(element.receipeId)}
              >
                {element.recipe_name}
              </RecipeTabs>
            );
          })}
        </TabWrapper>
      </div>
    );
  }
}
