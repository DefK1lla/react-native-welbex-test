import { Dimensions, StyleSheet } from 'react-native'
import colors from '../../shared/styles/colors'

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
  },
  map: {
    height: '100%',
    width: Dimensions.get('window').width,
  },
  marker: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    padding: 5,
    marginTop: 5,
    borderRadius: 5,
    backgroundColor: colors.white,
    textAlign: 'center',
  },
})

export default styles
