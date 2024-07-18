"use client";
import React, { useEffect, useState } from 'react'

export const Timer = () => {
   const [time, setTime] = useState(new Date());

   useEffect(() => {
     const timer = setInterval(() => {
       setTime(new Date());
     }, 1000);

     return () => clearInterval(timer);
   }, []);

   const formatTime = (date: Date) => {
     return `${date.getHours().toString().padStart(2, "0")}:${date
       .getMinutes()
       .toString()
       .padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")}`;
   };

   const formatDate = (date: Date) => {
     return `${date.getDate().toString().padStart(2, "0")}/${(
       date.getMonth() + 1
     )
       .toString()
       .padStart(2, "0")}/${date.getFullYear()}`;
   };
  return (
    <div className='flex gap-2 items-center justify-center mb-2'>
      <div className="text-xl "> {formatDate(time)}</div>
      <small > | </small>
      <div className="text-xl "> {formatTime(time)}</div>
    </div>
  );
}
