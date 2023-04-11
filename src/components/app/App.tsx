import React from 'react';

import TaskBar from '../Taskbar/Taskbar';
import Desktop from '../Desktop/Desktop';

function App() {
  return (
    <div className="App">
      <TaskBar />
      <main>
        <Desktop />
      </main>
    </div>
  );
}

export default App;
