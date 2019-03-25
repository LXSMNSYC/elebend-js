# elebend-js

Easily create HTML5 elements

[![NPM](https://nodei.co/npm/elebend-js.png)](https://nodei.co/npm/elebend-js/)
[![](https://data.jsdelivr.com/v1/package/npm/elebend-js/badge)](https://www.jsdelivr.com/package/npm/elebend-js)

| Platform | Build status |
| --- | --- |
| Linux | | [![Build Status](https://travis-ci.org/LXSMNSYC/elebend-js.svg?branch=master)](https://travis-ci.org/LXSMNSYC/elebend-js) |
| Windows | [![Build status](https://ci.appveyor.com/api/projects/status/197g3hvxqayhy9hb?svg=true)](https://ci.appveyor.com/project/LXSMNSYC/elebend-js) |

[![codecov](https://codecov.io/gh/LXSMNSYC/elebend-js/branch/master/graph/badge.svg)](https://codecov.io/gh/LXSMNSYC/elebend-js)
[![Known Vulnerabilities](https://snyk.io/test/github/LXSMNSYC/elebend-js/badge.svg?targetFile=package.json)](https://snyk.io/test/github/LXSMNSYC/elebend-js?targetFile=package.json)

## Example

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

## But why

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
const el = html(() => {
  head(() => {
    title('This is an example.');
  });
  body(() => {
    h1('Example header');
    p('Example content');
  });
});
```

In this example, we created a fully built hiearchy for a single element, in which we can append into another element to render it.

#### The API

```
Elebend.tagname(attr: string | function | object [, body: string | function | object]);
```

Where:

* ```tagname``` is a name equivalent to an HTML5 tag e.g. a, p, div, main, etc.
* ```attr``` is the element's attributes IF it is an object provided. If it is a string or a function, ```attr``` is treated as a content body.
* ```body``` is an optional parameter, which is the content body of the element. Self-closing tags completely ignores this parameter.

Refer to the [HTML5 Spec](https://www.w3.org/TR/html50/dom.html) for the element tags.

To define a text node, you can use ```Elebend.text(string)```.

Calling any Elebend function automatically appends to its Elebend callee (given that the function is called in an Elebend callback).

## Build

```bash
npm install
npm run build
```