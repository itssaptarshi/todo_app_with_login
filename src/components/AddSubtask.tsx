import React, { useRef, useState } from "react";
import { SubTask } from "../model";

const AddSubtask = () => {
  const [subtask, setSubtask] = useState<string>("");
  const [subtasks, setSubtasks] = useState<SubTask[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (subtask) {
      setSubtasks([...subtasks, { id: Date.now(), subtask, isDone: false }]);
      setSubtask("");
    }
  };

  console.log(subtask);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
      }}
    >
      <input
        ref={inputRef}
        type="input"
        placeholder="Enter a task"
        value={subtask}
        onChange={(e) => setSubtask(e.target.value)}
      ></input>
      <button type="submit" className="input_submit">
        Go
      </button>
    </form>
  );
};

export default AddSubtask;
