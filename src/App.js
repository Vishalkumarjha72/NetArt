import "./App.css";
import { IoIosCall } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";
import Logo from "./assests/logo.png";
import Img1 from "./assests/1.png";
import Img2 from "./assests/2.png";
import Img3 from "./assests/3.png";

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="logodiv">
          <img src={Logo} className="logo" alt="logo" />
        </div>
        <div className="hero">
          <img src={Img1} alt="trophy" className="img1" />

          <div className="content">
            <h5>
              C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
              the 4th time.
            </h5>
            <ul>
              <li>
                C.R.I.'s energy efficient products are well recognized by
                various Government Institutions, as trustworthy products for
                various projects across the globe to save energy.
              </li>
              <li>
                C.R.I. is the highest contributor in the country for the
                projects of EESL (Energy Efficiency Services Limited) to replace
                the old inefficient pumps with 5 Star rated energy efficient
                smart pumps with IoT enabled control panel.
              </li>
            </ul>
            <img src={Img2} alt="heroImage" />
            <p>
              Government of India has awarded the
              <b>"National Energy Conservation Award 2018"</b> . Mr. G.
              Selvaraj, Joint Managing Director of C.R.I. Group received the
              award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj
              Kumar Singh, Honorable Minister of State.
            </p>
          </div>
        </div>
        <p className="text">
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </p>
        <img src={Img3} alt="products" className="product" />
        <p className="products">
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </p>
        <hr />
        <p className="products">
          C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
        </p>

        <div className="allproducts">
          <div className="row1">
            <span>CHEMICALS & PROCESS</span>
            <div class="vl" /> <span>POWER</span>
            <div class="vl" /> <span>WATER & WASTE WATER</span>
            <div class="vl" />
            <span>OILS & GAS</span> <div class="vl" /> <span>PHARMA</span>
            <div class="vl" />
            <span>SUGARS & DISTILLERIES</span> <div class="vl" />
            <span>PAPER & PULP</span> <div className="vl"></div>
            <span>MARINE & DEFENCE</span> <div className="vl"></div>
            <span>METAL & MINING</span> <div className="vl" />
            <span></span>FOOD & BEVERAGE <div className="vl" />
          </div>
          <div className="row2">
            <span>PETROCHEMICAL & REFINERIES</span> <div className="vl" />
            <span>SOLAR</span> <div className="vl" />
            <span>BUILDING</span>
            <div className="vl" />
            <span>HVAC</span> <div className="vl" />
            <span>FIRE</span> <div className="vl"></div> <span>FIGHTING</span>
            <div className="vl" />
            <span>AGRICULTURE & RESIDENTIAL</span>
          </div>
        </div>

        <div className="footer">
          <div className="call">
            <IoIosCall color="#ec3237" size={15} className="iconcall" />
            <p style={{ marginTop: "18px", paddingLeft: "2px" }}>
              Toll free <b>1800 200 1234</b>
            </p>
          </div>
          <div className="call">
            <FaFacebook color="white" size={15} className="iconfacebook" />
            <p style={{ marginTop: "18px", paddingLeft: "2px" }}>
              www.facebook.com/cripumps
            </p>
          </div>
          <div className="call">
            <BsGlobe2 color="#ec3237" size={15} className="iconcall" />
            <p style={{ marginTop: "18px", paddingLeft: "2px" }}>
              www.crigroups.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
