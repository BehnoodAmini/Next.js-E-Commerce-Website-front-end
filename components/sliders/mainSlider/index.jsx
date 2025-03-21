// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, {
//    Navigation,
//    Pagination,
//    Scrollbar,
//    Autoplay,
// } from "swiper";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";
// SwiperCore.use([Autoplay]);

import Image from "next/image";

const MainSlider = () => {
   return (
         <section className=" container mx-auto">
            <div className="flex justify-center items-center">
                     <Image 
                        src={"/images/slider/slide1.jpg"}
                        className="rounded-lg"
                        width={1280}
                        height={300}
                        alt="slider1"
                     />
                  </div>
            {/* <Swiper
               modules={[Navigation,Pagination, Scrollbar]}
               spaceBetween={20}
               slidesPerView={1}
               navigation
               pagination 
               scrollbar={{ draggable: true }}
            >
               <SwiperSlide>
                  <div className="flex justify-center items-center">
                     <Image 
                        src={"/images/slider/slide1.jpg"}
                        objectFit="cover"
                        className="rounded-lg"
                        width={1280}
                        height={300}
                        alt="slider1"
                     />
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="flex justify-center items-center">
                     <Image 
                        src={"/images/slider/slide2.jpg"}
                        objectFit="cover"
                        className="rounded-lg"
                        width={1280}
                        height={300}
                        alt="slider1"
                     />
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="flex justify-center items-center">
                     <Image 
                        src={"/images/slider/slide3.jpg"}
                        objectFit="cover"
                        className="rounded-lg"
                        width={1280}
                        height={300}
                        alt="slider1"
                     />
                  </div>
               </SwiperSlide>
            </Swiper> */}
         </section>
   );
};

export default MainSlider;
