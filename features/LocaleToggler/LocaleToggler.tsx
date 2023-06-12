import { FC } from 'react'
import { Button, View, Text } from 'react-native'

import { useTranslation } from 'react-i18next'

export const LocaleToggler: FC = () => {
  const { t, i18n } = useTranslation()
  return (
    <View>
      <Button
        title={i18n.language ?? ''}
        onPress={() =>
          i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
        }
      />
    </View>
  )
}
