/**
 * wksin项目配置文件
 */

module.exports = {
   webpackBase: {
       entry: {
           index: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=10000&reload=true', './client/entries/index/app.js']
       }
   },
   webpackPlugin: {
       /**
        * 模版路径
        */
       templatePath: [
          './client/template/index.ejs'
       ]
   }
}