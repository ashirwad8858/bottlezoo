import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Config from '../../utils/Config';
import { windowWidth } from '../../utils/Dimensions';

interface IItemProps {
  heading: string;
  subHeading: string;
}

const ItemDescriptionCard = ({ heading, subHeading }: IItemProps) => {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.5}>
      <Text style={styles.heading}>{heading}</Text>
      <Image
        source={require('../../assets/wine-image.png')}
        style={styles.image}
      />
      <Text style={styles.subHeading}>{subHeading}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    //flex: 1,
    marginVertical: moderateScale(10),
    marginHorizontal: moderateScale(10),
    borderRadius: moderateScale(5),
    backgroundColor: Config.colors.WHITE,
    padding: moderateScale(10),
    width: moderateScale(160),
    // shadow settings
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: '100%',

    height: moderateScale(100),
    resizeMode: 'contain',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: moderateScale(12),
    textAlign: 'center',
  },
  subHeading: {
    fontWeight: 'bold',
    fontSize: moderateScale(10),
    textAlign: 'center',
  },
});

export default ItemDescriptionCard;
