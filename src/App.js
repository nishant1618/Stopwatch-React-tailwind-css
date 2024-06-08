
import './App.css';
import { useEffect , useState } from 'react';

function App() {
  const [time,setTime] = useState(0);
  const [running,setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if(running){
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      },10);
    }else if(!running){
      clearInterval(interval);
    }
    return () => clearInterval(interval)
  },[running]);


 
    return (
      <>
      <div class="bg-gray-100 dark:bg-gray-800 min-h-screen h-full w-full flex flex-col items-center">
      <div className = "flex flex-col items-center justify-center py-8 ">
       <h1 className="text-5xl text-black dark:text-gray-100 mt-32 m-3">Stop Watch ⏱️</h1>
      <div className="timerbg-gray-200 dark:bg-white-800 border-8 border-gray-600 dark:border-gray-200 m-4 p-2 rounded-full h-72 w-72 flex items-center justify-center shadow-lg">
        <span  class="text-5xl text-gray-800 dark:text-gray-100 countdown font-mono text-">
        <span className="digits" >
          {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
        </span>
        <span className="digits" >
          {("0" + Math.floor((time / 1000) % 60)).slice(-2)}.
        </span>
        <span className="digits mili-sec">
          {("0" + ((time / 10) % 100)).slice(-2)}
        </span>
        </span>
      </div>
      <div className='flex flex-row space-x-4 '>
        {running ? (
           <button className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={() => {setRunning(false)}}>Pause</button>
        ) : (
          <button className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600" onClick={() => {setRunning(true)}}>Start</button>
         
        )}
         
          
          <button className="w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" onClick={() => {setTime(0)}}>Reset</button>
        </div>
        </div>
        </div>
        </>
  );
  


}

export default App;
