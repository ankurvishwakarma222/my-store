import styled from "styled-components";

export const SerachFiledWrapper = styled.section`
  display: none;
  > div {
    position: relative;
    width: 90%;
    margin: 0 auto;
    > input {
      width: 100%;
      padding: 1rem 2rem;
      border: 0.2rem solid ${({ theme }) => theme.typo.purple};
      border-radius: 3rem;
      font-size: 1.6rem;
      outline: none;
      color: ${({ theme }) => theme.typo.smallHeading};
      &:focus {
        box-shadow: rgba(106, 13, 150, 0.5) 0 0.1rem 0.5rem;
        transition-duration: 0.1s;
      }
    }
    > button {
      position: absolute;
      height: 100%;
      right: 0;
      top: 0;
      background-color: ${({ theme }) => theme.typo.purple};
      border: none;
      color: #fff;
      border-radius: 0 3rem 3rem 0;
      cursor: pointer;
      padding: 0rem 3.5rem;
      font-size: 2rem;
      display: flex;
      align-items: center;
      &:hover {
        background-color: ${({ theme }) => theme.typo.purpleDim};
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.responsive.large_device}) {
    display: initial;
  }
`;
