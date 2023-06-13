import { View, ActivityIndicator, StyleSheet } from 'react-native'
import colors from '../../shared/styles/colors'

export const Loading = () => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size='large' color={colors.blue} />
    </View>
  )
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
