import React from 'react';
import { Text, View } from 'react-native';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { moderateScale } from 'react-native-size-matters';
import Config from '../../utils/Config';

interface IInputProps {
  label: string;
  onChangeText: () => void;
  isPassword?: boolean;
}

const FloatingTextInput = ({
  label,
  onChangeText,
  isPassword = false,
}: IInputProps) => {
  return (
    <FloatingLabelInput
      label={label}
      value={''}
      onChangeText={onChangeText}
      containerStyles={{
        borderBottomWidth: 1,
        paddingTop: moderateScale(20),
        marginHorizontal: moderateScale(25),
        borderBottomColor: Config.colors.theme,
        marginTop: moderateScale(20),
      }}
      isPassword={isPassword}
    />
  );
};

export default FloatingTextInput;
