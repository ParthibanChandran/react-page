import React, { Component } from "react";
import {
  SignupWrapper,
  TitleText,
  WelcomeWrapper,
  WelcomeImage,
  FormWrapper,
  ErrorMsg,
} from "./style";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
import { checkValidity } from "../../utils/utility";

import FormSubmit from "./input/FormSubmit";
import Input from "./input/Input";

export default class SignUp extends Component {
  state = {
    signupForm: {
      fullName: {
        label: "Fullname",
        elementConfig: {
          type: "text",
          placeholder: "Your FullName",
        },
        value: "",
        validation: {
          required: true,
          minLength: 4,
        },
        valid: false,
        touched: false,
      },
      email: {
        label: "Email",
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
      userName: {
        label: "Username",
        elementConfig: {
          type: "text",
          placeholder: "Your UserName",
        },
        value: "",
        validation: {
          required: true,
          minLength: 4,
        },
        valid: false,
        touched: false,
      },
      password: {
        label: "Password",
        elementConfig: {
          type: "password",
          placeholder: "Your Password",
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
      re_password: {
        label: "Re-Password",
        elementConfig: {
          type: "password",
          placeholder: "Re-enter Your Password",
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
    passwordCheck: false,
    signupResult: false,
    BannerImage: require("../../assets/images/receipe.jpeg"),
    errorMsg: "",
  };

  signupHandler = (event) => {
    event.preventDefault();
    const formData = {};
    for (let formElementIdentifier in this.state.signupForm) {
      formData[formElementIdentifier] = this.state.signupForm[
        formElementIdentifier
      ].value;
    }
    formData.loginStatus = false;
    var temp = true;
    let error = "";
    if (localStorage.getItem(formData.email) === null) {
      if (formData.password === formData.re_password) {
        localStorage.setItem(formData.email, JSON.stringify(formData));
        this.props.history.push("/");
      } else {
        error = "Password didn't match...";
        temp = false;
      }
    } else {
      error = "Email is already exists...";
    }

    this.setState({
      formIsValid: temp,
      passwordCheck: temp,
      signupResult: true,
      errorMsg: error,
    });
  };

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedSignupForm = {
      ...this.state.signupForm,
    };
    const updatedFormElement = {
      ...updatedSignupForm[inputIdentifier],
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
    updatedSignupForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedSignupForm) {
      formIsValid = updatedSignupForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({
      signupForm: updatedSignupForm,
      formIsValid: formIsValid,
      errorMsg: error,
    });
  };
  render() {
    const formElementsArray = [];
    for (let key in this.state.signupForm) {
      formElementsArray.push({
        id: key,
        config: this.state.signupForm[key],
      });
    }
    let form = (
      <form onSubmit={this.signupHandler}>
        {formElementsArray.map((formElement) => (
          <Input
            key={formElement.id}
            label={formElement.config.label}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            touched={formElement.config.touched}
            changed={(event) => this.inputChangedHandler(event, formElement.id)}
          />
        ))}
        <FormSubmit disabled={!this.state.formIsValid}>Sign in</FormSubmit>
      </form>
    );
    return (
      <WelcomeWrapper>
        <ThemeProvider theme={theme}>
          <WelcomeImage img={this.state.BannerImage}></WelcomeImage>
          <FormWrapper>
            <SignupWrapper>
              <TitleText>Sign Up</TitleText>
              <ErrorMsg>{this.state.errorMsg}</ErrorMsg>
              {form}
            </SignupWrapper>
          </FormWrapper>
        </ThemeProvider>
      </WelcomeWrapper>
    );
  }
}
