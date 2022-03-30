import { View, StyleSheet } from 'react-native';
import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { StackParams } from '../navigation';
import { SafeAreaWrapper } from '../components/layout';
import { Header, Menu, QuickMenu } from '../components/account';

export const Account = ({
  navigation,
  onLogout,
}: StackScreenProps<StackParams, 'Account'> & { onLogout: () => void }) => {
  return (
    <SafeAreaWrapper>
      <View style={styles.container}>
        <Header />
        <QuickMenu />
        <Menu onLogout={onLogout} />
      </View>
    </SafeAreaWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
