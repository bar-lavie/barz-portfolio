"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
let cleanCSS = require("gulp-clean-css");

const minify = require("gulp-minify");

gulp.task("sass", function() {
  return gulp
    .src("./assets/style/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("./assets/style"));
});

gulp.task("jscompress", function() {
  gulp
    .src("./assets/main.js")
    .pipe(
      minify({
        ext: {
          min: ".min.js"
        }
      })
    )
    .pipe(gulp.dest("./assets"));
});

gulp.task("project:watch", function() {
  gulp.watch("./assets/style/*.scss", ["sass"]);
  gulp.watch("./assets/main.js", ["jscompress"]);
});
