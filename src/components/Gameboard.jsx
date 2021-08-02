import Square from "./Square";

export const Gameboard = (props) => {
  const { squares } = props;

  return (
    <div className="board">
      {squares.map((square, key) => (
        <Square square={square} key={key} />
      ))}
    </div>
  );
};
