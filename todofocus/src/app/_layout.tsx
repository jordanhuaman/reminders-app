import "@/../global.css";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";

import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ClerkProvider } from "@clerk/expo";
import { tokenCache } from "@clerk/expo/token-cache";


export default function TabLayout() {

  const [loaded, error] = useFonts({
    'Inter-Black': require('@/assets/fonts/OpenSans-Italic.ttf'),
    'Inter-VariableFont': require('@/assets/fonts/OpenSans-VariableFont.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!
  if (!publishableKey) {
    throw new Error('Add your Clerk Publishable Key to the .env file')
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
        <Stack
          screenOptions={{ headerShown: false }}
        />
      </ClerkProvider>
    </SafeAreaView>
  );
}
