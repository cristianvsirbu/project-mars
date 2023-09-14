/* eslint-disable react/prop-types */

const PhotoCard = ({ photo }) => {
    const { camera, earth_date, img_src, rover } = photo;


    return (
        <div className="flex flex-col w-full h-full parallax blur__card py-4 mt-8">
            <div  className="w-full h-full p-8">
                    <img
                        src={img_src}
                        alt={`Rover on ${earth_date}`}
                        className="mx-auto object-none rounded-lg"
                    />
            </div>
            <div className="text-white text-[1.2rem] lg:text-[1.3rem] w-full h-full text-center flex flex-col 4k:flex-row 4k:justify-around">
                <p className="flex flex-col mt-2">
                    <span className="text-orange-500">Camera: </span>
                    <span className="font-bold">{camera.full_name}</span>
                </p>
                <p className="flex flex-col mt-2">
                    <span className="text-orange-500">Rover: </span>
                    <span className="font-bold">{rover.name}</span>
                </p>
                <p className="flex flex-col my-2">
                    <span className="text-orange-500">Earth Date: </span>
                    <span className="font-bold">{earth_date}</span>
                </p>
            </div>
        </div>
    );
};

export default PhotoCard;
