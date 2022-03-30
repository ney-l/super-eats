import { Image, TouchableOpacity, View, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const RestaurantImage = ({
  imageUrl,
  onFavoritePress,
  isFavorite,
}: {
  imageUrl: string;
  onFavoritePress: () => void;
  isFavorite: boolean;
}) => {
  return (
    <>
      <Image
        source={{
          uri: imageUrl,
        }}
        style={styles.image}
      />
      <TouchableOpacity style={styles.heartIcon} onPress={onFavoritePress}>
        <View style={styles.iconBg}>
          <MaterialCommunityIcons
            name={isFavorite ? 'heart' : 'heart-outline'}
            color={isFavorite ? 'tomato' : '#fff'}
            size={25}
          />
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 220,
  },
  heartIcon: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
  iconBg: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 5,
    borderRadius: 100,
  },
});
