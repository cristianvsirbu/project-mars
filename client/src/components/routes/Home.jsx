import { Link } from "react-router-dom";
import '../../styles/output-stars.css';

const Home = () => {
  return (
    <div className="flex
                    flex-col-reverse
                    xl:flex-row
                    xl:h-full
                    xl:items-center
                    xl:justify-center
">
      <div id='sun' className="hidden md:block md:left-[42rem] md:top-[-45rem] lg:left-[50rem] xl:left-[85rem] xl:top-[-20rem]" /> 
      <div className="p-4
                      flex
                      flex-col
                      w-full
                      lg:justify-center">
        

        {/* Title */}
        <div className="flex 
                        flex-col
                        items-center
                        pb-12">

          <h2 className="text-white 
                          font-bold
                          text-3xl
                          4k:text-[48px]">
            PROJECT
          </h2>
          <img src="assets/line2.svg" className="4k:w-1/2 4k:pt-4" />
          <h1 className="text-white 
                          font-extrabold
                          text-6xl
                          4k:text-[96px]
                          mars-word">
            MARS
          </h1>
        </div>
        {/* Description */}


        <p className="text-slate-500 
                        text-center
                        lg:pb-6
                        xl:w-4/5
                        self-center
                        tracking-wide
                        leading-8
                        md:text-3xl
                        4k:text-5xl
                        rajdhani">
          Welcome to Project Mars, your  destination for delving into the captivating world of the Red Planet. Embark on an extraordinary journey with the latest and most intriguing information about Mars, all in one place. Whether you are an avid space enthusiast or just someone curious about the cosmos, Project Mars is here to satisfy your thirst for knowledge and wonder.
        </p>
        <Link to="/about/mars" className="flex justify-center">
          <button className="py-4 my-6 button__style w-full lg:w-1/2">ABOUT MARS</button>
        </Link>
      </div>
      <div className="z-999 flex justify-center items-center xl:justify-end">
        <img src="/assets/M2.png" className="w-[92%]" />
      </div>

    </div>
  )
}

export default Home