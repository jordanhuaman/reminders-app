import { colorScheme } from 'nativewind';
import React, { useState } from 'react'
import { Pressable, Text, View } from 'react-native';

const DarkMode = () => {
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("light");
  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setCurrentTheme(newTheme);
    colorScheme.set(newTheme);
  };

  return (
    <View>
      <Pressable
        onPress={toggleTheme}
        className="mt-4"
      >
        <Text className={currentTheme === 'dark' ? 'text-gray-100' : 'text-gray-900'} style={{ fontSize: 16, fontWeight: 'bold' }}>
          {currentTheme === 'dark' ? 'Dark' : 'Light'}
        </Text>
      </Pressable>
    </View>
  )
}

export default DarkMode