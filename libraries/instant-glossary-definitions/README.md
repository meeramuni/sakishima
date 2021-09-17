# Instant Definitions JS
A jQuery/Javascript plugin to display inline glossary terms and definitions on a page

- Reads terms and definitions from JSON file
- Very non-developer friendly
- Robust customization options
- Manual tagging allows for more control

### [View Demo](https://tawong.github.io/instant-definitions/)

## About

This plugin imports terms you set in the JSON glossary file and then attaches a popup whenever a specifically tagged keyword is hovered. The plugin's styling can be customized extensively.

## When To Choose Me

If your webpages include many keywords, jargon, or role-specific language, you can use this plugin to help show definitions with ease. The manual tagging system allows for more functionality throughout but does come at the cost of more time. If you are looking for an automatic tagging system, then this plugin is not the right solution for you.

## Setup

### 1. Download files from dist

#### Required Files

`terms.json`<br>
`instant-definitions.css`<br>
`instant-definitions.js`
### 2. Populate the terms.json file

```json

var glossary = {
    "items": [{
            "term": "PT",
            "title": "Physiotherapist",
            "definition": "Helps patients with physical difficulties resulting from illness, injury, disability or ageing to improve their movement."
            },
        {
            "term": "OT",
            "title": "Occupational Therapist",
            "definition": "Helps patients with physical difficulties resulting from illness, injury, disability or ageing to improve their movement."
            },
        {
            "term": "Google",
            "title": "Google.com",
            "definition": "A large search engine website."
            },
        {
            "term": "Bing",
            "title": "Bing Search Engine",
            "definition": "A search engine owned and operated by Microsoft."
            },
        {
            "term": "Microsoft",
            "title": "Microsoft",
            "definition": "A tech company started by Bill Gates in 1975"
            },
        {
            "term": "NASA",
            "title": "National Aeronautics and Space Administration",
            "definition": "An independent agency of the United States Federal Government responsible for the civilian space program"
            },
    ]
}
```

### 3. Include and initialize the plugin
Be sure to include the CSS, JS, and JSON files

```html
    <link rel="stylesheet" href="css/instant-definitions.css">
    <script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
    <script src="terms.json"></script>
    <script src="js/instant-definitions.js"></script>

```

Initialize at the end of the body tag. You can replace "body" with any container ID or class
```html
    <script>
        $("body").instantDefinitions();
    </script>
```

### 4. Tag your keywords in HTML
Wrap your keywords in a `span` element with the class `idef` and a data attribute `data-idef`<br>
Your `data-idef` should match one of the terms (not titles) in your `terms.json` (case insensitive).
```html
    <span class="idef" data-idef="google">Google</span>
```

## Plugin Options

### Option Defaults

```javascript
defaults = {
    underlineColor: "#00c7c7",
    underlineWeight: 2,
    backgroundColor: "#abfcab",
    backgroundOpacity: 0.4,
    highlightText: true,
    boldText: false,
    underlineText: false,
    maxSize: 350,
    noStyle: false,
    showErrors: true,
    showTitles: true,
    hideMobile: true
}
```

### Option Customization

| Attribute        | Type           | Default  | Description |
| :-------------|:-------------|:-----| :---|
| `underlineColor`| String | `"#00c7c7"` | if `underlineText` is enabled, use this color|
| `underlineWeight`| Int | `2` | if `underlineText` is enabled, make the underline this stroke weight |
| `backgroundColor`| String | `"#abfcab"` | if `highlightText` is enabled, use this color for the highlight|
| `backgroundOpacity`| Float | `0.4` | if `highlightText` is enabled, set the background to this opacity |
| `highlightText`| Boolean | `true` | Whether or not to highlight the keywords|
| `boldText`| Boolean | `false` | Whether or not to bold the keywords|
| `underlineText`| Boolean | `false` | Whether or not to underline the keywords|
| `maxSize`| Boolean, Int | `350` | Can be `false` or a number. If `false`, the popup will be automatically sized up to 100% of the screen width.|
| `noStyle`| Boolean | `false` | When enabled, removes all plugin styles, Allows you to cusotomize the keywords using CSS without overwriting issues.|
| `showErrors`| Boolean | `true` | Whether or not to show an error message for unset or undefined keywords|
| `showTitles`| Boolean | `true` | Whether or not to show the keyword's title in the definition popup|
| `hideMobile`| Boolean | `true` | Whether or not to run this plugin on mobile devices |

## Bugs?

No known bugs at this time, please create an issue on Github if you find anything, or have any questions. 
