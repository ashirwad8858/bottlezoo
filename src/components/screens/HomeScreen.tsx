import React from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Config from '../../utils/Config';
import { windowWidth } from '../../utils/Dimensions';
import AppButton from '../reuse/AppButton';
import Container from '../reuse/Container';
import Header from '../reuse/Header';
import ItemDescriptionCard from '../reuse/ItemDescriptionCard';
import TextFieldComp from '../reuse/TextFieldComp';
import Icon from 'react-native-vector-icons/Zocial';

// Home Screen for the App
const HomeScreen = () => {
  return (
    <Container>
      <Header />
      <ScrollView>
        <ImageBackground
          source={require('../../assets/home-bg.jpeg')}
          style={styles.image}>
          <Text style={styles.header}>{Config.constants.getFreeDelivery}</Text>
          <Text style={styles.subHeader}>{Config.constants.bottleZoo}</Text>
          <TextFieldComp
            placeholder={'Enter Zipcode to find nearby stores'}
            style={styles.textField}
            borderBottomWidth={0}
            value=""
          />
        </ImageBackground>
        <View style={styles.cardsContainer}>
          <ItemDescriptionCard
            heading="Charlies Liquor Store"
            subHeading="Charlies liquor store, 11 Forest St, Wellesley, Massachusetts, USA, 02481"
          />
          <ItemDescriptionCard
            heading="Charlies Liquor Store"
            subHeading="Charlies liquor store, 11 Forest St, Wellesley, Massachusetts, USA, 02481"
          />
          <ItemDescriptionCard
            heading="Charlies Liquor Store"
            subHeading="Charlies liquor store, 11 Forest St, Wellesley, Massachusetts, USA, 02481"
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textHeading}>{Config.constants.liquorStore}</Text>
          <Text style={styles.textSubHeading}>
            {Config.constants.sendCustomers}
          </Text>
          <Text style={styles.para}>{Config.constants.joinNetwork}</Text>
          <View style={styles.buttonContainer}>
            <AppButton
              title={Config.constants.moreInfo}
              containerStyle={{ backgroundColor: Config.colors.theme }}
            />
          </View>
        </View>
        <View style={styles.aboutSectionContainer}>
          <View>
            <Text style={styles.aboutHeader}>Charlies Liquor Store</Text>
            <TouchableOpacity activeOpacity={0.5}>
              <Text style={styles.link}>{Config.constants.terms}</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
              <Text style={styles.link}>{Config.constants.privacy}</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
              <Text style={styles.link}>{Config.constants.contact}</Text>
            </TouchableOpacity>
            <Text style={styles.aboutHeader}>{Config.constants.follow}</Text>
            <TouchableOpacity activeOpacity={0.5}>
              <Icon name="facebook" size={25} color={Config.colors.WHITE} />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.aboutHeader}>{Config.constants.support}</Text>
            <TouchableOpacity activeOpacity={0.5}>
              <Text style={styles.link}>{Config.constants.chat}</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
              <Text style={styles.link}>{Config.constants.email}</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
              <Text style={styles.link}>{Config.constants.faq}</Text>
            </TouchableOpacity>
            <Text style={styles.aboutHeader}>{Config.constants.weAccept}</Text>
            <View style={styles.paymentContainer}>
              <TouchableOpacity activeOpacity={0.5}>
                <Image
                  source={require('../../assets/americanExpress.png')}
                  style={styles.cardImg}
                />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5}>
                <Image
                  source={require('../../assets/discover.png')}
                  style={styles.cardImg}
                />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5}>
                <Image
                  source={require('../../assets/masterCard.png')}
                  style={styles.cardImg}
                />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5}>
                <Image
                  source={require('../../assets/visa.png')}
                  style={styles.cardImg}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  image: {
    width: windowWidth,
    height: moderateScale(250),
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    width: windowWidth,
    height: moderateScale(250),
    backgroundColor: 'black',
    opacity: 0.7,
  },
  header: {
    color: Config.colors.WHITE,
    fontWeight: 'bold',
    fontSize: moderateScale(30),
  },
  subHeader: {
    color: Config.colors.WHITE,
    fontWeight: 'bold',
    fontSize: moderateScale(12),
  },
  textField: {
    backgroundColor: Config.colors.WHITE,
    margin: moderateScale(10),
    marginHorizontal: moderateScale(25),
    borderRadius: moderateScale(5),
    padding: moderateScale(10),
    color: Config.colors.BLACK,
  },
  cardsContainer: {
    marginTop: moderateScale(20),
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  textHeading: {
    color: Config.colors.theme,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: moderateScale(24),
  },
  textSubHeading: {
    color: Config.colors.theme,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: moderateScale(14),
  },
  para: {
    textAlign: 'center',
    fontSize: moderateScale(14),
    marginTop: moderateScale(15),
    paddingHorizontal: moderateScale(20),
  },
  textContainer: {
    marginTop: moderateScale(20),
  },
  buttonContainer: {
    alignSelf: 'center',
    marginTop: moderateScale(20),
  },
  aboutSectionContainer: {
    marginTop: moderateScale(20),
    backgroundColor: Config.colors.theme,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: moderateScale(20),
  },
  aboutHeader: {
    color: 'white',
    fontSize: moderateScale(16),
    marginVertical: moderateScale(10),
    fontWeight: 'bold',
  },
  link: {
    color: Config.colors.WHITE,
    paddingVertical: moderateScale(5),
  },
  paymentContainer: {
    flexDirection: 'row',
    width: moderateScale(100),
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  cardImg: {
    height: moderateScale(40),
    width: moderateScale(40),
    resizeMode: 'contain',
  },
});

export default HomeScreen;
