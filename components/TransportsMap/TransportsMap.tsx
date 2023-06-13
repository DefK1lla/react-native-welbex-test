import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  Text,
} from 'react-native'

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'
import { Transport } from '../../shared/types/transport'
import { FC } from 'react'
import getIcon from './helpers/getIcon'
import colors from '../../shared/styles/colors'

interface TransportsMapProps {
  transports: Transport[]
  onMarkerPress?: (id: number) => void
}

export const TransportsMap: FC<TransportsMapProps> = ({
  transports,
  onMarkerPress,
}) => {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: 55.755864,
          longitude: 37.617698,
          latitudeDelta: 1,
          longitudeDelta: 1,
        }}
      >
        {transports.map((t, i) => (
          <Marker
            key={t.id}
            tracksViewChanges={false}
            coordinate={t.coordinates}
            onPress={() => onMarkerPress?.(t.id)}
            image={getIcon(t.type)}
          />
        ))}
      </MapView>
    </View>
  )
}

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
