import { Gameboard } from "./components/Gameboard";
import store from "./store/store";

function App() {
  const LevelDropdown = () => {
    function changeLevel(e) {
      store.dispatch({
        type: "MINES",
        mines: e.target.value,
      });
    }
    return (
      <select onChange={(e) => changeLevel(e)}>
        <option value={10}>Easy</option>
        <option value={15}>Medium</option>
        <option value={20}>Hard</option>
      </select>
    );
  };

  return (
    <div className="App">
      <header>
        <div>Minesweeper</div>
        <LevelDropdown />
      </header>
      <Gameboard />
    </div>
  );
}

export default App;
