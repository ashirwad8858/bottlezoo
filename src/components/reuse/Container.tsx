import React, { ReactNode } from 'react';
import { View, SafeAreaView, StatusBar, StyleSheet } from 'react-native';

interface IContainerProps {
  children: ReactNode;
  backgroundColor?: any;
}

const Container = ({ children, backgroundColor }: IContainerProps) => {
  return (
    <SafeAreaView
      style={[
        { backgroundColor: backgroundColor ? backgroundColor : 'white' },
        styles.container,
      ]}>
      <View style={styles.statusBar}>
        <StatusBar
          translucent
          backgroundColor={'transparent'}
          barStyle="dark-content"
        />
      </View>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    backgroundColor: 'white',
  },
});

export default Container;
