import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  padding: 2rem 0rem;
  margin-bottom: 1rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  background: #f5f5f5;
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    > a {
      text-decoration: none;
      font-size: 3.5rem;
      font-family: "Dancing Script", cursive;
      color: ${({ theme }) => theme.typo.purple};
    }
    > div:nth-child(2) {
      position: relative;
      width: 50%;
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
      @media (max-width: ${({ theme }) => theme.responsive.large_device}) {
        flex-basis: 90%;
        display: none;
      }
    }
    > div:nth-child(3) {
      display: flex;
      align-items: center;
      gap: 2rem;
      > .nav_cart {
        color: ${({ theme }) => theme.typo.purple};
        font-size: 1.8rem;
        display: grid;
        place-items: center;
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 0.4rem;
        background-color: transparent;
        transition: 0.3s;
        border: 0.2rem solid ${({ theme }) => theme.typo.purple};
        &:hover {
          color: ${({ theme }) => theme.typo.white};
          background-color: ${({ theme }) => theme.typo.purple};
        }
      }
      > .toggle_button {
        display: none;
        @media (max-width: ${({ theme }) => theme.responsive.large_device}) {
          display: grid;
        }
      }
    }
  }
`;
