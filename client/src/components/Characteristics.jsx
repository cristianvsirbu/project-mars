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
                if (!isNaN(key)) {
                    return renderCharacteristics(data[key], parentKey);
                }

                const hasChildObjects = Object.keys(data[key]).some(
                    (subKey) => typeof data[key][subKey] === "object"
                );

                return (
                    <div key={key} className={hasChildObjects ? 'mb-10' : 'mb-6'}>
                        <span className={hasChildObjects ? 'font-bold text-orange-500' : 'font-medium text-white'}>{parentKey ? `${key}` : key}</span>
                        <div className={hasChildObjects ? '' : 'ml-10'}>
                            {renderCharacteristics(data[key], "")}
                        </div>
                    </div>
                );
            } else {
                return (
                    <div key={key} className='mb-2'>
                        <div className="flex">
                            <span className="text-white">{key}:</span>
                            <span className="text-slate-500 ml-2">{data[key]}</span>
                        </div>
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