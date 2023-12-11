import styled from "styled-components";

export const ButtonsWrapper = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-grow: 1;
  justify-content: flex-end;
  margin-right: 15px;

  @media (max-width: 745px) {
    flex-direction: column;
    margin-right: 0;
    margin-bottom: 10px;
    gap: 0;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  color: rgb(75, 70, 70);
  transition: color 0.3s;

  &:hover {
    color: rgb(0, 0, 0);
    cursor: pointer;
  }

  &:click {
    font-size: x-large;
  }

  &:disabled {
    color: rgb(170, 162, 162);
  }

  @media (max-width: 745px) {
    flex-basis: 100%;
    margin: 10px;
    width: 121px;
    max-width: 121px;
  }
`;
