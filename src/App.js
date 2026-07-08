import "./App.css";
// import React, {useState,useEffect}from "react";
import cart from "./cart.webp";
import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcPaypal,
  FaCcDiscover,
  FaUser,
  FaSearch,
  FaShoppingCart,
   FaBars, FaTimes
} from "react-icons/fa";
function Header() {
   const [open, setOpen] = useState(false);
   const [showInput, setShowInput] = useState(false);
  return (
    <div className="header">
      <nav>
        <ul className="icon">
          <li>
  <a 
    href="https://www.facebook.com" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <FaFacebookF />
  </a>
</li>
          <li><a href="https://www.instagram.com"          
          target="_blank" 
          rel="noopener noreferrer"><FaInstagram /></a></li>
          <li><a href="https://www.tiktok.com" 
          target="_blank"
           rel="noopener noreferrer"><FaTiktok /></a></li>
        </ul>
        <p>Limited Time Offer: Free Shipping over Rs 3000.</p>
      </nav>
      <div>
        <div className="navbar">
          {/* SIDE BUTTON  */}
          <div className="nav-left">
        <button className="menu-btn" onClick={() => setOpen(true)}>
          <FaBars />
        </button>
          </div>
          <div className="logo">BuyNest</div>

          <div className="nav-right">
            <span>India | INR</span>

            <i className="fas fa-search"
        onClick={() => setShowInput(true)}
        ><FaSearch/></i>
         {showInput && (
          <div className="search-bar">
        <input
          type="text"
          placeholder="Search here..."
          className="search-input"
          />
        <button className="close-btns" onClick={() => setShowInput(false)}>
            <FaTimes />
          </button>
          </div>
      )}
      
            <i className="fas fa-user"><FaUser/></i>
            <i className="fas fa-shopping-bag"><FaShoppingCart/></i>
          </div>
        </div>
        <img src={cart} alt="logo" className="logos"></img>
      </div>
      <div>
    

      {/* Sidebar */}
      <div className={`sidebar ${open ? "show" : ""}`}>
        <div className="top">

          <button className="close-btn" onClick={() => setOpen(false)}>
            <FaTimes />
          </button>
        </div>

        <ul>
          <li>Home</li>
          <li>Kitchen Elegance</li>
          <li>Home & Electric Appliances</li>
          <li>Beauty & Care Products</li>
        </ul>
      </div>

      {/* Overlay */}
      {open && <div className="overlay" onClick={() => setOpen(false)}></div>}
    </div>
    </div>
  );
}
function Body(){
  return(
<div>

<div className="allporduct">
        <h1>BEST SELLER PRODUCTS</h1>
        <div className="products">
          <div className="product">
            <div className="images">

            <img
              src="https://img.magnific.com/premium-psd/travel-beg-isolated-white-background_1296679-5482.jpg"
              alt="travel bag"
              width="300"
              />
              <p>BEST SELLER</p>
              </div>

            <p>
              Fashion Men Sling Bag Pack with Lock Waterproof Anti-Theft Chest
              Bag with USB Charging Port Shoulder Bag Body Backpack with TSA
              Lock (Random Color)
            </p>
            <button className="viewproduct">VIEW PRODUCT</button>

          </div>
          <div className="product">
            <div className="images">

            <img
              src="https://thumbs.dreamstime.com/b/cute-animated-panda-munching-bamboo-seated-moss-covered-rock-cute-animated-panda-munching-bamboo-seated-moss-363270855.jpg"
              alt="cute panda"
              width="300"
            />
            <p>BEST SELLER</p>
              </div>
            <p>Cute Panda Night Light Silicone Soft Lamp Portable</p>

            <button className="viewproduct">VIEW PRODUCT</button>
          </div>
          <div className="product">
            <div className="images">

            <img
              src="https://images-na.ssl-images-amazon.com/images/I/71yGxT4zl4L._AC_SY355_.jpg"
              alt="panda"
              width="300"
            />
            <p>BEST SELLER</p>
              </div>
            <p>

              3 In 1 Portable Vacuum Cleaner Wireless Hand-held Cleaning For Car
              Home (As 228)
            </p>
            <button className="viewproduct">VIEW PRODUCT</button>

          </div>
          <div className="product">
            <div className="images">

            <img
              src="https://5.imimg.com/data5/SELLER/Default/2025/5/512913232/QC/EQ/BC/6445574/car-wash-pipe-1000x1000.png"
              alt="car wash pipe"
              width="300"
            />
            <p>BEST SELLER</p>
              </div>
            <p>
              Automatic Cordless Car Wash Spray Gun 48V High Pressure Lithium
              Battery, Wireless Foam Jet Washer (Double Battery)
            </p>
            <button className="viewproduct">VIEW PRODUCT</button>

          </div>
        </div>
      </div>
      {/* SECOND  */}
      <div className="allporduct">
        <h1>BEST PRICE RANGE AND GOOD QUALITY</h1>
        <div className="products">
          <div className="product">
            <div className="images">
             <img
        src="https://m.media-amazon.com/images/I/71zE+hWwUnL._SL1500_.jpg"
        alt="Rain Coat"
        width="300"
      />
      <p>BEST SELLER</p>
              </div>
      <p>Rain Coat Waterproof Parachute Material  For Bikers, Men and Women</p>
           
            <button className="viewproduct">VIEW PRODUCT</button>
          </div>
          <div className="product">
            <div className="images">
            <img 
        src="https://img.drz.lazcdn.com/static/pk/p/638149dc6b717e3184768cb76a77e597.jpg_720x720q80.jpg"
        alt="product"
        width="300"
      />
      <p>BEST SELLER</p>
              </div>
            <p>vaneless Hanging Neck Fan | portable rechargeable fan bladeless neck fan (random color)</p>

            <button className="viewproduct">VIEW PRODUCT</button>

          </div>
          <div className="product">
            <div className="images">
           
              <img 
        src="https://m.media-amazon.com/images/I/61X-oWRrOgL._SL1500_.jpg"
        alt="panda toy"
        width="300"
      />
      <p>BEST SELLER</p>
              </div>
            <p>
             Stanley Flip Straw Tumbler 40oz (1200ML) Insulated Stainless Steel with Handle, Durable Design for Daily Hydration &amp; Travel Blue
            </p>
            <button className="viewproduct">VIEW PRODUCT</button>

          </div>
          <div className="product">
            <div className="images">
           
             <img 
        src="https://i5.walmartimages.com/seo/COFEST-Electric-Massaging-Comb-Scratcher-Massager-Comb-Hair-Scalp-Massager-Stress-Relieve-Scalp-Brush-Comb-for-Women-Men-with-USB-Rechargeable-White_9cf44e74-f8f6-43d6-91f0-67138521de2a.2d5b833c18db04a9fe127ffea0ee01f1.jpeg"
        alt="scalp massager"
        width="300"
      />
      <p>BEST SELLER</p>
              </div>
            <p>
              Electric Massage Comb with Blue &amp; Red Light Therapy Rechargeable Scalp Massager with Vibration, Spray &amp; Negative Ions
            </p>
            <button className="viewproduct">VIEW PRODUCT</button>
          </div>
        </div>
      </div>
</div>

  );

}
function Body1(){
  return(
    <div className="body1">
      <h1 className="heading">LONG LASTING PRODUCTS</h1>
         <img
        src="https://buynestmart.com/cdn/shop/files/2025_12_30_8634598542c1f545c22cbc23d9acf6eb.jpg?v=1775214519&width=2000"
        alt="Product"
        width="300"
      />
      <div>
        <h1>Stay in the loop</h1>
        <p>Get exclusive access to new collections, special offers, and insider tips delivered
           straight to your inbox. Join our community of savvy shoppers today</p>
           <input type="email" placeholder="Email              " />
      </div>
    </div>
  )
}



function Footer() {
  return (
    <footer className="footer">

      

      {/* Gradient Footer */}
      <div className="footer-bottom">

        {/* Social Icons */}
        <div className="social-icons">
          <FaFacebookF />
          <FaInstagram />
          <FaTiktok />
        </div>

        <hr />

        {/* Bottom Content */}
        <div className="bottom-content">

          {/* Country */}
          <div className="country-section">
            <label>Country/region</label>

            <select>
              <option>India | INR ₹</option>
              <option>USA | USD $</option>
              <option>UK | GBP £</option>
            </select>

            <p>© 2026, BuyNest Powered by Shopify · Privacy policy</p>
          </div>

          {/* Payment Icons */}
          <div className="payment-icons">
            <FaCcVisa />
            <FaCcMastercard />
            <FaCcAmex />
            <FaCcPaypal />
            <FaCcDiscover />
          </div>
        </div>
      </div>
    </footer>
  );
}


function App() {
  return (
    <div className="main">
      <Header />
      <Body />
      <Body1 />
      <Footer />
    </div>
  );
}

export default App;
