import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutHandler } from "../Store/actions";
import {
  LoginWrapper,
  TitleText,
  InputTitle,
  ButtonWrapper,
  InputBox,
  WelcomeWrapper,
  WelcomeImage,
  FormWrapper,
  ErrorMsg,
} from "./style";
import FormSubmit from "./input/FormSubmit";
import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
import { checkValidity } from "../../utils/utility";

class Login extends Component {
  state = {
    loginForm: {
      email: {
        elementConfig: {
          type: "email",
          placeholder: "Your E-Mail",
        },
        value: "",
        validation: {
          required: true,
          isEmail: true,
        },
        valid: false,
        touched: false,
      },
      password: {
        elementConfig: {
          type: "password",
          placeholder: "Enter the Password",
        },
        value: "",
        validation: {
          required: true,
          minLength: 8,
          maxLength: 15,
        },
        valid: false,
        touched: false,
      },
    },
    formIsValid: false,
    loginResult: false,
    existStatus: false,
    BannerImage: require("../../assets/images/receipe.jpeg"),
    errorMsg: "",
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedLoginForm = {
      ...this.state.loginForm,
    };
    const updatedFormElement = {
      ...updatedLoginForm[inputIdentifier],
    };
    updatedFormElement.value = event.target.value;
    let error = checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    if (error === "") {
      updatedFormElement.valid = true;
    } else {
      updatedFormElement.valid = false;
    }
    updatedFormElement.touched = true;
    updatedLoginForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedLoginForm) {
      formIsValid = updatedLoginForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({
      loginForm: updatedLoginForm,
      formIsValid: formIsValid,
      errorMsg: error,
    });
  };
  signupHandler = (event) => {
    event.preventDefault();
  };
  loginHandler = (event) => {
    event.preventDefault();
    const formData = {};
    for (let formElementIdentifier in this.state.loginForm) {
      formData[formElementIdentifier] = this.state.loginForm[
        formElementIdentifier
      ].value;
    }
    var user = localStorage.getItem(formData.email);
    var temp = false;
    var error = "";
    if (user) {
      user = JSON.parse(user);
      if (
        user.password === formData.password &&
        user.email === formData.email
      ) {
        user.loginStatus = true;
        localStorage.setItem(formData.email, JSON.stringify(user));
        sessionStorage.setItem("authenticated", true);
        this.props.logoutHandler();
        temp = true;
        this.props.history.push("/home-page");
      } else {
        error = "Email and Password didn't match...";
      }
    }else{
      error= "please SignUp the form..."
    }
    this.setState({
      formIsValid: temp,
      loginResult: true,
      existStatus: temp,
      errorMsg: error,
    });
  };
  render() {
    const formElementsArray = [];
    for (let key in this.state.loginForm) {
      formElementsArray.push({
        id: key,
        config: this.state.loginForm[key],
      });
    }
    let form = (
      <form>
        <InputTitle>Email</InputTitle>
        <InputBox
          {...this.state.loginForm.email.elementConfig}
          value={this.state.loginForm.email.value}
          onChange={(event) =>
            this.inputChangedHandler(event, formElementsArray[0].id)
          }
          loginResult={this.state.loginResult}
          touched={this.state.loginForm.email.touched}
        />
        <InputTitle>Password</InputTitle>
        <InputBox
          {...this.state.loginForm.password.elementConfig}
          value={this.state.loginForm.password.value}
          onChange={(event) =>
            this.inputChangedHandler(event, formElementsArray[1].id)
          }
          loginResult={this.state.loginResult}
          touched={this.state.loginForm.password.touched}
        />
        <ButtonWrapper>
          <FormSubmit
            clicked={this.loginHandler}
            disabled={!this.state.formIsValid}
          >
            Login
          </FormSubmit>
          <FormSubmit clicked={this.signupHandler}>
            <Link className="banner-link-tag" to={{ pathname: "/signup" }}>
              SignUp
            </Link>
          </FormSubmit>
        </ButtonWrapper>
      </form>
    );
    return (
      <WelcomeWrapper>
        <ThemeProvider theme={theme}>
          <WelcomeImage img={this.state.BannerImage}></WelcomeImage>
          <FormWrapper>
            <LoginWrapper>
              <TitleText>Login</TitleText>
              <ErrorMsg>{this.state.errorMsg}</ErrorMsg>
              {form}
            </LoginWrapper>
          </FormWrapper>
        </ThemeProvider>
      </WelcomeWrapper>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  logoutHandler: (data) => dispatch(logoutHandler()),
});

export default connect(null, mapDispatchToProps)(Login);
