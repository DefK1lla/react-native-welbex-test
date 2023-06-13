import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { HomeScreen } from '../screens'

export type RootStackParams = {
  home: any
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
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
