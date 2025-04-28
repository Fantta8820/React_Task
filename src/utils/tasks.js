export function addTask(task, title, description, setTask) {
  const newTask = {
    id: task.length + 1,
    title: title,
    description: description,
    IsCompleted: false,
  };

  setTask([...task, newTask]);
}

export function completeTask(task, taskId, setTask) {
  const newTasks = task.map((task) => {
    return task.id === taskId
      ? { ...task, IsCompleted: !task.IsCompleted }
      : task;
  });

  setTask(newTasks);
}

export function deleteTask(task, taskId, setTask) {
  const filterTasks = task.filter((task) => task.id !== taskId);

  const updatedTasks = filterTasks.map((task) => {
    return task.id > taskId ? { ...task, id: task.id - 1 } : { ...task };
  });

  setTask(updatedTasks);
}

export function onSeeDetailsClick(navigate, title, description) {
  const query = new URLSearchParams();
  query.set("title", title);
  query.set("description", description);

  navigate(`/task?${query.toString()}`);
}
