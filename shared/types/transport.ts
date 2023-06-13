import { LatLng } from 'react-native-maps/lib/sharedTypes'
import { Driver } from './driver'

export type TransportType = 'passenger' | 'special' | 'freight'

export interface Transport {
  id: number
  type: TransportType
  driver: Driver
  coordinates: LatLng
}
