'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
const { AutoWebPlugin } = require('web-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const autoWebPlugin = new AutoWebPlugin('src/pages', {
  // template: 'template.html', // HTML 模版文件所在的文件路径
  // postEntrys: ['./common.css'],// 所有页面都依赖这份通用的 CSS 样式文件
  // 提取出所有页面公共的代码
  commonsChunk: {
    name: 'common',// 提取出公共代码 Chunk 的名称
  },
});
module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: autoWebPlugin.entry({}),
  plugins: [autoWebPlugin],
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.ts'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        enforce: 'pre',
        loader: 'tslint-loader'
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        }
      }
    ]
  },
  plugins: [
    // 用md5替换标准 webpack chunkhash 的插件。解决了没有修改 init.js 但是重新生成新的 init.js 的问题。
    // 不建议使用 因为即使你没有修改 init.js ,但是生成的 init.js 内容也可能不同, 如果采用该组件, 会导致时间戳会因为内有修改 init.js 而不更新, 最终到时用户缓存了错误的 init.js
    // new WebpackMd5Hash(),
    function () {
      // 数据处理 用于生成 webpackMap
      this.plugin('done', function (map) {
       
        var webpackMap = {};

        // 调用 webpack map toJson 生成 jsonMap
        map = map.toJson();
        console.log(map.entrypoints);
        console.log('=====map.entrypoints===');

        console.log(map.assetsByChunkName);
        console.log('=====map.assetsByChunkName===');

        Object.keys(map.entrypoints).forEach(function (item) {

          // 如果入口路径不包含 / 则不输出 例如 入口  name == 'project'
          // if (item.indexOf('/') < 0) {
          //   return;
          // }

          // 页面名
          var pageName = item.split('/')[0];

          webpackMap[pageName] = {};
          webpackMap[pageName].js = [];
          webpackMap[pageName].css = [];
          console.log(map.publicPath);
          console.log('=====map.publicPath===');

          // webpack资源 (映射) 处理
          // [].concat(map.assetsByChunkName['manifest']).forEach(mapAsset);

          // 公共资源 (映射) 处理
          // [].concat(map.assetsByChunkName['vendor']).forEach(mapAsset);

          // 项目公共资源 (映射) 处理
          // [].concat(map.assetsByChunkName['project']).forEach(mapAsset);

          // 页面级别资源 (映射) 处理
          [].concat(map.assetsByChunkName[item]).forEach(mapAsset);

          /**
           * 根据资源类型，将其映射(map)到对应的数组中
           * @param assetsPath  资源路径
           */
          function mapAsset (assetsPath) {
            if (path.extname(assetsPath) === '.js') {
              // 绝对路径 = publicPath +  assetsPath
              webpackMap[pageName].js.push(map.publicPath + assetsPath);
            } else if (path.extname(assetsPath) === '.css') {
              webpackMap[pageName].css.push(map.publicPath + assetsPath);
            }
          }
        });

        utils.mkdir(path.join(__dirname, '../dist/.ua-resource.map'));

        // webpackMap 写入 config.json
        require('fs').writeFileSync(
          path.join(__dirname, '../dist/.ua-resource.map', 'resource.map.json'),
          JSON.stringify(webpackMap, null, '  '));

        // TODO 暂时测试使用
        require('fs').writeFileSync(
          path.join(__dirname, '../dist/.ua-resource.map', 'webpack.map.json'),
          JSON.stringify(map, null, '  '));

      });
    }
  ],
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
