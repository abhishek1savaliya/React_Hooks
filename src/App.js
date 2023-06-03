import './App.css';
import React, { useEffect } from 'react';

import DocTitleOne from './components/DocTitleOne';
import DocTitleTwo from './components/DocTitleTwo';

function App() {
  return (
    <div className="App">
      <DocTitleOne />
      <DocTitleTwo />
      {/* <HookTimer /> */}
      {/* <ClassTimes /> */}
      {/* <FocusInput /> */}
    </div>
  );
}

export default App;