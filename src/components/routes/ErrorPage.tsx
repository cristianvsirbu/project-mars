import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="text-white min-h-screen flex flex-col items-center justify-center select-none">
      <div className="hidden md:flex">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
      </div>

      <div className="flex items-center justify-center">
        <p className="text-slate-800 leading-none text-[10rem] lg:text-[15rem] xl:text-[24rem] 4k:text-[30rem] font-bold">
          4
        </p>
        <img src="/assets/black_hole.svg" className="w-32 lg:w-48 xl:w-80" alt="Black Hole" />
        <p className="text-slate-800 leading-none text-[10rem] lg:text-[15rem] xl:text-[24rem] 4k:text-[30rem] font-bold">
          4
        </p>
      </div>

      <p className="font-bold text-orange-700 text-[2rem] lg:text-[2.5rem] xl:text-[4rem]">
        PAGE NOT FOUND!
      </p>

      <button className="button__style relative mt-2">
        <a href="/">HOME</a>
      </button>
    </div>
  );
}
