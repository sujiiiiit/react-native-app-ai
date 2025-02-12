import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg

    viewBox="0 0 512 512"
    {...props}
  >
    <Path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={32}
      d="M216.08 192v143.85a40.08 40.08 0 0 0 80.15 0l.13-188.55a67.94 67.94 0 1 0-135.87 0v189.82a95.51 95.51 0 1 0 191 0V159.74"
    />
  </Svg>
)
export default SvgComponent
