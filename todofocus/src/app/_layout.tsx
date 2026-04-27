import DrawerHome from '@/components/drawer.home';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
  return (
    <GestureHandlerRootView className='flex-1'>
      <StatusBar barStyle={"light-content"} />
      {/* <NativeBardHome/> */}
      <DrawerHome />
    </GestureHandlerRootView>
  )

}
