import AntDesign from '@expo/vector-icons/AntDesign';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import React from 'react';
import { Pressable, View } from 'react-native';
const Navbard = () => {

  const navigation = useNavigation();

  return (
    <View className='flex-row justify-between rounded-lg bg-white p-5 items-center'>
      <Pressable onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        <AntDesign name="menu" size={20} color="black" />
      </Pressable>
      <View className='flex-row'>
        <EvilIcons name="search" size={35} color="black" />
        <EvilIcons name="bell" size={35} color="black" />
      </View>
    </View>
  )
}

export default Navbard