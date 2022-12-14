import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --color-font: #dadada;
        --color-font-headline: #030303;
        --color-background-object: #4cd964;
        --color-button: #0263F9;
    }
    
    * {
        box-sizing: border-box;
    }
    
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }

    @font-face {
        font-family: Abel;
        src: url(/fonts/Abel-Regular.ttf) format("truetype");
    }


`;

export default GlobalStyles;
