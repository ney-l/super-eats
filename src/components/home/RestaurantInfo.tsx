import { Text, View, StyleSheet } from 'react-native';

export const RestaurantInfo = ({
  name,
  rating,
}: {
  name: string;
  rating: number;
}) => (
  <View style={styles.infoContainer}>
    <View>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.time}>30-45 • min</Text>
    </View>
    <View style={styles.rating}>
      <Text>{rating} ⭐️</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  time: {
    fontSize: 13,
    color: 'gray',
  },
  rating: {
    backgroundColor: 'white',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    paddingHorizontal: 10,
  },
});
