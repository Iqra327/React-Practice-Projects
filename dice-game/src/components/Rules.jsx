import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <div className="text">
        <ul>
          <li>Select any number</li>
          <li>Click on dice image</li>
          <li>After click on dice if selected number is equal to dice number you will get same point as dice</li>
          <li>If you get wrong guess then 2 point will be dedcuted</li>
        </ul>
      </div>
    </RulesContainer>
  )
};

export default Rules;

const RulesContainer = styled.div`
  background-color: #fbf1f1;
  padding: 20px;
  margin: 40px auto;
  width: 100%;
  max-width: 550px;
  border-radius: 10px;

  h2{
    font-size: 24px;
  }

  .text{
    margin-top: 24px;
    margin-left: 10px;
  }

  li::marker{
    content: '⚡';
  }
`;