import { useState } from "react";

export function NewDailyQuest({ onSubmit }) {
  const [newQuest, setNewQuest] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newQuest === "") return;

    onSubmit(newItem);

    setNewQuest("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-daily-quest">
      <div className="form-row-one">
        <label htmlFor="quest">Set Daily Quests</label>
        <input
          value={newQuest}
          onChange={(e) => setNew(e.target.value)}
          type="text-one"
          id="quest"
        />
      </div>
      <button className="btn-one">Accept</button>
    </form>
  );
}
