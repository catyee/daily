var express = require('express');
var path = require('path');
var app = express(); // 生成express实例
// 设置port
app.set('port', process.env.port || 3000);
// 试图存放目录
app.set('views', path.join(__dirname, 'views'));
// 设定view engine变量，指的是网页模板引擎
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'src')));
console.log(app.get('port'))
app.listen(app.get('port'));
app.get('/',function(req,res) {
    res.send('hello,world')
})

// node请求后台接口吗？ 模板引擎？ 快？如何部署？ webpack配置？ 