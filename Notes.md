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

### Following the CDN tutorial
 The rest of this tutorial will be documented using comments in the respective files inside `cdn/`

### Vue CLI Setup

`sudo npm i -g @vue/cli`

To create your project, from the terminal,

```html
    vue create project-name
```

To run the dev server `npm run serve`

### How does it work?

The `tutorial-alpha/src/main.js` is our vue entry point. This is where we mount our Vue app so that it gets injected into the `<div id="app></div>` in our `index.html`. 
`tutorial-alpha/src/App.vue` is our root component. We can embed created components in this file.

### Props

We can pass props into a component. We define how our component accepts props,

```vue
    <script>
      export default {
        name: 'ComponentName',
        props: {
          title: String
        }
      }
    </script>
```

That title prop can be used in the `<template>` of this component using declarative (?)
