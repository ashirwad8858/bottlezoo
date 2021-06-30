// Forgot Password Screen for the application
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AuthParamList } from '../../../models/navigation-params';
import Config from '../../../utils/Config';
import { windowWidth } from '../../../utils/Dimensions';
import AppButton from '../../reuse/AppButton';
import Container from '../../reuse/Container';
import FloatingTextInput from '../../reuse/FloatingTextInput';
import Header from '../../reuse/Header';

const ForgotPassword = () => {
  type NavigationProp = StackNavigationProp<AuthParamList, 'ForgotPassword'>;
  const navigation = useNavigation<NavigationProp>();

  const navigateBack = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <Header navigateBack={navigateBack} />
      <View style={styles.container}>
        <View style={styles.iconBackground}>
          <Icon name="lock-outline" size={30} color={Config.colors.WHITE} />
        </View>
        <Text style={styles.headerText}>Forgot Password</Text>
        {/* Form Section */}
        <>
          <FloatingTextInput
            label="Email Address *"
            onChangeText={() => console.log()}
          />

          {/* Button Section */}
          <View style={styles.buttonContainer}>
            <AppButton
              title={Config.constants.sendPassword}
              containerStyle={styles.button}
            />
          </View>
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
    marginTop: moderateScale(10),
  },
  textContainer: {
    alignItems: 'center',
  },
});

export default ForgotPassword;
