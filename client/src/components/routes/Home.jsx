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
      <div className="sun 
                      hidden
                      md:block
                      md:left-[40rem]
                      md:top-[-24rem]
                      lg:left-[58rem]
                      xl:left-[45rem]
                      xl:top-[-20rem]
                      "/>

      <div className="p-4
                      flex
                      flex-col
                      w-full
                      lg:justify-center
                      ">

        <div className='blur__card
                        z-10
                        flex
                        flex-col
                        md:my-10
                        py-8
                        lg:py-16
                        px-4
                        xl:px-0
                        w-[95%]
                        md:w-[90%]
                        xl:w-[80%]
                        mx-auto
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
            <img src="assets/line2.svg" className="4k:w-[35%] 4k:pt-2 animate-pulse" alt='Pulsing Line' />
            <h1 className="text-white 
                          font-extrabold
                          text-7xl
                          lg:text-7xl
                          4k:text-[8rem]
                          blink__word">
              MARS
            </h1>
          </div>
          {/* Description */}


          <p className="text-slate-500 
                        text-center
                        font-medium
                        lg:pb-6
                        xl:w-4/5
                        self-center
                        text-xl
                        4k:text-2xl
                        ">
            Welcome to Project Mars, your  destination for delving into the captivating world of the Red Planet. Embark on an extraordinary journey with the latest and most intriguing information about Mars, all in one place. Whether you are an avid space enthusiast or just someone curious about the cosmos, Project Mars is here to satisfy your thirst for knowledge and wonder.
          </p>
        <div className="flex justify-center">
          <button className="button__style inline-block relative mt-4">
            <a href="/about/mars">ABOUT MARS</a>
          </button>
        </div>
        </div>
      </div>
      <div className="z-1 flex justify-center items-center w-full max-h-[80vh]">
        <img src="/assets/mars/M2.webp" alt='Mars' loading="lazy" />
      </div>

    </div>
  )
}

export default Home