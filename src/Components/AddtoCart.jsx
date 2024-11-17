import { useDispatch, useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { RemoveToCart } from "../Store/Action";
import { toast } from "react-toastify";
import { Empty } from "antd";

export function AddtoCart() {
  const cartItems = useSelector((state) => state.cart || []);
  const dispatch = useDispatch();
  const handleDispatch = (productId) => {
    dispatch(RemoveToCart(productId));
    toast.success("Removed from cart");
  };

  return (
    <div className="flex flex-col items-center w-full gap-4 px-4 lg:px-8">
      <h2 className="font-bold text-3xl text-center text-gray-800 mb-6">
        Shopping Cart
        <span className="block text-lg text-gray-500 mt-2">
          Review your items, adjust quantities, and proceed to checkout.
        </span>
      </h2>

      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cartItems.map((item) => (
            <Card
              key={item.id}
              className="mb-3 w-full max-w-sm mx-auto shadow-lg hover:shadow-xl transition-shadow"
            >
              <Card.Img
                variant="top"
                src={
                  item.image || item.img || "https://via.placeholder.com/150"
                }
                alt={item.title}
                className="h-[200px] object-cover"
              />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  <strong>Price:</strong> ${item.price || item.price} <br />
                  <strong>Category:</strong> {item.category} <br />
                  <strong>Quantity:</strong> {item.quantity} <br />
                  <strong>Rating:</strong> {item.rating?.rate} ★ (
                  {item.rating?.count} reviews)
                </Card.Text>
                <Button
                  variant="danger"
                  onClick={() => handleDispatch(item.id)}
                  className="w-full"
                >
                  Remove from Cart
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      ) : (
        <p className="flex items-center justify-center p-11  text-center text-gray-600">
          <Empty description="No cart are AddToCart " className="  text-3xl" />
        </p>
      )}
    </div>
  );
}
