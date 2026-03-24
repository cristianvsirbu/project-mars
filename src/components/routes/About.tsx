import ParallaxCard from '../ParallaxCard';
import { CELESTIAL_DATA } from '../../lib/constants';

const About = () => {
  const categories = Object.values(CELESTIAL_DATA);

  return (
    <div className="w-full">
      <ul
        className={`my-12 flex flex-col flex-wrap items-center text-3xl text-center text-white font-semibold md:justify-evenly md:flex-row md:text-4xl lg:text-5xl`}
      >
        {categories.map((category) => {
          return (
            <li key={category.name}>
              <ParallaxCard
                link={`/about/${category.category}`}
                imgSrc={category.cover}
                title={category.name.toUpperCase()}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default About;
