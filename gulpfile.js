var gulp=require('gulp'),
watch=require('gulp-watch'),
autoPrefixer=require('autoprefixer'),
postCss=require('gulp-postcss'),
nestedCss=require('postcss-nested'),
cssVars=require('postcss-simple-vars'),
cssImport=require("postcss-import"),
browserSync=require('browser-sync');
gulp.task("default",function(){
    console.log("default task called.....")
})
gulp.task("html",function(){
    console.log("updated html");
})
gulp.task("css",function(){
    return gulp.src("./assets/styles/style.css")
    .pipe(postCss([cssImport,autoPrefixer,nestedCss,cssVars]))
    .pipe(gulp.dest("./Temp/styles"));
})
gulp.task("cssInjecter",['css'],function(){
    return gulp.src('./assets/styles/style.css')
    .pipe(browserSync.stream());
})
gulp.task("watch",function(){
    browserSync.init({
        server:{
        baseDir:'./'
        }
    })
    watch("./index.html",function(){
        browserSync.reload();
    });
    watch("./assets/styles/**/*.css",function(){
        gulp.start("cssInjecter");
    })
})
