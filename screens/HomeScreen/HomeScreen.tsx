import {
  StyleSheet,
  Text,
  ActivityIndicator,
  View,
} from 'react-native'

import { Transport } from '../../shared/types/transport'
import {
  Loading,
  TransportsMap,
  TransportsTable,
} from '../../components'
import { Tabs } from '../../features'

import colors from '../../shared/styles/colors'
import { FC, useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParams } from '../../navigation'
import { useTranslation } from 'react-i18next'
import { getTransportsList } from '../../shared/api/transports'

type Props = NativeStackScreenProps<RootStackParams, 'home'>

export const HomeScreen: FC<Props> = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [transports, setTransports] = useState<Transport[]>()

  useEffect(() => {
    setIsLoading(true)
    const t = setTimeout(
      () =>
        getTransportsList()
          .then(setTransports)
          .finally(() => setIsLoading(false)),
      300
    )

    return () => clearTimeout(t)
  }, [])

  const { t } = useTranslation()

  const onTransportPress = (id: number) => {
    navigation.navigate('transport', { id })
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

  if (isLoading) return <Loading />

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
