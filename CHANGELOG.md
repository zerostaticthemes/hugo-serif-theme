# Changelog

## Version 1.1 (Released Aug 23, 2020)

### Hugo
* Updated and tested with Hugo version `0.74.3`

### Design
* Added new illustrations
* Sharpened up design; better padding, font sizing, whitespace etc
* Improved default document styling for markdown and single pages 

### SCSS
* Improved SCSS variables in `style.scss` - Made it easier to edit global theme colors
* Updated to Bootstrap 4.3
* Cleaned up a bunch of old CSS

### Netlify
* Updated `netlify.toml` to use latest Hugo version and tested Netlify deploy

### Stackbit
* Updated `stackbit.yaml` to latest version and test with Stackbit

### Callbox
* Only display email and phone if values are set in `data/contact.yaml`
* Callbox partial accepts inline variable to show/hide button
* Configure if callbox should appear on homepage in `config.toml`

### Team
* Improved Team content type, added featured team members which have a different design
* Added some better example content

### Social
* Added social media icons to footer, can be configured in `data/social.json`

### Bugs
* Various bug fixes and extra testing
* Use title from config file as homepage meta title
* Hide empty space if there are no features


## Version 1.0 (Released Jul 8, 2019)

- Initial release.
