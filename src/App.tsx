import { FC } from "react";
import Cat from "./assets/images/cat.png";
import "./style.css";

const App: FC = () => {
  return (
    <div className="app">
      <h1 className="text">Hello World!</h1>
      <img className="cat" src={Cat} alt="Kitty" />
    </div>
  );
};

export default App;
