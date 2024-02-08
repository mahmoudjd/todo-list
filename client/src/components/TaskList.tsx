import TaskItem from "./TaskItem";

interface Task {
  _id: string;
  name: string;
  completed: boolean;
}

interface Props {
  tasks: Array<Task>;
  onDeleteTask: (id: string) => void;
  onEditTask: (id: string, newName: string) => void;
  onToggleTaskCompletion: (id: string) => void;
}

const TaskList = ({
  tasks,
  onDeleteTask,
  onEditTask,
  onToggleTaskCompletion,
}: Props) => {
  return (
    <div className="w-75">
      <ul className="list-group w-100">
        {tasks.map((task) => (
          <TaskItem
            key={task._id}
            task={task}
            onDeleteTask={onDeleteTask}
            onEditTask={onEditTask}
            onToggleTaskCompletion={onToggleTaskCompletion}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
