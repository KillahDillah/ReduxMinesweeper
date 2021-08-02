import { Dropdown } from "./components/header/Dropdown";
import { Gamestats } from "./components/header/Gamestats";
import { Gameboard } from "./components/Gameboard";
import { HeaderNav } from "./components/header/HeaderNav";
import { useSelector } from "react-redux";

const App = () => {
  const mines = useSelector((state) => state.mines);
  const squares = useSelector((state) => state.squares);

  console.log(mines, squares.length, "in app");

  return (
    <div className="App">
      <header>
        <Dropdown />
        <Gamestats />
        <HeaderNav />
      </header>
      <Gameboard squares={squares} />
    </div>
  );
};

export default App;
