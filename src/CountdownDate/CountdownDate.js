import moment from "moment";
import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// Props By new Date()  in  As you Wish
const CountdownDate = (props) => {
  let location = useLocation();
  const [countdownDate, setCountdownDate] = useState(
    new Date(props.time).getTime()
  );

  const [render, setRender] = useState(1);
  const [day, setDay] = useState();

  const [horse, sethour] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState(0);
  let Data = "";
  useEffect(() => {
    setCountdownDate(new Date(props.time).getTime());
    setRender(render + 34);
  }, [props]);
  // console.log(new Date())
  useEffect(() => {
    if (countdownDate) {
      // console.log("auctionTime",auctionTime)
      // console.log("timeVal",timeVal)
      // console.log("remainingTime",AuctionDate)
      let date = new Date(props.time);
      let auctionTime = Math.floor(date.getTime() / 1000);
      let currentTime = new Date();
      // console.log("first",currentTime)
      let timeVal = Math.floor(currentTime.getTime() / 1000);
      let remainingTime = auctionTime - timeVal;
      let AuctionDate = moment(props.time).format("DD MMM YYYY");
      let Data = remainingTime * 1000;
      setDay(Math.floor(Data / (1000 * 60 * 60 * 24)));
      sethour(Math.floor((Data % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMinutes(Math.floor((Data % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((Data % (1000 * 60)) / 1000));
    }
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
      if (minutes == 0) {
        clearInterval(myInterval);
        if (minutes === 0) {
          sethour(horse - 1);
          setMinutes(59);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });
  return (
    <div>
      <>
        {day == 0 ? (
          <>
            {horse < 10 ? `0${horse}` : horse}:
            {minutes < 10 ? `0${minutes}` : minutes}:
            {seconds < 10 ? `0${seconds}` : seconds}
          </>
        ) : null}
      </>
    </div>
  );
};

export default CountdownDate;
