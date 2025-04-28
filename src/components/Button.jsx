function Button(props) {
  if (props.type !== "task") {
    return (
      <button
        className="flex w-1/10 items-center justify-center rounded-lg bg-slate-400 text-white"
        {...props}
      >
        {props.children}
      </button>
    );
  }

  return (
    <button
      className={`flex h-8 w-full items-center rounded-lg bg-slate-400 pl-2 text-left text-white ${props.task.IsCompleted && "line-through"}`}
      {...props}
    >
      {props.children}
    </button>
  );
}

export default Button;
