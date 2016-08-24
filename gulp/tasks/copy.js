var gulp = require("gulp");
var argv = require("yargs").argv;

gulp.task(
    "copy",
    function (cb) {
        console.log("START! copy.dist");

        console.log("argv.to: " + argv.to);
        if (argv.to && argv.to != "undefined") {
            gulp.src(["./**/*", "!./src", "!./src/**/*", "!./node_modules", "!./node_modules/**/*"])
                .pipe(gulp.dest(argv.to))
                .on(
                    "end",
                    function () {
                        console.log("END! copy.dist");
                        cb();
                    }
                );


        }else {
            console.log("WARNING! copy.dist can't find argv.to!");
            cb();
        }
    }
);