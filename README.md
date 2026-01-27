# William Brannock's Personal Site

Source code for my personal website and blog. Built with Jekyll and deployed on GitHub Pages.

## Features

- **Light/Dark Mode** - Toggle with localStorage persistence, respects system preference
- **LaTeX Support** - KaTeX integration for math equations (add `math: true` to post front matter)
- **Syntax Highlighting** - Rouge highlighter with theme-aware colors
- **Responsive Design** - Mobile-friendly layout
- **SEO Optimized** - jekyll-seo-tag, sitemap, and RSS feed

## Local Development

### Prerequisites

- Ruby 3.0+ (tested with 3.2.6)
- Bundler

### Setup

```bash
# Install dependencies
bundle install

# Start development server
bundle exec jekyll serve
```

Visit `http://localhost:4000` to view the site.

### Using rbenv (recommended)

```bash
# Install rbenv
brew install rbenv ruby-build

# Add to ~/.zshrc
echo 'eval "$(rbenv init - zsh)"' >> ~/.zshrc
source ~/.zshrc

# Install Ruby
rbenv install 3.2.6
rbenv local 3.2.6

# Install gems and run
bundle install
bundle exec jekyll serve
```

## Deployment

Deployed via GitHub Pages. Pushing to `main` triggers an automatic build and deploy.

## Configuration

- **Site settings**: `_config.yml`
- **Navigation**: `_data/navigation.yml`
- **Social links**: `_data/social.yml`
- **Colors**: `_sass/_variables.scss` (accent color, etc.)

## Writing Posts

Create files in `_posts/` with format `YYYY-MM-DD-title.md`:

```markdown
---
layout: post
title: "Your Post Title"
date: 2024-01-15
math: true  # Enable LaTeX support (optional)
---

Your content here...
```

### Math Equations

With `math: true` in front matter:

```markdown
Inline: $E = mc^2$

Display:
$$\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}$$
```

## Project Structure

```
├── _config.yml          # Site configuration
├── _data/               # Navigation and social links
├── _includes/           # Reusable HTML partials
├── _layouts/            # Page templates
├── _posts/              # Blog posts
├── _sass/               # SCSS stylesheets
├── assets/              # CSS, JS, images
├── index.md             # Homepage
├── writing.md           # Blog listing
└── projects.md          # Projects page
```

## License
None. Feel free to use this as a starter for your own site if you want too. 
