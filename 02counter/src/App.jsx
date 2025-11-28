import { useState } from 'react'

function App() {
let [counter, setCounter] = useState(5)
  //let counter = 15;
  const addValue = () => {
    if(counter>=20) return;

    //scenario 1: 
    
    //counter += 1;
    //setCounter(counter);

    //scenario 2: when we have to update multiple values at same time
    //when we have to update like this so is it update thrice ---ans NO
    //setCounter(counter)+1;
    //setCounter(counter)+1;
    //setCounter(counter)+1;

    //So correct way is to use function form of setState
    setCounter( (prevCounter) => prevCounter + 1 );
    setCounter( (prevCounter) => prevCounter + 1 );

  }



  const removeValue = () => {
    if(counter<=0) return;

    //scenario 1: 
    
    //counter-=1;
    //setCounter(counter);

   //scenario 2: when we have to update multiple values at same time
    //when we have to update like this so is it update thrice ---ans NO
    //setCounter(counter)-1;
    //setCounter(counter)-1;
    //setCounter(counter)-1;

    //So correct way is to use function form of setState
    setCounter( (prevCounter) => prevCounter - 1 );
    setCounter( (prevCounter) => prevCounter - 1 );
    setCounter( (prevCounter) => prevCounter - 1 );
  }

  return (
    <>
    <h1> React Counter </h1>
    <h2> Counter Value: {counter} </h2>
    <button onClick={addValue}> Add Value </button>
    <br/>
    <button onClick={removeValue}> Remove Value </button>
    </>
  )
}

export default App
