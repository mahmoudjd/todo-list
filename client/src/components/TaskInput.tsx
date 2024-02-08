import React, { useState } from "react";

interface Props {
  onAddTask: (taskName: string) => void;
}

const TaskInput = ({ onAddTask }: Props) => {
  const [newTaskInput, setNewTaskInput] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskInput(e.target.value);
  };

  const handleAddTask = (): void => {
    if (newTaskInput.trim() !== "") {
      onAddTask(newTaskInput);
      console.log(newTaskInput);
      setNewTaskInput("");
    }
  };

  return (
    <div className="container-fluid d-flex justify-content-center w-75 bg-light p-5 mb-3 border rounded">
      <input
        type="text"
        className="form-control w-75 p-2"
        placeholder="Enter a task..."
        value={newTaskInput}
        onChange={handleInputChange}
      />
      <button className="btn btn-success w-25" onClick={handleAddTask}>
        Add
      </button>
    </div>
  );
};

export default TaskInput;
