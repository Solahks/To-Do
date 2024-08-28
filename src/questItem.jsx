export function questItem({ completed, id, title, toggleDaily, deleteDaily }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleDaily(id, e.target.checked)}
        />
        {title}
      </label>
      <button onClick={() => deleteDaily(id)} className="btn btn-danger">
        Abandon
      </button>
      <button onClick={() => deleteDaily(id)} className="btn btn-danger">
        Complete!
      </button>
    </li>
  );
}
