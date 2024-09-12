import { useState } from "react";
import styled from "styled-components";

const NumberSelector = () => {
  const arrNumber = [1,2,3,4,5,6];
  const [selectedNumber, setSelectedNumber] = useState();
  
  return(
    <NumberSelectorContainer>
      <div className="boxes">
      {arrNumber.map((value, i) => (
        <Box
          isSelected = {value === selectedNumber} 
          key={i} 
          onClick={() => setSelectedNumber(value)}>{value}</Box>
      ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector;

const NumberSelectorContainer = styled.div`
   margin-right: 30px;
  .boxes{
    display: flex;
    gap: 24px;
  }

  p{
    text-align: end;
    font-weight: 700;
    font-size: 24px;
    margin-top: 10px;
  }
`

const Box = styled.div`
  height: 72px;
  width: 72px;
  font-size: 24px;
  font-weight: 700;
  border: 1px solid black;
  display: grid;
  place-items: center;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`