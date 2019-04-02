# DefferedJS

Deffered JS is loading CSS, JS scripts and Images after given Dom Event ("DOMContentLoaded")

Deffered JS Load CSS -> JS -> Images as order.

## CSS
When you declare CSS put data-href instead of href
```html
    <link rel="stylesheet" data-href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"/>
```

## JS
When you declare JS put data-src instead of src
```html
    <script data-src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
```

## IMG
When you declare img put data-src instead of src
```html
     <img data-src="https://semantic-ui.com/images/avatar2/large/kristy.png" />
```

## Usage of DefferedJS
```js
    <script src="../dist/defferedjs.min.js"></script>
    <script>
        var deffered = new DefferedJS("DOMContentLoaded");
    </script>
```