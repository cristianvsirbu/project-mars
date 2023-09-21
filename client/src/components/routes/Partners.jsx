
const Partners = () => {
  const partnerList = [
    {
      name: 'NASA',
      url: 'https://www.nasa.gov/',
      logo: '/assets/logos/nasa_logo.svg'
    },
    {
      name: 'ESA',
      url: 'https://www.esa.int/',
      logo: '/assets/logos/esa_logo.webp'
    },
    {
      name: 'CNSA',
      url: 'https://www.cnsa.gov.cn/',
      logo: '/assets/logos/cnsa_logo.svg'
    },
    {
      name: 'ISRO',
      url: 'https://www.isro.gov.in/',
      logo: '/assets/logos/isro_logo.svg'
    },
    {
      name: 'ISAS',
      url: 'https://www.isas.jaxa.jp/en/',
      logo: '/assets/logos/isas_logo.webp'
    },
    {
      name: 'MBRSC',
      url: 'https://www.mbrsc.ae/',
      logo: '/assets/logos/mbrsc_logo.svg'
    }
  ]
  return (
    <div className="w-full h-full">
      <p
        className='
                   font-bold
                   text-[4rem]
                 text-white
                   text-center
                   blink__word
                   select-none
                   my-10
        '>
        Our Partners
      </p>
      <div className="flex flex-wrap justify-center">
        {partnerList.map((partner, index) => (
          <div
            key={index}
            className="
                       blur__card
                       parallax
                       mx-8
                       my-8
                       h-[30rem]
                       w-[22rem]
                       flex
                       flex-col
                       justify-center
                       items-center
            ">
            <div className="max-w-[25rem] h-[15rem] flex justify-center mb-[2rem]">
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-full p-2 object-contain"
              />
            </div>
            <button className="button__style inline-block relative">
              <a
                href={partner.url}
                key={index}
                target="_blank"
                rel="noreferrer">
                {partner.name}
              </a>
            </button>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center">
        <p
          className='
                   font-bold
                   text-[4rem]
                 text-white
                   text-center
                   blink__word
                   select-none
                   my-10
        '>
          Our Sponsor
        </p>
        <div className="w-full px-[3rem] h-full mb-8">
          <a href="https://bluestar-bank.netlify.app/" target="_blank" rel="noreferrer">
            <picture>
              <source
                srcSet="/assets/sponsor.webp"
                media="(min-width: 769px)"
              />
              <source
                srcSet="/assets/sponsor_mobile.webp"
                media="(max-width: 768px)"
              />
              <img
                src="/assets/sponsor.webp" // Provide a default image for browsers that don't support <picture>
                alt="sponsor"
                className="w-full md:h-[25rem] lg:h-[10rem] 2xl:h-full object-contain"
              />
            </picture>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Partners

