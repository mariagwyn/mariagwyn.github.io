jQuery(function($) {
  $("#wit-feed").rss("https://womenintheology.org/author/mariagwyn/feed",
  {
    limit: 6,
    dateFormat: 'D MMM, YYYY',
    layoutTemplate: "{entries}",
    entryTemplate:'<div class="feed-item column"><h5><a href="{url}" target="_blank">{title}</a></h5><div class="thumb medium-4"><img src="{teaserImageUrl}"></div><small>{date}</small><br/>{shortBody}... <br/><a href="{url}" target="_blank" class="readmore">read more ››</a></div>'
  }),
  $("#deip-feed").rss("http://deiprofundis.org/feed",
  {
    limit: 3,
    dateFormat: 'D MMM, YYYY',
    layoutTemplate: "{entries}",
    entryTemplate:'<div class="feed-item column"><h5><a href="{url}" target="_blank">{title}</a></h5><small>{date}</small><br/>{shortBody}... <br/><a href="{url}" target="_blank" class="readmore">read more ››</a></div>'
  })
})
