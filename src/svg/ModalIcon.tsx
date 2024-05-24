import React from 'react';
import Svg, {
  Path,
  SvgProps,
  Defs,
  RadialGradient,
  Stop,
} from 'react-native-svg';

interface AvatarProps {
  width?: number;
  height?: number;
  color?: string;
  strokeColor?: string;
  strokeWidth?: number;
}

const Avatar: React.FC<AvatarProps> = ({
  width = 24,
  height = 24,
}) => (
  <Svg width={width} height={height}>
    <Path
      fill="url(#a)"
      d="M14 28c0-1.937-.373-3.757-1.12-5.46a13.898 13.898 0 0 0-2.975-4.445A13.897 13.897 0 0 0 5.46 15.12C3.757 14.373 1.937 14 0 14c1.937 0 3.757-.362 5.46-1.085 1.703-.747 3.185-1.75 4.445-3.01A13.897 13.897 0 0 0 12.88 5.46C13.627 3.757 14 1.937 14 0c0 1.937.362 3.757 1.085 5.46.747 1.703 1.75 3.185 3.01 4.445 1.26 1.26 2.742 2.263 4.445 3.01C24.243 13.638 26.063 14 28 14c-1.937 0-3.757.373-5.46 1.12a13.898 13.898 0 0 0-4.445 2.975c-1.26 1.26-2.263 2.742-3.01 4.445C14.362 24.243 14 26.063 14 28Z"
    />
    <Defs>
      <RadialGradient
        id="a"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(18.683 -33.198 14.136) scale(29.8025 238.737)"
        gradientUnits="userSpaceOnUse">
        <Stop offset={0.067} stopColor="#9168C0" />
        <Stop offset={0.343} stopColor="#5684D1" />
        <Stop offset={0.672} stopColor="#1BA1E3" />
      </RadialGradient>
    </Defs>
  </Svg>
);

export default Avatar;
