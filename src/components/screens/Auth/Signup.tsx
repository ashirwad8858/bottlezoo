// Sign up Screen for the application
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Config from '../../../utils/Config';
import { windowWidth } from '../../../utils/Dimensions';
import AppButton from '../../reuse/AppButton';
import Container from '../../reuse/Container';
import FloatingTextInput from '../../reuse/FloatingTextInput';
import CheckBox from '@react-native-community/checkbox';
import Header from '../../reuse/Header';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthParamList } from '../../../models/navigation-params';
import { useNavigation } from '@react-navigation/native';
const Signup = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  type NavigationProp = StackNavigationProp<AuthParamList, 'Signup'>;
  const navigation = useNavigation<NavigationProp>();

  const navigateBack = () => {
    navigation.goBack();
  };

  const navigateToSignin = () => {
    navigation.navigate('Signin');
  };

  return (
    <Container>
      <Header navigateBack={navigateBack} />
      <View style={styles.container}>
        <View style={styles.iconBackground}>
          <Icon name="lock-outline" size={30} color={Config.colors.WHITE} />
        </View>
        <Text style={styles.headerText}>Sign up</Text>
        {/* Form Section */}
        <>
          <FloatingTextInput label="Name" onChangeText={() => console.log()} />
          <FloatingTextInput
            label="Email Address *"
            onChangeText={() => console.log()}
          />
          <FloatingTextInput
            label="Password"
            onChangeText={() => console.log()}
            isPassword={true}
          />
          {/* Checkbox Component */}
          <View style={styles.checkboxView}>
            <CheckBox
              boxType={'square'}
              disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />
            <Text style={styles.textStyle}>{Config.constants.agree}</Text>
          </View>
          {/* Button Section */}
          <View style={styles.buttonContainer}>
            <AppButton
              title={Config.constants.signUp}
              containerStyle={styles.button}
            />
          </View>

          <TouchableOpacity activeOpacity={0.5} onPress={navigateToSignin}>
            <Text style={styles.link}>
              {Config.constants.alreadyHaveAccount}
            </Text>
          </TouchableOpacity>
        </>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  iconBackground: {
    backgroundColor: 'red',
    padding: moderateScale(10),
    borderRadius: moderateScale(30),
  },
  headerText: {
    fontSize: moderateScale(20),
    marginTop: moderateScale(10),
  },
  button: {
    backgroundColor: Config.colors.cyan,
    width: windowWidth - 50,
  },
  buttonContainer: {
    alignSelf: 'center',
    marginVertical: moderateScale(40),
  },
  checkboxView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: moderateScale(40),
  },
  textStyle: {
    fontSize: moderateScale(14),
    marginLeft: moderateScale(10),
  },
  link: {
    color: Config.colors.theme,
    fontSize: moderateScale(14),
  },
});

export default Signup;
