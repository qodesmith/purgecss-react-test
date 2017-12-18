# Test: Purgecss + React

Issue: https://github.com/FullHuman/purgecss-webpack-plugin/issues/7

| Thing | Version |
| ----- | ------- |
| Node | 9.2.0 |
| purgecss-webpack-plugin | 0.15.0 |
| webpack | 3.10.0 |


## Installation & Usage

* git clone this repo
* cd `purgecss-react-test`
* npm i
* open `src/entry.js` and remove the comment (it's the same comment as the example below)
* npm run build
* open the generated CSS file in the `dist` folder to see the output


## The Issue

The issue is Purgecss will not detect some class names being used. It then strips those styles out of the produced bundle.

Check out the `src/entry.js` file. There's a single, simple, pure React component that is mounted to the DOM. The `className` is using template literals to calculate the final value. This is where it seems Purgecss is having an issue detecting what's valid or not. See the comment in that file.


## Example

```jsx
const Test = () => {
  const bg = 'bg-blue';

  /*
    NOTE: Remove this comment before running the code.
    Purgecss will pick up the word 'purple' in this comment and not reproduce the error.
    ------------------------------------------------------------------------------------
    The 'purple' class is clearly used here but Purgecss will strip it out.
    The issue seems to be the combination of {` characters.
    If you put a space before 'purple', Purgecss will detect it and leave it in.
  */
  return (
    <h1 className={`purple ${bg}`}>Hello world!</h1>
  );
}
```
