---
layout: post
title: 'Stateful Components in Vanilla JS'
author: Elliott Hindman
tags: ['javascript']
image: img/posts/stateful-components-cover.jpg
date: '2019-05-16T18:00:00.000Z'
draft: false
---

Today I'd like to show you how you can create stateful componenents with vanilla JavaScript
<span role="img" aria-label="Soft Ice Cream">🍦</span>, and demonstrate that:

> You don't need to download any library to apply the amazing concepts used by React.js in your JavaScript programming.

Yes, it's now entirely possible to use the powerful features of JavaScript out-of-the-box to do some pretty amazing things. Let's dive right in!

## Demo

To see the final version of what we are building, check out this <a href="https://jsfiddle.net/jzft0o7r/" target="_blank" rel="noopener">JS Fiddle <span role="img" aria-label="Up-Right Arrow">↗️</span></a>

## Start

Let's start with a simple object, which will represent the initial "state" of our data:

```js
let state = {
  count: 0,
};
```

From here, I will create several methods, which I will divide into 2 categories:

1. Component functions
2. Render functions

We will use ES6 template strings (See: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals" target="_blank" rel="noopener">Template Literals <span role="img" aria-label="Up-Right Arrow">↗️</span></a>) to construct our components, which can be fed data and react dynamically to user actions.

<b>Render functions</b> will be called to display the component when the user triggers changes.

First let's create our counter component, which is just an arrow function that returns a template string.

```js
const counter = (count) => {
  return `<div class="counter">${count}</div>;
}
```

Then let's create a render function, which we can call to update the DOM when a user triggers a change to the count.

```js
renderCount = () => {
  document.getElementById('app').innerHTML = counter(this.state.count);
};
```

Now, all we need is a method to update the count. Since we don't have a `setState({})` method built-in to JavaScript just yet, we will do a React no-no, and set the state directly <span role="img" aria-label="Weary Cat Face">🙀</span>:

```js
incrementCountUp = () => {
  let newCount = this.state.count + 1;
  this.state.count = newCount;
};
```

Then we can attach an event listener to a button click.

When the user clicks the button, the count will increment up by updating the value of `state.count`. After that, we can call the render method so we will instantly see the change rendered in the DOM:

```js
const incCountBtn = document.querySelector("[data-action='count-up']");

incCountBtn.click(() => {
  incrementCountUp();
  renderCount();
});
```

And with that, we have a stateful component created with plain-old vanilla JS!

<span role="img" aria-label="Soft Ice Cream">🍦🍦🍦</span>

## Bonus material

Just like in React.js, we can utilize JS logic within our components to modify the frontend user experience.

For example, we can change the class name in use by checking the value of count:

```js
const counter = (count) => {
  let className = "text-error";

  if (count > 10) {
    classname = "text-success";
  }

  return `<div class="${className}">${count}</div>;
}
```

And in our CSS:

```sass
.text-error {
  color: red;
}

.text-success {
  color: green;
}
```

Now, when we increment our count past 10, the color of the text will automatically change, without having to do any extra DOM manipulation wacky jQuery stuff.

## Conclusion

As you can see, it is very handy to program in JavaScript this way, using the powerful features built-in to the syntax. Even though we can't benefit from React's `virtual DOM` or `setState({})` method, this is a powerful way to think and program -- and there is no external dependency to worry about!

What are the benefits?

1. Write organized, reactive code without the increased bundle size
2. Simplify DOM manipulations and state logic
3. Improve the versatility and strength of your standard JavaScript coding!

# Resources

### Demo

<a href="https://jsfiddle.net/jzft0o7r/" target="_blank" rel="noopener">JS Fiddle <span role="img" aria-label="Up-Right Arrow">↗️</span></a>

### Source code

HTML

```html
<div class="App__container" id="app">
  <div>Count: <span id="display">0</span></div>

  <button onclick="incCountUp()">+Count</button>
</div>
```

JS

```js
const display = document.getElementById('display');

const state = {
  count: 0,
};

// Components

const counter = count => {
  let classname = 'text-error';

  if (count >= 5) {
    classname = 'text-success';
  }

  return `<span class="${classname}">${count}</span>`;
};

// Render Methods

function renderCount() {
  display.innerHTML = counter(state.count);
}

// Update methods

function incCountUp() {
  let newCount = state.count + 1;
  state.count = newCount;

  renderCount();
}

renderCount();
```

CSS

```css
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
ol {
  margin-top: 0;
}

.App__container {
  padding: 15px;
}

.Score {
  font-size: 28px;
}

.text-error {
  color: red;
}

.text-success {
  color: green;
  font-size: 40px;
}
```
