---
title: LaTeX Recipes
permalink: /
---

<ul>
  {%- for post in collections.recipes -%}
  <li>
    <a href="{{ post.url | url }}">{{ post.data.title }}</a>
  </li>
  {%- endfor -%}
</ul>
