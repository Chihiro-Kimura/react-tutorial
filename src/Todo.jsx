const Todo = ({ todo, toggleTodo }) => {
  const handleTodoClick = () => {
    toggleTodo(todo.id);
  };

  return (
    <div>
      <label>
        <input type="checkbox" checked={todo.completed} onChange={handleTodoClick} />
        {todo.text}
      </label>
    </div>
  );
};

export default Todo;
