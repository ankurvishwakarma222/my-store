import styled from "styled-components";

export const ProductWrapper = styled.section`
  > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2.2rem;
    > div {
      flex-basis: 49%;
      display: flex;
      border: 1px solid #ccc;
      border-radius: 0.5rem;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      transition: transform 0.2s;
      &:hover {
        transform: scale(1.03);
      }
      @media (max-width: ${({ theme }) => theme.responsive.large_device}) {
        flex-basis: 100%;
      }
      @media (max-width: ${({ theme }) => theme.responsive.small_device}) {
        flex-direction: column;
      }
      > div:nth-child(1) {
        flex-basis: 40%;
        background-color: #ccc;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0.5rem 0 0 0.5rem;
        padding: 2rem;
        > img {
          width: 70%;
          height: 100%;
          object-fit: contain;
        }
      }
      > div:nth-child(2) {
        flex-basis: 60%;
        padding: 15px;
        > h2 {
          font-size: 2rem;
          color: ${({ theme }) => theme.typo.mainHeading};
        }
        > p:nth-child(2) {
          font-size: 1.6rem;
          font-weight: bold;
          color: ${({ theme }) => theme.typo.smallHeading};
          margin: 1rem 0 0 0;
        }
        > p:nth-child(3) {
          font-size: 1.4rem;
          line-height: 2rem;
          color: ${({ theme }) => theme.typo.smallHeading};
          margin: 1rem 0;
        }
        > p:nth-child(4) {
          font-size: 1.5rem;
          color: green;
        }
        > div {
          margin-top: 1rem;
          display: flex;
          gap: 1rem;
        }
      }
    }
  }
`;
