import styled from "styled-components";

export const FilterWrapper = styled.section`
  padding: 2rem 0rem 4rem;
  > div {
    > h1 {
      font-size: 1.8rem;
      color: ${({ theme }) => theme.typo.mainHeading};
    }
    > div {
      margin-top: 2rem;
      display: flex;
      flex-wrap: wrap;
      /* justify-content: center; */
      gap: 2rem;
      > select {
        flex-basis: 27%;
        padding: 1.3rem;
        border-radius: 0.4rem;
        border: 0.1rem solid #ccc;
        font-size: 1.6rem;
        outline: none;
        color: ${({ theme }) => theme.typo.smallHeading};
        &:focus {
          border-color: ${({ theme }) => theme.typo.purple};
        }
        &:active {
          border-color: ${({ theme }) => theme.typo.purple};
        }
        @media (max-width: ${({ theme }) => theme.responsive.large_device}) {
          flex-basis: 47%;
        }
        @media (max-width: ${({ theme }) => theme.responsive.small_device}) {
          flex-basis: 100%;
        }
      }
      > button {
        border: 0.2rem solid ${({ theme }) => theme.typo.purple};
        /* padding: 1rem 3rem; */
        padding: 1.3rem;
        border-radius: 0.4rem;
        /* font-size: 1.6rem; */
        font-size: 1.4rem;
        cursor: pointer;
        /* background: ${({ theme }) => theme.typo.purple}; */
        background: transparent;
        color: ${({ theme }) => theme.typo.smallHeading};
        transition: 0.3s;
        &:hover {
          background: ${({ theme }) => theme.typo.purple};
          color: ${({ theme }) => theme.typo.white};
        }
      }
      @media (max-width: ${({ theme }) => theme.responsive.small_device}) {
        justify-content: center;
      }
    }
  }
`;
