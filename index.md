---
layout: page
title: null
---

<div class="about-section" markdown="1">

# About

Hello! I'm **William Brannock**, a graduate student studying machine learning and data science at the University of Virginia.

Previously, I worked for 3 years in healthcare analytics and before that completed a B.S. in Systems Engineering from Virginia Tech. Outside of work, I enjoy watching college basketball (with KenPom open), playing trivia games of all kinds, and reading science fiction.



## Academic/Professional Interests

- Deep Learning
- Large Language Models
- ML/AI Interpretability
- MLOps

## Recent Posts

{% for post in site.posts limit:5 %}
- [{{ post.title }}]({{ post.url | relative_url }}) — {{ post.date | date: "%B %d, %Y" }}
{% endfor %}

{% if site.posts.size == 0 %}
*No posts yet.*
{% endif %}

</div>
