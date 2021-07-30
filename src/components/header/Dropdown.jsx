import { setMines } from "../../actions";
import { useDispatch } from "react-redux";

export const Dropdown = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <select onChange={(e) => dispatch(setMines(e.target.value))}>
        <option value={10}>Easy</option>
        <option value={15}>Medium</option>
        <option value={20}>Hard</option>
      </select>
    </div>
  );
};
