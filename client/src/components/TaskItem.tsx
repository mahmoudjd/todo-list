import React, { useState } from "react";
import { BsCheckCircle, BsTrash, BsPencilSquare } from "react-icons/bs";

interface Task {
  _id: string;
  name: string;
  completed: boolean;
}
interface Props {
  task: Task;
  onDeleteTask(id: string): void;
  onToggleTaskCompletion(id: string): void;
  onEditTask(id: string, name: string): void;
}

const TaskItem = ({
  task,
  onDeleteTask,
  onToggleTaskCompletion,
  onEditTask,
}: Props) => {
  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState(task.name);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
  };

  const handleEditConfirm = (): void => {
    if (newName.trim() !== "") {
      onEditTask(task._id, newName);
      setEditing(false);
    }
  };

  return (
    <li
      className={`list-group-item d-flex justify-content-between align-items-center ${
        task.completed ? "bg-success bg-opacity-10 text-white" : "bg-light"
      }`}
    >
      {!editing ? (
        <span className={`p-2 m-1 ${task.completed ? "text-success" : ""}`}>
          {task.name}
        </span>
      ) : (
        <input
          type="text"
          className="form-control w-75 p-2"
          value={newName}
          onChange={handleNameChange}
        />
      )}
      <div className="btn-group">
        {!editing ? (
          <>
            <button
              className="btn btn-outline-success"
              onClick={() => onToggleTaskCompletion(task._id)}
            >
              <BsCheckCircle />
            </button>
            <button
              className="btn btn-outline-warning"
              onClick={() => setEditing(true)}
            >
              <BsPencilSquare />
            </button>
            <button
              className="btn btn-outline-danger"
              onClick={() => onDeleteTask(task._id)}
            >
              <BsTrash />
            </button>
          </>
        ) : (
          <>
            <button
              className="btn btn-outline-success"
              onClick={handleEditConfirm}
            >
              ok
            </button>
            <button
              className="btn btn-outline-danger"
              onClick={() => setEditing(false)}
            >
              no
            </button>
          </>
        )}
      </div>
    </li>
  );
};
export default TaskItem;
