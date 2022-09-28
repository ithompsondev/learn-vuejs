# Installation
Vue can be used directly from the CDN (Content Delivery Network) using,

```javascript
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
```

Paste the above in the `<body>` of `index.html`

### Tutorial Project Structure

```
/
---/app.js
---/index.html
---/style.css
```

Don't forget,

```html
<body>
    <script src="app.js"></script>
</body>
```

### Initial HTML Setup

Everything we do with regards to creating components and UI will be contained withing the JS. When that loads it will "spit" 
it out into the `id='app'` div,

```html
<body>
    <div id="app"></div>
</body>
```

### Following this tutorial
 The rest of this tutorial will be documented using comments in the respective files inside `cdn/`
