import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const Button = ({
  onPress,
  text,
  backgroundColor,
  color,
}: {
  onPress: () => void;
  text: string;
  backgroundColor?: string;
  color?: string;
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          buttonStyles.container,
          backgroundColor ? { backgroundColor } : {},
        ]}
      >
        <View style={buttonStyles.innerContainer}>
          <Text style={[buttonStyles.text, color ? { color } : {}]}>
            {text}
          </Text>
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
