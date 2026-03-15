import heroImage from "../assets/jiri-suchy-nvmVK78tE5I-unsplash.jpg";

function Hero() {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-500 md:h-[70vh] md:mb-10.5">
      {/* Hero left side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md-text-base">
              OUR BEST SELLING MEDICINES
            </p>
          </div>
          <h1 className="prata-regular text-3xl sm:py-3 lg-text-5xl leading-relaxed">
            LATEST ARRIVALS
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold  text-sm md-text-base">SHOP NOW</p>
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
          </div>
        </div>
      </div>
      {/* Hero right side */}
      <img
        src={heroImage}
        alt="hero image"
        className="w-full sm:w-1/2 object-cover"
      />
    </div>
  );
}

export default Hero;
