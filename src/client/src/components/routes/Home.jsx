import '../../styles/output-stars.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex
                    flex-col-reverse
                    xl:h-full
                    xl:flex-row
                    xl:items-center
                    xl:justify-center
">
      <div className="sun 
                      hidden
                      md:block
                      md:left-[40rem]
                      md:top-[-24rem]
                      lg:left-[58rem]
                      xl:left-[50rem]
                      xl:top-[-20rem]
                      "/>

      <div className="p-4
                      flex
                      w-full
                      flex-col
                      lg:justify-center
                      ">

        <div className='
                        py-8
                        px-4
                        z-10
                        w-[95%]
                        mx-auto
                        flex
                        flex-col
                        md:my-10
                        md:w-[90%]
                        lg:py-16
                        xl:px-0
                        xl:w-[80%]
                        blur__card
                        '>
          {/* Title */}
          <div className="flex 
                          flex-col
                          items-center
                          pb-4">

            <h2 className="text-white 
                             font-bold
                             text-3xl
                             4k:text-[3rem]">
              PROJECT
            </h2>
            <img
              src="assets/line2.svg"
              className="4k:w-[35%] 4k:pt-2 animate-pulse"
              alt='Pulsing Line'/>
            <h1 className="
                          text-7xl
                        text-white 
                          font-extrabold
                          lg:text-7xl
                          4k:text-[8rem]
                          blink__word">
              MARS
            </h1>
          </div>
          {/* Description */}


          <p className="
                        text-xl
                        text-center
                        font-medium
                      text-slate-500 
                        self-center
                        lg:pb-6
                        xl:w-4/5
                        4k:text-2xl
            ">
            Welcome to Project Mars, your  destination for delving into the captivating world of the Red Planet. Embark on an extraordinary journey with the latest and most intriguing information about Mars, all in one place. Whether you are an avid space enthusiast or just someone curious about the cosmos, Project Mars is here to satisfy your thirst for knowledge and wonder.
          </p>
        <div className="flex justify-center">
          <button className="mt-4">
              <Link
                to="/about/mars"
                className="button__style  inline-block relative">
                <span className=''>ABOUT MARS</span>
              </Link>
          </button>
        </div>
        </div>
      </div>
      <div className="z-1 flex justify-center items-center w-full max-h-[80vh]">
        <img src="/assets/mars/M2.webp" alt='Mars'/>
      </div>

    </div>
  )
}

export default Home