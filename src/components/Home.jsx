

const Home = () => {
  return (
    <div className="flex flex-col-reverse">
      <div className="p-4 flex flex-col">
        {/* Title */}
        <div className="flex flex-col items-center py-12">
          <h2 className="text-white font-bold text-3xl">PROJECT</h2>
          <img src="src/assets/line2.svg" />
          <h1 className="text-white font-extrabold text-6xl">MARS</h1>
        </div>
        <p className="text-white text-center">Welcome to Project Mars, your ultimate destination for delving into the captivating world of the Red Planet. Embark on an extraordinary journey as we bring you the latest and most intriguing information about Mars, all in one place. Whether you are an avid space enthusiast or just someone curious about the cosmos, Project Mars is here to satisfy your thirst for knowledge and wonder.
        </p>
        <button className="py-4 my-6 button__style">About Mars</button>
      </div>
      <img src="src/assets/M2.png" className="w-full h-full" />
    </div>
  )
}

export default Home