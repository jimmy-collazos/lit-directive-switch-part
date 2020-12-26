![Switch Part](./header.webp)
<sup>_Social Media Photo by [pure julia](https://unsplash.com/@purejulia) on [Unsplash](https://unsplash.com/photos/HH-iKI0veVI)_</sup>

# Switch Part
<p align="center">
  <img alt="Export format: ESM" src="https://img.shields.io/badge/fomat-esm-yellowgreen" />
  <img alt="Distribution: Npm, Unpackage" src="https://img.shields.io/badge/%F0%9F%93%A6-npm%20unpk-yellowgreen" />
  <img alt="License: GPL 3.0" src="https://img.shields.io/badge/GPL 3.0-license-yellowgreen" />
</p>

This is a directive for [lit-html](https://lit-html.polymer-project.org/) for switch [parts](https://lit-html.polymer-project.org/api/interfaces/_lit_html_.part.html) of your template. Change any part of your template without re-rendering.

## Installation

Install from [NPM](https://www.npmjs.com/package/lit-directive-switch-part) or use from [Unpkg](https://unpkg.com/lit-directive-switch-part) CDN

**Npm**
```sh
npm install --save lit-directive-switch-part
```

**Unpkg**
```javascript
import {switchPart} from 'https://unpkg.com/lit-directive-switch-part?module'
```


## # switchPart(store, options)

### _Arguments_

* store: Key value store. The Value can by a function for a lazy rendering; the function recibe previus key used. If cache is enabled, the function is called once and cache result for next setter.
* options:
  * default: Default key for first rendering
  * cache: Enable/Disable cache for lazy rendering
  * resolver(store, key): Resolver function

### API

#### case(key)

Switch to another content associated to key.

#### clear()

Set empty content in content part.

### _Common example_

```javascript
import {render, html} from 'lit-html'
import {switchPart} from 'lit-directive-switch-part';

const content = switchPart({
  a: html`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  b: html`Ut tempor tellus at nibh blandit rutrum.`,
  c: html`Nam vitae diam consequat, tristique lectus sed, ultricies erat.`
}, {default: 'a'});

render(html`
  <h1>Sw</h1>
  <ul>
    <li><button type="button" @click=${_ => content.case('a')}>Lorem</buttom></li>
    <li><button type="button" @click=${_ => content.case('b')}>Ut</buttom></li>
    <li><button type="button" @click=${_ => content.case('c')}>Nam</buttom></li>
    <li><button type="button" @click=${_ => content.clear()}>Clear</buttom></li>
  </ul>
  <hr>
  ${tab}
  `, document.querySelector('#mainbox'));
```

### _Lazy render example_

```javascript
import {render, html} from 'lit-html'
import {switchPart} from 'lit-directive-switch-part';

const content = switchPart({
  a: () => html`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  b: () => html`Ut tempor tellus at nibh blandit rutrum.`,
  c: () => html`Nam vitae diam consequat, tristique lectus sed, ultricies erat.`
}, {default: 'a', cache: true});

render(html`
  <h1>Sw</h1>
  <ul>
    <li><button type="button" @click=${_ => content.case('a')}>Lorem</buttom></li>
    <li><button type="button" @click=${_ => content.case('b')}>Ut</buttom></li>
    <li><button type="button" @click=${_ => content.case('c')}>Nam</buttom></li>
    <li><button type="button" @click=${_ => content.clear()}>Clear</buttom></li>
  </ul>
  <hr>
  ${tab}
  `, document.querySelector('#mainbox'));
```