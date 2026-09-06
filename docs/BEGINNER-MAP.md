# Beginner Map: What are all these files?

## 1. HTML — structure

`index.html` is the page structure. It contains headings, buttons, forms, sections and links.

## 2. CSS — appearance

`style.css` controls spacing, typography, layout, borders and responsive behavior.

## 3. JavaScript — behavior

`script.js` makes buttons work, changes content, opens the cart and calculates temporary totals.

## 4. Data files

`menu-data.js` and `site-data.js` keep editable content separate from the UI code. This is useful when adapting one template for many clients.

## 5. Backend — later

A production order system normally adds a server (for example Node.js + Express), validation, authentication where needed, a database, order APIs and secure configuration.

## 6. How to start in VS Code

1. Clone this repository.
2. Open the folder in VS Code.
3. Start with `templates/01-simple-menu/index.html`.
4. Change only `menu-data.js` first.
5. Open the HTML file with a local development server.
6. Then study `script.js` one function at a time.
7. Move to the cart template only after the simple menu is understandable.

## Learning rule

AI can generate or explain code, but the goal of this repository is to make you understand each file well enough to modify it without blindly depending on prompts.
