import { View, StyleSheet, Dimensions, Image } from 'react-native'

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'
import { Transport } from '../../shared/types/transport'
import { FC } from 'react'
import getIcon from './helpers/getIcon'

interface TransportsMapProps {
  transports: Transport[]
}

export const TransportsMap: FC<TransportsMapProps> = ({
  transports,
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
        {transports.map(t => (
          <Marker
            key={t.coordinates.latitude + t.coordinates.longitude}
            coordinate={t.coordinates}
            onPress={() => console.log(t.id)}
          >
            <Image source={getIcon(t.type)} />
          </Marker>
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
})
