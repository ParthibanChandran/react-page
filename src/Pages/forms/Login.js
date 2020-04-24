import React, { Component } from "react";
import {
  LoginWrapper,
  TitleText,
  InputTitle,
  ButtonWrapper,
  InputBox,WelcomeWrapper, WelcomeImage, FormWrapper
} from "./style";
import FormSubmit from "./input/FormSubmit";
import { Link, Redirect } from "react-router-dom";
import RecipeHomePage from "../RecipeHomePage";

export default class Login extends Component {
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
  };
  checkValidity(value, rules) {
    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
    }

    return isValid;
  }

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedLoginForm = {
      ...this.state.loginForm,
    };
    const updatedFormElement = {
      ...updatedLoginForm[inputIdentifier],
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    updatedLoginForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedLoginForm) {
      formIsValid = updatedLoginForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({ loginForm: updatedLoginForm, formIsValid: formIsValid });
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
    var user = sessionStorage.getItem("user");
    var temp = false;
    if (user) {
      user = JSON.parse(user); 
      if (
        user.password === formData.password &&
        user.email === formData.email
      ) {
        user.loginStatus = true;
        sessionStorage.setItem("user",JSON.stringify(user));
        temp = true;
      }
    }
    console.log(formData, temp, user);
    this.setState({ formIsValid: temp, loginResult: true, existStatus: temp },()=>{
      console.log(this.state.formIsValid,temp,this.state.loginResult);
      if (this.state.existStatus && this.state.formIsValid) {
        this.props.history.push("/recipe-page-1");
      }
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
            <Link
              className="banner-link-tag"
              to={{ pathname: "/signup" }}
            >
              SignUp
            </Link>
          </FormSubmit>
        </ButtonWrapper>
      </form>
    );
    // if (this.state.existStatus && this.state.formIsValid) {
    //   return <Redirect to="/recipe"/>;
    // }
    return (
      <WelcomeWrapper>
      <WelcomeImage img={this.state.BannerImage}></WelcomeImage>
      <FormWrapper>
      <LoginWrapper>
        <TitleText>Login</TitleText>
        {this.state.formIsValid === false && this.state.loginResult ? (
          <h3
            style={{
              marginBottom: "20px",
              color: "red",
              fontFamily: "'Open Sans', sans-serif",
            }}
          >
            Invalid Details...
          </h3>
        ) : null}
        {form}
      </LoginWrapper>
      </FormWrapper>
      </WelcomeWrapper>
    );
  }
}
