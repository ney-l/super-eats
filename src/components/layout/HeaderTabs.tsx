import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export function HeaderTabs({
  activeTab,
  onTabChange,
}: {
  activeTab: string;
  onTabChange: (tab: string) => void;
}) {
  return (
    <View style={styles.container}>
      <HeaderButton
        text="Delivery"
        activeTab={activeTab}
        onTabPress={onTabChange}
      />
      <HeaderButton
        text="Pickup"
        activeTab={activeTab}
        onTabPress={onTabChange}
      />
    </View>
  );
}

const HeaderButton = ({
  text,
  activeTab,
  onTabPress,
}: {
  text: string;
  activeTab: string;
  onTabPress: (tab: string) => void;
}) => {
  const isActive = activeTab.toLowerCase() === text.toLowerCase();

  const buttonStyles = [styles.tab, isActive ? styles.darkBg : styles.lightBg];

  const textStyles = [
    styles.title,
    isActive ? styles.lightText : styles.darkText,
  ];
  return (
    <TouchableOpacity style={buttonStyles} onPress={() => onTabPress(text)}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  lightBg: {
    backgroundColor: 'white',
  },
  darkBg: {
    backgroundColor: 'black',
  },
  lightText: {
    color: 'white',
  },
  darkText: {
    color: 'black',
  },
  tab: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 30,
  },
  title: {
    fontSize: 15,
    fontWeight: '900',
  },
});
