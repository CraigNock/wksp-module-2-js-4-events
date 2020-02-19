# 2.4.1 - JS Events

---

## Situation

I want to open the door, when someone is there.

<img src='./assets/door.gif' />


//without constantly checking
//events -> doorbell

---

## Event-driven Programming

<img src='./assets/fig1_event.png' />

---

### Event Types

<img src='./assets/event_types.jpg' />

[Source](https://data-flair.training/blogs/javascript-event-types/)


//less common as you go down this list ^
---

#### User Interface Events

- `load` //when something is loaded
- `unload` //when something is unloaded (removed)
- `error` //error
- `resize` //when window resized
- `scroll` //on scroll up or down

---

#### Focus and Blur Events

These events fire when the HTML elements you can interact with gain/ lose focus.

- `focus` //an element/div is focused. think of inputs in forms
- `blur` //when focus lost (eg when focused left checksvalidates input)
- `focusin` (_new; not supported by Firefox_)
//same as focus
- `focusout` (_new; same as blur; not supported by Firefox_)
//same as blur

---

##### Mouse Events

- `click`
- `dblclick`
- `mousedown` //mouseclick hold
- `mouseup` //let go of hold
- `mouseover` //hover
- `mouseout` //leaves hover
- `mousemove` //anytime a mouse moves

---

##### Keyboard Events

- `input`
- `keydown` //if hold; keeps triggering
- `keypress` //single trigger
- `keyup` //when released

---

### Form Events

- `submit` //think form tag submit button (attribute = submit)
- `change` //on change
- `input` //when an input is triggered

---

### HTML5 Events

- `DOMContentLoaded` //when content loaded(can determine which content)
- `hashchange` //url # use to skip to page section
- `beforeunload` //on attempt page close (only use if 100% useful for user)

---

### CSS Events

- `transitionend` //when a transition ends
- `animationstart` // <
- `animationend` // <

---

### Events and DOM Nodes

All DOM nodes have methods we can use to _notify_ us of an event.

//two required arguments: (what listen for, function)
- [`addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

- [`removeEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener)

```js
// Example
const button = document.getElementById('btn');
button.addEventListener('click', function() {
    consolelog('ouch');
});

//or better yet for ease
const button = document.getElementById('btn');
//event handle functions often have naming convention using 'handle'
function HandleOuch() {
    consolelog('ouch');
}

//note : using handleOuch() would call it
button.addEventListener('click', handleOuch);

//remove
button.removeEventListener('click', handleOuch);




```
elements can have multiple listeners, but no more than one for each trigger
---

### [Event Object](https://www.w3schools.com/jsref/obj_event.asp)

Event handler functions are passed an argument, when events are triggered.

This object includes lots of stuff.

- `preventDefault()`


- `target`


- `stopPropagation()`

---
    
### Default Actions

Some events have _default_ actions associated to them.

- click a link
- press down arrow
- click `submit` in a Form

In most cases handlers are called _before_ the default action takes place.

You can prevent the _default_ action from happening by calling `event.preventDefault();` in the eventListener function.

---
    
### target

- The  `target` property refers to the node where they originated. (example)
- With an `input`, use `event.target.value` to read what was entered into an `input`.

eg: function HandleOuch = function(event) {
    consolelog('ouch');
}
is usually 'event' or e


---

### Propagation

Handlers registered on nodes with children will also receive events that happen in the children.

//click actually clicks every parent up to doc//
//multiple click listeners...

```html
<div>
    <ul>
        <li><a href="#"><img scr="..."></a></li>
        ...
    </ul>
</div>
```

---
there are methods to prevent propagation

### 3 Phases of Event Propagation

- The Event Capture Phase
- The Event Target Phase
- The Event Bubbling Phase

**most** events bubble

---

<img src='./assets/propagation_bubbling.png' />

[Source](https://www.sitepoint.com/event-bubbling-javascript/)

---

`<p>A paragraph with a <button id="the-btn">button</button>.</p>`

```js
    
let para = document.querySelector("p");
let button = document.querySelector("button");

//happens second
para.addEventListener("mousedown", () => {
    console.log("Handler for paragraph.");
});

//specified node will trigger first
button.addEventListener("mousedown", event => {
//this consolelog will show all the info the event object gathers on trigger
    console.log(event);
//can see target id
    console.log(event.target.id);
    
    console.log("Handler for button.");

//2 refers to mouse button (right=2, left has no vaule, is just default)
//stops bubbling, will only trigger button event
    if (event.button == 2) event.stopPropagation();
});
```
---

## Events and the Event Loop

Events can only be processed only one at a time and when _nothing_ else is running.

This means that other page processes will be delayed until there is time to process it.

This can occur if you have long-running event handlers, or _lots_ of short-running ones.

---

[Read a little more deeply...](https://eloquentjavascript.net/15_event.html)

---
