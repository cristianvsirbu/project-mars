import { Outlet, Link, useLocation } from 'react-router-dom';
import { ModelsDataContext } from '../models/modelsContext';
import { useContext } from 'react';

const About = () => {
  const modelsData = useContext(ModelsDataContext);
  const categories = modelsData.map((model) => model.category);
  const location = useLocation();

  return (
    <div className="w-full">
      <ul
        className={`my-12 flex flex-col flex-wrap items-center text-3xl text-center text-white  font-semibold md:justify-evenly md:flex-row md:text-4xl lg:text-5xl lg:h-[80vh] ${
          location.pathname.includes('/about/') ? 'hidden' : ''
        }`}
      >
        {categories.map((category) => {
          const currentCategory = modelsData.find((model) => model.category === category);
          return (
            <li key={category}>
              <div className="m-2 w-[12rem] h-[20rem] md:w-[12rem] md:h-[20rem] lg:w-[15rem] lg:h-[25rem] blur__card parallax">
                <Link
                  to={`/about/${category}`}
                  className="flex flex-col h-full justify-between py-10"
                >
                  <img
                    src={currentCategory?.cover}
                    className="w-[9rem] lg:w-[12rem] self-center"
                    alt={currentCategory?.name}
                  />
                  <span className="blink text-3xl lg:text-4xl"> {category.toUpperCase()} </span>
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </div>
  );
};

export default About;
