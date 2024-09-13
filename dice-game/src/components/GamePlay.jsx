import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RollDice from "./RollDice";
import { useState } from "react";
import { Button, OutlineButton } from "../styled/button";
import Rules from "./Rules";

const GamePlay = () => {
  const [error, setError] = useState('');
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [randomDice, setRandomDice] = useState(1);
  const [rules, setRules] = useState(false);
  
  const generateRandomNumber = (min, max) => {
    return (Math.floor(Math.random() * (max - min) + min));
  };

  const generateRandomDice = () => {
    
    if(!selectedNumber){
      setError('You have not selected any number');
      return;
    };

    const randomNumber = generateRandomNumber(1, 7);
    setRandomDice(randomNumber);

    if(selectedNumber === randomNumber){
      setScore(prev => prev + randomNumber);
    }else{
      setScore(prev => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  return (
    <Main>
      <div className="top_section">
        <TotalScore score={score}/>
        <NumberSelector
          setError={setError}
          error={error} 
          selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDice 
        setScore={setScore}
        randomDice={randomDice} 
        generateRandomDice={generateRandomDice} 
      />
      <div className="btns">
        <OutlineButton 
          onClick={() => setScore(0)}
        >
          Reset Score
        </OutlineButton>
        
        <Button 
          onClick={() => setRules((prev) => !prev)}
        >
          {rules ? 'Hide' : 'Show'} Rules
        </Button>
      </div>
      
      {rules && <Rules />}
    </Main>
  )
};

export default GamePlay;

const Main = styled.main`
  padding-top: 30px;
  .top_section{
    display: flex;
    justify-content: space-around;
    align-items: end;
  }

  .btns{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 40px;
  }

  @media screen and (max-width: 750px){
    .top_section{
      flex-direction: column;
      align-items: start;
    }
  }
`