import React from 'react';
import '../App.css';


type Props = {
    age: number;
    onClick: () => void;
}

export const App: React.FC<Props> = ( {age, onClick} ) => {
  return (
    <div className="App">
        <div> Age: {age} </div>
        <button onClick={onClick}>click me</button>
    </div>
  );
};
