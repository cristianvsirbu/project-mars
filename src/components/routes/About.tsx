import ParallaxCard from '../ui/ParallaxCard';
import { CELESTIAL_DATA, MISSIONS } from '../../lib/constants';

const About = () => {
  const categories = Object.values(CELESTIAL_DATA);

  return (
    <div className="w-full h-full">
      <p className="my-10 font-bold text-4xl md:text-5xl lg:text-6xl text-white text-center blink__word select-none">
        About{' '}
      </p>
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
        <li key={MISSIONS.name}>
          <ParallaxCard
            link={`/about/${MISSIONS.category}`}
            imgSrc={MISSIONS.cover}
            title={MISSIONS.name.toUpperCase()}
          />
        </li>
      </ul>
    </div>
  );
};

export default About;
