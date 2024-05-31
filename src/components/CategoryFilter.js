import React from "react";

function CategoryFilter({
  categoryList,
  selectedCategory,
  setSelectedCategory,
}) {
  /**
   * User story:
   * 1. When user clicks on a category, the tasklist field updates to display only the tasks with the selected category.
   * 2. When user clicks on another category, the tasklist should use the original tasklist to filter through.
   * 3. When user clicks on "All", the tasklist should show all the tasks regardless of category.
   *
   * Dev Story:
   * 1. CategoryFilter should be an independent component that takes in the tasklist, does all the filtering, and "exports" the filtered tasklist, without modifying the original tasklist.
   */

  function handleClick(category) {
    setSelectedCategory(category);
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categoryList.map((category) => (
        <button
          onClick={() => handleClick(category)}
          key={category}
          className={category === selectedCategory ? "selected" : ""}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
