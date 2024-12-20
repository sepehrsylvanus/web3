const Banner = ({ parentStyles, banner, childeStyles }) => (
  <div
    className={`${parentStyles} relative w-full flex items-center z-0 overflow-hidden nft-gradient`}
  >
    <p className={`font-bold text-5xl font-poppins leading-70 ${childeStyles}`}>
      {banner}
    </p>
    <div className="absolute w-48 h-48 sm:w-32 sm:h-32 rounded-full white-bg -top-9 -left-16 -z-5" />
    <div className="absolute w-72 h-72 sm:w-56 sm:h-56 rounded-full white-bg -botton-24 -right-14 -z-5" />
  </div>
);

export default Banner;
