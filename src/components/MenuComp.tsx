import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ViewStyle, Animated } from 'react-native';

interface MenuProps {
  onClose: () => void;
  isOpen: boolean; // Add isOpen prop to determine if menu is open or closed
}

const MenuComponent: React.FC<MenuProps> = ({ onClose, isOpen }) => {
  const menuPosition = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.spring(menuPosition, {
      toValue: isOpen ? 0 : -280, // Adjust width as needed
      useNativeDriver: false,
    }).start();
  }, [isOpen]);

  return (
    <Animated.View style={[styles.container, { transform: [{ translateX: menuPosition }] }]}>
      <TouchableOpacity onPress={onClose}>
        <Text>Menu Item 1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onClose}>
        <Text>Menu Item 2</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onClose}>
        <Text>Menu Item 3</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    width: 280, // Adjust width as needed
    height: '100%',
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 10,
  },
});

export default MenuComponent;
