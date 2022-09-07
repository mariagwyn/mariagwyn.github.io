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
