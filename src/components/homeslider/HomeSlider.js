import React from "react";
import Dashboard from "./Dashboard.js";
import { RecipeTabs } from "./style";
import { TabWrapper } from "../../containers/style";
export default function HomeSlider(props) {
  let { dashboard_obj, recipe, obj,toggle } = props;
  console.log(obj);
  return (
    <div>
      <Dashboard clicked_obj={obj} obj={recipe[0]}/>
      <TabWrapper>
        {recipe.map((element, index) => {
          return (
            <RecipeTabs toggle={toggle} key={index} onClick={() => dashboard_obj(element)}>
              {element.recipe_name}
            </RecipeTabs>
          );
        })}
      </TabWrapper>
    </div>
  );
}
