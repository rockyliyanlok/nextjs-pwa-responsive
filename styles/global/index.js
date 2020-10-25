import { createGlobalStyle } from 'styled-components'
import base from './base'
import reset from 'styled-reset'
 
const GlobalStyle = createGlobalStyle`
 ${reset}
 ${base}
`
 
export default GlobalStyle
