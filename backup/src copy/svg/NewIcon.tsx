import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const NewIcon = (props: SvgProps) => (
  <Svg
    viewBox="0 0 512 512"
    {...props}
  >
    <Path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      d="M256 112v288m144-144H112"
    />
  </Svg>
)
export default NewIcon
