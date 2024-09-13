import styled from 'styled-components';
import { Button } from '../styled/button';

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

  @media screen and (max-width: 1100px){
    flex-direction: column;

    img{
      width: 100%;
    }
  }

  @media screen and (max-width: 600px) {
    .content{
      h1{
        font-size: 40px;
      }
    }
  }
`