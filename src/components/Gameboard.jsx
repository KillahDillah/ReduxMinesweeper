import React from "react";
import { useSelector } from "react-redux";

export const Gameboard = () => {
  const width = 16;
  const squares = [];
  const mines = useSelector((state) => state.mines);
  const minesArray = Array(mines).fill("mine");
  const emptyArray = Array(width * width - mines).fill("empty");
  const gameArray = emptyArray.concat(minesArray);
  const boardArray = gameArray.sort(() => Math.random() - 0.5);

  function createBoard() {
    for (let i = 0; i < width * width; i++) {
      // use styled component
      squares.push(<div className={boardArray[i]}></div>);
    }
  }
  createBoard();

  return <div className="board">{squares}</div>;
};
