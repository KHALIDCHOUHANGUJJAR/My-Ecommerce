import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Col, Container, Row } from "react-bootstrap"

const AllCard = () => {
  return (
    <div>
   <Container className="flex flex-col items-center">
          <Row  gutter={[16, 16]}>
            
                <Col  xs={24} sm={12} md={8} lg={6} xl={6}>
                  <div className="p-4">
                    <div className="relative bg-white border rounded-md shadow-md h-60 p-4">
                      <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                        -40%
                      </div>
                      <img
                        src=""
                        alt=""
                        className="h-32 w-full object-contain"
                      />

                      <button className="w-full p-2 bg-black text-white mt-3 flex gap-4 items-center justify-center">
                          <FontAwesomeIcon
                            icon={faCartShopping}
                            className="cursor-pointer"
                          />
                          Add To Cart
                        </button>
                      
                      <h3 className="mt-2 text-sm font-bold"></h3>
                      <div className="flex items-center space-x-2">
                        <span className="text-red-600 font-bold text-lg">
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
          </Row>
     
        </Container>      
    </div>
  )
}

export default AllCard
