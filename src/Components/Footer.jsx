import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialPinterest } from "react-icons/ti";
import { FaYoutube } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";


function Footer() {
  return (
    <>
      <div className="flex ">
        <div className=" h-96 w-72 p-24">
          <img
            src="https://template.hasthemes.com/daxone/daxone/assets/images/logo/logo-1.png"
            alt=""
          />
          <p>Follow Us:</p>
          <ul className="flex gap-4 p-4">
            <span>
              <FaFacebookF />
            </span>
            <span>
              <TiSocialTwitter />
            </span>
            <span>
              <TiSocialPinterest />
            </span>
            <span>
              <FaYoutube />
            </span>
          </ul>
        </div>

        <div className=" p-24 h-96 w-full flex">
          <ul>
            <li className="mb-4 font-bold
">USEFUL LINK</li>
            <li>Shopping Cat</li>
            <li>WIshlist</li>
            <li>Chekout</li>
            <li>Support</li>
          </ul>
          <ul>
            <li className="mb-4 font-bold
">ABOUT US</li>
            <li>About</li>
            <li>Products</li>
            <li>Terms and conditions</li>
            <li>Help Center</li>
          </ul>
          <ul>
            <li className="mb-4 font-bold
">NEWSLETTER</li>
            <li >Subscribe to get all new updates</li>
<ul className="flex">
<input className="mt-2" type="text" name="" id="" placeholder="Enter Your Email" /><span><CiSearch className="mt-2" /></span>
</ul>

            
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
