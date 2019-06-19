import DeployServerWebpackPlugin from 'deploy-server-webpack-plugin'

const path = require('path');

export default {
  treeShaking: true,
  history: 'hash',
  publicPath: './',
  cssPublicPath: '../../',
  devtool: 'source-map',
  // hash: true,
  disableRedirectHoist: true,
  disableCSSSourceMap: true,
  chainWebpack(config, plugin) {
    config.plugin('extract-css').tap(() => {
      return [{
        filename: 'static/css/[name].css',
        chunkFilename: 'static/css/[name].chunk.css'
      }]
    })
    
    config.module.rule('exclude').use('url-loader').tap(options => {
      return {
        limit: 10000,
        name: 'static/img/[name].[hash:8].[ext]'
      }
    });
    config.merge({
      output: {
        filename: `static/js/[name].[hash].js`,
        chunkFilename: `static/js/[id].[hash].js`
      },
      optimization: {
        splitChunks: {
          cacheGroups: {
            react: {
              name: 'react',
              chunks: 'all',
              minSize: 30000,
              minChunks: 1,
              automaticNameDelimiter: '.',
              test({ resource }) {
                return /[\\/]node_modules[\\/]react.*/.test(resource);
              },
              priority: -10,
            },
            umi: {
              name: 'umi',
              chunks: 'all',
              minSize: 30000,
              minChunks: 1,
              automaticNameDelimiter: '.',
              test({ resource }) {
                return /[\\/]node_modules[\\/]umi/.test(resource);
              },
              priority: -9,
            },
            umiDepend: {
              name: 'umiDepend',
              chunks: 'all',
              minSize: 30000,
              minChunks: 1,
              automaticNameDelimiter: '.',
              test({ resource }) {
                return /[\\/]node_modules[\\/]umi-.*/.test(resource);
              },
              priority: -8,
            }
          },
        },
      }
    });

  },
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: {
        dynamicImport: true
      },
      dynamicImport: { webpackChunkName: true },
      title: 'umi',
      dll: false,
      chunks: ['react', 'umi', 'umiDepend'],
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }]
  ],
}
