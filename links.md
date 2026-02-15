---
layout: page
title: Links
description: A repository of link I find interesting. I try to only add stuff I think is in the 95th+ percentile for value added.
permalink: /links/
---

<div class="links-filter">
  <label class="filter-label" for="links-filter">Filter by month:</label>
  <select class="filter-select" id="links-filter">
    <option value="">All</option>
  </select>
</div>

{% assign sorted_links = site.data.links | sort: "date" | reverse %}

<ul class="link-list">
  {% for link in sorted_links %}
  <li class="link-item" data-date="{{ link.date | date: '%Y-%m' }}">
    <div class="link-title">
      <a href="{{ link.url }}" target="_blank" rel="noopener noreferrer">{{ link.title }}</a>
    </div>
    <div class="link-meta">{{ link.date | date: "%B %d, %Y" }}</div>
    {% if link.description %}
    <p class="link-description">{{ link.description }}</p>
    {% endif %}
  </li>
  {% endfor %}
</ul>

{% if site.data.links.size == 0 %}
<p>No links yet. Check back soon!</p>
{% endif %}

<script src="{{ '/assets/js/links-filter.js' | relative_url }}" defer></script>
