import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";

const Category = () => {
    return (
        <div className="container">
            <div className="slide-title py-[100px]">
                <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    slidesPerView={4}
                    spaceBetween={10}
                >
                    <SwiperSlide>

                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide1} />
                        <h3 className="text-white -mt-[60px] text-5xl font-bold ml-3">Salad</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide2} />
                        <h3 className="text-white -mt-[60px] text-5xl font-bold ml-3">Pizza</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide3} />
                        <h3 className="text-white -mt-[60px] text-5xl font-bold ml-3">Soups</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide4} />
                        <h3 className="text-white -mt-[60px] text-5xl font-bold ml-3">Cake</h3>
                        </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide5} />
                        <h3 className="text-white -mt-[60px] text-5xl font-bold ml-3">Vegetable</h3>
                        </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Category;
