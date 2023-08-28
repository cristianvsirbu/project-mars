import { useParams } from 'react-router-dom';
import ModelCard from './ModelCard'; 
import modelsConfig from '../modelsConfig';
import PropTypes from 'prop-types';

/*
 * Renders a list of models based on the provided type and category.
 * If no category is provided, it displays models without a category or models that belong to the provided type.
 * If a category is provided, it only displays models that belong to both the provided type and category.
 */
function ModelListPage({ type, categories }) {
  const { category } = useParams();

  let filteredModels = [];

  if (!category) {
    filteredModels = modelsConfig.filter(
      (model) =>
        model.type === type && (!model.category || categories.includes(model.category))
    );
  } else {
    filteredModels = modelsConfig.filter(
      (model) => model.type === type && model.category === category
    );
  }

  return (
    <div>
      <h2>{type === 'rover' ? 'Rovers' : 'Satellites'}</h2>
      <div className="">
        {filteredModels.map((model) => (
          <ModelCard key={model.id} model={model} />
        ))}
      </div>
    </div>
  );
}
ModelListPage.propTypes = {
    type: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ModelListPage;



