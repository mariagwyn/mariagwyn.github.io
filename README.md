
# Maria Gwyn McDowell's site:
- Powered by Jekyll
- Built with [Foundation 6](http://foundation.zurb.com)
- Built from [Foundation Jekyll](https://github.com/aaronkwhite/foundation-jekyll), v. 1.5.0
- Gulpified with help from [Codegaze](https://codegaze.github.io/2016/01/09/a-jekyll-workflow-with-gulp/)

## Installation:

**Requirements:**
* np

**Install Bower Packages:**
```sh
$ bower install
$ npm install
```

```bower install``` adds:
* Zurb Foundation
* Font Awesome
* Referenced files: ```bower.json``` and ```.bowerrc```.

```npm install``` adds Gulp and its packages.

Referenced files: ```package.json``` and ```gulpfile.js```.

## Structure:
For the most part, the site follows a typical Jekyll structure. However, the theme utilizes Zurb Foundation, and the builds are through Gulp rather than Jekyll. This allows for various optimizations, automated tasks, etc.

### assets and assets/_dev
The ```assets``` directory holds all the images, css, fonts, js and documents which will be included in the Jekyll build. Within ```assets```, the ```_dev``` folder holds all the unprocessed SCSS, JS, Foundation and image files. Running the install tasks above should build the required bower and node_modules folders.
