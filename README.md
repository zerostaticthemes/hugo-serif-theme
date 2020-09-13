# Hugo Serif Theme

Serif is a modern business theme for Hugo. It contains content types for the archetypical business website. The theme is fully responsive, blazing fast and artfully illustrated.

[Live Demo](https://hugo-serif.netlify.app/) |
[Zerostatic Themes](https://www.zerostatic.io/)

![Hugo Serif Theme screenshot](https://www.zerostatic.io/theme/hugo-serif/hugo-serif-screenshot.png)

## Theme features

### Content Types

- Services (Markdown)
- Team (Markdown)
- Features (Data)

### CSS

- SCSS (Hugo Pipelines)
- Responsive design
- Bootstrap 4.4 grid and media queries only
- Uncomment `@import 'bootstrap/bootstrap';` in `style.scss` to use the entire Bootstrap framework

### Speed

- 100/100 Google Lighthouse speed score
- Under 50KB without images or 80KB with images and illustrations ⚡
- No jQuery, only a tiny bit of vanilla Javascript for the mobile menu.

### SEO

- 100/100 Google Lighthouse SEO score
- Google analytics configured in `config.toml`
- Configure GID using env variable HUGO_GOOGLE_ANALYTICS_ID, compatible with Netlify.
- Configure meta tags and OG meta tags for the homepage in `config.toml`
- Override any meta tags on a per page basis
- Semantic HTML document structure

### Accessibility 

- 100/100 Google Lighthouse accessibility score
- Accessible colors, headings and link text (by design)
- Attention has been paid to using correct contrast, font sizes etc
- Attention has been paid to ensuring comfortable hit zones and link sizing on mobile

### Menu

- Responsive menu managed in `config.toml`
- Animated hamburger menu on mobile

### Content

- Robust example content included
- Royalty free illustrations included

### Templating

- No hardcoded content in the layouts
- Plenty of examples of using `range` and `where` to loop over various sections/content types
- Examples of `range` by Param
- Examples of using data content _(data/contact.yaml and data/features.json)_
- Example of passing .Site . (context) and custom variables to partials - see `layouts/page/contact.html` - `{{ partial "call.html" (dict "site" .Site "context" . "show_button" "false") }}`
- Examples of injecting javascript files on a per page basis (see services/single.html)
- Set `body` classes from individual layouts - useful for CSS styling.
- Example of using Hugo custom `layout` for the contact page



# Hugo Installation

To use this theme you will need to have Hugo installed. If you don't already have Hugo installed please follow the official [installation guide](https://gohugo.io/getting-started/installing/)

### Check Hugo version (Hugo Extended is required!)

This theme uses [Hugo Pipes](https://gohugo.io/hugo-pipes/scss-sass/) to compile SCSS and minify assets. Please make sure you have the **Hugo Extended** version installed. If you are not using the extended version this theme will not work.

To check your version of Hugo, run:

```
hugo version
```

This will output the currently installed version of Hugo. Make sure you see `/extended` after the version number, for example `Hugo Static Site Generator v0.51/extended darwin/amd64 BuildDate: unknown` You do not need to use version v0.51 specifically, it just needs to have the `/extended` part


# Theme Installation

Download, fork or  clone this repo, it's ready to go. 

```
hugo
```

```
hugo server
```

# Deployment

## Stackbit

Use Stackbit to deploy this theme and connect any headless CMS _(Forestry, NetlifyCMS, Sanity, Contentful, DatoCMS)_ - It's actually really amazing. This theme contains a valid and tested `stackbit.yaml`

[![Create with Stackbit](https://assets.stackbit.com/badge/create-with-stackbit.svg)](https://app.stackbit.com/create?theme=https://github.com/zerostaticthemes/hugo-serif-theme)

## Netlify

Use Netlify to deploy this theme. This theme contains a valid and tested `netlify.toml` - Feel free to use the 1-click deploy below.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/zerostaticthemes/hugo-serif-theme)

# Configuring Theme

Copy your Google Analytics id into the `config.toml` - Also supports Google Tag Manager.

### Google Analytics
```
// config.toml
[params]
  google_analytics_id = ""
  google_tag_manager_id = ""
```
 
### Homepage meta tags

Often a homepage requires special meta tags such as a meta description or og meta data for twitter, facebook etc. You can configure these values in the `config.toml`

```
// config.toml
  [params.homepage_meta_tags]
    meta_description = "a description of your website."
    meta_og_title = "My Theme"
    meta_og_type = "website"
    meta_og_url = "https://www.mywebsite.com"
    meta_og_image = "https://www.mywebsite.com/images/tn.png"
    meta_og_description = "a description of your website."
    meta_twitter_card = "summary"
    meta_twitter_site = "@mytwitterhandle"
    meta_twitter_creator = "@mytwitterhandle"
```

### Override meta tags on a per layout basis

You can set meta tags on a per template basis using a block. For example, you might want to write a custom meta description for the `/services` page. You can insert any valid HTML meta data inside the `{{ define "meta_tags }}` block at the top of a template.

```
// layouts/services/list.html
...

{{ define "meta_tags" }}
    <meta name="description" content="We offer a variety of services in the finance industry" />
{{ end }}

{{ define main }}
...
```

## Credits

- Beautiful royalty free Illustrations by Icons8 - https://icons8.com/illustrations/style--pixeltrue


## License

This theme is open source under the MIT license. If you fork or copy this theme you must leave me as the original author in the LICENSE file (on line 3 where I am listed as the author). Really, I just don't want people copying this theme and then saying it's their theme, because I put a lot of work into my themes, thanks!

