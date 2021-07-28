import { createStore } from "redux";

function reducer(state = [], action) {
  console.log(state, action, "in store");
}

const store = createStore(reducer);
console.log(store.getState());
export default store;
