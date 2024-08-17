import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="py-12">
      <div className="w-4/5 mx-auto grid grid-cols-1 border-b-[1.5px] border-b-slate-300 pb-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-start">
        {/* Footer first part */}
        <div>
          <div className="text-2xl text-red-700 font-semibold mb-4">
            NFTFY Shop
          </div>
          <p className="text-gray-700 text-sm mt-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
            repudiandae, ipsam hic.
          </p>
          <div className="mt-4 flex items-center space-x-4">
            <FaFacebookF className="w-6 h-6 text-blue-700" />
            <FaTwitter className="w-6 h-6 text-sky-500" />
            <FaYoutube className="w-6 h-6 text-rose-700" />
            <FaInstagram className="w-6 h-6 text-pink-600" />
          </div>
        </div>
        {/* Footer second part */}
        <div className="md:mx-auto mx-0">
            <h1 className="footer_title">MarketPlace</h1>
            <p className="footer_link">All NFTs</p>
            <p className="footer_link">Art</p>
            <p className="footer_link">Music</p>
            <p className="footer_link">Collectibles</p>
            <p className="footer_link">Wallet</p>
        </div>
        {/* Footer third part */}
        <div className="lg:mx-auto mx-0">
            <h1 className="footer_title">Company</h1>
            <p className="footer_link">Explore</p>
            <p className="footer_link">About</p>
            <p className="footer_link">Contact Us</p>
            <p className="footer_link">Our blog</p>
            <p className="footer_link">FAQ</p>
        </div>
        {/* Footer fourth part */}
        <div className="xl:mx-auto md:mx-auto lg:mx-0 mx-0">
            <h1 className="footer_title">My Account</h1>
            <p className="footer_link">Authors</p>
            <p className="footer_link">Collections</p>
            <p className="footer_link">Author Profile</p>
            <p className="footer_link">Create Item</p>
            <p className="footer_link">FAQ</p>
        </div>
      </div>
      <div className="text-center mt-4 text-sm text-black opacity-75">Copyright © 2024 by Muhammad Aatir</div>
    </div>
  );
};

export default Footer;
