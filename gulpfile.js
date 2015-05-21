var gulp = require('gulp'); 

gulp.task('console', function(){
  console.log('gulpp')
})

gulp.task('watch', function() {
  gulp.watch('src/*.js*', ['console']);
});

gulp.task('default', ['watch']);
