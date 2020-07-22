interface ConfigProps {
  baseUrl: string
  loggingRedux: 'none' | 'names' | 'full'
  loggingRequests: boolean
  loggingResponses: boolean
  devServiceEnabled: boolean
}

export const Config: ConfigProps = {
  baseUrl: 'http://underseat2lasttry.webtest.encosoft.internal/api',
  loggingRedux: 'none',
  loggingRequests: true,
  loggingResponses: true,
  devServiceEnabled: true,
}
