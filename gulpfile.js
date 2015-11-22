var gulp = require('gulp');
var imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache');
var browserSync = require('browser-sync');
var connect = require('gulp-connect');
// var pandoc = require('gulp-pandoc');
var shell = require('gulp-shell');

var content_dir = "content";

gulp.task('browser-sync', function() {
  browserSync({
    server: {
       baseDir: "./dist/"
    }
  });
});

gulp.task('bs-reload', function () {
  browserSync.reload();
});

// gulp.task('connect', function() {
//   connect.server({
//     root: 'dist',
//     livereload: true
//   });
// });

gulp.task('pandoc:pdf', shell.task([
  'sh pandoc-pdf.sh'
]));

gulp.task('pandoc:latex', shell.task([
  'sh pandoc-latex.sh'
]));

gulp.task('pandoc:html', ['copy'], shell.task([
  'sh pandoc-html.sh'
]));

gulp.task('pandoc:md', shell.task([
  'sh pandoc-md.sh'
]));

gulp.task('pandoc', ['pandoc:pdf', 'pandoc:latex', 'pandoc:html', 'pandoc:md']);

gulp.task('images', function(){
  gulp.src('src/images/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('dist/images/'));
});

gulp.task('copy', function () {
  gulp .src('templates/style.css')
    .pipe(gulp.dest('dist'))
})

gulp.task('default', ['pandoc:html', 'browser-sync'], function(){
  gulp.watch(content_dir+"/**/*.md", ['pandoc:html']);
  gulp.watch("images/**/*.jpg,png", ['images']);
  gulp.watch("dist/*.html", ['bs-reload']);
});

gulp.task('build', ['images', 'pandoc']);