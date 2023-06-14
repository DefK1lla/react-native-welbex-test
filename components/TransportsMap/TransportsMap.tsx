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
  transports: Transport[] | Transport
  onMarkerPress?: (transport: Transport) => void
}

export const TransportsMap: FC<TransportsMapProps> = ({
  transports,
  onMarkerPress,
}) => {
  const isArray = Array.isArray(transports)
  const region = {
    latitude: isArray ? 55.755864 : transports.coordinates.latitude,
    longitude: isArray ? 37.617698 : transports.coordinates.longitude,
    latitudeDelta: 1,
    longitudeDelta: 1,
  }

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={region}
      >
        {isArray ? (
          transports.map((t, i) => (
            <Marker
              key={t.id}
              tracksViewChanges={false}
              coordinate={t.coordinates}
              onPress={() => onMarkerPress?.(t)}
              image={getIcon(t.type)}
            />
          ))
        ) : (
          <Marker
            key={transports.id}
            tracksViewChanges={false}
            coordinate={transports.coordinates}
            image={getIcon(transports.type)}
          />
        )}
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
