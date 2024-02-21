import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

interface Props {
  text: string;
  image?: string; // Make image prop optional
}

const RectangularButton: React.FC<Props> = ({
  image = require('../images/test.png'),
  text = 'Rectangular Button',
}) => {
  return (
    <TouchableOpacity style={styles.button}>
      <View style={styles.topLeft}>
        <Text style={styles.text}>{text}</Text>
      </View>
      {image && (
        <View style={styles.bottomRight}>
          <Image source={image} style={styles.image} />
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 190,
    height: 100,
    backgroundColor: '#7a7afa',
    borderRadius: 10,
    margin: 5,
  },
  topLeft: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  text: {
    fontSize: 16,
    color: 'white',
  },
  bottomRight: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  image: {
    width: 75,
    height: 75,
  },
});

export default RectangularButton;
