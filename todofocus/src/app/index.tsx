import Navbard from '@/components/navbar';
import { useNavigation } from 'expo-router';
import { StyleSheet, Text, useColorScheme, View } from "react-native";
import "../../global.css";


export default function Index() {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();


  return (
    <View className='h-screen px-6 py-6'>
      <Navbard />

      <Text className='mt-5'>
        Hello world
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  lightThemeText: {
    color: 'black'
  },
  darkThemeText: {
    color: 'white'
  }
});
