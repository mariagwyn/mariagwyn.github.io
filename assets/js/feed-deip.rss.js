jQuery(function($) {
  $("#deip-feed").rss("http://deiprofundis.org/feed",
  {
    limit: 3,
    dateFormat: 'D MMM, YYYY',
    layoutTemplate: "{entries}",
    entryTemplate:'<div class="feed-item column is-one-third"><h5><a href="{url}" target="_blank">{title}</a></h5><small>{date}</small><br/>{shortBody}... <br/><a href="{url}" target="_blank" class="readmore">read more ››</a></div>'
  })
})
