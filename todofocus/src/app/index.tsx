import { fetchUserDetail } from '@/api/auth/profile';
import Navbard from '@/components/globals/header';
import Home from '@/components/home';
import { StyleSheet, View } from "react-native";
import "../../global.css";


export default function Index() {
  return (
    <View className='h-screen'>
      <Navbard />
      <Home/>
    </View>
  );
}