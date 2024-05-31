import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasklist, setTasklist] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleDelete(text) {
    const textArr = tasklist.filter((task) => task.text !== text);
    setTasklist(textArr);
  }

  const filteredTasks = tasklist.filter((task) => {
    if (selectedCategory === "All") {
      return TASKS;
    } else {
      return task.category === selectedCategory;
    }
  });

  function onTaskFormSubmit(event) {
    setTasklist([...tasklist, event]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categoryList={CATEGORIES}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <NewTaskForm onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasklist={filteredTasks} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
