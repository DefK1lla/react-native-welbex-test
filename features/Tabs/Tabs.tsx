import { ReactNode, FC, useState } from 'react'
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native'

interface TabItem {
  header: ReactNode
  body: ReactNode
}

interface TabsProps {
  defaultActive?: number
  items: TabItem[]
}

export const Tabs: FC<TabsProps> = ({ defaultActive = 0, items }) => {
  const [active, setActive] = useState<number>(defaultActive)

  return (
    <View>
      <ScrollView contentContainerStyle={styles.header} horizontal>
        {items.map((i, idx) => (
          <TouchableOpacity
            key={idx}
            activeOpacity={1}
            onPress={() => setActive(idx)}
          >
            {i.header}
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View>{items[active].body}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    marginBottom: 15,
    justifyContent: 'space-around',
  },
})
