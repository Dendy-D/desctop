import React from 'react';

import useDragger from '../../hooks/useDragger';
import './desktop.scss';

function App() {

  useDragger('container');

  return (
    <div className="desktop">
      <div tabIndex={0} id="container" className="container">
        <div className="label" />
        <div className="descr">Trashcan</div>
      </div>
    </div>
  );
}

export default App;
