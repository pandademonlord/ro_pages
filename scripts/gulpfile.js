var gulp = require('gulp')
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename');
	
gulp.task('scripts', function(){
	gulp.src(['**/*.js', '!**/*.min.js'])
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify())
		.pipe(gulp.dest('.'));
});

gulp.task('watch', function(){
	gulp.watch('**/*.js', ['scripts']);
});

gulp.task('default',['scripts', 'watch']);