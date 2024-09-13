import styled from "styled-components";

const NumberSelector = ({selectedNumber, setSelectedNumber, error, setError}) => {
  const arrNumber = [1,2,3,4,5,6];
  
  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError('');
  };

  return(
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="boxes">
      {arrNumber.map((value, i) => (
        <Box
          isSelected = {value === selectedNumber} 
          key={i} 
          onClick={() => numberSelectorHandler(value)}>{value}</Box>
      ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  margin-right: 30px;

  .error{
    color: red;
    margin-bottom: 10px;
   }
  
  .boxes{
    display: flex;
    gap: 24px;
    cursor: pointer;
  }

  p{
    text-align: end;
    font-weight: 700;
    font-size: 24px;
    margin-top: 10px;
  }
  
  @media screen and (max-width: 610px) {
    .boxes{
      flex-wrap: wrap;
    }
  }
`

const Box = styled.div`
  height: 72px;
  width: 72px;
  max-width: 100%;
  font-size: 24px;
  font-weight: 700;
  border: 1px solid black;
  display: grid;
  place-items: center;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};

  
  @media screen and (max-width: 750px) {
      margin-left: 20px;
  }
`