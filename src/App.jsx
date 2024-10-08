import { useState } from "react";
import "./styles.css";

export default function App() {
  const [newQuest, setNewQuest] = useState("");
  const [newDaily, setNewDaily] = useState("");
  const [tasks, setTasks] = useState([]);
  const [dailies, setDailies] = useState([]);
  const [count, setCount] = useState(0);
  const [dcount, setDcount] = useState(0);

  //FUNCTIONS FOR ONE TIME QUESTS(TASKS)//
  function handleSubmit(e) {
    e.preventDefault();

    setTasks((currentTasks) => {
      return [
        ...currentTasks,
        { id: crypto.randomUUID(), title: newQuest, completed: false },
      ];
    });

    setNewQuest("");
  }

  function deleteTask(id) {
    setTasks((currentTasks) => {
      return currentTasks.filter((task) => task.id !== id);
    });
  }

  function completeTask(id) {
    setTasks((currentTasks) => {
      return currentTasks.filter((task) => task.id !== id);
    });
  }

  //FUNCTIONS FOR DAILY QUESTS//

  function handleDailySubmit(e) {
    e.preventDefault();

    setDailies((currentDailies) => {
      return [
        ...currentDailies,
        { id: crypto.randomUUID(), title: newDaily, completed: false },
      ];
    });

    setNewDaily("");
  }

  function countDailies() {
    setDailies((currentDailies) => {
      return currentDailies.map((daily) => {
        if (daily.completed === true) {
          setDcount(() => dcount + 1);
        }
        return daily;
      });
    });
  }

  // const countDailies = () => currentDailies.filter(d => d.completed === true).length;

  const toggleDaily = (id, completed) => {
    setDailies((prev) =>
      prev.map((d) => (d.id === id ? { ...d, completed: completed } : d))
    );
    countDailies();
  };

  const resetAllDailies = (id, completed) => {
    const resetDailies = dailies.map((d) =>
      d.id === id ? { ...d, completed: completed } : { ...d, completed: false }
    );
    setDailies(resetDailies);
  };

  function deleteDaily(id) {
    setDailies((currentDailies) => {
      return currentDailies.filter((daily) => daily.id !== id);
    });
  }

  return (
    <div className="bodywrapper">
      <header>Quest Log</header>
      <div id="completeQuest">Completed- {count} </div>
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
      <h1 className="quest-header">One Time Quests</h1>
      <ul className="list">
        {tasks.length === 0 && "All Quests Completed!"}
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <label>{task.title}</label>
              <button
                onClick={() => {
                  completeTask(task.id);
                  setCount((prev) => prev + 1);
                }}
                className="btn btn-yay"
              >
                Complete
              </button>
              <button
                onClick={() => deleteTask(task.id)}
                className="btn btn-danger"
              >
                Abandon
              </button>
            </li>
          );
        })}
      </ul>
      <div id="completeDaily">Completed Daily- {dcount} </div>
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
      <h2 className="daily-header"> Daily Quests</h2>
      <button onClick={resetAllDailies} className="clearToggle">
        Clear checks
      </button>
      <ul className="dailyList">
        {dailies.length === 0 && "No Set Daily Quests."}
        {dailies.map((daily) => {
          console.log("daily id: ", daily.id);
          return (
            <li key={daily.id}>
              <label>
                <input
                  type="checkbox"
                  checked={daily.completed}
                  onChange={(e) => toggleDaily(daily.id, e.target.checked)}
                />
                {daily.title}
              </label>

              <button
                onClick={() => deleteDaily(daily.id)}
                className="btn btn-danger"
              >
                Abandon
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
