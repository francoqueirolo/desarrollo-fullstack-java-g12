import { useState, type FormEvent } from "react";
import type { Todo } from "../types/types";

export const useTodo = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  const handleAddTodo = (event: FormEvent) => {
    event.preventDefault();
    const text = newTodo.trim();
    const todo: Todo = { id: Date.now(), text: text, completed: false };

    setTodos((prev) => [todo, ...prev]);
    setNewTodo("");
  };

  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: number) => {
    const todo = todos.find((todo) => todo.id === id);
    const editedText = prompt(`Edit todo: ${todo?.text}`);

    if (editedText && todo) {
      saveEditTodo(todo.id, editedText);
    }
  };

  const saveEditTodo = (id: number, text: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, text: text.trim() } : todo
      )
    );
  };

  return {
    todos,
    newTodo,
    toggleTodo,
    removeTodo,
    setNewTodo,
    editTodo,
    handleAddTodo,
  };
};
