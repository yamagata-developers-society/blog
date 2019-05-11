---
layout: post
title: 'Stateful Components in Vanilla JS'
author: 'Elliott Hindman'
tags: ['JavaScript']
image: img/posts/stateful-components-cover.jpg
date: '2019-04-22T18:00:00.000Z'
draft: false
---

# Stateful Components in Vanilla JS

Today I'd like to show you how you can apply some react concepts of stateful components with plain JavaScript.

I'd like to demonstrate to you that:

> You don't need to use the react library to apply the amazing concepts used by react in your JavaScript programming.

We will start with a simple object, which will represent the initial "state" of our data:

```js
const state = {
  count: 0,
};
```

From here, I will create several methods, which I will divide into 2 categories:

1. Component functions
2. Render functions

We will use es6 template strings to construct our components, which can be fed data and react dynamically to user interaction.

Render functions will be called to render the component when the user triggers changes.

First let's create our counter component, which is just a arrow function that returns a template string.

```js
const counter = (count) => {
  return `<div class="counter">${count}</div>;
}
```

Then let's create a render function, which we can call to update the DOM, when a user triggers a change to the count.

```js
renderCount = () => {
  document.getElementById('app').innerHTML = counter(this.state.count);
};
```

Now, all we need is a method to update the count:

```js
incrementCountUp = () => {
  let newCount = this.state.count + 1;
  this.state.count = newCount;
};
```

Then we can attach an event listener to a button click. When the user presses the button, the count will increment up by updating the value of `state.count`. After that, we can call the render method so we will instantly see the change rendered in the DOM:

```js
const incCountBtn = document.querySelector("[data-action='count-up']");

incCountBtn.click(() => {
  incrementCountUp();
  renderCount();
});
```

## Bonus material

Just like in React, we can utilize JS logic within our components to modify the frontend user experience.

For example, we can change the class name in use by checking the value of count:

```js
const counter = (count) => {
  let className = "text-error";

  if (count > 10) {
    classname = "text-success";
  }

  return `<div class="counter">${count}</div>;
}
```

And in our CSS:

```sass
.text-error {
  color: indianred;
}

.text-success {
  color: green;
}
```

Now, when we increment our count past 10, the color of the text will automaticall change, without having to do any extra state management or any wacky jQuery stuff that quickly spirals out of control.

## Conclusion

As you can see, it is very handy to program in JavaScript this way, using the powerful features built-in to the ES6 syntax. While this obviously has it's shortcomings in terms of performance issues and problems with directly updating the `state` object -- after all there is no `setState` method built into JavaScript at the moment -- it is possible to create stateful components with plain JS.

What are the benefits?

1. No dependency or large bundle for users to download
2. DOM manipulations and reactive components are completely possible
3. Simplifies the work of switching classes and updating contents
4. Separates functions into component and render functions to make code better organized and maintainble
5. Fun!

## Resources

JS FIDDLE: https://jsfiddle.net/jzft0o7r/

```
// HTML

<div class="App__container" id="app">
  <div>
    Count: <span id="display">0</span>
  </div>

  <button onclick="incCountUp()">+Count</button>
</div>

// JS

const display = document.getElementById("display");

const state = {
  count: 0,
}

// Components

const counter = count => {
  let classname = "text-error";

  if (count >= 5) {
  	classname = "text-success";
  }

  return (
    `<span class="${classname}">${count}</span>`
  );
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

// CSS

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
  color: indianred;
}

.text-success {
  color: green;
  font-size: 40px;
}
``
```
