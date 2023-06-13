import './i18n.config'

import { StatusBar, StyleSheet, View } from 'react-native'

import { HomeScreen } from './screens'

import colors from './shared/styles/colors'
import Navigation from './navigation'

export default function App() {
  return (
    <>
      <Navigation />
      <StatusBar />
    </>
  )
}
