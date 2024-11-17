import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { auth, signOut } from "../Pages/Auth/FirebaseConfig";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

import {
  faSearch,
  faCartShopping,
  faUser,
  faRightFromBracket,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { UserContext } from "../Context/Context";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Card, Col, Row } from "react-bootstrap";
import { ProModal } from "./Modal";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((state) => state.cart || []);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { data } = useContext(UserContext);
  const [category, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [isFound, setFound] = useState("");
  const [modal, setModal] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handlecat = (cat) => {
    const filteredCat = data.filter((item) => item.category === cat);
    setCategories(filteredCat);
  };

  const handleSearch = () => {
    const filteredSearch = data.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    if (filteredSearch.length === 0) {
      setFound(true);
    } else {
      setCategories(filteredSearch);
      setFound(false);
    }
  };

  const logout = () => {
    Swal.fire({
      title: "Are you sure you want to logout?",
      text: "You will be logged out from your account!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log me out!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        signOut(auth)
          .then(() => {
            navigate("/signin");
            toast.success("You have successfully logged out.");
          })
          .catch((error) => {
            console.error("Error during logout: ", error);
            toast.error("Error during logout. Please try again.");
          });
      } else {
        Swal.fire({
          title: "Cancelled",
          text: "You are still logged in.",
          icon: "info",
          confirmButtonColor: "#3085d6",
        });
      }
    });
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const viewModal = (product) => {
    setSelectedProduct(product);
    setModal(true);
  };

  const isDashboard = location.pathname === "/Dashboard";
  const isLanding =
    location.pathname === "/" || location.pathname === "/Signup";

  return (
    <>
      {["xl"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="bg-[hsla(0, 0%, 100%, 0.25)] backdrop-blur-md p-4 mb-7 sticky top-0 left-0 right-0 z-50 shadow-md"
        >
          <Container fluid>
            <NavLink to="/" className="text-3xl font-bold">
              EXCLUSIVE
            </NavLink>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  EXCLUSIVE
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="flex items-center justify-evenly">
                <Nav className="justify-content-end items-center gap-6 font-bold flex-grow-1 pe-3 text-lg">
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/About">About</NavLink>
                  <NavLink to="/Products">Products</NavLink>
                  <NavLink to="/Contact">Contact</NavLink>
                  {isLanding && <NavLink to="/Signin">Login</NavLink>}
                  <NavDropdown title="Category" id="dropdown-category">
                    {data && data.length > 0 ? (
                      [...new Set(data.map((item) => item.category))].map(
                        (category, index) => (
                          <NavDropdown.Item
                            key={index}
                            onClick={() => handlecat(category)}
                          >
                            {category}
                          </NavDropdown.Item>
                        )
                      )
                    ) : (
                      <NavDropdown.Item>
                        No categories available
                      </NavDropdown.Item>
                    )}
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    value={search}
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <Button variant="outline-secondary" onClick={handleSearch}>
                    <FontAwesomeIcon
                      icon={faSearch}
                      className="cursor-pointer text-2xl"
                    />
                  </Button>
                </Form>

                <div className="flex gap-3 text-gray-700 ml-3 items-center">
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="cursor-pointer text-2xl"
                  />
                  <NavLink to={"/AddtoCart"} className="relative">
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                      {cartItems.length}
                    </span>
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      className="cursor-pointer text-2xl"
                    />
                  </NavLink>
                  {isDashboard && (
                    <div className="bg-red-600 text-white p-1 rounded-full">
                      <FontAwesomeIcon
                        icon={faUser}
                        className="cursor-pointer text-2xl"
                        onClick={toggleDropdown}
                      />
                    </div>
                  )}
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
          {isDropdownOpen && (
            <div className="absolute right-10 top-20 bg-white shadow-lg rounded-lg w-48 p-3 z-10">
              <ul className="text-sm">
                {user && (
                  <li className="p-2 flex items-center gap-2 text-d-700 font-bold">
                    <FontAwesomeIcon icon={faUser} /> {user.name || "Guest"}
                  </li>
                )}
                <li className="p-2 flex items-center gap-2 text-gray-700">
                  <FontAwesomeIcon icon={faHeart} /> My Wishlist
                </li>
                <NavLink
                  to={"/AddtoCart"}
                  className="p-2 flex items-center gap-2 text-gray-700"
                >
                  {" "}
                  <span className="absolute  bg-red-500 text-white text-xs rounded-full px-1 py-0 bottom-[38%]">
                    {cartItems.length}
                  </span>
                  <FontAwesomeIcon icon={faCartShopping} /> My Cart
                </NavLink>
                <li
                  onClick={logout}
                  className="p-2 flex items-center gap-2 cursor-pointer text-gray-700"
                >
                  <FontAwesomeIcon icon={faRightFromBracket} /> Logout
                </li>
              </ul>
            </div>
          )}

          <Container className="absolute  top-[15%] scroll-y ">
            <Row className="g-4">
              {isFound ? (
                <p className="text-3xl text-red-500 font-bold text-center">
                  No data Found
                </p>
              ) : (
                category.map((product, index) => (
                  <Col xs={12} sm={6} md={4} lg={3} key={index}>
                    <Card
                      style={{ width: "100%" }}
                      onClick={() => viewModal(product)}
                    >
                      <Card.Img
                        variant="top"
                        src={product.image}
                        className="h-[30vh] object-contain"
                        alt={product.title}
                      />
                      <Card.Body>
                        <Card.Title>{product.title.slice(0, 35)}</Card.Title>
                        <Button variant="secondary" className="text-red-300">
                          ${product.price}
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              )}
            </Row>
          </Container>
        </Navbar>
      ))}

      <ProModal modal={modal} setModal={setModal} chosepro={selectedProduct} />
    </>
  );
};

export default Header;
