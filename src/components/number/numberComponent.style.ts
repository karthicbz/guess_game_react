import { styled } from "styled-components";

export const NumberComponentContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  padding: 8px;
  cursor: pointer;
  background-color: whitesmoke;
  & > .close-icon {
    position: absolute;
  }
`;
