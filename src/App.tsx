import { FC } from "react";
import ToDoHeader from "./companents/ToDoHeader";
import ToDoContent from "./companents/ToDoContent";
import './companents/index.scss'
const App: FC = () => {
  return (
    <div id="to-do-container">
      <div className="container">
        <div className="to-do-container">
          <div className="header">
            <ToDoHeader />
          </div>
          <div className="tasks-content">
            <ToDoContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
