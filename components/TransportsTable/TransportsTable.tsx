import { FC } from 'react'
import {
  ScrollView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native'

import { Transport } from '../../shared/types/transport'
import styles from './TransportsTable.style'

const tableHead = ['id', 'name', 'phone', 'type']

interface TransportsProps {
  transports: Transport[]
  getHeaderLabel: (title: string) => string
  onRowPress: (transport: Transport) => void
}

export const TransportsTable: FC<TransportsProps> = ({
  transports,
  getHeaderLabel,
  onRowPress,
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
              {getHeaderLabel(t).toUpperCase()}
            </Text>
          ))}
        </View>
        <FlatList
          data={transports}
          renderItem={data => (
            <TouchableOpacity
              style={styles.row}
              activeOpacity={0.4}
              onPress={() => onRowPress(data.item)}
            >
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
