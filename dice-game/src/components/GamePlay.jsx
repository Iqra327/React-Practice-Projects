import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RollDice from "./RollDice";

const GamePlay = () => {
  return (
    <Main>
      <div className="top_section">
        <TotalScore />
        <NumberSelector />
      </div>
      <RollDice />
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
`