import React from "react";
import Task from "./Task";

function TaskList({ tasklist, handleDelete }) {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasklist.map((task) => (
        <Task key={task.text} task={task} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

export default TaskList;
