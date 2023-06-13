import { FC, useEffect, useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { RootStackParams } from '../../navigation'
import { getTransport } from '../../shared/api/transports'
import { Transport } from '../../shared/types/transport'
import { Loading, TransportsMap } from '../../components'
import { useTranslation } from 'react-i18next'

type Props = NativeStackScreenProps<RootStackParams, 'transport'>

export const TransportScreen: FC<Props> = ({ route }) => {
  const id = route.params.id

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [transport, setTransport] = useState<Transport>()

  const { t } = useTranslation()

  useEffect(() => {
    setIsLoading(true)

    const t = setTimeout(
      () =>
        getTransport(id)
          .then(setTransport)
          .then(() => setIsLoading(false)),
      400
    )

    return () => clearTimeout(t)
  }, [id])

  if (isLoading) return <Loading />

  if (!transport) return <Text>{t('words.error')}</Text>

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>
          {t('transport_screen.title')}
        </Text>
        <View style={styles.row}>
          <Text style={styles.label}>{t('words.id')}: </Text>
          <Text>{transport?.id}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>{t('words.name')}: </Text>
          <Text>{transport?.driver.name}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>{t('words.phone')}: </Text>
          <Text>{transport?.driver.phone}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>{t('words.type')}: </Text>
          <Text>{transport?.type}</Text>
        </View>
      </View>

      <View style={styles.actions}>
        <Button title={t('words.call')} />
        <Button title={t('words.write')} />
      </View>

      <TransportsMap transports={[transport]} />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    padding: 15,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  title: {
    textAlign: 'center',
    fontSize: 23,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
  },
  label: {
    fontWeight: '700',
  },
})