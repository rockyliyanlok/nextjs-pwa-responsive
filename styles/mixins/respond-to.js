import { breakpoints } from '../../config/flexgrid'
import { css } from 'styled-components'

const media = {
  xs: `(max-width: ${breakpoints.sm - 1}px)`,
  sm: `(min-width: ${breakpoints.sm}px) and (max-width: ${breakpoints.md - 1}px)`,
  smAndDown: `(max-width: ${breakpoints.md - 1}px)`,
  smAndUp: `(min-width: ${breakpoints.sm}px)`,
  md: `(min-width: ${breakpoints.md}px) and (max-width: ${breakpoints.lg - 1}px)`,
  mdAndDown: `(max-width: ${breakpoints.lg - 1}px)`,
  mdAndUp: `(min-width: ${breakpoints.md}px)`,
  lg: `(min-width: ${breakpoints.lg}px)`
}

const respondTo = Object.keys(media).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media ${media[label]} {
      ${css(...args)}
    }
  `
  return accumulator
}, {})

export default respondTo
