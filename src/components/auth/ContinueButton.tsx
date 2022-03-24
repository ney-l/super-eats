import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const ContinueButton = ({ onPress }: { onPress: () => void }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={buttonStyles.container}>
        <View style={buttonStyles.innerContainer}>
          <Text style={buttonStyles.text}>Continue</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const buttonStyles = StyleSheet.create({
  container: {
    backgroundColor: '#DD5B63',
    height: 60,
    marginVertical: 20,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 8,
    marginHorizontal: 10,
  },
  innerContainer: {
    width: '100%',
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
});
