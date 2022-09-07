Update Notes:

Removing babel to see if it is installed as a dependency of something else. Might need to add back? See https://babeljs.io/docs/en/env/

"babel-plugin-transform-es2015-arrow-functions": "^6.22.0",
"babel-plugin-transform-es2015-block-scoped-functions": "^6.22.0",
"babel-plugin-transform-es2015-block-scoping": "^6.26.0",
"babel-plugin-transform-es2015-classes": "^6.24.1",
"babel-plugin-transform-es2015-destructuring": "^6.23.0",
"babel-plugin-transform-es2015-modules-commonjs": "^6.26.2",
"babel-plugin-transform-es2015-parameters": "^6.24.1",
"babel-plugin-transform-es2015-shorthand-properties": "^6.24.1",
"babel-plugin-transform-es2015-spread": "^6.22.0",
"babel-plugin-transform-es2015-template-literals": "^6.22.0",
"babel-preset-es2015": "^6.3.13",

Foundation gulp js compile files list in config.yml is out of date. needs updating.

# Core Foundation files, all Foundation components need this!
- "node_modules/foundation-sites/dist/js/plugins/foundation.core.js"

# Individual Foundation components
# If you aren't using a component, just remove it from the list

# Foundation Utilities
- "node_modules/foundation-sites/dist/js/plugins/foundation.util.box.js"
- "node_modules/foundation-sites/dist/js/plugins/foundation.util.imageLoader.js"
- "node_modules/foundation-sites/dist/js/plugins/foundation.util.keyboard.js"
- "node_modules/foundation-sites/dist/js/plugins/foundation.util.mediaQuery.js"
- "node_modules/foundation-sites/dist/js/plugins/foundation.util.motion.js"
- "node_modules/foundation-sites/dist/js/plugins/foundation.util.nest.js"
- "node_modules/foundation-sites/dist/js/plugins/foundation.util.timer.js"
- "node_modules/foundation-sites/dist/js/plugins/foundation.util.timerAndImageLoader.js"
- "node_modules/foundation-sites/dist/js/plugins/foundation.util.touch.js"
- "node_modules/foundation-sites/dist/js/plugins/foundation.util.triggers.js"

# Foundation Plugins
- "node_modules/foundation-sites/dist/js/plugins/foundation.abide.js"
- "node_modules/foundation-sites/dist/js/plugins/foundation.equalizer.js"
- "node_modules/foundation-sites/dist/js/plugins/foundation.interchange.js"
- "node_modules/foundation-sites/dist/js/plugins/foundation.toggler.js"
- "node_modules/foundation-sites/dist/js/plugins/foundation.smoothScroll.js"
- "node_modules/foundation-sites/dist/js/plugins/foundation.sticky.js"

# Foundation Components
- "node_modules/foundation-sites/dist/js/plugins/foundation.accordion.js"
- "node_modules/foundation-sites/dist/js/plugins/foundation.accordionMenu.js"
- "node_modules/foundation-sites/dist/js/plugins/foundation.drilldown.js"
- "node_modules/foundation-sites/dist/js/plugins/foundation.dropdown.js"
- "node_modules/foundation-sites/dist/js/plugins/foundation.dropdownMenu.js"
- "node_modules/foundation-sites/dist/js/plugins/foundation.magellan.js"
- "node_modules/foundation-sites/dist/js/plugins/foundation.offcanvas.js"
- "node_modules/foundation-sites/dist/js/plugins/foundation.orbit.js"
- "node_modules/foundation-sites/dist/js/plugins/foundation.responsiveAccordionTabs.js"
- "node_modules/foundation-sites/dist/js/plugins/foundation.responsiveMenu.js"
- "node_modules/foundation-sites/dist/js/plugins/foundation.responsiveToggle.js"
- "node_modules/foundation-sites/dist/js/plugins/foundation.reveal.js"
- "node_modules/foundation-sites/dist/js/plugins/foundation.slider.js"
- "node_modules/foundation-sites/dist/js/plugins/foundation.tabs.js"
- "node_modules/foundation-sites/dist/js/plugins/foundation.tooltip.js"
- "node_modules/foundation-sites/dist/js/plugins/foundation.zf.responsiveAccordionTabs.js"
