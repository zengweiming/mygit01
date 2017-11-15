
//使用插件压缩js文件 gulp-uglify


var gulp = require('gulp');
var uglify = require('gulp-uglify'); //js压缩插件
var babel =require('gulp-babel');
//var bom = require('gulp-bom'); //解决中文乱码插件
//var minifyCss = require('gulp-minify-css'); //css压缩插件
//var minifyHtml = require('gulp-minify-html'); //html压缩插件
//var imagemin = require('gulp-imagemin'); //图片压缩相关插件
//var pngquant = require('imagemin-pngquant'); //png图片压缩插件
//var rename = require('gulp-rename'); //重命名插件

//var obj = {
//	removeComments: true, //清除HTML注释
//	collapseWhitespace: true, //压缩HTML
//	collapseBooleanAttributes: true,//省略布尔属性的值<input checked="true"/> ==> <input checked/>
//	removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
//	removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
//	removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
//	minifyJS: true, //压缩页面JS
//	minifyCSS: true //压缩页面CSS
//}


//任务
gulp.task("jsTask", function(){
	
	gulp.src("src/js/*.js")
		.pipe(babel({"presets": ["es2015"]})) //es6转es5	
		.pipe( uglify() )
		.pipe( gulp.dest("dest/js") );
})

//默认任务
gulp.task("default", ["jsTask"]);








