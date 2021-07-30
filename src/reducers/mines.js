const mines = (state = 10, action) => {
  console.log("reducer/mines");
  if (action.type === "SET_MINES") {
    console.log(action, "mines.jsx");
    state = action.mines;
    return state;
  }
  return state;
};

export default mines;
