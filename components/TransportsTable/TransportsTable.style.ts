import { StyleSheet, Dimensions } from 'react-native'

import colors from '../../shared/styles/colors'

const styles = StyleSheet.create({
  wrapper: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.blue,
    height: Dimensions.get('window').height - 130,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: colors.blue,
  },
  headerCell: {
    color: colors.white,
    textAlign: 'center',
    paddingTop: 15,
    paddingBottom: 0,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderTopColor: colors.blue,
    borderTopWidth: 1,
    borderBottomColor: colors.blue,
    borderBottomWidth: 1,
  },
  cell: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    borderLeftColor: colors.blue,
    borderLeftWidth: 1,
    borderRightColor: colors.blue,
    borderRightWidth: 1,
  },
  id: {
    width: 50,
  },
  name: {
    width: 150,
  },
  phone: {
    width: 150,
  },
  type: {
    width: 100,
  },
})

export default styles
