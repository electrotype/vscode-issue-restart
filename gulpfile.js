"use strict";

let gulp = require("gulp");
let nodemon = require("gulp-nodemon");

gulp.task("compile", function () {
    let execSync = require("child_process").execSync;
    let code = execSync("\"node_modules/.bin/tsc\"", { stdio: [0, 1, 2] });
});

gulp.task("watch", ["compile"], function () {
    gulp.watch("./**/*.ts", ["compile"]);
});

gulp.task("debug", ["watch"], function () {
    let stream = nodemon({
        "script": `src/app.js`,
        "nodeArgs": ["--debug-brk=5858", "--nolazy"],
        "ext": "js",
        "restartable": true
    });
});

