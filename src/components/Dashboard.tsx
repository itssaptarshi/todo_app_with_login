import React, { useState, useEffect } from "react";
import InputField from "./inputField";
import TodoList from "./todoList";
import { Todo } from "../model";
import { useAuth0 } from "@auth0/auth0-react";
import "./styles.css";

const Dashboard = () => {
  const getItems = () => {
    let list = localStorage.getItem("list");
    console.log(list);

    if(list){
      return JSON.parse(list);
    }else{
      return [];
    }
  };

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>(getItems());
  const { logout, user } = useAuth0();

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <div className="header">
        <span >Welcome Back {user?.name}</span>
        <button
          className="btn"
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          Log Out
        </button>
      </div>
      <br />
      <h1>Todo</h1>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
};

export default Dashboard;
