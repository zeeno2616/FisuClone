import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
interface ScreenProps {}

const TemplateScreen: React.FC<ScreenProps> = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <MaterialCommunityIcons
          name={'arrow-left'}
          size={24}
          color={'#555555'}
          onPress={handleGoBack}
        />
      </View>
      <Text style={styles.text}>Page Under Construction</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navbar: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default TemplateScreen;
