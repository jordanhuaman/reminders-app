import { StyleSheet, Text, View } from "react-native";
import "../../global.css";


export default function Index() {
  return (
      <View className='bg-slate-600 h-screen'>
        <Text className='text-white'>Edit src/app/index.tsx to edit this screen.</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
