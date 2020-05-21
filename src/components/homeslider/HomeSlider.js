import React from "react";
import Dashboard from "./Dashboard.js";
import { RecipeTabs } from "./style";
import { TabWrapper } from "../../Pages/style";

export default function HomeSlider(props) {
  let {
    Recipe_list,
    activeBanner,
    banner_tabchanger,
    page_two_banner,
    author_obj,
  } = props;
  return (
    <React.Fragment>
      <Dashboard
        author_obj={author_obj}
        obj={Recipe_list[activeBanner]}
        page_two_banner={page_two_banner}
      />
      <TabWrapper>
        {Recipe_list.slice(0, 4).map((element, index) => {
          return (
            <RecipeTabs
              key={element.receipeId}
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
