import React from 'react';
import { Svg, Path } from 'react-native-svg';

interface SendIconProps {
  width?: number;
  height?: number;
  color?: string;
  strokeColor?: string; 
  strokeWidth?: number; 
  onPress?: () => void; // Add onPress prop

}

const SendIcon: React.FC<SendIconProps> = ({
  width = 24,
  height = 24,
  color = 'black',
  strokeColor = 'none', 
  strokeWidth = 0,
}) => (
  <Svg width={width} height={height}     viewBox="0 0 512 512" >
    <Path
      fill={color}
      stroke={strokeColor} 
      strokeWidth={strokeWidth}
      d="M470.3 271.15 43.16 447.31a7.83 7.83 0 0 1-11.16-7V327a8 8 0 0 1 6.51-7.86l247.62-47c17.36-3.29 17.36-28.15 0-31.44l-247.63-47a8 8 0 0 1-6.5-7.85V72.59c0-5.74 5.88-10.26 11.16-8L470.3 241.76a16 16 0 0 1 0 29.39z"
    />
  </Svg>
);

export default SendIcon;
