import styled from "styled-components";

export const Button = styled.button`
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

export const OutlineButton = styled(Button)`
  background-color: white;
  color: black;
  border: 1px solid;

  &:hover{
    background-color: black;
    color: white;
    border: 1px solid transparent;
  }

`