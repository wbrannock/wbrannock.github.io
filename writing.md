---
layout: page
title: Writing
description: Thoughts on AI, basketball, and other stuff.
permalink: /writing/
---

<ul class="post-list">
  {% for post in site.posts %}
  <li class="post-item">
    <a href="{{ post.url | relative_url }}" class="post-link">{{ post.title }}</a>
    <div class="post-meta">{{ post.date | date: "%B %d, %Y" }}</div>
    {% if post.excerpt %}
    <p class="post-excerpt">{{ post.excerpt | strip_html | strip_footnotes | truncate: 160 }}</p>
    {% endif %}
  </li>
  {% endfor %}
</ul>

{% if site.posts.size == 0 %}
<p>No posts yet. Check back soon!</p>
{% endif %}
