//Importar dependencias
const {src, dest, watch, parallel} = require('gulp');

//CSS
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');

//JS
const terser = require('gulp-terser-js');
const concat = require('gulp-concat');

//IMAGENES
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');

const rutas = {
    scss: 'src/scss/**/*.scss',
    js: 'src/js/**/*.js',
    imagenes: 'src/img/**/*',
    jquery: 'node_modules/jquery/dist/jquery.min.js',
    aos: 'node_modules/aos/dist/aos.js'
}

//------------------Funciones------------------//
function compilarCSS(done){

    src(rutas.scss)
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('build/css'));

    done();
}

function compilarJS(done){

    src(rutas.js)
    .pipe(sourcemaps.init())
    .pipe(concat('bundle.js'))
    .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('build/js'));

    done();
}

function minificarIMG(done) {  

    const opciones = {
        optimizationLevel: 3
    }

    src(rutas.imagenes)
    .pipe(cache(imagemin(opciones)))
    .pipe(dest('build/img'));

    done();
}

function watchArchivos(done) {
    
    watch(rutas.scss, compilarCSS);
    watch(rutas.js, compilarJS);
    watch(rutas.imagenes, minificarIMG);

    done();
}

function jquery(done){

    src(rutas.jquery)
    .pipe(dest('build/js'));

    done();
}

function aos(done){
    
    src(rutas.aos)
    .pipe(dest('build/js'));

    done();
}

exports.compilarCSS = compilarCSS;
exports.compilarJS = compilarJS;
exports.minificarIMG = minificarIMG;
exports.watchArchivos = watchArchivos;
exports.aos = aos;
exports.jquery = jquery;