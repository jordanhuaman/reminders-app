import { fetchUserDetail } from '@/api/auth/profile';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { Image } from 'expo-image';
import { Text, View } from 'react-native';

export const Menu = (props: DrawerContentComponentProps) => {
  const { img, profileName } = fetchUserDetail()

  return (
    <View className='flex-1 bg-appbgsecundary px-10'>
      <View>
        <View className='max-w-[60px] min-h-[60px]  rounded-full'>
          <Image
            source={{ uri: 'https://www.vecteezy.com/free-png/avatar' }}
            style={{ width: 60, height: 60, borderRadius: 30 }}
          />
        </View>
        <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold', marginTop: 12 }}>
          {profileName}
        </Text>
      </View>
      <View>
        <View>
          <Feather name="home" size={24} color="white" />
          <Text>Home</Text>
        </View>
        <View>
          <Ionicons name="settings-outline" size={24} color="white" />
          <Text>Setting</Text>
        </View>
      </View>
      <View></View>
    </View>
  );
}