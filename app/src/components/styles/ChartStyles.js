import styled, { css } from "styled-components";

export const Container = styled.div`
  margin: 0px auto;
  width: 500px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 0.5em;
  border: none;
  border-radius: 20px;
  padding: 3em;
  background-color: ${({ theme }) => theme.colors.veryPaleOrange};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 300px;
    padding: 2em;
  }

  h1 {
    font-size: 2.2em;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5em;
    }
  }
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const BarChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5em;

  & span {
    font-size: 1em;
    color: ${({ theme }) => theme.colors.mediumBrown};
  }

  p {
    display: none;
  }

  &:hover {
    p {
      display: block;
    }
  }
`;

export const Chart = css`
  margin-top: 10px;
  width: 56px;

  border-radius: 5px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.cyan};
  }
  @media (max-width: 420px) {
    width: 34px;
  }
`;

export const Day = styled.span`
  font-size: 1.5rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.darkBrown};
`;

export const MakeBar = styled.div`
  height: ${(props) => props.height}%;
  background-color: ${({ theme }) => theme.colors.softRed};
  opacity: ${({ currentDay }) => (currentDay ? 0.7 : 1)};
  ${Chart};
  cursor: pointer;
`;

export const BlackLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.mediumBrown};
  opacity: 0.2;
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 2em;
  width: 100%;

  .total {
    display: flex;
    flex-direction: column;
  }

  .percentage {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  h1 {
    color: ${({ theme }) => theme.colors.darkBrown};
    font-size: 3.5em;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 2em;
    }
  }

  h3 {
    color: ${({ theme }) => theme.colors.mediumBrown};
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1em;
    }
  }
  p {
    font-weight: 800;
    font-size: 1.3em;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 0.8em;
    }
  }
`;

export const HoverContainer = styled.p`
  padding: 0.5em;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.darkBrown};
  color: ${({ theme }) => theme.colors.veryPaleOrange};
`;
