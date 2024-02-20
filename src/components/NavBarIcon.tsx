import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface NavBarIconProps {
  name: string;
  color: string;
  size: number;
}

const NavBarIcon: React.FC<NavBarIconProps> = ({name, color, size}) => {
  return <MaterialCommunityIcons name={name} color={color} size={size} />;
};

export default NavBarIcon;