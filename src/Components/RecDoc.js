import { Link } from "react-router-dom";

import Navbar from "./Navbar";
import chat from "../images/Group 3.png";

import D1 from "../icons/Frame 1000005880 (1).png";
import D2 from "../icons/Frame 1000005880.png";
import D3 from "../icons/Frame 1000005880 (10).png";
import D4 from "../icons/Frame 1000005880 (2).png";
import D5 from "../icons/Frame 1000005881 (1).png";
import D6 from "../icons/Frame 1000005881 (2).png";
import D7 from "../icons/Frame 1000005881 (3).png";
import D8 from "../icons/Frame 1000005881 (5).png";
import D9 from "../icons/Frame 1000005882.png";
import D10 from "../icons/Frame 1000005882 (1).png";
import D11 from "../icons/Frame 1000005882 (5).png";
import D12 from "../icons/Frame 1000005889.png";
import location from "../icons/Rectangle 555.png";

import "../CSS/RecDoc.css";

import React, { useState } from "react";
import Sidebar from "./Sidebar";

function RecDoc() {
  const [isAbout, setIsAbout] = useState("ABOUT");

  // TODO: Complete List
  const doctorList = [
    {
      id: 1,
      info: (
        <React.Fragment>
          <img src={D1} alt="..." />
          <h2> Dr.Mona Ibrahem </h2>
          <p> General | RSUD Gatot Subroto </p>
          <div className="Buttons">
            <div className="btn1">
              <span
                className="about-button"
                onClick={() => setIsAbout("ABOUT")}
              >
                About
              </span>
              <p className="underline"></p>
            </div>
            <div className="btn2">
              <span
                className="location-button"
                onClick={() => setIsAbout("LOCATION")}
              >
                Location
              </span>
              <p className="underline"></p>
            </div>
          </div>
          {isAbout === "ABOUT" ? (
            <div className="About">
              <h5> About me </h5>
              <p>
                Dr.Mona Ibrahem is Highly experienced in cardiology with
                numerous published research papers.
              </p>
              <h5> Working Time </h5>
              <p> Monday - Friday, 08.00 AM - 20.00 PM </p>
              <h5> STR </h5>
              <p> 4726482464 </p>
              <h6>University: Harvard Medical School </h6>
              <p> Year of Graduation: 2005 </p>

              <Link className="chat" to="/chatRoom">
                <button class="chat-button">
                  Chat with doctor <img src={chat} alt="" />
                </button>
              </Link>
            </div>
          ) : (
            <div className="Location">
              <img src={location} alt="" />
            </div>
          )}
        </React.Fragment>
      ),
    },
    {
      id: 2,
      info: (
        <React.Fragment>
          <img src={D2} alt="..." />
          <h2> Dr.Mohamed Ahmed </h2>
          <p> General | RSUD Gatot Subroto </p>
          <div className="Buttons">
            <div className="btn1">
              <span
                className="about-button"
                onClick={() => setIsAbout("ABOUT")}
              >
                About
              </span>
              <p className="underline"></p>
            </div>
            <div className="btn2">
              <span
                className="location-button"
                onClick={() => setIsAbout("LOCATION")}
              >
                Location
              </span>
              <p className="underline"></p>
            </div>
          </div>
          {isAbout === "ABOUT" ? (
            <div className="About">
              <h5> About me </h5>
              <p>
                Dr. Mohamed Ahmed is Expert in robotic surgery with advanced
                technical skills.
              </p>
              <h5> Working Time </h5>
              <p> Monday - Friday, 08.00 AM - 20.00 PM </p>
              <h5> STR </h5>
              <p> 4726482464 </p>
              <h6> University: Stanford University School of Medicine </h6>
              <p> Year of Graduation: 2010 </p>

              <Link className="chat" to="/chatRoom">
                <button class="chat-button">
                  Chat with doctor <img src={chat} alt="" />
                </button>
              </Link>
            </div>
          ) : (
            <div className="Location">
              <img src={location} alt="" />
            </div>
          )}
        </React.Fragment>
      ),
    },
    {
      id: 3,
      info: (
        <React.Fragment>
          <img src={D3} alt="..." />
          <h2> Dr.Ragab Hmada </h2>
          <p> General | RSUD Gatot Subroto </p>
          <div className="Buttons">
            <div className="btn1">
              <span
                className="about-button"
                onClick={() => setIsAbout("ABOUT")}
              >
                About
              </span>
              <p className="underline"></p>
            </div>
            <div className="btn2">
              <span
                className="location-button"
                onClick={() => setIsAbout("LOCATION")}
              >
                Location
              </span>
              <p className="underline"></p>
            </div>
          </div>
          {isAbout === "ABOUT" ? (
            <div className="About">
              <h5> About me </h5>
              <p>
                Dr. Ragab Hmada is Renowned for his bedside manner and patient
                communication.
              </p>
              <h5> Working Time </h5>
              <p> Monday - Friday, 07.00 AM - 20.00 PM </p>
              <h5> STR </h5>
              <p> 4726482464 </p>
              <h6>
                University: University of Chicago Pritzker School of Medicine{" "}
              </h6>
              <p> Year of Graduation: 2013 </p>

              <Link className="chat" to="/chatRoom">
                <button class="chat-button">
                  Chat with doctor <img src={chat} alt="" />
                </button>
              </Link>
            </div>
          ) : (
            <div className="Location">
              <img src={location} alt="" />
            </div>
          )}
        </React.Fragment>
      ),
    },

    {
      id: 4,
      info: (
        <React.Fragment>
          <img src={D4} alt="..." />
          <h2> Dr. Yaser Adel </h2>
          <p> General | RSUD Gatot Subroto </p>
          <div className="Buttons">
            <div className="btn1">
              <span
                className="about-button"
                onClick={() => setIsAbout("ABOUT")}
              >
                About
              </span>
              <p className="underline"></p>
            </div>
            <div className="btn2">
              <span
                className="location-button"
                onClick={() => setIsAbout("LOCATION")}
              >
                Location
              </span>
              <p className="underline"></p>
            </div>
          </div>
          {isAbout === "ABOUT" ? (
            <div className="About">
              <h5> About me </h5>
              <p>
                Dr. Yaser Adel is Expert in endocrinology with a patient-centric
                approach.
              </p>
              <h5> Working Time </h5>
              <p> Monday - Friday, 08.00 AM - 20.00 PM </p>
              <h5> STR </h5>
              <p> 4726482464 </p>
              <h6>University: University of Michigan Medical School </h6>
              <p> Year of Graduation: 2006 </p>

              <Link className="chat" to="/chatRoom">
                <button class="chat-button">
                  Chat with doctor <img src={chat} alt="" />
                </button>
              </Link>
            </div>
          ) : (
            <div className="Location">
              <img src={location} alt="" />
            </div>
          )}
        </React.Fragment>
      ),
    },

    {
      id: 5,
      info: (
        <React.Fragment>
          <img src={D5} alt="..." />
          <h2> Dr. Omar Ali </h2>
          <p> General | RSUD Gatot Subroto </p>
          <div className="Buttons">
            <div className="btn1">
              <span
                className="about-button"
                onClick={() => setIsAbout("ABOUT")}
              >
                About
              </span>
              <p className="underline"></p>
            </div>
            <div className="btn2">
              <span
                className="location-button"
                onClick={() => setIsAbout("LOCATION")}
              >
                Location
              </span>
              <p className="underline"></p>
            </div>
          </div>
          {isAbout === "ABOUT" ? (
            <div className="About">
              <h5> About me </h5>
              <p>Dr. Omar Ali is Extensive knowledge in infectious diseases.</p>
              <h5> Working Time </h5>
              <p> Monday - Friday, 08.00 AM - 20.00 PM </p>
              <h5> STR </h5>
              <p> 4726482464 </p>
              <h6>
                University: University of Texas Southwestern Medical Center.
              </h6>
              <p> Year of Graduation: 2011 </p>

              <Link className="chat" to="/chatRoom">
                <button class="chat-button">
                  Chat with doctor <img src={chat} alt="" />
                </button>
              </Link>
            </div>
          ) : (
            <div className="Location">
              <img src={location} alt="" />
            </div>
          )}
        </React.Fragment>
      ),
    },

    {
      id: 6,
      info: (
        <React.Fragment>
          <img src={D6} alt="..." />
          <h2> Dr. Ashraf Mohamed </h2>
          <p> General | RSUD Gatot Subroto </p>
          <div className="Buttons">
            <div className="btn1">
              <span
                className="about-button"
                onClick={() => setIsAbout("ABOUT")}
              >
                About
              </span>
              <p className="underline"></p>
            </div>
            <div className="btn2">
              <span
                className="location-button"
                onClick={() => setIsAbout("LOCATION")}
              >
                Location
              </span>
              <p className="underline"></p>
            </div>
          </div>
          {isAbout === "ABOUT" ? (
            <div className="About">
              <h5> About me </h5>
              <p>
                Dr. Ashraf Mohamed is Proficient in minimally invasive surgical
                techniques.
              </p>
              <h5> Working Time </h5>
              <p> Monday - Friday, 08.00 AM - 22.00 PM </p>
              <h5> STR </h5>
              <p> 4726482464 </p>
              <h6>University: Duke University School of Medicine</h6>
              <p> Year of Graduation: 2014 </p>

              <Link className="chat" to="/chatRoom">
                <button class="chat-button">
                  Chat with doctor <img src={chat} alt="" />
                </button>
              </Link>
            </div>
          ) : (
            <div className="Location">
              <img src={location} alt="" />
            </div>
          )}
        </React.Fragment>
      ),
    },

    {
      id: 7,
      info: (
        <React.Fragment>
          <img src={D7} alt="..." />
          <h2> Dr. Kamel Mansor </h2>
          <p> General | RSUD Gatot Subroto </p>
          <div className="Buttons">
            <div className="btn1">
              <span
                className="about-button"
                onClick={() => setIsAbout("ABOUT")}
              >
                About
              </span>
              <p className="underline"></p>
            </div>
            <div className="btn2">
              <span
                className="location-button"
                onClick={() => setIsAbout("LOCATION")}
              >
                Location
              </span>
              <p className="underline"></p>
            </div>
          </div>
          {isAbout === "ABOUT" ? (
            <div className="About">
              <h5> About me </h5>
              <p>
                Dr. Kamel Mansor is Proficient in advanced dermatological
                procedures.
              </p>
              <h5> Working Time </h5>
              <p> Monday - Friday, 08.00 AM - 19.00 PM </p>
              <h5> STR </h5>
              <p> 4726482464 </p>
              <h6>
                University: University of California, San Francisco (UCSF)
                School of Medicine
              </h6>
              <p> Year of Graduation: 2011 </p>

              <Link className="chat" to="/chatRoom">
                <button class="chat-button">
                  Chat with doctor <img src={chat} alt="" />
                </button>
              </Link>
            </div>
          ) : (
            <div className="Location">
              <img src={location} alt="" />
            </div>
          )}
        </React.Fragment>
      ),
    },

    {
      id: 8,
      info: (
        <React.Fragment>
          <img src={D8} alt="..." />
          <h2> Dr. Salma Ahmed </h2>
          <p> General | RSUD Gatot Subroto </p>
          <div className="Buttons">
            <div className="btn1">
              <span
                className="about-button"
                onClick={() => setIsAbout("ABOUT")}
              >
                About
              </span>
              <p className="underline"></p>
            </div>
            <div className="btn2">
              <span
                className="location-button"
                onClick={() => setIsAbout("LOCATION")}
              >
                Location
              </span>
              <p className="underline"></p>
            </div>
          </div>
          {isAbout === "ABOUT" ? (
            <div className="About">
              <h5> About me </h5>
              <p>
                Dr. Salma Ahmed is Specializes in neurology with a focus on
                cutting-edge research.
              </p>
              <h5> Working Time </h5>
              <p> Monday - Friday, 06.00 AM - 18.00 PM </p>
              <h5> STR </h5>
              <p> 4726482464 </p>
              <h6>
                University: Columbia University Vagelos College of Physicians
                and Surgeons.
              </h6>
              <p> Year of Graduation: 2009 </p>

              <Link className="chat" to="/chatRoom">
                <button class="chat-button">
                  Chat with doctor <img src={chat} alt="" />
                </button>
              </Link>
            </div>
          ) : (
            <div className="Location">
              <img src={location} alt="" />
            </div>
          )}
        </React.Fragment>
      ),
    },

    {
      id: 8,
      info: (
        <React.Fragment>
          <img src={D8} alt="..." />
          <h2> Dr. Mohamed Ahmed </h2>
          <p> General | RSUD Gatot Subroto </p>
          <div className="Buttons">
            <div className="btn1">
              <span
                className="about-button"
                onClick={() => setIsAbout("ABOUT")}
              >
                About
              </span>
              <p className="underline"></p>
            </div>
            <div className="btn2">
              <span
                className="location-button"
                onClick={() => setIsAbout("LOCATION")}
              >
                Location
              </span>
              <p className="underline"></p>
            </div>
          </div>
          {isAbout === "ABOUT" ? (
            <div className="About">
              <h5> About me </h5>
              <p>
                Dr. Mohamed Ahmed is the top most Immunologists specialist in
                Christ Hospital at London.<br></br>
                She achived several awards for her wonderful contribution in
                medical field.<br></br> She is available for private
                consultation.
              </p>
              <h5> Working Time </h5>
              <p> Monday - Friday, 08.00 AM - 20.00 PM </p>
              <h5> STR </h5>
              <p> 4726482464 </p>
              <h6>
                University: University of Chicago Pritzker School of Medicine.
              </h6>
              <p>Year of Graduation: 2013</p>

              <Link className="chat" to="/chatRoom">
                <button class="chat-button">
                  Chat with doctor <img src={chat} alt="" />
                </button>
              </Link>
            </div>
          ) : (
            <div className="Location">
              <img src={location} alt="" />
            </div>
          )}
        </React.Fragment>
      ),
    },

    {
      id: 9,
      info: (
        <React.Fragment>
          <img src={D9} alt="..." />
          <h2> Dr. Ali Mohamed </h2>
          <p> General | RSUD Gatot Subroto </p>
          <div className="Buttons">
            <div className="btn1">
              <span
                className="about-button"
                onClick={() => setIsAbout("ABOUT")}
              >
                About
              </span>
              <p className="underline"></p>
            </div>
            <div className="btn2">
              <span
                className="location-button"
                onClick={() => setIsAbout("LOCATION")}
              >
                Location
              </span>
              <p className="underline"></p>
            </div>
          </div>
          {isAbout === "ABOUT" ? (
            <div className="About">
              <h5> About me </h5>
              <p>
                Dr. Ali Mohamed is Known for her holistic approach to family
                medicine.
              </p>
              <h5> Working Time </h5>
              <p> Monday - Friday, 08.00 AM - 20.00 PM </p>
              <h5> STR </h5>
              <p> 4726482464 </p>
              <h6> University: Stanford University School of Medicine </h6>
              <p> Year of Graduation: 2010 </p>

              <Link className="chat" to="/chatRoom">
                <button class="chat-button">
                  Chat with doctor <img src={chat} alt="" />
                </button>
              </Link>
            </div>
          ) : (
            <div className="Location">
              <img src={location} alt="" />
            </div>
          )}
        </React.Fragment>
      ),
    },

    {
      id: 10,
      info: (
        <React.Fragment>
          <img src={D10} alt="..." />
          <h2> Dr. Malek Mohamed </h2>
          <p> General | RSUD Gatot Subroto </p>
          <div className="Buttons">
            <div className="btn1">
              <span
                className="about-button"
                onClick={() => setIsAbout("ABOUT")}
              >
                About
              </span>
              <p className="underline"></p>
            </div>
            <div className="btn2">
              <span
                className="location-button"
                onClick={() => setIsAbout("LOCATION")}
              >
                Location
              </span>
              <p className="underline"></p>
            </div>
          </div>
          {isAbout === "ABOUT" ? (
            <div className="About">
              <h5> About me </h5>
              <p>
                Dr. Malek Mohamed is Specializes in neurology with a focus on
                cutting-edge research.
              </p>
              <h5> Working Time </h5>
              <p> Monday - Friday, 08.00 AM - 20.00 PM </p>
              <h5> STR </h5>
              <p> 4726482464 </p>
              <h6>University: Harvard Medical School </h6>
              <p> Year of Graduation: 2005 </p>

              <Link className="chat" to="/chatRoom">
                <button class="chat-button">
                  Chat with doctor <img src={chat} alt="" />
                </button>
              </Link>
            </div>
          ) : (
            <div className="Location">
              <img src={location} alt="" />
            </div>
          )}
        </React.Fragment>
      ),
    },

    {
      id: 11,
      info: (
        <React.Fragment>
          <img src={D11} alt="..." />
          <h2> Dr. kareem Adel </h2>
          <p> General | RSUD Gatot Subroto </p>
          <div className="Buttons">
            <div className="btn1">
              <span
                className="about-button"
                onClick={() => setIsAbout("ABOUT")}
              >
                About
              </span>
              <p className="underline"></p>
            </div>
            <div className="btn2">
              <span
                className="location-button"
                onClick={() => setIsAbout("LOCATION")}
              >
                Location
              </span>
              <p className="underline"></p>
            </div>
          </div>
          {isAbout === "ABOUT" ? (
            <div className="About">
              <h5> About me </h5>
              <p>
                Dr. kareem Adel is Known for her holistic approach to family
                medicine.
              </p>
              <h5> Working Time </h5>
              <p> Monday - Friday, 07.00 AM - 20.00 PM </p>
              <h5> STR </h5>
              <p> 4726482464 </p>
              <h6>
                University: University of Chicago Pritzker School of Medicine
              </h6>
              <p> Year of Graduation: 2013 </p>

              <Link className="chat" to="/chatRoom">
                <button class="chat-button">
                  Chat with doctor <img src={chat} alt="" />
                </button>
              </Link>
            </div>
          ) : (
            <div className="Location">
              <img src={location} alt="" />
            </div>
          )}
        </React.Fragment>
      ),
    },

    {
      id: 12,
      info: (
        <React.Fragment>
          <img src={D12} alt="..." />
          <h2> Dr. Ramy Ali </h2>
          <p> General | RSUD Gatot Subroto </p>
          <div className="Buttons">
            <div className="btn1">
              <span
                className="about-button"
                onClick={() => setIsAbout("ABOUT")}
              >
                About
              </span>
              <p className="underline"></p>
            </div>
            <div className="btn2">
              <span
                className="location-button"
                onClick={() => setIsAbout("LOCATION")}
              >
                Location
              </span>
              <p className="underline"></p>
            </div>
          </div>
          {isAbout === "ABOUT" ? (
            <div className="About">
              <h5> About me </h5>
              <p>
                Dr. Ramy Ali is Proficient in minimally invasive surgical
                techniques.
              </p>
              <h5> Working Time </h5>
              <p> Monday - Friday, 08.00 AM - 20.00 PM </p>
              <h5> STR </h5>
              <p> 4726482464 </p>
              <h6> University: Duke University School of Medicine </h6>
              <p> Year of Graduation: 2014 </p>

              <Link className="chat" to="/chatRoom">
                <button class="chat-button">
                  Chat with doctor <img src={chat} alt="" />
                </button>
              </Link>
            </div>
          ) : (
            <div className="Location">
              <img src={location} alt="" />
            </div>
          )}
        </React.Fragment>
      ),
    },
  ];
  const [currentDoctor, setCurrentDoctor] = useState(0);

  return (
    <>
      <div className="content">
        
        <Sidebar />
        <Navbar />

        <div class="image">
          <h3> Recommendation Doctors </h3>
          <div class="img">
            <span className="D1" onClick={() => setCurrentDoctor(1)}>
              <img src={D1} alt="..." />
            </span>
            <span className="D1" onClick={() => setCurrentDoctor(2)}>
              <img src={D2} alt="..." />
            </span>
            <span className="D1" onClick={() => setCurrentDoctor(3)}>
              <img src={D3} alt="..." />
            </span>
            <br></br>
            <span className="D1" onClick={() => setCurrentDoctor(4)}>
              <img src={D4} alt="..." />
            </span>
            <span className="D1" onClick={() => setCurrentDoctor(5)}>
              <img src={D5} alt="..." />
            </span>
            <span className="D1" onClick={() => setCurrentDoctor(6)}>
              <img src={D6} alt="..." />
            </span>
            <br></br>
            <span className="D1" onClick={() => setCurrentDoctor(7)}>
              <img src={D7} alt="..." />
            </span>
            <span className="D1" onClick={() => setCurrentDoctor(8)}>
              <img src={D8} alt="..." />
            </span>
            <span className="D1" onClick={() => setCurrentDoctor(9)}>
              <img src={D9} alt="..." />
            </span>
            <br></br>
            <span className="D1" onClick={() => setCurrentDoctor(10)}>
              <img src={D10} alt="..." />
            </span>
            <span className="D1" onClick={() => setCurrentDoctor(11)}>
              <img src={D11} alt="..." />
            </span>
            <span className="D1" onClick={() => setCurrentDoctor(12)}>
              <img src={D12} alt="..." />
            </span>
            <br></br>
          </div>
        </div>
        <div className="Doctors">
          {doctorList.find((item) => item.id === currentDoctor)?.info}
        </div>
      </div>
    </>
  );
}

export default RecDoc;
