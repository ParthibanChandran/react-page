import React, { Component } from "react";

import { SearchWrapper, RecipeContents, View } from "./style";
import { Container } from "../../container/style";

import HomeSlider from "../../components/homeslider/HomeSlider.js";
import RecipeCards from "../../components/recipeCards/RecipeCards.js";
import AuthorCard from "../../commonComponents/AuthorCard/AuthorCard.js";
import SearchBarComponent from "../../commonComponents/SearchBar/SearchBarComponent.js";

export default class HomeComponent extends Component {
  state = {
    Recipe_list: [
      {
        receipeId: 0,
        recipe_name: "Mexican grilled Corn Recipe",
        servings: "4 Servings",
        timing: "4 min",
        slider_img: require("../../assets/images/sliderA_01.jpg"),
        type: "Baking",
        recipe_content:
          "Maecenas in massa eget urna ullamcorper pharetra. Curabitur laoreet scelerisque bibendum. Aenean ullamcorper neque ac tristique semper. Phasellus enim mauris, mollis vulputate blandit in, ornare sed leo.",
        card_img: require("../../assets/images/recipeThumb-01.jpg"),
        rating: 3,
        calories: "112 kcal",
        author_list: [
          {
            name: "Sandra Fortin",
            mail_id: "sandra@chow.com",
            description:
              "I'm Sandra and this is where I share my stuff. I am madly in love with food. You will find a balance of healthy recipes, comfort food and indulgent desserts.",
            author_img: require("../../assets/images/author-photo.jpg"),
          },
        ],
        ingredients: [
          "2 pounds cubed beef stew meat",
          "3 tablespoons vegetable oil",
          "4 cubes beef bouillon, crumbled",
          "1 large onion, chopped",
          "1 teaspoon dried rosemary",
          "1/2 teaspoon ground black pepper",
          "3 large potatoes, peeled and cubed",
          "4 carrots, cut into 1 inch pieces",
          "4 stalks celery, cut into 1 inch pieces",
        ],
        directions: [
          "In a Dutch oven, heat oil over medium heat until hot, but not smoking. Pat the meat dry with paper towels and brown in batches, transferring the meat with a slotted spoon to a bowl as they are done.",
          "In the fat remaining in the pot, cook the onions until softened, about 5 minutes.",
          "Return meat to the pot with any juices in the bowl and add the tomatoes with juice, chiles, beer, beef broth, oregano, cumin, and Worcestershire sauce. Season with salt and pepper to taste.",
          "Bring to a boil and reduce heat. Simmer, partially covered, for 2 1/2 hours or until meat is tender.",
        ],
      },
      {
        receipeId: 1,
        recipe_name: "Roast Chicken With Lemon Gravy",
        servings: "4 Servings",
        timing: "30 min",
        slider_img: require("../../assets/images/sliderA_02.jpg"),
        type: "Curry",
        recipe_content:
          "Maecenas in massa eget urna ullamcorper pharetra. Curabitur laoreet scelerisque bibendum. Aenean ullamcorper neque ac tristique semper. Phasellus enim mauris, mollis vulputate blandit in, ornare sed leo.",
        card_img: require("../../assets/images/recipeThumb-02.jpg"),
        rating: 4,
        calories: "112 kcal",
        author_list: [
          {
            name: "Sandra Fortin",
            mail_id: "sandra@chow.com",
            description:
              "I'm Sandra and this is where I share my stuff. I am madly in love with food. You will find a balance of healthy recipes, comfort food and indulgent desserts.",
            author_img: require("../../assets/images/author-photo.jpg"),
          },
        ],
        ingredients: [
          "2 pounds cubed beef stew meat",
          "3 tablespoons vegetable oil",
          "4 cubes beef bouillon, crumbled",
          "1 large onion, chopped",
          "1 teaspoon dried rosemary",
          "1/2 teaspoon ground black pepper",
          "3 large potatoes, peeled and cubed",
          "4 carrots, cut into 1 inch pieces",
          "4 stalks celery, cut into 1 inch pieces",
        ],
        directions: [
          "In a Dutch oven, heat oil over medium heat until hot, but not smoking. Pat the meat dry with paper towels and brown in batches, transferring the meat with a slotted spoon to a bowl as they are done.",
          "In the fat remaining in the pot, cook the onions until softened, about 5 minutes.",
          "Return meat to the pot with any juices in the bowl and add the tomatoes with juice, chiles, beer, beef broth, oregano, cumin, and Worcestershire sauce. Season with salt and pepper to taste.",
          "Bring to a boil and reduce heat. Simmer, partially covered, for 2 1/2 hours or until meat is tender.",
        ],
      },
      {
        receipeId: 2,
        recipe_name: "American grilled Corn Recipe",
        servings: "4 Servings",
        timing: "5 hr 10 min",
        slider_img: require("../../assets/images/sliderA_03.jpg"),
        type: "Salad",
        recipe_content:
          "Maecenas in massa eget urna ullamcorper pharetra. Curabitur laoreet scelerisque bibendum. Aenean ullamcorper neque ac tristique semper. Phasellus enim mauris, mollis vulputate blandit in, ornare sed leo.",
        card_img: require("../../assets/images/recipeThumb-03.jpg"),
        rating: 5,
        calories: "112 kcal",
        author_list: [
          {
            name: "Sandra Fortin",
            mail_id: "sandra@chow.com",
            description:
              "I'm Sandra and this is where I share my stuff. I am madly in love with food. You will find a balance of healthy recipes, comfort food and indulgent desserts.",
            author_img: require("../../assets/images/author-photo.jpg"),
          },
        ],
        ingredients: [
          "2 pounds cubed beef stew meat",
          "3 tablespoons vegetable oil",
          "4 cubes beef bouillon, crumbled",
          "1 large onion, chopped",
          "1 teaspoon dried rosemary",
          "1/2 teaspoon ground black pepper",
          "3 large potatoes, peeled and cubed",
          "4 carrots, cut into 1 inch pieces",
          "4 stalks celery, cut into 1 inch pieces",
        ],
        directions: [
          "In a Dutch oven, heat oil over medium heat until hot, but not smoking. Pat the meat dry with paper towels and brown in batches, transferring the meat with a slotted spoon to a bowl as they are done.",
          "In the fat remaining in the pot, cook the onions until softened, about 5 minutes.",
          "Return meat to the pot with any juices in the bowl and add the tomatoes with juice, chiles, beer, beef broth, oregano, cumin, and Worcestershire sauce. Season with salt and pepper to taste.",
          "Bring to a boil and reduce heat. Simmer, partially covered, for 2 1/2 hours or until meat is tender.",
        ],
      },
      {
        receipeId: 3,
        recipe_name: "Chunky Beef stew",
        servings: "4 Servings",
        timing: "4 min",
        slider_img: require("../../assets/images/sliderA_04.jpg"),
        type: "Beef",
        recipe_content:
          "Maecenas in massa eget urna ullamcorper pharetra. Curabitur laoreet scelerisque bibendum. Aenean ullamcorper neque ac tristique semper. Phasellus enim mauris, mollis vulputate blandit in, ornare sed leo.",
        card_img: require("../../assets/images/recipeThumb-04.jpg"),
        rating: 4,
        calories: "112 kcal",
        author_list: [
          {
            name: "Sandra Fortin",
            mail_id: "sandra@chow.com",
            description:
              "I'm Sandra and this is where I share my stuff. I am madly in love with food. You will find a balance of healthy recipes, comfort food and indulgent desserts.",
            author_img: require("../../assets/images/author-photo.jpg"),
          },
        ],
        ingredients: [
          "2 pounds cubed beef stew meat",
          "3 tablespoons vegetable oil",
          "4 cubes beef bouillon, crumbled",
          "1 large onion, chopped",
          "1 teaspoon dried rosemary",
          "1/2 teaspoon ground black pepper",
          "3 large potatoes, peeled and cubed",
          "4 carrots, cut into 1 inch pieces",
          "4 stalks celery, cut into 1 inch pieces",
        ],
        directions: [
          "In a Dutch oven, heat oil over medium heat until hot, but not smoking. Pat the meat dry with paper towels and brown in batches, transferring the meat with a slotted spoon to a bowl as they are done.",
          "In the fat remaining in the pot, cook the onions until softened, about 5 minutes.",
          "Return meat to the pot with any juices in the bowl and add the tomatoes with juice, chiles, beer, beef broth, oregano, cumin, and Worcestershire sauce. Season with salt and pepper to taste.",
          "Bring to a boil and reduce heat. Simmer, partially covered, for 2 1/2 hours or until meat is tender.",
        ],
      },
      {
        receipeId: 4,
        recipe_name: "American grilled Corn Recipe",
        servings: "4 Servings",
        timing: "5 hr 10 min",
        recipe_content:
          "Maecenas in massa eget urna ullamcorper pharetra. Curabitur laoreet scelerisque bibendum. Aenean ullamcorper neque ac tristique semper. Phasellus enim mauris, mollis vulputate blandit in, ornare sed leo.",
        card_img: require("../../assets/images/recipeThumb-05.jpg"),
        rating: 3,
        calories: "112 kcal",
        author_list: [
          {
            name: "Sandra Fortin",
            mail_id: "sandra@chow.com",
            description:
              "I'm Sandra and this is where I share my stuff. I am madly in love with food. You will find a balance of healthy recipes, comfort food and indulgent desserts.",
            author_img: require("../../assets/images/author-photo.jpg"),
          },
        ],
        ingredients: [
          "2 pounds cubed beef stew meat",
          "3 tablespoons vegetable oil",
          "4 cubes beef bouillon, crumbled",
          "1 large onion, chopped",
          "1 teaspoon dried rosemary",
          "1/2 teaspoon ground black pepper",
          "3 large potatoes, peeled and cubed",
          "4 carrots, cut into 1 inch pieces",
          "4 stalks celery, cut into 1 inch pieces",
        ],
        directions: [
          "In a Dutch oven, heat oil over medium heat until hot, but not smoking. Pat the meat dry with paper towels and brown in batches, transferring the meat with a slotted spoon to a bowl as they are done.",
          "In the fat remaining in the pot, cook the onions until softened, about 5 minutes.",
          "Return meat to the pot with any juices in the bowl and add the tomatoes with juice, chiles, beer, beef broth, oregano, cumin, and Worcestershire sauce. Season with salt and pepper to taste.",
          "Bring to a boil and reduce heat. Simmer, partially covered, for 2 1/2 hours or until meat is tender.",
        ],
      },
      {
        receipeId: 5,
        recipe_name: "American grilled Corn Recipe",
        servings: "4 Servings",
        timing: "5 hr 10 min",
        recipe_content:
          "Maecenas in massa eget urna ullamcorper pharetra. Curabitur laoreet scelerisque bibendum. Aenean ullamcorper neque ac tristique semper. Phasellus enim mauris, mollis vulputate blandit in, ornare sed leo.",
        card_img: require("../../assets/images/recipeThumb-06.jpg"),
        rating: 5,
        calories: "112 kcal",
        author_list: [
          {
            name: "Sandra Fortin",
            mail_id: "sandra@chow.com",
            description:
              "I'm Sandra and this is where I share my stuff. I am madly in love with food. You will find a balance of healthy recipes, comfort food and indulgent desserts.",
            author_img: require("../../assets/images/author-photo.jpg"),
          },
        ],
        ingredients: [
          "2 pounds cubed beef stew meat",
          "3 tablespoons vegetable oil",
          "4 cubes beef bouillon, crumbled",
          "1 large onion, chopped",
          "1 teaspoon dried rosemary",
          "1/2 teaspoon ground black pepper",
          "3 large potatoes, peeled and cubed",
          "4 carrots, cut into 1 inch pieces",
          "4 stalks celery, cut into 1 inch pieces",
        ],
        directions: [
          "In a Dutch oven, heat oil over medium heat until hot, but not smoking. Pat the meat dry with paper towels and brown in batches, transferring the meat with a slotted spoon to a bowl as they are done.",
          "In the fat remaining in the pot, cook the onions until softened, about 5 minutes.",
          "Return meat to the pot with any juices in the bowl and add the tomatoes with juice, chiles, beer, beef broth, oregano, cumin, and Worcestershire sauce. Season with salt and pepper to taste.",
          "Bring to a boil and reduce heat. Simmer, partially covered, for 2 1/2 hours or until meat is tender.",
        ],
      },
      {
        receipeId: 6,
        recipe_name: "American grilled Corn Recipe",
        servings: "4 Servings",
        timing: "5 hr 10 min",
        recipe_content:
          "Maecenas in massa eget urna ullamcorper pharetra. Curabitur laoreet scelerisque bibendum. Aenean ullamcorper neque ac tristique semper. Phasellus enim mauris, mollis vulputate blandit in, ornare sed leo.",
        card_img: require("../../assets/images/recipeThumb-07.jpg"),
        rating: 2,
        calories: "112 kcal",
        author_list: [
          {
            name: "Sandra Fortin",
            mail_id: "sandra@chow.com",
            description:
              "I'm Sandra and this is where I share my stuff. I am madly in love with food. You will find a balance of healthy recipes, comfort food and indulgent desserts.",
            author_img: require("../../assets/images/author-photo.jpg"),
          },
        ],
        ingredients: [
          "2 pounds cubed beef stew meat",
          "3 tablespoons vegetable oil",
          "4 cubes beef bouillon, crumbled",
          "1 large onion, chopped",
          "1 teaspoon dried rosemary",
          "1/2 teaspoon ground black pepper",
          "3 large potatoes, peeled and cubed",
          "4 carrots, cut into 1 inch pieces",
          "4 stalks celery, cut into 1 inch pieces",
        ],
        directions: [
          "In a Dutch oven, heat oil over medium heat until hot, but not smoking. Pat the meat dry with paper towels and brown in batches, transferring the meat with a slotted spoon to a bowl as they are done.",
          "In the fat remaining in the pot, cook the onions until softened, about 5 minutes.",
          "Return meat to the pot with any juices in the bowl and add the tomatoes with juice, chiles, beer, beef broth, oregano, cumin, and Worcestershire sauce. Season with salt and pepper to taste.",
          "Bring to a boil and reduce heat. Simmer, partially covered, for 2 1/2 hours or until meat is tender.",
        ],
      },
    ],
    activeBanner: 0,
    is_grid: true,
    search_value: "",
    page_two_banner: require("../../assets/images/recipeBackground-02.webp"),
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
          page_two_banner={this.state.page_two_banner}
        />
        <Container>
          <RecipeContents>
            <RecipeCards
              is_grid={this.state.is_grid}
              recipe_list={this.state.Recipe_list}
              page_two_banner={this.state.page_two_banner}
            />
            <SearchWrapper>
              <SearchBarComponent
                clicked={this.searchResult}
                changed={this.Inputhandler}
                pressed={this.wordSearch}
              />
              <View onClick={this.listView}>
                <i className="fa fa-bars"></i> List
              </View>
              <View onClick={this.gridView}>
                <i className="fa fa-th-large"></i> Grid
              </View>
              <AuthorCard
                author_list={this.state.Recipe_list[0].author_list[0]}
              />
            </SearchWrapper>
          </RecipeContents>
        </Container>
      </div>
    );
  }
}
