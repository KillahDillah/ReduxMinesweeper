import { createStore } from "redux";

function reducer(state = [], action) {
  console.log(state, action, "in store");
  if (action.type === "MINES") {
    return action.mines;
  }
  return state;
}

const store = createStore(reducer);

store.subscribe(() => {
  console.log("current state", store.getState());
});

export default store;
