# Hugo Serif Theme

Serif is a modern business theme for Hugo. It contains multiple content types and pages. The theme is fully responsive, blazing fast and artfully illustrated.

[Live Demo](https://hugo-serif.netlify.app/) |
[Zerostatic Themes](https://www.zerostatic.io/)

![Hugo Serif Theme screenshot](https://www.zerostatic.io/theme/hugo-serif/hugo-serif-screenshot.png)

## Features

**Content Types**

- Services (Markdown)
- Team (Markdown)
- Features (Data)

**CSS**

- SCSS (Hugo Pipelines)
- Fully Responsive design
- Bootstrap 4 grid and media queries only
- Uncomment `@import 'bootstrap/bootstrap';` in `style.scss` to use the entire Bootstrap framework
- Configure Google fonts from `config.toml`
- Configure primary theme colors from `config.toml`
- Examples of using Params from the `config.toml` as SCSS variables

**Speed**

- 100/100 Google Lighthouse speed score
- Under 50KB without images or 80KB with images and illustrations ⚡
- No jQuery, only a tiny bit of vanilla Javascript for the mobile menu.

**SEO**

- 100/100 Google Lighthouse SEO score
- 100/100 Google Lighthouse accessibility score
- Configure Google Analytics in `config.toml`
- Configure Google Analytics using env variable `HUGO_GOOGLE_ANALYTICS_ID` compatible with Netlify.
- Configure meta tags and OG meta tags for the homepage in `config.toml`
- Override any meta tags on a per page basis
- Semantic HTML document structure

**Menu**

- Responsive menu managed in `config.toml`
- Animated hamburger menu on mobile

**Content**

- Robust example content included
- Royalty free illustrations included

**Code**

- No hardcoded content in the layouts
- Plenty of examples of using `range` and `where` to loop over various sections/content types
- Examples of `range` by Param
- Examples of using data content _(`data/contact.yaml` and `data/features.json`)_
- Example of passing .Site . (context) and custom variables to partials - see `layouts/page/contact.html` - `{{ partial "call.html" (dict "site" .Site "context" . "show_button" "false") }}`
- Examples of injecting javascript files on a per page basis (see `services/single.html`)
- Set `body` classes from individual layouts - useful for CSS styling.
- Example of using Hugo custom `layout` for the contact page

## Installation

**1. Install Hugo**

To use this theme you will first need to have Hugo installed. Please follow the official [installation guide](https://gohugo.io/getting-started/installing/)

⚠️ **Note:** Check your Hugo version - **Hugo Extended** is required!

This theme uses [Hugo Pipes](https://gohugo.io/hugo-pipes/scss-sass/) to compile SCSS and minify assets which means if you not using the Hugo extended version this theme will not work. To check your version of Hugo, run `hugo version`. Make sure you see **/extended** after the version number, for example _Hugo Static Site Generator v0.51/extended darwin/amd64 BuildDate: unknown_ You do not need to use version v0.51 specifically, it just needs to have the _/extended_ part.

**2. Create a new Hugo site**

This will create a fresh Hugo site in the folder `mynewsite`.

```
hugo new site mynewsite
```

**3. Install the theme**

Download or git clone this theme into the sites themes folder `mynewsite/themes`. You should end up with the following folder structure `mynewsite/themes/hugo-serif-theme`

```
cd mynewsite
git clone https://github.com/zerostaticthemes/hugo-serif-theme.git themes/hugo-serif-theme
```

**4. Copy the example content**

Copy the entire contents of the `mynewsite/themes/hugo-serif-theme/exampleSite/` folder to root folder of your Hugo site, ie `mynewsite/`. To copy the files using terminal, make sure you are still in the projects root, ie the `mynewsite` folder.

```
cp -a themes/hugo-serif-theme/exampleSite/. .
```

**5. Run Hugo**

After installing the theme for the first time, generate the Hugo site.

You run this command from the root folder of your Hugo site ie `mynewsite/`

```
hugo
```

For local development run Hugo's built-in local server.

```
hugo server
```

Now enter [`localhost:1313`](http://localhost:1313) in the address bar of your browser.

## Deployment

### Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/zerostaticthemes/hugo-serif-theme)

This theme includes a `netlify.toml` which is [configured to deploy to Netlify](https://discourse.gohugo.io/t/deploy-your-theme-to-netlify/15508) from the `exampleSite` folder. If you have installed this theme into a new Hugo site and the exampleSite folder was copied or removed, you should delete the `netlify.toml` file.

### Localhost inside exampleSite

You can run this site without installing it as a hugo theme using the following command. I use this for theme development.

```
hugo server --source=exampleSite --theme=../..
```

## Configuring Theme

### Logo

You can edit the logo from the `config.toml`

```toml
# config.toml

  [params.logo]
    mobile = "images/logo/logo-mobile.svg"
    mobile_height = "36px"
    desktop = "images/logo/logo.svg"
    desktop_height = "36px"
    alt = "Serif - A Hugo Business Theme"
```
### Favicon

You can edit the favicon from the `config.toml`

```toml
# config.toml

[params]
  google_analytics_id = "UA-XXX-1"
  google_tag_manager_id = ""
  favicon = "favicon-32x32.svg"
```

### Fonts

This theme uses Google fonts. You can change the google font in the `config.toml` - These fonts are injected into the `style.scss` as SCSS variables.

```toml
# config.toml

  [params.fonts]
    # sets the google font link in layouts/partials/google-fonts.html
    google_fonts = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Source+Sans+Pro:wght@400;700&display=swap'
    heading = "Playfair Display"
    base = "Source Sans Pro"
```

### Colors

You can edit the themes main colors in the `config.toml`. These colors are injected into the `style.scss` as SCSS variables.

```toml
#config.toml

  [params.colors]
    primary = "#f24088"
    black = "#2f2f41"
    white = "#ffffff"
    white_offset = "#f6f7ff"
    grey = "#5C5A5A"
```

### Intro Image

List pages such as the homepage, services and team can have a Intro image.

```yml
# content/_index.md
---
intro_image: "https://source.unsplash.com/wOGhHamMqLc"
intro_image_absolute: false
intro_image_hide_on_mobile: true
---
```

While this themes default content uses illustrations, its easy to change the image to a photo and it will still look great.

the front-matter field `intro_image_absolute: true` let's illustrations "break out" (in CSS terms, it uses `position: absolute`) of the grid and is an intended stylistic effect. When using photos or normal images it's recommended to set this field to false and the photo will align with the grid. See `content/team/_index.md` for an example.

### Google Analytics

Put your Google Analytics ID in the `google_analytics_id` field in the `config.toml` - Also supports Google Tag Manager. When your site is running locally using `hugo server` the GA tag is not injected. This prevents polluting your real data.

```toml
# config.toml

[params]
  google_analytics_id = "UA-XXX-1"
  google_tag_manager_id = ""
```

You can also set the Google Analytics ID using a [Netlify environment variable](https://docs.netlify.com/configure-builds/environment-variables/) `HUGO_GOOGLE_ANALYTICS_ID`

### Meta tags

A pages `<title>` is generated from the front-matter `meta_title` else it will use the `title` property. This allows you to have a different heading on the page to what is shown in the SEO title. See `content/_index.md` for an example.

The meta description field is generated from the front-matter `description`

OG meta data for Facebook and Twitter is also generated on a per page basis. The `image` field is used for the og:image for Twitter and Facebook.

You can configure og meta data global settings in the config.

```toml
# config.toml

  [params.seo]
    meta_twitter_site = "@zerostaticio"
    meta_twitter_creator = "@zerostaticio"
    meta_og_image = "https://www.zerostatic.io/theme/hugo-serif/hugo-serif-screenshot.png"
```

## License

- Don't create ports of this theme without asking me
- You can't re-distribute or re-sell this theme as your own template

## Credits

- Beautiful royalty free Illustrations by Icons8 - https://icons8.com/illustrations/style--pixeltrue
- Stock images by Unsplash - https://unsplash.com/
- Feature icons by Noun Project - https://thenounproject.com/

**More Hugo Themes by Zerostatic**

- [Hugo Hero](https://github.com/zerostaticthemes/hugo-hero-theme) - Open-source business theme
- [Hugo Whisper](https://github.com/zerostaticthemes/hugo-whisper-theme) - Open-source documentation theme
- [Hugo Serif](https://github.com/zerostaticthemes/hugo-serif-theme) - Open-source business theme
- [Hugo Winston](https://github.com/zerostaticthemes/hugo-winston-theme) - Open-source blog theme
- [Hugo Advance](https://www.zerostatic.io/theme/hugo-advance/) - Premium advanced multi page business & marketing theme
- [Hugo Paradigm](https://www.zerostatic.io/theme/hugo-paradigm/) - Premium landing page + site builder theme
- [Hugo Lever](https://www.zerostatic.io/theme/hugo-lever/) - Premium personal / bio theme
- [Hugo Shard](https://www.zerostatic.io/theme/hugo-lever/) - Premium SAAS / landing page theme

**Find hundreds more Hugo themes on Built At Lightspeed**

[<img alt="Built At Lightspeed Hugo themes directory screenshot" width="400px" src="https://www.zerostatic.io/images/builtatlightspeed-hugo-themes.jpg" />](https://builtatlightspeed.com/category/hugo)
