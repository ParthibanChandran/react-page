import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

import FormSubmit from "./input/FormSubmit";
import Input from "./input/Input";
import { SignupWrapper, TitleText,WelcomeWrapper, WelcomeImage, FormWrapper } from "./style";

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
    console.log(formData);
    var temp = true;
    if (formData.password === formData.re_password) {
      sessionStorage.setItem("user", JSON.stringify(formData));
    } else {
      temp = false;
    }
    this.setState({
      formIsValid: temp,
      passwordCheck: temp,
      signupResult: true,
    });
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
    const updatedSignupForm = {
      ...this.state.signupForm,
    };
    const updatedFormElement = {
      ...updatedSignupForm[inputIdentifier],
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    updatedSignupForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedSignupForm) {
      formIsValid = updatedSignupForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({ signupForm: updatedSignupForm, formIsValid: formIsValid });
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
    if (this.state.formIsValid && this.state.passwordCheck) {
      return <Redirect to="/login" />;
    }
    return (
      <WelcomeWrapper>
      <WelcomeImage img={this.state.BannerImage}></WelcomeImage>
      <FormWrapper>
      <SignupWrapper>
        <TitleText>Sign Up</TitleText>
        {this.state.formIsValid === false && this.state.signupResult ? (
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
      </SignupWrapper>
      </FormWrapper>
      </WelcomeWrapper>
    );
  }
}
