import { useParams } from 'react-router-dom';
import ModelCard from './ModelCard'; 
import modelsConfig from '../modelsConfig';

function ModelListPage({ type, categories }) {
    const { category } = useParams();

    let filteredModels = [];

    if (!category) {
        // Display categories for the provided type
        filteredModels = modelsConfig.filter(model => model.type === type && categories.includes(model.category));
    } else {
        filteredModels = modelsConfig.filter(model => model.type === type && model.category === category);
    }

    return (
        <div>
            <h2>{type === 'rover' ? 'Rovers' : 'Satellites'} List</h2>
            <div className="">
                {filteredModels.map(model => (
                    <ModelCard key={model.id} model={model} />
                ))}
            </div>
        </div>
    );
}

export default ModelListPage;
