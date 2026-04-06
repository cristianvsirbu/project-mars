import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative">
      <div className="sun hidden z-10 md:block md:absolute md:left-[40rem] md:top-[5rem] lg:left-[35rem] lg:top-[2rem] xl:left-[55rem]" />
      <div className="flex flex-col-reverse lg:flex-row items-center justify-evenly mx-12">
        <div className="p-4 mb-4 lg:mb-0 lg:p-8 flex w-full flex-col lg:justify-center blur__card lg:max-w-[35%]">
          {/* Title */}
          <div className="flex flex-col items-center pb-4">
            <h2 className="text-white font-bold text-2xl xl:text-3xl">PROJECT</h2>
            <img
              src="assets/line2.svg"
              className="4k:w-[35%] 4k:pt-2 animate-pulse"
              alt="Pulsing Line"
            />
            <h1 className="text-5xl text-white  font-extrabold lg:text-7xl 4k:text-[8rem] blink__word">
              MARS
            </h1>
          </div>
          {/* Description */}

          <p className="text-lg text-center font-medium text-slate-500 lg:mb-6 xl:text-xl">
            Welcome to Project Mars, your destination for delving into the captivating world of the
            Red Planet. Embark on an extraordinary journey with the latest and most intriguing
            information about Mars, all in one place. Whether you are an avid space enthusiast or
            just someone curious about the cosmos, Project Mars is here to satisfy your thirst for
            knowledge and wonder.
          </p>
          <button className="">
            <Link to="/about/mars" className="button__style  inline-block relative">
              <span className="">ABOUT MARS</span>
            </Link>
          </button>
        </div>
        <picture>
          <source media="(max-width:767px)" srcSet="/assets/mars/M2-mobile.webp" />
          <img
            src="/assets/mars/M2.webp"
            className="md:max-h-[80vh]"
            alt="Mars"
          />
        </picture>
      </div>
    </div>
  );
};

export default Home;
