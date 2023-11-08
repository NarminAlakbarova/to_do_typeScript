export type ToDoesState = {
  todosList: string[];
  handleSubmit: (name: string) => void;
  handleDelete:(value:string)=>void
  editedMode:boolean
  editedValue:string
  setEditedMode: React.Dispatch<React.SetStateAction<boolean>>
  setEditedValue: React.Dispatch<React.SetStateAction<string>>
};
