---
layout: page
title: null
---

<div class="about-section" markdown="1">

# About

Hello! I'm **William (or Will) Brannock** , a graduate student currently studying machine learning and data science at the [University of Virginia](https://www.virginia.edu/). In particular, I'm interested in large language models and trying to measure how they align with human values. 

Previously, I spent three years applying data analytics and statistical modeling to increase routine vaccination uptake across Virginia. Before that, I completed a B.S. in Systems Engineering from [Virginia Tech](https://www.vt.edu/). Outside of school and work, some of my hobbies include watching [college basketball](https://kenpom.com/), learning new things, and reading science fiction.

    
## Academic & Professional Interests

- Deep Learning, broadly construed
- Large Language Models (LLMs)
- Finetuning Model (SFT and GRPO)
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
