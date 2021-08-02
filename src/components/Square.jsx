import { useDispatch } from "react-redux";

const clickSquare = () => {
  console.log("click");
};
//dispatch
const addFlag = (e) => {
  e.preventDefault();
  // if (isGameOver) return;
  console.log("right click");
  // useDispatch(setFlags())
  return;
};

const Square = (props) => {
  const { square } = props;

  return (
    <div
      className={square.className}
      onClick={(e) => {
        clickSquare(e);
      }}
      onContextMenu={(e) => {
        addFlag(e);
      }}
    ></div>
  );
};

export default Square;
