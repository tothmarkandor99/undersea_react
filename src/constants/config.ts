interface ConfigProps {
  baseUrl: string
  resourceUrl: string
  loggingRedux: 'none' | 'names' | 'full'
  loggingRequests: boolean
  loggingResponses: boolean
}

export const Config: ConfigProps = {
  baseUrl: 'http://underseat2lasttry.webtest.encosoft.internal/api',
  resourceUrl: 'http://underseat2lasttry.webtest.encosoft.internal',
  loggingRedux: 'full',
  loggingRequests: false,
  loggingResponses: false,
}
