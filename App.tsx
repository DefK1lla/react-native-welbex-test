import './i18n.config'

import { StatusBar, View } from 'react-native'

import { TransportTable } from './components/TransportTable/TransportTable'

import transports from './shared/mock/transport.json'
import { Transport } from './shared/types/transport'

export default function App() {
  return (
    <View>
      <TransportTable transports={transports as Transport[]} />
      <StatusBar />
    </View>
  )
}
