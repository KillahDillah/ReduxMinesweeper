export const setMines = (mines) => ({
  type: "SET_MINES",
  mines,
  // squares: createBoard(mines),
});

// const createBoard = (mines) => {
//   const width = 16;
//   let squares = [];
//   const minesArray = Array(mines).fill("mine");
//   const emptyArray = Array(width * width - mines).fill("empty");
//   const gameArray = emptyArray.concat(minesArray);
//   const boardArray = gameArray.sort(() => Math.random() - 0.5);

//   for (let i = 0; i < width * width; i++) {
//     // use styled component
//     squares.push({ square: boardArray[i], key: { i } });
//   }
//   return squares;
// };
