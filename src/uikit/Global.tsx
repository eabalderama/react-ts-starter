import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { ReactTheme } from 'uikit/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends ReactTheme {}
}

const GlobalStyle = createGlobalStyle`
  @supports (font-variation-settings: normal) {
    html { font-family: 'Inter var', sans-serif; }
  }
  
  * {
    font-family: 'Coda';
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};
    background-image: url(/bg2.jpg);
    background-attachment: fixed;
    background-size: 100% auto;
    img {
      height: auto;
      max-width: 100%;
    }
  }

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  a {
    text-decoration: none;

    :hover {
      text-decoration: none
    }
  }


.three-line-legend {
	width: 100%;
	height: 70px;
	position: absolute;
	padding: 8px;
	font-size: 12px;
	color: #20262E;
	background-color: rgba(255, 255, 255, 0.23);
	text-align: left;
	z-index: 10;
  pointer-events: none;
}

.three-line-legend-dark {
	width: 100%;
	height: 70px;
	position: absolute;
	padding: 8px;
	font-size: 12px;
	color: white;
	background-color: rgba(255, 255, 255, 0.23);
	text-align: left;
	z-index: 10;
  pointer-events: none;
}

@media screen and (max-width: 800px) {
  .three-line-legend {
    display: none !important;
  }

  .s-nav::before {    
    filter: blur(11px) !important;
    -webkit-filter: blur(11px) !important;
    top:-34px !important;
  }
}

.tv-lightweight-charts{
  width: 100% !important;


  & > * {
    width: 100% !important;
  }
}

.faded {
  /*opacity:0.9;*/
  /*-webkit-animation: fadeinout .3s linear forwards;
  animation: fadeinout .3s linear forwards;*/
}

@-webkit-keyframes fadeinout {
  0% { opacity: 0.6; }
  50% { opacity: 0.2; }
  100% { opacity: 0; }
}

@keyframes fadeinout {
  0% { opacity: 0.6; }
  50% { opacity: 0.2; }
  100% { opacity: 0.3; }
}

.show {
  opacity:1;
  /*-webkit-animation: display .5s linear forwards;
  animation: display .5s linear forwards;*/
}

.s-nav::before {    
  content: "";
  background-image: url(/bg2.jpg);
  filter: blur(7px);
  -webkit-filter: blur(7px);
  background-size: cover;
  position: absolute;
  top: -20px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  opacity: 1;
}


@-webkit-keyframes display {
  0% { opacity: 0.2; }
  50% { opacity: 0.6; }
  100% { opacity: 1; }
}

@keyframes display {
  0% { opacity: 0.2; }
  50% { opacity: 0.6; }
  100% { opacity: 1; }
}
.s-nav div{
  z-index:99;
}

.staked-btn{
  display:inline-block;
  margin:5px;
}

.col-staked-btn{
  width: 93px;
  margin: 2px;
}

`

export default GlobalStyle
