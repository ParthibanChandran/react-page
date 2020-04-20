import React, { Component } from "react";
import Dashboard from "./Dashboard.js";
import { RecipeTabs } from "./style";
import { TabWrapper } from "../../container/style";

export default function HomeSlider(props) {
  let { Recipe_list, activeBanner, banner_tabchanger, page_two_banner } = props;
  return (
    <React.Fragment>
      <Dashboard
        obj={Recipe_list[activeBanner]}
        page_two_banner={page_two_banner}
      />
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
    </React.Fragment>
  );
}
