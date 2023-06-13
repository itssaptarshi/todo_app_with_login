import React, { useRef } from "react";
import "./styles.css";

const InputField = ({
  todo,
  setTodo,
  handleAdd,
}: {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}) => {

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type="input"
        placeholder="Enter a task"
        className="input_box"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      ></input>
      <button type="submit" className="input_submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
