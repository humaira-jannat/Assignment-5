# README

##1. Difference between getElementById, getElementsByClassName,
- **getElementById** → Finds one element by it's **Id**
- **getElementsByClassName**  → Finds many elements with the same **class** (returns a list).
- **queryselector**  →  Finds the **first match** of a css selector(`#id`, `.class`, `tag`).
- **queryselectorAll**   → Finds **all matches** of a css selector (returns a list).

##2. how to create and insert a new element into the DOM steps:
1. create element  →  `let div =document.createElement("div");`
2.Add content/attribute `div.textcontent ="Hello";`
3. Insert into page `document.body.appendChild(div);`
---
## 3. what is event bubbling?
when you click a child element , the event travels **up** to it's  parents too (like bubbles rising in water).
---
## 4. What is Event Delegation? Why useful?
-put one event listener on the **parent** instead of each child.
-useful because :
  -saves memory (less listeners).
  -works for future elements added dynamically.
  ---
  ##5. Difference between preventDefault() and stopPropagation()
  - **preventDefault()**  stpos the browser's default action (e.g., stop link from opening,stop form from submitting).
  - **stoppropagation()**  stops the event from bubbling up to parent elements.