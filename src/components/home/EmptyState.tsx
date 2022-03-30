import { View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

export const RestaurantsEmptyState = ({
  isShow,
  text,
}: {
  isShow: boolean;
  text: string;
}) => {
  if (!isShow) {
    return null;
  }

  return (
    <View style={styles.container}>
      <LottieView
        style={styles.icon}
        source={require('../../../assets/animations/not-found.json')}
        autoPlay
        speed={1}
      />

      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 1, height: 200, flex: 1 },
  icon: { position: 'relative' },
  text: { textAlign: 'center', fontWeight: 'bold' },
});
