import React,{useRef,useState} from 'react'

const TimerExample = () => {
  const [seconds,setSeconds]=useState(0);
  const intervalRef=useRef();

  const startTimer=()=>{
    intervalRef.current=setInterval(()=>{
      setSeconds((s)=>s+1);
    },1000);
  };
  const stopTimer=()=>{
    clearInterval(intervalRef.current);
  };
  return (
    <div>
      <p>{seconds} seconds</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  )
}

export default TimerExample
