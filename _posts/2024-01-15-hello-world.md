---
layout: post
title: "Hello World: Getting Started with This Blog"
date: 2024-01-15
math: true
footnotes: true
---

This is my first blog post. Here I'll share thoughts on software engineering, research, and whatever else interests me.

<!--more-->

Welcome to my corner of the internet[^1]!

## Writing with Markdown

Jekyll makes it easy to write posts using Markdown[^markdown]. You can use **bold**, *italics*, and `inline code`.

### Code Blocks

Here's an example Python function:

```python
def fibonacci(n):
    """Generate the first n Fibonacci numbers."""
    fib = [0, 1]
    for i in range(2, n):
        fib.append(fib[i-1] + fib[i-2])
    return fib[:n]

print(fibonacci(10))
```

And some JavaScript:

```javascript
const greet = (name) => {
  console.log(`Hello, ${name}!`);
};

greet('World');
```

## Math Support

This blog supports LaTeX equations via KaTeX. Here's the quadratic formula:

$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

And Einstein's famous equation inline: $E = mc^2$.

You can also write display equations:

$$\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}$$

## Lists and Quotes

Some things I enjoy:

- Building software
- Reading papers
- Learning new things

> "The best way to predict the future is to invent it." — Alan Kay

## What's Next

Stay tuned for more posts on:

1. Technical deep-dives
2. Project updates
3. Interesting problems I've encountered

Thanks for reading!

[^1]: Welcome to my corner of the internet! This blog is built with Jekyll and hosted on GitHub Pages.

[^markdown]: Markdown was created by John Gruber in 2004. It's designed to be easy to read and write, with a simple syntax that converts to HTML.
