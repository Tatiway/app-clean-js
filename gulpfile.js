
//мой файл

var gulp = require('gulp'),
		server = require('gulp-server-livereload'),
		sass = require('gulp-sass'),
		autoprefixer = require('gulp-autoprefixer'),
		minifycss = require('gulp-minify-css'),
		rename = require('gulp-rename'),
		mainBowerFiles = require('gulp-main-bower-files');




gulp.task('bower-files', function() {
    return gulp.src('./bower.json')
        .pipe(mainBowerFiles({
            overrides: {
                jquery: {
                    main: ['./dist/jquery.min.js']
                },
            }
        }))
        .pipe(gulp.dest('./app/libs'));
});

gulp.task('webserver', function(){
	gulp.src('app')
	.pipe(server({
		livereload:true,
		directoryListing:false,
		defaultFile:'index.html',
		open:true
	}));
});


gulp.task('styles',function () {
  gulp.src('sass/*.sass')
    .pipe(sass({
		includePaths: require('node-bourbon').includePaths
	}).on('error', sass.logError))
    .pipe(rename({suffix: '.min', prefix : '_'}))
		.pipe(autoprefixer({
		browsers: ['last 15 versions'],
		cascade: false
	}))
	.pipe(minifycss())
	.pipe(gulp.dest('app'));
});


gulp.task('watch', function() {
	gulp.watch('sass/*.sass', ['styles']);
	gulp.watch('bower.json', ['bower-files']);
});

gulp.task('default', ['styles','bower-files','watch'], function() {

});