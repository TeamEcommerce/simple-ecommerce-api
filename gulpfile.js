const gulp = require('gulp'),
      gulpMerge = require('gulp-merge'),
      concat = require('gulp-concat')
      removeEmptyLines = require('gulp-remove-empty-lines');;

gulp.task('swagger', function () {
  return gulpMerge(
    gulp.src([
        'api/swagger/info/info.yaml',
        'api/swagger/tag/index.yaml',
        'api/swagger/tag/category.yaml',
        'api/swagger/path/index.yaml',
        'api/swagger/path/category.yaml',
        'api/swagger/path/swagger.yaml',
        'api/swagger/definition/index.yaml',
        'api/swagger/definition/error_response.yaml',
        'api/swagger/definition/category.yaml',
      ])
    )

    .pipe(concat('swagger.yaml'))
    .pipe(removeEmptyLines())
    .pipe(gulp.dest('api/swagger/'));
});

gulp.task('build', ['swagger']);