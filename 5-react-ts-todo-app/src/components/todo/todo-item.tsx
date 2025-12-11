import type { Todo } from "../../types/types";

interface Props {
  todo: Todo;
  toggleTodo: (value: number) => void;
  removeTodo: (value: number) => void;
  editTodo: (value: number) => void;
}

export const TodoItem = (props: Props) => {
  const { todo, removeTodo, toggleTodo, editTodo } = props;

  return (
    <div key={todo.id} className="flex gap-4 items-center">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => {
          toggleTodo(todo.id);
        }}
      />

      <span className={`text-slate-100 ${todo.completed && "line-through"}`}>
        {todo.text}
      </span>

      <button
        onClick={() => editTodo(todo.id)}
        className="w-fit rounded-lg p-1 text-xs bg-slate-100 ml-auto"
      >
        Editar
      </button>
      <button
        onClick={() => removeTodo(todo.id)}
        className="w-fit rounded-lg p-1 text-xs bg-red-500 text-white"
      >
        Borrar
      </button>
    </div>
  );
};
