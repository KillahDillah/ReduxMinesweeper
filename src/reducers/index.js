const createBoard = (mines) => {
  const width = 16;
  let squares = [];
  const minesArray = new Array(Number(mines)).fill("mine");
  const emptyArray = new Array(width * width - mines).fill("empty");
  const gameArray = emptyArray.concat(minesArray);
  const boardArray = gameArray.sort(() => Math.random() - 0.5);

  for (let i = 0; i < width * width; i++) {
    // use styled component
    squares.push({ className: boardArray[i], key: i });
  }
  return squares;
};

const initialState = {
  mines: 10,
  squares: createBoard(10),
  flags: 0,
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_MINES":
      return {
        ...state,
        mines: action.mines,
        squares: createBoard(action.mines),
      };
    case "SET_FLAGS": {
      return {
        ...state,
        flags: action.flags,
      };
    }
    default:
      return state;
  }
}
