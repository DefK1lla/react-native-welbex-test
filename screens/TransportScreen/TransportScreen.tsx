import { FC, useEffect, useState } from 'react'
import { View, Text, Button, Linking } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { RootStackParams } from '../../navigation'
import { getTransport } from '../../shared/api/transports'
import { Transport } from '../../shared/types/transport'
import { Loading, TransportsMap } from '../../components'
import { useTranslation } from 'react-i18next'

import styles from './TransportScreen.style'

type Props = NativeStackScreenProps<RootStackParams, 'transport'>

export const TransportScreen: FC<Props> = ({ route, navigation }) => {
  const { id, name } = route.params

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [transport, setTransport] = useState<Transport>()

  const { t } = useTranslation()

  useEffect(() => {
    setIsLoading(true)

    navigation.setOptions({
      title: name,
    })

    const t = setTimeout(
      () =>
        getTransport(id)
          .then(setTransport)
          .then(() => setIsLoading(false)),
      400
    )

    return () => clearTimeout(t)
  }, [id, name])

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
        <Button
          title={t('words.call')}
          onPress={() =>
            Linking.openURL('tel:' + transport.driver.phone)
          }
        />
        <Button
          title={t('words.write')}
          onPress={() =>
            Linking.openURL(
              `whatsapp://send?text=${t(
                'transport_screen.message_text'
              )}&phone=${transport.driver.phone}`
            )
          }
        />
      </View>

      <TransportsMap transports={transport} />
    </View>
  )
}
