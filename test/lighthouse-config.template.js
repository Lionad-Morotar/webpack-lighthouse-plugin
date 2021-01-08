/**
 * @doc https://github.com/GoogleChrome/lighthouse/blob/master/docs/configuration.md
 */
module.exports = {
  url: ['https://www.baidu.com'],
  onlyCategories:
    ['performance',
      'accessibility',
      'best-practices',
      'seo',
      'progressive-web-app'],
  skipAudits: ['uses-http2'],
  open: true,
  disableDeviceEmulation: true,
  disableCPUThrottling: true,
  disableNetworkThrottling: true,
  logLevel: 'info',
  output: 'html',
  maxWaitForFcp: 15000,
  maxWaitForLoad: 35000,
  extends: 'lighthouse:default',
  settings:
  {
    maxWaitForLoad: 35000,
    emulatedFormFactor: 'desktop',
    throttling:
      { rttMs: 40, throughputKbps: 10240, cpuSlowdownMultiplier: 1 },
    skipAudits: ['uses-http2']
  },
  audits:
    [{ path: 'metrics/first-contentful-paint', options: [Object] },
    { path: 'metrics/first-meaningful-paint', options: [Object] },
    { path: 'metrics/speed-index', options: [Object] },
    { path: 'metrics/interactive', options: [Object] },
    { path: 'metrics/first-cpu-idle', options: [Object] }],
  chromeFlags: ['--start-fullscreen'],
  extraHeaders:
  {
    Cookie: ''
  }
}
