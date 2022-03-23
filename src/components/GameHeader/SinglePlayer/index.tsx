import React, { useEffect, useState } from "react";
import * as Component from './styles';


export const SinglePlayerHeader = () => {
  const [timeValue, setTimeValue] = useState(0);
  let interval;

  function startTimer() {
    interval = setInterval(() => {
      setTimeValue(timeValue => timeValue + 1)
    }, 1000)
  }

  function convertHMS(value:string) {
    const sec = parseInt(value, 10); // convert value to number if it's string
    let hours   = Math.floor(sec / 3600); // get hours
    let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
    let seconds = sec - (hours * 3600) - (minutes * 60); //  get seconds
    
    let stringMinutes:string = minutes.toString();
    let stringSeconds:string = seconds.toString();

    // add 0 if value < 10; Example: 2 => 02
    if (minutes < 10) {stringMinutes = '0' + minutes;}
    if (seconds < 10) {stringSeconds = '0' + seconds;}

    return stringMinutes + ':' + stringSeconds; // Return is HH : MM : SS
  }

  useEffect(() => {
    startTimer();
  }, [])

  return <Component.Container>
    <Component.TimerContainer>
      {convertHMS(timeValue.toString())}
    </Component.TimerContainer>
  </Component.Container>
}