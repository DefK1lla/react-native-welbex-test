import { FC } from 'react'
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native'

import { Transport } from '../../shared/types/transport'
import colors from '../../shared/styles/colors'

const tableHead = ['id', 'name', 'phone', 'type']

interface TransportsProps {
  transports: Transport[]
}

export const TransportsTable: FC<TransportsProps> = ({
  transports,
}) => {
  return (
    <ScrollView horizontal style={styles.wrapper}>
      <View>
        <View style={styles.header}>
          {tableHead.map(t => (
            <Text
              key={t}
              style={[
                styles.cell,
                styles[t as keyof typeof styles],
                styles.headerCell,
              ]}
            >
              {t.toUpperCase()}
            </Text>
          ))}
        </View>
        <FlatList
          data={transports}
          renderItem={data => (
            <TouchableOpacity style={styles.row} activeOpacity={0.4}>
              <Text style={[styles.id, styles.cell]}>
                #{data.item.id}
              </Text>
              <Text style={[styles.name, styles.cell]}>
                {data.item.driver.name}
              </Text>
              <Text style={[styles.phone, styles.cell]}>
                {data.item.driver.phone}
              </Text>
              <Text style={[styles.type, styles.cell]}>
                {data.item.type}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.blue,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: colors.blue,
  },
  headerCell: {
    color: colors.white,
    textAlign: 'center',
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
