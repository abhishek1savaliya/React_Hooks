import './App.css';
import React, { useReducer } from 'react';
import ClassCounter from './components/ClassCounter';
import ComponentC from './components/ComponentC';
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
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';

export const CountContext = React.createContext()

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment': return state + 1
    case 'decrement': return state - 1
    case 'reset': return initialState
    default: return state
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (

    <div className="App">
      <div>
        Count - {count}
        <CountContext.Provider value={{ countState: count, countdispatch: dispatch }}>
          <ComponentA />
          <ComponentB />
          <ComponentC />
        </CountContext.Provider>

      </div>

      {/* <CounterThree /> */}
      {/* <CounterTwo /> */}
      {/* <CounterOne /> */}
      {/* 
      <UserContext.Provider value={'Krishna'}>
        <ChannelContext.Provider value={'Jay Radha Madhav'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}



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
