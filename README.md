SK Calculator
A sleek and minimalistic scientific calculator web application with a dark mode toggle, featuring standard and advanced mathematical functions. Designed for quick, accurate calculations with an intuitive and responsive user interface.

Features
Basic operations: Addition, subtraction, multiplication, division

Scientific functions: sin, cos, tan, log (base 10), square root, exponentiation (^)

Dark mode toggle: Switch between dark and light themes

Responsive design: Works well on desktops and mobile devices

Sound effects: Button click sounds and special sound on calculation result

Clear and equals buttons for easy input management

Input validation with error handling for invalid expressions

Getting Started
Prerequisites
You only need a modern web browser (Chrome, Firefox, Edge, Safari) — no installations required.

Installation
Clone or download the repository:

git clone https://github.com/ShahzaibRK/Scientific-web-calculator/tree/main)
cd sk-calculator
Open index.html in your browser.

Usage
Click buttons or tap on them to input numbers and functions.

Use scientific functions like sin, cos, tan, log, √, and ^ by clicking their respective buttons.

Press = to evaluate the expression.

Click C to clear the display.

Toggle between dark and light modes using the switch at the top-right.

Enjoy subtle sound effects on button presses and results.

File Structure
index.html — Main HTML structure

style.css — Styling for layout, colors, and responsiveness

script.js — JavaScript logic for calculator functions, theme toggle, and sound effects

How It Works
The calculator parses input strings and uses JavaScript’s eval() to compute results. Scientific functions are prepended with Math. (e.g., Math.sin) for evaluation. The dark mode toggles CSS styles dynamically. Sounds are embedded as base64 audio data and triggered on interactions.

