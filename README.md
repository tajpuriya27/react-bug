# React - Bug

## How can you help:

Option #1: Work locally

1. Fork the repository.
2. Clone the forked-respository locally.
3. Install node-packages using: `npm install`
4. Start React app using script: `npm start`
5. Work around with the code and let's get to conclusion together.

Option #2: Work online

## Desciption

While working with ReactJs, I found a strange behaviour shown by react while using ternary operator.
Creating this repository to discuss about the cause of this behaviour and trying to figure out whether, it is bug in ReactJs.

---

Logically, below code seems same. But when used with react; it shows different behaviour.

- **Code No. 1**  
   using ternary operator:

  ```jsx
  // return block of app.jsx contains:
  {
    user === null ? loginForm() : noteForm();
  }
  ```

- **Code No. 2**  
   using AND operator:

  ```jsx
  // return block of app.jsx contains:
  {
    !user && loginForm();
  }
  {
    user && noteForm();
  }
  ```

### Explanation:

Both `loginForm()` and `noteForm()` returns respective forms wrapped in `<Toggable-Component/>`.  
When `Code no.1` is used, `Toggable` component preserve the `visible` state used in `Toggable` component.  
When `Code no.2` is used, `Toggable` component doesnot preserve and initialize the `visible` state used in `Toggable` component.

---

        I wonder, why my react app show this behaviour!!!

---
