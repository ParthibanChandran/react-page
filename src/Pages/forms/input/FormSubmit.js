import React from "react";

import { SubmitButton } from "./style";

export default function FormSubmit(props) {
  return (
    <React.Fragment>
      <SubmitButton disabled={props.disabled} onClick={props.clicked}>
        {props.children}
      </SubmitButton>
    </React.Fragment>
  );
}
