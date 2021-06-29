import React from 'react';
import {
  ViewStyle,
  StyleProp,
  TextInput,
  KeyboardTypeOptions,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Config from '../../utils/Config';
import { moderateScale } from 'react-native-size-matters';
// import { getIcons } from '../../assets/icons';
// import { IconTypes } from '../../assets/Images';

interface Props {
  title?: string;
  value: string | undefined;
  //   leftIcon?: IconTypes;
  //   rightIcon?: IconTypes;
  editable?: boolean;
  placeholder: string;
  style?: StyleProp<ViewStyle>;
  onChangeText?: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  maxLength?: number;
  getInputRef?: (ref: TextInput | null) => void;
  onSubmitEditing?: () => void;
  onLeftPress?: () => void;
  onRightPress?: () => void;
  returnKeyType?: 'none' | 'done' | 'next';
  validationMessage?: string;
  multiline?: boolean;
  lines?: number | undefined;
  borderBottomWidth?: number;
  fontStyle?: any;
}

const TextFieldComp = ({
  title,
  //   leftIcon,
  //   rightIcon,
  value,
  placeholder,
  onChangeText,
  keyboardType,
  secureTextEntry = false,
  autoCapitalize,
  maxLength,
  style,
  editable = true,
  getInputRef,
  onSubmitEditing,
  returnKeyType,
  validationMessage,
  multiline,
  lines,
  onLeftPress,
  onRightPress,
  borderBottomWidth,
  fontStyle,
}: Props) => {
  return (
    <>
      <View
        style={[
          styles.mainContainer,
          {
            borderBottomWidth: borderBottomWidth === 0 ? borderBottomWidth : 1,
          },
        ]}>
        {title && <Text style={styles.questionsTitle}>{title}</Text>}
        <View style={styles.innerView}>
          <TextInput
            numberOfLines={Platform.OS === 'ios' ? undefined : lines}
            // @ts-ignore
            minHeight={lines && 20 * lines}
            value={value}
            maxLength={maxLength ? maxLength : 35}
            onChangeText={onChangeText}
            keyboardType={keyboardType}
            autoCapitalize={autoCapitalize}
            secureTextEntry={secureTextEntry}
            onSubmitEditing={onSubmitEditing}
            multiline={multiline}
            editable={editable}
            font={{}}
            style={[
              styles.textInputStyle,
              { borderBottomColor: validationMessage ? 'red' : 'lightgrey' },
              fontStyle && {
                fontWeight: fontStyle.bold ? 'bold' : 'normal',
                textDecorationLine: fontStyle.underline ? 'underline' : 'none',
                fontStyle: fontStyle.italic ? 'italic' : 'normal',
              },
              style,
            ]}
            returnKeyType={returnKeyType}
            placeholder={placeholder}
            ref={ref => {
              if (getInputRef) getInputRef(ref);
            }}
          />
        </View>
      </View>
      {validationMessage && (
        <Text style={styles.text}>{validationMessage}</Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: Config.colors.LIGHT_GREY,
  },
  innerView: {
    flexDirection: 'row',
  },
  questionsTitle: {
    fontSize: moderateScale(16),
    marginTop: moderateScale(20),
  },
  text: {
    marginTop: moderateScale(4),
    marginLeft: moderateScale(5),
    color: 'red',
    fontSize: moderateScale(11),
  },
  textInputStyle: {
    height: moderateScale(40),
    flex: 1,
    fontSize: moderateScale(16),
  },
  buttonsView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  touchable: {
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(5),
  },
});

export default TextFieldComp;
