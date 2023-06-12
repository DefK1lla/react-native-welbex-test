import { Text, View } from 'react-native'
import { useTranslation } from 'react-i18next'

export const Test = () => {
  const { t } = useTranslation()
  return (
    <View>
      <Text>{t('hello_world')}</Text>
    </View>
  )
}
