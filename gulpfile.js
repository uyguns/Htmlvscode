const gulp = require('gulp');
const browserSync = require('browser-sync').create()
const sass = require('gulp-sass')
const nodemon= require('gulp-nodemon')
const prefix = require('gulp-autoprefixer')
const sourcemaps = require('gulp-sourcemaps')
const reload = browserSync.reload

 

gulp.task('browser-sync', function () {
	browserSync.init({
	  server: {
		baseDir: './'
	  }
	})
	gulp.watch('./*.html').on('change',reload)
	gulp.watch('./scss/**/*.scss', ['css'])
	  gulp.watch('./js/**/*.js', reload)

	
  })
  gulp.task('start', function(){
	return nodemon({
	  script:'server.js'
	})
	
	  })
	  
	  gulp.task('html', (done) => {
	  browserSync.reload()
	  done()
	})
 
  gulp.task('css', () => {
	return gulp.src('./scss/main.scss')
	.pipe(sass())
	.pipe(prefix())
	.pipe(gulp.dest('./'))
	.pipe(browserSync.stream())
})
	
  gulp.task('default', ['browser-sync', 'html', 'css'])

  
 

  
  