import styled from "styled-components";

export const BalanceStyled = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.softRed};
  border: none;
  border-radius: 20px;
  padding: 3em;
  width: 500px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 300px;
    padding: 2em;
  }

  .my-balance {
    display: flex;
    flex-direction: column;
  }

  h1,
  h3 {
    color: ${({ theme }) => theme.colors.cream};
  }

  h1 {
    font-size: 2em;
  }
`;
