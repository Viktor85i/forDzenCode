var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var uglifyjs = require('gulp-uglifyjs');
var cssnano  =  require('gulp-cssnano');
var rename = require('gulp-rename');
var del = require('del'); 
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant'); 
var autoprefixer = require('gulp-autoprefixer');
var cache = require('gulp-cache');

gulp.task('browser-sync', function() { 
	browserSync({
		server: { 
			baseDir: 'src'
		},
		notify: false
	});
});

gulp.task('sass', function(){ 
	return gulp.src('src/sass/**/*.scss') 
	.pipe(sass())
	.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'],{cascade: true})) 
	.pipe(gulp.dest('src/css'))
 	.pipe(browserSync.reload({
  			stream: true
	}));
});
gulp.task('css-libs', ['sass'], function() {
	return gulp.src('src/css/libs.css') 
	.pipe(cssnano())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('src/css')); 
});

gulp.task('scripts', function() {
	return gulp.src([ 
		'src/libs/jquery/dist/jquery.min.js'
	])
	.pipe(concat('libs.min.js')) 
	.pipe(uglifyjs()) 
	.pipe(gulp.dest('src/js'));
});
gulp.task('clean', function() {
	return del.sync('dist'); 
});
gulp.task('build', ['clean', 'sass', 'scripts','img'], function() {
	var buildCss = gulp.src([ 
		'src/css/style.css',
		'src/css/all.css',
		'src/css/libs.min.css'
	])
	.pipe(gulp.dest('dist/css'));
	var buildFonts = gulp.src('src/font/**/*') 
	.pipe(gulp.dest('dist/font'));
	var buildJs = gulp.src('src/js/**/*') 
	.pipe(gulp.dest('dist/js'));
	var buildHtml = gulp.src('src/*.html') 
	.pipe(gulp.dest('dist'));
	var buildImg = gulp.src('src/img/**/*') 
	.pipe(gulp.dest('dist/img'));
});

gulp.task('clear', function () {
	return cache.clearAll();
});

gulp.task('img', function() {
	return gulp.src('src/img/**/*') 
	.pipe(cache(imagemin({ 
		interlaced: true,
		progressive: true,
		svgoPlugins: [{removeViewBox: false}],
		use: [pngquant()]
	})))
	.pipe(gulp.dest('dist/img')); 
});

gulp.task('default', ['watch']);

gulp.task('watch', ['browser-sync','css-libs', 'scripts'], function() {
  gulp.watch('src/sass/**/*.scss', ['sass']);
  gulp.watch('src/js/**/*.js', browserSync.reload);
  gulp.watch('src/**/*.html', browserSync.reload);
});




