import { useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../Context/Context";
import { Button } from "react-bootstrap";

const ProductsDetails = () => {
  const { data } = useContext(UserContext);
  const { id } = useParams();

  const product = data.find((item) => item.id === Number(id));
  if (!product) {
    return (
      <div className="text-center mt-10 text-3xl font-bold text-gray-600">
        Product not found.
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-sm text-gray-500 mb-4">
        Account / {product.category} / {product.title}
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-10 sm:gap-20 h-auto sm:h-[50vh] mt-4 sm:mt-11">
        <div className="flex-shrink-0 w-full sm:w-auto">
          <img
            src={product.image}
            alt={product.title}
            className="w-full sm:max-w-md h-[40vh] sm:h-[60vh] object-cover rounded-lg"
          />
        </div>

        <div className="flex-1">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
            {product.title}
          </h1>
          <p className="text-2xl sm:text-3xl font-semibold text-gray-900 mt-2">
            ${product.price}
          </p>
          <p className="text-gray-700 mt-4">{product.description}</p>

          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <input
              type="number"
              min="1"
              defaultValue="1"
              className="w-20 px-2 py-1 border border-gray-300 rounded-md"
            />
            <Button
              variant="primary"
              className="mt-4 w-full font-bold btn-danger"
              onClick={() => {
                const phoneNumber = "923485020076";
                const productName = product.title || "Product";
                const productPrice = product.price || "N/A";
                const message = `Hello, I want to order the following product:\n\nName: ${productName}\nPrice: ${productPrice}\nThank you!`;

                const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                  message
                )}`;
                window.open(whatsappURL, "_blank");
              }}
            >
              Order Now
            </Button>
          </div>

          <div className="mt-6 space-y-2">
            <p className="text-gray-600">
              <strong>Free Delivery</strong> on eligible orders.
            </p>
            <p className="text-gray-600">
              <strong>Return Delivery</strong> within 30 days.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 md:mt-20">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
          Related Items
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {data
            .filter((item) => item.id !== product.id)
            .slice(0, 4)
            .map((related) => (
              <div
                key={related.id}
                className="bg-white shadow-lg rounded-lg p-4 text-center"
              >
                <img
                  src={related.image}
                  alt={related.title}
                  className="w-full h-[30vh] sm:h-[40vh] object-cover rounded-md"
                />
                <p className="mt-2 text-sm font-semibold text-gray-800">
                  {related.title}
                </p>
                <p className="text-red-500 font-bold">${related.price}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
