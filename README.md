
# Maria Gwyn McDowell's site:
- Powered by Jekyll
- Built with [Foundation 6](http://foundation.zurb.com)
- Built from [Foundation Jekyll](https://github.com/aaronkwhite/foundation-jekyll), v. 1.5.0
- Gulpified with help from [Codegaze](https://codegaze.github.io/2016/01/09/a-jekyll-workflow-with-gulp/)

## Installation:

### Required
[Git](https://git-scm.com)  
[Ruby and Ruby Gems](https://rvm.io/rvm/install)  
[Jekyll](http://jekyllrb.com/) - `gem install jekyll`  
[Bundler](http://bundler.io/) - `gem install bundler` (mac users may need sudo)  

[NodeJS](http://nodejs.org) - use the installer.  
[Yarn](https://yarnpkg.com/en/docs/install) - follow installation instructions. Yarn is installed per-project.
[GulpJS](https://github.com/gulpjs/gulp) - `npm install -g gulp` (mac users may need sudo)

### Local Installation

Git clone this repository, or download it into a directory of your choice. Inside the directory run   
1. `yarn` (reference: package.json)  
2. `bundle install` (reference: Gemfile and Gemfile.lock)  

## Structure:
For the most part, the site follows a typical Jekyll structure. However, the theme utilizes Zurb Foundation, and the builds are through Gulp rather than Jekyll. This allows for various optimizations, automated tasks, etc.

### assets and assets/_dev
The ```assets``` directory holds all the images, css, fonts, js and documents which will be included in the Jekyll build. The ```_dev``` folder holds all the unprocessed SCSS, JS, Foundation and image files. You should not have to modify this folder, it is for local use only. Running the install tasks above should build the required bower and node_modules folders.
