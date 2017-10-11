const gulp = require('gulp');
const babel = require('gulp-babel');
var sass = require('gulp-sass');
var notify = require('gulp-notify');


//---------------------------------------------------------------

//Babel

gulp.task('default', () =>
    gulp.src('src/app.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('dist'))
);



//Precompilador sass

//Tarea para compilar archivos sass a css
gulp.task('sass', function () {

//Ruta de la carpeta sass apuntando a los archivos `.scss`
 return gulp.src('./sass/**/*.scss')

//Compila los archivos `.scss` y muestra posibles errores
  .pipe(sass().on('error', sass.logError))

//Carpeta donde se guardaran los archivos `.css` compilado
 .pipe(gulp.dest('./css'))

//Mensaje gracias al plugin `gulp-notify`
.pipe(notify("Tarea sass terminada!"));
});

//Vuelve a ejecutar la tarea cuando se modifica algún archivo
gulp.task('watch', function(){
     gulp.watch('./sass/**/*', ['sass']);
});

//Tarea por defecto
  gulp.task('default',['watch', 'sass']);
