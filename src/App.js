import './App.css';
import React , {useState} from 'react';

function App() {
  let [tocount , setCount] = useState('')
  
  let nums = ['1' , '2' , '3' , '4' , '5' , '6' , '7' , '8' , '9' , '0']

  let opers = ['+' , '-' , '*' , '/']

  let htmlopers = opers.map((item) => (
    <button onClick={() => addoper(item)}>{item}</button>
  ))

  let htmlnums = nums.map((item) => (
    <button onClick={() => addnum(item)}>{item}</button>
  ))

  function addnum(num) {
    setCount(tocount += num)
  }

  function addoper(oper) {
      if(tocount[tocount.length - 1] != '+' && tocount[tocount.length - 1] != '-' && tocount[tocount.length - 1] != '/' && tocount[tocount.length - 1] != '*'){
          setCount(tocount += oper)
      }
  }

  function tores() {
    if(tocount[tocount.length - 1] != '+' && tocount[tocount.length - 1] != '-' && tocount[tocount.length - 1] != '/' && tocount[tocount.length - 1] != '*'){
      let result = eval(tocount)
      setCount(result)
    }
  }

  function toclear() {
    setCount('')
  }

  return (
    <>
      <div className='calculator'>
        <div className='result'>{tocount}</div>
        <div className='calcgrid'>
          {htmlopers}
          {htmlnums}
          <button onClick={tores}>=</button>
          <button onClick={toclear}>C</button>
        </div>
      </div>
    </>
  );
}

export default App;
