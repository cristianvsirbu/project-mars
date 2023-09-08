import { useContext } from "react";
import { ModelsDataContext } from "../models/modelsContext";

// Custom hook for fetching data
export function useFetchData(category, subcategory, id) {
    const modelsData = useContext(ModelsDataContext);

    const categoryData = modelsData.find((model) => model.category === category);

    // Check if the category has subcategories
    if (categoryData.children) {
        const subcategoryData = categoryData.children.find(
            (sub) => sub.subcategory === subcategory
        );

        if (subcategoryData) {
            const data = subcategoryData.children.find((item) => item.id === id);
            return data;
        }
    }

    // If there are no subcategories or subcategoryData doesn't exist
    const data = categoryData.children.find((item) => item.id === id);
    return data;
}

