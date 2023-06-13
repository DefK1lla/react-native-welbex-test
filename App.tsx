import './i18n.config'

import { StatusBar, StyleSheet, View, Text } from 'react-native'

import transports from './shared/mock/transport.json'
import { Transport } from './shared/types/transport'
import colors from './shared/styles/colors'
import { TransportsMap, TransportsTable } from './components'
import { Tabs } from './features'

export default function App() {
  const TabsContent = [
    {
      header: <Text style={styles.tabBtn}>List</Text>,
      body: (
        <TransportsTable transports={transports as Transport[]} />
      ),
    },
    {
      header: <Text style={styles.tabBtn}>Map</Text>,
      body: <TransportsMap transports={transports as Transport[]} />,
    },
  ]
  return (
    <View style={styles.app}>
      <Tabs items={TabsContent} />
      <StatusBar />
    </View>
  )
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: colors.white,
    paddingTop: 15,
  },
  tabBtn: {
    width: 100,
    padding: 15,
    borderWidth: 2,
    borderRadius: 25,
    borderColor: colors.blue,
    textAlign: 'center',
    color: colors.blue,
  },
})
