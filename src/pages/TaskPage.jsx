import { useNavigate, useSearchParams } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";
import Title from "./../components/Title";

function TaskPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  const navigate = useNavigate();

  return (
    <div className="flex h-screen w-screen flex-col items-center space-y-4 bg-slate-500 p-6">
      <div className="w-[500px] space-y-4">
        <button className="absolute top-7" onClick={() => navigate(-1)}>
          <ChevronLeftIcon className="text-white" />
        </button>
        <Title>Sobre a Tarefa</Title>
      </div>
      <div className="flex w-[500px] flex-col items-center justify-center space-y-4 space-x-4 bg-slate-200 px-10 py-6">
        <h1 className="text-center text-xl">
          <span className="font-semibold">Título da Tarefa:</span> {title}
        </h1>
        <h1 className="text-md text-justify">
          <span className="font-semibold">Descrição da Tarefa: </span>
          {description}
        </h1>
      </div>
    </div>
  );
}

export default TaskPage;
