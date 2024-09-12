import styled from 'styled-components';

const StartGame = ({toggle}) => {
  return(
    <Container>
        <img src="/images/dices 1.png" alt="dices-img"/>
      <div className='content'>
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  )
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  .content {
    h1{
      font-size: 96px;
      white-space: nowrap;
    }
  }
`
const Button = styled.button`
  background-color: black;
  color: white;
  border-radius: 5px;
  padding: 10px 18px;
  min-width: 220px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 0.2s ;

  &:hover{
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: all 0.2s ;
  }

`