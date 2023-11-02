import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
*{
    margin:0px;
    padding:0px;
    box-sizing: border-box;
    letter-spacing: 0.1rem;
}
body{
    font-family: 'Poppins', sans-serif;
}
html{
    font-size: 62.5%;
}
.w-80{
    width: 80%;
    margin: auto;
}
.error_msg{
  color: red;
  font-size: 20px;
  text-align: center;
}
.pagination{
    display: flex;
    justify-content: center;
    margin-top: 3rem;
    margin-bottom: 3rem;
}
.pagination > ul{
    display: flex;
    list-style: none;
    gap: 0.5rem;
}
.pagination > ul li{
    padding: 0.8rem 1.5rem;
    border: .1rem solid #ccc;
    border-radius: 0.4rem;
    font-size: 1.4rem;
    cursor: pointer;
}
.pageActive{
    background-color: ${({ theme }) => theme.typo.purple};
    color: ${({ theme }) => theme.typo.white};
}

@media (max-width: ${({ theme }) => theme.responsive.large_device}) {
    html{
        font-size: 55.5%;
    }
    .w-80{
        width: 90%;
    }
    .pagination {
        justify-content: center !important;
    }
}

`;

export default GlobalStyle;
