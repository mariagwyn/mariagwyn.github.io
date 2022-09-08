---
layout: page
title: "Welcome to MariaGwyn"
subtitle: Theology | Ethics | Liberation | Jesus
image: chi.jpg
special: home
bio: true
hide_hero: true
post-list: medium
fullwidth: true
support:
  - jquery-rss
uniquejs:
  - feed-wit.rss.js
  - feed-deip.rss.js
---
<div class="columns">
  <div class="column is-9">
  <h2 class="small subheader border">Ekklesia<small class="float-right"><a href="/ekklesia/">See all</a></small></h2>
    {% for post in site.categories.ekklesia limit: 8 %}
      {% include post-list.html %}
    {% endfor %}
  </div>
  <div class="column is-3">
  <h2 class="small subheader border">Academia<small class="float-right"><a href="/academia/">See all</a></small></h2>
    {% for post in site.categories.academia limit: 4 %}
      {% include article-list.html %}
    {% endfor %}
  </div>
</div>
{% include resumes-twocol.html %}
<section class="feeds">
  <h4 class="feed-title">Recent <a href="http://womenintheology.org" target="_blank">WIT</a> Posts</h4>
  <div id="wit-feed" class="wit columns is-multiline"></div>
  <h4 class="feed-title">Visit <a href="http://deiprofundis.org" target="_blank">DeiProfundis</a><small> to read Maria's earliest theological blogging.</small></h4>
  <div id="deip-feed" class="deip columns is-multiline"></div>
</section>
