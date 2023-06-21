import React from "react";
import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    //dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center bg-gray-100 px-6">
            <div className="">
                <div className="text-6xl font-bold">En Kaliteli Ayakkabılar Burada</div>
                <div className="text-lg my-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae perferendis, libero architecto eaque voluptatum numquam!</div>
                <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200">İncele</div>
            </div>
            <div className="w-[500px] h-[400px]">
            <img className="object-contain"
            src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/d616260a-0a8e-48b1-b5c5-e155b990acb8/waffle-one-ayakkab%C4%B1s%C4%B1-BVbQrn.png"
            alt=""
          />{" "}
            </div>
        </div>
        <div className="!flex items-center bg-gray-100 px-6">
        <div className="">
                <div className="text-6xl font-bold">En Kaliteli Ayakkabılar Burada</div>
                <div className="text-lg my-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae perferendis, libero architecto eaque voluptatum numquam!</div>
                <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200">İncele</div>
            </div>
            <div className="w-[500px] h-[400px]">
            <img className="object-contain"
            src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_3.0/w_300,c_limit/e777c881-5b62-4250-92a6-362967f54cca/air-force-1-07-shoe-NMmm1B.png"
            alt=""
          />{" "}
            </div>
        
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
