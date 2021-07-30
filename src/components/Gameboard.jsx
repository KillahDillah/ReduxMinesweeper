import { useSelector } from "react-redux";

export const Gameboard = () => {
  const width = 16;
  const mines = useSelector((state) => state.mines);
  const minesArray = Array(mines).fill("mine");
  const emptyArray = Array(width * width - mines).fill("empty");
  const gameArray = emptyArray.concat(minesArray);
  const boardArray = gameArray.sort(() => Math.random() - 0.5);

  console.log(boardArray);

  function createBoard() {
    for (let x = 0; x < width * width; x++) {
      let row = [];
      for (let y = 0; y < width * width; y++) {
        let square = [];
      }
    }
  }
  createBoard();

  return <div className="board">{mines}</div>;
};
