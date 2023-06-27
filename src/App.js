import { useState, useEffect } from "react";

export default function App() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const initial = new Date("2023-06-30") - new Date().getTime();
    const countDown = setInterval(() => {
      setTime(initial);
    }, 1000);

    return () => clearInterval(countDown);
  }, [time]);

  const timeTransformer = (str) => {
    return str.toString().padStart(2, 0);
  };

  const days = timeTransformer(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = timeTransformer(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (60 * 60 * 1000))
  );
  const minutes = timeTransformer(
    Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
  );

  const seconds = timeTransformer(Math.floor((time % (1000 * 60)) / 1000));

  return (
    <div>
      {days}:{hours}:{minutes}:{seconds}
    </div>
  );
}
