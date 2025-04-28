import { useState } from "react";
import Input from "./Input";

function AddTask(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="flex flex-col items-center justify-center space-y-4 rounded-md bg-slate-200 p-6 shadow-sm">
      <Input
        type="text"
        placeholder="Título da Tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Descrição da Tarefa"
        className="w-full rounded-lg bg-white py-2 pl-4 focus:outline-none"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        className="w-full rounded-lg bg-slate-500 py-2 text-white"
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Tarefa inválida!");
          }

          props.addTask(title, description);
          setTitle("");
          setDescription("");
        }}
      >
        Adicionar Tarefa
      </button>
    </div>
  );
}

export default AddTask;
