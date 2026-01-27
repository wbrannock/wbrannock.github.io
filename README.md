# Personal Blog

A minimalist personal blog built with Jekyll and designed for GitHub Pages deployment.

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

## Deployment to GitHub Pages

### Option 1: User/Organization Site (username.github.io)

1. Create a repository named `username.github.io`
2. Push this code to the `main` branch
3. Go to **Settings > Pages**
4. Source should automatically be set to deploy from `main` branch
5. Site will be live at `https://username.github.io`

### Option 2: Project Site (username.github.io/repo-name)

1. Create a repository with any name
2. Push this code to the `main` branch
3. Go to **Settings > Pages**
4. Set source to `main` branch
5. Update `_config.yml`:
   ```yaml
   baseurl: "/repo-name"
   url: "https://username.github.io"
   ```
6. Site will be live at `https://username.github.io/repo-name`

### Deploying

```bash
git add .
git commit -m "Initial blog setup"
git remote add origin git@github.com:username/repo-name.git
git push -u origin main
```

GitHub Pages will automatically build and deploy your site.

## Customization

### Site Settings

Edit `_config.yml`:

```yaml
title: Your Name
description: Your site description
author:
  name: Your Name
  email: your@email.com
```

### Navigation

Edit `_data/navigation.yml`:

```yaml
- title: About
  url: /
- title: Writing
  url: /writing/
- title: Projects
  url: /projects/
```

### Social Links

Edit `_data/social.yml` with your profiles.

### Colors

Edit `_sass/_variables.scss`:

```scss
$accent: #F84C1E;  // Change the accent color
```

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

MIT
