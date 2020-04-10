import React, { Component } from "react";
import { Container, Header } from "./style";
import NavigationButtons from "../components/navigation_bar/NavigationButtons.js";
import LogoWrapper from "../components/navigation_bar/LogoWrapper.js";
import HomeSlider from "../components/homeslider/HomeSlider.js";
// import logo from './logo.svg';
// import './App.css';


class App extends Component {
  state = {
    nav_list: [
      {
        linkName: "Home",
        link: "#",
        subLinks: [],
      },
      {
        linkName: "Demos",
        subLinks: ["Grid Homepage", "List Homepage", "Boxed Version"],
      },
      {
        linkName: "Recipes",
        subLinks: ["Browse Recipes", "Recipe page #1", "Recipe page #2"],
      },
      {
        linkName: "Pages",
        subLinks: ["Shortcodes", "Typography", "Contact"],
      },
      {
        linkName: "Shop",
        subLinks: ["Shop", "Product Page"],
      },
      {
        linkName: "Submit Recipe",
        link: "#",
        subLinks: [],
      },
    ],
    Recipe_list: [
      {
        recipe_name: "Mexican grilled Corn Recipe",
        servings: "4 Servings",
        timing: "4 min",
        name: "sandra fortin",
        img: "../../utils/images/sliderA_01.jpg",
      },
      {
        recipe_name: "Roast Chicken With Lemon Gravy",
        servings: "4 Servings",
        timing: "30 min",
        name: "sandra fortin",
        img: "../utils/images/sliderA_02.jpg",
      },
      {
        recipe_name: "Mexican grilled Corn Recipe",
        servings: "4 Servings",
        timing: "5 hour 10 min",
        name: "sandra fortin",
        img: "../utils/images/sliderA_03.jpg",
      },
      {
        recipe_name: "Mexican grilled Corn Recipe",
        servings: "4 Servings",
        timing: "4 min",
        name: "sandra fortin",
        img: "../utils/images/sliderA_04.jpg",
      },
    ],
    obj: {},
    toggle: false,
  };

  dashboard_obj = (element) => {
    this.setState({ obj: element,toggle: !this.state.toggle });
  };

  render() {
    return (
      <React.Fragment>
        <Container>
          <Header>
            <LogoWrapper />
            <NavigationButtons arr={this.state.nav_list}></NavigationButtons>
          </Header>
        </Container>
        <HomeSlider
          dashboard_obj={this.dashboard_obj}
          recipe={this.state.Recipe_list}
          obj={this.state.obj}
          toggle={this.state.toggle}
        ></HomeSlider>
      </React.Fragment>
    );
  }
}
export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
