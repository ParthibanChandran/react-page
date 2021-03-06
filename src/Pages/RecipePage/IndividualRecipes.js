import React, { Component } from "react";
import { theme } from "../../styles/theme";
import { ThemeProvider } from "styled-components";
import {
  RecipeBackgroundWrapper,
  RecipeBackground,
  RecipeWrapper,
  RecipeBanner,
  RecipeHeading,
  Rating,
  RecipeImg,
  Contents,
  RecipeDesc,
  RecipeWrapperAlignment,
  RecipeImgWrapper,
  RecipeHeadingWrapper,
  RecipeContentsWrapper,
  ContentDesc,
  PrintButton,
  IngredientWrapper,
  DirectionsWrapper,
  RecipeDescriptionWrapper,
  IngredientTitle,
  InputCheckedWrapper,
  DirectionsValues,
  DirectionsIndexNo,
  DirectionsContents,
  SideBar,
} from "./style";

import SearchBarComponent from "../../commonComponents/SearchBar/SearchBarComponent";
import AuthorCard from "../../commonComponents/AuthorCard/AuthorCard.js";
import RatingStar from "../../commonComponents/Rating/RatingStar";

export default class IndividualRecipes extends Component {
  state = {
    recipe_obj: {},
    page_two_banner: null,
    author_obj: {},
    ingredients: [],
    directions: [],
    search_value: "",
  };
  componentDidMount() {
    window.scrollTo(0, 0);

    let { obj, page_two_banner, author_obj } = this.props.location.state;
    this.setState({
      recipe_obj: obj,
      page_two_banner: page_two_banner,
      author_obj: author_obj,
      ingredients: obj.ingredients,
      directions: obj.directions,
    });
  }
  inputChangeHandler = (event) => {
    this.setState({ search_value: event.target.value });
  };
  wordSearch = (e) => {
    let searchText = this.state.search_value.trim();
    if (e.which === 13 && searchText !== "") {
      this.searchResult();
    }
  };
  searchResult = () => {
    if (this.props.history.location.pathname === "/recipe-page") {
      this.props.history.push({
        pathname: "/home-page",
        state: {
          searchText: this.state.search_value,
        },
      });
    }
  };
  render() {
    const ingredients = this.state.ingredients.map((data, index) => {
      return (
        <InputCheckedWrapper key={index}>
          <input type="checkbox" id={index} name="ingredients" value=""></input>
          <label htmlFor={index}>{data}</label>
        </InputCheckedWrapper>
      );
    });

    const directions = this.state.directions.map((data, index) => {
      return (
        <DirectionsContents key={index}>
          <DirectionsIndexNo>{index + 1}</DirectionsIndexNo>
          <DirectionsValues>{data}</DirectionsValues>
        </DirectionsContents>
      );
    });
    return (
      <ThemeProvider theme={theme}>
        <RecipeBackgroundWrapper>
          <RecipeBackground
            alt="file not found"
            src={this.state.page_two_banner}
          ></RecipeBackground>
        </RecipeBackgroundWrapper>
        <RecipeWrapperAlignment>
          <RecipeWrapper>
            <RecipeBanner>
              <RecipeHeadingWrapper>
                <RecipeHeading>
                  {this.state.recipe_obj.recipe_name}
                </RecipeHeading>
                <Rating>
                  <RatingStar element={this.state.recipe_obj} />(
                  {this.state.recipe_obj.rating} Reviews)
                </Rating>
              </RecipeHeadingWrapper>
              <RecipeImgWrapper>
                <RecipeImg
                  alt="file not found"
                  src={this.state.recipe_obj.card_img}
                ></RecipeImg>
              </RecipeImgWrapper>
              <RecipeContentsWrapper>
                <Contents>
                  <p>Servs:</p>
                  <ContentDesc>{this.state.recipe_obj.servings}</ContentDesc>
                </Contents>
                <Contents>
                  <p>Prep Time:</p>
                  <ContentDesc>{this.state.recipe_obj.timing}</ContentDesc>
                </Contents>
                <Contents>
                  <p>Calories:</p>
                  <ContentDesc>{this.state.recipe_obj.calories}</ContentDesc>
                </Contents>
                <PrintButton href="#">
                  <i className="fa fa-print"></i> Print
                </PrintButton>
              </RecipeContentsWrapper>
            </RecipeBanner>
            <RecipeDesc>{this.state.recipe_obj.recipe_content}</RecipeDesc>
            <RecipeDescriptionWrapper>
              <IngredientWrapper>
                <IngredientTitle>Ingredients</IngredientTitle>
                {ingredients}
              </IngredientWrapper>
              <DirectionsWrapper>
                <IngredientTitle>Directions</IngredientTitle>
                {directions}
              </DirectionsWrapper>
            </RecipeDescriptionWrapper>
          </RecipeWrapper>
          <SideBar>
            <SearchBarComponent
              value={this.state.search_value}
              clicked={this.searchResult}
              pressed={this.wordSearch}
              changed={this.inputChangeHandler}
            />
            <AuthorCard author_obj={this.state.author_obj} />
            {/* <AuthorCard author_list={this.state.recipe_obj.author_list[0]}/> */}
          </SideBar>
        </RecipeWrapperAlignment>
      </ThemeProvider>
    );
  }
}
