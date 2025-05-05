import { useContext } from "react";
import { ModelsDataContext } from "../models/modelsContext";

// Custom hook for fetching data
export function useFetchData(
	category: string,
	subcategory: string | undefined,
	id: string | number | undefined
) {
	const modelsData = useContext(ModelsDataContext);

	const categoryData = modelsData.find((model) => model.category === category);

	if (!categoryData) {
		console.error(`Category "${category}" not found in modelsData.`);
		return null;
	}

	// Check if the category has subcategories
	if (categoryData?.children) {
		const subcategoryData = categoryData.children.find(
			(sub) => sub.category === subcategory
		);

		if (subcategoryData) {
			return subcategoryData;
		}
	}

	// If there are no subcategories or subcategoryData doesn't exist
	const data = categoryData.children?.find(
		(item) => typeof (item as any).id !== "undefined" && (item as any).id === id
	);
	return data;
}
