import React from "react";

function CategoryFilter({ categories, onSelectCategory, selectedCategory }) { 
  const categoryButtons = categories.map((category) => {
    return (
      <button
        key={category}
        className={category === selectedCategory ? "selected" : null}
        onClick={() => onSelectCategory(category)}
      >
        {category}
      </button>
    );
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
