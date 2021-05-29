import { createGlobalStyle } from "styled-components";

import SF_Pro_Display_Semibold from "./FontsFree-Net-SFProDisplay-Semibold.ttf";
import SF_Pro_Display_Medium from "./FontsFree-Net-SFProDisplay-Medium.ttf";
import SF_Pro_Display_Bold from "./FontsFree-Net-SFProDisplay-Bold.ttf";
import SF_Pro_Display_Regular from "./FontsFree-Net-SFProDisplay-Regular.ttf";
import SF_Pro_Display_Light from "./FontsFree-Net-SFProDisplay-Light.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: 'SF-medium';
      src: url(${SF_Pro_Display_Medium}) format('truetype');

  }
  @font-face {
    font-family: 'SF-semibold';
    src: url(${SF_Pro_Display_Semibold}) format('truetype');

  }
  @font-face {
    font-family: 'SF-bold';
    src: url(${SF_Pro_Display_Bold}) format('truetype');

  }
  @font-face {
    font-family: 'SF-regular';
    src: url(${SF_Pro_Display_Regular}) format('truetype');

  }

  @font-face {
    font-family: 'SF-light';
    src: url(${SF_Pro_Display_Light}) format('truetype');

  }


  
 `;

export default GlobalStyle;
