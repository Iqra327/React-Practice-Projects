import { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";

const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(true);

  const toggleGame = () => {
    setIsGameStarted((prev) => !prev);
  }

  return(
    <>
      {isGameStarted ? <GamePlay/> : <StartGame toggle={toggleGame}/>}
    </>
  )
};

export default App;
