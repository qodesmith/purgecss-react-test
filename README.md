# Test - Purgecss + React

| Thing | Version |
| ----- | ------- |
| Node | 9.2.0 |
| purgecss-webpack-plugin | 0.15.0 |
| webpack | 3.10.0 |


## The Issue

The issue is Purgecss will not detect some class names being used. It then strips those styles out of the produced bundle.

Checkout the `src/entry.js` file. There's a single, simple, pure React component that is mounted to the DOM. The `className` is using template literals to calculate the final value. This is where it seems Purgecss is having an issue detecting what's valid or not. See the comment in that file.


## Installation & Usage

* git clone this repo
* cd `purgecss-react-test`
* npm i
* npm run build
* open the generated CSS file in the `dist` folder to see the output
