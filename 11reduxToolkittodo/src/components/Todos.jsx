import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todos() {
  const todos = useSelector(state => state.todo.todos) // ✅ FIX
  const dispatch = useDispatch()

  return (
    <>
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
          >
            <div className="text-white">{todo.text}</div>

            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 py-1 px-4 rounded hover:bg-red-600"
            >
              🗑
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos
