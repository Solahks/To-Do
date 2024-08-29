import { useState } from "react";
import "./styles.css";

export default function App() {
  const [newQuest, setNewQuest] = useState("");
  const [newDaily, setNewDaily] = useState("");
  const [tasks, setTasks] = useState([]);
  const [dailys, setDailys] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    setTasks((currentTasks) => {
      return [
        ...currentTasks,
        { id: crypto.randomUUID(), title: newQuest, completed: false },
      ];
    });
  }

  function handleDailySubmit(e) {
    e.preventDefault();

    setDailys((currentDailys) => {
      return [
        ...currentDailys,
        { id: crypto.randomUUID(), title: newDaily, completed: false },
      ];
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="new-quest-form">
        <div className="form-row">
          <label htmlFor="quest">Add a New Quest</label>
          <input
            value={newQuest}
            onChange={(e) => setNewQuest(e.target.value)}
            type="text"
            id="quest"
          ></input>
        </div>
        <button className="btn">Accept</button>
      </form>
      <h1 className="Header">Quest Log</h1>
      <ul className="list">
        {tasks.map((task) => {
          return (
            <li>
              <label>{task.title}</label>
              <button className="btn btn-yay">Complete</button>
              <button className="btn btn-danger">Abandon</button>
            </li>
          );
        })}
      </ul>
      <form onSubmit={handleDailySubmit} className="new-daily-form">
        <div className="daily-form-row">
          <label htmlFor="daily">Add a Daily Quest</label>
          <input
            value={newDaily}
            onChange={(e) => setNewDaily(e.target.value)}
            type="text"
            id="daily"
          ></input>
        </div>
        <button className="btn dailyBtn">Accept</button>
      </form>
      <h2 className="daily-header"> Daily Quest Log</h2>
      <ul className="dailyList">
        {dailys.map((daily) => {
          return (
            <li>
              <label>
                <input type="checkbox" />
                {daily.title}
              </label>
              <button className="btn btn-danger">Abandon</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
