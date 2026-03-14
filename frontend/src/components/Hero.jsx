import heroImage from "../assets/jiri-suchy-nvmVK78tE5I-unsplash.jpg";

function Hero() {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-500">
      {/* Hero left side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md-text-base">
              Our Best Selling Medicines
            </p>
          </div>
          <h1 className="text-3xl sm:py-3 lg-text-5xl leading-relaxed">
            Latest Arrival
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold  text-sm md-text-base">Shop Now</p>
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
          </div>
        </div>
      </div>
      {/* Hero right side */}
      <img src={heroImage} alt="hero image" className="w-full sm:w-1/2" />
    </div>
  );
}

export default Hero;
