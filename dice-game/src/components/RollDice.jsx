import styled from "styled-components";

const RollDice = ({randomDice, generateRandomDice}) => {

  return(
    <DiceContainer>
      <div className="dice">
       <img 
        onClick={generateRandomDice} 
        src={`/images/dice/dice_${randomDice}.png`}
        alt="roll-dice-img" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .dice{
    cursor: pointer;
  }

  p{
    font-size: 24px;
  }

  @media screen and (max-width: 320px) {
    .dice{
      img{
        width: 100%
      }
      margin-left: 20px;
    }
  }
`;