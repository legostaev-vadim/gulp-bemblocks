# gulp-bemblocks

**Pug** plugin for defining page blocks in **Gulp**

# Install

```
npm install gulp-bemblocks --save-dev
```

## Setup

```js
var gulp = require('gulp');
var pug = require('gulp-pug');
var bemblocks = require('gulp-bemblocks');

gulp.task('pages', function () {
    return gulp.src('app/**/*.pug')
        .pipe(pug({
            plugins: [bemblocks]
        }))
        .pipe(gulp.dest('dist'));
});
```

## License

ISC License

## Author

Legostaev Vadim (*legostaev.vadim@mail.ru*)
