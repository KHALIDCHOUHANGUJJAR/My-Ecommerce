/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context/Context";
import { Container } from "react-bootstrap";
import { Col, Row, Spin } from "antd";
import HeadingSec from "./HeadingSec";
import Buttons from "../Utils/Buttons/Buttons";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { ProModal } from "./Modal";
import { LoadingOutlined } from "@ant-design/icons";

const ProCard = ({ HideType }) => {
  const navigate = useNavigate();
  const { data } = useContext(UserContext);
  const [modal, setModal] = useState(false);
  const [selectedPro, setSelectedPro] = useState({});
  const [loading, setLoading] = useState(true);

  const viewModal = (pro) => {
    setSelectedPro(pro);
    setModal(true);
  };

  useEffect(() => {
    if (data && data.length > 0) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [data]);

  return (
    <div>
      <HeadingSec
        HideType={HideType}
        Heading={"Our Products"}
        text={"Explore Our Products"}
      />

      <div className="flex items-center justify-center">
        <Container className="flex flex-col items-center">
          <Row gutter={[16, 16]}>
            {loading ? (
              <Spin
                indicator={<LoadingOutlined style={{ fontSize: 100 }} spin />}
              />
            ) : (
              data &&
              data.slice(0, 8).map((item, index) => (
                <Col
                  key={index}
                  xs={24}
                  sm={12}
                  md={8}
                  lg={6}
                  xl={6}
                  className="cursor-pointer"
                >
                  <div className="p-4">
                    <div
                      className="relative bg-white border rounded-md shadow-md h-60 p-4"
                      onClick={() => viewModal(item)}
                    >
                      <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                        -40%
                      </div>

                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-32 w-full object-contain"
                      />

                      {index === 1 && (
                        <button className="w-full p-2 bg-black text-white mt-3 flex gap-4 items-center justify-center">
                          <FontAwesomeIcon
                            icon={faCartShopping}
                            className="cursor-pointer"
                          />
                          Add To Cart
                        </button>
                      )}

                      <h3 className="mt-2 text-sm font-bold">{item.name}</h3>

                      <div className="flex items-center space-x-2">
                        <span className="text-red-600 font-bold text-lg">
                          {item.price}
                        </span>
                        <span className="line-through text-gray-500">$160</span>
                      </div>

                      <div className="flex items-center mt-1">
                        <span className="text-yellow-400">★★★★☆</span>
                        <span className="ml-2 text-xs text-gray-500">(88)</span>
                      </div>
                    </div>
                  </div>
                </Col>
              ))
            )}
          </Row>

          <Buttons
            text="View All Products"
            onClick={() => navigate("/products")}
          />
        </Container>
      </div>

      <ProModal modal={modal} setModal={setModal} chosepro={selectedPro} />
    </div>
  );
};

export default ProCard;
