import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { Auth } from '../components/auth';
import { StackParams } from '../navigation';

export const Login = ({
  navigation,
}: StackScreenProps<StackParams, 'Login'>) => {
  const [step, setStep] = useState('enter-phone');

  const goToOtpScreen = () => navigation.navigate('Otp');

  return <Auth goToOtpScreen={goToOtpScreen} />;
};
