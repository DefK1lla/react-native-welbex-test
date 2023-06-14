import transports from '../mock/transport.json'
import { Transport, TransportType } from '../types/transport'

export async function getTransportsList(
  type?: TransportType | 'all'
) {
  if (!type || type === 'all') return transports as Transport[]
  return transports.filter(t => t.type === type) as Transport[]
}

export async function getTransport(id: number) {
  return transports.find(t => t.id === id) as Transport
}
