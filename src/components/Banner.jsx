import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import { Fade } from "react-awesome-reveal";

const Banner = () => {
  return (
    <div className="h-[calc(100vh-84px)]">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="h-full"
      >
        <SwiperSlide>
          <div className="h-full bg-gray-500 bg-[url(https://i.ibb.co.com/tC35F0S/slide1.jpg)] bg-no-repeat bg-center bg-cover">
            <div className="size-full bg-gradient-to-t from-[#000000cb] via-[#00000072] via-60% to-[#fff0] py-14 px-2 lg:p-20 flex justify-center items-center">
              <div className="max-w-[550px]">
                <Fade
                  cascade
                  direction="up"
                  duration={900}
                  damping={0.1}
                  delay={200}
                >
                  <h2 className="text-white text-4xl md:text-5xl font-bold drop-shadow-xl text-center">
                    Empower Through{" "}
                    <span className="text-[#50e3e5]">Education</span>
                  </h2>
                  <p className="text-white text-lg mt-5 text-center drop-shadow-lg">
                    Join our mission to provide educational opportunities for
                    all. Volunteer as a tutor, mentor, or coordinator, and help
                    shape the future by making learning accessible to every
                    child.
                  </p>
                </Fade>
                <div className="flex justify-center">
                  <button className="text-white text-lg font-semibold mt-7 py-[10px] px-5 bg-primary2/90 rounded-md hover:bg-primary2/70 transition-all duration-150">
                    Exlore Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full bg-gray-500 bg-[url(https://i.ibb.co.com/rfh3LMw/Social-Work-Campaign-png.webp)] bg-no-repeat bg-center bg-cover">
            <div className="size-full bg-gradient-to-t from-[#000000cb] via-[#00000072] via-60% to-[#fff0] py-14 px-2 lg:p-20 flex justify-center items-center">
              <div className="max-w-[550px]">
                <Fade
                  cascade
                  direction="up"
                  duration={900}
                  damping={0.1}
                  delay={200}
                >
                  <h2 className="text-white text-4xl md:text-5xl font-bold drop-shadow-xl text-center">
                    Building Communities with{" "}
                    <span className="text-[#50e3e5]">Social Service</span>
                  </h2>
                  <p className="text-white text-lg mt-5 text-center drop-shadow-lg">
                    Your time and dedication can create lasting change.
                    Participate in our social service programs to uplift
                    communities, support the elderly, and care for those in
                    need.
                  </p>
                </Fade>
                <div className="flex justify-center">
                  <button className="text-white text-lg font-semibold mt-7 py-[10px] px-5 bg-primary2/90 rounded-md hover:bg-primary2/70 transition-all duration-150">
                    Exlore Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full bg-gray-500 bg-[url(https://i.ibb.co.com/RjMq0Tt/health.jpg)] bg-no-repeat bg-center bg-cover">
            <div className="size-full bg-gradient-to-t from-[#000000cb] via-[#00000072] via-60% to-[#fff0] py-14 px-2 lg:p-20 flex justify-center items-center">
              <div className="max-w-[550px]">
                <Fade
                  cascade
                  direction="up"
                  duration={900}
                  damping={0.1}
                  delay={200}
                >
                  <h2 className="text-white text-4xl md:text-5xl font-bold drop-shadow-xl text-center">
                    Care for Health, Care for <span className="text-[#50e3e5]">Life</span>
                  </h2>
                  <p className="text-white text-lg mt-5 text-center drop-shadow-lg">
                    Be part of something bigger. Help us promote health and
                    well-being by volunteering in our healthcare initiatives,
                    offering care and compassion to those who need it most.
                  </p>
                </Fade>
                <div className="flex justify-center">
                  <button className="text-white text-lg font-semibold mt-7 py-[10px] px-5 bg-primary2/90 rounded-md hover:bg-primary2/70 transition-all duration-150">
                    Exlore Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
