import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Title from "./components/Title";
import "./App.css";
import { addTask, completeTask, deleteTask } from "./utils/tasks";
import { useEffect, useState } from "react";

function App() {
  const [task, setTask] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [],
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task));
  }, [task]);

  // useEffect(() => {
  //   async function fetchTasks() {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/todos?_limit=10",
  //     );
  //     const data = await response.json();
  //   }

  //   fetchTasks();
  // }, []);

  const handleCompleteTask = (taskId) => {
    completeTask(task, taskId, setTask);
  };

  const handleAddTask = (title, description) => {
    addTask(task, title, description, setTask);
  };

  const handleDeleteTask = (taskId) => {
    deleteTask(task, taskId, setTask);
  };

  return (
    <div className="flex h-screen w-screen flex-col items-center bg-slate-500 p-6">
      <div className="w-[500px] space-y-4">
        <Title>Gerenciador de Tarefas</Title>
        <AddTask addTask={handleAddTask} />
        <Tasks
          task={task}
          completeTask={handleCompleteTask}
          deleteTask={handleDeleteTask}
        />
      </div>
    </div>
  );
}

export default App;
