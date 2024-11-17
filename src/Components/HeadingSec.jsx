/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const HeadingSec = ({ HideType, Heading, text }) => {
  const [time, setTime] = useState({
    days: 7,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: "Asia/Karachi",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };
      const formattedTime = now.toLocaleTimeString("en-US", options).split(":");
      const currentHours = parseInt(formattedTime[0], 10);
      const currentMinutes = parseInt(formattedTime[1], 10);
      const currentSeconds = parseInt(formattedTime[2], 10);

      setTime({
        days: 7,
        hours: currentHours,
        minutes: currentMinutes,
        seconds: currentSeconds,
      });
    };

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center ">
      <div className="w-full flex flex-col">
        <div className="flex p-8 w-full gap-2 items-center">
          <span className="bg-red-600 rounded w-5 h-16"></span>
          <h1 className="text-3xl text-red-400 font-bold">{Heading}</h1>
        </div>

        <div className="w-full flex  items-center gap-20 p-8 text-xl font-bold">
          <h1 className="hd text-3xl font-bold">{text}</h1>

          {HideType === "display" && (
            <div className="timer flex gap-8 text-3xl mt-4">
              <div className="flex flex-col gap-3 items-center">
                <span className="text-sm">Days</span>
                <span>{String(time.days).padStart(2, "0")} :</span>
              </div>

              <div className="flex flex-col gap-3 items-center">
                <span className="text-sm">Hours</span>
                <span>{String(time.hours).padStart(2, "0")} :</span>
              </div>
              <div className="flex flex-col gap-3 items-center">
                <span className="text-sm">Minutes</span>
                <span>{String(time.minutes).padStart(2, "0")} :</span>
              </div>
              <div className="flex flex-col gap-3 items-center">
                <span className="text-sm">Seconds</span>
                <span>{String(time.seconds).padStart(2, "0")} :</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeadingSec;
