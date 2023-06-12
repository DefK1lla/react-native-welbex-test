import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'

import './i18n.config'

import { LocaleToggler } from './features/LocaleToggler/LocaleToggler'
import { Test } from './features/Test'
export default function App() {
  return (
    <View style={styles.container}>
      <Test />
      <LocaleToggler />

      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
