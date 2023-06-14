import { SafeAreaView, Text } from 'react-native'

import { Picker } from '@react-native-picker/picker'

import {
  Transport,
  TransportType,
} from '../../shared/types/transport'
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

const types: Array<TransportType | 'all'> = [
  'all',
  'passenger',
  'freight',
  'special',
]

export const HomeScreen: FC<Props> = ({ navigation }) => {
  const [selected, setSelected] = useState<TransportType | 'all'>(
    'all'
  )
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [transports, setTransports] = useState<Transport[]>()
  const [activeTab, setActiveTab] = useState<number>(0)

  const { t } = useTranslation()

  useEffect(() => {
    setIsLoading(true)
    const t = setTimeout(
      () =>
        getTransportsList(selected)
          .then(setTransports)
          .finally(() => setIsLoading(false)),
      300
    )

    return () => clearTimeout(t)
  }, [selected])

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

  if (!transports) return null

  return (
    <SafeAreaView>
      <Picker
        placeholder='select'
        selectedValue={selected}
        onValueChange={itemValue => setSelected(itemValue)}
      >
        {types.map(tr => (
          <Picker.Item
            label={tr === 'all' ? t('words.all')! : tr}
            value={tr}
          />
        ))}
      </Picker>
      <Tabs
        defaultActive={activeTab}
        onChange={setActiveTab}
        items={tabsContent}
      />
    </SafeAreaView>
  )
}
