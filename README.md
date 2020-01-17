# Hugo Serif Theme

Serif is a modern business theme for Hugo. It contains content types for the archetypical business website. The theme is fully responsive, blazing fast and artfully illustrated.

[Live Demo](https://hugo-serif.netlify.com/) |
[Zerostatic Themes](https://www.zerostatic.io/theme/hugo-serif/)

![Hugo Serif Theme screenshot](https://github.com/JugglerX/hugo-serif-theme/blob/master/images/screenshot.png)

## Theme features

### Content Types

- Services (Markdown)
- Team (Markdown)
- Features (Data)

### CSS

- SCSS (Hugo Pipelines)
- Responsive design
- Bootstrap 4.3 grid and media queries only

### Speed

- 100/100 Google Lighthouse speed score
- Under 30KB without images or 80KB with images and illustrations ⚡
- No jQuery, only a tiny bit of vanilla Javascript for the mobile menu.

### SEO

- Google analytics configured in `config.toml`
- Configure GID using env variable HUGO_GOOGLE_ANALYTICS_ID, compatible with Netlify.
- Configure meta tags and OG meta tags for the homepage in `config.toml`
- Override any meta tags on a per page basis
- Semantic document structure
- Accessible colors, headings and link text

### Menu

- Responsive menu managed in `config.toml`

### Content

- Robust example content included
- Royalty free illustrations included
- Set `body` classes on a per template basis

### Templating

- Plenty of examples of using `range` and `where` to loop over various content types
- Examples of injecting javascript files on a per page basis (see services/single.html)

# Stackbit Deploy

This theme is is ready to import into Stackbit. This will deploy the site to Netlify and optionally you can select a headless CMS so you can edit the content without ever touching the code. 

[![Create with Stackbit](https://assets.stackbit.com/badge/create-with-stackbit.svg)](https://app.stackbit.com/create?theme=https://github.com/JugglerX/hugo-serif-theme)


# Installation

To use this theme you will need to have Hugo installed. If you don't already have Hugo installed please follow the official [installation guide](https://gohugo.io/getting-started/installing/)

### Check Hugo version (Hugo 0.51+ Extended is required)

This theme uses [Hugo Pipes](https://gohugo.io/hugo-pipes/scss-sass/) to compile SCSS and minify assets. Please make sure you have the **Hugo Extended** version installed. If you are not using the extended version this theme will not not compile.

To check your version of Hugo, run:

```
hugo version
```

This will output the currently installed version of Hugo. Make sure you see `/extended` after the version number, for example `Hugo Static Site Generator v0.51/extended darwin/amd64 BuildDate: unknown` You do not need to use version v0.51 specifically, you can use any version of Hugo above 0.51. It just needs to have the `/extended` part

### Create a new Hugo site

```
hugo new site mynewsite
```

This will create a fresh Hugo site in the folder `mynewsite`.

### Install theme

Copy or git clone this theme into the sites themes folder `mynewsite/themes`

#### Install with Git

```
cd mynewsite
git clone https://github.com/jugglerx/hugo-serif-theme.git themes/hugo-serif-theme
```

#### Install from .zip file

You can download the .zip file located here https://github.com/JugglerX/hugo-serif-theme/archive/master.zip.

Extract the downloaded .zip inside the `themes` folder. Rename the extracted folder from `hugo-serif-theme-master` -> `hugo-serif-theme`. You should end up with the following folder structure `mynewsite/themes/hugo-serif-theme`

### Add example content

Copy the entire contents of the `mynewsite/themes/hugo-serif-theme/exampleSite/` folder to root folder of your Hugo site, ie `mynewsite/`

To copy the files using terminal, make sure you are still in the projects root, ie the `mynewsite` folder.

```
cp -a themes/hugo-serif-theme/exampleSite/. .
```

### Update config.toml

After you copy the `config.toml` into the root folder of your Hugo site you will need to update the `baseURL`, `themesDir` and `theme` values in `mynewsite/config.toml`

```
baseURL = "/"
themesDir = "themes"
theme = "hugo-serif-theme"
```

### Run Hugo

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

# Configuring theme features

### Homepage meta tags

Often a homepage requires special meta tags such as a meta description or og meta data for twitter, facebook etc. You can configure these values in the `config.toml`

```
// config.toml
[params]
  google_analytics_id=""

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

### Set meta tags on a per template/page basis

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

- Beautiful royalty free Illustrations by https://undraw.co/

## License

If you fork or copy this theme the LICENSE file and the copyright notice on line 3 (where I am listed as the author) must not be changed. You cannot just replace the copyright line with your own name. Attribution in your README.md or on your site is also welcome but not required.

