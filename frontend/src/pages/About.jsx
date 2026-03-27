import Title from "../components/Title";
import image1 from "../assets/and-machines-aEwgvCxW674-unsplash.jpg";
function About() {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title title="ABOUT" subTitle="US" />
      </div>

      <div className="flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px] " src={image1} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            We are committed to providing you with the best possible experience
            on our website. If you have any questions or concerns, please don't
            hesitate to contact us. Our dedicated customer service team is
            available 24/7 to assist you.
          </p>
          <p>
            We are committed to providing you with the best possible experience
            on our website. If you have any questions or concerns, please don't
            hesitate to contact us
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            We are committed to providing you with the best possible experience
            on our website. If you have any questions or concerns, please don't
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title title="WHY" subTitle="CHOOSE US" />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20 ">
        <div className="border px-10 md:px-14 py-8 sm:py-20 flex flex-col gap-5">
          <b>QUality Assurance :</b>
          <p className="text-gray-600">
            we meticously check the quality of our products and services to
            ensure it meets our standards.
          </p>
        </div>
        <div className="border px-10 md:px-14 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convience :</b>
          <p className="text-gray-600">
            With our friendly and knowledgeable customer service team, you can
            expect a smooth and hassle-free experience.
          </p>
        </div>
        <div className="border px-10 md:px-14 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional customer service :</b>
          <p className="text-gray-600">
            Our team of dedicated professionals are here to help you every step
            of the way, ensuring a seamless shopping experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
