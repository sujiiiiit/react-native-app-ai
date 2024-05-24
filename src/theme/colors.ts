import { useColorScheme } from 'react-native';

export interface Colors {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  secondaryText: string;
  borderColor:string;
  modalbackground:string;
  placeholderText:string;
  navbackground:string;

}

export const lightColors: Colors = {
  primary: '#007bff',
  secondary: '#4F6F52',
  background: '#D2E3C8',
  text: '#000',
  secondaryText: '#352F44',
  borderColor:'#000',
  modalbackground:'#000000',
  placeholderText:'#352F4480',
  navbackground:'#d6e5cc',
};

export const darkColors: Colors = {
  primary: '#9b9b9b',
  secondary: '#9b9b9b',
  background: '#191919',
  text: '#ffffffcf',
  secondaryText: '#DBD8E3',
  borderColor:'#FFFFFF1A',
  modalbackground:'#000000',
  placeholderText:'#aaaaaaaa',
  navbackground:'#9b9b9b',
};

export function getCurrentColorMode(): Colors {
  const colorScheme = useColorScheme();
  return colorScheme === 'dark' ? darkColors : lightColors;
}

export default { getCurrentColorMode, lightColors, darkColors };
