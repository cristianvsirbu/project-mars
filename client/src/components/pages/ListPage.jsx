import ModelCard from '../models/ModelCard';
import modelsConfig from '../models/modelsConfig';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const ListPage = () => {
  const [currentCategory, setCurrentCategory] = useState('');
  const location = useLocation();

  const handleCategoryClick = (category) => {
    setCurrentCategory(category);
  };

  const renderModelCards = () => {
    const categories = ['moons', 'moons/phobos', 'moons/deimos', 'rovers', 'satellites', 'mars', 'missions'];

    return (
      <>
        {categories.map((category) => {
          const categoryModel = modelsConfig.find((model) => model.category === category);

          return (
            categoryModel && (
              <Link
                to={`/about/${category}`}
                key={category}
                onClick={() => handleCategoryClick(category)}
              >
                <ModelCard
                  name={categoryModel.name}
                  image={categoryModel.image}
                />
              </Link>
            )
          );
        })}
      </>
    );
  };


  const renderAllButton = () => {
    if (currentCategory !== '' && location.pathname !== '/about') {
      return (
        <button onClick={() => handleCategoryClick('')}>All</button>
      );
    }
    return null;
  };

  return (
    <div>
      <div>
        {renderAllButton()}
      </div>
      <div>{renderModelCards()}</div>
    </div>
  );
};



export default ListPage;