import { View, Text } from 'react-native'
import { RootStackParams } from '../../navigation'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { LocaleToggler } from '../../features'
import styles from './SettingsScreen.style'

type Props = NativeStackScreenProps<RootStackParams, 'settings'>

export const SettingsScreen: FC<Props> = () => {
  const { t } = useTranslation()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('settings_screen.title')}</Text>
      <LocaleToggler />
    </View>
  )
}
