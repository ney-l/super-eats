import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export function HeaderTabs({
  activeTab,
  onTabChange,
}: {
  activeTab: string;
  onTabChange: (tab: string) => void;
}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignSelf: 'center',
      }}
    >
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
}) => (
  <TouchableOpacity
    style={{
      backgroundColor: activeTab === text ? 'black' : 'white',
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
    }}
    onPress={() => onTabPress(text)}
  >
    <Text
      style={{
        color: activeTab === text ? 'white' : 'black',
        fontSize: 15,
        fontWeight: '900',
      }}
    >
      {text}
    </Text>
  </TouchableOpacity>
);
