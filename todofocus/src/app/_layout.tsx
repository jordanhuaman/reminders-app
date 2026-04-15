import { NativeTabs } from 'expo-router/unstable-native-tabs';
import { StatusBar } from 'react-native';
export default function RootLayout() {

  return (
    <>
    <StatusBar barStyle={"light-content"}/>
      <NativeTabs>
        <NativeTabs.Trigger name="index">
          <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon sf="house.fill" md="home" />
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="setting">
          <NativeTabs.Trigger.Icon sf="gear" md="settings" />
          <NativeTabs.Trigger.Label>Settings</NativeTabs.Trigger.Label>
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="login">
          <NativeTabs.Trigger.Icon sf="gear" md="login" />
          <NativeTabs.Trigger.Label>Logn</NativeTabs.Trigger.Label>
        </NativeTabs.Trigger>
      </NativeTabs>
    </>
  )

}
