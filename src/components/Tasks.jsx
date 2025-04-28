import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { onSeeDetailsClick } from "./../utils/tasks";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function ShowTasks({ hasTasks, props }) {
  if (hasTasks) {
    const navigate = useNavigate();

    return (
      <ul className="flex flex-col items-center justify-center space-y-4 rounded-md bg-slate-200 p-6 shadow-sm">
        {props.task.map((task) => (
          <li key={task.id} className="flex w-full gap-1">
            <Button              
              onClick={() => props.completeTask(task.id)}
              type={"task"}
              task={task}
            >
              {task.id}. {task.title}
            </Button>
            <Button
              onClick={() =>
                onSeeDetailsClick(navigate, task.title, task.description)
              }
              type={"details"}
            >
              <ChevronRightIcon />
            </Button>
            <Button onClick={() => props.deleteTask(task.id)} type={"delete"}>
              <TrashIcon />
            </Button>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="flex flex-col items-center justify-center space-y-4 rounded-md bg-slate-200 p-6 shadow-sm">
      <p>Adicione alguma tarefa!</p>
    </ul>
  );
}

function Tasks(props) {
  return (
    <ShowTasks hasTasks={props.task.length > 0 ? true : false} props={props} />
  );
}

export default Tasks;
