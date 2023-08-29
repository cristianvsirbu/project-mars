import ModelCard from '../models/ModelCard';
import PropTypes from 'prop-types';

function ListPage({ type, categories, modelsConfig }) {
  let filteredModels = [];

  if (type === 'all') {
    // Display all categories for the provided type
    filteredModels = modelsConfig.filter(model => categories.includes(model.type));
  } else {
    // Display specific category for the provided type
    filteredModels = modelsConfig.filter(model => model.type === type && categories.includes(model.category));
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

ListPage.propTypes = {
  type: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  modelsConfig: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListPage;


