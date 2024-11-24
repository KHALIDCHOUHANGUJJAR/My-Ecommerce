/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import HeadingSec from "../Components/HeadingSec";
import Home from "../Components/Home";
import { Category, pro3 } from "../Utils/PorductsDetails";
import ProductSlider from "../Components/Card";
import Buttons from "../Utils/Buttons/Buttons";
import { auth, onAuthStateChanged } from "./Auth/FirebaseConfig";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProCard from "../Components/ProCard";

const LandingPages = ({ HideType, hideBtn, HidePro, isDisplay, userDis }) => {
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/Dashboard");
      }
    });
  }, [navigate]);

  return (
    <div className="px-4">
      <Home />

      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className=" w-full flex flex-col">
          <div >
            <HeadingSec
              HideType="display"
              Heading={"Today`s"}
              text={"Flash Sales"}
            />
          </div>
        </div>
        <div className="flex items-center justify-center w-full md:w-[90%]">
          <ProductSlider HidePro="display" />
        </div>
        <Buttons
          text={"View All Products"}
          onClick={() => navigate("/products")}
        />
      </div>

      <div className="flex items-center ml-4 md:ml-20">
        <HeadingSec
          HideType={HideType}
          Heading={"Categories"}
          text={"Browse By Category"}
        />
      </div>

      <div className="grid grid-cols-2 m-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 items-center justify-center">
        {Category.map((item, index) => {
          const { name, image } = item;
          return (
            <div
              key={index}
              className={`flex h-[15vh] w-[40vw] sm:h-[20vh] md:h-[25vh] sm:w-[30vw] md:w-[13vw] items-center justify-center flex-col border-4 rounded mb-16 
                ${index === 3 ? "bg-red-500" : "hover:bg-red-500"}`}
            >
              <img src={image} alt={name} className="w-[15vw] md:w-[6vw]" />
              <h1
                className={`font-bold ${
                  index === 3 ? "text-white" : "hover:text-white"
                }`}
              >
                {name}
              </h1>
            </div>
          );
        })}
      </div>

      <ProductSlider hideProSec="display" />
      <ProCard />

      <div className="mb-20">
        <HeadingSec
          HideType={HideType}
          Heading={"Feature"}
          text={"New Arrival"}
        />

        <div className="w-full flex items-center flex-col justify-center gap-8">
          <div className="flex flex-col items-center justify-center">
            <img
              src="/Assets/Images/Frame 739.png"
              alt="Category Banner"
              className="w-full max-w-[90vw] md:max-w-full"
            />
          </div>

          <div className="flex flex-wrap gap-6 md:gap-10 mt-10 justify-center">
            {pro3.map((item, index) => (
              <div
                key={index}
                className="flex items-center flex-col gap-4 max-w-[90vw] md:max-w-none"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[40vw] md:w-auto"
                />
                <h1 className="text-lg md:text-xl font-bold">{item.name}</h1>
                <p className="text-sm md:text-md">{item.pragraph}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPages;
