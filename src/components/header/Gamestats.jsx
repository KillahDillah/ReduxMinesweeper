import { useSelector } from "react-redux";

export const Gamestats = () => {
  const flagsIcon = "🚩";
  const minesIcon = "⏱";
  const mines = useSelector((state) => state.mines);

  return (
    <div className="header">
      <div>{flagsIcon}</div>
      <div>
        {mines}
        {minesIcon}
      </div>
    </div>
  );
};
