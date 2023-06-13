import { StyleSheet, Text } from 'react-native'

import transports from '../../shared/mock/transport.json'
import { Transport } from '../../shared/types/transport'
import { TransportsMap, TransportsTable } from '../../components'
import { Tabs } from '../../features'

import colors from '../../shared/styles/colors'
import { FC } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParams } from '../../navigation'

type Props = NativeStackScreenProps<RootStackParams, 'home'>

export const HomeScreen: FC<Props> = () => {
  const tabsContent = [
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
  return <Tabs items={tabsContent} />
}

const styles = StyleSheet.create({
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
