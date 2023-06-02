import './App.css';
import React from 'react';
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

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
function App() {
  return (

    <div className="App">

      <UserContext.Provider value={'Krishna'}>
        <ChannelContext.Provider value={'Jay Radha Madhav'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>



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
