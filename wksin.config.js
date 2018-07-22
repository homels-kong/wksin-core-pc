/**
 * wksin项目配置文件
 */

module.exports = {
   webpackBase: {
       entry: {
           index: ['./client/entries/index/app.js']
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