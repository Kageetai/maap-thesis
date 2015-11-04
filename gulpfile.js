var gulp = require('gulp');
var imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache');
// var browserSync = require('browser-sync');
var connect = require('gulp-connect');
var pandoc = require('gulp-pandoc');

var content_dir = "content";

var exec = require('gulp-exec');

gulp.task('task', function (cb) {
  exec('pandoc '+content_dir+'/*.md -o dist/maap.pdf --latex-engine=xelatex', function (err, stdout, stderr) {
    console.log(err);
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})

gulp.task('browser-sync', function() {
  browserSync({
    server: {
       baseDir: "./"
    }
  });
});

// gulp.task('bs-reload', function () {
//   browserSync.reload();
// });

gulp.task('connect', function() {
  connect.server({
    root: 'dist',
    livereload: true
  });
});

gulp.task('docs:pdf', function() {
  gulp.src(content_dir+'/*.md')
      .pipe(pandoc({
        from: 'markdown',
        to: 'latex',
        ext: '.pdf',
        args: ['--smart', '--standalone', '--latex-engine=xelatex']
      }))
      .pipe(gulp.dest('dist/'));
});

gulp.task('docs:html', function() {
  gulp.src(content_dir+'/*.md')
      .pipe(pandoc({
        from: 'markdown',
        to: 'html5',
        ext: '.html',
        args: ['--smart', '--standalone']
      }))
      .pipe(gulp.dest('dist/'));
    // browserSync.reload();
    connect.reload();
});

gulp.task('docs', ['docs:pdf', 'docs:html']);

gulp.task('images', function(){
  gulp.src('src/images/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('dist/images/'));
});

gulp.task('default', ['connect'], function(){
  gulp.watch(content_dir+"/**/*.md", ['docs:html']);
  gulp.watch("images/**/*.jpg,png", ['images']);
  //gulp.watch("*.html", ['bs-reload']);
});