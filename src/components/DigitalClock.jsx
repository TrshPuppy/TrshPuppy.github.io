import React, { useState, useEffect } from 'react';

const DigitalClock = () => {
   const [time, setTime] = useState(new Date());

   useEffect(() => {
      const intervalId = setInterval(() => {
         setTime(new Date());
      }, 1000);

      return () => clearInterval(intervalId);
   }, []);

   const formatTime = (date) => {
      return new Intl.DateTimeFormat('en-US', {
         hour12: true,
         weekday: 'short',
         month: 'short',
         day: 'numeric',
         hour: 'numeric',
         minute: 'numeric',
      }).format(date);
   };

   return (
      <div className="digital-clock">
         {formatTime(time)}
      </div>
   );
};

export default DigitalClock;
