import { FC, useContext } from "react";
import { ToDosContext } from "../context/ToDoProvider";
import { BiEditAlt } from "react-icons/bi";
import { BsFillTrashFill } from "react-icons/bs";
const ToDoContent: FC = () => {
  const { todosList, handleDelete, setEditedMode, setEditedValue } =
    useContext(ToDosContext);

  const handleEdit = (item: string) => {
    setEditedMode(true);
    setEditedValue(item);
  };

  return (
    <div className="content">
      {todosList.map((item, i) => (
        <div className="card" key={i}>
          <p>{item}</p>
          <div className="actions">
            <BsFillTrashFill onClick={() => handleDelete(item)} />

            <BiEditAlt onClick={() => handleEdit(item)} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToDoContent;
