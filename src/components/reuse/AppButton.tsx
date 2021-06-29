import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Config from '../../utils/Config';

interface IButtonProps {
  title: string;
  containerStyle?: ViewStyle;
  onPress?: () => void;
}

const AppButton = ({ title, containerStyle, onPress }: IButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.5}
      style={[containerStyle, styles.button]}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    //  backgroundColor: Config.colors.theme,
    alignSelf: 'flex-start',
    padding: moderateScale(15),
    borderRadius: moderateScale(4),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default AppButton;
