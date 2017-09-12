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
        'api/swagger/tag/customer.yaml',
        'api/swagger/tag/user.yaml',
        'api/swagger/tag/image.yaml',
        'api/swagger/path/index.yaml',
        'api/swagger/path/category.yaml',
        'api/swagger/path/customer.yaml',
        'api/swagger/path/user.yaml',
        'api/swagger/path/image.yaml',
        'api/swagger/path/swagger.yaml',
        'api/swagger/definition/index.yaml',
        'api/swagger/definition/error_response.yaml',
        'api/swagger/definition/category.yaml',
        'api/swagger/definition/customer.yaml',
        'api/swagger/definition/user.yaml',
      ])
    )
    .pipe(concat('swagger.yaml'))
    .pipe(removeEmptyLines())
    .pipe(gulp.dest('api/swagger/'));
});

gulp.task('build', ['swagger']);
