import transports from '../mock/transport.json'
import { Transport } from '../types/transport'

export async function getTransportsList() {
  return transports as Transport[]
}

export async function getTransport(id: number) {
  return transports.find(t => t.id === id) as Transport
}
