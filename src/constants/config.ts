import * as signalR from '@microsoft/signalr'

interface ConfigProps {
  baseUrl: string
  resourceUrl: string
  loggingRedux: 'none' | 'names' | 'full'
  loggingRequests: boolean
  loggingResponses: boolean
  loggingSignalR: boolean
  defaultSearchItemsPerPage: number
  signalRLogLevel: signalR.LogLevel
}

export const Config: ConfigProps = {
  baseUrl: 'http://underseat2lasttry.webtest.encosoft.internal/api',
  resourceUrl: 'http://underseat2lasttry.webtest.encosoft.internal',
  loggingRedux: 'none',
  loggingRequests: false,
  loggingResponses: false,
  loggingSignalR: false,
  defaultSearchItemsPerPage: 10,
  signalRLogLevel: signalR.LogLevel.None,
}
