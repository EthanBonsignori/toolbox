import { Day } from 'date-fns';
import React from 'react';
import DateText from './components/DateText';
import './styles/base.css';

const selectedDayOption = 4 as Day;

function App() {
  return (
    <div className="h-screen w-screen flex flex-col">
      <main className="h-[90%]">
        <h1 className="text-3xl font-display italic">Techtro Board</h1>
        <ul className=""></ul>
      </main>
      <div className="h-[10%]">
        <div className="h-1/4 border-b border-black relative">
          <div className="absolute-center-x bottom-[-1px] h-[40px] w-px bg-black"></div>
          <div className="absolute-center-x bottom-[-35px]">
            <DateText date={new Date()} weekday={4} futureDate />
          </div>
          {/* {mockEvents.map(event => (
            <li key={event.id}>{event.createdBy}</li>
          ))} */}
        </div>
      </div>
    </div>
  );
}

export default App;
