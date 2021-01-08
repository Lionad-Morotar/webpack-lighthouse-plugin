# Webpack Lighthouse Plugin

This plugin allows you to run Lighthouse from a Webpack build.

在 Webpack 打包结束后自动运行 [Lighthouse](https://github.com/googlechrome/lighthouse) 以评估网站的性能和用户体验。

![](./assets/example.gif)

## 代码示例 API Example

配置 webpack.config.js。

Import module then plug it in webpack.

```js
const WebpackLighthousePlugin = require('webpack-lighthouse-plugin')

module.exports = {
  // ...
  plugins: [
    new WebpackLighthousePlugin({
      url: 'www.baidu.com'
    })
  ],
  // ...
}
```

可传入 Chrome 启动参数。

Enable chrome start flags.

```js
new WebpackLighthousePlugin({
  url: 'www.baidu.com',
  chromeFlags: [
    // 全屏启动 Chrome
    // open chrome in fullscreen mode
    '--start-fullscreen'
  ],
})
```

更多 API：

```js
new WebpackLighthousePlugin({
  // URL can be an array
  url: ['www.baidu.com'],
  // open report html when task done
  open: true,
  // customize request headers
  extraHeaders: {
    Cookie: 'xxx'
  },
  // only performance, accessibility, seo categories
  onlyCategories: [
    'performance',
    'accessibility',
    'seo',
  ],
  // network and cpu throttling
  throttling: {
    rttMs: 100,
    cpuSlowdownMultiplier: 4
  },
  // ... and more
  // pls check out this page: https://github.com/GoogleChrome/lighthouse/blob/master/docs/configuration.md
})
```

## 使用方法 How to use

1. Install Packages

```
npm install --save-dev chrome-launcher lighthouse lighthouse-logger open
npm install --save-dev https://github.com/Lionad-Morotar/webpack-lighthouse-plugin
```


2. Configurate webpack.config.js

```js
// choose one to use
const lighthouseConfig = require('lighthouse/lighthouse-core/config/lr-desktop-config')
const lighthouseConfig = require('lighthouse/lighthouse-core/config/lr-mobile-config')
const lighthouseConfig = require('lighthouse/lighthouse-core/config/mixed-content-config')
const lighthouseConfig = require('perf-config.js')

// fix config object that directly imported from lighthouse package
const fixing = require('../src/get-lighthouse-config')

module.exports = {
  entry: './sample.js',
  output: { filename: 'test.js' },
  plugins: [
    new WebpackLighthousePlugin({
      ...fixing(lighthouseConfig),
      url: [
        // 'https://www.baidu.com',
        'http://localhost:9000/main'
      ],
      open: true,
      chromeFlags: [
        '--start-fullscreen'
      ],
      extraHeaders: {
        Cookie: globalCookie
      },
    })
  ],
}
```

## 测试 Run for test

```
npm run demo
```

## 完整配置示例 Full API Example

```js
{
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
  maxWaitForLoad: 35000,
  emulatedFormFactor: 'desktop',
  throttling: { rttMs: 40, throughputKbps: 10240, cpuSlowdownMultiplier: 1 },
  skipAudits: ['uses-http2'],
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
```

## 相关文档 Related document

* [Lighthouse Homepage](https://github.com/GoogleChrome/lighthouse)
* [Lighthouse Configuration](https://github.com/GoogleChrome/lighthouse/blob/master/docs/configuration.md)
* [Chrome Flags](https://peter.sh/experiments/chromium-command-line-switches)
