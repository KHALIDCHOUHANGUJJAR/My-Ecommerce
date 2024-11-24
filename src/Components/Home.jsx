import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
      <div className="siderbar w-full  rounded-2xl ">
        <Slider {...settings}>
          <div className="relative">
            <img
              src="/Assets/Images/Frame 560 (1).png"
              alt="Slide 1"
              className="sideimage w-full h-[70vh]  object-contain "
            />
          </div>
          <div className="relative">
            <img
              src="/Assets/Images/3a818301-b0e3-49c6-bd3b-c981793d467f_PK-1976-688.jpg_2200x2200q80.jpg_.webp"
              alt="Slide 2"
              className="sideimage w-full h-[70vh]  object-contain"
            />
          </div>
        </Slider>
      </div>
  );
}

export default Home;
