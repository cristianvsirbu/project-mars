import { useContext } from "react";
import { ModelsDataContext } from "./models/modelsContext";

// Custom hook for fetching data
export function useFetchData(category, subcategory, id) {

    const modelsData = useContext(ModelsDataContext);

    const categoryData = modelsData.find((model) => model.category === category);
    const subcategoryData = categoryData.children.find(
        (sub) => sub.subcategory === subcategory
    );
    const data = subcategoryData.children.find((item) => item.id === id);

    return data;
}
