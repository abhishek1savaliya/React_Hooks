import './App.css';
import React from 'react';
import FocusInput from './components/FocusInput';
import ClassTimes from './components/ClassTimes';
import HookTimer from './components/HookTimer';


function App() {

  return (

    <div className="App">
      <HookTimer />
      <ClassTimes />
      {/* <FocusInput /> */}
    </div>
  );
}

export default App;
