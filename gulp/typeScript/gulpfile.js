const gulp = require('gulp');
const ts = require('gulp-typescript');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const tsProject = ts.createProject('tsconfig.json');

gulp.task('default', () => {
	return tsProject.src()
		.pipe(tsProject())
		.pipe(uglify())
		.pipe(concat('codigo.min.js'))
		.pipe(gulp.dest('build'));
});