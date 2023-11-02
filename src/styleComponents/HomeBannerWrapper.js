import styled from "styled-components";

export const HomeBannerWrapper = styled.section`
  width: 100%;
  padding: 4rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: #f5f5f5; */
  > div {
    position: relative;
    width: 60%;
    margin: 0 auto;
    > input {
      width: 100%;
      padding: 1.3rem 2rem;
      border: 0.2rem solid ${({ theme }) => theme.typo.purple};
      border-radius: 3rem;
      font-size: 1.6rem;
      outline: none;
      color: ${({ theme }) => theme.typo.smallHeading};
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
    @media (max-width: ${({ theme }) => theme.responsive.large_device}) {
      flex-basis: 90%;
    }
  }
`;
