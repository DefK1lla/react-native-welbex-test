import { ImageURISource } from 'react-native/types'
import { TransportType } from '../../../shared/types/transport'

export default function (type: TransportType) {
  switch (type) {
    case 'passenger':
      return require('../icons/passenger.png')
    case 'freight':
      return require('../icons/freight.png')
    case 'special':
      return require('../icons/spec.png')
  }
}
