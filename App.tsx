import './i18n.config'

import { StatusBar, StyleSheet, View } from 'react-native'

import { TransportsTable } from './components/TransportsTable/TransportsTable'

import transports from './shared/mock/transport.json'
import { Transport } from './shared/types/transport'
import colors from './shared/styles/colors'
import { TransportsMap } from './components/TransportsMap/TransportsMap'

export default function App() {
  return (
    <View style={styles.app}>
      <View style={styles.header} />
      <TransportsMap transports={transports as Transport[]} />
      <StatusBar />
    </View>
  )
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: colors.white,
    paddingBottom: 20,
  },
  header: {
    height: 50,
  },
})
