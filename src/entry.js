import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css'

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

ReactDOM.render(
  <Test />,
  document.querySelector('#app')
);
