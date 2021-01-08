# Webpack Lighthouse Plugin

This plugin allows you to run Lighthouse from a Webpack build.

在 Webpack 打包结束后自动运行 [Lighthouse](https://github.com/googlechrome/lighthouse) 以评估网站的性能和用户体验。

![](./assets/2021-01-07-18-21-36.png)

## 旧版本文档

旧版本文档演示了如何运行，见：https://github.com/addyosmani/webpack-lighthouse-plugin。

## 新增功能

修复了部分问题。此外，可通过传入完整的 Lighthouse 配置项以及 Chrome 启动参数。

示例配置见：lighthouse-config.template.js

相关文档：

* [Lighthouse@Github](https://github.com/GoogleChrome/lighthouse)
* [Lighthouse@API](https://github.com/GoogleChrome/lighthouse/blob/master/docs/configuration.md)
* [AllChromeFlags](https://peter.sh/experiments/chromium-command-line-switches)
