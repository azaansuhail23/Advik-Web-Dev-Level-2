
JavaScript DOM Quiz — Medium Level
Q1. DOM Selection

Given the HTML:

```HTML
<div id="app">
  <button class="btn">Save</button>
  <button class="btn">Cancel</button>
</div>
```

<div id="app">
  <button class="btn">Save</button>
  <button class="btn">Cancel</button>
</div>

What will this return?

document.querySelectorAll("#app .btn").length

A. 0
B. 1
C. 2 ✅
D. undefined

Q2. Creating Elements

What will the following code do?

```HMTL
const p = document.createElement("p");
p.textContent = "Hello";
document.body.appendChild(p);
```

A. Replace the entire body with Hello
B. Create a paragraph containing Hello and add it to the body ✅
C. Create a paragraph but keep it detached from the document
D. Throw an error because p cannot be 

![1787935736478](image/Quiz/1787935736478.png)
