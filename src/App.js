import './App.css';
import React, { useReducer } from 'react';
import ClassCounter from './components/ClassCounter';
import Datafetching from './components/Datafetching';
import HookCOunter from './components/HookCOunter';
import HookCOunterFour from './components/HookCOunterFour';
import HookCOunterTwo from './components/HookCOunterTwo';
import HookCounterOne from './components/HookCounterOne';
import HookCounterThree from './components/HookCounterThree';
import HookMouse from './components/HookMouse';
import IntervalHookCounter from './components/IntervalHookCounter';
import MouseContainer from './components/MouseContainer';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import CounterThree from './components/CounterThree';
import DataFetchinOne from './components/DataFetchinOne';


function App() {

  return (

    <div className="App">
      {/* <Datafetching /> */}
      <DataFetchinOne />


      {/* <Datafetching /> */}
      {/* <IntervalHookCounter /> */}
      {/* <MouseContainer /> */}
      {/* <HookMouse /> */}
      {/* <HookCounterOne /> */}
      {/* <HookCOunterFour /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCOunterTwo /> */}
      {/* <HookCOunter /> */}
      {/* <ClassCounter /> */}
    </div>
  );
}

export default App;
