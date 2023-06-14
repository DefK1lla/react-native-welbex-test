import { StyleSheet } from 'react-native'
import colors from '../shared/styles/colors'

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.blue,
  },
  title: {
    color: colors.white,
  },
  tabLabel: {
    fontSize: 11,
    color: colors.blue,
    fontWeight: '500',
  },
  tabIcon: {
    width: 30,
    height: 30,
  },
})

export default styles
