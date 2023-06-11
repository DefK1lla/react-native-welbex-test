import { useEffect, useState } from 'react'

import { StatusBar } from 'expo-status-bar'
import { Button, StyleSheet, Text, View } from 'react-native'

import i18n from './i18n'

export default function App() {
  const [locale, setLocale] = useState<string>(i18n.locale)

  useEffect(() => {
    i18n.locale = locale
  }, [locale])

  return (
    <View style={styles.container}>
      <Text>{i18n.t('hello_world')}</Text>
      <Button
        onPress={() =>
          setLocale(prevState => (prevState === 'ru' ? 'en' : 'ru'))
        }
        title={i18n.locale}
      />

      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
