import React, { useState ,useCallback} from 'react';
import ChildComponent from '../src/ChildComponent/ChildComponent.jsx';

export default function App() {
  const [count, setCount] = useState(0);

  const handleParentButton=useCallback(()=>{
    setCount(count + 1);
  },[count])

  // function handleParentButton() {
  //   setCount(count + 1);
  // }
  return (
    <>
      <div>
        <p>COUNT : {count}</p>
      </div>
      <div>
        <button onClick={handleParentButton}>PARENT BUTTON</button>
      </div>
      <br />
      <br/>
      <div>
        <ChildComponent
          handleParentButton={handleParentButton}
          buttonName="CLICK ME "
        />
      </div>
    </>
  );
}
