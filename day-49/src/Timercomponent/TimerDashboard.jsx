import { useEffect, useState } from "react";
import timerData from "../data/data";
import Timer from "./Timer";
import TimerForm from "./TimerForm";
export default function TimerDashboard() {
  console.log(timerData);
  const [saveData, setSaveData] = useState([]);
  useEffect(() => {
    setSaveData(timerData);
  }, [saveData]);
  return (
    <div>
      <h1>Timers</h1>
      {timerData &&
        timerData.map((data, index) => {
          return (
            <Timer
              key={index}
              title={data.title}
              project={data.project}
              elapsed={data.elapsed}
              runningSince={data.runningSince}
            />
          );
        })}
      <TimerForm title={"Title"} project={"Project"} />
    </div>
  );
}
