import "./styles.css";

export default function App() {
  return (
    <>
      <form className="new-quest-form">
        <div className="form-row">
          <label htmlFor="quest">Add a New Quest</label>
          <input type="text" id="quest"></input>
        </div>
      </form>
      <h1 className="Header">Quest Log</h1>
      <ul className="list">
        <li>
          <label>
            Item 1
          </label>
          <button className="btn btn-yay">Complete</button>
          <button className="btn btn-danger">Abandon</button>
        </li>
      </ul>
      <form className="new-daily-form">
        <div className="daily-form-row">
          <label htmlFor="daily">Add a Daily Quest</label>
          <input type="text" id="daily"></input>
        </div>
      </form>
      <h2 className="daily-header"> Daily Quest Log</h2>
      <ul className="dailyList">
        <li>
          <label>
            <input type="checkbox" />
            Item 1
          </label>
          <button className="btn btn-danger">Abandon</button>
        </li>
      </ul>
    </>
  );
}
