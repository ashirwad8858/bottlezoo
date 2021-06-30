import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome';
import BackIcon from 'react-native-vector-icons/Ionicons';
import Config from '../../utils/Config';

interface IHeaderProps {
  home?: boolean;
  navigate?: () => void;
  navigateBack?: () => void;
}

const Header = ({ home, navigate, navigateBack }: IHeaderProps) => {
  return (
    <View style={styles.headerContainer}>
      {!home && (
        <TouchableOpacity
          activeOpacity={0.4}
          style={styles.iconContainerLeft}
          onPress={navigateBack}>
          <BackIcon name="arrow-back" size={30} color={Config.colors.BLACK} />
        </TouchableOpacity>
      )}

      {home && (
        <View style={styles.header}>
          <Image
            source={require('../../assets/header-logo.jpeg')}
            style={styles.image}
          />
        </View>
      )}

      {home && (
        <TouchableOpacity
          activeOpacity={0.4}
          style={styles.iconContainer}
          onPress={navigate}>
          <Icon name="user-circle" size={30} color={Config.colors.theme} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: moderateScale(40),
  },
  header: {
    padding: moderateScale(10),
    paddingTop: 0,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.12)',
  },
  image: {
    height: moderateScale(40),
    width: moderateScale(40),
    resizeMode: 'contain',
    marginTop: moderateScale(-10),
  },
  iconContainer: {
    position: 'absolute',
    right: moderateScale(15),
  },
  iconContainerLeft: {
    position: 'absolute',
    left: moderateScale(15),
  },
});

export default Header;
