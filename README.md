# How to build

+ Since angular `ng build` command will create a directory named same as project in dist, consider write a script or a command to move the build result to the dist dictory

+ For a quick look, just run `npm run electron`, this will start the application immediately and link the homepage as dist/index.html

# Package the application

+ Make sure you have install electron-packager already, then package application as usual as any electron application( 'electron-packager .')

# Caution

+ If you change the angular index.html, please notice that you have to make sure the index.html  element ` <base href="/">` has been changed to `<base href="./">` correctly

# NgMaterialDesignSeed

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
