import { createContext, ReactNode, useState } from "react";
import { ToDoesState } from "../types/types";

const contextInitialValues: ToDoesState = {
  todosList: [],
  handleDelete: () => {},
  handleSubmit: () => {},
  editedMode: false,
  editedValue: "",
  setEditedMode: () => {},
  setEditedValue: () => {},
};

export const ToDosContext = createContext<ToDoesState>(contextInitialValues);

type TodosProviderProps = {
  children: ReactNode;
};

const TodosProvider = ({ children }: TodosProviderProps) => {
  const [todos, setTodos] = useState<string[]>(contextInitialValues.todosList);
  const [editedMode, setEditedMode] = useState<boolean>(false);
  const [editedValue, setEditedValue] = useState<string>("");
  console.log(todos);

  const handleDelete = (item: string) => {
    let filteredArr = todos.filter((value) => value != item);
    setTodos(filteredArr);
  };
  const handleSubmit = (item: string) => {
    if (!item) {
      return;
    }
    if (editedMode) {
      const updatedToDos = todos.map((todo) =>
        todo === editedValue ? item : todo
      );
      setTodos(updatedToDos);
      setEditedValue("");
      setEditedMode(false);
    } else {
      setTodos((todo) => [...todo, item]);
    }
  };

  return (
    <ToDosContext.Provider
      value={{
        todosList: todos,
        handleDelete,
        handleSubmit,
        setEditedMode,
        setEditedValue,
        editedMode,
        editedValue,
      }}
    >
      {children}
    </ToDosContext.Provider>
  );
};

export default TodosProvider;
