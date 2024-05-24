import { useColorScheme } from 'react-native';

export interface Colors {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  secondaryText: string;
}

export const lightColors: Colors = {
  primary: '#007bff',
  secondary: '#ffc107',
  background: '#fff',
  text: '#333',
  secondaryText: '#A19FA5'
};

export const darkColors: Colors = {
  primary: '#5C5470',
  secondary: '#352F44',
  background: '#191919',
  text: '#ffffffcf',
  secondaryText: '#9b9b9b'
};

export function getCurrentColorMode(): Colors {
  const colorScheme = useColorScheme();
  return colorScheme === 'dark' ? darkColors : lightColors;
}

export default { getCurrentColorMode, lightColors, darkColors };
