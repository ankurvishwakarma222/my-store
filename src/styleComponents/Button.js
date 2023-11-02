import styled from "styled-components";

export const Button = styled.button`
  border: 0.2rem solid ${({ theme }) => theme.typo.purple};
  /* padding: 1rem 3rem; */
  padding: ${({ padding }) => padding};
  /* font-size: 1.6rem; */
  font-size: ${({ fontSize }) => fontSize};
  border-radius: 0.4rem;
  cursor: pointer;
  /* background: ${({ theme }) => theme.typo.purple}; */
  background: transparent;
  color: ${({ theme }) => theme.typo.smallHeading};
  transition: 0.3s;
  &:hover {
    background: ${({ theme }) => theme.typo.purple};
    color: ${({ theme }) => theme.typo.white};
  }
`;
