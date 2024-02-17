import React, { useState, useEffect } from 'react';

function DigitalClock() {
   const [time, setTime] = useState(new Date());

   useEffect(() => {
      const intervalId = setInterval(() => {
         setTime(new Date());
      }, 1000);

      return () => clearInterval(intervalId);
   }, []);

   return (
      <div className="digital-clock">{time.toLocaleTimeString()}</div>
   );
}

export default DigitalClock;