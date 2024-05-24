import React from 'react';
import { View, TouchableOpacity, StyleSheet, StatusBar  } from 'react-native';
import { getCurrentColorMode, lightColors, darkColors } from '../theme/colors';
interface HeaderProps {
  MiddleComponent?: JSX.Element;
  leftComponent?: JSX.Element; 
  rightComponent?: JSX.Element; 
}

const Header: React.FC<HeaderProps> = ({ MiddleComponent, leftComponent, rightComponent }) => {
  const colors = getCurrentColorMode();
  const headerColor = colors.background;
  StatusBar.setBackgroundColor(headerColor);

  return (
    <View style={[styles.container, { backgroundColor: headerColor }]}>
      {leftComponent && (
        <TouchableOpacity style={styles.button}>
          {leftComponent}
        </TouchableOpacity>
      )}
      {MiddleComponent}
      {rightComponent && (
        <TouchableOpacity style={styles.button}>
          {rightComponent}
        </TouchableOpacity>
      )}
      <View style={styles.bottomBorder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderBottomWidth: 0.1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
    elevation: 0,
  },
  button: {
    padding: 10,
  },
  bottomBorder: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
 
});

export default Header;

