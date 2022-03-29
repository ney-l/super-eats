import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const ContinueButton = ({
  onPress,
  text = 'Continue',
  disabled = false,
}: {
  onPress: () => void;
  text?: string;
  disabled?: boolean;
}) => {
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress}>
      <View style={[styles.container, disabled ? styles.disabled : {}]}>
        <View style={styles.innerContainer}>
          <Text style={styles.text}>{text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
  disabled: {
    backgroundColor: '#dd5b638f',
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
