import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 px-4">
        <div>
          <h1 className="font-bold text-lg">Exclusive</h1>
          <h3 className="text-sm mt-2">Subscribe</h3>
          <p className="text-sm">Get 10% off your First order</p>
          <div className="mt-2">
            <input
              type="text"
              placeholder="Enter your email"
              className="p-2 text-black rounded-sm"
            />
          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg">Support</h3>
          <p className="text-sm mt-2">111 Bijoy sarani, Dhaka, Bangladesh</p>
          <p className="text-sm">exclusive@gmail.com</p>
          <p className="text-sm">+88015-88888-9999</p>
        </div>

        <div>
          <h3 className="font-bold text-lg">Account</h3>
          <ul className="mt-2 space-y-2">
            <li>My Account</li>
            <NavLink to="/signup" className="text-sm">
              SingIn/Register
            </NavLink>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg">Download App</h3>
          <p className="text-sm mt-2">Save $3 with App New User Only</p>
          <div className="mt-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Google_Play_Store_badge_EN.svg/1920px-Google_Play_Store_badge_EN.svg.png"
              alt="Google Play"
              className="h-8 mb-2"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Download_on_the_App_Store_Badge.svg"
              alt="App Store"
              className="h-8"
            />
          </div>
        </div>
      </div>

      <div className="mt-8 text-center border-t border-gray-600 pt-4">
        <p className="text-sm">
          © Copyright Muhammad Khalid Chouhan 2024. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
