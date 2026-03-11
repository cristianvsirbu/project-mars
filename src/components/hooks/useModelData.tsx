
import { modelsData } from '../models/modelsData';

export function useModelData(
  category: string,
  subcategory: string | undefined,
  id: string | undefined
) {

  // Find the category (rovers, satellites, moons, etc.)
  const categoryData = modelsData.find((model) => model.category === category);

  if (!categoryData) {
    console.error(`Category "${category}" not found in modelsData.`);
    return null;
  }

  // Special case for Mars, which has a different structure
  if (category === 'mars') {
    return categoryData.children?.[0];
  }

  // Special case for Moons, which don't have subcategories
  if (category === 'moons' && id) {
    // Find moon directly in the children array
    const moon = categoryData.children?.find((item) => item.id === id);

    if (!moon) {
      console.error(`Moon with ID "${id}" not found.`);
    }

    return moon || null;
  }

  // For rovers and satellites that have subcategories
  // Find the subcategory (active/inactive rovers, functional/non-functional satellites)
  const subcategoryData = categoryData.children?.find((sub) => sub.subcategory === subcategory);

  if (!subcategoryData) {
    console.error(`Subcategory "${subcategory}" not found in ${category}.`);
    return null;
  }

  // Find the specific item by ID
  if (id) {
    const item = subcategoryData.children?.find((item) => item.id === id);

    if (!item) {
      console.error(`Item with ID "${id}" not found in ${category}/${subcategory}.`);
    }

    return item || null;
  }

  return subcategoryData;
}
