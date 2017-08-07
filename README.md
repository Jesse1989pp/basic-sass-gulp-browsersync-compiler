# Basically a simple scss compiler using gulp.
A basic Sass compiler to replace previous compilers in existing projects.
Browsersync and sourcemaps are added for easy development.

## Install
1. Drop the content into the desired folder.
2. Enter install commands; ``yarn install`` or ``npm install``
3. Change placeholders in gulpfile
  * SassDir; Folder with scss files
  * cssDir; Folder for compiled css files
  * Browsersync - proxy; Local website to use for browserSync
  * includePaths; Optional to add required scss files. For example existing bower components
4. Start gulp; ``gulp``

## Familiar fails
* The paths are not relative to gulpfile.
* Imported sass files are not underscored. Gulp tries to create a unique .css in that case, which could lead to errors.
* includedPaths are not added properly.
* Forgot to press enter
