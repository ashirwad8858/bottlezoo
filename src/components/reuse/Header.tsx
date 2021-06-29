import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        source={require('../../assets/header-logo.jpeg')}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: moderateScale(10),
    paddingTop: 0,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.12)',
    alignItems: 'center',
  },
  image: {
    height: moderateScale(40),
    width: moderateScale(40),
    resizeMode: 'contain',
    marginTop: moderateScale(-10),
  },
});

export default Header;
