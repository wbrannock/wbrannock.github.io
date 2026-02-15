---
layout: page
title: null
---

<div class="about-section" markdown="1">

# About

Hello! I'm **William Brannock** (I also go by Will), a graduate student currently studying machine learning and data science at the [University of Virginia](https://www.virginia.edu/). In particular, I'm interested in deep learning and trying to better understand how large language models reflect human values. 

Previously, I worked for 3 years trying to increase vaccination uptake in Virginia using data analytics and statistical modeling. Before that, I completed a B.S. in Systems Engineering from [Virginia Tech](https://www.vt.edu/). Outside of school and work, some of my hobbies include watching [college basketball](https://kenpom.com/), learning new things, and reading science fiction.

    
## Academic & Professional Interests

- Deep Learning
- Large Language Models (LLMs)
- ML/AI Interpretability
- MLOps

## Recent Posts

{% for post in site.posts limit:5 %}
- [{{ post.title }}]({{ post.url | relative_url }}) — {{ post.date | date: "%B %d, %Y" }}
{% endfor %}

{% if site.posts.size == 0 %}
*No posts yet.*
{% endif %}

## Interesting Links

{% assign sorted_links = site.data.links | sort: "date" | reverse %}
{% for link in sorted_links limit:5 %}
- [{{ link.title }}]({{ link.url }}){:target="_blank" rel="noopener noreferrer"} — {{ link.date | date: "%B %d, %Y" }}
{% endfor %}

[See all links &rarr;](/links/)

</div>
