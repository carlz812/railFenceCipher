/**
 * Created by yuancheng.yuan on 2017/9/6.
 */
var gulp = require('gulp');
var uglifyjs = require('uglify-js'); // can be a git checkout
var rename = require('gulp-rename');
var composer = require('gulp-uglify/composer');
var pump = require('pump');
const babel = require('gulp-babel');

var minify = composer(uglifyjs, console);

// 编译并压缩js
gulp.task('convertJS', function () {
    return gulp.src('src/index.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist'))
})


gulp.task('compress', function (cb) {
    // the same options as described above
    return gulp.src('dist/index.js')
        .pipe(rename(function (path) {
            path.basename = "railFenceCipher.min";
            path.extname = ".js"
        }))
        .pipe(minify())
        .pipe(gulp.dest('dist'))
});
gulp.task('default', ['convertJS', 'compress'], function () {
    // 将你的默认的任务代码放在这
});