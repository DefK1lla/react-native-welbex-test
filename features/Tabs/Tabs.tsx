import { ReactNode, FC, useState } from 'react'
import {
  ScrollView,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'

interface TabItem {
  header: ReactNode
  body: ReactNode
}

interface TabsProps {
  defaultActive?: number
  items: TabItem[]
  headerStyles?: StyleProp<ViewStyle>
  bodyStyles?: StyleProp<ViewStyle>
}

export const Tabs: FC<TabsProps> = ({
  defaultActive = 0,
  items,
  headerStyles,
  bodyStyles,
}) => {
  const [active, setActive] = useState<number>(defaultActive)

  return (
    <View>
      <ScrollView
        contentContainerStyle={[styles.header, headerStyles]}
        horizontal
      >
        {items.map((i, idx) => (
          <TouchableOpacity
            key={idx}
            activeOpacity={0.6}
            onPress={() => setActive(idx)}
          >
            {i.header}
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={bodyStyles}>{items[active].body}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    paddingTop: 15,
    paddingBottom: 15,
    justifyContent: 'space-around',
  },
})
