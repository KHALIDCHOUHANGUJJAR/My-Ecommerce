/* eslint-disable react/prop-types */
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../Store/Action";
import { toast } from "react-toastify";


export function ProModal({ modal, setModal, selectProducts }) {
  const dispatch = useDispatch();
  const handleClose = () => setModal(false);
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    toast.success("Added to cart");
  };

  return (
    <Modal show={modal} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{selectProducts?.name || "Product Details"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {selectProducts ? (
          <div className="flex flex-col md:flex-row gap-4">
            <img
              src={
                selectProducts.image ||
                selectProducts.img ||
                "https://via.placeholder.com/150"
              }
              alt={selectProducts.name || "Product Image"}
              className="w-full md:w-2/3  object-contain rounded-md"
              style={{ maxHeight: "200px" }}
            />

            <div className="flex-grow">
              <h3 className="text-lg font-bold">{selectProducts.name}</h3>
              <p className="text-sm text-gray-600 mt-2">
                {selectProducts.description || "No description available."}
              </p>
              <div className="mt-4">
                <span className="text-red-600 font-bold text-xl">
                  {selectProducts.Price}
                </span>
                <span className="line-through text-gray-500 ml-2">$160</span>
              </div>
              <div className="mt-2">
                <span className="text-yellow-400">★★★★☆</span>
                <span className="ml-2 text-xs text-gray-500">(88)</span>
              </div>
              <Button
                variant="primary"
                className="mt-4 w-full font-bold btn-danger"
                onClick={() => {
                  const phoneNumber = "923485020076";
                  const productName = selectProducts.name || "Product";
                  const productPrice = selectProducts.Price || "N/A";
                  const message = `Hello, I want to order the following product:\n\nName: ${productName}\nPrice: ${productPrice}\nThank you!`;

                  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                    message
                  )}`;
                  window.open(whatsappURL, "_blank");
                }}
              >
              
                Order Now
              </Button>

              <Button
                variant="primary"
                className="mt-4 w-full font-bold btn-secondary"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </Modal.Body>
    </Modal>
  );
}
