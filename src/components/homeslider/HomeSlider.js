import React, { Component } from "react";
import Dashboard from "./Dashboard.js";
import { RecipeTabs } from "./style";
import { TabWrapper } from "../../Pages/style";

export default function HomeSlider(props) {
  let { Recipe_list, activeBanner, banner_tabchanger } = props;
  return (
    <div>
      <Dashboard obj={Recipe_list[activeBanner]} />
      <TabWrapper>
        {Recipe_list.slice(0, 4).map((element, index) => {
          return (
            <RecipeTabs
              key={index}
              active={element.receipeId === activeBanner}
              onClick={() => banner_tabchanger(element.receipeId)}
            >
              {element.recipe_name}
            </RecipeTabs>
          );
        })}
      </TabWrapper>
    </div>
  );
}
