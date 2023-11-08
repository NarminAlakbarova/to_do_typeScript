import { useContext, useState, useEffect } from "react";
import { FC } from "react";
import { ToDosContext } from "../context/ToDoProvider";

const ToDoHeader: FC = () => {
  const { handleSubmit, editedMode, editedValue,setEditedMode,setEditedValue } = useContext(ToDosContext);
  const [inputValue, setInputValue] = useState<string | undefined>(editedValue || ""); 
  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (typeof inputValue === "string") {
      handleSubmit(inputValue);
      setInputValue("");
      if (editedMode) {
        setEditedMode(false); 
        setEditedValue(""); 
      }
    }
  };

  useEffect(() => {
    setInputValue(editedValue || "");
  }, [editedValue]);

  return (
    <div className="header-content">
      <h2>TO DO APP</h2>
      <form action="" onSubmit={handleSubmitForm}>
        <input
          type="text"
          placeholder="write here..."
          value={inputValue}
          onChange={(e: any) => setInputValue(e.target.value)}
        />
        <button><span >{editedMode ? "Update" : "Add"}</span></button>
      </form>
    </div>
  );
};

export default ToDoHeader;
