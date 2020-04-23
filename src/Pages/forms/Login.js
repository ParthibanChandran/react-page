import React, { Component } from "react";

import {
  LoginWrapper,
  TitleText,
  InputTitle,
  ButtonWrapper,
  InputBox,
} from "./style";
import FormSubmit from "./input/FormSubmit";
import { Link, Redirect } from "react-router-dom";
import App from "../../container/App";

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
        },
        valid: false,
        touched: false,
      },
    },
    formIsValid: false,
    loginResult: false,
    existStatus: false,
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
    var user=sessionStorage.getItem("user");
    if(user){
      user = JSON.parse(user);
      var temp=false;
      if(user.password === formData.password && user.email === formData.email){
        temp=true;
      }
    }
    console.log(formData,temp,user);
    this.setState({ loginResult: true,existStatus: temp },()=>{
       
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
            <Link className="banner-link-tag" to={{ pathname: "/welcome/signup" }}>
              SignUp
            </Link>
          </FormSubmit>
        </ButtonWrapper>
      </form>
    );
    if(this.state.loginResult && this.state.existStatus && this.state.formIsValid){
      return <Redirect to="/home-page"/>;
    }
    return (
      <LoginWrapper>
        <TitleText>Login</TitleText> 
        {this.state.formIsValid ? null:(
           <h3
           style={{
             marginBottom: "20px",
             color: "red",
             fontFamily: "'Open Sans', sans-serif",
           }}
         >
           Invalid User...Please SignUp...
         </h3>
        )}    
        {form}
      </LoginWrapper>
    );
  }
}
