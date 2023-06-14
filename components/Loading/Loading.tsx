import { View, ActivityIndicator } from 'react-native'
import colors from '../../shared/styles/colors'

import styles from './Loading.style'

export const Loading = () => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size='large' color={colors.blue} />
    </View>
  )
}
