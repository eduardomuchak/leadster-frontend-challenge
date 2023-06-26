import { AllCategoryNames, categories } from "@/hooks/useCategories/categories";
import { useState } from "react";

export function useCategories() {
  const [allCategories, setAllCategories] = useState(categories);
  const [currentCategory, setCurrentCategory] =
    useState<AllCategoryNames | null>(null);

  const handleCategoryChange = (clickedCategory: AllCategoryNames) => {
    if (clickedCategory === currentCategory) {
      setCurrentCategory(null);
    } else {
      setCurrentCategory(clickedCategory);
    }
    setAllCategories((prev) =>
      prev.map((category) => {
        if (category.name === clickedCategory) {
          return {
            ...category,
            isActive: !category.isActive,
          };
        }
        return {
          ...category,
          isActive: false,
        };
      })
    );
  };

  return {
    allCategories,
    currentCategory,
    handleCategoryChange,
    setCurrentCategory,
  };
}
