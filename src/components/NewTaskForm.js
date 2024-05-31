import React, { useState } from "react";

function NewTaskForm({ onTaskFormSubmit }) {
  const [task, setTask] = useState({
    text: "",
    category: "All",
  });

  function handleSubmit(event) {
    event.preventDefault();
    onTaskFormSubmit({
      text: event.target.text.value,
      category: event.target.category.value,
    });
  }

  return (
    <form className="new-task-form" onSubmit={(event) => handleSubmit(event)}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={task.text}
          onChange={(e) =>
            setTask({ text: e.target.value, category: task.category })
          }
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={task.category}
          onChange={(e) =>
            setTask({ text: task.text, category: e.target.value })
          }
        >
          {/* render <option> elements for each category here */}
          <option>Code</option>
          <option>Food</option>
          <option>Money</option>
          <option>Misc</option>
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
