import { css } from 'styled-components'
import theme from '../theme'
 
export default css`
 html,
 body {
   background-color: ${theme.colors.mineShaft};
   color: ${theme.colors.mineShaft};
   text-rendering: optimizeLegibility;
   -webkit-font-smoothing: antialiased;
   -webkit-tap-highlight-color: transparent;
   -moz-osx-font-smoothing: grayscale;
   overflow-x: hidden;
   width: 100%;
 }
`
