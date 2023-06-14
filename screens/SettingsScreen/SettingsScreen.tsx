import { View, Text, StyleSheet } from 'react-native'
import { RootStackParams } from '../../navigation'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { LocaleToggler } from '../../features'

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

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
})
