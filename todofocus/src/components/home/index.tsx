import { fetchUserDetail } from '@/api/auth/profile'
import React from 'react'
import { Text, View } from 'react-native'

const Home = () => {

  const { profileName } = fetchUserDetail()

  return (
    <View className='py-10 px-5'>
        <Text className='text-3xl font-medium tracking-tighter text-apptextprimary'>What's up, {profileName}</Text>
        <View>
          <Text className='text-apptextsecundary font-bold'>Reminders</Text>
        </View>
    </View>
  )
}

export default Home