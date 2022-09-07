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
[NPM](https://www.npmjs.com/)  
[Bulma](https://bulma.io/)  

### Local Installation

Git clone this repository, or download it into a directory of your choice. Inside the directory run   
1. `bundle install` (reference: Gemfile and Gemfile.lock)
2. Run `bundle exec jekyll serve` to create a local site that updates as files are modified.
3. To build CSS files, run `npm run css-build` and to watch for CSS changes, run `npm run css-watch` (see package.json for other commands).

## Structure & Design:
For the most part, the site follows a typical Jekyll structure. The theme utilizes Bulma.
- **Theme**: [Bulma](https://bulma.io/) is the CSS framework built via SASS.
- **Media**: [Plyr.io](https://plyr.io/) is the media player, is called via CDN, and embedded via mediaembed.html when a media file is specified in the frontmatter.


### assets
The ```assets``` directory holds all the images, css, fonts, js and documents which will be included in the Jekyll build. The ```_sass``` folder holds all the unprocessed SASS files.
