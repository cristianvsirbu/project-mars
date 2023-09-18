import { Link, useRouteError } from "react-router-dom";


export default function ErrorPage() {

    const error = useRouteError();
    console.error(error);
    return (
        <div className="text-white">
            <div className='hidden md:flex'>
                <div id='stars' />
                <div id='stars2' />
                <div id='stars3' />
            </div>

            <div className="flex w-full max-h-[80vh] flex-col items-center justify-center relative">
                <p className="text-slate-700 absolute top-[12rem] lg:top-[17rem] xl:top-[24rem] 2xl:top-[24rem] 4k:top-[32rem] text-[2rem] lg:text-[2.5rem] xl:text-[4rem] font-bold">PAGE NOT FOUND!</p>
                <div className="flex items-center">
                    <p className="text-slate-800 text-[10rem] lg:text-[15rem] xl:text-[24rem] 4k:text-[30rem] font-bold">4</p>
                    <img src="/assets/black_hole.svg" className="w-[8rem] lg:w-[12rem] xl:w-[20rem]" />
                    <p className="text-slate-800 text-[10rem] lg:text-[15rem] xl:text-[24rem] 4k:text-[30rem] font-bold">4</p>
                </div>
                <button className="button__style mt-2 lg:mt-0">
                    <a href="/">HOME</a>
                </button>
                <div className="md:mt-[-5rem] md:mr-[-27rem] lg:mt-[-8rem] lg:mr-[-38rem] xl:mt-[-10rem] xl:mr-[-44rem] 4k:mt-[-12rem] 4k:mr-[-50rem]">
                    <img src="/assets/sad_astronaut.svg" className="hidden md:inline md:w-[15rem] lg:w-[18rem] xl:w-[25rem] 4k:w-[30rem] animate-up-down" />
                </div>
            </div>
        </div>
    )
}



// absolute md:top-[12rem] md:left-[30rem] lg:left-[38rem] lg:top-[18rem] xl:top-[32rem] xl:left-[54rem] 4k:left-[88rem] 4k:top-[35rem]