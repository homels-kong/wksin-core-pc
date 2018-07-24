/**
 * wksin项目配置文件
 */

module.exports = {
   base: {
       entry: {
           index: ['./client/entries/index/app.js']
       }
   },
   plugin: {
       /**
        * 模版路径
        */
       templatePath: [
          './client/template/index.ejs'
       ]
   },
   /**
    * 是否开启语法检查
    */
   eslint: false
}