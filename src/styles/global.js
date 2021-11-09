import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap');

*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

html, border-style, #root {
    height: 100%;
 
    
}



body {
    font-size: 14px 'Nunito', 'Nunito', sans-serif;
    background: #ecf1f8;
    color:  rgb(75, 75, 75);
    //color: #3333;
    -webkit-font-smoothing: antialised !important; 

}

ul {
    list-style: none;
}
`;
