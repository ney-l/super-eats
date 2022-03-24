import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useRef, useState } from 'react';
import PhoneInput from 'react-native-phone-number-input';
import { Consent } from './Consent';
import { ContinueButton } from './ContinueButton';

export const Auth = () => {
  const [phone, setPhone] = useState('');
  const [formattedPhone, setFormattedPhone] = useState('');
  const phoneInput = useRef<PhoneInput>(null);

  const handlePress = () => console.log({ formattedPhone });

  return (
    <View style={styles.container}>
      <Image
        style={styles.cover}
        source={require('../../../assets/images/bg3.jpg')}
        resizeMode="contain"
      />
      <View style={styles.innerContainer}>
        <Text style={styles.title}>
          World's #1 Food Delivery and Dining App
        </Text>
        <Text style={styles.label}>Log in or sign up</Text>
        <View style={styles.inputContainer}>
          <PhoneInput
            ref={phoneInput}
            placeholder="Enter phone number"
            value={phone}
            onChangeFormattedText={(text) => {
              setFormattedPhone(text);
            }}
            onChangeText={(phone) => {
              setPhone(phone);
            }}
          />
        </View>
        <ContinueButton onPress={handlePress} />
        <Consent />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    paddingHorizontal: 20,
    marginHorizontal: 10,
    marginVertical: 20,
    alignItems: 'center',
  },
  cover: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingBottom: 20,
    textAlign: 'center',
  },

  label: {
    fontSize: 20,
    color: '#696969',
    fontWeight: 'bold',
    marginTop: 10,
  },
  inputContainer: {
    marginTop: 20,
  },
});
