import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const DATA = [
  {
    icon: 'isv',
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Send Feedback',
  },
  {
    icon: 'hearto',
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Report a Safety Emergency',
  },
  {
    icon: 'message1',
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Rate us on the App Store',
  },
  {
    icon: 'logout',
    id: '58694a0f-3da1-471f-bd96-145571e29d7eerwer2',
    title: 'Logout',
  },
];

interface IItem {
  title: string;
  icon: string;
}

const Item = ({ item, onLogout }: { item: IItem; onLogout: () => void }) => (
  <TouchableOpacity
    onPress={item.title === 'Logout' ? onLogout : () => undefined}
  >
    <View style={styles.item}>
      <View style={styles.iconWrapper}>
        <AntDesign name={item.icon} size={12} style={styles.icon} />
      </View>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  </TouchableOpacity>
);

interface ISecondaryItem {
  title: string;
}

const SecondaryItem = ({ item }: { item: ISecondaryItem }) => (
  <TouchableOpacity>
    <View style={styles.secondaryItem}>
      <Text style={styles.secondaryItemText}>{item.title}</Text>
    </View>
  </TouchableOpacity>
);

export const Menu = ({ onLogout }: { onLogout: () => void }) => {
  const renderItem = ({ item }: { item: IItem }) => (
    <Item item={item} onLogout={onLogout} />
  );

  const renderSecondaryMenu = ({ item }: { item: ISecondaryItem }) => (
    <SecondaryItem item={item} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.divider}></View>
      <FlatList
        data={DATA}
        renderItem={renderSecondaryMenu}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: 10,
  },
  item: {
    backgroundColor: 'white',
    paddingVertical: 20,
    marginHorizontal: 16,

    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 12,
    paddingLeft: 10,
  },
  iconWrapper: {
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 100,
  },
  icon: {
    color: '#8A8A8A',
  },
  divider: {
    height: 20,
  },
  secondaryItem: {
    backgroundColor: 'white',
    paddingVertical: 10,
    marginHorizontal: 16,
  },
  secondaryItemText: {
    color: 'black',
    fontSize: 12,
  },
});
