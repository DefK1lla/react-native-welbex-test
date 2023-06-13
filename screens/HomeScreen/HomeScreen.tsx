import { StyleSheet, Text } from 'react-native'

import transports from '../../shared/mock/transport.json'
import { Transport } from '../../shared/types/transport'
import { TransportsMap, TransportsTable } from '../../components'
import { Tabs } from '../../features'

import colors from '../../shared/styles/colors'
import { FC } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParams } from '../../navigation'
import { useTranslation } from 'react-i18next'

type Props = NativeStackScreenProps<RootStackParams, 'home'>

export const HomeScreen: FC<Props> = ({ navigation }) => {
  const { t } = useTranslation()

  const onTransportPress = (id: number) => {
    navigation.navigate('transport')
  }

  const tabsContent = [
    {
      header: (
        <Text style={styles.tabBtn}>
          {t('home_screen.tabs.list')}
        </Text>
      ),
      body: (
        <TransportsTable
          onRowPress={onTransportPress}
          getHeaderLabel={title => t(`words.${title}`)}
          transports={transports as Transport[]}
        />
      ),
    },
    {
      header: (
        <Text style={styles.tabBtn}>{t('home_screen.tabs.map')}</Text>
      ),
      body: (
        <TransportsMap
          onMarkerPress={onTransportPress}
          transports={transports as Transport[]}
        />
      ),
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
