import { useEffect, useState } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

interface Task {
  _id: string;
  name: string;
  completed: boolean;
}

const Main = () => {
  const [taskList, setTaskList] = useState<Task[]>([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch(`${import.meta.env.API_HOST}/tasks`);
      if (!response.ok) {
        throw new Error("Failed to fetch tasks");
      }
      const data = await response.json();
      setTaskList(data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const addTask = async (newTaskName: string) => {
    try {
      const response = await fetch(`${import.meta.env.API_HOST}/tasks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: newTaskName, completed: false }),
      });
      if (!response.ok) {
        throw new Error("Failed to add task");
      }
      fetchTasks();
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const deleteTask = async (id: string) => {
    try {
      const response = await fetch(`${import.meta.env.API_HOST}/tasks/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete task");
      }
      fetchTasks();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const toggleTaskCompletion = async (id: string) => {
    try {
      const taskToUpdate = taskList.find((task) => task._id === id);
      if (!taskToUpdate) return;

      const response = await fetch(`${import.meta.env.API_HOST}/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...taskToUpdate,
          completed: !taskToUpdate.completed,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to update task");
      }
      fetchTasks();
    } catch (error) {
      console.error("Error toggling task completion:", error);
    }
  };

  const editTask = async (id: string, newName: string) => {
    try {
      const taskToUpdate = taskList.find((task) => task._id === id);
      if (!taskToUpdate) return;

      const response = await fetch(`${import.meta.env.API_HOST}/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...taskToUpdate, name: newName }),
      });
      if (!response.ok) {
        throw new Error("Failed to edit task");
      }
      fetchTasks();
    } catch (error) {
      console.error("Error editing task:", error);
    }
  };

  return (
    <main
      className="container mt-4 d-flex flex-column align-items-center"
      style={{ flex: "1 0 auto" }}
    >
      <TaskInput onAddTask={addTask} />
      <TaskList
        tasks={taskList}
        onDeleteTask={deleteTask}
        onEditTask={editTask}
        onToggleTaskCompletion={toggleTaskCompletion}
      />
    </main>
  );
};

export default Main;
