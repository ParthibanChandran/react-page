import { fromJS } from "immutable";
const initialState = fromJS({
  isLogged: sessionStorage.getItem("authenticated"),
});

const Func = (state = initialState, action) => {
  switch (action.type) {
    case "LOGOUT":
      return state.setIn(["isLogged"],sessionStorage.getItem("authenticated"));
    default:
      return state;
  }
};

export default Func;
