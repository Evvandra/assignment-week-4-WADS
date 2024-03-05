import { useState } from "react";

export function TodoItem({ completed, id, title, toggleTodo, deleteTodo, editTodo }) {
  return (
    <li key={id}>
      <label className={`grow text-black ${completed ? 'line' : ''}`}>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button className="btn flex-none" onClick={() => editTodo(id)}>
        Edit
      </button>
      <button className="btn btn-danger flex-none" onClick={() => deleteTodo(id)}>
        Delete
      </button>
    </li>
  );
}