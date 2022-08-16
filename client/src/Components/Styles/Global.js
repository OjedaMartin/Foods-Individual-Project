import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Love+Ya+Like+A+Sister&family=Ubuntu:ital@1&display=swap');

* {
    box-sizing: border-box;
}
body {
    background: #fff;
    color: hsl(192, 100%, 9%);
    font-family: 'Ubuntu', sans-serif;
    font-size: 1.15em;
    margin: 0;
}
p {
    opacity:0.6;
    line-height:1.5;
}
img {
    max-width: 100%;
}
`
export default GlobalStyles