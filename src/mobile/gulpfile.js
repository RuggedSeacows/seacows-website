var replace = require('gulp-replace');
const gulp = require('gulp')

gulp.task("3hao",function(){
  gulp.watch("source/*.less", async() => {
    gulp.src('source/*.less')
      .pipe(replace(/(\d+)px/g, function(match, p1){
      return Number(p1) / 375 * 100 + 'vw';
    }))
    .pipe(gulp.dest('style'));
  })
})