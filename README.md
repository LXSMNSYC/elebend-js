# elebend-js
Easily create HTML5 elements

## Example

```js
const { main, div, p, h1 } = Eleband;

main([
  div([
    h1('This is a title'),
    p('This is a body'),
  ]),
]);
```

## But why?

Can't really say, but one of the reasons why I made this is to personally use it for a project I am working on.

## Usage

### Install

#### NPM

```bash
npm i elebend-js
```

#### CDN

* jsDelivr

```html
<script src="https://cdn.jsdelivr.net/npm/elebend-js/dist/index.min.js"></script>
```

* unpkg

```html
<script src="https://unpkg.com/elebend-js/dist/index.min.js"></script>
```

### Loading the module

#### CommonJS/ES

Loading the module provides a single object whose keys are based upon the HTML5 Tag names.

#### Browser

Loading the module defines an object named 'Elebend' whose keys are based upon the HTML5 Tag names.

### Rendering the elements

Elebend is an object whose entries are functions that allows you to create an specific HTML5 element. The key to these functions are based upon the HTML5 Tag names.

For example, let's try to create a simple webpage using Elebend:

```js
const { html, head, title, body, h1, p } = Elebend;
html(() => {
  head(() => {
    title('This is an example.');
  });
  body(() => {
    h1('Example header');
    p('Example content');
  });
});
```

## Build