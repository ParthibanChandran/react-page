import React, { Component } from "react";

import {
  SearchBar,
  SearchWrapper,
  RecipeContents,
  View,
  SearchPanel,
  SearchButton,
} from "./style";
import { Container } from "../Pages/style";

import HomeSlider from "./homeslider/HomeSlider.js";
import RecipeCards from "./recipeCards/RecipeCards.js";
import AuthorCard from "./AuthorCard/AuthorCard.js";

export default class RecipeBanner extends Component {
  state = {
    Recipe_list: [
      {
        receipeId: 0,
        recipe_name: "Mexican grilled Corn Recipe",
        servings: "4 Servings",
        timing: "4 min",
        name: "sandra fortin",
        slider_img: require("../assets/images/sliderA_01.jpg"),
        type: "Baking",
        recipe_content:
          "Maecenas in massa eget urna ullamcorper pharetra. Curabitur laoreet scelerisque bibendum. Aenean ullamcorper neque ac tristique semper. Phasellus enim mauris, mollis vulputate blandit in, ornare sed leo.",
        card_img: require("../assets/images/recipeThumb-01.jpg"),
        rating: 3,
        card_img_link: "#",
      },
      {
        receipeId: 1,
        recipe_name: "Roast Chicken With Lemon Gravy",
        servings: "4 Servings",
        timing: "30 min",
        name: "sandra fortin",
        slider_img: require("../assets/images/sliderA_02.jpg"),
        type: "Curry",
        recipe_content:
          "Maecenas in massa eget urna ullamcorper pharetra. Curabitur laoreet scelerisque bibendum. Aenean ullamcorper neque ac tristique semper. Phasellus enim mauris, mollis vulputate blandit in, ornare sed leo.",
        card_img: require("../assets/images/recipeThumb-02.jpg"),
        rating: 4,
        card_img_link: "#",
      },
      {
        receipeId: 2,
        recipe_name: "American grilled Corn Recipe",
        servings: "4 Servings",
        timing: "5 hr 10 min",
        name: "sandra fortin",
        slider_img: require("../assets/images/sliderA_03.jpg"),
        type: "Salad",
        recipe_content:
          "Maecenas in massa eget urna ullamcorper pharetra. Curabitur laoreet scelerisque bibendum. Aenean ullamcorper neque ac tristique semper. Phasellus enim mauris, mollis vulputate blandit in, ornare sed leo.",
        card_img: require("../assets/images/recipeThumb-03.jpg"),
        rating: 5,
        card_img_link: "#",
      },
      {
        receipeId: 3,
        recipe_name: "Chunky Beef stew",
        servings: "4 Servings",
        timing: "4 min",
        name: "sandra fortin",
        slider_img: require("../assets/images/sliderA_04.jpg"),
        type: "Beef",
        recipe_content:
          "Maecenas in massa eget urna ullamcorper pharetra. Curabitur laoreet scelerisque bibendum. Aenean ullamcorper neque ac tristique semper. Phasellus enim mauris, mollis vulputate blandit in, ornare sed leo.",
        card_img: require("../assets/images/recipeThumb-04.jpg"),
        rating: 4,
        card_img_link: "#",
      },
      {
        receipeId: 4,
        recipe_name: "American grilled Corn Recipe",
        servings: "4 Servings",
        timing: "5 hr 10 min",
        name: "sandra fortin",
        recipe_content:
          "Maecenas in massa eget urna ullamcorper pharetra. Curabitur laoreet scelerisque bibendum. Aenean ullamcorper neque ac tristique semper. Phasellus enim mauris, mollis vulputate blandit in, ornare sed leo.",
        card_img: require("../assets/images/recipeThumb-05.jpg"),
        rating: 3,
        card_img_link: "#",
      },
      {
        receipeId: 5,
        recipe_name: "American grilled Corn Recipe",
        servings: "4 Servings",
        timing: "5 hr 10 min",
        name: "sandra fortin",
        recipe_content:
          "Maecenas in massa eget urna ullamcorper pharetra. Curabitur laoreet scelerisque bibendum. Aenean ullamcorper neque ac tristique semper. Phasellus enim mauris, mollis vulputate blandit in, ornare sed leo.",
        card_img: require("../assets/images/recipeThumb-06.jpg"),
        rating: 5,
        card_img_link: "#",
      },
      {
        receipeId: 6,
        recipe_name: "American grilled Corn Recipe",
        servings: "4 Servings",
        timing: "5 hr 10 min",
        name: "sandra fortin",
        recipe_content:
          "Maecenas in massa eget urna ullamcorper pharetra. Curabitur laoreet scelerisque bibendum. Aenean ullamcorper neque ac tristique semper. Phasellus enim mauris, mollis vulputate blandit in, ornare sed leo.",
        card_img: require("../assets/images/recipeThumb-07.jpg"),
        rating: 2,
        card_img_link: "#",
      },
    ],
    author_list: [
      {
        name: "Sandra Fortin",
        mail_id: "sandra@chow.com",
        description:
          "I'm Sandra and this is where I share my stuff. I am madly in love with food. You will find a balance of healthy recipes, comfort food and indulgent desserts.",
        author_img : require("../assets/images/author-photo.jpg"),
      },
    ],
    activeBanner: 0,
    is_grid: true,
    search_value: "",
  };

  banner_tabchanger = (id) => {
    this.setState({ activeBanner: id });
  };

  listView = () => {
    this.setState({ is_grid: false });
  };
  gridView = () => {
    this.setState({ is_grid: true });
  };

  Inputhandler = (e) => {
    this.setState({ search_value: e.target.value });
  };
  wordSearch = (e) => {
    let searchText = this.state.search_value.trim();
    if (e.which === 13 && searchText !== "") {
      this.searchResult();
    }
  };
  searchResult = () => {
    var source_arr = [...this.state.Recipe_list];
    var destination_arr = [];
    let searchText = this.state.search_value.trim();
    const regex = new RegExp(searchText, "gi");
    source_arr.forEach((element) => {
      let val = element.recipe_name.split(" ");
      let words = val.map((v) => v.toLowerCase());
      words.forEach((value) => {
        if (value.match(regex)) {
          destination_arr.push(element);
        }
      });
    });
    this.setState({ Recipe_list: destination_arr });
  };

  render() {
    return (
      <div>
        <HomeSlider
          banner_tabchanger={this.banner_tabchanger}
          Recipe_list={this.state.Recipe_list}
          activeBanner={this.state.activeBanner}
        />
        <Container>
          <RecipeContents>
            <RecipeCards
              is_grid={this.state.is_grid}
              recipe_list={this.state.Recipe_list}
            />
            <SearchWrapper>
              <SearchPanel>
                <SearchBar
                  onKeyPress={this.wordSearch}
                  onChange={this.Inputhandler}
                ></SearchBar>
                <SearchButton onClick={this.searchResult}>
                  <i className="fa fa-search"></i>
                </SearchButton>
              </SearchPanel>
              <View onClick={this.listView}>
                <i className="fa fa-bars"></i> List
              </View>
              <View onClick={this.gridView}>
                <i className="fa fa-th-large"></i> Grid
              </View>
              <AuthorCard author_list={this.state.author_list[0]} />
            </SearchWrapper>
          </RecipeContents>
        </Container>
      </div>
    );
  }
}
