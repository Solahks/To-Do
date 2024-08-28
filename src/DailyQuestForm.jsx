export function NewDailyQuest({ onSubmit }) {
    const [newItem, setNewQuest] = useState("")
  
    function handleSubmit(e) {
      e.preventDefault()
      if (newItem === "") return
  
      onSubmit(newItem)
  
      setNewQuest("")
    }
  
    return (
      <form onSubmit={handleSubmit} className="new-daily-quest">
        <div className="form-row-one">
          <label htmlFor="quest">Set Daily Quests</label>
          <input
            value={newItem}
            onChange={e => setNewItem(e.target.value)}
            type="text-one"
            id="quest"
          />
        </div>
        <button className="btn-one">Accept</button>
      </form>
    )
  }