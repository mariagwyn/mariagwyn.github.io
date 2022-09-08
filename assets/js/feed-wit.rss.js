jQuery(function($) {
  $("#wit-feed").rss("https://womenintheology.org/author/mariagwyn/feed",
  {
    limit: 9,
    dateFormat: "MMMM Do, YYYY",
    layoutTemplate: "{entries}",
    entryTemplate:'<div class="feed-item column is-one-third"><h5><a href="{url}" target="_blank">{title}</a></h5><small>{date}</small><br/>{shortBody}... <br/><a href="{url}" target="_blank" class="readmore">read more ››</a></div>'
  })
})
