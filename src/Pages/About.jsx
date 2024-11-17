/* eslint-disable react/no-unescaped-entities */
import { Card } from "react-bootstrap";
import { AbouteImage, AboutCard1, AboutCard2 } from "../Utils/Images";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { pro3 } from "../Utils/PorductsDetails";

const About = () => {
  return (
    <div className="w-full p-10 flex flex-col items-center justify-center gap-16 sm:ml-8">
      {AbouteImage.map((item, index) => {
        const { title, image, des1, des2 } = item;
        return (
          <div key={index} className="flex flex-col md:flex-row items-center gap-10 justify-center w-full max-w-5xl">
            <div className="flex flex-col gap-6 w-full md:w-1/2 p-4">
              <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
              <div className="flex flex-col gap-4 font-semibold shadow-md p-4 rounded-lg bg-gray-100">
                <p>{des1}</p>
                <p>{des2}</p>
              </div>
            </div>
            <img src={image} alt="img" className="w-full md:w-1/2 rounded shadow-md" />
          </div>
        );
      })}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 w-full items-center justify-center border-b-2 pb-10">
        {AboutCard1.map((item, index) => {
          const { imageUrl, name } = item;
          return (
            <div
              key={index}
              className={`flex flex-col items-center justify-center border-4 shadow-md rounded-lg h-60 sm:h-64 md:h-72 w-full max-w-xs p-4
                ${index === 1 ? "bg-red-500" : "hover:bg-red-500"}`}
            >
              <img src={imageUrl} alt="img" className="w-20 sm:w-24 md:w-28 lg:w-32 rounded-full" />
              <h1 className={`font-bold ${index === 3 ? "text-white" : "hover:text-white"} text-center mt-4`}>
                {name}
              </h1>
            </div>
          );
        })}
      </div>

      <div className="flex flex-wrap gap-8 justify-center w-full max-w-6xl">
        {AboutCard2.map((item, index) => {
          const { imageUrl, name, Positon } = item;
          return (
            <Card key={index} style={{ width: "18rem" }} className="shadow-lg rounded-lg overflow-hidden">
              <Card.Img variant="top" src={imageUrl} className="h-60 object-cover" />
              <Card.Body className="text-center">
                <Card.Title>{name}</Card.Title>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <Card.Text>{Positon}</Card.Text>
                  <FaLinkedin className="cursor-pointer text-2xl text-red-600 hover:text-red-800" />
                  <FaFacebook className="cursor-pointer text-2xl text-red-600 hover:text-red-800" />
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>

      <div className="flex flex-wrap gap-10 p-10 w-full max-w-4xl justify-center">
        {pro3.map((item, index) => (
          <div key={index} className="flex items-center flex-col gap-4 text-center w-60 p-4 shadow-lg rounded-lg">
            <img src={item.img} alt={item.name} className="w-32 h-32 object-cover rounded-full" />
            <h1 className="text-xl font-bold">{item.name}</h1>
            <p className="text-md">{item.pragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
