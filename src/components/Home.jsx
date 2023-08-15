import { Link } from "react-router-dom";
import '../styles/output-stars.css'

const Home = () => {
  return (
    <div className="flex flex-col-reverse xl:flex-row xl:justify-center">
      <div className="p-4 flex flex-col w-full xl:w-1/2 4k:justify-center">
        {/* Title */}
        <div className="flex flex-col items-center py-12">
          <h2 className="text-white font-bold text-3xl">PROJECT</h2>
          <img src="src/assets/line2.svg" />
          <h1 className="text-white font-extrabold text-6xl mars-word">MARS</h1>
        </div>
        <p className="text-white text-center lg:pb-6 xl:w-4/5 self-center tracking-wide leading-6 md:text-lg 4k:text-xl">Welcome to Project Mars, your ultimate destination for delving into the captivating world of the Red Planet. Embark on an extraordinary journey as we bring you the latest and most intriguing information about Mars, all in one place. Whether you are an avid space enthusiast or just someone curious about the cosmos, Project Mars is here to satisfy your thirst for knowledge and wonder.
        </p>
        <Link to="/about" className="flex justify-center">
          <button className="py-4 my-6 button__style w-full lg:w-1/2">About Mars</button>
        </Link>
      </div>
      <div className="xl:w-1/2 z-50">
        <img src="src/assets/M4.png" className="p-6" />
      </div>
    </div>
  )
}

export default Home