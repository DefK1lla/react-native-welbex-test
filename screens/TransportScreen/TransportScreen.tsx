import { FC } from 'react'
import { View, Text } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { RootStackParams } from '../../navigation'

type Props = NativeStackScreenProps<RootStackParams, 'transport'>

export const TransportScreen: FC<Props> = ({ route }) => {
  console.log(route.params.id)
  return (
    <View>
      <Text>transport screen</Text>
    </View>
  )
}
