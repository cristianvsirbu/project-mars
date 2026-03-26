import { Link } from 'react-router-dom';
import { ParallaxCardProps } from '../lib/types';

const ParallaxCard = ({ link, imgSrc, title }: ParallaxCardProps) => {
  return (
    <div className="m-2 w-[12rem] h-[20rem] md:w-[12rem] md:h-[20rem] lg:w-[15rem] lg:h-[25rem] blur__card parallax">
      <Link to={link} className="flex flex-col h-full justify-between py-10">
        <img src={imgSrc} className="w-[9rem] lg:w-[12rem] self-center" alt={title} />
        <span className="blink text-3xl lg:text-4xl"> {title} </span>
      </Link>
    </div>
  );
};

export default ParallaxCard;
