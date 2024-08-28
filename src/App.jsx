import { useEffect, useState } from "react"
import { NewTodoForm } from "./NewTodoForm"
import "./styles.css"
import { TodoList } from "./TodoList"

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }

        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Quest Log</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  )
}

//Dailys//
import { NewDailyForm } from "./DailyQuestForm"
import { dailyQuest } from "./dailyQuestLIst"

export default function App() {
  const [dailys, setDailys] = useState(() => {
    const localValue = localStorage.getItem("QUESTS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("QUESTS", JSON.stringify(dailys))
  }, [dailys])

  function addDaily(title) {
    setTodos(currentDailys => {
      return [
        ...currentDailys,
        { id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }

  function toggleDaily(id, completed) {
    setTodos(currentDailys => {
      return currentDailys.map(daily => {
        if (daily.id === id) {
          return { ...daily, completed }
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

  return (
    <>
      <NewDailyForm onSubmit={addDaily} />
      <h1 className="header">Quest Log</h1>
      <dailyList dailys={dailys} toggleDaily={toggleDaily} deleteDaily={deleteDaily} />
    </>
  )
}

