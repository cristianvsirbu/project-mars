/* eslint-disable react/prop-types */


const PhotoCard = ({ photo }) => {
    const { camera, earth_date, img_src, rover } = photo;

    return (
        <div className="card">
            <img src={img_src} alt={`Rover on ${earth_date}`} />
            <p className="text-white">Camera: {camera.full_name}</p>
            <p className="text-white">Earth Date: {earth_date}</p>
            <p className="text-white">Rover Name: {rover.name}</p>
            {/* Other properties if needed */}
        </div>
    );
};

export default PhotoCard;
