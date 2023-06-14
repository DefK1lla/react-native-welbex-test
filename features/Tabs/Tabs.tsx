import { ReactNode, FC, useState } from 'react'
import {
  ScrollView,
  StyleProp,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'
import styles from './Tabs.style'

interface TabItem {
  header: ReactNode
  body: ReactNode
}

interface TabsProps {
  defaultActive?: number
  items: TabItem[]
  headerStyles?: StyleProp<ViewStyle>
  bodyStyles?: StyleProp<ViewStyle>
  onChange?: (tab: number) => void
}

export const Tabs: FC<TabsProps> = ({
  defaultActive = 0,
  items,
  headerStyles,
  bodyStyles,
  onChange,
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
            onPress={() => {
              setActive(idx)
              onChange?.(idx)
            }}
          >
            {i.header}
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={bodyStyles}>{items[active].body}</View>
    </View>
  )
}
