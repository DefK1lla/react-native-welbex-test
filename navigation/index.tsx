import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { HomeScreen } from '../screens'
import { TransportScreen } from '../screens/TransportScreen/TransportScreen'
import colors from '../shared/styles/colors'

export type RootStackParams = {
  home: undefined
  transport: {
    id: number
    name: string
  }
}

const RootStack = createNativeStackNavigator<RootStackParams>()

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name='home'
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name='transport'
          component={TransportScreen}
          options={{
            title: 'Transport',
            headerStyle: styles.header,
            headerTitleStyle: styles.title,
            headerTintColor: colors.white,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.blue,
  },
  title: {
    color: colors.white,
  },
})

export default Navigation
