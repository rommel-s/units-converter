import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 20px;
`;

export const TableWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto;
  align-items: center;
  justify-items: center;

  @media (min-width: 700px) {
    grid-template-columns: auto auto;
    gap: 1em;
    padding: 30px;
  }
`;
