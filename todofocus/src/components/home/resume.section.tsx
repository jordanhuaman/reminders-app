import React from 'react'
import { View } from 'react-native'

interface ResumeSectionI {
  total: number,
  type: 'REMINDER' | 'TASK',
  done: number,
}

const ResumeSection = (props: ResumeSectionI) => {
  return (
    <View>

    </View>
  )
}

export default ResumeSection