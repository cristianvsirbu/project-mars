import ParallaxCard from '../ui/ParallaxCard';
import { CELESTIAL_DATA, MISSIONS } from '../../lib/constants';

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
        <li>
          <li key={MISSIONS.name}>
            <ParallaxCard
              link={`/about/${MISSIONS.category}`}
              imgSrc={MISSIONS.cover}
              title={MISSIONS.name.toUpperCase()}
            />
          </li>
        </li>
      </ul>
    </div>
  );
};

export default About;
