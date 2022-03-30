import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';

import { SafeAreaWrapper } from '../components/layout';
import { Button } from '../components/common/Button';
import { StackScreenProps } from '@react-navigation/stack';
import { StackParams } from '../navigation';

export const Otp = ({
  navigation,
  onLogin,
}: StackScreenProps<StackParams, 'Otp'>) => {
  const [code, setCode] = useState('');
  const handleLogin = () => onLogin();
  const goBack = () => navigation.goBack();
  return (
    <SafeAreaWrapper>
      <View style={styles.container}>
        <Text style={styles.text}>
          To confirm your phone number, please enter the OTP we sent to the
          number you just entered
        </Text>
        <View style={styles.innerContainer}>
          <OTPInputView
            style={styles.otpInput}
            pinCount={6}
            code={code}
            onCodeChanged={(val) => setCode(val)}
            autoFocusOnLoad
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
          />
        </View>
        <View>
          <Button text="Login" onPress={handleLogin} />
        </View>
        <View>
          <Button
            text="Back"
            onPress={goBack}
            backgroundColor="transparent"
            color="#696969"
          />
        </View>
      </View>
    </SafeAreaWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    marginTop: 50,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#696969',
    textAlign: 'center',
  },
  otpInput: {
    padding: 10,
    height: 100,
  },
  underlineStyleBase: {
    borderRadius: 8,
    width: 40,
    margin: 5,
    height: 45,
    borderWidth: 1,
    borderBottomWidth: 1,
    color: '#696969',
    fontWeight: 'bold',
    borderColor: '#696969',
    fontSize: 18,
  },
  underlineStyleHighLighted: {
    borderColor: 'black',
  },
});
