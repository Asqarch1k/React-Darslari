import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const Timer = () => {
    const [state, setState] = useState(0);
    const [timer, setTimer] = useState(null);
    const start = () => {
      const interval = setInterval(() => {
        setState((prev) => prev + 1);
      }, 100);
      setTimer(interval);
    };

    const stop = () => {
      clearInterval(timer);
    };

    useEffect(() => {
      if (state === 50) {
        setState();
      }
    }, [state]);
  };
  return <>
  <h1>{state}</h1>
  <button >start</button>
  <button>stop</button>
  </>;
}

export default App;
