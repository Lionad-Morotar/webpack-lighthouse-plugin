/**
 * @license
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const webpack = require('webpack');
const WebpackLighthousePlugin = require('../src/webpack-lighthouse-plugin');
const Fetch = require('fetch.io')

module.exports = function () {
  return new Promise(async resolve => {
    let globalCookie = ''
    const fetch = new Fetch({
      afterResponse(res) {
        globalCookie = res.headers.get('set-cookie')
      }
    })
    await fetch.get('http://bax.baixing.cn/bax/user/login/local?user_id=3').query().text()

    const config = {
      entry: './sample.js',
      output: {
        filename: 'test.js'
      },
      plugins: [
        new WebpackLighthousePlugin({
          url: [
            'https://www.baidu.com',
            'https://www.google.com',
            // 'http://localhost:9000/main-lighthouse'
          ],
          open: true,
          perf: true,
          chromeFlags: [
            '--start-fullscreen'
          ],
          extraHeaders: {
            Cookie: globalCookie
          }
        })
      ],
    }

    resolve(config)
  })
}
