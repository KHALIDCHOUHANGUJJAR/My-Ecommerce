/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BestProducts, proDetails } from "../Utils/PorductsDetails";
import { useState } from "react";
import HeadingSec from "./HeadingSec";
import { ProModal } from "./Modal";

const ProductSlider = ({ HidePro, hideProSec }) => {
  const [modal, setModal] = useState(false);
  const [selectProducts, setSelectedProducts] = useState({});

  const viewModal = (pro) => {
    setSelectedProducts(pro);
    setModal(true);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 120000, 
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };
  

  return (
    <div className="w-full h-auto">
      {hideProSec === "display" && (
        <div>
          <HeadingSec
            hideBtn="display"
            Heading="This Month"
            text="Best Selling Products"
          />
          <div className="grid grid-cols-1 md:flex md:items-center md:justify-center md:gap-8">
            {BestProducts.map((items, index) => (
              <div
                className="p-4 cursor-pointer"
                key={index}
                onClick={() => viewModal(items)}
              >
                <div className="relative bg-white border-4 rounded-md shadow-md h-64 w-full md:w-[20vw] p-10">
                  <img
                    src={items.img}
                    alt={items.name}
                    className="h-32 w-full object-contain"
                  />
                  <h3 className="mt-2 text-sm font-bold">{items.name}</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-red-600 font-bold text-lg">
                      {items.Price}
                    </span>
                    <span className="line-through text-gray-500">$160</span>
                  </div>
                  <div className="flex items-center mt-1">
                    <span className="text-yellow-400">★★★★☆</span>
                    <span className="ml-2 text-xs text-gray-500">(88)</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {HidePro === "display" && (
        <Slider {...settings}>
          {proDetails.map((items, index) => (
            <div className="p-4" key={index} onClick={() => viewModal(items)}>
              <div className="relative bg-white border rounded-md shadow-md h-60 p-4">
                <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                  -40%
                </div>
                <img
                  src={items.img}
                  alt={items.name}
                  className="h-32 w-full object-contain"
                />
                <h3 className="mt-2 text-sm font-bold">{items.name}</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-red-600 font-bold text-lg">
                    {items.Price}
                  </span>
                  <span className="line-through text-gray-500">$160</span>
                </div>
                <div className="flex items-center mt-1">
                  <span className="text-yellow-400">★★★★☆</span>
                  <span className="ml-2 text-xs text-gray-500">(88)</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      )}
      <ProModal
        modal={modal}
        setModal={setModal}
        selectProducts={selectProducts}
      />
    </div>
  );
};

export default ProductSlider;
