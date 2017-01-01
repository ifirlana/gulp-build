var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");

// styles
gulp.task("styles", function () {
    return gulp.src("css/*.css")
        .pipe(concat("all.css"))
        .pipe(gulp.dest("dist/"));
});

// scripts
gulp.task("scripts", function () {
    return gulp.src("js/*.js")
        .pipe(concat("all.js"))
        .pipe(uglify())
        .pipe(gulp.dest("dist/"));
});

// watch
gulp.task("watch", function () {
    gulp.watch("css/*.css", "styles");
    gulp.watch("js/*.js", "scripts");
});

// default
gulp.task("default", gulp.parallel("styles", "scripts", "watch"));