import { useContext } from "react";
import { UserContext } from "../Context/Context";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../Store/Action";
import { toast } from "react-toastify";

const Products = () => {
  const { data } = useContext(UserContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleCart = (item) => {
    try {
      dispatch(addToCart(item));
      console.log(item);
      toast.success(" Added To Cart");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <Container>
      <Row className="g-4">
        {data &&
          data.map((items, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3}>
              <div className="p-4 cursor-pointer">
                <div className="relative p-4 bg-white border rounded-md shadow-md h-full flex flex-col justify-between">
                  <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                    -40%
                  </div>
                  <img
                    onClick={() => navigate(`/Products/${items.id}`)}
                    src={items.image}
                    alt={items.name}
                    className="h-36 w-full object-contain mb-2"
                  />
                  <h3 className="text-sm font-bold">{items.name}</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-red-600 font-bold text-lg">
                      {items.price}
                    </span>
                    <span className="line-through text-gray-500">$160</span>
                  </div>
                  <div className="flex items-center mt-1">
                    <span className="text-yellow-400 text-lg">
                      {items.rating.rate} ★★★★☆
                    </span>
                    <span className="ml-2 text-xs text-gray-500">
                      ({items.rating.count})
                    </span>
                  </div>
                  <button
                    onClick={() => handleCart(items)}
                    className="w-full bg-black p-2 text-white mt-3 flex items-center justify-center gap-2"
                  >
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      className="cursor-pointer"
                    />
                    Add To Cart
                  </button>
                </div>
              </div>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Products;
