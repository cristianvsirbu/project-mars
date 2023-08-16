import { Link } from "react-router-dom";
import '../styles/output-stars.css'

const Home = () => {
  return (
    <div className="flex
                    flex-col-reverse
                    xl:flex-row
                    xl:justify-center">
      <div className="p-4
                      flex
                      flex-col
                      w-full
                      xl:w-1/2
                      lg:justify-center">
        {/* Title */}
        <div className="flex 
                        flex-col
                        items-center
                        pb-12">
          <h2 className="text-white 
                          font-bold
                          text-3xl
                          4k:text-[3rem]">
            PROJECT
          </h2>
          <img src="src/assets/line2.svg" className="4k:w-1/2 4k:pt-4 animate-pulse" />
          <h1 className="text-white 
                          font-extrabold
                          text-6xl
                          4k:text-[6rem]
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
                        leading-6
                        md:text-lg
                        4k:text-xl">
          Welcome to Project Mars, your ultimate destination for delving into the captivating world of the Red Planet. Embark on an extraordinary journey as we bring you the latest and most intriguing information about Mars, all in one place. Whether you are an avid space enthusiast or just someone curious about the cosmos, Project Mars is here to satisfy your thirst for knowledge and wonder.
        </p>
        <Link to="/about" className="flex justify-center">
          <button className="py-4 my-6 button__style w-full lg:w-1/2">ABOUT MARS</button>
        </Link>
      </div>
      <div className="z-50">
        <img src="src/assets/M4.png" className="p-12 max-h-[100vh]" />
      </div>
    </div>
  )
}

export default Home