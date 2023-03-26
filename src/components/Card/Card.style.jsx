import styled from "styled-components";

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.tints.lighten03};
  padding: 20px;
  width: 90%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 30px;
  margin: 6px 0;
`;

export const MiddleLine = styled.hr`
  margin: 8px 0;
  border: 1px solid ${({ theme }) => theme.colors.shades.darken04};
`;

export const UnitsContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-around;
  flex-direction: row;
`;

export const MeasureTitle = styled.p`
  /* text-align: left; */
  font-size: 1.6em;
  margin-right: 25px;
  font-weight: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.shades.darken04};
`;

export const UnitTitle = styled.p`
  font-size: 1em;
  font-weight: ${({ theme }) => theme.fonts.light};
  color: ${({ theme }) => theme.colors.shades.darken01};
`;

export const Arrow = styled.p`
  font-size: 25px;
  font-weight: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.main.primary};
`;
