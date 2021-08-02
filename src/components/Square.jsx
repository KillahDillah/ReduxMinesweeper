const clickSquare = () => {
  console.log("click");
};
//dispatch
const addFlag = (e) => {
  e.preventDefault();
  console.log("right click");
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
