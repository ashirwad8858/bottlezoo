import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { moderateScale } from 'react-native-size-matters';
import Config from '../../utils/Config';
import { windowHeight } from '../../utils/Dimensions';
import AppButton from '../reuse/AppButton';
import Container from '../reuse/Container';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthParamList } from '../../models/navigation-params';

const ConsentScreen = () => {
  type NavigationProp = StackNavigationProp<AuthParamList, 'ConsentScreen'>;
  const navigation = useNavigation<NavigationProp>();
  return (
    <Container backgroundColor={Config.colors.theme}>
      <View style={styles.container}>
        <Image
          source={require('../../assets/consentImage.png')}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.headerText}>{Config.constants.consentText}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <AppButton
            onPress={() => navigation.navigate('HomeScreen')}
            title={'Accept'}
            containerStyle={{
              backgroundColor: 'green',
              width: moderateScale(200),
            }}
          />
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: windowHeight - moderateScale(150),
  },
  image: {
    height: moderateScale(250),
    width: moderateScale(200),
    resizeMode: 'contain',
  },
  textContainer: {
    marginTop: moderateScale(20),
  },
  headerText: {
    textAlign: 'center',
    color: 'white',
    padding: moderateScale(18),
    fontWeight: 'bold',
    fontSize: moderateScale(20),
  },
  subHeaderText: {
    textAlign: 'center',
    color: 'white',

    fontWeight: 'bold',
    fontSize: moderateScale(14),
  },
  buttonContainer: {
    alignSelf: 'center',
  },
});

export default ConsentScreen;
