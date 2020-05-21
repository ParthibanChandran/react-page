import React, { Component } from "react";
import { ThemeProvider } from "styled-components";

import axios from "../Store/axios_recipes";
import { theme } from "../../styles/theme";
import { SearchWrapper, RecipeContents, View } from "./style";
import { Container } from "../style";
import { SpinnerWrapper, Spinner } from "../../Pages/Shop/style";

import HomeSlider from "../../components/homeslider/HomeSlider.js";
import RecipeCards from "../../components/recipeCards/RecipeCards.js";
import AuthorCard from "../../commonComponents/AuthorCard/AuthorCard.js";
import SearchBarComponent from "../../commonComponents/SearchBar/SearchBarComponent.js";

export default class HomeComponent extends Component {
  state = {
    Recipe_list: [
      {
        receipeId: 0,
        slider_img: require("../../assets/images/sliderA_01.jpg"),
        card_img: require("../../assets/images/recipeThumb-01.jpg"),
        rating: 3,
      },
      {
        receipeId: 1,
        slider_img: require("../../assets/images/sliderA_02.jpg"),
        card_img: require("../../assets/images/recipeThumb-02.jpg"),
        rating: 4,
      },
      {
        receipeId: 2,
        slider_img: require("../../assets/images/sliderA_03.jpg"),
        card_img: require("../../assets/images/recipeThumb-03.jpg"),
        rating: 5,
      },
      {
        receipeId: 3,
        slider_img: require("../../assets/images/sliderA_04.jpg"),
        card_img: require("../../assets/images/recipeThumb-09.jpg"),
        rating: 4,
      },
      {
        receipeId: 4,
        card_img: require("../../assets/images/recipeThumb-05.jpg"),
        rating: 3,
      },
      {
        receipeId: 5,
        card_img: require("../../assets/images/recipeThumb-06.jpg"),
        rating: 5,
      },
      {
        receipeId: 6,
        card_img: require("../../assets/images/recipeThumb-07.jpg"),
        rating: 2,
      },
    ],
    author_list: [
      {
        name: "Sandra Fortin",
        mail_id: "sandra@chow.com",
        description:
          "I'm Sandra and this is where I share my stuff. I am madly in love with food. You will find a balance of healthy recipes, comfort food and indulgent desserts.",
        author_img: require("../../assets/images/author-photo.jpg"),
      },
    ],
    activeBanner: 0,
    is_grid: true,
    search_value: "",
    searchRecipeList: null,
    page_two_banner: require("../../assets/images/recipeBackground-02.webp"),
    loading: true,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    axios
      .get("/recipes.json")
      .then((response) => {
        let recipe_arr = Object.values(response.data);
        let updated_recipe = recipe_arr.map((data, index) => {
          return {
            ...data,
            ...this.state.Recipe_list[index],
            receipeId: index,
          };
        });
        if (updated_recipe.length > 6) {
          let recipe2 = updated_recipe.slice(0, 7);
          let recipe1 = updated_recipe.slice(7).map((data, index) => {
            return {
              ...updated_recipe[index + 7],
              card_img: require("../../assets/images/recipeThumb-04.jpg"),
              rating: 3,
            };
          });
          updated_recipe = recipe2.concat(recipe1);
        }
        if (this.props.location.state != null) {
          this.setState(
            {
              search_value: this.props.location.state.searchText,
              Recipe_list: updated_recipe,
              loading: false
            },
            () => {
              this.searchResult();
            }
          );
        } else {
          this.setState({ Recipe_list: updated_recipe,loading: false });
        }
      })
      .catch((err) => {
        alert(err);
      });
  }
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
    let arr = [];
    let searchText = this.state.search_value.trim();
    arr = this.state.Recipe_list.filter((data) => {
      if (data.recipe_name.toLowerCase().includes(searchText)) {
        return data;
      }else{
        return null;
      }
    });
    this.setState({ searchRecipeList: arr });
  };

  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          {this.state.loading ?<SpinnerWrapper>
          <Spinner></Spinner>
        </SpinnerWrapper>:<HomeSlider
            author_obj={this.state.author_list[0]}
            banner_tabchanger={this.banner_tabchanger}
            Recipe_list={this.state.Recipe_list}
            activeBanner={this.state.activeBanner}
            page_two_banner={this.state.page_two_banner}
          />}
          <Container>
            <RecipeContents>
              <RecipeCards
                loading={this.state.loading}
                author_obj={this.state.author_list[0]}
                is_grid={this.state.is_grid}
                recipe_list={
                  this.state.searchRecipeList === null
                    ? this.state.Recipe_list
                    : this.state.searchRecipeList
                }
                page_two_banner={this.state.page_two_banner}
              />
              <SearchWrapper>
                <SearchBarComponent
                  clicked={this.searchResult}
                  changed={this.Inputhandler}
                  pressed={this.wordSearch}
                  value={this.state.search_value}
                />
                <View onClick={this.listView}>
                  <i className="fa fa-bars"></i> List
                </View>
                <View onClick={this.gridView}>
                  <i className="fa fa-th-large"></i> Grid
                </View>
                <AuthorCard author_obj={this.state.author_list[0]} />
              </SearchWrapper>
            </RecipeContents>
          </Container>
        </ThemeProvider>
      </div>
    );
  }
}
