import { ImageURISource } from 'react-native/types'
import { TransportType } from '../../../shared/types/transport'

const passenger = require('../icons/passenger.png'),
  freight = require('../icons/freight.png'),
  spec = require('../icons/spec.png')

export default function (type: TransportType): ImageURISource {
  switch (type) {
    case 'passenger':
      return passenger
    case 'freight':
      return freight
    case 'special':
      return spec
  }
}
