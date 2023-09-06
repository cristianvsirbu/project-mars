import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ModelsDataContext } from '../models/modelsContext';

function RoverPage() {
  const { subcategory, roverId } = useParams();
  const modelsData = useContext(ModelsDataContext);

  const roverCategory = modelsData.find(model => model.category === 'rovers');
  const subcategoryData = roverCategory.children.find(sub => sub.subcategory === subcategory);
  const rover = subcategoryData.children.find(r => r.id === roverId);
  const chars = rover.characteristics;
  console.log(chars);

  if (!rover) {
    return <div>Rover not found</div>;
  }

function renderCharacteristics(data, parentKey = "") {
  const result = Object.keys(data).map((key) => {
    if (Array.isArray(data[key])) {
      return generateList(key, data[key]);
    }

    if (typeof data[key] === "object") {
      if (!isNaN(key)) {
        return renderCharacteristics(data[key], parentKey);
      }

      const hasChildObjects = hasChildProperties(data[key]);

      return generateDiv(key, parentKey, hasChildObjects, data[key]);
    } else {
      return generateSimpleDiv(key, data[key]);
    }
  });

  return result;
}

function generateList(key, items) {
  return (
    <div key={key} className="mb-10">
      <span className="font-bold">{key}:</span>
      <ol className="ml-10">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
}

function generateDiv(key, parentKey, hasChildObjects, childData) {
  return (
    <div key={key} className={`mb-10 ${hasChildObjects ? "" : "ml-10"}`}>
      <span className="font-bold">
        {parentKey ? `${key}` : key}
      </span>
      <div className={hasChildObjects ? "" : "ml-10"}>
        {renderCharacteristics(childData, "")}
      </div>
    </div>
  );
}

function generateSimpleDiv(key, value) {
  return (
    <div key={key} className="mb-2">
      <div className="flex">
        <span className={`text-orange-500 font-medium`}>{key}:</span>
        <span className="text-slate-400 ml-2">{value}</span>
      </div>
    </div>
  );
}

function hasChildProperties(data) {
  return Object.keys(data).some((subKey) => typeof data[subKey] === "object");
}

  return (
    <div className="text-white">
      <p>{rover.description}</p>
      <div>
        {renderCharacteristics(chars)}
      </div>
    </div>
  );
}

export default RoverPage;
