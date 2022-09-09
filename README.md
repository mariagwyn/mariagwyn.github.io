# Maria Gwyn McDowell's site:
- Powered by [Jekyll](https://jekyllrb.com/)
- Built with [Bulma](https://bulma.io/)
- Built from [Bulma Clean Theme](https://github.com/chrisrhymes/bulma-clean-theme)

## Installation:

### Required
[Git](https://git-scm.com)  
[Ruby and Ruby Gems](https://rvm.io/rvm/install)  
[Jekyll](http://jekyllrb.com/) - `gem install jekyll`  
[NPM](https://www.npmjs.com/)  
[Bulma](https://bulma.io/)  

### Local Installation

Git clone this repository, or download it into a directory of your choice. Inside the directory run   
1. `npm install` (refernce: pachage.json)
2. `bundle install` (reference: Gemfile and Gemfile.lock)
3. Run `bundle exec jekyll serve` to create a local site that updates as files are modified.
4. To build CSS files, run `npm run css-build` and to watch for CSS changes, run `npm run css-watch` (see package.json for other commands).

## Structure & Design:
For the most part, the site follows a typical Jekyll structure. The theme utilizes Bulma.
- **Theme**: [Bulma](https://bulma.io/) is the CSS framework built via SASS.
- **Media**: [Plyr.io](https://plyr.io/) is the media player, is called via CDN, and embedded via mediaembed.html when a media file is specified in the frontmatter.


### assets
The ```assets``` directory holds all the images, css, fonts, js and documents which will be included in the Jekyll build. The ```_sass``` folder holds all the unprocessed SASS files.
