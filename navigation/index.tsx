import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { HomeScreen } from '../screens'
import { TransportScreen } from '../screens/TransportScreen/TransportScreen'
import { SettingsScreen } from '../screens/SettingsScreen/SettingsScreen'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import AppIcon from '../assets/icons/apps-outline.svg'
import SettingsIcon from '../assets/icons/settings-outline.svg'

import { useTranslation } from 'react-i18next'
import styles from './Navigation.style'
import colors from '../shared/styles/colors'

export type RootStackParams = {
  settings: undefined
  home: undefined
  tab: undefined
  transport: {
    id: number
    name: string
  }
}

export type TabStackParams = {
  settings: undefined
  home: undefined
}

const RootStack = createNativeStackNavigator<RootStackParams>()
const TabStack = createBottomTabNavigator<TabStackParams>()

const TabNavigation = () => {
  const { t } = useTranslation()
  return (
    <TabStack.Navigator>
      <TabStack.Screen
        name='home'
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIconStyle: styles.tabIcon,
          tabBarIcon: () => <AppIcon />,
          tabBarLabel: ({ focused }) =>
            !focused ? (
              <Text style={styles.tabLabel}>
                {t('bottom_tabs.app')}
              </Text>
            ) : null,
        }}
      />
      <TabStack.Screen
        name='settings'
        component={SettingsScreen}
        options={{
          headerStyle: styles.header,
          headerTitleStyle: styles.title,
          title: t('settings_screen.header_title')!,
          tabBarIconStyle: styles.tabIcon,
          tabBarIcon: () => <SettingsIcon />,
          tabBarLabel: ({ focused }) =>
            !focused ? (
              <Text style={styles.tabLabel}>
                {t('bottom_tabs.settings')}
              </Text>
            ) : null,
        }}
      />
    </TabStack.Navigator>
  )
}

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name='tab'
          component={TabNavigation}
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

export default Navigation
