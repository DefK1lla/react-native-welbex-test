import { SafeAreaView, Text } from 'react-native'

import { Transport } from '../../shared/types/transport'
import {
  Loading,
  TransportsMap,
  TransportsTable,
} from '../../components'
import { Tabs } from '../../features'

import { FC, useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParams } from '../../navigation'
import { useTranslation } from 'react-i18next'
import { getTransportsList } from '../../shared/api/transports'

import styles from './HomeScreen.style'

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

  const onTransportPress = (t: Transport) => {
    navigation.navigate('transport', {
      id: t.id,
      name: t.driver.name,
    })
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

  return (
    <SafeAreaView>
      <Tabs items={tabsContent} />
    </SafeAreaView>
  )
}
