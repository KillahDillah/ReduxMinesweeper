import { Dropdown } from "./components/header/Dropdown";
import { Gamestats } from "./components/header/Gamestats";
// import { Gameboard } from "./components/Gameboard";
import { HeaderNav } from "./components/header/HeaderNav";

const App = () => {
  return (
    <div className="App">
      <header>
        <Dropdown />
        <Gamestats />
        <HeaderNav />
      </header>
    </div>
  );
};

export default App;
