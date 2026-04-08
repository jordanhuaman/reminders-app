import { Show, useClerk, useUser } from '@clerk/expo'
import { Image } from 'expo-image'
import { Link } from 'expo-router'
import { Pressable, StyleSheet, Text, View } from 'react-native'


export default function Page() {
  const { user } = useUser()
  const { signOut } = useClerk()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <Show when="signed-out">
        <Link href="/(auth)/sign-in">
          <Text>Sign in</Text>
        </Link>
        <Link href="/(auth)/sign-up">
          <Text>Sign up</Text>
        </Link>
      </Show>
      <Show when="signed-in">
        <Text>Hello {user?.id}</Text>
        <Pressable style={styles.button} onPress={() => signOut()}>
          <Text style={styles.buttonText}>Sign out</Text>
        </Pressable>
        <View className="size-12 rounded-full overflow-hidden">
          <Image source={{ uri: user?.imageUrl }} style={{ width: "100%", height: "100%" }} />
        </View>
      </Show>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    gap: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#0a7ea4',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
})