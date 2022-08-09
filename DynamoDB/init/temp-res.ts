Request=  {
  domain: null,
  service: Service {
    config: Config {
      credentials: [SharedIniFileCredentials],
      credentialProvider: [CredentialProviderChain],
      region: 'ew-west-2',
      logger: null,
      apiVersions: {},
      apiVersion: '2012-08-10',
      endpoint: 'dynamodb.ew-west-2.amazonaws.com',
      httpOptions: [Object],
      maxRetries: undefined,
      maxRedirects: 10,
      paramValidation: true,
      sslEnabled: true,
      s3ForcePathStyle: false,
      s3BucketEndpoint: false,
      s3DisableBodySigning: true,
      s3UsEast1RegionalEndpoint: 'legacy',
      s3UseArnRegion: undefined,
      computeChecksums: true,
      convertResponseTypes: true,
      correctClockSkew: false,
      customUserAgent: null,
      dynamoDbCrc32: true,
      systemClockOffset: 0,
      signatureVersion: 'v4',
      signatureCache: true,
      retryDelayOptions: {},
      useAccelerateEndpoint: false,
      clientSideMonitoring: false,
      endpointDiscoveryEnabled: undefined,
      endpointCacheSize: 1000,
      hostPrefixEnabled: true,
      stsRegionalEndpoints: 'legacy',
      useFipsEndpoint: false,
      useDualstackEndpoint: false
    },
    isGlobalEndpoint: false,
    endpoint: Endpoint {
      protocol: 'https:',
      host: 'dynamodb.ew-west-2.amazonaws.com',
      port: 443,
      hostname: 'dynamodb.ew-west-2.amazonaws.com',
      pathname: '/',
      path: '/',
      href: 'https://dynamodb.ew-west-2.amazonaws.com/'
    },
    _events: { apiCallAttempt: [Array], apiCall: [Array] },
    MONITOR_EVENTS_BUBBLE: [Function: EVENTS_BUBBLE],
    CALL_EVENTS_BUBBLE: [Function: CALL_EVENTS_BUBBLE],
    _clientId: 1
  },
  operation: 'getItem',
  params: { TableName: 'my_first_table', Key: { id: 1 } },
  httpRequest: HttpRequest {
    method: 'POST',
    path: '/',
    headers: { 'User-Agent': 'aws-sdk-nodejs/2.1190.0 win32/v16.15.0' },
    body: '',
    endpoint: {
      protocol: 'https:',
      host: 'dynamodb.ew-west-2.amazonaws.com',
      port: 443,
      hostname: 'dynamodb.ew-west-2.amazonaws.com',
      pathname: '/',
      path: '/',
      href: 'https://dynamodb.ew-west-2.amazonaws.com/',
      constructor: [Function]
    },
    region: 'ew-west-2',
    _userAgent: 'aws-sdk-nodejs/2.1190.0 win32/v16.15.0'
  },
  startTime: 2022-08-09T11:54:18.877Z,
  response: Response {
    request: [Circular *1],
    data: null,
    error: null,
    retryCount: 0,
    redirectCount: 0,
    httpResponse: HttpResponse {
      statusCode: undefined,
      headers: {},
      body: undefined,
      streaming: false,
      stream: null
    },
    maxRetries: 10,
    maxRedirects: 10
  },
  _asm: AcceptorStateMachine {
    currentState: 'validate',
    states: {
      validate: [Object],
      build: [Object],
      afterBuild: [Object],
      sign: [Object],
      retry: [Object],
      afterRetry: [Object],
      send: [Object],
      validateResponse: [Object],
      extractError: [Object],
      extractData: [Object],
      restart: [Object],
      success: [Object],
      error: [Object],
      complete: [Object]
    }
  },
  _haltHandlersOnError: false,
  _events: {
    validate: [
      [Function (anonymous)],
      [Function],
      [Function: VALIDATE_REGION],
      [Function: BUILD_IDEMPOTENCY_TOKENS],
      [Function: VALIDATE_PARAMETERS]
    ],
    afterBuild: [
      [Function: COMPUTE_CHECKSUM],
      [Function],
      [Function: SET_CONTENT_LENGTH],
      [Function: SET_HTTP_HOST],
      [Function: SET_TRACE_ID]
    ],
    restart: [ [Function: RESTART] ],
    sign: [ [Function (anonymous)], [Function], [Function] ],
    validateResponse: [ [Function: VALIDATE_RESPONSE], [Function (anonymous)] ],
    error: [ [Function: ERROR] ],
    send: [ [Function] ],
    httpHeaders: [ [Function: HTTP_HEADERS] ],
    httpData: [ [Function: HTTP_DATA] ],
    httpDone: [ [Function: HTTP_DONE] ],
    retry: [
      [Function: FINALIZE_ERROR],
      [Function: INVALIDATE_CREDENTIALS],
      [Function: EXPIRED_SIGNATURE],
      [Function: CLOCK_SKEWED],
      [Function: REDIRECT],
      [Function: RETRY_CHECK],
      [Function: API_CALL_ATTEMPT_RETRY]
    ],
    afterRetry: [ [Function] ],
    build: [ [Function: buildRequest] ],
    extractData: [
      [Function: extractRequestId],
      [Function: checkCrc32],
      [Function: extractData]
    ],
    extractError: [ [Function: extractError], [Function: extractRequestId] ],
    httpError: [ [Function: ENOTFOUND_ERROR] ],
    success: [ [Function: API_CALL_ATTEMPT] ],
    complete: [ [Function: API_CALL] ]
  },
  emit: [Function: emit],
  API_CALL_ATTEMPT: [Function: API_CALL_ATTEMPT],
  API_CALL_ATTEMPT_RETRY: [Function: API_CALL_ATTEMPT_RETRY],
  API_CALL: [Function: API_CALL]
}