import { useContext } from 'react';
import { ModelsDataContext } from './models/modelsContext';


function Characteristics({ modelId }) {
    const modelData = useContext(ModelsDataContext);
    const selectedModel = modelData.find((model) => model.id === modelId);

    if (!selectedModel) {
        return <div>Model not found</div>;
    }

    const characteristics = selectedModel.characteristics;

    function renderCharacteristics(data, parentKey = "") {
        const result = Object.keys(data).map((key) => {
            if (typeof data[key] === "object") {
                if (!isNaN(key)) { // Check if the key is numeric
                    return renderCharacteristics(data[key], parentKey); // Skip the numeric key
                }
                return (
                    <div key={key} className='paragraph__style'>
                        <span className='text-xl text-white'>{parentKey ? `${key}` : key}</span>
                        <div className="ml-10 mb-4">
                            {renderCharacteristics(data[key], "")}
                        </div>
                    </div>
                );
            } else {
                return (
                    <div key={key} className=''>
                        {parentKey ? `${key}: ${data[key]}` : `${key}: ${data[key]}`}
                    </div>
                );
            }
        });

        return result;
    }







    return (
        <div>
            {renderCharacteristics(characteristics)}
        </div>
    );
}

export default Characteristics;