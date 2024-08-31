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

    setNewQuest("")
  }

  function handleDailySubmit(e) {
    e.preventDefault();

    setDailys((currentDailys) => {
      return [
        ...currentDailys,
        { id: crypto.randomUUID(), title: newDaily, completed: false },
      ];
    });

    setNewDaily("")
  }

  function toggleDaily(id, completed) {
    setDailys(currentDailys => {
      return currentDailys.map(daily => {
        if (daily.id === id) {
          return {...daily, completed}
        }

        return daily
      })
    })
  }

  function deleteDaily(id) {
    setDailys(currentDailys => {
      return currentDailys.filter(daily => daily.id !== id)
    })
  }
  
  function deleteTask(id) {
    setTasks(currentTasks => {
      return currentTasks.filter(task => task.id !== id)
    })
  }

  function completeTask(id) {
    setTasks(currentTasks => {
      return currentTasks.filter(task => task.id !== id)
    })
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
            <li key={task.id}>
              <label>{task.title}</label>
              <button onClick={ () => completeTask(task.id)} className="btn btn-yay">Complete</button>
              <button onClick={ () => deleteTask(task.id)} className="btn btn-danger">Abandon</button>
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
            <li key={daily.id}>
              <label>
                <input type="checkbox"
                checked={daily.completed}
                onChange={e => toggleDaily(daily.id, e.target.checked)} />
                {daily.title}
              </label>
              <button onClick={ () => deleteDaily(daily.id)} className="btn btn-danger">Abandon</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
